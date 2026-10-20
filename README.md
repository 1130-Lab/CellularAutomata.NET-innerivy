# CellularAutomata.NET

Lightweight framework for generating cellular automata in .NET.

![wolfram3d.gif](/_resources/wolfram3d.gif)  
<sub>[Rule 30](https://en.wikipedia.org/wiki/Rule_30#Rule_set) in 3 dimensions.</sub>

## Nuget
You can install the CellularAutomata.NET package via NuGet:
```bash
dotnet add package CellularAutomata.NET
```

## Examples

The following examples are included in the project:

- Wolfram.csproj => Rule 30
- Conway.csproj => Game of Life.
- Wolfram3D.csproj => Rule 30 extruded to 3 dimensions. Rendered with SILK.Net
- Conway3D.csproj => Game of Life extruded to 3 dimensions. Rendered with SILK.Net.
- ReverseRuleBuilder.csproj => Example/research of reversing out the rules that match a given state for a 5 cell [elementary automata](https://en.wikipedia.org/wiki/Elementary_cellular_automaton) 
- MNCA.csproj -> Multiple Neighborhood Cellular Automata example including bitmap neighborhood loading. 
- CellularAutomata.Web.Host.csproj + web/ => Browser visualizer for 2D and 3D automata running on .NET WebAssembly. See [Web visualizer](#web-visualizer).

## Usage

This framework allows for N-dimensional cellular automata. The limit varies based on your SIMD limitation for vectors.

Each automata has a Rule function which is applied to each cell each step. From Conway's Game of Life example:

```cs
public static readonly Action<
	CellularAutomataCell<int>,
	Dictionary<Vector<int>, CellularAutomataCell<int>>,
	CellularAutomata<int>
	> Rules = new Action<
	CellularAutomataCell<int>,
	Dictionary<Vector<int>, CellularAutomataCell<int>>,
	CellularAutomata<int>
>(
	(cell, neighbors, automata) =>
	{
		// https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules
		if (neighbors.Count == 0)
		{
			return;
		}
		int livingNeighbors = neighbors.Sum(t => t.Value.State);
		if (cell.State == 1)
		{
			if (livingNeighbors < 2 || livingNeighbors > 3)
			{
				cell.SetState(0);
			}
		}
		else if (livingNeighbors == 3)
		{
			cell.SetState(1);
		}
		else
		{
			cell.SetState(0);
		}
	}
);
```

The Func passes the cell being examined, a dictionary of its neighbors (with their relative positions) and the automata that called the function.

In this example, we look at the neighbors of our cell and sum up their State values.

The next piece of an automata is its configuration.

```cs
CellularAutomataConfiguration<int> config = new CellularAutomataConfiguration<int>
{
	Dimensions = new CellularAutomataDimension[]
	{
		new CellularAutomataDimension { Cells = 48 },
		new CellularAutomataDimension { Cells = 48 },
	},
	DefaultState = 0
};
```

We specify the two dimensions of our grid and the default state of a cell. Dimensions contain properties for WrappedStart and WrappedEnd, but for this Game of Life we're not wrapping.

We'll also use the predefined [Moore neighborhood](https://en.wikipedia.org/wiki/Moore_neighborhood). This simplifies the process of starting up our automaton. You can reference the Wolfram example for a custom neighborhood configuration.

```cs
CellularAutomata<int> automaton = new CellularAutomata<int>(
	config,
	CellularAutomataNeighborhood<int>.MooreNeighborhood,
	Rules
	);
```

Now we set our initial state and start steppin'.

```cs
Dictionary<System.Numerics.Vector<int>, int> initialState = new Dictionary<
    System.Numerics.Vector<int>,
    int
>()
{
    /*
     * Glider at 0,0
     * 1 0 0
     * 0 1 1
     * 1 1 0
     */
    { AutomataVector.Create(0, 0), 1 },
    { AutomataVector.Create(1, 1), 1 },
    { AutomataVector.Create(2, 1), 1 },
    { AutomataVector.Create(0, 2), 1 },
    { AutomataVector.Create(1, 2), 1 },
};

// Glider moves one cell to the right every 4 steps.
// We are moving width - the length of the glider, so 45 total along the x-axis.
int stepsToEnd = 45 * 4;

automaton.InitializeGrid(initialState);

int step = 0;
while (step <= stepsToEnd)
{
    Console.WriteLine($"Step {step++}/{stepsToEnd}\n{automaton.Grid}");
    automaton.Step();
}
```

![conway.gif](/_resources/conway.gif)  
<sub>Voila!</sub>

### Faster rules

Rules can also be written against `CellularAutomataRule<T>`, which receives a `CellularAutomataNeighbors<T>` view instead of a dictionary. Slot `i` of the view is `NeighborLocations[i]`; it is null (or `StateOrDefault` returns the fallback) when that neighbor is outside the grid. Nothing is allocated per cell per step.

```cs
CellularAutomataRule<int> rule = (cell, neighbors, automata) =>
{
    int living = 0;
    foreach (var neighbor in neighbors) // only neighbors inside the grid
    {
        living += neighbor.State;
    }
    cell.SetState(living == 3 || (cell.State == 1 && living == 2) ? 1 : 0);
};

var automaton = new CellularAutomata<int>(
    config,
    CellularAutomataNeighborhood<int>.Moore(dimensions: 3), // 26 neighbors; also VonNeumann(dims, radius)
    rule
);
```

## Web visualizer

A static web app for setting up, running and viewing 2D and 3D automata. The simulation runs in the browser on .NET WebAssembly using this library; there is no backend.

- `CellularAutomata.Web.Host/` is a standalone .NET WebAssembly app (`Microsoft.NET.Sdk.WebAssembly`) that references only `CellularAutomata.NET`. It exposes a small `[JSExport]` API in `Interop.cs`.
- `web/` is a React + TypeScript + Vite UI. 2D grids render to a canvas through `ImageData`; 3D grids render with Three.js as an `InstancedMesh` of voxels with orbit controls.
- `CellularAutomata.Web.Tests/` holds the native tests (xUnit); `web/tests/e2e/` holds the browser tests (Playwright).

### Setup

You need the .NET 10 SDK and Node.js 20 or newer. Then:

```bash
# JavaScript dependencies (build.sh also runs this if node_modules is missing)
cd web && npm ci

# Chromium for the browser tests
npx playwright install chromium
```

Optional:

```bash
# Templates used to scaffold the host (`dotnet new wasmbrowser`). Not needed to build.
dotnet new install Microsoft.NET.Runtime.WebAssembly.Templates

# Ahead-of-time compilation of the host. Needs root when the SDK is installed system-wide.
sudo dotnet workload install wasm-tools
```

The default build does not need any workload: `Microsoft.NET.Sdk.WebAssembly` ships with the SDK, and the browser runtime pack is restored from NuGet. That build runs on the WebAssembly interpreter (with the jiterpreter), which is fast enough for the default sizes: in headless Chromium the Conway3D preset (32³, 24 neighbors) takes about 8-20 ms per step and Conway's Game of Life at 128×128 about 6-14 ms. Once `wasm-tools` is installed, `CA_AOT=1 ./build.sh` AOT-compiles the host.

On the machine this was developed on, `dotnet workload install wasm-tools` failed with `Inadequate permissions. Run the command with elevated privileges.` because the SDK lives in `/usr/share/dotnet`. That is why AOT is opt-in.

### Build and serve

```bash
./build.sh                                # publishes the host, then builds the UI into web/dist
python3 -m http.server -d web/dist 8080   # or any static file server
```

`build.sh` runs `npm run build` in `web/`, which:
1. runs `dotnet publish CellularAutomata.Web.Host -c Release` and copies its `wwwroot/_framework` into `web/public/_framework`, then
2. type-checks and bundles the UI with Vite. `web/dist` is self-contained and uses relative paths, so it can be served from any folder.

For development, run `npm run dev` in `web/`. It publishes the host once if `public/_framework` is missing; run `npm run build:dotnet` after changing C# code.

### Tests

```bash
dotnet test CellularAutomata.NET.slnx   # rule correctness, library behavior, validation, native fixture hashes
cd web && npm run test:e2e              # browser smoke tests + WebAssembly fixture hashes (run ./build.sh first)
```

- **Rule correctness**: Conway oscillators, still lifes and a wrapping glider; all 256 Wolfram rules against a naive reference implementation; the Conway, Conway3D, Wolfram and Wolfram3D presets step for step against the example projects' original rules (copied into `ExampleRules.cs`); Generations decay; multi-state tables; sparse stepping against full stepping.
- **Native vs. WebAssembly**: `CellularAutomata.Web.Tests/Fixtures/cross-runtime.json` lists specs (every preset plus some custom rules), step counts and the expected FNV-1a hash and population of the final state. `CrossRuntimeTests` checks them natively and `web/tests/e2e/cross-runtime.spec.ts` checks them in Chromium on WebAssembly. Since both pass against the same file, the two runtimes agree, even though `Vector<int>.Count` is 8 natively (AVX2) and 4 in WebAssembly. Regenerate the file with `CA_UPDATE_FIXTURES=1 dotnet test --filter CrossRuntimeTests`.
- **Browser smoke test**: loads the built site, checks the runtime supports at least 3 dimensions, renders 2D and 3D, steps, plays, pauses, resets, changes the Wolfram rule number, rejects invalid input (in the form and in the host), and draws cells.

Set `PW_CHROMIUM_PATH=/usr/bin/chromium` to use a system Chromium instead of the Playwright download.

### Host API

All calls are coarse. Specs and metadata travel as JSON; cell states come back as one `byte[]` (a `Uint8Array` in JS) per call, flattened with x fastest: `index = x + y * sizeX + z * sizeX * sizeY`.

| Method | Purpose |
| --- | --- |
| `GetInfo()` | `Vector<int>.Count`, maximum dimensions, size limits, runtime version |
| `GetPresets()` | Preset specs (JSON) |
| `Create(specJson)` | Validates and builds a simulation; returns stats JSON or `{ ok: false, errors: [...] }` |
| `Step(count)` | Advances `count` generations (0 is allowed) and returns all states |
| `GetStats()` | Generation, population, cells evaluated and changed in the last step, neighbor count, number of states |
| `SetCells(indices, state)` | Sets cells, e.g. when drawing in the 2D view |
| `Reset()` | Rebuilds the current simulation from its spec (same seed) |
| `Hash()` | FNV-1a hash of the states, for the cross-runtime test |

`Vector<int>.Count` is 4 in WebAssembly, so the host supports up to 4 dimensions there (the UI offers 2 and 3).

### Rules as data

Rules are C# delegates, so the host ships a fixed set of rule families and users customise them with data (`Engine/Specs.cs`). Nothing the user types is evaluated as code.

- **Life-like** (`kind: "lifelike"`): birth and survival neighbor counts (`B3/S23`), a neighborhood (Moore or von Neumann with a radius, the Conway3D 24-cell extruded Moore, or a custom list of offsets), and a number of states. With more than 2 states, live cells that fail to survive decay through the extra states before dying (Generations rules such as Brian's Brain).
- **Pattern table** (`kind: "table"`): up to 10 groups of neighbor offsets. Each group reads as 1 if any of its cells is non-zero, the groups form a binary number (group 1 is the most significant bit), and the table holds the new state for each number. With the groups left/center/right of the row above, digit `i` is bit `i` of the Wolfram rule number, so all 256 elementary rules are just a different table; the UI has a rule-number field for that. In 3D, each group is the OR of three cells along z, as in the Wolfram3D example. Cells with no neighbors inside the grid keep their state.

Seeds are generated in C# from a 32-bit seed with SplitMix64, so a seed gives the same grid in every runtime. A random seed can be limited to a centred fraction of each axis (the Conway3D preset fills the middle third, like the example).

The host validates every spec (sizes up to 2048 per axis and 1,048,576 cells, at most 8,388,608 cell-neighbor links, offsets within ±16, radius up to 5, counts within the neighborhood size, seed cells inside the grid, and so on) and returns readable errors. The form checks the same things as you type.

Presets: Conway's Game of Life (random, and the example's glider), Conway3D with its 24-neighbor extruded Moore neighborhood, Wolfram Rule 30 in 2D and 3D, Rules 90 and 110, Brian's Brain, Bays' 3D Life 4555 and a 3D von Neumann crystal. Any of them can be edited and re-applied.

### Using the UI

- **Space** plays or pauses, **N** or **→** steps, **R** resets. Playing stops by itself when nothing changes.
- 2D: the mouse wheel zooms around the cursor and dragging pans. Use *Fit* to reset the view. With *Draw cells* on, left-drag paints and right-drag pans.
- 3D: left-drag orbits, right-drag pans, the wheel zooms. The *Clip* sliders hide everything beyond a plane on each axis so you can see inside dense grids. Colors can follow the examples' ground textures, height, or state.

## Library changes

The library was refactored for the web host. It is still N-dimensional (up to `Vector<int>.Count` dimensions), the examples build unchanged, and the Conway, Wolfram and ReverseRuleBuilder examples print byte-for-byte the same output as before. `CellularAutomata.NETStandard` was not changed.

Performance:
- `CellularAutomataGrid<T>` stores cells in a flat `Cells` array (dimension 0 varies fastest) with `Strides`, `GetIndex` and `GetPosition`. The `State` dictionary is now a property that is built on first use.
- Each automaton builds a neighbor index table once, instead of looking up every neighbor in the dictionary every step. Dictionary-based rules still get `Dictionary<Vector<int>, CellularAutomataCell<T>>`, but each cell's dictionary is built once and reused.
- New `CellularAutomataRule<T>` delegate and `CellularAutomataNeighbors<T>` struct for rules that don't need a dictionary (see [Faster rules](#faster-rules)).
- New states are committed only for the cells that were evaluated, not for every cell in the grid.

Fixes:
- Skipping unchanged cells was only correct when an all-default neighborhood keeps a cell at the default state. The first step after `InitializeGrid` now evaluates every cell. After that, only cells that changed, and cells that have one of those as a neighbor, are evaluated. Odd-numbered Wolfram rules (where 000 gives 1) now work.
- Tracking which cells to evaluate ignored wrapping, so cells across a wrapped edge could be skipped. It now uses the same (wrapped) neighbor table as the rule.
- Wrapping used to set any negative coordinate to `Cells - 1` and any overflow to 0, which is only right for offsets of ±1. It now wraps with modulo.
- A cell counted as changed if any `SetState` call differed from its current state, even if a later call in the same step set it back. It now compares the final new state with the current one, using `EqualityComparer<T>.Default`.
- `Grid.Copy()` now keeps cell positions.
- `Grid.ToString()` used to sort by `x + y * Vector<int>.Count + ...`, which put cells out of order on grids wider than `Vector<int>.Count`. It now follows `Cells` order.
- Passing more dimensions than `Vector<int>.Count`, or a dimension with no cells, now throws a clear `ArgumentException`.
- The comments on `VonNeumannNeighborhood` labelled the offsets wrongly.

Additions and behavior changes:
- `CellularAutomataConfiguration<T>.CellStateHistoryLimit` (default 10) caps each cell's `StateHistory`. Before, it grew every step with no limit. Set it to 0 to turn history off, or to a negative number to keep every state. **This changes behavior** for code that read more than the last 10 states.
- `CellularAutomataConfiguration<T>.ProcessAllCells` evaluates every cell every step. Use it for rules that depend on randomness, the generation number or `StateHistory`, which the skipping above doesn't account for.
- `CellularAutomataNeighborhood<T>.Moore(dimensions, radius)` and `VonNeumann(dimensions, radius)` build N-dimensional neighborhoods. `MooreNeighborhood` and `VonNeumannNeighborhood` are still 2D.
- `CellularAutomataNeighborhood<T>.TryWrap` and `BuildNeighborTable`.
- `CellularAutomata<T>`: `Generation`, `LastEvaluatedCount`, `LastChangedCount`, `Configuration`, `GetNeighbors(index)` and `InitializeGrid(ReadOnlySpan<T>)` to set every cell at once.
- Rules should only call `SetState` on the cell they are given. Before, a change to another cell was committed at the end of the step; now it is only committed if that cell was also evaluated in that step.
