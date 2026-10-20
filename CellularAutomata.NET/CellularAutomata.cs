using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using System.Text;

namespace CellularAutomata.NET
{
    public class CellularAutomata<T>
        where T : notnull
    {
        /// <summary>
        /// The dictionary-based rule this automaton was created with, or null if it was created
        /// with a <see cref="CellularAutomataRule{T}"/>.
        /// </summary>
        public readonly Action<
            CellularAutomataCell<T>,
            Dictionary<Vector<int>, CellularAutomataCell<T>>,
            CellularAutomata<T>
        >? Rules;

        public readonly CellularAutomataRule<T> Rule;

        public readonly CellularAutomataConfiguration<T> Configuration;

        public readonly CellularAutomataGrid<T> Grid;

        public readonly CellularAutomataNeighborhood<T> Neighborhood;

        /// <summary>
        /// Number of completed steps.
        /// </summary>
        public int Generation { get; private set; }

        /// <summary>
        /// Number of cells the rule was evaluated for in the last step.
        /// </summary>
        public int LastEvaluatedCount { get; private set; }

        /// <summary>
        /// Number of cells whose state changed in the last step.
        /// </summary>
        public int LastChangedCount { get; private set; }

        private readonly List<CellularAutomataGrid<T>> GridHistory =
            new List<CellularAutomataGrid<T>>();

        // Snapshot of the neighborhood offsets; slot i of every cell uses _offsets[i].
        private readonly Vector<int>[] _offsets;

        // _neighborTable[cell * _offsets.Length + slot] = neighbor index or -1.
        private readonly int[] _neighborTable;

        // Reverse of _neighborTable in CSR form: the cells that have cell i as a neighbor are
        // _dependents[_dependentStart[i] .. _dependentStart[i + 1]].
        private readonly int[] _dependentStart;
        private readonly int[] _dependents;

        // Cells to evaluate next step. Only cells that changed, or have a neighbor that changed,
        // can change, so everything else is skipped (unless a full pass is pending).
        private int[] _active;
        private int _activeCount;
        private int[] _next;
        private readonly int[] _changed;
        private readonly int[] _queuedAt;
        private int _queueStamp;
        private bool _fullPassPending = true;

        public CellularAutomata(
            CellularAutomataConfiguration<T> configuration,
            CellularAutomataNeighborhood<T> neighborhood,
            CellularAutomataRule<T> rule
        )
        {
            Configuration = configuration;
            Neighborhood = neighborhood;
            Rule = rule;
            Grid = new CellularAutomataGrid<T>(configuration.Dimensions, configuration.DefaultState);
            _offsets = (Vector<int>[])neighborhood.NeighborLocations.Clone();
            _neighborTable = neighborhood.BuildNeighborTable(Grid);

            int cellCount = Grid.Cells.Length;
            _dependentStart = new int[cellCount + 1];
            int validLinks = 0;
            foreach (int neighbor in _neighborTable)
            {
                if (neighbor >= 0)
                {
                    _dependentStart[neighbor + 1]++;
                    validLinks++;
                }
            }
            for (int i = 0; i < cellCount; i++)
            {
                _dependentStart[i + 1] += _dependentStart[i];
            }
            _dependents = new int[validLinks];
            int[] fill = new int[cellCount];
            for (int i = 0; i < _neighborTable.Length; i++)
            {
                int neighbor = _neighborTable[i];
                if (neighbor >= 0)
                {
                    _dependents[_dependentStart[neighbor] + fill[neighbor]++] = i / _offsets.Length;
                }
            }

            _active = new int[cellCount];
            _next = new int[cellCount];
            _changed = new int[cellCount];
            _queuedAt = new int[cellCount];
        }

        /// <summary>
        /// Creates an automaton with a dictionary-based rule. Each cell's neighbor dictionary
        /// (keyed by relative position) is built on first use and reused afterwards.
        /// </summary>
        public CellularAutomata(
            CellularAutomataConfiguration<T> configuration,
            CellularAutomataNeighborhood<T> neighborhood,
            Action<
                CellularAutomataCell<T>,
                Dictionary<Vector<int>, CellularAutomataCell<T>>,
                CellularAutomata<T>
            > rules
        )
            : this(configuration, neighborhood, CreateDictionaryRule(rules))
        {
            Rules = rules;
        }

        private static CellularAutomataRule<T> CreateDictionaryRule(
            Action<
                CellularAutomataCell<T>,
                Dictionary<Vector<int>, CellularAutomataCell<T>>,
                CellularAutomata<T>
            > rules
        )
        {
            return (cell, neighbors, automata) =>
            {
                if (!cell.NeighborsBuilt)
                {
                    cell.Neighbors.Clear();
                    for (int slot = 0; slot < neighbors.Length; slot++)
                    {
                        CellularAutomataCell<T>? neighbor = neighbors[slot];
                        if (neighbor != null)
                        {
                            cell.Neighbors[neighbors.Offsets[slot]] = neighbor;
                        }
                    }
                    cell.NeighborsBuilt = true;
                }
                rules(cell, cell.Neighbors, automata);
            };
        }

        /// <summary>
        /// Gets the neighbors of the cell at <paramref name="index"/> in <see cref="CellularAutomataGrid{T}.Cells"/>.
        /// </summary>
        public CellularAutomataNeighbors<T> GetNeighbors(int index)
        {
            return new CellularAutomataNeighbors<T>(Grid.Cells, _neighborTable, index, _offsets);
        }

        /// <summary>
        /// Sets the state of the given cells. Other cells keep their current state.
        /// </summary>
        public void InitializeGrid(Dictionary<Vector<int>, T> stateMap)
        {
            foreach (var kvp in stateMap)
            {
                if (!AutomataVector.IsInBounds(kvp.Key, Grid.Dimensions))
                {
                    throw new ArgumentException($"Position {kvp.Key} is out of bounds for the grid.");
                }
            }
            foreach (var kvp in stateMap)
            {
                CellularAutomataCell<T> cell = Grid.Cells[Grid.GetIndex(kvp.Key)];
                cell.SetState(kvp.Value);
                cell.UpdateState();
            }
            _fullPassPending = true;
        }

        /// <summary>
        /// Sets the state of every cell, in <see cref="CellularAutomataGrid{T}.Cells"/> order.
        /// </summary>
        public void InitializeGrid(ReadOnlySpan<T> states)
        {
            if (states.Length != Grid.Cells.Length)
            {
                throw new ArgumentException(
                    $"Expected {Grid.Cells.Length} states but got {states.Length}."
                );
            }
            for (int i = 0; i < states.Length; i++)
            {
                Grid.Cells[i].SetState(states[i]);
                Grid.Cells[i].UpdateState();
            }
            _fullPassPending = true;
        }

        public CellularAutomataGrid<T> Step()
        {
            if (Configuration.KeepAllGridStates && !Configuration.KeepAnyGridStates)
            {
                throw new InvalidOperationException(
                    "KeepAllStates is true but KeepAnyStates is false. Please ensure KeepAnyStates is true if KeepAllStates is true."
                );
            }
            CellularAutomataCell<T>[] cells = Grid.Cells;
            if (_fullPassPending || Configuration.ProcessAllCells)
            {
                for (int i = 0; i < cells.Length; i++)
                {
                    _active[i] = i;
                }
                _activeCount = cells.Length;
                _fullPassPending = false;
            }

            // Evaluate every active cell against the current states.
            for (int i = 0; i < _activeCount; i++)
            {
                int index = _active[i];
                CellularAutomataCell<T> cell = cells[index];
                RecordHistory(cell);
                Rule(cell, new CellularAutomataNeighbors<T>(cells, _neighborTable, index, _offsets), this);
            }

            // Commit the new states.
            int changedCount = 0;
            for (int i = 0; i < _activeCount; i++)
            {
                CellularAutomataCell<T> cell = cells[_active[i]];
                if (cell.StateChanged)
                {
                    _changed[changedCount++] = cell.Index;
                    cell.UpdateState();
                }
            }

            // Next step evaluates the changed cells and every cell that has one as a neighbor.
            LastEvaluatedCount = _activeCount;
            LastChangedCount = changedCount;
            _queueStamp++;
            int nextCount = 0;
            for (int i = 0; i < changedCount; i++)
            {
                int index = _changed[i];
                if (_queuedAt[index] != _queueStamp)
                {
                    _queuedAt[index] = _queueStamp;
                    _next[nextCount++] = index;
                }
                for (int d = _dependentStart[index]; d < _dependentStart[index + 1]; d++)
                {
                    int dependent = _dependents[d];
                    if (_queuedAt[dependent] != _queueStamp)
                    {
                        _queuedAt[dependent] = _queueStamp;
                        _next[nextCount++] = dependent;
                    }
                }
            }
            (_active, _next) = (_next, _active);
            _activeCount = nextCount;
            Generation++;

            if (Configuration.KeepAnyGridStates)
            {
                GridHistory.Add(Grid.Copy());
                if (
                    !Configuration.KeepAllGridStates
                    && GridHistory.Count > Configuration.GridStatesMemoryLimit
                )
                {
                    GridHistory.RemoveAt(0);
                }
            }
            return Grid;
        }

        private void RecordHistory(CellularAutomataCell<T> cell)
        {
            int limit = Configuration.CellStateHistoryLimit;
            if (limit == 0)
            {
                return;
            }
            cell.StateHistory.Add(cell.State);
            if (limit > 0 && cell.StateHistory.Count > limit)
            {
                cell.StateHistory.RemoveAt(0);
            }
        }
    }
}
