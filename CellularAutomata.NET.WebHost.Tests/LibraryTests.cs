using System.Collections.Immutable;
using System.Numerics;
using CellularAutomata.NET.WebHost.Engine;

namespace CellularAutomata.NET.WebHost.Tests;

/// <summary>Behavior of the refactored CellularAutomata.NET library itself.</summary>
public class LibraryTests
{
    private static CellularAutomataRule<int> LifeRule => (cell, neighbors, automata) =>
    {
        int live = 0;
        for (int i = 0; i < neighbors.Length; i++)
        {
            live += neighbors.GetState(i, 0);
        }
        cell.SetState(cell.State == 1 ? (live is 2 or 3 ? 1 : 0) : (live == 3 ? 1 : 0));
    };

    private static CellularAutomata<int> Life(int[] size, bool wrap, CellularAutomataUpdateMode mode = CellularAutomataUpdateMode.ActiveCells, int history = 0) =>
        new(
            new CellularAutomataConfiguration<int>
            {
                Dimensions = TestSupport.Dims(size, wrap),
                DefaultState = 0,
                UpdateMode = mode,
                CellStateHistoryLimit = history,
            },
            CellularAutomataNeighborhood<int>.Moore(size.Length),
            LifeRule
        );

    [Theory]
    [InlineData(2, 1, 8)]
    [InlineData(3, 1, 26)]
    [InlineData(4, 1, 80)]
    [InlineData(2, 2, 24)]
    public void Moore_neighborhood_is_n_dimensional(int dims, int radius, int expected)
    {
        var n = CellularAutomataNeighborhood<int>.Moore(dims, radius);
        Assert.Equal(expected, n.NeighborLocations.Length);
        Assert.Equal(expected, n.NeighborLocations.Distinct().Count());
        Assert.DoesNotContain(Vector<int>.Zero, n.NeighborLocations);
    }

    [Theory]
    [InlineData(2, 1, 4)]
    [InlineData(3, 1, 6)]
    [InlineData(3, 2, 24)]
    public void VonNeumann_neighborhood_is_n_dimensional(int dims, int radius, int expected)
    {
        Assert.Equal(expected, CellularAutomataNeighborhood<int>.VonNeumann(dims, radius).NeighborLocations.Length);
    }

    [Fact]
    public void Static_2D_neighborhoods_match_the_factories()
    {
        Assert.Equal(
            CellularAutomataNeighborhood<int>.MooreNeighborhood.NeighborLocations.ToHashSet(),
            CellularAutomataNeighborhood<int>.Moore(2).NeighborLocations.ToHashSet()
        );
        Assert.Equal(
            CellularAutomataNeighborhood<int>.VonNeumannNeighborhood.NeighborLocations.ToHashSet(),
            CellularAutomataNeighborhood<int>.VonNeumann(2).NeighborLocations.ToHashSet()
        );
    }

    [Fact]
    public void Grid_index_and_position_round_trip()
    {
        var grid = new CellularAutomataGrid<int>(TestSupport.Dims([5, 4, 3], false), 0);
        for (int i = 0; i < grid.CellCount; i++)
        {
            var cell = grid.GetCell(i);
            Assert.Equal(i, cell.Index);
            Assert.Equal(i, grid.GetIndex(cell.Position));
            Assert.Same(cell, grid.State[cell.Position]);
        }
        Assert.Equal(1, grid.GetIndex(AutomataVector.Create(1, 0, 0)));
        Assert.Equal(5, grid.GetIndex(AutomataVector.Create(0, 1, 0)));
        Assert.Equal(20, grid.GetIndex(AutomataVector.Create(0, 0, 1)));
        Assert.Null(grid.GetCell(AutomataVector.Create(5, 0, 0)));
    }

    [Fact]
    public void Copy_keeps_positions_and_states_and_is_detached()
    {
        var automaton = Life([6, 6], wrap: false);
        automaton.InitializeGrid(new Dictionary<Vector<int>, int> { [AutomataVector.Create(2, 3)] = 1 });
        var copy = automaton.Grid.Copy();
        foreach (var cell in automaton.Grid.Cells)
        {
            var copied = copy.GetCell(cell.Index);
            Assert.Equal(cell.Position, copied.Position);
            Assert.Equal(cell.State, copied.State);
            Assert.NotSame(cell, copied);
        }
        Assert.Equal(1, copy.GetCellValue(AutomataVector.Create(2, 3)));
        automaton.Step();
        Assert.Equal(1, copy.GetCellValue(AutomataVector.Create(2, 3)));
    }

    [Fact]
    public void Grid_built_from_an_existing_state_keeps_positions()
    {
        var source = new CellularAutomataGrid<int>(TestSupport.Dims([3, 2], false), 7);
        var rebuilt = new CellularAutomataGrid<int>(source.Dimensions, source.State);
        foreach (var cell in source.Cells)
        {
            Assert.Equal(cell.Position, rebuilt.GetCell(cell.Index).Position);
        }
    }

