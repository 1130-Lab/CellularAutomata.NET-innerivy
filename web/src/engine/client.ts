import type { RequestBody, WorkerResponse } from './protocol'
import type { CreateResult, EngineInfo, Frame, Preset, SimulationSpec, ValidationError } from './types'

/** Promise-based wrapper around the simulation worker. */
export class EngineClient {
  private readonly worker: Worker
  private nextId = 1
  private readonly pending = new Map<number, { resolve: (v: unknown) => void; reject: (e: Error) => void }>()

  constructor() {
    this.worker = new Worker(new URL('./sim.worker.ts', import.meta.url), { type: 'module' })
    this.worker.onmessage = (event: MessageEvent<WorkerResponse>) => {
      const response = event.data
      const entry = this.pending.get(response.id)
      if (!entry) return
      this.pending.delete(response.id)
      if (response.ok) entry.resolve(response.result)
      else entry.reject(new Error(response.error))
    }
    this.worker.onerror = (event) => {
      const error = new Error(event.message || 'Simulation worker failed to load')
      for (const entry of this.pending.values()) entry.reject(error)
      this.pending.clear()
    }
  }

  private call<T>(body: RequestBody): Promise<T> {
    const id = this.nextId++
    return new Promise<T>((resolve, reject) => {
      this.pending.set(id, { resolve: resolve as (v: unknown) => void, reject })
      this.worker.postMessage({ ...body, id })
    })
  }

  private initPromise?: Promise<{ info: EngineInfo; presets: Preset[] }>

  /** Starts the .NET runtime in the worker. Safe to call more than once. */
  init(): Promise<{ info: EngineInfo; presets: Preset[] }> {
    const baseUrl = new URL(import.meta.env.BASE_URL, window.location.href).href
    this.initPromise ??= Promise.race([
      this.call<{ info: EngineInfo; presets: Preset[] }>({ method: 'init', baseUrl }),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Timed out starting the .NET runtime (see the browser console for MONO_WASM errors).')), 60_000),
      ),
    ])
    return this.initPromise
  }

  validate(spec: SimulationSpec): Promise<ValidationError[]> {
    return this.call({ method: 'validate', spec })
  }

  create(spec: SimulationSpec): Promise<{ created: CreateResult; frame?: Frame }> {
    return this.call({ method: 'create', spec })
  }

  step(count: number): Promise<Frame> {
    return this.call({ method: 'step', count })
  }

  reset(): Promise<Frame> {
    return this.call({ method: 'reset' })
  }

  setCells(indices: number[], state: number): Promise<Frame> {
    return this.call({ method: 'setCells', indices, state })
  }
}
