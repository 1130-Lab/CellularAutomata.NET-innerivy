using System.Numerics;
using System.Text.Json;
using Visualizer;
using CellularAutomata.NET;

if (args.Length == 2 && args[0] == "--fixture")
{
    var config = Simulation.Parse(File.ReadAllText(args[1])); var sim = new Simulation(config);
    var frames = new List<int[]> { sim.State().Select(b => (int)b).ToArray() };
    for (int i = 0; i < 5; i++) frames.Add(sim.Step().Select(b => (int)b).ToArray());
    Console.WriteLine(JsonSerializer.Serialize(frames)); return;
}
void Check(bool ok, string message) { if (!ok) throw new Exception(message); Console.WriteLine("PASS " + message); }
var life = new Simulation(new Settings { Size = [5, 5], Density = 0, Wrap = false });
life.Automaton.InitializeGrid(new Dictionary<Vector<int>, byte> { [AutomataVector.Create(1, 2)] = 1, [AutomataVector.Create(2, 2)] = 1, [AutomataVector.Create(3, 2)] = 1 });
var frame = life.Step(); Check(frame.Count(b => b == 1) == 3 && frame[7] == 1 && frame[12] == 1 && frame[17] == 1, "Conway blinker");
life.Step(); Check(life.State()[11] == 1 && life.State()[13] == 1, "Blinker period two");
var copy = life.Automaton.Grid.Copy(); Check(copy.State.All(kv => kv.Key == kv.Value.Position), "Grid.Copy preserves positions");
for (int i = 0; i < 30; i++) life.Step(); Check(life.Automaton.Grid.State.Values.All(c => c.StateHistory.Count == 0), "History disabled");
var b0 = new Simulation(new Settings { Size = [3, 3], Density = 0, Birth = [0], Survival = [] }); Check(b0.Step().All(b => b == 1), "B0 evaluates empty cells");
var wrap = new Simulation(new Settings { Size = [5, 5], Density = 0, Wrap = true });
wrap.Automaton.InitializeGrid(new Dictionary<Vector<int>, byte> { [AutomataVector.Create(4, 2)] = 1, [AutomataVector.Create(0, 2)] = 1, [AutomataVector.Create(1, 2)] = 1 });
var wf = wrap.Step(); Check(wf[5] == 1 && wf[10] == 1 && wf[15] == 1 && wf.Count(x => x == 1) == 3, "Wrapped boundary blinker");
Check(new Simulation(new Settings { Size = [3, 3, 3], Neighborhood = "extruded" }).Offsets.Length == 24, "Conway3D has 24 neighbors");
Check(new Simulation(new Settings { Size = [3, 3, 3] }).Offsets.Length == 26, "3D Moore has 26 neighbors");
for (int rule = 0; rule < 256; rule++) for (int bits = 0; bits < 8; bits++)
    {
        var s = new Simulation(new Settings { Size = [5, 3], Kind = "wolfram", Rule = rule, Density = 0, Wrap = false });
        s.Automaton.InitializeGrid(new Dictionary<Vector<int>, byte> { [AutomataVector.Create(1, 0)] = (byte)((bits >> 2) & 1), [AutomataVector.Create(2, 0)] = (byte)((bits >> 1) & 1), [AutomataVector.Create(3, 0)] = (byte)(bits & 1) });
        if (s.Step()[7] != ((rule >> bits) & 1)) throw new Exception($"Rule {rule}, input {bits}");
    }
Check(true, "All 256 Wolfram truth tables");
var w3 = new Simulation(new Settings { Size = [5, 3, 5], Kind = "wolfram", Density = 0, Wrap = false });
w3.Automaton.InitializeGrid(new Dictionary<Vector<int>, byte> { [AutomataVector.Create(1, 0, 1)] = 1 });
Check(w3.Step()[2 + 5 * (1 + 3 * 2)] == 1, "Wolfram3D OR across depth");
var deterministic = new Settings { Size = [8, 8, 8], Seed = 123, Neighborhood = "extruded" };
Check(new Simulation(deterministic).Step().SequenceEqual(new Simulation(deterministic).Step()), "Seed repeatability");
foreach (var bad in new[] { new Settings { Size = [257, 3] }, new Settings { Size = [64, 64, 64] }, new Settings { Rule = 256 }, new Settings { Density = 2 }, new Settings { Neighborhood = "custom", Offsets = [[1, 0], [1, 0]] } })
{
    bool rejected = false; try { _ = new Simulation(bad); } catch (ArgumentException) { rejected = true; }
    Check(rejected, "Reject invalid config");
}
Check(new Simulation(new Settings { Size = [5,5], Kind = "wolfram", Birth = [8], Survival = [8] }).Step().Length == 25,
    "Wolfram ignores inactive life-like count settings");
Check(Simulation.Parse("{}").Initial == "random" && Simulation.Parse("{}").Rule == 30,
    "JSON defaults survive source-generated deserialization");
var fourDimensions = new CellularAutomata<byte>(
    new() { Dimensions = Enumerable.Range(0, 4).Select(_ => new CellularAutomataDimension { Cells = 2 }).ToArray(),
        DefaultState = 0, EvaluateAllCells = true, CacheNeighbors = true, CellHistoryLimit = 2 },
    new() { NeighborLocations = [AutomataVector.Create(0, 0, 0, 1)] },
    (cell, _, _) => cell.SetState((byte)(1-cell.State)));
for (int i=0; i<5; i++) fourDimensions.Step();
Check(fourDimensions.Grid.State.Count == 16 && fourDimensions.Grid.State.Values.All(c => c.State == 1 && c.StateHistory.Count == 2),
    "Four-dimensional evolution and bounded history");
Console.WriteLine("All native tests passed.");
