# CellularAutomata.NET

Lightweight framework for generating cellular automata in .NET.

![wolfram3d.gif](/_resources/wolfram3d.gif)  
<sub>[Rule 30](https://en.wikipedia.org/wiki/Rule_30#Rule_set) in 3 dimensions.</sub>

## Static web visualizer

The **Cellular Observatory** is a standalone static React/TypeScript/Vite app with a .NET 10 WebAssembly host. No backend is needed. The host references **only** `CellularAutomata.NET`; neither Magick.NET nor Silk.NET is included in its dependency graph.

### Build and serve

From this repository directory, after installing prerequisites:

```bash
./scripts/build.sh
python3 -m http.server 8080 --directory visualizer/dist
```

Open **http://localhost:8080**. Deploy the contents of `visualizer/dist/` to any static host (including a subdirectory). Serve `.wasm` as `application/wasm` and JavaScript with a JavaScript MIME type. The supplied Python server does this. Do not open `index.html` as a `file:` URL. No cross-origin isolation headers, server-side .NET runtime, or external CDN is required. Keep the entire `wasm/_framework` directory alongside the UI assets. Precompressed `.br`/`.gz` files are optional; only serve them with the corresponding `Content-Encoding` header.

The scripts prefer optional SDK installations under `.tools/dotnet` and `.tools/node`, otherwise they use `PATH`. **Both tools have already been installed locally in this working copy**, so the build command above works directly here. Generated SDKs, build outputs, and npm dependencies are ignored by Git.

Prerequisites for another machine:

- .NET 10 SDK and its `wasm-tools` workload, plus Python 3 for the example static server.
- Node.js 22 or newer and npm. `npm ci` is part of the build command.
- A modern browser with WebAssembly SIMD and WebGL2 for 3D. The host checks `Vector<int>.Count >= 3` at startup.

With an installed, writable SDK:

```bash
dotnet workload install wasm-tools
npm --prefix visualizer ci
```

No .NET template installation is needed: the standalone `Microsoft.NET.Sdk.WebAssembly` project is checked in. If creating a separate project from a template, the optional command is `dotnet new install Microsoft.NET.Runtime.WebAssembly.Templates`.

If system SDK permissions prevent workload installation, a local Linux x64 setup is:

```bash
mkdir -p .tools/node
curl -fsSL https://dot.net/v1/dotnet-install.sh -o .tools/dotnet-install.sh
bash .tools/dotnet-install.sh --version 10.0.100 --install-dir "$PWD/.tools/dotnet"
.tools/dotnet/dotnet workload install wasm-tools
curl -fsSL https://nodejs.org/dist/v22.23.3/node-v22.23.3-linux-x64.tar.xz -o .tools/node.tar.xz
echo 'df450af89261115ef9f9e3830c3eeb2cc9213b63c720b1af623cb5dcbe2e02de  .tools/node.tar.xz' | sha256sum -c -
tar -xJf .tools/node.tar.xz --strip-components=1 -C .tools/node
./scripts/build.sh
```

This setup was validated with SDK 10.0.100, the 10.0.13 WASM workload, and Node 22.23.3. The initial system setup attempts failed with `sudo: a password is required` and, using a copy of the system SDK without manifests, `Workload installation failed: Workload ID wasm-tools is not recognized.` Installing the complete local SDK resolved both; there are no outstanding build or test blockers.

For UI development, build once to populate the local WASM assets, then:

```bash
source scripts/env.sh
npm --prefix visualizer run dev
```

Re-run `./scripts/build.sh` after C# changes. The Vite dev server is development tooling, not an application backend.

### Controls and custom rules

Choose a preset or a dimension count, edit the setup, then **Apply & restart**. Setup edits are drafts until applied. **Step**, **Play / Pause**, and **Reset** operate on the applied configuration. Reset repeats the exact seed. Speed is a target delay between completed steps, not a guaranteed frame rate. Scroll to zoom; drag to pan in 2D or orbit in 3D; right-drag pans in 3D. **Fit view** restores the camera. The setup pane scrolls independently on desktop; the UI stacks on mobile.

Defaults are 128×128 in 2D and 32×32×32 in 3D. The host validates dimension lengths (3–256), a maximum of 65,536 cells, density (0–1), a uint32 seed, valid neighborhood offsets, and rule values. These limits bound the dictionary/object-based library's memory use. Large 3D universes and the first step can be slower; subsequent steps reuse neighbor references. Simulation calls execute synchronously on the browser thread, and the play loop never queues overlapping steps.

| Rule family / preset | C# behavior |
| --- | --- |
| Conway 2D | B3/S23, 8-neighbor Moore, wrapped edges |
| Conway3D | B3/S23 with the example's **24-neighbor extruded 2D Moore**: the eight XY offsets at Z = −1, 0, +1. The two axial Z neighbors are excluded. |
| Custom life-like | Editable birth and survival count lists, with Moore (8/26), von Neumann (4/6), 24-neighbor extruded Moore in 3D, or custom offsets |
| Wolfram 2D | Any rule 0–255, default 30; reads `(−1,−1), (0,−1), (1,−1)` |
| Wolfram 3D | Any rule 0–255, default 30; ORs each left/center/right group across Z = −1, 0, +1, then applies the same 3-bit rule table, matching the example |

Custom offsets are JSON arrays such as `[[-1,0],[1,0],[0,-1],[0,1]]` or `[[-1,0,0],[1,0,0],[0,0,1]]`. Each vector must match the dimension count, have components −1…1, and be nonzero and unique. Empty birth or survival lists mean no matching counts. These binary rules are data interpreted by fixed C# delegates through `CellularAutomata<byte>`; user code is never evaluated. The editor does not support arbitrary C#, multi-state rules, or multiple independent neighborhoods.

Fixed boundaries treat missing neighbors as dead. Wolfram's fixed top row is preserved as the seed row, as in the examples. Other rows are updated synchronously from the previous generation; this is the example's propagating spatial rule, not a TypeScript-drawn history. With wrapping enabled all axes wrap and the top row also evolves. Wolfram numbering uses `index = 4*left + 2*center + right`, output `(rule >> index) & 1`.

Random seeding uses the same unsigned 32-bit LCG (`state = state * 1664525 + 1013904223`, modulo 2³²) on native .NET and WASM. Cells are visited X-fastest, then Y, then Z. Conway3D uses a reproducible full-volume random seed rather than the desktop example's nondeterministic center-cluster sampling. Live cells use a consistent green palette in both views.

### Architecture and interop

- `Visualizer.Wasm/Simulation.cs`: configuration validation, source-generated JSON, deterministic seeding, neighborhood construction, rule delegates, stable flattening, and metadata. This exact file is also compiled into the native test harness.
- `Visualizer.Wasm/Program.cs`: small `[JSExport]` surface: `Configure(json)` returns metadata JSON; `State()`, `Step()`, and `Reset()` each return one `byte[]` (a JavaScript `Uint8Array`); `Metadata()` returns JSON. Invalid configurations throw and leave the current simulation intact.
- State layout: **`index = x + width * (y + height * z)`**, one byte per cell, 0 dead / 1 alive. JS never calls .NET per cell. Each step transfers one full state buffer plus one small metadata response.
- `visualizer/src/Canvas2D.tsx`: one `ImageData` upload per state, with zoom/pan.
- `visualizer/src/Voxels3D.tsx`: a lazily loaded Three.js `InstancedMesh` with one instance per live voxel and `OrbitControls`. Geometry, renderer, event handlers, animation loop, and observers are disposed on unmount. WebGL failures display an error with a 2D fallback suggestion.

References: [Microsoft standalone .NET WASM interop](https://learn.microsoft.com/aspnet/core/client-side/dotnet-interop/wasm-browser-app), [Three.js InstancedMesh](https://threejs.org/docs/pages/InstancedMesh.html).

### Tests

One command rebuilds the static app, builds **all** solution projects, runs the native rule tests, installs Playwright Chromium if needed, and runs browser tests:

```bash
./scripts/test.sh
```

On a minimal Linux system, Playwright may additionally need browser OS dependencies: `cd visualizer && npx playwright install --with-deps chromium` (requires OS package installation privileges). This working copy already has the necessary dependencies. The test server uses port 8080.

Native tests are a dependency-free executable that exits nonzero on failure (`dotnet run --project Visualizer.Tests -c Release`), rather than an xUnit project. They cover Conway oscillation, wrapped boundaries, B0 births, all 2,048 Wolfram rule/input combinations, the 24/26-neighbor distinction, Wolfram3D depth aggregation, deterministic seeds, validation, copying, four-dimensional evolution, and bounded/disabled history. Playwright compares complete initial and five-step byte arrays from native .NET and actual browser WASM for five 2D/3D configurations, including custom offsets; it also verifies reset and the WASM vector width. Browser smoke tests exercise 2D canvas pixels, step/play/pause/reset, 3D instances/orbit/fit, dimension changes, custom rules, validation, and mobile resizing. Screenshots are written to `visualizer/test-results/`.

### Library changes

The core library remains N-dimensional (up to `Vector<int>.Count`), and existing examples keep their API and defaults:

- **`Grid.Copy()` preserves each cell's `Position`**, previously lost during copying.
- **`CellHistoryLimit`** controls cell history: −1 (default) retains legacy unlimited history, 0 disables it, positive values retain at most that many entries. The web host uses 0 and does not retain grid history.
- **`EvaluateAllCells`** (default false) evaluates every cell each synchronous step. The web host enables it so B0 rules, fixed seed rows, custom neighborhoods, and wrapped boundaries do not depend on the legacy sparse active-cell optimization. That legacy optimization remains unchanged for existing consumers.
- **`CacheNeighbors`** (default false) reuses neighbor dictionaries after first evaluation. The web host enables it because each applied configuration has fixed dimensions and offsets. When using it elsewhere, do not mutate dimensions, neighborhoods, or cell neighbor dictionaries; construct a new automaton when topology changes.

The original immutable grid and cell/delegate model remain in use. No bitmap or desktop rendering packages were added to the browser project. Both new .NET projects are included in `CellularAutomata.NET.slnx`.

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
