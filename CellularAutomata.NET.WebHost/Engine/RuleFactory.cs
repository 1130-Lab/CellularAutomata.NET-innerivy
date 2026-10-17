using System.Numerics;

namespace CellularAutomata.NET.WebHost.Engine;

/// <summary>
/// The fixed set of rule implementations the host ships. A <see cref="RuleSpec"/> only
/// parameterizes one of these; no user code is compiled or evaluated.
/// </summary>
public sealed class CompiledRule
{
    public required CellularAutomataNeighborhood<byte> Neighborhood { get; init; }
    public required CellularAutomataRule<byte> Rule { get; init; }
    public required int States { get; init; }

    /// <summary>
    /// True if an all-default neighborhood can produce a non-default cell, which means every
    /// cell has to be evaluated every step (<see cref="CellularAutomataUpdateMode.AllCells"/>).
    /// </summary>
    public required bool RequiresAllCells { get; init; }
}

public static class RuleFactory
{
    public static CompiledRule Compile(RuleSpec spec)
    {
        return spec.Kind switch
        {
            RuleKinds.Totalistic => CompileTotalistic(spec),
            RuleKinds.Pattern => CompilePattern(spec),
            _ => throw new ArgumentException($"Unknown rule kind '{spec.Kind}'."),
        };
    }

    public static int[] TableFromRuleNumber(long ruleNumber, int groups)
    {
        int entries = 1 << groups;
        var table = new int[entries];
        for (int i = 0; i < entries && i < 63; i++)
        {
            table[i] = (int)((ruleNumber >> i) & 1);
        }
        return table;
    }

    private static CompiledRule CompileTotalistic(RuleSpec spec)
    {
        var offsets = spec.Neighborhood!;
        int k = offsets.Length;
        var birth = new bool[k + 1];
        var survive = new bool[k + 1];
        foreach (int b in spec.Birth!)
        {
            birth[b] = true;
        }
        foreach (int s in spec.Survive!)
        {
            survive[s] = true;
        }
        int states = spec.States;
        bool keepIsolated = spec.IsolatedCellsKeepState;

        // next[state * (k + 1) + liveNeighbors]
        var next = new byte[states * (k + 1)];
        for (int count = 0; count <= k; count++)
        {
            next[count] = (byte)(birth[count] ? 1 : 0);
            next[(k + 1) + count] = (byte)(survive[count] ? 1 : states > 2 ? 2 : 0);
            for (int s = 2; s < states; s++)
            {
                next[s * (k + 1) + count] = (byte)((s + 1) % states);
            }
        }

        void Rule(CellularAutomataCell<byte> cell, CellularAutomataNeighbors<byte> neighbors, CellularAutomata<byte> automata)
        {
            if (keepIsolated && neighbors.PresentCount == 0)
            {
                return;
            }
            int live = 0;
            for (int i = 0; i < neighbors.Length; i++)
            {
                if (neighbors.GetState(i, 0) == 1)
                {
                    live++;
                }
            }
            cell.SetState(next[cell.State * (k + 1) + live]);
        }

        return new CompiledRule
        {
            Neighborhood = ToNeighborhood(offsets),
            Rule = Rule,
            States = states,
            RequiresAllCells = birth[0],
        };
    }

    private static CompiledRule CompilePattern(RuleSpec spec)
    {
        var groups = spec.Groups!;
        int[] table = spec.Table ?? TableFromRuleNumber(spec.RuleNumber!.Value, groups.Length);
        byte[] output = table.Select(v => (byte)v).ToArray();
        bool keepIsolated = spec.IsolatedCellsKeepState;

        // Flatten the groups into one neighborhood; members[g] are indices into it.
        var offsets = new List<int[]>();
        var members = new int[groups.Length][];
        for (int g = 0; g < groups.Length; g++)
        {
            members[g] = new int[groups[g].Length];
            for (int m = 0; m < groups[g].Length; m++)
            {
                members[g][m] = offsets.Count;
                offsets.Add(groups[g][m]);
            }
        }

        void Rule(CellularAutomataCell<byte> cell, CellularAutomataNeighbors<byte> neighbors, CellularAutomata<byte> automata)
        {
            if (keepIsolated && neighbors.PresentCount == 0)
            {
                return;
            }
            int index = 0;
            foreach (int[] group in members)
            {
                int bit = 0;
                foreach (int n in group)
                {
                    if (neighbors.GetState(n, 0) != 0)
                    {
                        bit = 1;
                        break;
                    }
                }
                index = (index << 1) | bit;
            }
            cell.SetState(output[index]);
        }

        return new CompiledRule
        {
            Neighborhood = ToNeighborhood(offsets),
            Rule = Rule,
            States = 2,
            RequiresAllCells = output[0] != 0,
        };
    }

    private static CellularAutomataNeighborhood<byte> ToNeighborhood(IEnumerable<int[]> offsets)
    {
        return new CellularAutomataNeighborhood<byte>
        {
            NeighborLocations = offsets.Select(o => AutomataVector.Create(o)).ToArray(),
        };
    }
}