    [Fact]
    public void Cell_history_is_off_by_default_and_bounded_when_enabled()
    {
        var blinker = new Dictionary<Vector<int>, int>
        {
            [AutomataVector.Create(1, 2)] = 1,
            [AutomataVector.Create(2, 2)] = 1,
            [AutomataVector.Create(3, 2)] = 1,
        };

        var off = Life([5, 5], wrap: false);
        off.InitializeGrid(blinker);
        for (int i = 0; i < 10; i++) off.Step();
        Assert.All(off.Grid.Cells, c => Assert.Empty(c.StateHistory));

        var on = Life([5, 5], wrap: false, history: 3);
        on.InitializeGrid(blinker);
        for (int i = 0; i < 10; i++) on.Step();
        // (1,2) blinks 1,0,1,0... ; history holds the three states before the current one.
        var cell = on.Grid.GetCell(AutomataVector.Create(1, 2))!;
        Assert.Equal(3, cell.StateHistory.Count);
        Assert.Equal([0, 1, 0], cell.StateHistory);
        Assert.Equal(1, cell.State);
    }

    [Fact]
    public void Glider_crosses_wrapped_edges_in_active_cell_mode()
    {
        // The original active-cell tracking ignored wrapping, so cells across an edge from a
        // change were never re-evaluated. A glider on a torus must return to its start after 4*size steps.
        int[] size = [12, 12];
        var automaton = Life(size, wrap: true);
        var glider = new Dictionary<Vector<int>, int>
        {
            [AutomataVector.Create(1, 0)] = 1,
            [AutomataVector.Create(2, 1)] = 1,
            [AutomataVector.Create(0, 2)] = 1,
            [AutomataVector.Create(1, 2)] = 1,
            [AutomataVector.Create(2, 2)] = 1,
        };
        automaton.InitializeGrid(glider);
        var start = TestSupport.Snapshot(automaton.Grid);
        for (int i = 0; i < 4 * 12; i++)
        {
            automaton.Step();
            Assert.Equal(5, automaton.Grid.Cells.Count(c => c.State == 1));
        }
        Assert.Equal(start, TestSupport.Snapshot(automaton.Grid));
    }

    [Theory]
    [InlineData(false)]
    [InlineData(true)]
    public void Active_cell_mode_matches_evaluating_every_cell(bool wrap)
    {
        int[] size = [40, 30];
        var initial = TestSupport.RandomStates(40 * 30, 0.35, 99).Select(b => (int)b).ToArray();
        var active = Life(size, wrap, CellularAutomataUpdateMode.ActiveCells);
        var all = Life(size, wrap, CellularAutomataUpdateMode.AllCells);
        active.InitializeGrid(initial);
        all.InitializeGrid(initial);
        for (int i = 0; i < 80; i++)
        {
            active.Step();
            all.Step();
            Assert.Equal(TestSupport.Snapshot(all.Grid), TestSupport.Snapshot(active.Grid));
        }
        Assert.Equal(80, active.Generation);
    }

    [Fact]
    public void Wrapping_handles_offsets_larger_than_one()
    {
        // Radius-2 offsets on a wrapped grid: (-2) at x=0 must land on x=size-2, not size-1.
        int[] size = [9, 7];
        int[][] offsets = Presets.Moore(2, 2);
        int[] birth = [5, 6];
        int[] survive = [4, 5, 6, 7];
        var spec = TestSupport.WithPoints(
            new SimulationSpec
            {
                Size = size,
                Wrap = [true, true],
                Rule = new RuleSpec { Kind = RuleKinds.Totalistic, Neighborhood = offsets, Birth = birth, Survive = survive },
            },
            TestSupport.RandomStates(63, 0.4, 5)
        );
        var actual = TestSupport.RunSpec(spec, 30);
        var expected = actual[0];
        for (int t = 1; t <= 30; t++)
        {
            expected = Reference.TotalisticStep(expected, size, true, offsets, birth, survive, 2);
            Assert.Equal(expected, actual[t]);
        }
    }

    [Fact]
    public void Dictionary_rules_still_receive_neighbors_by_relative_position()
    {
        var seen = new List<int>();
        var automaton = new CellularAutomata<int>(
            new CellularAutomataConfiguration<int> { Dimensions = TestSupport.Dims([3, 3], false), DefaultState = 0 },
            CellularAutomataNeighborhood<int>.MooreNeighborhood,
            (cell, neighbors, a) => seen.Add(neighbors.Count)
        );
        automaton.InitializeGrid(new Dictionary<Vector<int>, int> { [AutomataVector.Create(1, 1)] = 1 });
        automaton.Step();
        // Center has 8 in-bounds neighbors, edges 5, corners 3.
        Assert.Equal([3, 3, 3, 3, 5, 5, 5, 5, 8], seen.Order());
        Assert.NotNull(automaton.Rules);
    }

    [Fact]
    public void InitializeGrid_rejects_out_of_bounds_positions()
    {
        var automaton = Life([4, 4], wrap: false);
        Assert.Throws<ArgumentException>(() =>
            automaton.InitializeGrid(new Dictionary<Vector<int>, int> { [AutomataVector.Create(4, 0)] = 1 })
        );
    }

    [Fact]
    public void Dimensions_beyond_vector_width_are_rejected()
    {
        var dims = Enumerable.Range(0, Vector<int>.Count + 1).Select(_ => new CellularAutomataDimension { Cells = 1 }).ToArray();
        Assert.Throws<ArgumentException>(() => new CellularAutomataGrid<int>(dims, 0));
    }
}
