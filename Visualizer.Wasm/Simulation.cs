using System.Numerics;
using System.Text.Json;
using System.Text.Json.Serialization;
using CellularAutomata.NET;

namespace Visualizer;

public sealed record Settings
{
    public int[] Size { get; set; } = [128, 128];
    public string Kind { get; set; } = "totalistic";
    public string Neighborhood { get; set; } = "moore";
    public int[][]? Offsets { get; set; }
    public int[] Birth { get; set; } = [3];
    public int[] Survival { get; set; } = [2, 3];
    public int Rule { get; set; } = 30;
    public bool Wrap { get; set; } = true;
    public uint Seed { get; set; } = 42;
    public double Density { get; set; } = 0.25;
    public string Initial { get; set; } = "random";
}
public sealed record Info(int Generation, int Population, int Cells, int VectorWidth, int Neighbors);
[JsonSourceGenerationOptions(PropertyNamingPolicy = JsonKnownNamingPolicy.CamelCase)]
[JsonSerializable(typeof(Settings))]
[JsonSerializable(typeof(Info))]
internal partial class JsonContext : JsonSerializerContext;

public sealed class Simulation
{
    public Settings Config { get; }
    public Vector<int>[] Offsets { get; }
    public CellularAutomata<byte> Automaton { get; private set; } = null!;
    private CellularAutomataCell<byte>[] ordered = [];
    public int Generation { get; private set; }
    public static Settings Parse(string json) => JsonSerializer.Deserialize(json, JsonContext.Default.Settings)
        ?? throw new ArgumentException("Configuration is required.");
    public Simulation(Settings config)
    {
        if (Vector<int>.Count < 3) throw new PlatformNotSupportedException("Vector<int>.Count must be at least 3.");
        if (config.Size is null || config.Size.Length is < 2 or > 3 || config.Size.Any(x => x < 3 || x > 256)
            || config.Size.Aggregate(1L, (a, b) => a * b) > 65536)
            throw new ArgumentException("Use 2 or 3 dimensions, sizes 3–256, at most 65,536 cells.");
        if (config.Kind is not ("totalistic" or "wolfram") || config.Initial is not ("random" or "single")
            || !double.IsFinite(config.Density) || config.Density < 0 || config.Density > 1 || config.Rule is < 0 or > 255)
            throw new ArgumentException("Invalid rule, seed pattern, density or Wolfram number.");
        Config = config;
        Offsets = CreateOffsets(config);
        if (config.Birth is null || config.Survival is null || (config.Kind == "totalistic" && config.Birth.Concat(config.Survival).Any(n => n < 0 || n > Offsets.Length)))
            throw new ArgumentException($"Neighbor counts must be 0–{Offsets.Length}.");
        Reset();
    }
    public static Vector<int>[] CreateOffsets(Settings c)
    {
        int d = c.Size.Length;
        if (c.Kind == "wolfram")
            return (from z in Enumerable.Range(d == 3 ? -1 : 0, d == 3 ? 3 : 1)
                    from x in Enumerable.Range(-1, 3)
                    select AutomataVector.Create(x, -1, z)).ToArray();
        if (c.Neighborhood == "custom")
        {
            if (c.Offsets is null || c.Offsets.Length is < 1 or > 26 || c.Offsets.Any(o => o is null || o.Length != d || o.Any(v => v < -1 || v > 1) || o.All(v => v == 0)))
                throw new ArgumentException("Custom offsets: 1–26 unique adjacent nonzero vectors matching dimensionality.");
            var vectors = c.Offsets.Select(o => AutomataVector.Create(o)).ToArray();
            if (vectors.Distinct().Count() != vectors.Length) throw new ArgumentException("Duplicate offsets.");
            return vectors;
        }
        if (c.Neighborhood is not ("moore" or "vonNeumann" or "extruded") || c.Neighborhood == "extruded" && d != 3)
            throw new ArgumentException("Invalid neighborhood for dimensionality.");
        return (from z in Enumerable.Range(d == 3 ? -1 : 0, d == 3 ? 3 : 1)
                from y in Enumerable.Range(-1, 3)
                from x in Enumerable.Range(-1, 3)
                where x != 0 || y != 0 || z != 0
                where c.Neighborhood != "vonNeumann" || Math.Abs(x) + Math.Abs(y) + Math.Abs(z) == 1
                where c.Neighborhood != "extruded" || x != 0 || y != 0
                select AutomataVector.Create(x, y, z)).ToArray();
    }
    public void Reset()
    {
        var config = new CellularAutomataConfiguration<byte>
        {
            Dimensions = Config.Size.Select(n => new CellularAutomataDimension { Cells = n, WrapStart = Config.Wrap, WrapEnd = Config.Wrap }).ToArray(),
            DefaultState = 0,
            EvaluateAllCells = true,
            CacheNeighbors = true,
            CellHistoryLimit = 0
        };
        var birth = Config.Birth.ToHashSet(); var survival = Config.Survival.ToHashSet();
        Automaton = new(config, new() { NeighborLocations = Offsets }, (cell, neighbors, _) =>
        {
            if (Config.Kind == "wolfram")
            {
                // The examples preserve the seed row when no preceding row exists.
                if (!Config.Wrap && cell.Position[1] == 0) return;
                int bits = 0;
                foreach (var pair in neighbors) if (pair.Value.State != 0) bits |= 1 << (1 - pair.Key[0]);
                cell.SetState((byte)((Config.Rule >> bits) & 1));
            }
            else
            {
                int count = 0; foreach (var neighbor in neighbors.Values) count += neighbor.State;
                cell.SetState((byte)((cell.State == 0 ? birth : survival).Contains(count) ? 1 : 0));
            }
        });
        int width = Config.Size[0], height = Config.Size[1], depth = Config.Size.Length == 3 ? Config.Size[2] : 1;
        ordered = new CellularAutomataCell<byte>[width * height * depth];
        var seed = new Dictionary<Vector<int>, byte>(); uint random = Config.Seed;
        for (int z = 0; z < depth; z++) for (int y = 0; y < height; y++) for (int x = 0; x < width; x++)
                {
                    var pos = AutomataVector.Create(x, y, z); ordered[x + width * (y + height * z)] = Automaton.Grid.State[pos];
                    random = unchecked(random * 1664525u + 1013904223u);
                    bool alive = Config.Initial == "single" ? x == width / 2 && y == (Config.Kind == "wolfram" ? 0 : height / 2) && z == depth / 2 : random / 4294967296.0 < Config.Density;
                    if (alive) seed[pos] = 1;
                }
        Automaton.InitializeGrid(seed); Generation = 0;
    }
    public byte[] State() => ordered.Select(c => c.State).ToArray();
    public byte[] Step() { Automaton.Step(); Generation++; return State(); }
    public string Metadata() => JsonSerializer.Serialize(new Info(Generation, ordered.Count(c => c.State != 0), ordered.Length, Vector<int>.Count, Offsets.Length), JsonContext.Default.Info);
}
