// Mirrors CellularAutomata.NET.WebHost/Engine/*.cs (JSON, camelCase).

export type Offset = number[]

export interface TotalisticRule {
  kind: 'totalistic'
  isolatedCellsKeepState?: boolean
  neighborhood: Offset[]
  birth: number[]
  survive: number[]
  states: number
}

export interface PatternRule {
  kind: 'pattern'
  isolatedCellsKeepState?: boolean
  /** Group 0 is the most significant bit of the table index. */
  groups: Offset[][]
  table: number[]
}

export type RuleSpec = TotalisticRule | PatternRule

export type SeedKind = 'empty' | 'random' | 'single' | 'points'

export interface SeedSpec {
  kind: SeedKind
  rng?: number
  density?: number
  regionMin?: number[]
  regionMax?: number[]
  at?: number[]
  points?: number[][]
  origin?: number[]
  state?: number
}

export interface SimulationSpec {
  size: number[]
  wrap: boolean[]
  rule: RuleSpec
  seed: SeedSpec
}

export interface Preset {
  id: string
  name: string
  description: string
  fromExample: boolean
  spec: SimulationSpec
}

export interface EngineLimits {
  minDimensions: number
  maxDimensions: number
  maxSide2D: number
  maxSide3D: number
  maxCells: number
  maxOffset: number
  maxNeighbors: number
  maxNeighborLinks: number
  maxStates: number
  maxGroups: number
  maxPoints: number
  maxStepsPerCall: number
}

export interface EngineInfo {
  vectorCount: number
  vectorHardwareAccelerated: boolean
  runtime: string
  limits: EngineLimits
}

export interface ValidationError {
  path: string
  message: string
}

export interface SimulationInfo {
  size: number[]
  cellCount: number
  states: number
  neighborCount: number
  updateMode: 'activeCells' | 'allCells'
}

export interface SimulationStatus {
  generation: number
  population: number
  activeCells: number
  lastStepMs: number
}

export interface CreateResult {
  ok: boolean
  errors?: ValidationError[]
  info?: SimulationInfo
}

/** State snapshot returned by every state-changing call. One byte per cell, x fastest. */
export interface Frame {
  state: Uint8Array
  status: SimulationStatus
}
