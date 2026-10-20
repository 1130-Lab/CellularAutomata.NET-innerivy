// Mirrors CellularAutomata.Web.Host/Engine/Specs.cs (camelCase JSON).

export type NeighborhoodType = 'moore' | 'vonNeumann' | 'extrudedMoore' | 'custom'

export interface NeighborhoodSpec {
  type: NeighborhoodType
  radius?: number
  offsets?: number[][]
}

export interface LifeLikeRuleSpec {
  kind: 'lifelike'
  birth: number[]
  survive: number[]
  states: number
  neighborhood: NeighborhoodSpec
}

export interface TableRuleSpec {
  kind: 'table'
  groups: number[][][]
  table: string
}

export type RuleSpec = LifeLikeRuleSpec | TableRuleSpec

export type SeedSpec =
  | { type: 'random'; seed: number; density: number; fill: number }
  | { type: 'cells'; cells: number[][] }
  | { type: 'empty' }

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
  spec: SimulationSpec
}

export interface HostInfo {
  vectorCount: number
  maxDimensions: number
  maxCells: number
  maxNeighborLinks: number
  runtime: string
}

export interface SimulationInfo {
  ok: boolean
  errors: string[]
  size?: number[]
  generation: number
  population: number
  evaluated: number
  changed: number
  neighborCount: number
  states: number
}
