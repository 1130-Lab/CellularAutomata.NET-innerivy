// Spec editing helpers for the UI. These only build/convert data that is sent to the host;
// rules are evaluated exclusively by the C# side.

import type { EngineLimits, Offset, PatternRule, RuleSpec, SeedSpec, SimulationSpec, TotalisticRule } from './engine/types'

export const offsetKey = (o: Offset) => o.join(',')

/** All offsets within Chebyshev radius r (excluding the origin) that pass `include`. */
function offsetsWithin(dims: number, r: number, include: (o: Offset) => boolean): Offset[] {
  const out: Offset[] = []
  const side = 2 * r + 1
  const total = side ** dims
  for (let n = 0; n < total; n++) {
    let rest = n
    const o: Offset = []
    for (let d = 0; d < dims; d++) {
      o.push((rest % side) - r)
      rest = Math.floor(rest / side)
    }
    if (o.some((v) => v !== 0) && include(o)) out.push(o)
  }
  return out
}

export const moore = (dims: number, r = 1) => offsetsWithin(dims, r, () => true)
export const vonNeumann = (dims: number, r = 1) =>
  offsetsWithin(dims, r, (o) => o.reduce((s, v) => s + Math.abs(v), 0) <= r)
/** Conway3D's 24-cell neighborhood: 2D Moore extruded over z-1..z+1. */
export const extrudedMoore = () => moore(2).flatMap(([x, y]) => [-1, 0, 1].map((z) => [x, y, z]))

export function wolframGroups(dims: number): Offset[][] {
  const above = [-1, 0, 1]
  return dims === 2
    ? above.map((x) => [[x, -1]])
    : above.map((x) => [-1, 0, 1].map((z) => [x, -1, z]))
}

export function tableFromNumber(n: bigint, groups: number): number[] {
  return Array.from({ length: 2 ** groups }, (_, i) => Number((n >> BigInt(i)) & 1n))
}

export function numberFromTable(table: number[]): bigint {
  return table.reduce((acc, v, i) => (v ? acc | (1n << BigInt(i)) : acc), 0n)
}

/** "B3/S23", "B3,6/S2,3" or "B4/S4/C5" (C = number of states). */
export function formatRulestring(rule: TotalisticRule): string {
  const list = (xs: number[]) => {
    const sorted = [...xs].sort((a, b) => a - b)
    return sorted.some((x) => x > 9) ? sorted.join(',') : sorted.join('')
  }
  const base = `B${list(rule.birth)}/S${list(rule.survive)}`
  return rule.states > 2 ? `${base}/C${rule.states}` : base
}

export function parseRulestring(text: string): { birth: number[]; survive: number[]; states?: number } | string {
  const m = /^\s*B([\d,]*)\s*\/\s*S([\d,]*)\s*(?:\/\s*C(\d+))?\s*$/i.exec(text)
  if (!m) return 'Expected e.g. B3/S23, B3,6/S2,3 or B2/S/C3'
  const list = (s: string) =>
    s.includes(',') ? s.split(',').filter(Boolean).map(Number) : [...s].map(Number)
  const unique = (xs: number[]) => [...new Set(xs)]
  return { birth: unique(list(m[1])), survive: unique(list(m[2])), states: m[3] ? Number(m[3]) : undefined }
}

export function defaultRule(kind: RuleSpec['kind'], dims: number): RuleSpec {
  return kind === 'totalistic'
    ? { kind, neighborhood: moore(dims), birth: [3], survive: [2, 3], states: 2, isolatedCellsKeepState: true }
    : { kind, groups: wolframGroups(dims), table: tableFromNumber(30n, 3), isolatedCellsKeepState: true }
}

/** Switches a spec between 2D and 3D, keeping whatever still makes sense. */
export function convertDims(spec: SimulationSpec, dims: number): SimulationSpec {
  const resize = <T,>(xs: T[] | undefined, fill: T): T[] | undefined =>
    xs && Array.from({ length: dims }, (_, d) => xs[d] ?? fill)
  const size = Array.from({ length: dims }, (_, d) => spec.size[d] ?? (dims === 3 ? 32 : 128)).map((s) =>
    dims === 3 ? Math.min(s, 32) : s,
  )
  const seed: SeedSpec = {
    ...spec.seed,
    regionMin: resize(spec.seed.regionMin, 0),
    regionMax: resize(spec.seed.regionMax, 1),
    at: resize(spec.seed.at, 0.5),
    origin: resize(spec.seed.origin, 0.5),
    points: spec.seed.points?.map((p) => Array.from({ length: dims }, (_, d) => p[d] ?? 0)),
  }
  const rule: RuleSpec =
    spec.rule.kind === 'totalistic'
      ? { ...spec.rule, neighborhood: moore(dims), birth: spec.rule.birth, survive: spec.rule.survive }
      : { ...(spec.rule as PatternRule), groups: wolframGroups(dims) }
  if (rule.kind === 'totalistic') {
    const k = rule.neighborhood.length
    rule.birth = rule.birth.filter((b) => b <= k)
    rule.survive = rule.survive.filter((s) => s <= k)
  } else {
    rule.table = Array.from({ length: 2 ** rule.groups.length }, (_, i) => rule.table[i] ?? 0)
  }
  return { size, wrap: Array.from({ length: dims }, (_, d) => spec.wrap[d] ?? false), rule, seed }
}

/**
 * Quick client-side checks for instant feedback while typing. The host re-validates
 * everything (SpecValidator.cs), and its errors are shown too.
 */
export function quickValidate(spec: SimulationSpec, limits: EngineLimits): { path: string; message: string }[] {
  const errors: { path: string; message: string }[] = []
  const dims = spec.size.length
  const maxSide = dims === 2 ? limits.maxSide2D : limits.maxSide3D
  spec.size.forEach((s, d) => {
    if (!Number.isInteger(s) || s < 1 || s > maxSide)
      errors.push({ path: `size[${d}]`, message: `Must be a whole number from 1 to ${maxSide}.` })
  })
  const cells = spec.size.reduce((a, b) => a * b, 1)
  if (cells > limits.maxCells)
    errors.push({ path: 'size', message: `${cells.toLocaleString()} cells exceeds the limit of ${limits.maxCells.toLocaleString()}.` })
  const seed = spec.seed
  if (seed.kind === 'random') {
    if (!(seed.density! >= 0 && seed.density! <= 1)) errors.push({ path: 'seed.density', message: 'Must be between 0 and 1.' })
    if (!Number.isInteger(seed.rng) || seed.rng! < 0 || seed.rng! > 0xffffffff)
      errors.push({ path: 'seed.rng', message: 'Must be a whole number from 0 to 4294967295.' })
  }
  if (spec.rule.kind === 'totalistic') {
    const r = spec.rule
    if (!Number.isInteger(r.states) || r.states < 2 || r.states > limits.maxStates)
      errors.push({ path: 'rule.states', message: `Must be from 2 to ${limits.maxStates}.` })
    if (r.neighborhood.length === 0) errors.push({ path: 'rule.neighborhood', message: 'Select at least one neighbor.' })
  } else if (spec.rule.groups.some((g) => g.length === 0)) {
    errors.push({ path: 'rule.groups', message: 'Every group needs at least one cell.' })
  }
  return errors
}
