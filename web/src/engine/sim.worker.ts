/// <reference lib="webworker" />
// Hosts the .NET runtime off the main thread. Each request maps onto one [JSExport] call
// (plus GetStatus), and state comes back as one transferred Uint8Array.

import type { WorkerRequest, WorkerResponse } from './protocol'

interface CaExports {
  GetInfo(): string
  GetPresets(): string
  Validate(spec: string): string
  Create(spec: string): string
  Step(count: number): Uint8Array
  GetState(): Uint8Array
  Reset(): Uint8Array
  SetCells(indices: number[], state: number): Uint8Array
  GetStatus(): string
}

let exports: CaExports | undefined

async function start(baseUrl: string): Promise<CaExports> {
  const url = new URL('_framework/dotnet.js', baseUrl).href
  const { dotnet } = await import(/* @vite-ignore */ url)
  const runtime = await dotnet.create()
  const assembly = await runtime.getAssemblyExports('CellularAutomata.NET.WebHost.dll')
  return assembly.CellularAutomata.NET.WebHost.Interop.CaExports as CaExports
}

function frame(state: Uint8Array) {
  return { state, status: JSON.parse(exports!.GetStatus()) }
}

async function handle(request: WorkerRequest): Promise<{ result: unknown; transfer?: Transferable[] }> {
  if (request.method === 'init') {
    exports = await start(request.baseUrl)
    return { result: { info: JSON.parse(exports.GetInfo()), presets: JSON.parse(exports.GetPresets()) } }
  }
  if (!exports) throw new Error('Engine not initialized')
  switch (request.method) {
    case 'validate':
      return { result: JSON.parse(exports.Validate(JSON.stringify(request.spec))) }
    case 'create': {
      const created = JSON.parse(exports.Create(JSON.stringify(request.spec)))
      if (!created.ok) return { result: { created } }
      const f = frame(exports.GetState())
      return { result: { created, frame: f }, transfer: [f.state.buffer] }
    }
    case 'step': {
      const f = frame(exports.Step(request.count))
      return { result: f, transfer: [f.state.buffer] }
    }
    case 'reset': {
      const f = frame(exports.Reset())
      return { result: f, transfer: [f.state.buffer] }
    }
    case 'setCells': {
      const f = frame(exports.SetCells(request.indices, request.state))
      return { result: f, transfer: [f.state.buffer] }
    }
  }
}

// Must be addEventListener, not `self.onmessage = ...`: assigning onmessage in the worker makes
// dotnet.create() never settle (.NET 10.0.10 runtime).
self.addEventListener('message', async (event: MessageEvent<WorkerRequest>) => {
  const request = event.data
  try {
    const { result, transfer } = await handle(request)
    const response: WorkerResponse = { id: request.id, ok: true, result }
    self.postMessage(response, { transfer: transfer ?? [] })
  } catch (e) {
    const response: WorkerResponse = { id: request.id, ok: false, error: e instanceof Error ? e.message : String(e) }
    self.postMessage(response)
  }
})
