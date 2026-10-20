using System.Numerics;
using CellularAutomata.NET;

namespace CellularAutomata.Web.Engine;

public sealed class SpecException(IReadOnlyList<string> errors) : Exception(string.Join(" ", errors))
{
    public SpecException(string error)
        : this([error]) { }

    public IReadOnlyList<string> Errors { get; } = errors;
}

/// <summary>
/// Checks a <see cref="SimulationSpec"/> before anything is allocated. The UI validates too, but
/// the host never trusts it.
/// </summary>
public static class SpecValidator
{
    public const int MaxSizePerDimension = 2048;
    public const int MaxCells = 1 << 20;

    /// <summary>Cells x neighbors. Bounds the neighbor table and its reverse (8 bytes per link).</summary>
    public const int MaxNeighborLinks = 1 << 23;

    public const int MaxNeighbors = 512;
    public const int MaxOffset = 16;
    public const int MaxRadius = 5;
    public const int MaxGroups = 10;
    public const int MaxStates = 255;

    public static int MaxDimensions => Vector<int>.Count;

    public static void Validate(SimulationSpec spec)
    {
        List<string> errors = new List<string>();
        int dims = spec.Size?.Length ?? 0;
        long cells = 1;
        if (dims < 1 || dims > MaxDimensions)
        {
            errors.Add($"Size must have between 1 and {MaxDimensions} dimensions (got {dims}).");
        }
        else
        {
            for (int d = 0; d < dims; d++)
            {
                int size = spec.Size![d];
                if (size < 1 || size > MaxSizePerDimension)
                {
                    errors.Add($"Size of dimension {d} must be between 1 and {MaxSizePerDimension} (got {size}).");
                }
                cells *= Math.Max(size, 1);
            }
            if (cells > MaxCells)
            {
                errors.Add($"Grid has {cells:N0} cells; the maximum is {MaxCells:N0}.");
            }
        }
        if (spec.Wrap != null && spec.Wrap.Length > dims)
        {
            errors.Add($"Wrap has {spec.Wrap.Length} entries but there are only {dims} dimensions.");
        }
        if (errors.Count > 0)
        {
            throw new SpecException(errors);
        }

        int neighbors = ValidateRule(spec.Rule, dims, errors);
        if (neighbors > 0 && cells * neighbors > MaxNeighborLinks)
        {
            errors.Add(
                $"{cells:N0} cells x {neighbors} neighbors is too large; keep it under {MaxNeighborLinks:N0}."
            );
        }
        ValidateSeed(spec.Seed, spec.Size!, errors);
        if (errors.Count > 0)
        {
            throw new SpecException(errors);
        }
    }

    /// <summary>Returns the neighborhood size, or 0 if it couldn't be determined.</summary>
    private static int ValidateRule(RuleSpec? rule, int dims, List<string> errors)
    {
        if (rule == null)
        {
            errors.Add("Rule is required.");
            return 0;
        }
        switch (rule.Kind)
        {
            case RuleKinds.LifeLike:
            {
                int count = ValidateNeighborhood(rule.Neighborhood ?? new NeighborhoodSpec(), dims, errors);
                if (rule.States < 2 || rule.States > MaxStates)
                {
                    errors.Add($"States must be between 2 and {MaxStates} (got {rule.States}).");
                }
                if (count > 0)
                {
                    ValidateCounts("Birth", rule.Birth, count, errors);
                    ValidateCounts("Survive", rule.Survive, count, errors);
                }
                return count;
            }
            case RuleKinds.Table:
                return ValidateTable(rule, dims, errors);
            default:
                errors.Add($"Unknown rule kind '{rule.Kind}'. Use '{RuleKinds.LifeLike}' or '{RuleKinds.Table}'.");
                return 0;
        }
    }

    private static int ValidateNeighborhood(NeighborhoodSpec spec, int dims, List<string> errors)
    {
        switch (spec.Type)
        {
            case NeighborhoodTypes.Moore:
            case NeighborhoodTypes.VonNeumann:
                if (spec.Radius < 1 || spec.Radius > MaxRadius)
                {
                    errors.Add($"Neighborhood radius must be between 1 and {MaxRadius} (got {spec.Radius}).");
                    return 0;
                }
                break;
            case NeighborhoodTypes.ExtrudedMoore:
                if (dims != 3)
                {
                    errors.Add("The extruded Moore neighborhood is 3D only.");
                    return 0;
                }
                break;
            case NeighborhoodTypes.Custom:
                return ValidateOffsets("Neighborhood", spec.Offsets, dims, errors, requireDistinct: true);
            default:
                errors.Add($"Unknown neighborhood type '{spec.Type}'.");
                return 0;
        }
        int count = RuleFactory.BuildNeighborhood(spec, dims).Length;
        if (count > MaxNeighbors)
        {
            errors.Add($"Neighborhood has {count} cells; the maximum is {MaxNeighbors}.");
            return 0;
        }
        return count;
    }

