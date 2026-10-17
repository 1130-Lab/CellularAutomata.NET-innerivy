using System.Text.Json;
using CellularAutomata.NET.WebHost.Engine;

namespace CellularAutomata.NET.WebHost.Tests;

/// <summary>Spec validation, seeding and the JSON contract used by the web UI.</summary>
public class EngineTests
{
    private static SimulationSpec Valid() => Presets.Conway2D();

    private static List<ValidationError> ErrorsFor(Action<SimulationSpec> mutate)
    {
        var spec = Valid();
        mutate(spec);
        return SpecValidator.Validate(spec);
    }

    public static IEnumerable<object[]> InvalidSpecs() =>
        new (string name, Action<SimulationSpec> mutate, string path)[]
        {
            ("1D", s => s.Size = [10], "size"),
            ("4D", s => s.Size = [4, 4, 4, 4], "size"),
            ("zero size", s => s.Size = [0, 10], "size[0]"),
            ("negative size", s => s.Size = [10, -3], "size[1]"),
            ("too wide", s => s.Size = [5000, 10], "size[0]"),
            ("too many cells", s => s.Size = [1024, 1024], "size"),
            ("3D too big", s => { s.Size = [128, 128, 128]; s.Wrap = null; s.Rule = Presets.Conway3D().Rule; }, "size"),
            ("wrap length", s => s.Wrap = [true], "wrap"),
            ("unknown kind", s => s.Rule.Kind = "lua", "rule.kind"),
            ("empty neighborhood", s => s.Rule.Neighborhood = [], "rule.neighborhood"),
            ("wrong offset dims", s => s.Rule.Neighborhood = [[1, 0, 0]], "rule.neighborhood[0]"),
            ("duplicate offset", s => s.Rule.Neighborhood = [[1, 0], [1, 0]], "rule.neighborhood[1]"),
            ("offset too far", s => s.Rule.Neighborhood = [[9, 0]], "rule.neighborhood[0]"),
            ("birth > neighbors", s => s.Rule.Birth = [9], "rule.birth"),
            ("missing survive", s => s.Rule.Survive = null, "rule.survive"),
            ("one state", s => s.Rule.States = 1, "rule.states"),
            ("too many states", s => s.Rule.States = 300, "rule.states"),
            ("density > 1", s => s.Seed.Density = 1.5, "seed.density"),
            ("NaN density", s => s.Seed.Density = double.NaN, "seed.density"),
            ("region inverted", s => { s.Seed.RegionMin = [0.8, 0]; s.Seed.RegionMax = [0.2, 1]; }, "seed.regionMin[0]"),
            ("seed state too high", s => s.Seed.State = 2, "seed.state"),
            ("unknown seed", s => s.Seed.Kind = "glider-gun", "seed.kind"),
            ("single without at", s => s.Seed = new SeedSpec { Kind = SeedKinds.Single }, "seed.at"),
            ("point outside", s => s.Seed = new SeedSpec { Kind = SeedKinds.Points, Points = [[128, 0]] }, "seed.points[0]"),
            ("point wrong dims", s => s.Seed = new SeedSpec { Kind = SeedKinds.Points, Points = [[1]] }, "seed.points[0]"),
            ("pattern no groups", s => s.Rule = new RuleSpec { Kind = RuleKinds.Pattern, Groups = [], Table = [0, 1] }, "rule.groups"),
            ("pattern table length", s => s.Rule = new RuleSpec { Kind = RuleKinds.Pattern, Groups = Presets.WolframGroups2D(), Table = [0, 1] }, "rule.table"),
            ("pattern table values", s => s.Rule = new RuleSpec { Kind = RuleKinds.Pattern, Groups = [[[0, -1]]], Table = [0, 2] }, "rule.table"),
            ("pattern rule number", s => s.Rule = new RuleSpec { Kind = RuleKinds.Pattern, Groups = Presets.WolframGroups2D(), RuleNumber = 256 }, "rule.ruleNumber"),
            ("pattern offset twice", s => s.Rule = new RuleSpec { Kind = RuleKinds.Pattern, Groups = [[[0, -1]], [[0, -1]]], Table = [0, 1, 1, 0] }, "rule.groups[1][0]"),
            ("neighbor links", s => { s.Size = [512, 512]; s.Rule.Neighborhood = Presets.Moore(2, 3); s.Rule.Birth = [3]; s.Rule.Survive = [2]; }, "rule"),
        }.Select(c => new object[] { c.name, c.mutate, c.path });

    [Theory]
    [MemberData(nameof(InvalidSpecs))]
    public void Invalid_specs_are_rejected_with_a_path(string name, Action<SimulationSpec> mutate, string path)
    {
        var errors = ErrorsFor(mutate);
        Assert.True(errors.Any(e => e.Path == path), $"{name}: expected an error at '{path}', got [{string.Join("; ", errors)}]");
        var spec = Valid();
        mutate(spec);
        var ex = Assert.Throws<SpecException>(() => new Simulation(spec));
        Assert.NotEmpty(ex.Errors);
    }

