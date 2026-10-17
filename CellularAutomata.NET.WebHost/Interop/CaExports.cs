using System.Numerics;
using System.Runtime.InteropServices;
using System.Runtime.InteropServices.JavaScript;
using System.Text.Json;
using CellularAutomata.NET.WebHost.Engine;

namespace CellularAutomata.NET.WebHost.Interop;

/// <summary>
/// The JS-facing API. Config and metadata cross as JSON strings; cell state crosses as one
/// byte array per call (one byte per cell, first dimension varies fastest).
/// One simulation exists at a time; <see cref="Create"/> replaces it.
/// </summary>
public static partial class CaExports
{
    private static Simulation? _simulation;

    private static Simulation Current =>
        _simulation ?? throw new InvalidOperationException("No simulation. Call create() first.");

    [JSExport]
    public static string GetInfo() =>
        JsonSerializer.Serialize(
            new EngineInfo
            {
                VectorCount = Vector<int>.Count,
                VectorHardwareAccelerated = Vector.IsHardwareAccelerated,
                Runtime = RuntimeInformation.FrameworkDescription + " " + RuntimeInformation.OSArchitecture,
                Limits = EngineLimits.Default,
            },
            EngineJson.Default.EngineInfo
        );

    [JSExport]
    public static string GetPresets() => JsonSerializer.Serialize(Presets.All, EngineJson.Default.IReadOnlyListPreset);

    /// <summary>Validates a spec without building it. Returns a JSON array of errors (empty if valid).</summary>
    [JSExport]
    public static string Validate(string specJson)
    {
        var spec = EngineJson.ParseSpec(specJson, out var parseError);
        var errors = parseError != null ? [parseError] : SpecValidator.Validate(spec);
        return JsonSerializer.Serialize(errors, EngineJson.Default.ListValidationError);
    }

    /// <summary>
    /// Builds a simulation. On failure the previous simulation (if any) is kept.
    /// Returns {"ok":true,"info":{...}} or {"ok":false,"errors":[...]}.
    /// </summary>
    [JSExport]
    public static string Create(string specJson)
    {
        var spec = EngineJson.ParseSpec(specJson, out var parseError);
        CreateResult result;
        if (parseError != null)
        {
            result = new CreateResult { Ok = false, Errors = [parseError] };
        }
        else
        {
            try
            {
                _simulation = new Simulation(spec!);
                result = new CreateResult { Ok = true, Info = _simulation.Info };
            }
            catch (SpecException e)
            {
                result = new CreateResult { Ok = false, Errors = e.Errors };
            }
        }
        return JsonSerializer.Serialize(result, EngineJson.Default.CreateResult);
    }

    /// <summary>Advances <paramref name="count"/> generations and returns the resulting state.</summary>
    [JSExport]
    public static byte[] Step(int count)
    {
        if (count < 0 || count > EngineLimits.Default.MaxStepsPerCall)
        {
            throw new ArgumentOutOfRangeException(nameof(count), $"Must be between 0 and {EngineLimits.Default.MaxStepsPerCall}.");
        }
        Current.Step(count);
        return Current.GetState();
    }

    [JSExport]
    public static byte[] GetState() => Current.GetState();

    /// <summary>Rebuilds the simulation from its spec (same seed) and returns the initial state.</summary>
    [JSExport]
    public static byte[] Reset()
    {
        Current.Reset();
        return Current.GetState();
    }

    /// <summary>Sets cells (by flat index) to a state, e.g. from drawing in the UI. Returns the new state.</summary>
    [JSExport]
    public static byte[] SetCells(int[] indices, int state)
    {
        Current.SetCells(indices, checked((byte)state));
        return Current.GetState();
    }

    [JSExport]
    public static string GetStatus() => JsonSerializer.Serialize(Current.GetStatus(), EngineJson.Default.SimulationStatus);
}
