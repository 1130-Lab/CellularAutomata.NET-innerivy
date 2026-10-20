using System.Text.Json.Serialization;

namespace CellularAutomata.Web.Engine;

/// <summary>
/// Everything needed to build a simulation. Sent from the UI as JSON.
/// </summary>
public sealed class SimulationSpec
{
    /// <summary>Cells per dimension, e.g. [128, 128] or [32, 32, 32].</summary>
    public int[] Size { get; set; } = [];

    /// <summary>Whether each dimension wraps around (toroidal). Missing entries are false.</summary>
    public bool[]? Wrap { get; set; }

    public RuleSpec Rule { get; set; } = new();

    public SeedSpec Seed { get; set; } = new();
}

public static class RuleKinds
{
    /// <summary>Outer-totalistic birth/survival rule with optional Generations-style decay.</summary>
    public const string LifeLike = "lifelike";

    /// <summary>Lookup table over groups of neighbors (Wolfram-style elementary rules and generalisations).</summary>
    public const string Table = "table";
}

public sealed class RuleSpec
{
    public string Kind { get; set; } = RuleKinds.LifeLike;

    // --- lifelike ---

    /// <summary>Live-neighbor counts that turn a dead cell alive.</summary>
    public int[]? Birth { get; set; }

    /// <summary>Live-neighbor counts that keep a live cell alive.</summary>
    public int[]? Survive { get; set; }

    /// <summary>
    /// Number of states. 2 is classic Life. With more, a live cell that fails to survive decays
    /// through states 2..States-1 before dying (only state 1 counts as alive).
    /// </summary>
    public int States { get; set; } = 2;

    public NeighborhoodSpec? Neighborhood { get; set; }

    // --- table ---

    /// <summary>
    /// Groups of relative offsets. A group reads as 1 if any of its cells is non-zero. Group 0 is
    /// the most significant bit of the pattern index.
    /// </summary>
    public int[][][]? Groups { get; set; }

    /// <summary>
    /// Output state for each pattern index, one digit (0-9) per pattern, index 0 first. Length must be
    /// 2^Groups.Length. For Wolfram rule N with groups [left, center, right], digit i is bit i of N.
    /// Cells with no neighbors inside the grid keep their state.
    /// </summary>
    public string? Table { get; set; }
}

public static class NeighborhoodTypes
{
    public const string Moore = "moore";
    public const string VonNeumann = "vonNeumann";

    /// <summary>2D Moore neighborhood extruded through z = -1..1 (24 neighbors), as in the Conway3D example.</summary>
    public const string ExtrudedMoore = "extrudedMoore";

    public const string Custom = "custom";
}

public sealed class NeighborhoodSpec
{
    public string Type { get; set; } = NeighborhoodTypes.Moore;
    public int Radius { get; set; } = 1;
    public int[][]? Offsets { get; set; }
}

public static class SeedTypes
{
    public const string Random = "random";
    public const string Cells = "cells";
    public const string Empty = "empty";
}

public sealed class SeedSpec
{
    public string Type { get; set; } = SeedTypes.Random;

    /// <summary>PRNG seed for <see cref="SeedTypes.Random"/>.</summary>
    public uint Seed { get; set; } = 1;

    /// <summary>Probability that a cell in the fill region starts alive.</summary>
    public double Density { get; set; } = 0.3;

    /// <summary>Fraction of each dimension, centred, that is randomly filled.</summary>
    public double Fill { get; set; } = 1.0;

    /// <summary>Live cells for <see cref="SeedTypes.Cells"/>.</summary>
    public int[][]? Cells { get; set; }
}

public sealed record Preset(string Id, string Name, string Description, SimulationSpec Spec);

public sealed record HostInfo(int VectorCount, int MaxDimensions, int MaxCells, int MaxNeighborLinks, string Runtime);

public sealed record SimulationInfo(
    bool Ok,
    string[] Errors,
    int[]? Size,
    int Generation,
    int Population,
    int Evaluated,
    int Changed,
    int NeighborCount,
    int States
);

[JsonSourceGenerationOptions(
    PropertyNamingPolicy = JsonKnownNamingPolicy.CamelCase,
    DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
)]
[JsonSerializable(typeof(SimulationSpec))]
[JsonSerializable(typeof(Preset[]))]
[JsonSerializable(typeof(HostInfo))]
[JsonSerializable(typeof(SimulationInfo))]
public partial class EngineJson : JsonSerializerContext { }
