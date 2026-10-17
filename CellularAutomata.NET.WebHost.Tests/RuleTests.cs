using CellularAutomata.NET.WebHost.Engine;

namespace CellularAutomata.NET.WebHost.Tests;

/// <summary>The data-driven rules (RuleFactory) produce correct automata.</summary>
public class RuleTests
{
    private static SimulationSpec Life(int[] size, bool wrap, byte[] initial) =>
        TestSupport.WithPoints(
            new SimulationSpec
            {
                Size = size,
                Wrap = size.Select(_ => wrap).ToArray(),
                Rule = Presets.Conway2D().Rule,
            },
            initial
        );

    private static byte[] Cells(int[] size, params (int x, int y)[] live)
    {
        var states = new byte[size[0] * size[1]];
        foreach (var (x, y) in live)
        {
            states[x + y * size[0]] = 1;
        }
        return states;
    }

    [Fact]
    public void Blinker_has_period_two()
    {
        int[] size = [5, 5];
        var horizontal = Cells(size, (1, 2), (2, 2), (3, 2));
        var vertical = Cells(size, (2, 1), (2, 2), (2, 3));
        var history = TestSupport.RunSpec(Life(size, false, horizontal), 4);
        Assert.Equal(vertical.Select(b => (int)b), history[1]);
        Assert.Equal(horizontal.Select(b => (int)b), history[2]);
        Assert.Equal(history[1], history[3]);
    }

    [Fact]
    public void Block_is_still_life()
    {
        int[] size = [6, 6];
        var block = Cells(size, (2, 2), (3, 2), (2, 3), (3, 3));
        var history = TestSupport.RunSpec(Life(size, false, block), 5);
        Assert.All(history, h => Assert.Equal(block.Select(b => (int)b), h));
    }

    [Fact]
    public void Glider_moves_one_cell_diagonally_every_four_generations()
    {
        int[] size = [10, 10];
        var glider = Cells(size, (1, 0), (2, 1), (0, 2), (1, 2), (2, 2));
        var moved = Cells(size, (2, 1), (3, 2), (1, 3), (2, 3), (3, 3));
        var history = TestSupport.RunSpec(Life(size, true, glider), 4);
        Assert.Equal(moved.Select(b => (int)b), history[4]);
    }

    [Theory]
    [InlineData(false)]
    [InlineData(true)]
    public void Life_matches_reference_on_random_soup(bool wrap)
    {
        int[] size = [48, 36];
        var spec = Life(size, wrap, TestSupport.RandomStates(48 * 36, 0.3, 1234));
        var actual = TestSupport.RunSpec(spec, 60);
        var expected = actual[0];
        for (int t = 1; t <= 60; t++)
        {
            expected = Reference.TotalisticStep(expected, size, wrap, Presets.Moore(2), [3], [2, 3], 2);
            Assert.Equal(expected, actual[t]);
        }
    }

    [Fact]
    public void Generations_cells_decay_through_extra_states()
    {
        // A lone live cell with S = {} and 4 states: 1 -> 2 -> 3 -> 0.
        var spec = new SimulationSpec
        {
            Size = [5, 5],
            Rule = new RuleSpec { Kind = RuleKinds.Totalistic, Neighborhood = Presets.Moore(2), Birth = [3], Survive = [], States = 4 },
            Seed = new SeedSpec { Kind = SeedKinds.Single, At = [0.5, 0.5] },
        };
        var history = TestSupport.RunSpec(spec, 3);
        int center = 2 + 2 * 5;
        Assert.Equal([1, 2, 3, 0], history.Select(h => h[center]));
    }

    [Fact]
    public void Brians_brain_matches_reference()
    {
        var preset = Presets.All.Single(p => p.Id == "brians-brain-2d").Spec;
        preset.Size = [40, 40];
        var actual = TestSupport.RunSpec(preset, 40);
        var expected = actual[0];
        for (int t = 1; t <= 40; t++)
        {
            expected = Reference.TotalisticStep(expected, [40, 40], true, Presets.Moore(2), [2], [], 3);
            Assert.Equal(expected, actual[t]);
        }
    }

    [Fact]
    public void Totalistic_3D_matches_reference()
    {
        int[] size = [10, 9, 8];
        var spec = TestSupport.WithPoints(
            new SimulationSpec
            {
                Size = size,
                Wrap = [true, true, true],
                Rule = new RuleSpec { Kind = RuleKinds.Totalistic, Neighborhood = Presets.Moore(3), Birth = [5, 6, 7], Survive = [4, 5, 6], States = 2 },
            },
            TestSupport.RandomStates(10 * 9 * 8, 0.3, 77)
        );
        var actual = TestSupport.RunSpec(spec, 20);
        var expected = actual[0];
        for (int t = 1; t <= 20; t++)
        {
            expected = Reference.TotalisticStep(expected, size, true, Presets.Moore(3), [5, 6, 7], [4, 5, 6], 2);
            Assert.Equal(expected, actual[t]);
        }
    }

