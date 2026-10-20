using System;
using System.Collections.Generic;
using System.Numerics;
using System.Text;

namespace CellularAutomata.NET
{
    public class CellularAutomataCell<T>(T startState)
        where T : notnull
    {
        public T State { get; private set; } = startState;
        public Vector<int> Position { get; set; }

        /// <summary>
        /// Index of the cell in <see cref="CellularAutomataGrid{T}.Cells"/>.
        /// </summary>
        public int Index { get; internal set; }

        /// <summary>
        /// Neighbors keyed by relative position. Only populated for automata created with the
        /// dictionary-based (legacy) rule signature; it is built once and then reused.
        /// </summary>
        public Dictionary<Vector<int>, CellularAutomataCell<T>> Neighbors { get; } =
            new Dictionary<Vector<int>, CellularAutomataCell<T>>();

        /// <summary>
        /// Previous states of the cell, oldest first. Bounded by
        /// <see cref="CellularAutomataConfiguration{T}.CellStateHistoryLimit"/>.
        /// </summary>
        public List<T> StateHistory { get; set; } = new List<T>();

        internal bool NeighborsBuilt { get; set; }

        internal bool StateChanged => !EqualityComparer<T>.Default.Equals(NewState, State);
        internal T NewState { get; private set; } = startState;

        public Vector<int> GetNeighborGlobalPosition(Vector<int> relativePosition)
        {
            return Position + relativePosition;
        }

        public void SetState(T newState)
        {
            NewState = newState;
        }

        internal void UpdateState()
        {
            State = NewState;
        }
    }
}
