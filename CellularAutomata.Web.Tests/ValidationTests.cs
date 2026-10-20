using System.Numerics;
using CellularAutomata.Web.Engine;

namespace CellularAutomata.Web.Tests;

public class ValidationTests
{
    private static SimulationSpec Valid2D() =>
        new()
        {
            Size = [16, 16],
            Rule = new RuleSpec { Kind = RuleKinds.LifeLike, Birth = [3], Survive = [2, 3] },
            Seed = new SeedSpec(),
        };

    private static string Error(SimulationSpec spec) =>
        string.Join(" ", Assert.Throws<SpecException>(() => Simulation.Create(spec)).Errors);

    [Fact]
    public void AllPresetsAreValid()
    {
        foreach (Preset preset in Presets.All)
        {
            Simulation.Create(preset.Spec);
        }
    }

    [Fact]
    public void RejectsBadSizes()
    {
        var spec = Valid2D();
        spec.Size = [];
        Assert.Contains("dimensions", Error(spec));
        spec.Size = [0, 16];
        Assert.Contains("between 1 and", Error(spec));
        spec.Size = [2048, 2048];
        Assert.Contains("maximum is", Error(spec));
        spec.Size = Enumerable.Repeat(2, Vector<int>.Count + 1).ToArray();
        Assert.Contains("dimensions", Error(spec));
    }

    [Fact]
    public void RejectsTooManyNeighborLinks()
    {
        var spec = Valid2D();
        spec.Size = [100, 100, 100];
        spec.Rule.Neighborhood = new NeighborhoodSpec { Type = NeighborhoodTypes.Moore };
        Assert.Contains("too large", Error(spec));
    }

    [Fact]
    public void RejectsBadLifeLikeRules()
    {
        var spec = Valid2D();
        spec.Rule.Birth = [9];
        Assert.Contains("Birth count 9", Error(spec));

        spec = Valid2D();
        spec.Rule.States = 1;
        Assert.Contains("States", Error(spec));

        spec = Valid2D();
        spec.Rule.Neighborhood = new NeighborhoodSpec { Type = NeighborhoodTypes.ExtrudedMoore };
        Assert.Contains("3D only", Error(spec));

        spec = Valid2D();
        spec.Rule.Neighborhood = new NeighborhoodSpec { Type = NeighborhoodTypes.Custom, Offsets = [[1, 0], [1, 0]] };
        Assert.Contains("repeated", Error(spec));

        spec.Rule.Neighborhood.Offsets = [[0, 0]];
        Assert.Contains("cell itself", Error(spec));

        spec.Rule.Neighborhood.Offsets = [[1, 0, 0]];
        Assert.Contains("2 components", Error(spec));

        spec = Valid2D();
        spec.Rule.Neighborhood = new NeighborhoodSpec { Type = NeighborhoodTypes.Moore, Radius = 9 };
        Assert.Contains("radius", Error(spec));

        spec = Valid2D();
        spec.Rule.Kind = "javascript";
        Assert.Contains("Unknown rule kind", Error(spec));
    }

    [Fact]
    public void RejectsBadTableRules()
    {
        var spec = Valid2D();
        spec.Rule = Presets.Wolfram2D(30);
        spec.Rule.Table = "0101";
        Assert.Contains("8 digits", Error(spec));
        spec.Rule.Table = "0101010x";
        Assert.Contains("digits 0-9", Error(spec));
        spec.Rule.Groups = [];
        Assert.Contains("neighbor groups", Error(spec));
    }

    [Fact]
    public void RejectsBadSeeds()
    {
        var spec = Valid2D();
        spec.Seed = new SeedSpec { Type = SeedTypes.Cells, Cells = [[16, 0]] };
        Assert.Contains("outside the grid", Error(spec));
        spec.Seed = new SeedSpec { Density = 1.5 };
        Assert.Contains("Density", Error(spec));
        spec.Seed = new SeedSpec { Fill = 0 };
        Assert.Contains("Fill", Error(spec));
        spec.Seed = new SeedSpec { Density = double.NaN };
        Assert.Contains("Density", Error(spec));
    }

    [Fact]
    public void SetCellsValidatesInput()
    {
        Simulation sim = Simulation.Create(Valid2D());
        Assert.Throws<SpecException>(() => sim.SetCells([256], 1));
        Assert.Throws<SpecException>(() => sim.SetCells([0], 2));
        sim.SetCells([0, 17], 1);
        Assert.Equal(1, sim.GetStates()[17]);
    }
}
