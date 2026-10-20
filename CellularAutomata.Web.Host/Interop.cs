using System.Numerics;
using System.Runtime.InteropServices.JavaScript;
using System.Text.Json;
using CellularAutomata.Web.Engine;

namespace CellularAutomata.Web;

/// <summary>
/// The JavaScript-facing API. Calls are coarse: specs and metadata travel as JSON, cell states as one
/// byte array per call (flattened with x fastest, then y, then z).
/// </summary>
public static partial class Interop
{
    private static Simulation? _simulation;

    private static Simulation Current =>
        _simulation ?? throw new InvalidOperationException("Call Create first.");

    [JSExport]
    public static string GetInfo() =>
        JsonSerializer.Serialize(
            new HostInfo(
                Vector<int>.Count,
                SpecValidator.MaxDimensions,
                SpecValidator.MaxCells,
                SpecValidator.MaxNeighborLinks,
                System.Runtime.InteropServices.RuntimeInformation.FrameworkDescription
            ),
            EngineJson.Default.HostInfo
        );

    [JSExport]
    public static string GetPresets() => JsonSerializer.Serialize(Presets.All, EngineJson.Default.PresetArray);

    /// <summary>Builds a new simulation. Returns SimulationInfo JSON with ok=false and errors if the spec is invalid.</summary>
    [JSExport]
    public static string Create(string specJson)
    {
        try
        {
            SimulationSpec spec =
                JsonSerializer.Deserialize(specJson, EngineJson.Default.SimulationSpec)
                ?? throw new SpecException("Spec is empty.");
            _simulation = Simulation.Create(spec);
            return GetStats();
        }
        catch (SpecException e)
        {
            return Error(e.Errors);
        }
        catch (JsonException e)
        {
            return Error([$"Invalid spec JSON: {e.Message}"]);
        }
    }

    /// <summary>Rebuilds the current simulation from its spec (same seed, generation 0).</summary>
    [JSExport]
    public static string Reset()
    {
        _simulation = Simulation.Create(Current.Spec);
        return GetStats();
    }

    /// <summary>Advances <paramref name="count"/> generations (0 is allowed) and returns the cell states.</summary>
    [JSExport]
    public static byte[] Step(int count)
    {
        if (count < 0 || count > 10_000)
        {
            throw new ArgumentOutOfRangeException(nameof(count), "Step count must be between 0 and 10000.");
        }
        Current.Step(count);
        return Current.GetStates();
    }

    [JSExport]
    public static string GetStats() => JsonSerializer.Serialize(Current.Info(), EngineJson.Default.SimulationInfo);

    /// <summary>Sets cells (flat indices) to a state. Returns SimulationInfo JSON.</summary>
    [JSExport]
    public static string SetCells(int[] indices, int state)
    {
        try
        {
            if (state < 0 || state > byte.MaxValue)
            {
                throw new SpecException($"State {state} is out of range.");
            }
            Current.SetCells(indices, (byte)state);
            return GetStats();
        }
        catch (SpecException e)
        {
            return Error(e.Errors);
        }
    }

    /// <summary>FNV-1a hash of the current states, for comparing against native runs.</summary>
    [JSExport]
    public static string Hash() => Current.Hash();

    private static string Error(IEnumerable<string> errors) =>
        JsonSerializer.Serialize(
            new SimulationInfo(false, errors.ToArray(), null, 0, 0, 0, 0, 0, 0),
            EngineJson.Default.SimulationInfo
        );
}
