using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Numerics;
using System.Text;

namespace CellularAutomata.NET
{
    public class CellularAutomataGrid<T>
        where T : notnull
    {
        public readonly CellularAutomataDimension[] Dimensions;

        /// <summary>
        /// All cells in row-major order: dimension 0 varies fastest, then dimension 1, and so on.
        /// Use <see cref="GetIndex"/> and <see cref="GetPosition"/> to convert between indices and positions.
        /// </summary>
        public readonly CellularAutomataCell<T>[] Cells;

        /// <summary>
        /// Index stride of each dimension within <see cref="Cells"/>.
        /// </summary>
        public readonly int[] Strides;

        private ImmutableDictionary<Vector<int>, CellularAutomataCell<T>>? _state;

        /// <summary>
        /// Cells keyed by position. Built lazily from <see cref="Cells"/> on first access.
        /// </summary>
        public ImmutableDictionary<Vector<int>, CellularAutomataCell<T>> State =>
            _state ??= CreateStateDictionary(Cells);

        public CellularAutomataGrid(CellularAutomataDimension[] dimensions, T defaultState)
        {
            Dimensions = dimensions;
            Strides = CreateStrides(dimensions);
            Cells = new CellularAutomataCell<T>[Strides[^1] * dimensions[^1].Cells];
            for (int i = 0; i < Cells.Length; i++)
            {
                Cells[i] = new CellularAutomataCell<T>(defaultState)
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
            Strides = CreateStrides(dimensions);
            Cells = new CellularAutomataCell<T>[Strides[^1] * dimensions[^1].Cells];
            foreach (var kvp in existingState)
            {
                int index = GetIndex(kvp.Key);
                Cells[index] = new CellularAutomataCell<T>(kvp.Value.State)
                {
                    Position = kvp.Key,
                    Index = index,
                };
            }
        }

        private CellularAutomataGrid(CellularAutomataGrid<T> source)
        {
            Dimensions = source.Dimensions;
            Strides = source.Strides;
            Cells = new CellularAutomataCell<T>[source.Cells.Length];
            for (int i = 0; i < Cells.Length; i++)
            {
                CellularAutomataCell<T> cell = source.Cells[i];
                Cells[i] = new CellularAutomataCell<T>(cell.State)
                {
                    Position = cell.Position,
                    Index = i,
                };
            }
        }

        public T GetCellValue(Vector<int> position)
        {
            return Cells[GetIndex(position)].State;
        }

        public void SetCellValue(T value, Vector<int> position)
        {
            Cells[GetIndex(position)].SetState(value);
        }

        public CellularAutomataCell<T>? GetCell(Vector<int> position)
        {
            if (AutomataVector.IsInBounds(position, Dimensions))
            {
                return Cells[GetIndex(position)];
            }
            return null;
        }

        /// <summary>
        /// Converts an in-bounds position to its index in <see cref="Cells"/>.
        /// </summary>
        public int GetIndex(Vector<int> position)
        {
            if (!AutomataVector.IsInBounds(position, Dimensions))
            {
                throw new ArgumentOutOfRangeException(
                    nameof(position),
                    $"Position {position} is out of bounds for the grid."
                );
            }
            int index = 0;
            for (int d = 0; d < Dimensions.Length; d++)
            {
                index += position.GetElement(d) * Strides[d];
            }
            return index;
        }

        public Vector<int> GetPosition(int index)
        {
            Span<int> values = stackalloc int[AutomataVector.SIMD_SIZE];
            for (int d = 0; d < Dimensions.Length; d++)
            {
                values[d] = index % Dimensions[d].Cells;
                index /= Dimensions[d].Cells;
            }
            return new Vector<int>(values);
        }

        /// <summary>
        /// Copies the current state into a new grid. Positions are preserved; neighbors,
        /// pending states and state history are not.
        /// </summary>
        public CellularAutomataGrid<T> Copy()
        {
            return new CellularAutomataGrid<T>(this);
        }

        /// <summary>
        /// Note that this will flatten the output into a single line string, in <see cref="Cells"/> order.
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            foreach (var cell in Cells)
            {
                sb.Append(cell.State.ToString());
            }
            return sb.ToString();
        }

        private static int[] CreateStrides(CellularAutomataDimension[] dimensions)
        {
            if (dimensions == null || dimensions.Length == 0)
            {
                throw new ArgumentException("Dimensions must be greater than zero.");
            }
            if (dimensions.Length > AutomataVector.SIMD_SIZE)
            {
                throw new ArgumentException(
                    $"{dimensions.Length} dimensions exceeds the maximum of {AutomataVector.SIMD_SIZE} (Vector<int>.Count) on this platform."
                );
            }
            int[] strides = new int[dimensions.Length];
            long stride = 1;
            for (int d = 0; d < dimensions.Length; d++)
            {
                if (dimensions[d].Cells <= 0)
                {
                    throw new ArgumentException($"Dimension {d} must have at least one cell.");
                }
                strides[d] = (int)stride;
                stride *= dimensions[d].Cells;
                if (stride > Array.MaxLength)
                {
                    throw new ArgumentException("Grid has too many cells.");
                }
            }
            return strides;
        }

        private static ImmutableDictionary<Vector<int>, CellularAutomataCell<T>> CreateStateDictionary(
            CellularAutomataCell<T>[] cells
        )
        {
            var state = ImmutableDictionary.CreateBuilder<Vector<int>, CellularAutomataCell<T>>();
            foreach (var cell in cells)
            {
                state.Add(cell.Position, cell);
            }
            return state.ToImmutable();
        }
    }
}
