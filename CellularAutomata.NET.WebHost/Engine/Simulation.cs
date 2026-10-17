using System.Diagnostics;

namespace CellularAutomata.NET.WebHost.Engine;

public sealed class SimulationInfo
{
    public required int[] Size { get; init; }
    public required int CellCount { get; init; }
    public required int States { get; init; }
    public required int NeighborCount { get; init; }

    /// <summary>"activeCells" or "allCells" — see <see cref="CellularAutomataUpdateMode"/>.</summary>
    public required string UpdateMode { get; init; }
}

public sealed class SimulationStatus
{
    public long Generation { get; init; }
    public int Population { get; init; }
    public int ActiveCells { get; init; }
    public double LastStepMs { get; init; }
}

/// <summary>
/// One running automaton built from a <see cref="SimulationSpec"/>, with the state flattened
/// to one byte per cell (first dimension varies fastest).
/// </summary>
public sealed class Simulation
{
    private readonly CompiledRule _rule;
    private CellularAutomata<byte> _automaton;
    private readonly byte[] _buffer;
    private double _lastStepMs;

    public SimulationSpec Spec { get; }
    public SimulationInfo Info { get; }

    public Simulation(SimulationSpec spec, EngineLimits? limits = null)
    {
        var errors = SpecValidator.Validate(spec, limits);
        if (errors.Count > 0)
        {
            throw new SpecException(errors);
        }
        Spec = spec;
        _rule = RuleFactory.Compile(spec.Rule);
        _automaton = Build();
        _buffer = new byte[_automaton.Grid.CellCount];
        Info = new SimulationInfo
        {
            Size = (int[])spec.Size.Clone(),
            CellCount = _automaton.Grid.CellCount,
            States = _rule.States,
            NeighborCount = _rule.Neighborhood.NeighborLocations.Length,
            UpdateMode = _rule.RequiresAllCells ? "allCells" : "activeCells",
        };
    }

    public long Generation => _automaton.Generation;

    public void Step(int count = 1)
    {
        var sw = Stopwatch.StartNew();
        for (int i = 0; i < count; i++)
        {
            _automaton.Step();
        }
        _lastStepMs = count > 0 ? sw.Elapsed.TotalMilliseconds / count : 0;
    }

    public void Reset()
    {
        _automaton = Build();
        _lastStepMs = 0;
    }

    /// <summary>Sets the given flat cell indices to <paramref name="state"/>.</summary>
    public void SetCells(ReadOnlySpan<int> indices, byte state)
    {
        if (state >= _rule.States)
        {
            throw new ArgumentOutOfRangeException(nameof(state), $"State must be below {_rule.States}.");
        }
        var map = new Dictionary<System.Numerics.Vector<int>, byte>();
        foreach (int index in indices)
        {
            if (index < 0 || index >= _automaton.Grid.CellCount)
            {
                throw new ArgumentOutOfRangeException(nameof(indices), $"Cell index {index} is out of range.");
            }
            map[_automaton.Grid.GetPosition(index)] = state;
        }
        _automaton.InitializeGrid(map);
    }

    /// <summary>Current state, one byte per cell. The returned array is reused between calls.</summary>
    public byte[] GetState()
    {
        _automaton.Grid.CopyStatesTo(_buffer);
        return _buffer;
    }

    public SimulationStatus GetStatus()
    {
        int population = 0;
        foreach (var cell in _automaton.Grid.Cells)
        {
            if (cell.State != 0)
            {
                population++;
            }
        }
        return new SimulationStatus
        {
            Generation = _automaton.Generation,
            Population = population,
            ActiveCells = _automaton.ActiveCellCount,
            LastStepMs = Math.Round(_lastStepMs, 3),
        };
    }

    private CellularAutomata<byte> Build()
    {
        bool[] wrap = Spec.Wrap ?? new bool[Spec.Size.Length];
        var config = new CellularAutomataConfiguration<byte>
        {
            Dimensions = Spec
                .Size.Select(
                    (cells, d) =>
                        new CellularAutomataDimension
                        {
                            Cells = cells,
                            WrapStart = wrap[d],
                            WrapEnd = wrap[d],
                        }
                )
                .ToArray(),
            DefaultState = 0,
            UpdateMode = _rule.RequiresAllCells
                ? CellularAutomataUpdateMode.AllCells
                : CellularAutomataUpdateMode.ActiveCells,
        };
        var automaton = new CellularAutomata<byte>(config, _rule.Neighborhood, _rule.Rule);
        automaton.InitializeGrid(Seeder.CreateInitialState(Spec));
        return automaton;
    }
}
