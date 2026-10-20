using System.Numerics;
using CellularAutomata.NET;
using CellularAutomata.Web.Engine;

namespace CellularAutomata.Web.Tests;

public class RuleTests
{
    private static SimulationSpec Life2D(int width, int height, bool wrap, params int[][] cells) =>
        new()
        {
            Size = [width, height],
            Wrap = [wrap, wrap],
            Rule = Presets.Get("conway-2d").Spec.Rule,
            Seed = new SeedSpec { Type = SeedTypes.Cells, Cells = cells },
        };

    private static HashSet<(int, int)> LiveCells2D(Simulation sim)
    {
        int width = sim.Spec.Size[0];
        return sim
            .GetStates()
            .Select((state, i) => (state, i))
            .Where(t => t.state == 1)
            .Select(t => (t.i % width, t.i / width))
            .ToHashSet();
    }

    [Fact]
    public void Conway_BlinkerOscillatesWithPeriodTwo()
    {
        Simulation sim = Simulation.Create(Life2D(5, 5, false, [1, 2], [2, 2], [3, 2]));
        sim.Step();
        Assert.Equal([(2, 1), (2, 2), (2, 3)], LiveCells2D(sim).Order());
        sim.Step();
        Assert.Equal([(1, 2), (2, 2), (3, 2)], LiveCells2D(sim).Order());
    }

    [Fact]
    public void Conway_BlockIsStill()
    {
        Simulation sim = Simulation.Create(Life2D(4, 4, false, [1, 1], [2, 1], [1, 2], [2, 2]));
        sim.Step(5);
        Assert.Equal([(1, 1), (1, 2), (2, 1), (2, 2)], LiveCells2D(sim).Order());
    }

    [Fact]
    public void Conway_GliderMovesDiagonallyAndWrapsAround()
    {
        int[][] glider = [[1, 0], [2, 1], [0, 2], [1, 2], [2, 2]];
        Simulation sim = Simulation.Create(Life2D(8, 8, true, glider));
        // A glider moves (+1, +1) every 4 generations, so 32 generations brings it back on an 8x8 torus.
        sim.Step(4);
        Assert.Equal(glider.Select(c => (c[0] + 1, c[1] + 1)).Order(), LiveCells2D(sim).Order());
        sim.Step(28);
        Assert.Equal(glider.Select(c => (c[0], c[1])).Order(), LiveCells2D(sim).Order());
    }

    [Fact]
    public void Conway_MatchesTheConwayExampleRule()
    {
        // The Conway example uses the legacy dictionary rule on an unwrapped grid with a glider.
        SimulationSpec spec = Presets.Get("conway-2d-glider").Spec;
        Simulation sim = Simulation.Create(spec);
        CellularAutomata<int> example = ExampleRules.Create(spec, ExampleRules.Conway, CellularAutomataNeighborhood<int>.MooreNeighborhood);
        for (int i = 0; i < 60; i++)
        {
            sim.Step();
            example.Step();
            Assert.Equal(ExampleRules.States(example), sim.GetStates());
        }
    }

    [Fact]
    public void Conway3D_UsesTheExamples24NeighborExtrudedMoore()
    {
        Vector<int>[] neighborhood = RuleFactory.ExtrudedMoore();
        Assert.Equal(24, neighborhood.Length);
        Assert.Equal(24, neighborhood.Distinct().Count());
        Assert.DoesNotContain(AutomataVector.Create(0, 0, 1), neighborhood);
        Assert.DoesNotContain(AutomataVector.Create(0, 0, -1), neighborhood);
        Assert.Equal(24, Simulation.Create(Presets.Get("conway-3d").Spec).NeighborCount);
    }

    [Fact]
    public void Conway3D_MatchesTheConway3DExampleRule()
    {
        SimulationSpec spec = Presets.Get("conway-3d").Spec;
        Simulation sim = Simulation.Create(spec);
        CellularAutomata<int> example = ExampleRules.Create(
            spec,
            ExampleRules.Conway,
            new CellularAutomataNeighborhood<int> { NeighborLocations = RuleFactory.ExtrudedMoore() }
        );
        Assert.True(sim.Population() > 500);
        for (int i = 0; i < 15; i++)
        {
            sim.Step();
            example.Step();
            Assert.Equal(ExampleRules.States(example), sim.GetStates());
        }
    }

    /// <summary>
    /// Naive elementary CA: row y at generation t is the rule applied to row y - 1 at t - 1, with
    /// cells outside the grid reading as 0. Row 0 has no neighbors and never changes.
    /// </summary>
    private static byte[] ReferenceElementary(int rule, byte[] firstRow, int height)
    {
        int width = firstRow.Length;
        byte[] grid = new byte[width * height];
        firstRow.CopyTo(grid, 0);
        for (int y = 1; y < height; y++)
        {
            for (int x = 0; x < width; x++)
            {
                int l = x > 0 ? grid[(y - 1) * width + x - 1] : 0;
                int c = grid[(y - 1) * width + x];
                int r = x < width - 1 ? grid[(y - 1) * width + x + 1] : 0;
                grid[y * width + x] = (byte)((rule >> (l << 2 | c << 1 | r)) & 1);
            }
        }
        return grid;
    }

