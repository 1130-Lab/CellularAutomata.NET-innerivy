namespace CellularAutomata.NET.WebHost.Engine;

/// <summary>
/// Builds initial states. Uses its own PRNG (SplitMix64) rather than System.Random so the
/// sequence for a given seed is fixed by this code, not by the runtime.
/// </summary>
public static class Seeder
{
    public static byte[] CreateInitialState(SimulationSpec spec)
    {
        int[] size = spec.Size;
        int count = size.Aggregate(1, (a, b) => a * b);
        var states = new byte[count];
        var seed = spec.Seed;
        byte value = (byte)seed.State;
        switch (seed.Kind)
        {
            case SeedKinds.Random:
            {
                int[] min = new int[size.Length];
                int[] max = new int[size.Length];
                for (int d = 0; d < size.Length; d++)
                {
                    min[d] = (int)Math.Floor((seed.RegionMin?[d] ?? 0) * size[d]);
                    max[d] = (int)Math.Ceiling((seed.RegionMax?[d] ?? 1) * size[d]);
                }
                var rng = new SplitMix64(seed.Rng);
                int[] coords = new int[size.Length];
                for (int i = 0; i < count; i++)
                {
                    if (InRegion(coords, min, max) && rng.NextDouble() < seed.Density)
                    {
                        states[i] = value;
                    }
                    Increment(coords, size);
                }
                break;
            }
            case SeedKinds.Single:
                states[IndexOf(AnchorCell(seed.At, size), size)] = value;
                break;
            case SeedKinds.Points:
            {
                int[] origin = AnchorCell(seed.Origin, size);
                int[] cell = new int[size.Length];
                foreach (var p in seed.Points ?? [])
                {
                    for (int d = 0; d < size.Length; d++)
                    {
                        cell[d] = p[d] + origin[d];
                    }
                    states[IndexOf(cell, size)] = value;
                }
                break;
            }
        }
        return states;
    }

    /// <summary>floor(f * size) per dimension, clamped to the grid. Null means the origin.</summary>
    public static int[] AnchorCell(double[]? fractions, int[] size)
    {
        var cell = new int[size.Length];
        if (fractions == null)
        {
            return cell;
        }
        for (int d = 0; d < size.Length; d++)
        {
            cell[d] = Math.Clamp((int)Math.Floor(fractions[d] * size[d]), 0, size[d] - 1);
        }
        return cell;
    }

    public static int IndexOf(int[] cell, int[] size)
    {
        int index = 0;
        int stride = 1;
        for (int d = 0; d < size.Length; d++)
        {
            index += cell[d] * stride;
            stride *= size[d];
        }
        return index;
    }

    private static bool InRegion(int[] coords, int[] min, int[] max)
    {
        for (int d = 0; d < coords.Length; d++)
        {
            if (coords[d] < min[d] || coords[d] >= max[d])
            {
                return false;
            }
        }
        return true;
    }

    private static void Increment(int[] coords, int[] size)
    {
        for (int d = 0; d < coords.Length; d++)
        {
            if (++coords[d] < size[d])
            {
                return;
            }
            coords[d] = 0;
        }
    }
}

public struct SplitMix64(ulong seed)
{
    private ulong _state = seed;

    public ulong Next()
    {
        ulong z = _state += 0x9E3779B97F4A7C15UL;
        z = (z ^ (z >> 30)) * 0xBF58476D1CE4E5B9UL;
        z = (z ^ (z >> 27)) * 0x94D049BB133111EBUL;
        return z ^ (z >> 31);
    }

    /// <summary>Uniform in [0, 1) with 53 bits of precision.</summary>
    public double NextDouble() => (Next() >> 11) * (1.0 / (1UL << 53));
}
