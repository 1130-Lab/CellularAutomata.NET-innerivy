using System.Numerics;
using System.Reflection;
using CellularAutomata.NET.WebHost.Engine;

namespace CellularAutomata.NET.WebHost.Tests;

using DictionaryRule = Action<
    CellularAutomataCell<int>,
    Dictionary<Vector<int>, CellularAutomataCell<int>>,
    CellularAutomata<int>
>;

internal static class TestSupport
{
    /// <summary>The public static Rules field of an example project's (internal) Program class.</summary>
    public static DictionaryRule ExampleRule(string typeName, string assembly)
    {
        var type =
            Type.GetType($"{typeName}, {assembly}", throwOnError: true)!;
        var field = type.GetField("Rules", BindingFlags.Public | BindingFlags.Static)!;
        return (DictionaryRule)field.GetValue(null)!;
    }

    public static CellularAutomataDimension[] Dims(int[] size, bool wrap) =>
        size.Select(s => new CellularAutomataDimension { Cells = s, WrapStart = wrap, WrapEnd = wrap }).ToArray();

    /// <summary>Runs an example's dictionary-based rule through the library and records every generation.</summary>
    public static List<int[]> RunExample(
        DictionaryRule rule,
        CellularAutomataNeighborhood<int> neighborhood,
        int[] size,
        bool wrap,
        byte[] initial,
        int steps
    )
    {
        var automaton = new CellularAutomata<int>(
            new CellularAutomataConfiguration<int> { Dimensions = Dims(size, wrap), DefaultState = 0 },
            neighborhood,
            rule
        );
        automaton.InitializeGrid(initial.Select(b => (int)b).ToArray());
        var history = new List<int[]> { Snapshot(automaton.Grid) };
        for (int i = 0; i < steps; i++)
        {
            automaton.Step();
            history.Add(Snapshot(automaton.Grid));
        }
        return history;
    }

    /// <summary>Runs a spec through the host engine and records every generation.</summary>
    public static List<int[]> RunSpec(SimulationSpec spec, int steps)
    {
        var sim = new Simulation(spec);
        var history = new List<int[]> { sim.GetState().Select(b => (int)b).ToArray() };
        for (int i = 0; i < steps; i++)
        {
            sim.Step();
            history.Add(sim.GetState().Select(b => (int)b).ToArray());
        }
        return history;
    }

    public static int[] Snapshot(CellularAutomataGrid<int> grid)
    {
        var states = new int[grid.CellCount];
        grid.CopyStatesTo(states);
        return states;
    }

    public static byte[] RandomStates(int count, double density, ulong seed)
    {
        var rng = new SplitMix64(seed);
        return Enumerable.Range(0, count).Select(_ => (byte)(rng.NextDouble() < density ? 1 : 0)).ToArray();
    }

    public static SimulationSpec WithPoints(SimulationSpec spec, byte[] states)
    {
        var points = new List<int[]>();
        for (int i = 0; i < states.Length; i++)
        {
            if (states[i] != 0)
            {
                points.Add(Coordinates(i, spec.Size));
            }
        }
        spec.Seed = new SeedSpec { Kind = SeedKinds.Points, Points = points.ToArray() };
        return spec;
    }

    public static int[] Coordinates(int index, int[] size)
    {
        var c = new int[size.Length];
        for (int d = 0; d < size.Length; d++)
        {
            c[d] = index % size[d];
            index /= size[d];
        }
        return c;
    }
}

/// <summary>
/// Straightforward reference implementations used to check the library + host rules. They share
/// no code with either: plain arrays, every cell evaluated every step.
/// </summary>
internal static class Reference
{
    /// <summary>One row of a 1D elementary CA (cells outside the row are 0 unless wrapping).</summary>
    public static int[] ElementaryStep(int[] row, int rule, bool wrap)
    {
        int n = row.Length;
        var next = new int[n];
        for (int x = 0; x < n; x++)
        {
            int l = x > 0 ? row[x - 1] : wrap ? row[n - 1] : 0;
            int r = x < n - 1 ? row[x + 1] : wrap ? row[0] : 0;
            next[x] = (rule >> (l * 4 + row[x] * 2 + r)) & 1;
        }
        return next;
    }

    /// <summary>Outer-totalistic step with Generations decay, on an N-D grid with optional wrap.</summary>
    public static int[] TotalisticStep(
        int[] states,
        int[] size,
        bool wrap,
        int[][] offsets,
        int[] birth,
        int[] survive,
        int stateCount,
        bool keepIsolated = true
    )
    {
        var next = new int[states.Length];
        for (int i = 0; i < states.Length; i++)
        {
            int[] c = TestSupport.Coordinates(i, size);
            int live = 0;
            int present = 0;
            foreach (var o in offsets)
            {
                int index = 0;
                int stride = 1;
                bool inside = true;
                for (int d = 0; d < size.Length; d++)
                {
                    int v = c[d] + o[d];
                    if (wrap)
                    {
                        v = ((v % size[d]) + size[d]) % size[d];
                    }
                    else if (v < 0 || v >= size[d])
                    {
                        inside = false;
                        break;
                    }
                    index += v * stride;
                    stride *= size[d];
                }
                if (!inside)
                {
                    continue;
                }
                present++;
                if (states[index] == 1)
                {
                    live++;
                }
            }
            int s = states[i];
            if (keepIsolated && present == 0)
            {
                next[i] = s;
            }
            else if (s == 0)
            {
                next[i] = birth.Contains(live) ? 1 : 0;
            }
            else if (s == 1)
            {
                next[i] = survive.Contains(live) ? 1 : stateCount > 2 ? 2 : 0;
            }
            else
            {
                next[i] = (s + 1) % stateCount;
            }
        }
        return next;
    }
}