    [Fact]
    public void Wolfram2D_AllRulesMatchReference()
    {
        const int width = 33;
        const int height = 24;
        SplitMix64 rng = new SplitMix64(5);
        byte[] randomRow = Enumerable.Range(0, width).Select(_ => (byte)(rng.Next() & 1)).ToArray();
        byte[] singleRow = new byte[width];
        singleRow[width / 2] = 1;

        for (int rule = 0; rule < 256; rule++)
        {
            foreach (byte[] row in new[] { singleRow, randomRow })
            {
                SimulationSpec spec = new()
                {
                    Size = [width, height],
                    Rule = Presets.Wolfram2D(rule),
                    Seed = new SeedSpec
                    {
                        Type = SeedTypes.Cells,
                        Cells = row.Select((s, x) => (s, x)).Where(t => t.s == 1).Select(t => new[] { t.x, 0 }).ToArray(),
                    },
                };
                Simulation sim = Simulation.Create(spec);
                sim.Step(height - 1);
                Assert.True(
                    ReferenceElementary(rule, row, height).AsSpan().SequenceEqual(sim.GetStates()),
                    $"Rule {rule} differs from the reference."
                );
            }
        }
    }

    [Fact]
    public void Wolfram2D_Rule30MatchesTheWolframExampleRule()
    {
        SimulationSpec spec = Presets.Get("wolfram-30-2d").Spec;
        Simulation sim = Simulation.Create(spec);
        CellularAutomata<int> example = ExampleRules.Create(spec, ExampleRules.Wolfram30, ExampleRules.WolframNeighborhood);
        sim.Step(127);
        for (int i = 0; i < 127; i++)
        {
            example.Step();
        }
        Assert.Equal(ExampleRules.States(example), sim.GetStates());
        // Known prefix of the rule 30 center column: 1101110011...
        int width = spec.Size[0];
        string center = string.Concat(Enumerable.Range(0, 10).Select(y => sim.GetStates()[y * width + 64]));
        Assert.Equal("1101110011", center);
    }

    [Fact]
    public void Wolfram3D_Rule30MatchesTheWolfram3DExampleRule()
    {
        SimulationSpec spec = Presets.Get("wolfram-30-3d").Spec;
        Simulation sim = Simulation.Create(spec);
        CellularAutomata<int> example = ExampleRules.Create(spec, ExampleRules.Wolfram3D30, ExampleRules.Wolfram3DNeighborhood);
        for (int i = 0; i < 31; i++)
        {
            sim.Step();
            example.Step();
        }
        Assert.Equal(ExampleRules.States(example), sim.GetStates());
        Assert.True(sim.Population() > 100);
    }

    [Fact]
    public void Generations_LiveCellsDecayThroughDyingStates()
    {
        // Brian's Brain: B2/S/3. A lone pair of cells births neighbors, then each live cell dies via state 2.
        SimulationSpec spec = new()
        {
            Size = [6, 6],
            Rule = Presets.Get("brians-brain-2d").Spec.Rule,
            Seed = new SeedSpec { Type = SeedTypes.Cells, Cells = [[2, 2], [3, 2]] },
        };
        Simulation sim = Simulation.Create(spec);
        sim.Step();
        byte[] states = sim.GetStates();
        Assert.Equal(2, states[2 * 6 + 2]);
        Assert.Equal(2, states[2 * 6 + 3]);
        Assert.Equal(1, states[1 * 6 + 2]); // (2,1) touched both
        sim.Step();
        states = sim.GetStates();
        Assert.Equal(0, states[2 * 6 + 2]);
        Assert.Equal(2, states[1 * 6 + 2]);
    }

    [Fact]
    public void Table_SupportsCustomGroupsAndMultipleOutputStates()
    {
        // Two groups (left, right) in 1 row of time: output 3 when exactly one side is set.
        SimulationSpec spec = new()
        {
            Size = [5, 2],
            Rule = new RuleSpec
            {
                Kind = RuleKinds.Table,
                Groups = [[[-1, -1]], [[1, -1]]],
                Table = "0330",
            },
            Seed = new SeedSpec { Type = SeedTypes.Cells, Cells = [[2, 0]] },
        };
        Simulation sim = Simulation.Create(spec);
        sim.Step();
        Assert.Equal(new byte[] { 0, 0, 1, 0, 0, 0, 3, 0, 3, 0 }, sim.GetStates());
        Assert.Equal(4, sim.States);
    }

    [Fact]
    public void LifeLike_VonNeumannAndRadiusNeighborhoods()
    {
        SimulationSpec spec = new()
        {
            Size = [9, 9, 9],
            Rule = new RuleSpec
            {
                Kind = RuleKinds.LifeLike,
                Birth = [1],
                Survive = [0],
                Neighborhood = new NeighborhoodSpec { Type = NeighborhoodTypes.VonNeumann },
            },
            Seed = new SeedSpec { Type = SeedTypes.Cells, Cells = [[4, 4, 4]] },
        };
        Simulation sim = Simulation.Create(spec);
        Assert.Equal(6, sim.NeighborCount);
        sim.Step();
        Assert.Equal(7, sim.Population());

        spec.Rule.Neighborhood = new NeighborhoodSpec { Type = NeighborhoodTypes.Moore, Radius = 2 };
        Assert.Equal(124, Simulation.Create(spec).NeighborCount);
    }

    [Fact]
    public void RandomSeed_IsDeterministicAndRespectsFill()
    {
        SimulationSpec spec = Presets.Get("conway-3d").Spec;
        byte[] a = Seeder.CreateStates(spec.Seed, spec.Size);
        byte[] b = Seeder.CreateStates(spec.Seed, spec.Size);
        Assert.Equal(a, b);
        for (int i = 0; i < a.Length; i++)
        {
            int x = i % 32, y = i / 32 % 32, z = i / 1024;
            bool inside = x is >= 10 and < 21 && y is >= 10 and < 21 && z is >= 10 and < 21;
            if (!inside)
            {
                Assert.Equal(0, a[i]);
            }
        }
        double density = a.Count(s => s == 1) / (11.0 * 11 * 11);
        Assert.InRange(density, 0.45, 0.55);
    }
}
