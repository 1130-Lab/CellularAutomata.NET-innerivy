// Loads the .NET WebAssembly host and wraps its [JSExport] API (CellularAutomata.Web.Host/Interop.cs).
import type { HostInfo, Preset, SimulationInfo, SimulationSpec } from './types'

interface InteropExports {
  GetInfo(): string
  GetPresets(): string
  Create(specJson: string): string
  Reset(): string
  Step(count: number): Uint8Array
  GetStats(): string
  SetCells(indices: number[], state: number): string
  Hash(): string
}

export interface CaHost {
  info: HostInfo
  presets: Preset[]
  /** Builds a simulation. Check `ok` / `errors` on the result. */
  create(spec: SimulationSpec): SimulationInfo
  /** Rebuilds the current simulation from its spec (same seed). */
  reset(): SimulationInfo
  /** Advances `count` generations (0 allowed) and returns all cell states, x fastest. */
  step(count: number): Uint8Array
  stats(): SimulationInfo
  setCells(indices: number[], state: number): SimulationInfo
  hash(): string
}

let loading: Promise<CaHost> | undefined

export function loadHost(): Promise<CaHost> {
  loading ??= load()
  return loading
}

async function load(): Promise<CaHost> {
  // _framework/ is produced by `npm run build:dotnet` and is not part of the Vite bundle.
  const url = new URL('./_framework/dotnet.js', document.baseURI).href
  const { dotnet } = await import(/* @vite-ignore */ url)
  const runtime = await dotnet.create()
  const exports = await runtime.getAssemblyExports('CellularAutomata.Web.Host')
  const api: InteropExports = exports.CellularAutomata.Web.Interop

  const host: CaHost = {
    info: JSON.parse(api.GetInfo()),
    presets: JSON.parse(api.GetPresets()),
    create: (spec) => JSON.parse(api.Create(JSON.stringify(spec))),
    reset: () => JSON.parse(api.Reset()),
    step: (count) => api.Step(count),
    stats: () => JSON.parse(api.GetStats()),
    setCells: (indices, state) => JSON.parse(api.SetCells(indices, state)),
    hash: () => api.Hash(),
  }
  // Exposed for the browser tests and for poking around in devtools.
  ;(globalThis as { caHost?: CaHost }).caHost = host
  return host
}
