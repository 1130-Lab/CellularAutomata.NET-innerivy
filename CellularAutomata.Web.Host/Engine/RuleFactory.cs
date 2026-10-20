using System.Numerics;
using CellularAutomata.NET;

namespace CellularAutomata.Web.Engine;

/// <summary>
/// Turns rule data into library neighborhoods and rule delegates. This is the fixed set of rule
/// families the host ships; users customise them through <see cref="RuleSpec"/>.
/// </summary>
public static class RuleFactory
{
    public sealed record BuiltRule(
        CellularAutomataNeighborhood<byte> Neighborhood,
        CellularAutomataRule<byte> Rule,
        int States
    );

    public static BuiltRule Build(RuleSpec rule, int dimensions)
    {
        return rule.Kind switch
        {
            RuleKinds.LifeLike => BuildLifeLike(rule, dimensions),
            RuleKinds.Table => BuildTable(rule),
            _ => throw new SpecException($"Unknown rule kind '{rule.Kind}'."),
        };
    }

    public static Vector<int>[] BuildNeighborhood(NeighborhoodSpec spec, int dimensions)
    {
        return spec.Type switch
        {
            NeighborhoodTypes.Moore => CellularAutomataNeighborhood<byte>
                .Moore(dimensions, spec.Radius)
                .NeighborLocations,
            NeighborhoodTypes.VonNeumann => CellularAutomataNeighborhood<byte>
                .VonNeumann(dimensions, spec.Radius)
                .NeighborLocations,
            NeighborhoodTypes.ExtrudedMoore => ExtrudedMoore(),
            NeighborhoodTypes.Custom => (spec.Offsets ?? []).Select(AutomataVector.Create).ToArray(),
            _ => throw new SpecException($"Unknown neighborhood type '{spec.Type}'."),
        };
    }

    /// <summary>
    /// The Conway3D example's neighborhood: each 2D Moore offset extruded through z = -1..1.
    /// Note this has 24 neighbors, not 26: (0, 0, -1) and (0, 0, 1) are not included.
    /// </summary>
    public static Vector<int>[] ExtrudedMoore()
    {
        List<Vector<int>> extruded = new List<Vector<int>>();
        foreach (var vector in CellularAutomataNeighborhood<byte>.MooreNeighborhood.NeighborLocations)
        {
            extruded.AddRange(AutomataVector.Extrude(vector, -1, 1, 3));
        }
        return extruded.ToArray();
    }

    private static BuiltRule BuildLifeLike(RuleSpec spec, int dimensions)
    {
        Vector<int>[] offsets = BuildNeighborhood(spec.Neighborhood ?? new NeighborhoodSpec(), dimensions);
        bool[] birth = ToLookup(spec.Birth, offsets.Length);
        bool[] survive = ToLookup(spec.Survive, offsets.Length);
        byte states = (byte)spec.States;

        CellularAutomataRule<byte> rule = (cell, neighbors, automata) =>
        {
            byte state = cell.State;
            if (state > 1)
            {
                // Dying cells (Generations) always advance and cannot be revived.
                cell.SetState(state + 1 < states ? (byte)(state + 1) : (byte)0);
                return;
            }
            int alive = 0;
            foreach (var neighbor in neighbors)
            {
                if (neighbor.State == 1)
                {
                    alive++;
                }
            }
            if (state == 1)
            {
                cell.SetState(survive[alive] ? (byte)1 : states > 2 ? (byte)2 : (byte)0);
            }
            else
            {
                cell.SetState(birth[alive] ? (byte)1 : (byte)0);
            }
        };
        return new BuiltRule(
            new CellularAutomataNeighborhood<byte> { NeighborLocations = offsets },
            rule,
            states
        );
    }

    private static BuiltRule BuildTable(RuleSpec spec)
    {
        int[][][] groups = spec.Groups ?? [];
        string table = spec.Table ?? "";

        // The neighborhood is the union of all group offsets; each group refers to slots in it.
        List<Vector<int>> offsets = new List<Vector<int>>();
        int[][] groupSlots = new int[groups.Length][];
        for (int g = 0; g < groups.Length; g++)
        {
            groupSlots[g] = new int[groups[g].Length];
            for (int i = 0; i < groups[g].Length; i++)
            {
                Vector<int> offset = AutomataVector.Create(groups[g][i]);
                int slot = offsets.IndexOf(offset);
                if (slot < 0)
                {
                    slot = offsets.Count;
                    offsets.Add(offset);
                }
                groupSlots[g][i] = slot;
            }
        }
        byte[] outputs = table.Select(c => (byte)(c - '0')).ToArray();

        CellularAutomataRule<byte> rule = (cell, neighbors, automata) =>
        {
            if (neighbors.Count == 0)
            {
                return;
            }
            int pattern = 0;
            foreach (int[] slots in groupSlots)
            {
                int bit = 0;
                foreach (int slot in slots)
                {
                    if (neighbors.StateOrDefault(slot, 0) != 0)
                    {
                        bit = 1;
                        break;
                    }
                }
                pattern = (pattern << 1) | bit;
            }
            cell.SetState(outputs[pattern]);
        };
        return new BuiltRule(
            new CellularAutomataNeighborhood<byte> { NeighborLocations = offsets.ToArray() },
            rule,
            Math.Max(2, outputs.Length == 0 ? 0 : outputs.Max() + 1)
        );
    }

    /// <summary>
    /// Wolfram rule table string: digit i is bit i of <paramref name="rule"/>.
    /// </summary>
    public static string WolframTable(int rule)
    {
        return new string(Enumerable.Range(0, 8).Select(i => ((rule >> i) & 1) == 1 ? '1' : '0').ToArray());
    }

    private static bool[] ToLookup(int[]? counts, int neighborCount)
    {
        bool[] lookup = new bool[neighborCount + 1];
        foreach (int count in counts ?? [])
        {
            lookup[count] = true;
        }
        return lookup;
    }
}
