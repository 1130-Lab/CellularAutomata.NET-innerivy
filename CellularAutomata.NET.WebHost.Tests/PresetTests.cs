using System.Numerics;
using CellularAutomata.NET.WebHost.Engine;

namespace CellularAutomata.NET.WebHost.Tests;

/// <summary>
/// The example-derived presets give exactly the same results as the example projects' own
/// Rules delegates (run through the library's dictionary-based rule path).
/// </summary>
public class PresetTests
{
    private static void AssertSameHistory(List<int[]> expected, List<int[]> actual)
    {
        Assert.Equal(expected.Count, actual.Count);
        for (int t = 0; t < expected.Count; t++)
        {
            Assert.True(expected[t].SequenceEqual(actual[t]), $"generation {t} differs");
        }
    }

    [Fact]
    public void Conway_preset_matches_Conway_example()
    {
        var rule = TestSupport.ExampleRule("Conway.Program", "Conway");
        foreach (bool wrap in new[] { false, true })
        {
            int[] size = [48, 48];
            var initial = TestSupport.RandomStates(48 * 48, 0.3, 42);
            var expected = TestSupport.RunExample(rule, CellularAutomataNeighborhood<int>.MooreNeighborhood, size, wrap, initial, 100);

            var spec = Presets.Conway2D();
            spec.Size = size;
            spec.Wrap = [wrap, wrap];
            AssertSameHistory(expected, TestSupport.RunSpec(TestSupport.WithPoints(spec, initial), 100));
        }
    }

    [Fact]
    public void Wolfram_rule_30_preset_matches_Wolfram_example()
    {
        var rule = TestSupport.ExampleRule("Wolfram.Program", "Wolfram");
        // Same neighborhood the example builds in Main().
        var neighborhood = new CellularAutomataNeighborhood<int>
        {
            NeighborLocations = [AutomataVector.Create(-1, -1), AutomataVector.Create(0, -1), AutomataVector.Create(1, -1)],
        };
        int[] size = [128, 64];
        var initial = new byte[128 * 64];
        initial[64] = 1; // the example seeds the middle of the top row
        var expected = TestSupport.RunExample(rule, neighborhood, size, false, initial, 64);

        var spec = Presets.Wolfram2D(30);
        spec.Size = size;
        AssertSameHistory(expected, TestSupport.RunSpec(spec, 64));
    }

    [Fact]
    public void Conway3D_preset_matches_Conway3D_example()
    {
        var rule = TestSupport.ExampleRule("Conway3D.Program", "Conway3D");
        // Built exactly as Conway3D's RunAutomata() does.
        var extruded = new List<Vector<int>>();
        foreach (var vector in CellularAutomataNeighborhood<int>.MooreNeighborhood.NeighborLocations)
        {
            extruded.AddRange(AutomataVector.Extrude(vector, -1, 1, 3));
        }
        var neighborhood = new CellularAutomataNeighborhood<int> { NeighborLocations = extruded.ToArray() };
        Assert.Equal(24, neighborhood.NeighborLocations.Length);

        int[] size = [16, 16, 16];
        var preset = Presets.Conway3D();
        preset.Size = size;
        var initial = Seeder.CreateInitialState(preset);
        Assert.Contains(initial, b => b == 1);
        var expected = TestSupport.RunExample(rule, neighborhood, size, wrap: true, initial, 30);
        AssertSameHistory(expected, TestSupport.RunSpec(preset, 30));
    }

    [Fact]
    public void Conway3D_preset_uses_24_neighbors_without_z_axis_pair()
    {
        var offsets = Presets.ExtrudedMoore3D();
        Assert.Equal(24, offsets.Length);
        Assert.DoesNotContain(offsets, o => o[0] == 0 && o[1] == 0);
    }

    [Fact]
    public void Wolfram3D_preset_matches_Wolfram3D_example()
    {
        // Wolfram3D.Program creates a Silk.NET window in its static constructor, so its Rules
        // field can't be loaded headless; this is a verbatim copy of it.
        var expected = TestSupport.RunExample(Wolfram3DExampleRule, Wolfram3DNeighborhood(), [32, 16, 32], false, Wolfram3DSeed(), 16);
        var spec = Presets.Wolfram3D(30);
        spec.Size = [32, 16, 32];
        AssertSameHistory(expected, TestSupport.RunSpec(spec, 16));
    }

