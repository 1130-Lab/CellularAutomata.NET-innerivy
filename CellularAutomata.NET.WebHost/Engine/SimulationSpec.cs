namespace CellularAutomata.NET.WebHost.Engine;

/// <summary>
/// Everything needed to build a simulation. Sent from the UI as JSON; see web/src/engine/types.ts.
/// </summary>
public sealed class SimulationSpec
{
    /// <summary>Cells per dimension: [width, height] or [width, height, depth].</summary>
    public int[] Size { get; set; } = [];

    /// <summary>Per-dimension wrapping (both edges). Missing entries mean no wrap.</summary>
    public bool[]? Wrap { get; set; }

    public RuleSpec Rule { get; set; } = new();

    public SeedSpec Seed { get; set; } = new();
}

public static class RuleKinds
{
    /// <summary>Outer-totalistic (Life-like) rule with optional Generations-style decay states.</summary>
    public const string Totalistic = "totalistic";

    /// <summary>Lookup-table rule over groups of neighbors (Wolfram elementary rules and extrusions of them).</summary>
    public const string Pattern = "pattern";
}

public sealed class RuleSpec
{
    public string Kind { get; set; } = RuleKinds.Totalistic;

    /// <summary>
    /// If a cell has no in-bounds neighbors at all it keeps its state. This is the
    /// <c>if (neighbors.Count == 0) return;</c> guard in the example rules; it is what keeps
    /// the seed row of the 2D Wolfram examples fixed.
    /// </summary>
    public bool IsolatedCellsKeepState { get; set; } = true;

    // --- totalistic ---

    /// <summary>Relative neighbor offsets, one int per dimension.</summary>
    public int[][]? Neighborhood { get; set; }

    /// <summary>Live-neighbor counts that turn a dead (0) cell alive (1).</summary>
    public int[]? Birth { get; set; }

    /// <summary>Live-neighbor counts that keep a live (1) cell alive.</summary>
    public int[]? Survive { get; set; }

    /// <summary>
    /// Number of states. 2 is a plain Life-like rule. Above 2, a live cell that fails to survive
    /// decays through 2..States-1 before dying (Generations rules); only state 1 counts as alive.
    /// </summary>
    public int States { get; set; } = 2;

    // --- pattern ---

    /// <summary>
    /// Ordered groups of neighbor offsets. A group reads as 1 if any of its cells is non-zero.
    /// Group 0 is the most significant bit of the table index, so for Wolfram rules the groups
    /// are [left, center, right] and index = 4L + 2C + R.
    /// </summary>
    public int[][][]? Groups { get; set; }

    /// <summary>Next state (0 or 1) for each of the 2^groups input patterns.</summary>
    public int[]? Table { get; set; }

    /// <summary>Alternative to <see cref="Table"/>: bit i of the number is table[i] (Wolfram numbering).</summary>
    public long? RuleNumber { get; set; }
}

public static class SeedKinds
{
    public const string Empty = "empty";
    public const string Random = "random";
    public const string Single = "single";
    public const string Points = "points";
}

public sealed class SeedSpec
{
    public string Kind { get; set; } = SeedKinds.Random;

    /// <summary>PRNG seed for <see cref="SeedKinds.Random"/>.</summary>
    public uint Rng { get; set; } = 1;

    /// <summary>Probability that a cell inside the region starts alive.</summary>
    public double Density { get; set; } = 0.3;

    /// <summary>Region for random seeding as fractions (0..1) of each dimension. Defaults to the whole grid.</summary>
    public double[]? RegionMin { get; set; }
    public double[]? RegionMax { get; set; }

    /// <summary>
    /// For <see cref="SeedKinds.Single"/>: position as fractions of each dimension, e.g. [0.5, 0]
    /// is the middle of the top row. Each coordinate is floor(f * size), clamped to the grid.
    /// </summary>
    public double[]? At { get; set; }

    /// <summary>For <see cref="SeedKinds.Points"/>: cell coordinates, offset by <see cref="Origin"/>.</summary>
    public int[][]? Points { get; set; }

    /// <summary>For <see cref="SeedKinds.Points"/>: fractional anchor added to every point (same rounding as <see cref="At"/>).</summary>
    public double[]? Origin { get; set; }

    /// <summary>State given to seeded cells.</summary>
    public int State { get; set; } = 1;
}

/// <summary>Input limits. Exposed to the UI so it can validate before sending.</summary>
public sealed class EngineLimits
{
    public int MinDimensions { get; init; } = 2;
    public int MaxDimensions { get; init; } = 3;
    public int MaxSide2D { get; init; } = 1024;
    public int MaxSide3D { get; init; } = 128;
    public int MaxCells { get; init; } = 512 * 512;
    public int MaxOffset { get; init; } = 4;
    public int MaxNeighbors { get; init; } = 256;

    /// <summary>Cells x neighbors. Bounds the size of the precomputed neighbor tables.</summary>
    public long MaxNeighborLinks { get; init; } = 512L * 512 * 32;
    public int MaxStates { get; init; } = 32;
    public int MaxGroups { get; init; } = 8;
    public int MaxPoints { get; init; } = 100_000;
    public int MaxStepsPerCall { get; init; } = 1000;

    public static readonly EngineLimits Default = new();
}

public sealed record ValidationError(string Path, string Message);

public sealed class SpecException(IReadOnlyList<ValidationError> errors)
    : Exception(string.Join("; ", errors.Select(e => $"{e.Path}: {e.Message}")))
{
    public IReadOnlyList<ValidationError> Errors { get; } = errors;
}
