using System.Numerics;

namespace CellularAutomata.NET.WebHost.Engine;

public static class SpecValidator
{
    public static List<ValidationError> Validate(SimulationSpec? spec, EngineLimits? limits = null)
    {
        limits ??= EngineLimits.Default;
        var errors = new List<ValidationError>();
        void Error(string path, string message) => errors.Add(new ValidationError(path, message));

        if (spec == null)
        {
            Error("", "Spec is missing.");
            return errors;
        }

        int dims = spec.Size?.Length ?? 0;
        if (dims < limits.MinDimensions || dims > limits.MaxDimensions)
        {
            Error("size", $"Expected {limits.MinDimensions} to {limits.MaxDimensions} dimensions, got {dims}.");
            return errors;
        }
        if (dims > Vector<int>.Count)
        {
            Error("size", $"This runtime supports at most {Vector<int>.Count} dimensions (Vector<int>.Count).");
            return errors;
        }

        int maxSide = dims == 2 ? limits.MaxSide2D : limits.MaxSide3D;
        long cells = 1;
        for (int d = 0; d < dims; d++)
        {
            int side = spec.Size![d];
            if (side < 1 || side > maxSide)
            {
                Error($"size[{d}]", $"Must be between 1 and {maxSide}.");
            }
            cells *= Math.Max(side, 1);
        }
        if (cells > limits.MaxCells)
        {
            Error("size", $"{cells:N0} cells exceeds the limit of {limits.MaxCells:N0}.");
        }
        if (spec.Wrap != null && spec.Wrap.Length != dims)
        {
            Error("wrap", $"Expected {dims} entries.");
        }

        int neighborCount = ValidateRule(spec.Rule, dims, limits, Error);
        if (neighborCount > 0 && cells * neighborCount > limits.MaxNeighborLinks)
        {
            Error(
                "rule",
                $"{cells:N0} cells x {neighborCount} neighbors is too large (limit {limits.MaxNeighborLinks:N0}). Use a smaller grid or neighborhood."
            );
        }

        if (errors.Count == 0)
        {
            ValidateSeed(spec.Seed, spec.Size!, StatesOf(spec.Rule), limits, Error);
        }
        return errors;
    }

    public static int StatesOf(RuleSpec rule) => rule.Kind == RuleKinds.Totalistic ? rule.States : 2;

    private static int ValidateRule(RuleSpec? rule, int dims, EngineLimits limits, Action<string, string> error)
    {
        if (rule == null)
        {
            error("rule", "Rule is missing.");
            return 0;
        }
        switch (rule.Kind)
        {
            case RuleKinds.Totalistic:
            {
                int count = ValidateOffsets(rule.Neighborhood, "rule.neighborhood", dims, limits, error, new HashSet<string>());
                if (rule.States < 2 || rule.States > limits.MaxStates)
                {
                    error("rule.states", $"Must be between 2 and {limits.MaxStates}.");
                }
                ValidateCounts(rule.Birth, "rule.birth", count, error);
                ValidateCounts(rule.Survive, "rule.survive", count, error);
                return count;
            }
            case RuleKinds.Pattern:
            {
                var groups = rule.Groups;
                if (groups == null || groups.Length == 0 || groups.Length > limits.MaxGroups)
                {
                    error("rule.groups", $"Expected 1 to {limits.MaxGroups} groups.");
                    return 0;
                }
                var seen = new HashSet<string>();
                int total = 0;
                for (int g = 0; g < groups.Length; g++)
                {
                    total += ValidateOffsets(groups[g], $"rule.groups[{g}]", dims, limits, error, seen);
                }
                if (total > limits.MaxNeighbors)
                {
                    error("rule.groups", $"At most {limits.MaxNeighbors} offsets in total.");
                }
                int entries = 1 << groups.Length;
                if (rule.Table != null)
                {
                    if (rule.Table.Length != entries)
                    {
                        error("rule.table", $"Expected {entries} entries (2^{groups.Length}), got {rule.Table.Length}.");
                    }
                    else if (rule.Table.Any(v => v != 0 && v != 1))
                    {
                        error("rule.table", "Entries must be 0 or 1.");
                    }
                }
                else if (rule.RuleNumber is long number)
                {
                    if (number < 0 || (entries < 63 && number >= 1L << entries))
                    {
                        error("rule.ruleNumber", $"Must be between 0 and {(1L << entries) - 1}.");
                    }
                }
                else
                {
                    error("rule.table", "Either table or ruleNumber is required.");
                }
                return total;
            }
            default:
                error("rule.kind", $"Unknown rule kind '{rule.Kind}'. Expected '{RuleKinds.Totalistic}' or '{RuleKinds.Pattern}'.");
                return 0;
        }
    }

