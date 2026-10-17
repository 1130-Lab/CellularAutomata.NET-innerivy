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
        /// Index of this cell in <see cref="CellularAutomataGrid{T}.Cells"/> (first dimension varies fastest).
        /// </summary>
        public int Index { get; internal set; } = -1;

        /// <summary>
        /// Neighbors keyed by their relative position. Only populated for rules that use the
        /// dictionary-based <c>Action</c> signature; <see cref="CellularAutomataRule{T}"/> rules
        /// receive a <see cref="CellularAutomataNeighbors{T}"/> view instead.
        /// </summary>
        public Dictionary<Vector<int>, CellularAutomataCell<T>> Neighbors =>
            _neighbors ??= new Dictionary<Vector<int>, CellularAutomataCell<T>>();

        /// <summary>
        /// Previous states of this cell, oldest first. Only recorded when
        /// <see cref="CellularAutomataConfiguration{T}.CellStateHistoryLimit"/> is greater than zero,
        /// and capped at that many entries.
        /// </summary>
        public List<T> StateHistory
        {
            get => _stateHistory ??= new List<T>();
            set => _stateHistory = value;
        }

        // Allocated on first use; most cells never need them.
        private Dictionary<Vector<int>, CellularAutomataCell<T>>? _neighbors;
        private List<T>? _stateHistory;

        internal bool StateChanged { get; private set; }
        internal T NewState { get; private set; } = startState;

        public Vector<int> GetNeighborGlobalPosition(Vector<int> relativePosition)
        {
            return Position + relativePosition;
        }

        public void SetState(T newState)
        {
            NewState = newState;
            StateChanged = !EqualityComparer<T>.Default.Equals(newState, State);
        }

        /// <summary>
        /// Commits the pending state. Returns true if the state changed.
        /// </summary>
        internal bool UpdateState()
        {
            bool changed = StateChanged;
            State = NewState;
            StateChanged = false;
            return changed;
        }

        internal CellularAutomataCell<T> CloneDetached()
        {
            return new CellularAutomataCell<T>(State) { Position = Position, Index = Index };
        }
    }
}
