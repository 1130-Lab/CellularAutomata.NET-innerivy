using System.Numerics;
using CellularAutomata.NET;
using CellularAutomata.Web.Engine;

namespace CellularAutomata.Web.Tests;

/// <summary>Tests for the library changes made for the web host.</summary>
public class LibraryTests
{
    private static CellularAutomataConfiguration<int> Config(bool wrap, params int[] size) =>
        new()
        {
            Dimensions = size.Select(s => new CellularAutomataDimension { Cells = s, WrapStart = wrap, WrapEnd = wrap }).ToArray(),
            DefaultState = 0,
        };

    [Fact]
    public void Grid_IndexAndPositionRoundTrip()
    {
        var grid = new CellularAutomataGrid<int>(Config(false, 3, 4, 5).Dimensions, 0);
        Assert.Equal(60, grid.Cells.Length);
        Assert.Equal([1, 3, 12], grid.Strides);
        for (int i = 0; i < grid.Cells.Length; i++)
        {
            Assert.Equal(i, grid.GetIndex(grid.Cells[i].Position));
            Assert.Equal(grid.Cells[i], grid.State[grid.Cells[i].Position]);
        }
        Assert.Equal(AutomataVector.Create(2, 1, 3), grid.GetPosition(2 + 1 * 3 + 3 * 12));
    }

    [Fact]
    public void Grid_CopyKeepsPositionsAndStates()
    {
        var automaton = new CellularAutomata<int>(Config(false, 4, 4), CellularAutomataNeighborhood<int>.MooreNeighborhood, ExampleRules.Conway);
        automaton.InitializeGrid(new Dictionary<Vector<int>, int> { { AutomataVector.Create(1, 2), 1 } });
        var copy = automaton.Grid.Copy();
        for (int i = 0; i < copy.Cells.Length; i++)
        {
            Assert.Equal(automaton.Grid.Cells[i].Position, copy.Cells[i].Position);
            Assert.Equal(automaton.Grid.Cells[i].State, copy.Cells[i].State);
        }
        Assert.Equal(1, copy.GetCellValue(AutomataVector.Create(1, 2)));
        Assert.NotSame(automaton.Grid.Cells[0], copy.Cells[0]);
    }

    [Theory]
    [InlineData(0, 0)]
    [InlineData(3, 3)]
    [InlineData(-1, 20)]
    public void StateHistory_IsBounded(int limit, int expected)
    {
        var config = Config(false, 3, 3);
        config.CellStateHistoryLimit = limit;
        config.ProcessAllCells = true;
        var automaton = new CellularAutomata<int>(config, CellularAutomataNeighborhood<int>.MooreNeighborhood, ExampleRules.Conway);
        for (int i = 0; i < 20; i++)
        {
            automaton.Step();
        }
        Assert.All(automaton.Grid.Cells, c => Assert.Equal(expected, c.StateHistory.Count));
    }

    [Fact]
    public void Wrap_HandlesOffsetsLargerThanOne()
    {
        var dims = Config(true, 5, 5).Dimensions;
        Vector<int> position = AutomataVector.Create(-2, 7);
        Assert.True(CellularAutomataNeighborhood<int>.TryWrap(ref position, dims));
        Assert.Equal(AutomataVector.Create(3, 2), position);

        position = AutomataVector.Create(-2, 0);
        Assert.False(CellularAutomataNeighborhood<int>.TryWrap(ref position, Config(false, 5, 5).Dimensions));
    }

    [Theory]
    [InlineData(1, 1, 2, 2)]
    [InlineData(2, 1, 8, 4)]
    [InlineData(3, 1, 26, 6)]
    [InlineData(2, 2, 24, 12)]
    [InlineData(4, 1, 80, 8)]
    public void Neighborhoods_AreNDimensional(int dims, int radius, int moore, int vonNeumann)
    {
        Assert.Equal(moore, CellularAutomataNeighborhood<int>.Moore(dims, radius).NeighborLocations.Length);
        Assert.Equal(vonNeumann, CellularAutomataNeighborhood<int>.VonNeumann(dims, radius).NeighborLocations.Length);
    }

    [Fact]
    public void Grid_RejectsMoreDimensionsThanVectorCount()
    {
        int[] size = Enumerable.Repeat(2, Vector<int>.Count + 1).ToArray();
        Assert.Throws<ArgumentException>(() => new CellularAutomataGrid<int>(Config(false, size).Dimensions, 0));
    }

    /// <summary>
    /// After the first step only changed cells and their dependents are evaluated. That must give the
    /// same result as evaluating every cell, including for rules where an all-dead neighborhood births
    /// cells (e.g. Wolfram rules with bit 0 set) and with wrapping.
    /// </summary>
    [Theory]
    [InlineData("conway-2d")]
    [InlineData("conway-3d")]
    [InlineData("brians-brain-2d")]
    [InlineData("life-4555-3d")]
    [InlineData("crystal-3d")]
    public void SparseStepping_MatchesFullStepping(string presetId)
    {
        SimulationSpec spec = Presets.Get(presetId).Spec;
        AssertSparseMatchesFull(spec, 30);
    }

    [Theory]
    [InlineData(1)]
    [InlineData(57)]
    [InlineData(105)]
    [InlineData(255)]
    public void SparseStepping_MatchesFullStepping_NonQuiescentRules(int rule)
    {
        SimulationSpec spec = new()
        {
            Size = [40, 30],
            Wrap = [true, false],
            Rule = Presets.Wolfram2D(rule),
            Seed = new SeedSpec { Type = SeedTypes.Random, Seed = 9, Density = 0.5 },
        };
        AssertSparseMatchesFull(spec, 40);
    }

    private static void AssertSparseMatchesFull(SimulationSpec spec, int steps)
    {
        RuleFactory.BuiltRule built = RuleFactory.Build(spec.Rule, spec.Size.Length);
        CellularAutomata<byte> Make(bool all)
        {
            var automaton = new CellularAutomata<byte>(
                new CellularAutomataConfiguration<byte>
                {
                    Dimensions = spec.Size.Select((s, d) => new CellularAutomataDimension { Cells = s, WrapStart = spec.Wrap?[d] ?? false, WrapEnd = spec.Wrap?[d] ?? false }).ToArray(),
                    DefaultState = 0,
                    ProcessAllCells = all,
                },
                built.Neighborhood,
                built.Rule
            );
            automaton.InitializeGrid(Seeder.CreateStates(spec.Seed, spec.Size));
            return automaton;
        }
        var sparse = Make(false);
        var full = Make(true);
        for (int i = 0; i < steps; i++)
        {
            sparse.Step();
            full.Step();
            Assert.Equal(full.Grid.Cells.Select(c => c.State), sparse.Grid.Cells.Select(c => c.State));
        }
        Assert.True(sparse.LastEvaluatedCount <= full.LastEvaluatedCount);
    }
}
