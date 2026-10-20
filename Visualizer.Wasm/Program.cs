using System.Runtime.InteropServices.JavaScript;
using System.Runtime.Versioning;
using Visualizer;

Console.WriteLine("Cellular automata runtime ready");

[SupportedOSPlatform("browser")]
public static partial class Exports
{
    private static Simulation? simulation;
    [JSExport]
    public static string Configure(string json)
    {
        var next = new Simulation(Simulation.Parse(json));
        simulation = next;
        return next.Metadata();
    }
    [JSExport] public static byte[] Step() => Current.Step();
    [JSExport] public static byte[] State() => Current.State();
    [JSExport] public static byte[] Reset() { Current.Reset(); return Current.State(); }
    [JSExport] public static string Metadata() => Current.Metadata();
    private static Simulation Current => simulation ?? throw new InvalidOperationException("Configure first.");
}