    private static int ValidateOffsets(
        int[][]? offsets,
        string path,
        int dims,
        EngineLimits limits,
        Action<string, string> error,
        HashSet<string> seen
    )
    {
        if (offsets == null || offsets.Length == 0)
        {
            error(path, "At least one neighbor offset is required.");
            return 0;
        }
        if (offsets.Length > limits.MaxNeighbors)
        {
            error(path, $"At most {limits.MaxNeighbors} offsets.");
            return 0;
        }
        for (int i = 0; i < offsets.Length; i++)
        {
            var offset = offsets[i];
            if (offset == null || offset.Length != dims)
            {
                error($"{path}[{i}]", $"Expected {dims} coordinates.");
                continue;
            }
            if (offset.Any(v => Math.Abs(v) > limits.MaxOffset))
            {
                error($"{path}[{i}]", $"Coordinates must be between -{limits.MaxOffset} and {limits.MaxOffset}.");
            }
            if (!seen.Add(string.Join(",", offset)))
            {
                error($"{path}[{i}]", $"Duplicate offset ({string.Join(", ", offset)}).");
            }
        }
        return offsets.Length;
    }

    private static void ValidateCounts(int[]? counts, string path, int neighbors, Action<string, string> error)
    {
        if (counts == null)
        {
            error(path, "Required (use an empty list for none).");
            return;
        }
        foreach (int c in counts)
        {
            if (c < 0 || c > neighbors)
            {
                error(path, $"Count {c} must be between 0 and {neighbors} (neighborhood size).");
            }
        }
    }

    private static void ValidateSeed(SeedSpec? seed, int[] size, int states, EngineLimits limits, Action<string, string> error)
    {
        if (seed == null)
        {
            error("seed", "Seed is missing.");
            return;
        }
        int dims = size.Length;
        if (seed.Kind != SeedKinds.Empty && (seed.State < 1 || seed.State >= states))
        {
            error("seed.state", $"Must be between 1 and {states - 1}.");
        }
        switch (seed.Kind)
        {
            case SeedKinds.Empty:
                break;
            case SeedKinds.Random:
                if (!(seed.Density >= 0 && seed.Density <= 1))
                {
                    error("seed.density", "Must be between 0 and 1.");
                }
                ValidateFractions(seed.RegionMin, "seed.regionMin", dims, optional: true, error);
                ValidateFractions(seed.RegionMax, "seed.regionMax", dims, optional: true, error);
                if (seed.RegionMin?.Length == dims && seed.RegionMax?.Length == dims)
                {
                    for (int d = 0; d < dims; d++)
                    {
                        if (seed.RegionMin[d] > seed.RegionMax[d])
                        {
                            error($"seed.regionMin[{d}]", "Must not exceed regionMax.");
                        }
                    }
                }
                break;
            case SeedKinds.Single:
                ValidateFractions(seed.At, "seed.at", dims, optional: false, error);
                break;
            case SeedKinds.Points:
                ValidateFractions(seed.Origin, "seed.origin", dims, optional: true, error);
                if (seed.Points == null || seed.Points.Length > limits.MaxPoints)
                {
                    error("seed.points", $"Expected a list of at most {limits.MaxPoints:N0} points.");
                    break;
                }
                int[] origin = Seeder.AnchorCell(seed.Origin, size);
                for (int i = 0; i < seed.Points.Length; i++)
                {
                    var p = seed.Points[i];
                    if (p == null || p.Length != dims)
                    {
                        error($"seed.points[{i}]", $"Expected {dims} coordinates.");
                        break;
                    }
                    for (int d = 0; d < dims; d++)
                    {
                        long v = (long)p[d] + origin[d];
                        if (v < 0 || v >= size[d])
                        {
                            error($"seed.points[{i}]", $"({string.Join(", ", p)}) is outside the grid.");
                            break;
                        }
                    }
                }
                break;
            default:
                error("seed.kind", $"Unknown seed kind '{seed.Kind}'.");
                break;
        }
    }

    private static void ValidateFractions(double[]? values, string path, int dims, bool optional, Action<string, string> error)
    {
        if (values == null)
        {
            if (!optional)
            {
                error(path, "Required.");
            }
            return;
        }
        if (values.Length != dims)
        {
            error(path, $"Expected {dims} values.");
            return;
        }
        for (int d = 0; d < dims; d++)
        {
            if (!(values[d] >= 0 && values[d] <= 1))
            {
                error($"{path}[{d}]", "Must be between 0 and 1.");
            }
        }
    }
}
