using System.Text.Json;
using System.Text.Json.Serialization;

namespace CellularAutomata.NET.WebHost.Engine;

public sealed class EngineInfo
{
    public required int VectorCount { get; init; }
    public required bool VectorHardwareAccelerated { get; init; }
    public required string Runtime { get; init; }
    public required EngineLimits Limits { get; init; }
}

public sealed class CreateResult
{
    public bool Ok { get; init; }
    public IReadOnlyList<ValidationError>? Errors { get; init; }
    public SimulationInfo? Info { get; init; }
}

/// <summary>Source-generated JSON (reflection-based serialization is trimmed in WASM).</summary>
[JsonSourceGenerationOptions(
    JsonSerializerDefaults.Web,
    DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
    UnmappedMemberHandling = JsonUnmappedMemberHandling.Disallow
)]
[JsonSerializable(typeof(SimulationSpec))]
[JsonSerializable(typeof(EngineInfo))]
[JsonSerializable(typeof(CreateResult))]
[JsonSerializable(typeof(SimulationStatus))]
[JsonSerializable(typeof(IReadOnlyList<Preset>))]
[JsonSerializable(typeof(List<ValidationError>))]
public sealed partial class EngineJson : JsonSerializerContext
{
    /// <summary>Parses a spec, turning JSON errors into a validation error.</summary>
    public static SimulationSpec? ParseSpec(string json, out ValidationError? error)
    {
        error = null;
        try
        {
            return JsonSerializer.Deserialize(json, Default.SimulationSpec);
        }
        catch (JsonException e)
        {
            error = new ValidationError(e.Path ?? "", $"Invalid JSON: {e.Message}");
            return null;
        }
    }
}