    private static byte[] Wolfram3DSeed()
    {
        var seed = new byte[32 * 16 * 32];
        seed[16 + 0 * 32 + 16 * 32 * 16] = 1; // (16, 0, 16)
        return seed;
    }

    // ---- verbatim from Wolfram3D/Program.cs ----
    private static List<Vector<int>> aboveLeft = AutomataVector.Extrude(AutomataVector.Create(-1, -1, 0), -1, 1, 3);
    private static List<Vector<int>> above = AutomataVector.Extrude(AutomataVector.Create(0, -1, 0), -1, 1, 3);
    private static List<Vector<int>> aboveRight = AutomataVector.Extrude(AutomataVector.Create(1, -1, 0), -1, 1, 3);

    private static CellularAutomataNeighborhood<int> Wolfram3DNeighborhood()
    {
        List<Vector<int>> extrudedNeighborhood = new List<Vector<int>>();
        extrudedNeighborhood.AddRange(aboveLeft);
        extrudedNeighborhood.AddRange(above);
        extrudedNeighborhood.AddRange(aboveRight);
        return new CellularAutomataNeighborhood<int>() { NeighborLocations = extrudedNeighborhood.ToArray(), ClearNeighborsAfterUse = true };
    }

    private static readonly Action<CellularAutomataCell<int>, Dictionary<Vector<int>, CellularAutomataCell<int>>, CellularAutomata<int>> Wolfram3DExampleRule =
        (cell, neighbors, automata) =>
        {
            if (neighbors.Count == 0)
            {
                return;
            }
            int leftNeighborValue = 0;
            foreach (var leftNeighbor in aboveLeft)
            {
                leftNeighborValue = Math.Max(leftNeighborValue, neighbors.TryGetValue(leftNeighbor, out var leftCell) ? leftCell.State : 0);
            }
            int rightNeighborValue = 0;
            foreach (var rightNeighbor in aboveRight)
            {
                rightNeighborValue = Math.Max(rightNeighborValue, neighbors.TryGetValue(rightNeighbor, out var rightCell) ? rightCell.State : 0);
            }
            int centerNeighborValue = 0;
            foreach (var centerNeighbor in above)
            {
                centerNeighborValue = Math.Max(centerNeighborValue, neighbors.TryGetValue(centerNeighbor, out var centerCell) ? centerCell.State : 0);
            }
            if (leftNeighborValue == 1 && centerNeighborValue == 0 && rightNeighborValue == 0)
            {
                cell.SetState(1);
            }
            else if (leftNeighborValue == 0 && centerNeighborValue == 1 && rightNeighborValue == 1)
            {
                cell.SetState(1);
            }
            else if (leftNeighborValue == 0 && centerNeighborValue == 1 && rightNeighborValue == 0)
            {
                cell.SetState(1);
            }
            else if (leftNeighborValue == 0 && centerNeighborValue == 0 && rightNeighborValue == 1)
            {
                cell.SetState(1);
            }
            else
            {
                cell.SetState(0);
            }
        };
    // ---- end verbatim ----

    [Fact]
    public void Every_preset_is_valid_and_runs()
    {
        foreach (var preset in Presets.All)
        {
            Assert.Empty(SpecValidator.Validate(preset.Spec));
            var sim = new Simulation(preset.Spec);
            sim.Step(5);
            Assert.Equal(5, sim.Generation);
        }
    }

    [Fact]
    public void Default_sizes_are_small()
    {
        foreach (var preset in Presets.All)
        {
            int cells = preset.Spec.Size.Aggregate(1, (a, b) => a * b);
            Assert.True(cells <= 128 * 128 * 4, $"{preset.Id} has {cells} cells");
        }
        Assert.Equal([128, 128], Presets.Conway2D().Size);
        Assert.Equal([32, 32, 32], Presets.Conway3D().Size);
    }
}