    private static int ValidateOffsets(
        string label,
        int[][]? offsets,
        int dims,
        List<string> errors,
        bool requireDistinct
    )
    {
        if (offsets == null || offsets.Length == 0)
        {
            errors.Add($"{label} needs at least one offset.");
            return 0;
        }
        if (offsets.Length > MaxNeighbors)
        {
            errors.Add($"{label} has {offsets.Length} offsets; the maximum is {MaxNeighbors}.");
            return 0;
        }
        HashSet<string> seen = new HashSet<string>();
        int errorCount = errors.Count;
        foreach (int[] offset in offsets)
        {
            string text = offset == null ? "null" : $"({string.Join(", ", offset)})";
            if (offset == null || offset.Length != dims)
            {
                errors.Add($"{label} offset {text} must have {dims} components.");
            }
            else if (offset.Any(v => Math.Abs(v) > MaxOffset))
            {
                errors.Add($"{label} offset {text} must be within ±{MaxOffset}.");
            }
            else if (offset.All(v => v == 0))
            {
                errors.Add($"{label} offset {text} is the cell itself.");
            }
            else if (!seen.Add(text) && requireDistinct)
            {
                errors.Add($"{label} offset {text} is repeated.");
            }
        }
        return errors.Count == errorCount ? seen.Count : 0;
    }

    private static void ValidateCounts(string label, int[]? counts, int neighborCount, List<string> errors)
    {
        foreach (int count in counts ?? [])
        {
            if (count < 0 || count > neighborCount)
            {
                errors.Add($"{label} count {count} must be between 0 and {neighborCount} (the neighborhood size).");
            }
        }
    }

    private static int ValidateTable(RuleSpec rule, int dims, List<string> errors)
    {
        int[][][]? groups = rule.Groups;
        if (groups == null || groups.Length == 0 || groups.Length > MaxGroups)
        {
            errors.Add($"A table rule needs between 1 and {MaxGroups} neighbor groups.");
            return 0;
        }
        HashSet<string> union = new HashSet<string>();
        for (int g = 0; g < groups.Length; g++)
        {
            if (ValidateOffsets($"Group {g + 1}", groups[g], dims, errors, requireDistinct: true) > 0)
            {
                foreach (int[] offset in groups[g])
                {
                    union.Add(string.Join(",", offset));
                }
            }
        }
        int expected = 1 << groups.Length;
        string table = rule.Table ?? "";
        if (table.Length != expected)
        {
            errors.Add($"Table must have {expected} digits for {groups.Length} groups (got {table.Length}).");
        }
        else if (table.Any(c => c < '0' || c > '9'))
        {
            errors.Add("Table may only contain the digits 0-9.");
        }
        return union.Count;
    }

    private static void ValidateSeed(SeedSpec? seed, int[] size, List<string> errors)
    {
        if (seed == null)
        {
            errors.Add("Seed is required.");
            return;
        }
        switch (seed.Type)
        {
            case SeedTypes.Empty:
                break;
            case SeedTypes.Random:
                if (!(seed.Density >= 0 && seed.Density <= 1))
                {
                    errors.Add($"Density must be between 0 and 1 (got {seed.Density}).");
                }
                if (!(seed.Fill > 0 && seed.Fill <= 1))
                {
                    errors.Add($"Fill must be greater than 0 and at most 1 (got {seed.Fill}).");
                }
                break;
            case SeedTypes.Cells:
                foreach (int[] cell in seed.Cells ?? [])
                {
                    if (cell == null || cell.Length != size.Length)
                    {
                        errors.Add($"Seed cells must have {size.Length} coordinates.");
                        return;
                    }
                    for (int d = 0; d < size.Length; d++)
                    {
                        if (cell[d] < 0 || cell[d] >= size[d])
                        {
                            errors.Add($"Seed cell ({string.Join(", ", cell)}) is outside the grid.");
                            return;
                        }
                    }
                }
                break;
            default:
                errors.Add($"Unknown seed type '{seed.Type}'.");
                break;
        }
    }
}
