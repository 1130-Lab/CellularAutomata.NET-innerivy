using System;
using System.Collections.Generic;
using System.Numerics;

namespace CellularAutomata.NET
{
    /// <summary>
    /// A rule applied to every evaluated cell each step. Call <see cref="CellularAutomataCell{T}.SetState"/>
    /// to change the cell's state; the change is committed after every cell has been evaluated.
    /// </summary>
    public delegate void CellularAutomataRule<T>(
        CellularAutomataCell<T> cell,
        CellularAutomataNeighbors<T> neighbors,
        CellularAutomata<T> automata
    )
        where T : notnull;

    /// <summary>
    /// Allocation-free view of a cell's neighbors, in the order of
    /// <see cref="CellularAutomataNeighborhood{T}.NeighborLocations"/>. Neighbors that fall
    /// outside a non-wrapping edge are null.
    /// </summary>
    public readonly struct CellularAutomataNeighbors<T>
        where T : notnull
    {
        private readonly CellularAutomataCell<T>[] _cells;
        private readonly int[] _table;
        private readonly int _start;
        private readonly Vector<int>[] _locations;

        internal CellularAutomataNeighbors(
            CellularAutomataCell<T>[] cells,
            int[] table,
            int start,
            Vector<int>[] locations,
            int presentCount
        )
        {
            _cells = cells;
            _table = table;
            _start = start;
            _locations = locations;
            PresentCount = presentCount;
        }

        /// <summary>
        /// Number of neighbor locations (including ones that are out of bounds).
        /// </summary>
        public int Length => _locations.Length;

        /// <summary>
        /// Number of neighbors that are inside the grid.
        /// </summary>
        public int PresentCount { get; }

        public CellularAutomataCell<T>? this[int index]
        {
            get
            {
                int cellIndex = _table[_start + index];
                return cellIndex < 0 ? null : _cells[cellIndex];
            }
        }

        public Vector<int> GetLocation(int index) => _locations[index];

        /// <summary>
        /// The neighbor's state, or <paramref name="missing"/> if the neighbor is out of bounds.
        /// </summary>
        public T GetState(int index, T missing)
        {
            int cellIndex = _table[_start + index];
            return cellIndex < 0 ? missing : _cells[cellIndex].State;
        }

        public void CopyTo(Dictionary<Vector<int>, CellularAutomataCell<T>> destination)
        {
            for (int i = 0; i < _locations.Length; i++)
            {
                int cellIndex = _table[_start + i];
                if (cellIndex >= 0)
                {
                    destination[_locations[i]] = _cells[cellIndex];
                }
            }
        }
    }
}
