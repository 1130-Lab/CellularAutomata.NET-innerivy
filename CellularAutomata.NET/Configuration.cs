using System;
using System.Collections.Generic;
using System.Text;

namespace CellularAutomata.NET
{
    public enum CellularAutomataUpdateMode
    {
        /// <summary>
        /// Only cells that changed last step, or that have a neighbor that changed, are evaluated.
        /// This is only valid when a cell in the default state surrounded by default-state
        /// neighbors stays in the default state (e.g. Game of Life, Rule 30).
        /// </summary>
        ActiveCells = 0,

        /// <summary>
        /// Every cell is evaluated every step. Required for rules where "nothing" produces
        /// "something", such as odd-numbered Wolfram rules or Life-like rules with B0.
        /// </summary>
        AllCells = 1,
    }

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
        /// 0 (the default) disables per-cell history.
        /// </summary>
        public int CellStateHistoryLimit { get; set; }

        /// <summary>
        /// Which cells are evaluated each step. See <see cref="CellularAutomataUpdateMode"/>.
        /// </summary>
        public CellularAutomataUpdateMode UpdateMode { get; set; } =
            CellularAutomataUpdateMode.ActiveCells;
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
