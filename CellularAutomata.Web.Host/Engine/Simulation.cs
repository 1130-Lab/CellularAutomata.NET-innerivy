using System.Numerics;
using CellularAutomata.NET;

namespace CellularAutomata.Web.Engine;

/// <summary>
/// One running automaton plus the spec it was built from. States are bytes; cells are flattened
/// with dimension 0 varying fastest (index = x + y * sizeX + z * sizeX * sizeY).
/// </summary>
public sealed class Simulation
{
    public SimulationSpec Spec { get; }
    public CellularAutomata<byte> Automaton { get; }
    public int NeighborCount { get; }
    public int States { get; }

    private Simulation(SimulationSpec spec)
    {
        Spec = spec;
        int dims = spec.Size.Length;
        RuleFactory.BuiltRule built = RuleFactory.Build(spec.Rule, dims);
        NeighborCount = built.Neighborhood.NeighborLocations.Length;
        States = built.States;
        Automaton = new CellularAutomata<byte>(
            new CellularAutomataConfiguration<byte>
            {
                Dimensions = spec
                    .Size.Select(
                        (cells, d) =>
                        {
                            bool wrap = spec.Wrap != null && d < spec.Wrap.Length && spec.Wrap[d];
                            return new CellularAutomataDimension
                            {
                                Cells = cells,
                                WrapStart = wrap,
                                WrapEnd = wrap,
                            };
                        }
                    )
                    .ToArray(),
                DefaultState = 0,
                CellStateHistoryLimit = 0,
            },
            built.Neighborhood,
            built.Rule
        );
        Automaton.InitializeGrid(Seeder.CreateStates(spec.Seed, spec.Size));
    }

    /// <summary>Validates and builds a simulation. Throws <see cref="SpecException"/> if the spec is invalid.</summary>
    public static Simulation Create(SimulationSpec spec)
    {
        SpecValidator.Validate(spec);
        return new Simulation(spec);
    }

    public int Generation => Automaton.Generation;
    public int CellCount => Automaton.Grid.Cells.Length;

    public void Step(int count = 1)
    {
        for (int i = 0; i < count; i++)
        {
            Automaton.Step();
        }
    }

    public byte[] GetStates()
    {
        byte[] states = new byte[CellCount];
        CopyStates(states);
        return states;
    }

    public void CopyStates(Span<byte> destination)
    {
        CellularAutomataCell<byte>[] cells = Automaton.Grid.Cells;
        for (int i = 0; i < cells.Length; i++)
        {
            destination[i] = cells[i].State;
        }
    }

    public int Population()
    {
        int population = 0;
        foreach (var cell in Automaton.Grid.Cells)
        {
            if (cell.State != 0)
            {
                population++;
            }
        }
        return population;
    }

    /// <summary>Sets the given flat cell indices to <paramref name="state"/>.</summary>
    public void SetCells(ReadOnlySpan<int> indices, byte state)
    {
        if (state >= States)
        {
            throw new SpecException($"State {state} is not valid for a rule with {States} states.");
        }
        Dictionary<Vector<int>, byte> changes = new Dictionary<Vector<int>, byte>();
        foreach (int index in indices)
        {
            if (index < 0 || index >= CellCount)
            {
                throw new SpecException($"Cell index {index} is outside the grid.");
            }
            changes[Automaton.Grid.Cells[index].Position] = state;
        }
        Automaton.InitializeGrid(changes);
    }

    /// <summary>64-bit FNV-1a of the state bytes, as 16 hex digits. Used to compare runtimes.</summary>
    public string Hash()
    {
        ulong hash = 14695981039346656037UL;
        foreach (var cell in Automaton.Grid.Cells)
        {
            hash = (hash ^ cell.State) * 1099511628211UL;
        }
        return hash.ToString("x16");
    }

    public SimulationInfo Info()
    {
        return new SimulationInfo(
            true,
            [],
            Spec.Size,
            Generation,
            Population(),
            Automaton.LastEvaluatedCount,
            Automaton.LastChangedCount,
            NeighborCount,
            States
        );
    }
}

/// <summary>
/// Deterministic initial states. Uses its own PRNG so native and WebAssembly runs match exactly.
/// </summary>
public static class Seeder
{
    public static byte[] CreateStates(SeedSpec seed, int[] size)
    {
        int total = size.Aggregate(1, (a, b) => a * b);
        byte[] states = new byte[total];
        switch (seed.Type)
        {
            case SeedTypes.Random:
            {
                SplitMix64 rng = new SplitMix64(seed.Seed);
                int[] lo = new int[size.Length];
                int[] hi = new int[size.Length];
                for (int d = 0; d < size.Length; d++)
                {
                    int span = Math.Max(1, (int)Math.Round(size[d] * seed.Fill));
                    lo[d] = (size[d] - span) / 2;
                    hi[d] = lo[d] + span;
                }
                for (int i = 0; i < total; i++)
                {
                    // Draw for every cell so the pattern inside the region doesn't depend on the region.
                    bool alive = rng.NextDouble() < seed.Density;
                    int rest = i;
                    bool inside = true;
                    for (int d = 0; d < size.Length; d++)
                    {
                        int c = rest % size[d];
                        rest /= size[d];
                        inside &= c >= lo[d] && c < hi[d];
                    }
                    states[i] = alive && inside ? (byte)1 : (byte)0;
                }
                break;
            }
            case SeedTypes.Cells:
                foreach (int[] cell in seed.Cells ?? [])
                {
                    int index = 0;
                    int stride = 1;
                    for (int d = 0; d < size.Length; d++)
                    {
                        index += cell[d] * stride;
                        stride *= size[d];
                    }
                    states[index] = 1;
                }
                break;
        }
        return states;
    }
}

/// <summary>SplitMix64 (Steele, Lea &amp; Flood). Small, fast and identical on every runtime.</summary>
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

    /// <summary>Uniform double in [0, 1) from the top 53 bits.</summary>
    public double NextDouble() => (Next() >> 11) * (1.0 / (1UL << 53));
}
