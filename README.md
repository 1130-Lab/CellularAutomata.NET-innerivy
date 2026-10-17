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
- [Web visualizer](#web-visualizer) => set up, run and view 2D and 3D automata in the browser, simulated by this library on .NET WebAssembly.

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
	new CellularAutomataDimension { Cells = 48 },
	new CellularAutomataDimension { Cells = 48 },
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

## Web visualizer

A static web app for setting up, running and viewing 2D and 3D cellular automata. The simulation
runs in the browser on .NET WebAssembly using `CellularAutomata.NET`; there is no backend.

```
web/ (React + TypeScript + Vite)                         CellularAutomata.NET.WebHost/ (.NET WASM)
  App, SetupPanel, RuleEditor ──JSON spec──▶ Web Worker ──▶ [JSExport] CaExports ──▶ Engine/ ──▶ CellularAutomata.NET
  Viewer2D (canvas ImageData)  ◀── Uint8Array ──┘   (1 byte per cell per call)
  Viewer3D (three.js InstancedMesh + OrbitControls)
```

- **CellularAutomata.NET.WebHost** — a standalone `wasmbrowser` app that references only
  `CellularAutomata.NET`. `Interop/CaExports.cs` is the whole JS-facing API; `Engine/` holds
  the rule implementations, spec validation, seeding and presets (pure managed code, also compiled
  natively by the tests). AOT-compiled to WebAssembly by default.
- **web/** — the UI. The .NET runtime runs in a Web Worker so stepping never blocks rendering.
- **CellularAutomata.NET.WebHost.Tests** — xUnit tests (native).
- **CellularAutomata.NET.WebHost.ParityRunner** — runs the parity cases natively for the
  native-vs-WASM test.

### Setup

Requires the .NET 10 SDK and Node.js 20+ (tested with .NET SDK 10.0.302 and Node 26). Install:

```bash
# WebAssembly build tools (emscripten toolchain, needed for AOT and native relinking).
# Use sudo if the SDK is installed system-wide (e.g. /usr/share/dotnet).
dotnet workload install wasm-tools
# Templates (only needed to re-scaffold; the projects are already in the repo)
dotnet new install Microsoft.NET.Runtime.WebAssembly.Templates

# Web app dependencies (react, three, vite, typescript, @playwright/test)
cd web && npm ci
# Browser tests use the system Google Chrome. Without it, install Playwright's Chromium:
npx playwright install chromium     # then run tests with PW_CHANNEL=bundled
```

For reference, the projects were scaffolded with `dotnet new wasmbrowser`, `dotnet new xunit`,
`dotnet new console`, `npm create vite@latest web -- --template react-ts`, `npm install three` and
`npm install -D @types/three @playwright/test`.

### Build and serve

```bash
./build.sh            # publishes the WASM host (AOT), builds the UI, writes ./dist
npx serve dist        # or: python3 -m http.server -d dist 8080
```

`./dist` is a self-contained static site (relative URLs, so any path works). The server must
send `.wasm` as `application/wasm` (both of the above do). `AOT=false ./build.sh` skips
WebAssembly AOT compilation: the AOT publish takes ~3 minutes on a laptop and this is much
faster, but stepping is roughly 5-10x slower.

For UI development, run `./build.sh` once (it copies `_framework/` into `web/public/`), then
`cd web && npm run dev`.

### Tests

```bash
dotnet test CellularAutomata.NET.WebHost.Tests   # library + rule correctness (native)
./build.sh && cd web && npm test                  # browser smoke tests + native-vs-WASM parity
```

- **Rule correctness**: every Wolfram rule 0-255 against an independent 1D reference
  implementation, Rule 90 against Pascal's triangle mod 2, hand-checked Rule 30 rows, Life
  oscillators/gliders, Life/Generations/3D totalistic rules against a naive reference stepper, and
  each example-derived preset against the example project's own `Rules` delegate (loaded by
  reflection from Conway, Wolfram and Conway3D; Wolfram3D creates a window in its static
  constructor, so its rule is copied verbatim into the test).
- **Native vs. WASM** (`web/tests/parity.spec.ts`): runs the cases in
  `web/tests/parity-cases.json` natively (ParityRunner, where `Vector<int>.Count` is 8 on AVX2)
  and in the browser on WASM (`Vector<int>.Count` is 4), and compares SHA-256 hashes of the state
  at each checkpoint.
- **Browser smoke test** (`web/tests/smoke.spec.ts`): boot, step/play/pause/reset, rule editing,
  drawing, input validation and the 3D viewer (WebGL via SwiftShader in headless Chrome).

### Using it

- **Presets** — Conway 2D, Conway3D (24-neighbor extruded Moore), Wolfram Rule 30 in 2D and 3D
  (from the example projects), plus Rule 90, Rule 110, Rule 73 3D, HighLife, Brian's Brain and a
  10-state 3D Generations rule. Every preset is just a starting spec: change anything and Apply.
- **Rules** are data, sent to the host as JSON and run by C# through the library — no user code
  is evaluated. Two kinds, each with a 2D/3D neighborhood editor (click cells; 3D shows one grid per
  z layer):
  - *Totalistic*: birth/survive neighbor counts (or a `B3/S23` / `B4/S4/C5` rulestring) on any
    neighborhood, with optional extra Generations decay states.
  - *Pattern table*: up to 6 groups of neighbor cells, each read as 1 if any cell in it is alive;
    the groups form a binary index into a lookup table (or rule number). With the three cells
    above as groups this is Wolfram's numbering (any of 0-255); extruded over z it is Wolfram3D.
- **Seeds** — random (density, region, 32-bit RNG seed — the library has none, so the host uses
  SplitMix64), a single cell, or empty. In 2D you can also draw cells (✎ Draw) while paused or playing.
- **Controls** — Play/Pause (Space), Step (S or →), Step ×N, Reset (R; restores the seeded state),
  speed and generations per frame. 2D: wheel zoom, drag to pan. 3D: orbit/pan/zoom, color by
  state/row/position, cutaway sliders per axis to see inside.
- **Limits** (validated in the UI and again by the host): 2 or 3 dimensions, ≤1024 per side in 2D
  and ≤128 in 3D, ≤262,144 cells, offsets within ±4, ≤32 states, cells × neighbors ≤ 8.4M.
  The host reports `Vector<int>.Count` at startup; it is 4 in the browser, so up to 4 dimensions
  would be possible, but the UI is 2D/3D.

### JS API

All calls are on `CellularAutomata.NET.WebHost.Interop.CaExports` (see `web/src/engine/sim.worker.ts`):

| Call | Returns |
| --- | --- |
| `GetInfo()` | JSON: `Vector<int>.Count`, runtime, limits |
| `GetPresets()` | JSON: preset list with specs |
| `Validate(specJson)` | JSON: list of `{path, message}` errors |
| `Create(specJson)` | JSON: `{ok, info}` or `{ok:false, errors}` |
| `Step(count)` | `Uint8Array`: one byte per cell, x fastest (`i = x + y*w + z*w*h`) |
| `Reset()`, `GetState()`, `SetCells(indices, state)` | `Uint8Array` as above |
| `GetStatus()` | JSON: generation, population, active cells, ms/generation |

### Notes

- In a worker, the message handler must be registered with `addEventListener('message', ...)`.
  Assigning `self.onmessage` makes `dotnet.create()` never resolve (seen with the .NET 10.0.10
  runtime; no error is logged).
- An AOT publish strips IL from the intermediate assemblies (`WasmStripILAfterAOT`). If a later
  non-AOT publish reuses them, startup fails with
  `MONO interpreter: NIY encountered in method System.OutOfMemoryException:.ctor (string)`.
  `build.sh` clears the host's `obj/Release` whenever the AOT setting changes.
- Asset fingerprinting is disabled in the host (`WasmFingerprintAssets=false`) because import
  maps don't apply inside Web Workers.

## Library changes (for the web visualizer)

`CellularAutomata.NET` was refactored for performance and correctness. It is still
N-dimensional, the public API used by the examples is unchanged, and the examples produce
byte-identical output (Conway and Wolfram console output was diffed against the original).
`CellularAutomata.NETStandard` was not changed.

- **Flat grid storage.** `CellularAutomataGrid` stores cells in a flat array (first dimension
  fastest) with index arithmetic: `GetIndex`, `GetPosition`, `GetCell(int)`, `Cells`,
  `CellCount`, `CopyStatesTo(Span<T>)`. `State` (the `ImmutableDictionary`) is still available
  but built lazily from the same cell objects. Cells have an `Index`.
- **Precomputed topology.** Each automaton computes every cell's neighbor indices and the reverse
  "dependents" once, instead of doing dictionary lookups per neighbor per step.
- **Faster rule signature.** New `CellularAutomataRule<T>` delegate receiving a
  `CellularAutomataNeighbors<T>` view (indexed like `NeighborLocations`, null when out of bounds).
  The existing `Action<cell, Dictionary<…>, automata>` constructor still works and is adapted to it.
  Together these make the Wolfram example ~12x and the Conway example ~4x faster.
- **Wrapping fixes.** Wrapped neighbor positions now use modulo arithmetic, so offsets with
  |offset| > 1 wrap correctly (previously -2 at x=0 went to the last cell, not the second-to-last).
  The active-cell tracking ignored wrapping, so cells across a wrapped edge from a change were
  never re-evaluated (gliders were corrupted when crossing an edge); it now uses the wrapped topology.
- **Update modes.** `CellularAutomataConfiguration.UpdateMode`: `ActiveCells` (default, the
  previous behavior: only cells that changed or have a changed neighbor are evaluated) or
  `AllCells`, needed for rules where an all-dead neighborhood produces a live cell (odd Wolfram
  rules, B0 rules).
- **N-dimensional neighborhoods.** `CellularAutomataNeighborhood<T>.Moore(dimensions, radius)`
  and `.VonNeumann(dimensions, radius)`. The 2D static `MooreNeighborhood` /
  `VonNeumannNeighborhood` remain (the von Neumann comments were mislabelled; values unchanged).
- **`Grid.Copy()` keeps cell positions** (and indices); so does the
  `CellularAutomataGrid(dimensions, existingState)` constructor.
- **Bounded history.** `StateHistory` is only recorded when
  `CellularAutomataConfiguration.CellStateHistoryLimit` > 0 (default 0) and is capped at that
  length; it previously grew forever. When enabled it records every cell each step, not just the
  evaluated ones. `Neighbors` and `StateHistory` are allocated lazily.
- Smaller fixes: `SetState` back to the current value clears the changed flag, `Step()` counts
  `Generation`, `ActiveCellCount` and `GridHistory` are exposed, `InitializeGrid` has a flat-span
  overload and can be called again to edit the grid, too many dimensions for `Vector<int>.Count`
  throws a clear error, and `Grid.ToString()` uses flat order (the old ordering was wrong for
  sizes larger than the SIMD width).