    [Fact]
    public void B0_rule_evaluates_every_cell()
    {
        // B0 means empty space is born, which the active-cell optimisation can't see.
        int[] size = [12, 12];
        var spec = new SimulationSpec
        {
            Size = size,
            Wrap = [true, true],
            Rule = new RuleSpec { Kind = RuleKinds.Totalistic, Neighborhood = Presets.Moore(2), Birth = [0, 3], Survive = [2, 3] },
            Seed = new SeedSpec { Kind = SeedKinds.Single, At = [0.5, 0.5] },
        };
        var sim = new Simulation(spec);
        Assert.Equal("allCells", sim.Info.UpdateMode);
        var actual = TestSupport.RunSpec(spec, 6);
        var expected = actual[0];
        for (int t = 1; t <= 6; t++)
        {
            expected = Reference.TotalisticStep(expected, size, true, Presets.Moore(2), [0, 3], [2, 3], 2);
            Assert.Equal(expected, actual[t]);
        }
    }

    public static IEnumerable<object[]> AllElementaryRules() => Enumerable.Range(0, 256).Select(r => new object[] { r });

    /// <summary>
    /// The 2D Wolfram setup (each row computed from the row above, row 0 is the seed) must
    /// reproduce the space-time diagram of the 1D elementary CA, for every rule 0-255.
    /// </summary>
    [Theory]
    [MemberData(nameof(AllElementaryRules))]
    public void Elementary_rule_matches_1D_reference(int rule)
    {
        const int width = 41;
        const int height = 24;
        foreach (bool randomRow in new[] { false, true })
        {
            var spec = Presets.Wolfram2D(rule);
            spec.Size = [width, height];
            int[] row0 = randomRow
                ? TestSupport.RandomStates(width, 0.5, (ulong)rule + 1).Select(b => (int)b).ToArray()
                : Enumerable.Range(0, width).Select(x => x == width / 2 ? 1 : 0).ToArray();
            var initial = new byte[width * height];
            for (int x = 0; x < width; x++)
            {
                initial[x] = (byte)row0[x];
            }
            TestSupport.WithPoints(spec, initial);

            var sim = new Simulation(spec);
            Assert.Equal((rule & 1) == 1 ? "allCells" : "activeCells", sim.Info.UpdateMode);
            sim.Step(height - 1);
            var grid = sim.GetState();

            var expected = row0;
            for (int y = 0; y < height; y++)
            {
                var actualRow = grid.Skip(y * width).Take(width).Select(b => (int)b).ToArray();
                Assert.True(
                    expected.SequenceEqual(actualRow),
                    $"rule {rule} ({(randomRow ? "random" : "single")} seed) row {y}:\n  expected {string.Concat(expected)}\n  actual   {string.Concat(actualRow)}"
                );
                expected = Reference.ElementaryStep(expected, rule, wrap: false);
            }
        }
    }

    [Fact]
    public void Rule_30_rows_match_known_pattern()
    {
        // Hand-checked rows of Rule 30 from a single cell.
        string[] rows = ["1", "111", "11001", "1101111", "110010001", "11011110111"];
        var spec = Presets.Wolfram2D(30);
        spec.Size = [21, 6];
        var sim = new Simulation(spec);
        sim.Step(5);
        var grid = sim.GetState();
        for (int y = 0; y < rows.Length; y++)
        {
            int center = 10;
            string actual = string.Concat(Enumerable.Range(center - y, 2 * y + 1).Select(x => grid[x + y * 21]));
            Assert.Equal(rows[y], actual);
        }
    }

    [Fact]
    public void Rule_90_is_pascals_triangle_mod_2()
    {
        const int width = 65;
        const int height = 32;
        var spec = Presets.Wolfram2D(90);
        spec.Size = [width, height];
        var sim = new Simulation(spec);
        sim.Step(height - 1);
        var grid = sim.GetState();
        int center = width / 2;
        for (int t = 0; t < height; t++)
        {
            for (int x = 0; x < width; x++)
            {
                int k = x - center + t; // cell (center - t + 2k) holds C(t, k) mod 2
                bool expected = k >= 0 && k % 2 == 0 && k / 2 <= t && ((t & (k / 2)) == k / 2);
                Assert.Equal(expected ? 1 : 0, grid[x + t * width]);
            }
        }
    }

    [Fact]
    public void Rule_number_and_table_are_equivalent()
    {
        var withTable = Presets.Wolfram2D(110);
        var withNumber = Presets.Wolfram2D(110);
        withNumber.Rule.Table = null;
        withNumber.Rule.RuleNumber = 110;
        Assert.Equal(TestSupport.RunSpec(withTable, 30)[^1], TestSupport.RunSpec(withNumber, 30)[^1]);
        Assert.Equal([0, 1, 1, 1, 0, 1, 1, 0], RuleFactory.TableFromRuleNumber(110, 3));
    }

    [Fact]
    public void Pattern_rule_with_the_cell_itself_as_a_group()
    {
        // One group containing only (0,0): table [1, 0] flips every cell every step.
        var spec = new SimulationSpec
        {
            Size = [4, 3],
            Rule = new RuleSpec { Kind = RuleKinds.Pattern, Groups = [[[0, 0]]], Table = [1, 0] },
            Seed = new SeedSpec { Kind = SeedKinds.Single, At = [0, 0] },
        };
        var history = TestSupport.RunSpec(spec, 2);
        Assert.Equal(1, history[0][0]);
        Assert.All(history[1].Skip(1), v => Assert.Equal(1, v));
        Assert.Equal(0, history[1][0]);
        Assert.Equal(history[0], history[2]);
    }
}
