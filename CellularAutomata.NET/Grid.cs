using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using System.Text;

namespace CellularAutomata.NET
{
    /// <summary>
    /// An N-dimensional grid of cells. Cells are stored in a flat array where the first
    /// dimension varies fastest: index = x + y * size[0] + z * size[0] * size[1] + ...
    /// </summary>
    public class CellularAutomataGrid<T>
        where T : notnull
    {
        public readonly CellularAutomataDimension[] Dimensions;

        private readonly CellularAutomataCell<T>[] _cells;
        private readonly int[] _sizes;
        private readonly int[] _strides;
        private ImmutableDictionary<Vector<int>, CellularAutomataCell<T>>? _state;

        /// <summary>
        /// All cells keyed by position. Built on first access; the values are the same cell
        /// objects as <see cref="Cells"/>.
        /// </summary>
        public ImmutableDictionary<Vector<int>, CellularAutomataCell<T>> State =>
            _state ??= BuildStateDictionary();

        /// <summary>
        /// All cells in flat order (first dimension varies fastest).
        /// </summary>
        public IReadOnlyList<CellularAutomataCell<T>> Cells => _cells;

        public int CellCount => _cells.Length;

        internal CellularAutomataCell<T>[] CellArray => _cells;

        public CellularAutomataGrid(CellularAutomataDimension[] dimensions, T defaultState)
        {
            Dimensions = dimensions;
            (_sizes, _strides, int count) = ComputeLayout(dimensions);
            _cells = new CellularAutomataCell<T>[count];
            for (int i = 0; i < count; i++)
            {
                _cells[i] = new CellularAutomataCell<T>(defaultState)
                {
                    Position = GetPosition(i),
                    Index = i,
                };
            }
        }

        public CellularAutomataGrid(
            CellularAutomataDimension[] dimensions,
            ImmutableDictionary<Vector<int>, CellularAutomataCell<T>> existingState
        )
        {
            Dimensions = dimensions;
            (_sizes, _strides, int count) = ComputeLayout(dimensions);
            if (existingState.Count != count)
            {
                throw new ArgumentException(
                    $"Existing state has {existingState.Count} cells but the dimensions require {count}."
                );
            }
            _cells = new CellularAutomataCell<T>[count];
            foreach (var kvp in existingState)
            {
                int index = GetIndex(kvp.Key);
                if (index < 0)
                {
                    throw new ArgumentException($"Position {kvp.Key} is out of bounds for the grid.");
                }
                _cells[index] = new CellularAutomataCell<T>(kvp.Value.State)
                {
                    Position = kvp.Key,
                    Index = index,
                };
            }
        }

        private CellularAutomataGrid(
            CellularAutomataDimension[] dimensions,
            CellularAutomataCell<T>[] cells,
            int[] sizes,
            int[] strides
        )
        {
            Dimensions = dimensions;
            _cells = cells;
            _sizes = sizes;
            _strides = strides;
        }

        public T GetCellValue(Vector<int> position)
        {
            return (GetCell(position) ?? throw new KeyNotFoundException($"Position {position} is out of bounds.")).State;
        }

        public void SetCellValue(T value, Vector<int> position)
        {
            (GetCell(position) ?? throw new KeyNotFoundException($"Position {position} is out of bounds.")).SetState(value);
        }

        public CellularAutomataCell<T>? GetCell(Vector<int> position)
        {
            int index = GetIndex(position);
            return index < 0 ? null : _cells[index];
        }

        public CellularAutomataCell<T> GetCell(int index)
        {
            return _cells[index];
        }

        /// <summary>
        /// Flat index of a position, or -1 if it is out of bounds.
        /// </summary>
        public int GetIndex(Vector<int> position)
        {
            int index = 0;
            for (int d = 0; d < _sizes.Length; d++)
            {
                int value = position[d];
                if (value < 0 || value >= _sizes[d])
                {
                    return -1;
                }
                index += value * _strides[d];
            }
            return index;
        }

        public Vector<int> GetPosition(int index)
        {
            Span<int> values = stackalloc int[AutomataVector.SIMD_SIZE];
            values.Clear();
            for (int d = 0; d < _sizes.Length; d++)
            {
                values[d] = index % _sizes[d];
                index /= _sizes[d];
            }
            return new Vector<int>(values);
        }

        /// <summary>
        /// Copies every cell's state into <paramref name="destination"/> in flat order.
        /// </summary>
        public void CopyStatesTo(Span<T> destination)
        {
            if (destination.Length < _cells.Length)
            {
                throw new ArgumentException("Destination is smaller than the grid.", nameof(destination));
            }
            for (int i = 0; i < _cells.Length; i++)
            {
                destination[i] = _cells[i].State;
            }
        }

        /// <summary>
        /// Commits pending states. Changed cell indices are appended to <paramref name="changed"/> if provided.
        /// </summary>
        internal void UpdateGridStates(List<int>? changed = null, int historyLimit = 0)
        {
            for (int i = 0; i < _cells.Length; i++)
            {
                var cell = _cells[i];
                if (historyLimit > 0)
                {
                    if (cell.StateHistory.Count >= historyLimit)
                    {
                        cell.StateHistory.RemoveRange(0, cell.StateHistory.Count - historyLimit + 1);
                    }
                    cell.StateHistory.Add(cell.State);
                }
                if (cell.UpdateState())
                {
                    changed?.Add(i);
                }
            }
        }

        /// <summary>
        /// Snapshot of the grid. Cells keep their positions and states but are detached from
        /// any automaton (no neighbors or history).
        /// </summary>
        public CellularAutomataGrid<T> Copy()
        {
            var cells = new CellularAutomataCell<T>[_cells.Length];
            for (int i = 0; i < cells.Length; i++)
            {
                cells[i] = _cells[i].CloneDetached();
            }
            return new CellularAutomataGrid<T>(Dimensions, cells, _sizes, _strides);
        }

        /// <summary>
        /// Note that this will flatten the output into a single line string (first dimension varies fastest).
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            foreach (var cell in _cells)
            {
                sb.Append(cell.State.ToString());
            }
            return sb.ToString();
        }

        private ImmutableDictionary<Vector<int>, CellularAutomataCell<T>> BuildStateDictionary()
        {
            var state = ImmutableDictionary.CreateBuilder<Vector<int>, CellularAutomataCell<T>>();
            foreach (var cell in _cells)
            {
                state.Add(cell.Position, cell);
            }
            return state.ToImmutable();
        }

        private static (int[] sizes, int[] strides, int count) ComputeLayout(
            CellularAutomataDimension[] dimensions
        )
        {
            if (dimensions == null || dimensions.Length == 0)
            {
                throw new ArgumentException("Dimensions must be greater than zero.");
            }
            if (dimensions.Length > AutomataVector.SIMD_SIZE)
            {
                throw new ArgumentException(
                    $"{dimensions.Length} dimensions exceeds the SIMD vector size {AutomataVector.SIMD_SIZE}."
                );
            }
            int[] sizes = new int[dimensions.Length];
            int[] strides = new int[dimensions.Length];
            long count = 1;
            for (int d = 0; d < dimensions.Length; d++)
            {
                if (dimensions[d].Cells <= 0)
                {
                    throw new ArgumentException($"Dimension {d} must have at least one cell.");
                }
                sizes[d] = dimensions[d].Cells;
                strides[d] = (int)count;
                count *= dimensions[d].Cells;
                if (count > Array.MaxLength)
                {
                    throw new ArgumentException("Grid is too large.");
                }
            }
            return (sizes, strides, (int)count);
        }
    }
}
