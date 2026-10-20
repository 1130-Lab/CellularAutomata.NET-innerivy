using CellularAutomata.NET;

namespace CellularAutomata.Web.Engine;

/// <summary>
/// Starting points shown in the UI. The first few mirror the example projects in this repository.
/// </summary>
public static class Presets
{
    public static Preset[] All { get; } =
    [
        new(
            "conway-2d",
            "Conway's Game of Life (2D)",
            "B3/S23 on a Moore neighborhood, as in the Conway example. Wraps at the edges.",
            new SimulationSpec
            {
                Size = [128, 128],
                Wrap = [true, true],
                Rule = LifeLike([3], [2, 3], Neighborhood(NeighborhoodTypes.Moore)),
                Seed = Random(42, 0.3),
            }
        ),
        new(
            "conway-2d-glider",
            "Conway: glider (2D)",
            "The Conway example's glider in the top-left corner of an unwrapped grid.",
            new SimulationSpec
            {
                Size = [128, 128],
                Wrap = [false, false],
                Rule = LifeLike([3], [2, 3], Neighborhood(NeighborhoodTypes.Moore)),
                Seed = Cells([0, 0], [1, 1], [2, 1], [0, 2], [1, 2]),
            }
        ),
        new(
            "conway-3d",
            "Conway3D (24-neighbor extruded Moore)",
            "The Conway3D example: B3/S23 where the neighborhood is the 2D Moore neighborhood extruded through z = -1..1 (24 cells). Random cells in the middle third, wrapping.",
            new SimulationSpec
            {
                Size = [32, 32, 32],
                Wrap = [true, true, true],
                Rule = LifeLike([3], [2, 3], Neighborhood(NeighborhoodTypes.ExtrudedMoore)),
                Seed = Random(7, 0.5, 1.0 / 3),
            }
        ),
        new(
            "wolfram-30-2d",
            "Wolfram Rule 30 (2D)",
            "Elementary rule 30 with y as time: each row is computed from the row above. Change the rule number for any of the 256 elementary rules.",
            new SimulationSpec
            {
                Size = [128, 128],
                Wrap = [false, false],
                Rule = Wolfram2D(30),
                Seed = Cells([64, 0]),
            }
        ),
        new(
            "wolfram-30-3d",
            "Wolfram Rule 30 (3D)",
            "The Wolfram3D example: rule 30 with y as time, where each of left/center/right is the OR of the three cells above it along z.",
            new SimulationSpec
            {
                Size = [32, 32, 32],
                Wrap = [false, false, false],
                Rule = Wolfram3D(30),
                Seed = Cells([16, 0, 16]),
            }
        ),
        new(
            "wolfram-90-2d",
            "Wolfram Rule 90 (2D)",
            "Rule 90 draws a Sierpinski triangle from a single cell.",
            new SimulationSpec
            {
                Size = [128, 128],
                Wrap = [false, false],
                Rule = Wolfram2D(90),
                Seed = Cells([64, 0]),
            }
        ),
        new(
            "wolfram-110-2d",
            "Wolfram Rule 110 (2D)",
            "Rule 110 is Turing complete; its structures grow to the left.",
            new SimulationSpec
            {
                Size = [128, 128],
                Wrap = [false, false],
                Rule = Wolfram2D(110),
                Seed = Cells([127, 0]),
            }
        ),
        new(
            "brians-brain-2d",
            "Brian's Brain (2D, 3 states)",
            "B2/S/3: live cells always start dying the next step. Shows the multi-state (Generations) option.",
            new SimulationSpec
            {
                Size = [128, 128],
                Wrap = [true, true],
                Rule = LifeLike([2], [], Neighborhood(NeighborhoodTypes.Moore), states: 3),
                Seed = Random(3, 0.2, 0.5),
            }
        ),
        new(
            "life-4555-3d",
            "3D Life 4555 (Bays)",
            "Carter Bays' B5/S45 on the full 26-cell 3D Moore neighborhood.",
            new SimulationSpec
            {
                Size = [32, 32, 32],
                Wrap = [true, true, true],
                Rule = LifeLike([5], [4, 5], Neighborhood(NeighborhoodTypes.Moore)),
                Seed = Random(11, 0.3, 0.4),
            }
        ),
        new(
            "crystal-3d",
            "Crystal growth (3D von Neumann)",
            "B1/S0123456 on the 6-cell von Neumann neighborhood, grown from a single cell.",
            new SimulationSpec
            {
                Size = [32, 32, 32],
                Wrap = [false, false, false],
                Rule = LifeLike([1], [0, 1, 2, 3, 4, 5, 6], Neighborhood(NeighborhoodTypes.VonNeumann)),
                Seed = Cells([16, 16, 16]),
            }
        ),
    ];

    public static Preset Get(string id) => All.Single(p => p.Id == id);

    public static RuleSpec Wolfram2D(int rule) =>
        new()
        {
            Kind = RuleKinds.Table,
            Groups = [[[-1, -1]], [[0, -1]], [[1, -1]]],
            Table = RuleFactory.WolframTable(rule),
        };

    public static RuleSpec Wolfram3D(int rule) =>
        new()
        {
            Kind = RuleKinds.Table,
            Groups = [Extrude(-1), Extrude(0), Extrude(1)],
            Table = RuleFactory.WolframTable(rule),
        };

    // Same as the Wolfram3D example: AutomataVector.Extrude((x, -1, 0), -1, 1, 3).
    private static int[][] Extrude(int x) =>
        AutomataVector
            .Extrude(AutomataVector.Create(x, -1, 0), -1, 1, 3)
            .Select(v => new[] { v[0], v[1], v[2] })
            .ToArray();

    private static RuleSpec LifeLike(int[] birth, int[] survive, NeighborhoodSpec neighborhood, int states = 2) =>
        new()
        {
            Kind = RuleKinds.LifeLike,
            Birth = birth,
            Survive = survive,
            States = states,
            Neighborhood = neighborhood,
        };

    private static NeighborhoodSpec Neighborhood(string type) => new() { Type = type };

    private static SeedSpec Random(uint seed, double density, double fill = 1) =>
        new()
        {
            Type = SeedTypes.Random,
            Seed = seed,
            Density = density,
            Fill = fill,
        };

    private static SeedSpec Cells(params int[][] cells) => new() { Type = SeedTypes.Cells, Cells = cells };
}
