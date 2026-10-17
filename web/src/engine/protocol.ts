import type { SimulationSpec } from './types'

type Request =
  | { method: 'init'; baseUrl: string }
  | { method: 'validate'; spec: SimulationSpec }
  | { method: 'create'; spec: SimulationSpec }
  | { method: 'step'; count: number }
  | { method: 'reset' }
  | { method: 'setCells'; indices: number[]; state: number }

export type WorkerRequest = Request & { id: number }

export type WorkerResponse =
  | { id: number; ok: true; result: unknown }
  | { id: number; ok: false; error: string }

type DistributiveOmit<T, K extends keyof never> = T extends unknown ? Omit<T, K> : never
export type RequestBody = DistributiveOmit<Request, never>
