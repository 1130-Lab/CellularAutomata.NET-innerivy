// Usage: ParityRunner <parity-cases.json>
// Prints {"vectorCount":N,"cases":{"<name>":["<sha256 of state at checkpoint>", ...]}} to stdout.
using System.Numerics;
using System.Security.Cryptography;
using System.Text.Json;
using System.Text.Json.Nodes;
using CellularAutomata.NET.WebHost.Engine;

if (args.Length != 1)
{
    Console.Error.WriteLine("Usage: ParityRunner <parity-cases.json>");
    return 2;
}

var results = new JsonObject();
foreach (var testCase in JsonNode.Parse(File.ReadAllText(args[0]))!.AsArray())
{
    string name = testCase!["name"]!.GetValue<string>();
    SimulationSpec spec;
    if (testCase["preset"] is JsonNode presetId)
    {
        spec = Presets.All.Single(p => p.Id == presetId.GetValue<string>()).Spec;
    }
    else
    {
        spec = EngineJson.ParseSpec(testCase["spec"]!.ToJsonString(), out var error)
            ?? throw new InvalidOperationException($"{name}: {error}");
    }

    var sim = new Simulation(spec);
    var hashes = new JsonArray();
    foreach (int checkpoint in testCase["checkpoints"]!.AsArray().Select(n => n!.GetValue<int>()))
    {
        sim.Step((int)(checkpoint - sim.Generation));
        hashes.Add(Convert.ToHexStringLower(SHA256.HashData(sim.GetState())));
    }
    results[name] = hashes;
}

Console.WriteLine(new JsonObject { ["vectorCount"] = Vector<int>.Count, ["cases"] = results }.ToJsonString());
return 0;
