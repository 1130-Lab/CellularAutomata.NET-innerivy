using System.Numerics;
using CellularAutomata.NET;
using CellularAutomata.Web.Engine;

namespace CellularAutomata.Web.Tests;

/// <summary>
/// The rules from the Conway, Conway3D, Wolfram and Wolfram3D example projects, copied verbatim
/// (minus rendering), using the library's dictionary-based rule signature. The host's data-driven
/// rules are checked against these.
/// </summary>
internal static class ExampleRules
{
    public static CellularAutomata<int> Create(
        SimulationSpec spec,
        Action<CellularAutomataCell<int>, Dictionary<Vector<int>, CellularAutomataCell<int>>, CellularAutomata<int>> rule,
        CellularAutomataNeighborhood<int> neighborhood
    )
    {
        var automaton = new CellularAutomata<int>(
            new CellularAutomataConfiguration<int>
            {
                Dimensions = spec
                    .Size.Select(
                        (cells, d) =>
                            new CellularAutomataDimension
                            {
                                Cells = cells,
                                WrapStart = spec.Wrap?[d] ?? false,
                                WrapEnd = spec.Wrap?[d] ?? false,
                            }
                    )
                    .ToArray(),
                DefaultState = 0,
            },
            neighborhood,
            rule
        );
        byte[] seed = Seeder.CreateStates(spec.Seed, spec.Size);
        automaton.InitializeGrid(seed.Select(s => (int)s).ToArray());
        return automaton;
    }

    public static byte[] States(CellularAutomata<int> automaton) =>
        automaton.Grid.Cells.Select(c => (byte)c.State).ToArray();

    // Conway/Program.cs and Conway3D/Program.cs (without the render queues).
    public static readonly Action<
        CellularAutomataCell<int>,
        Dictionary<Vector<int>, CellularAutomataCell<int>>,
        CellularAutomata<int>
    > Conway = (cell, neighbors, automata) =>
    {
        if (neighbors.Count == 0)
        {
            return;
        }
        int livingNeighbors = neighbors.Sum(t => t.Value.State);
        if (cell.State == 1)
        {
            if (livingNeighbors < 2 || livingNeighbors > 3)
            {
                cell.SetState(0);
            }
        }
        else if (livingNeighbors == 3)
        {
            cell.SetState(1);
        }
        else
        {
            cell.SetState(0);
        }
    };

    // Wolfram/Program.cs
    private static readonly Vector<int> aboveLeft = AutomataVector.Create(-1, -1);
    private static readonly Vector<int> above = AutomataVector.Create(0, -1);
    private static readonly Vector<int> aboveRight = AutomataVector.Create(1, -1);

    public static readonly CellularAutomataNeighborhood<int> WolframNeighborhood = new()
    {
        NeighborLocations = [aboveLeft, above, aboveRight],
    };

    public static readonly Action<
        CellularAutomataCell<int>,
        Dictionary<Vector<int>, CellularAutomataCell<int>>,
        CellularAutomata<int>
    > Wolfram30 = (cell, neighbors, automata) =>
    {
        if (neighbors.Count == 0)
        {
            return;
        }
        int leftNeighbor = neighbors.TryGetValue(aboveLeft, out var leftCell) ? leftCell.State : 0;
        int centerNeighbor = neighbors.TryGetValue(above, out var centerCell) ? centerCell.State : 0;
        int rightNeighbor = neighbors.TryGetValue(aboveRight, out var rightCell) ? rightCell.State : 0;
        if (leftNeighbor == 1 && centerNeighbor == 0 && rightNeighbor == 0)
        {
            cell.SetState(1);
        }
        else if (leftNeighbor == 0 && centerNeighbor == 1 && rightNeighbor == 1)
        {
            cell.SetState(1);
        }
        else if (leftNeighbor == 0 && centerNeighbor == 1 && rightNeighbor == 0)
        {
            cell.SetState(1);
        }
        else if (leftNeighbor == 0 && centerNeighbor == 0 && rightNeighbor == 1)
        {
            cell.SetState(1);
        }
        else
        {
            cell.SetState(0);
        }
    };

    // Wolfram3D/Program.cs
    private static readonly List<Vector<int>> aboveLeft3D = AutomataVector.Extrude(AutomataVector.Create(-1, -1, 0), -1, 1, 3);
    private static readonly List<Vector<int>> above3D = AutomataVector.Extrude(AutomataVector.Create(0, -1, 0), -1, 1, 3);
    private static readonly List<Vector<int>> aboveRight3D = AutomataVector.Extrude(AutomataVector.Create(1, -1, 0), -1, 1, 3);

    public static readonly CellularAutomataNeighborhood<int> Wolfram3DNeighborhood = new()
    {
        NeighborLocations = [.. aboveLeft3D, .. above3D, .. aboveRight3D],
    };

    public static readonly Action<
        CellularAutomataCell<int>,
        Dictionary<Vector<int>, CellularAutomataCell<int>>,
        CellularAutomata<int>
    > Wolfram3D30 = (cell, neighbors, automata) =>
    {
        if (neighbors.Count == 0)
        {
            return;
        }
        int l = aboveLeft3D.Max(v => neighbors.TryGetValue(v, out var c) ? c.State : 0);
        int r = aboveRight3D.Max(v => neighbors.TryGetValue(v, out var c) ? c.State : 0);
        int m = above3D.Max(v => neighbors.TryGetValue(v, out var c) ? c.State : 0);
        if (l == 1 && m == 0 && r == 0)
        {
            cell.SetState(1);
        }
        else if (l == 0 && m == 1 && r == 1)
        {
            cell.SetState(1);
        }
        else if (l == 0 && m == 1 && r == 0)
        {
            cell.SetState(1);
        }
        else if (l == 0 && m == 0 && r == 1)
        {
            cell.SetState(1);
        }
        else
        {
            cell.SetState(0);
        }
    };
}
