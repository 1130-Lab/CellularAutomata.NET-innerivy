using System;
using System.Collections.Generic;
using System.Numerics;
using System.Text;

namespace CellularAutomata.NET
{
    public record CellularAutomataNeighborhood<T>
        where T : notnull
    {
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
                    int manhattan = 0;
                    foreach (int v in offset)
                    {
                        manhattan += Math.Abs(v);
                    }
                    return manhattan <= radius;
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
            var locations = new List<Vector<int>>();
            int[] offset = new int[dimensions];
            int side = radius * 2 + 1;
            int total = (int)Math.Pow(side, dimensions);
            for (int n = 0; n < total; n++)
            {
                int rest = n;
                bool origin = true;
                for (int d = 0; d < dimensions; d++)
                {
                    offset[d] = rest % side - radius;
                    rest /= side;
                    origin &= offset[d] == 0;
                }
                if (!origin && include(offset))
                {
                    locations.Add(AutomataVector.Create(offset));
                }
            }
            return new CellularAutomataNeighborhood<T>() { NeighborLocations = locations.ToArray() };
        }

        public required Vector<int>[] NeighborLocations { get; set; }
        public bool ClearNeighborsAfterUse { get; set; } = true;

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
                if (TryResolve(position + NeighborLocations[i], grid.Dimensions, out var neighborPos))
                {
                    neighbors[NeighborLocations[i]] = grid.GetCell(neighborPos)!;
                }
            }
        }

        /// <summary>
        /// Applies the grid's wrapping rules to a position. Returns false if the position falls
        /// outside a dimension that does not wrap on that side.
        /// </summary>
        public static bool TryResolve(
            Vector<int> position,
            CellularAutomataDimension[] dimensions,
            out Vector<int> resolved
        )
        {
            resolved = position;
            for (int d = 0; d < dimensions.Length; d++)
            {
                CellularAutomataDimension dimension = dimensions[d];
                int value = position[d];
                if (value < 0)
                {
                    if (!dimension.WrapStart)
                    {
                        return false;
                    }
                }
                else if (value >= dimension.Cells)
                {
                    if (!dimension.WrapEnd)
                    {
                        return false;
                    }
                }
                else
                {
                    continue;
                }
                int wrapped = ((value % dimension.Cells) + dimension.Cells) % dimension.Cells;
                resolved = resolved.WithElement(d, wrapped);
            }
            return true;
        }
    }
}
