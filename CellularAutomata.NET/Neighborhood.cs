using System;
using System.Collections.Generic;
using System.Numerics;
using System.Text;

namespace CellularAutomata.NET
{
    public record CellularAutomataNeighborhood<T>
        where T : notnull
    {
        /// <summary>
        /// 2D Moore neighborhood (8 neighbors). See <see cref="Moore"/> for other dimensions and radii.
        /// </summary>
        public static readonly CellularAutomataNeighborhood<T> MooreNeighborhood =
            new CellularAutomataNeighborhood<T>()
            {
                NeighborLocations = new Vector<int>[8]
                {
                    // Above
                    AutomataVector.Create(-1, -1),
                    AutomataVector.Create(0, -1),
                    AutomataVector.Create(1, -1),
                    // Sides
                    AutomataVector.Create(-1, 0),
                    AutomataVector.Create(1, 0),
                    // Below
                    AutomataVector.Create(-1, 1),
                    AutomataVector.Create(0, 1),
                    AutomataVector.Create(1, 1),
                },
            };

        /// <summary>
        /// 2D von Neumann neighborhood (4 neighbors). See <see cref="VonNeumann"/> for other dimensions and radii.
        /// </summary>
        public static readonly CellularAutomataNeighborhood<T> VonNeumannNeighborhood =
            new CellularAutomataNeighborhood<T>()
            {
                NeighborLocations = new Vector<int>[4]
                {
                    // Up
                    AutomataVector.Create(0, -1),
                    // Left
                    AutomataVector.Create(-1, 0),
                    // Right
                    AutomataVector.Create(1, 0),
                    // Down
                    AutomataVector.Create(0, 1),
                },
            };

        public required Vector<int>[] NeighborLocations { get; set; }

        /// <summary>
        /// Only used by <see cref="GetNeighbors"/>. Automata build each cell's neighbors once and reuse them.
        /// </summary>
        public bool ClearNeighborsAfterUse { get; set; } = true;

        /// <summary>
        /// N-dimensional Moore neighborhood: every offset with Chebyshev distance 1..radius.
        /// </summary>
        public static CellularAutomataNeighborhood<T> Moore(int dimensions, int radius = 1)
        {
            return FromPredicate(dimensions, radius, offset => true);
        }

        /// <summary>
        /// N-dimensional von Neumann neighborhood: every offset with Manhattan distance 1..radius.
        /// </summary>
        public static CellularAutomataNeighborhood<T> VonNeumann(int dimensions, int radius = 1)
        {
            return FromPredicate(
                dimensions,
                radius,
                offset =>
                {
                    int sum = 0;
                    foreach (int value in offset)
                    {
                        sum += Math.Abs(value);
                    }
                    return sum <= radius;
                }
            );
        }

        private static CellularAutomataNeighborhood<T> FromPredicate(
            int dimensions,
            int radius,
            Func<int[], bool> include
        )
        {
            if (dimensions < 1 || dimensions > AutomataVector.SIMD_SIZE)
            {
                throw new ArgumentOutOfRangeException(nameof(dimensions));
            }
            if (radius < 1)
            {
                throw new ArgumentOutOfRangeException(nameof(radius));
            }
            List<Vector<int>> locations = new List<Vector<int>>();
            int side = radius * 2 + 1;
            int total = (int)Math.Pow(side, dimensions);
            int[] offset = new int[dimensions];
            for (int i = 0; i < total; i++)
            {
                int rest = i;
                bool isOrigin = true;
                for (int d = 0; d < dimensions; d++)
                {
                    offset[d] = rest % side - radius;
                    rest /= side;
                    isOrigin &= offset[d] == 0;
                }
                if (!isOrigin && include(offset))
                {
                    locations.Add(AutomataVector.Create(offset));
                }
            }
            return new CellularAutomataNeighborhood<T>() { NeighborLocations = locations.ToArray() };
        }

        public void GetNeighbors(
            Vector<int> position,
            CellularAutomataGrid<T> grid,
            Dictionary<Vector<int>, CellularAutomataCell<T>> neighbors
        )
        {
            if (ClearNeighborsAfterUse)
            {
                neighbors.Clear();
            }

            for (int i = 0; i < NeighborLocations.Length; i++)
            {
                Vector<int> neighborPos = position + NeighborLocations[i];
                if (TryWrap(ref neighborPos, grid.Dimensions))
                {
                    neighbors[NeighborLocations[i]] = grid.Cells[grid.GetIndex(neighborPos)];
                }
            }
        }

        /// <summary>
        /// Builds a table of neighbor indices: entry [cell * NeighborLocations.Length + slot] is the
        /// index of that neighbor in <see cref="CellularAutomataGrid{T}.Cells"/>, or -1 if it is out of bounds.
        /// </summary>
        public int[] BuildNeighborTable(CellularAutomataGrid<T> grid)
        {
            Vector<int>[] locations = NeighborLocations;
            int[] table = new int[grid.Cells.Length * locations.Length];
            for (int i = 0; i < grid.Cells.Length; i++)
            {
                Vector<int> position = grid.Cells[i].Position;
                for (int slot = 0; slot < locations.Length; slot++)
                {
                    Vector<int> neighborPos = position + locations[slot];
                    table[i * locations.Length + slot] = TryWrap(ref neighborPos, grid.Dimensions)
                        ? grid.GetIndex(neighborPos)
                        : -1;
                }
            }
            return table;
        }

        /// <summary>
        /// Applies wrapping to a position. Returns false if the result is still out of bounds.
        /// </summary>
        public static bool TryWrap(ref Vector<int> position, CellularAutomataDimension[] dimensions)
        {
            for (int d = 0; d < dimensions.Length; d++)
            {
                CellularAutomataDimension dimension = dimensions[d];
                int value = position.GetElement(d);
                if (value < 0)
                {
                    if (!dimension.WrapStart)
                    {
                        return false;
                    }
                    position = position.WithElement(
                        d,
                        ((value % dimension.Cells) + dimension.Cells) % dimension.Cells
                    );
                }
                else if (value >= dimension.Cells)
                {
                    if (!dimension.WrapEnd)
                    {
                        return false;
                    }
                    position = position.WithElement(d, value % dimension.Cells);
                }
            }
            return true;
        }
    }
}
