using System;
using System.Collections.Generic;
using System.Numerics;

namespace CellularAutomata.NET
{
    /// <summary>
    /// Rule applied to each cell each step. Call <see cref="CellularAutomataCell{T}.SetState"/> on
    /// <paramref name="cell"/> to change its next state.
    /// </summary>
    public delegate void CellularAutomataRule<T>(
        CellularAutomataCell<T> cell,
        CellularAutomataNeighbors<T> neighbors,
        CellularAutomata<T> automata
    )
        where T : notnull;

    /// <summary>
    /// Allocation-free view of a cell's neighbors. Slot <c>i</c> corresponds to
    /// <see cref="CellularAutomataNeighborhood{T}.NeighborLocations"/>[i]; slots that fall outside
    /// the grid (after wrapping) are null.
    /// </summary>
    public readonly struct CellularAutomataNeighbors<T>
        where T : notnull
    {
        private readonly CellularAutomataCell<T>[] _cells;
        private readonly int[] _table;
        private readonly int _start;

        /// <summary>
        /// Relative positions of each slot.
        /// </summary>
        public readonly Vector<int>[] Offsets;

        internal CellularAutomataNeighbors(
            CellularAutomataCell<T>[] cells,
            int[] table,
            int cellIndex,
            Vector<int>[] offsets
        )
        {
            _cells = cells;
            _table = table;
            _start = cellIndex * offsets.Length;
            Offsets = offsets;
        }

        /// <summary>
        /// Number of slots, including out-of-bounds ones.
        /// </summary>
        public int Length => Offsets.Length;

        /// <summary>
        /// Number of neighbors that exist (are inside the grid).
        /// </summary>
        public int Count
        {
            get
            {
                int count = 0;
                for (int i = 0; i < Offsets.Length; i++)
                {
                    if (_table[_start + i] >= 0)
                    {
                        count++;
                    }
                }
                return count;
            }
        }

        public CellularAutomataCell<T>? this[int slot]
        {
            get
            {
                int index = _table[_start + slot];
                return index >= 0 ? _cells[index] : null;
            }
        }

        /// <summary>
        /// State of the neighbor in <paramref name="slot"/>, or <paramref name="fallback"/> if it doesn't exist.
        /// </summary>
        public T StateOrDefault(int slot, T fallback)
        {
            int index = _table[_start + slot];
            return index >= 0 ? _cells[index].State : fallback;
        }

        public Enumerator GetEnumerator() => new Enumerator(this);

        /// <summary>
        /// Enumerates the neighbors that exist.
        /// </summary>
        public struct Enumerator
        {
            private readonly CellularAutomataNeighbors<T> _neighbors;
            private int _slot;

            internal Enumerator(CellularAutomataNeighbors<T> neighbors)
            {
                _neighbors = neighbors;
                _slot = -1;
            }

            public readonly CellularAutomataCell<T> Current =>
                _neighbors._cells[_neighbors._table[_neighbors._start + _slot]];

            public bool MoveNext()
            {
                while (++_slot < _neighbors.Offsets.Length)
                {
                    if (_neighbors._table[_neighbors._start + _slot] >= 0)
                    {
                        return true;
                    }
                }
                return false;
            }
        }
    }
}