    [Fact]
    public void Same_seed_gives_same_state_and_different_seed_does_not()
    {
        var a = new Simulation(Valid());
        var b = new Simulation(Valid());
        a.Step(20);
        b.Step(20);
        Assert.Equal(a.GetState(), b.GetState());

        var other = Valid();
        other.Seed.Rng = 2;
        Assert.NotEqual(Seeder.CreateInitialState(Valid()), Seeder.CreateInitialState(other));
    }

    [Fact]
    public void Random_seed_density_and_region_are_respected()
    {
        var spec = Valid();
        spec.Size = [100, 100];
        spec.Seed.Density = 0.25;
        spec.Seed.RegionMin = [0.2, 0.5];
        spec.Seed.RegionMax = [0.6, 1.0];
        var states = Seeder.CreateInitialState(spec);
        int live = 0;
        for (int i = 0; i < states.Length; i++)
        {
            if (states[i] == 0) continue;
            live++;
            int x = i % 100, y = i / 100;
            Assert.InRange(x, 20, 59);
            Assert.InRange(y, 50, 99);
        }
        Assert.InRange(live / (40.0 * 50), 0.2, 0.3);
    }

    [Fact]
    public void SplitMix64_matches_published_reference_values()
    {
        // Reference output for seed 1234567 (from the public-domain splitmix64.c).
        var rng = new SplitMix64(1234567);
        Assert.Equal(6457827717110365317UL, rng.Next());
        Assert.Equal(3203168211198807973UL, rng.Next());
        Assert.Equal(9817491932198370423UL, rng.Next());
    }

    [Fact]
    public void Single_and_points_seeds_land_where_expected()
    {
        var single = Presets.Wolfram2D(30);
        Assert.Equal(64, Array.IndexOf(Seeder.CreateInitialState(single), (byte)1));

        var points = Valid();
        points.Size = [10, 10];
        points.Seed = new SeedSpec { Kind = SeedKinds.Points, Origin = [0.5, 0.5], Points = [[0, 0], [1, -1]] };
        var states = Seeder.CreateInitialState(points);
        Assert.Equal(1, states[5 + 5 * 10]);
        Assert.Equal(1, states[6 + 4 * 10]);
        Assert.Equal(2, states.Count(s => s == 1));
    }

    [Fact]
    public void Presets_round_trip_through_json_like_the_ui()
    {
        string json = JsonSerializer.Serialize(Presets.All, EngineJson.Default.IReadOnlyListPreset);
        using var doc = JsonDocument.Parse(json);
        foreach (var element in doc.RootElement.EnumerateArray())
        {
            string specJson = element.GetProperty("spec").GetRawText();
            var spec = EngineJson.ParseSpec(specJson, out var error);
            Assert.Null(error);
            Assert.Empty(SpecValidator.Validate(spec));
        }
        Assert.Contains("\"kind\":\"pattern\"", json);
        Assert.Contains("\"birth\":[3]", json);
    }

    [Fact]
    public void Unknown_json_properties_are_reported()
    {
        var spec = EngineJson.ParseSpec("""{"size":[4,4],"rules":{}}""", out var error);
        Assert.Null(spec);
        Assert.NotNull(error);
        Assert.Contains("rules", error!.Message);
        EngineJson.ParseSpec("{not json", out error);
        Assert.NotNull(error);
    }

    [Fact]
    public void SetCells_edits_state_and_wakes_neighbors()
    {
        var spec = Valid();
        spec.Size = [8, 8];
        spec.Seed = new SeedSpec { Kind = SeedKinds.Empty };
        var sim = new Simulation(spec);
        // Draw a blinker on an empty board; it must start oscillating.
        sim.SetCells([2 + 3 * 8, 3 + 3 * 8, 4 + 3 * 8], 1);
        Assert.Equal(3, sim.GetStatus().Population);
        sim.Step();
        var state = sim.GetState();
        Assert.Equal(1, state[3 + 2 * 8]);
        Assert.Equal(1, state[3 + 4 * 8]);
        Assert.Equal(0, state[2 + 3 * 8]);
        Assert.Throws<ArgumentOutOfRangeException>(() => sim.SetCells([64], 1));
        Assert.Throws<ArgumentOutOfRangeException>(() => sim.SetCells([0], 2));
    }

    [Fact]
    public void Reset_restores_the_seeded_state()
    {
        var sim = new Simulation(Valid());
        var initial = sim.GetState().ToArray();
        sim.Step(10);
        Assert.NotEqual(initial, sim.GetState());
        sim.Reset();
        Assert.Equal(initial, sim.GetState());
        Assert.Equal(0, sim.Generation);
    }
}
