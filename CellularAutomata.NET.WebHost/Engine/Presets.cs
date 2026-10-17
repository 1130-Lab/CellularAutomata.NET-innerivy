using System.Numerics;

namespace CellularAutomata.NET.WebHost.Engine;

public sealed class Preset
{
    public required string Id { get; init; }
    public required string Name { get; init; }
    public required string Description { get; init; }

    /// <summary>True for presets that reproduce one of the example projects in this repo.</summary>
    public bool FromExample { get; init; }
    public required SimulationSpec Spec { get; init; }
}

/// <summary>
/// Starting points for the UI. The example-derived ones build their neighborhoods the same way
/// the example projects do (Conway/, Conway3D/, Wolfram/, Wolfram3D/), and the tests check they
/// produce identical results.
/// </summary>
public static class Presets
{
    public static int[][] Moore(int dims, int radius = 1) =>
        ToOffsets(CellularAutomataNeighborhood<byte>.Moore(dims, radius).NeighborLocations, dims);

    public static int[][] VonNeumann(int dims, int radius = 1) =>
        ToOffsets(CellularAutomataNeighborhood<byte>.VonNeumann(dims, radius).NeighborLocations, dims);

    /// <summary>Conway3D's neighborhood: the 2D Moore neighborhood extruded over z = -1..1 (24 cells).</summary>
    public static int[][] ExtrudedMoore3D()
    {
        var extruded = new List<Vector<int>>();
        foreach (var vector in CellularAutomataNeighborhood<byte>.MooreNeighborhood.NeighborLocations)
        {
            extruded.AddRange(AutomataVector.Extrude(vector, -1, 1, 3));
        }
        return ToOffsets(extruded, 3);
    }

    /// <summary>Wolfram/ groups: above-left, above, above-right.</summary>
    public static int[][][] WolframGroups2D() => [[[-1, -1]], [[0, -1]], [[1, -1]]];

    /// <summary>Wolfram3D/ groups: each of the three cells above, extruded over z = -1..1.</summary>
    public static int[][][] WolframGroups3D() =>
        [
            ToOffsets(AutomataVector.Extrude(AutomataVector.Create(-1, -1, 0), -1, 1, 3), 3),
            ToOffsets(AutomataVector.Extrude(AutomataVector.Create(0, -1, 0), -1, 1, 3), 3),
            ToOffsets(AutomataVector.Extrude(AutomataVector.Create(1, -1, 0), -1, 1, 3), 3),
        ];

    public static SimulationSpec Conway2D() =>
        new()
        {
            Size = [128, 128],
            Wrap = [true, true],
            Rule = Totalistic(Moore(2), birth: [3], survive: [2, 3]),
            Seed = new SeedSpec { Kind = SeedKinds.Random, Rng = 1, Density = 0.3 },
        };

    public static SimulationSpec Conway3D() =>
        new()
        {
            Size = [32, 32, 32],
            Wrap = [true, true, true],
            Rule = Totalistic(ExtrudedMoore3D(), birth: [3], survive: [2, 3]),
            // Conway3D/ seeds the middle third of the cube at ~50% density.
            Seed = new SeedSpec
            {
                Kind = SeedKinds.Random,
                Rng = 1,
                Density = 0.5,
                RegionMin = [1 / 3.0, 1 / 3.0, 1 / 3.0],
                RegionMax = [2 / 3.0, 2 / 3.0, 2 / 3.0],
            },
        };

    public static SimulationSpec Wolfram2D(int ruleNumber, double seedX = 0.5) =>
        new()
        {
            Size = [128, 128],
            Wrap = [false, false],
            Rule = new RuleSpec
            {
                Kind = RuleKinds.Pattern,
                Groups = WolframGroups2D(),
                Table = RuleFactory.TableFromRuleNumber(ruleNumber, 3),
            },
            Seed = new SeedSpec { Kind = SeedKinds.Single, At = [seedX, 0] },
        };

    public static SimulationSpec Wolfram3D(int ruleNumber) =>
        new()
        {
            Size = [48, 24, 48],
            Wrap = [false, false, false],
            Rule = new RuleSpec
            {
                Kind = RuleKinds.Pattern,
                Groups = WolframGroups3D(),
                Table = RuleFactory.TableFromRuleNumber(ruleNumber, 3),
            },
            Seed = new SeedSpec { Kind = SeedKinds.Single, At = [0.5, 0, 0.5] },
        };

