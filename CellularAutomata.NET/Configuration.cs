using System;
using System.Collections.Generic;
using System.Text;

namespace CellularAutomata.NET
{
    public class CellularAutomataConfiguration<T>
    {
        /// <summary>
        /// Dimensions of the cellular automata grid.
        /// </summary>
        public required CellularAutomataDimension[] Dimensions { get; set; }

        /// <summary>
        /// Default state for all cells in the grid.
        /// </summary>
        public required T DefaultState { get; set; }

        /// <summary>
        /// Whether to keep all previous states in memory.
        /// </summary>
        public bool KeepAllGridStates { get; set; }

        /// <summary>
        /// Whether to keep any previous states in memory.
        /// </summary>
        public bool KeepAnyGridStates { get; set; }

        /// <summary>
        /// If KeepAllStates is false, the maximum number of previous states to keep in memory.
        /// </summary>
        public int GridStatesMemoryLimit { get; set; } = 10;

        /// <summary>
        /// Maximum number of previous states each cell keeps in <see cref="CellularAutomataCell{T}.StateHistory"/>.
        /// 0 disables history; a negative value keeps every state (memory grows every step).
        /// </summary>
        public int CellStateHistoryLimit { get; set; } = 10;

        /// <summary>
        /// Evaluate the rule for every cell every step. By default only cells that changed, or have a
        /// neighbor that changed, are evaluated after the first step, which is only valid for rules
        /// that depend solely on the cell's and its neighbors' current states. Enable this for rules
        /// that use randomness, the generation number, or state history.
        /// </summary>
        public bool ProcessAllCells { get; set; }
    }

    public class CellularAutomataDimension
    {
        /// <summary>
        /// The number of cells in / size of the dimension.
        /// </summary>
        public int Cells { get; set; }

        /// <summary>
        /// Whether the dimension should wrap from end to start.
        /// </summary>
        public bool WrapEnd { get; set; }

        /// <summary>
        /// Whether the dimension should wrap from start to end.
        /// </summary>
        public bool WrapStart { get; set; }
    }
}
