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
        /// The dictionary-based rule this automaton was created with, if any.
        /// </summary>
        public readonly Action<
            CellularAutomataCell<T>,
            Dictionary<Vector<int>, CellularAutomataCell<T>>,
            CellularAutomata<T>
        >? Rules;

        public readonly CellularAutomataRule<T> Rule;

        public readonly CellularAutomataGrid<T> Grid;

        public readonly CellularAutomataNeighborhood<T> Neighborhood;

        public CellularAutomataConfiguration<T> Configuration { get; }

        /// <summary>
        /// Number of completed steps.
        /// </summary>
        public long Generation { get; private set; }

        /// <summary>
        /// Number of cells that will be evaluated on the next step.
        /// </summary>
        public int ActiveCellCount =>
            Configuration.UpdateMode == CellularAutomataUpdateMode.AllCells
                ? Grid.CellCount
                : _active.Count;

        public IReadOnlyList<CellularAutomataGrid<T>> GridHistory => _gridHistory;

        private readonly List<CellularAutomataGrid<T>> _gridHistory =
            new List<CellularAutomataGrid<T>>();

        // Topology, computed once: _neighborTable[cell * K + k] is the index of the cell at
        // NeighborLocations[k] relative to `cell` (after wrapping), or -1 if out of bounds.
        // _dependents is the reverse mapping (cells that have `cell` as a neighbor) in CSR form.
        private readonly Vector<int>[] _locations;
        private readonly int[] _neighborTable;
        private readonly int[] _presentCounts;
        private readonly int[] _dependentStarts;
        private readonly int[] _dependents;

        // Cells that can change on the next step (ActiveCells mode only).
        private List<int> _active = new List<int>();
        private List<int> _nextActive = new List<int>();
        private readonly List<int> _changed = new List<int>();
        private readonly int[] _activeStamp;
        private int _stamp;

        public CellularAutomata(
            CellularAutomataConfiguration<T> configuration,
            CellularAutomataNeighborhood<T> neighborhood,
            Action<
                CellularAutomataCell<T>,
                Dictionary<Vector<int>, CellularAutomataCell<T>>,
                CellularAutomata<T>
            > rules
        )
            : this(configuration, neighborhood, AdaptDictionaryRule(rules))
        {
            Rules = rules;
        }

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
            _locations = (Vector<int>[])neighborhood.NeighborLocations.Clone();
            _activeStamp = new int[Grid.CellCount];
            (_neighborTable, _presentCounts, _dependentStarts, _dependents) = BuildTopology(
                Grid,
                _locations
            );
        }

        /// <summary>
        /// Sets the given cells' states. Can be called again later to edit the grid between steps.
        /// </summary>
        public void InitializeGrid(Dictionary<Vector<int>, T> stateMap)
        {
            foreach (var kvp in stateMap)
            {
                var cell =
                    Grid.GetCell(kvp.Key)
                    ?? throw new ArgumentException($"Position {kvp.Key} is out of bounds for the grid.");
                cell.SetState(kvp.Value);
                MarkActive(cell.Index);
            }
            CommitStates();
        }

        /// <summary>
        /// Sets every cell's state from a flat span (first dimension varies fastest).
        /// </summary>
        public void InitializeGrid(ReadOnlySpan<T> states)
        {
            if (states.Length != Grid.CellCount)
            {
                throw new ArgumentException(
                    $"Expected {Grid.CellCount} states but got {states.Length}.",
                    nameof(states)
                );
            }
            var cells = Grid.CellArray;
            for (int i = 0; i < cells.Length; i++)
            {
                cells[i].SetState(states[i]);
            }
            CommitStates();
        }

        public CellularAutomataGrid<T> Step()
        {
            var cells = Grid.CellArray;
            int k = _locations.Length;
            if (Configuration.UpdateMode == CellularAutomataUpdateMode.AllCells)
            {
                for (int i = 0; i < cells.Length; i++)
                {
                    Rule(
                        cells[i],
                        new CellularAutomataNeighbors<T>(cells, _neighborTable, i * k, _locations, _presentCounts[i]),
                        this
                    );
                }
            }
            else
            {
                foreach (int i in _active)
                {
                    Rule(
                        cells[i],
                        new CellularAutomataNeighbors<T>(cells, _neighborTable, i * k, _locations, _presentCounts[i]),
                        this
                    );
                }
            }
            _active.Clear();
            CommitStates();
            Generation++;

            if (Configuration.KeepAnyGridStates)
            {
                _gridHistory.Add(Grid.Copy());
                if (
                    !Configuration.KeepAllGridStates
                    && _gridHistory.Count > Configuration.GridStatesMemoryLimit
                )
                {
                    _gridHistory.RemoveAt(0);
                }
            }
            else if (Configuration.KeepAllGridStates)
            {
                throw new InvalidOperationException(
                    "KeepAllStates is true but KeepAnyStates is false. Please ensure KeepAnyStates is true if KeepAllStates is true."
                );
            }
            return Grid;
        }

        /// <summary>
        /// Commits pending states and schedules every changed cell, and every cell that depends
        /// on a changed cell, for evaluation on the next step.
        /// </summary>
        private void CommitStates()
        {
            _changed.Clear();
            Grid.UpdateGridStates(_changed, Configuration.CellStateHistoryLimit);
            if (Configuration.UpdateMode == CellularAutomataUpdateMode.AllCells)
            {
                return;
            }
            // Anything still pending (e.g. from an earlier InitializeGrid call) stays scheduled.
            foreach (int index in _active)
            {
                AddActive(index);
            }
            foreach (int index in _changed)
            {
                MarkActive(index);
            }
            (_active, _nextActive) = (_nextActive, _active);
            _nextActive.Clear();
            _stamp++;
        }

        private void MarkActive(int index)
        {
            if (Configuration.UpdateMode == CellularAutomataUpdateMode.AllCells)
            {
                return;
            }
            AddActive(index);
            for (int d = _dependentStarts[index]; d < _dependentStarts[index + 1]; d++)
            {
                AddActive(_dependents[d]);
            }
        }

        private void AddActive(int index)
        {
            // _stamp + 1 identifies the set being built for the next step.
            int stamp = _stamp + 1;
            if (_activeStamp[index] != stamp)
            {
                _activeStamp[index] = stamp;
                _nextActive.Add(index);
            }
        }

        private static (int[] table, int[] present, int[] depStarts, int[] deps) BuildTopology(
            CellularAutomataGrid<T> grid,
            Vector<int>[] locations
        )
        {
            int count = grid.CellCount;
            int k = locations.Length;
            int[] table = new int[checked(count * k)];
            int[] present = new int[count];
            int[] depCounts = new int[count + 1];
            var cells = grid.CellArray;
            for (int i = 0; i < count; i++)
            {
                Vector<int> position = cells[i].Position;
                for (int n = 0; n < k; n++)
                {
                    int neighbor = CellularAutomataNeighborhood<T>.TryResolve(
                        position + locations[n],
                        grid.Dimensions,
                        out var resolved
                    )
                        ? grid.GetIndex(resolved)
                        : -1;
                    table[i * k + n] = neighbor;
                    if (neighbor >= 0)
                    {
                        present[i]++;
                        depCounts[neighbor + 1]++;
                    }
                }
            }
            for (int i = 0; i < count; i++)
            {
                depCounts[i + 1] += depCounts[i];
            }
            int[] starts = (int[])depCounts.Clone();
            int[] deps = new int[depCounts[count]];
            int[] cursor = depCounts;
            for (int i = 0; i < count; i++)
            {
                for (int n = 0; n < k; n++)
                {
                    int neighbor = table[i * k + n];
                    if (neighbor >= 0)
                    {
                        deps[cursor[neighbor]++] = i;
                    }
                }
            }
            return (table, present, starts, deps);
        }

        private static CellularAutomataRule<T> AdaptDictionaryRule(
            Action<
                CellularAutomataCell<T>,
                Dictionary<Vector<int>, CellularAutomataCell<T>>,
                CellularAutomata<T>
            > rules
        )
        {
            ArgumentNullException.ThrowIfNull(rules);
            return (cell, neighbors, automata) =>
            {
                cell.Neighbors.Clear();
                neighbors.CopyTo(cell.Neighbors);
                rules(cell, cell.Neighbors, automata);
            };
        }
    }
}