    public static IReadOnlyList<Preset> All { get; } =
    [
        new Preset
        {
            Id = "conway-2d",
            Name = "Conway's Game of Life (2D)",
            Description = "B3/S23 on the Moore neighborhood. Same rule as the Conway example.",
            FromExample = true,
            Spec = Conway2D(),
        },
        new Preset
        {
            Id = "conway-3d",
            Name = "Conway3D (24-neighbor extruded Moore)",
            Description = "B3/S23 where the neighborhood is the 2D Moore neighborhood extruded over z-1..z+1 (24 cells, not 26). Same as the Conway3D example.",
            FromExample = true,
            Spec = Conway3D(),
        },
        new Preset
        {
            Id = "wolfram-30-2d",
            Name = "Wolfram Rule 30 (2D)",
            Description = "Each row is computed from the three cells above it, so the grid fills with the space-time diagram. Same as the Wolfram example.",
            FromExample = true,
            Spec = Wolfram2D(30),
        },
        new Preset
        {
            Id = "wolfram-30-3d",
            Name = "Wolfram Rule 30 (3D)",
            Description = "Rule 30 where left/center/right are each the max over z-1..z+1. Same as the Wolfram3D example.",
            FromExample = true,
            Spec = Wolfram3D(30),
        },
        new Preset
        {
            Id = "wolfram-90-2d",
            Name = "Wolfram Rule 90 (2D)",
            Description = "Sierpinski triangle. Change the rule number to try any of rules 0-255.",
            Spec = Wolfram2D(90),
        },
        new Preset
        {
            Id = "wolfram-110-2d",
            Name = "Wolfram Rule 110 (2D)",
            Description = "Turing-complete elementary rule, seeded at the right edge.",
            Spec = Wolfram2D(110, seedX: 1),
        },
        new Preset
        {
            Id = "wolfram-73-3d",
            Name = "Wolfram Rule 73 (3D)",
            Description = "An odd-numbered rule (000 -> 1), so every cell is evaluated every step.",
            Spec = Wolfram3D(73),
        },
        new Preset
        {
            Id = "highlife-2d",
            Name = "HighLife (2D)",
            Description = "B36/S23. Like Life, but has a replicator.",
            Spec = new SimulationSpec
            {
                Size = [128, 128],
                Wrap = [true, true],
                Rule = Totalistic(Moore(2), birth: [3, 6], survive: [2, 3]),
                Seed = new SeedSpec { Kind = SeedKinds.Random, Rng = 7, Density = 0.3 },
            },
        },
        new Preset
        {
            Id = "brians-brain-2d",
            Name = "Brian's Brain (2D, 3 states)",
            Description = "B2/S/3 Generations rule: live cells always decay through a 'dying' state.",
            Spec = new SimulationSpec
            {
                Size = [128, 128],
                Wrap = [true, true],
                Rule = Totalistic(Moore(2), birth: [2], survive: [], states: 3),
                Seed = new SeedSpec { Kind = SeedKinds.Random, Rng = 3, Density = 0.1 },
            },
        },
        new Preset
        {
            Id = "pyroclastic-3d",
            Name = "Pyroclastic (3D, 10-state Generations)",
            Description = "S4-7/B6-8 with 10 states on the 26-cell 3D Moore neighborhood, grown from a small seed in the middle.",
            Spec = new SimulationSpec
            {
                Size = [32, 32, 32],
                Wrap = [true, true, true],
                Rule = Totalistic(Moore(3), birth: [6, 7, 8], survive: [4, 5, 6, 7], states: 10),
                Seed = new SeedSpec
                {
                    Kind = SeedKinds.Random,
                    Rng = 5,
                    Density = 0.35,
                    RegionMin = [0.4, 0.4, 0.4],
                    RegionMax = [0.6, 0.6, 0.6],
                },
            },
        },
    ];

    private static RuleSpec Totalistic(int[][] neighborhood, int[] birth, int[] survive, int states = 2) =>
        new()
        {
            Kind = RuleKinds.Totalistic,
            Neighborhood = neighborhood,
            Birth = birth,
            Survive = survive,
            States = states,
        };

    private static int[][] ToOffsets(IEnumerable<Vector<int>> vectors, int dims) =>
        vectors.Select(v => Enumerable.Range(0, dims).Select(d => v[d]).ToArray()).ToArray();
}
