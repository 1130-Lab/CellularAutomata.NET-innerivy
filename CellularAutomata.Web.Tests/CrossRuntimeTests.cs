using System.Text.Json;
using System.Text.Json.Nodes;
using CellularAutomata.Web.Engine;

namespace CellularAutomata.Web.Tests;

/// <summary>
/// Fixtures/cross-runtime.json holds specs, step counts and the expected state hash. This test checks
/// the native (.NET on the host OS) result; web/tests/e2e/cross-runtime.spec.ts runs the same cases
/// in the browser on WebAssembly. Both must match the fixture, so native and WASM agree.
///
/// Regenerate with: CA_UPDATE_FIXTURES=1 dotnet test --filter CrossRuntimeTests
/// </summary>
public class CrossRuntimeTests
{
    private static string SourceFixturePath =>
        Path.GetFullPath(Path.Combine(AppContext.BaseDirectory, "../../../Fixtures/cross-runtime.json"));

    private static IEnumerable<(string Name, SimulationSpec Spec, int Steps)> Cases()
    {
        foreach (Preset preset in Presets.All)
        {
            yield return (preset.Id, preset.Spec, preset.Spec.Size.Length == 3 ? 12 : 40);
        }
        yield return (
            "custom-3d-generations",
            new SimulationSpec
            {
                Size = [20, 18, 16],
                Wrap = [true, false, true],
                Rule = new RuleSpec
                {
                    Kind = RuleKinds.LifeLike,
                    Birth = [4, 5],
                    Survive = [2, 3, 4],
                    States = 5,
                    Neighborhood = new NeighborhoodSpec { Type = NeighborhoodTypes.VonNeumann, Radius = 2 },
                },
                Seed = new SeedSpec { Type = SeedTypes.Random, Seed = 123456789, Density = 0.35, Fill = 0.8 },
            },
            25
        );
        yield return (
            "custom-2d-table-4-groups",
            new SimulationSpec
            {
                Size = [96, 64],
                Wrap = [true, false],
                Rule = new RuleSpec
                {
                    Kind = RuleKinds.Table,
                    Groups = [[[-2, -1]], [[-1, -1], [0, -2]], [[1, -1]], [[2, -1], [0, -2]]],
                    Table = "0110100110010110",
                },
                Seed = new SeedSpec { Type = SeedTypes.Random, Seed = 4242, Density = 0.5 },
            },
            63
        );
        yield return (
            "custom-2d-offsets",
            new SimulationSpec
            {
                Size = [64, 64],
                Wrap = [true, true],
                Rule = new RuleSpec
                {
                    Kind = RuleKinds.LifeLike,
                    Birth = [2],
                    Survive = [1, 2],
                    Neighborhood = new NeighborhoodSpec
                    {
                        Type = NeighborhoodTypes.Custom,
                        Offsets = [[-2, 0], [2, 0], [0, -2], [0, 2], [1, 1]],
                    },
                },
                Seed = new SeedSpec { Type = SeedTypes.Random, Seed = uint.MaxValue, Density = 0.2 },
            },
            50
        );
    }

    private static JsonArray Generate()
    {
        JsonArray cases = new JsonArray();
        foreach (var (name, spec, steps) in Cases())
        {
            Simulation sim = Simulation.Create(spec);
            sim.Step(steps);
            cases.Add(
                new JsonObject
                {
                    ["name"] = name,
                    ["steps"] = steps,
                    ["population"] = sim.Population(),
                    ["hash"] = sim.Hash(),
                    ["spec"] = JsonNode.Parse(JsonSerializer.Serialize(spec, EngineJson.Default.SimulationSpec)),
                }
            );
        }
        return cases;
    }

    [Fact]
    public void NativeResultsMatchFixture()
    {
        JsonArray generated = Generate();
        if (Environment.GetEnvironmentVariable("CA_UPDATE_FIXTURES") == "1")
        {
            File.WriteAllText(
                SourceFixturePath,
                generated.ToJsonString(new JsonSerializerOptions { WriteIndented = true }) + "\n"
            );
        }
        JsonArray fixture = JsonNode.Parse(File.ReadAllText(SourceFixturePath))!.AsArray();
        Assert.Equal(generated.Count, fixture.Count);
        foreach (JsonNode? expected in fixture)
        {
            // Run from the fixture's own spec, the same way the browser test does.
            SimulationSpec spec = JsonSerializer.Deserialize(expected!["spec"]!.ToJsonString(), EngineJson.Default.SimulationSpec)!;
            Simulation sim = Simulation.Create(spec);
            sim.Step((int)expected["steps"]!);
            Assert.True(
                (string)expected["hash"]! == sim.Hash(),
                $"{expected["name"]}: expected {expected["hash"]}, got {sim.Hash()}"
            );
            Assert.Equal((int)expected["population"]!, sim.Population());
        }
    }
}
