// Editable form state for a simulation, and conversion to/from the SimulationSpec sent to the host.
// The host validates everything again; this gives immediate feedback in the form.
import type { HostInfo, NeighborhoodType, SimulationSpec } from './types'

export interface Draft {
  dims: number
  size: string[]
  wrap: boolean[]
  kind: 'lifelike' | 'table'
  ruleString: string
  states: string
  neighborhood: NeighborhoodType
  radius: string
  offsets: string
  groups: string[]
  table: string
  seedType: 'random' | 'cells' | 'empty'
  seed: string
  density: string
  fill: string
  cells: string
}

export type FieldErrors = Partial<Record<string, string>>

export const MAX_SIZE = 2048
export const MAX_RADIUS = 5
export const MAX_GROUPS = 10
export const MAX_OFFSET = 16

export function draftFromSpec(spec: SimulationSpec): Draft {
  const dims = spec.size.length
  const draft: Draft = {
    dims,
    size: spec.size.map(String),
    wrap: spec.size.map((_, d) => spec.wrap?.[d] ?? false),
    kind: spec.rule.kind,
    ruleString: 'B3/S23',
    states: '2',
    neighborhood: 'moore',
    radius: '1',
    offsets: '',
    groups: wolframGroups(dims).map(formatOffsets),
    table: wolframTable(30),
    seedType: spec.seed.type,
    seed: '1',
    density: '0.3',
    fill: '1',
    cells: '',
  }
  if (spec.rule.kind === 'lifelike') {
    draft.ruleString = formatRuleString(spec.rule.birth, spec.rule.survive)
    draft.states = String(spec.rule.states)
    draft.neighborhood = spec.rule.neighborhood.type
    draft.radius = String(spec.rule.neighborhood.radius ?? 1)
    draft.offsets = formatOffsets(spec.rule.neighborhood.offsets ?? [])
  } else {
    draft.groups = spec.rule.groups.map(formatOffsets)
    draft.table = spec.rule.table
  }
  if (spec.seed.type === 'random') {
    draft.seed = String(spec.seed.seed)
    draft.density = String(spec.seed.density)
    draft.fill = String(+spec.seed.fill.toFixed(4))
  } else if (spec.seed.type === 'cells') {
    draft.cells = formatOffsets(spec.seed.cells)
  }
  return draft
}

/** Switches between 2D and 3D, adapting sizes and offsets where possible. */
export function changeDims(draft: Draft, dims: number): Draft {
  if (dims === draft.dims) return draft
  const isWolfram = draft.groups.join('|') === wolframGroups(draft.dims).map(formatOffsets).join('|')
  const resizeOffsets = (text: string) =>
    formatOffsets(
      parseOffsets(text)
        .map((o) => (dims > o.length ? [...o, ...Array(dims - o.length).fill(0)] : o.slice(0, dims)))
        .filter((o) => o.some((v) => v !== 0)),
    )
  const defaultSize = dims === 3 ? '32' : '128'
  return {
    ...draft,
    dims,
    size: Array.from({ length: dims }, () => defaultSize),
    wrap: Array.from({ length: dims }, (_, d) => draft.wrap[d] ?? draft.wrap[0] ?? false),
    neighborhood: draft.neighborhood === 'extrudedMoore' && dims !== 3 ? 'moore' : draft.neighborhood,
    offsets: resizeOffsets(draft.offsets),
    groups: isWolfram ? wolframGroups(dims).map(formatOffsets) : draft.groups.map(resizeOffsets),
    cells: draft.seedType === 'cells' ? formatOffsets([centerCell(Array(dims).fill(+defaultSize), draft.kind === 'table')]) : draft.cells,
  }
}

/** The cell a single-cell seed should start from: the middle, or the middle of row 0 for time-axis rules. */
export function centerCell(size: number[], topRow: boolean): number[] {
  return size.map((s, d) => (topRow && d === 1 ? 0 : Math.floor(s / 2)))
}

/** Left/center/right groups reading from the previous row (y - 1). In 3D each is extruded along z. */
export function wolframGroups(dims: number): number[][][] {
  return [-1, 0, 1].map((x) =>
    dims === 3 ? [-1, 0, 1].map((z) => [x, -1, z]) : [[x, -1, ...Array(Math.max(0, dims - 2)).fill(0)]],
  )
}

/** Table digits for Wolfram rule `n`: digit i is bit i. */
export function wolframTable(n: number): string {
  return Array.from({ length: 8 }, (_, i) => String((n >> i) & 1)).join('')
}

/** The Wolfram rule number for an 8-digit binary table, or undefined. */
export function wolframNumber(table: string): number | undefined {
  if (!/^[01]{8}$/.test(table)) return undefined
  return [...table].reduce((n, digit, i) => n | (digit === '1' ? 1 << i : 0), 0)
}

export function parseOffsets(text: string): number[][] {
  return text
    .split(/[;\n]+/)
    .map((part) => part.trim().replace(/^\(|\)$/g, ''))
    .filter((part) => part.length > 0)
    .map((part) => part.split(/[\s,]+/).map((v) => (/^-?\d+$/.test(v) ? Number(v) : NaN)))
}

export function formatOffsets(offsets: number[][]): string {
  return offsets.map((o) => o.join(', ')).join('\n')
}

/** Parses "B3/S23" style rules. Use commas and ranges for counts above 9: "B5,6/S10-12". */
export function parseRuleString(text: string): { birth: number[]; survive: number[] } | undefined {
  const match = /^\s*B([\d,\-\s]*)\s*\/\s*S([\d,\-\s]*)\s*$/i.exec(text)
  if (!match) return undefined
  const counts = (part: string): number[] | undefined => {
    part = part.replace(/\s+/g, '')
    if (part === '') return []
    if (!/[,-]/.test(part)) return [...part].map(Number)
    const result: number[] = []
    for (const item of part.split(',')) {
      const range = /^(\d+)(?:-(\d+))?$/.exec(item)
      if (!range) return undefined
      const from = Number(range[1])
      const to = Number(range[2] ?? range[1])
      if (to < from || to - from > 1000) return undefined
      for (let i = from; i <= to; i++) result.push(i)
    }
    return result
  }
  const birth = counts(match[1])
  const survive = counts(match[2])
  return birth && survive ? { birth: [...new Set(birth)], survive: [...new Set(survive)] } : undefined
}

export function formatRuleString(birth: number[], survive: number[]): string {
  const part = (counts: number[]) => (counts.every((c) => c < 10) ? counts.join('') : counts.join(','))
  return `B${part(birth)}/S${part(survive)}`
}

export function neighborCount(draft: Draft): number | undefined {
  const r = Number(draft.radius)
  switch (draft.neighborhood) {
    case 'moore':
      return Number.isInteger(r) && r >= 1 ? (2 * r + 1) ** draft.dims - 1 : undefined
    case 'vonNeumann': {
      if (!Number.isInteger(r) || r < 1) return undefined
      // Points with |x1| + ... + |xd| <= r, minus the origin.
      const count = (d: number, left: number): number =>
        d === 0 ? 1 : Array.from({ length: 2 * left + 1 }, (_, i) => count(d - 1, left - Math.abs(i - left))).reduce((a, b) => a + b)
      return count(draft.dims, r) - 1
    }
    case 'extrudedMoore':
      return 24
    case 'custom':
      return parseOffsets(draft.offsets).length
  }
}

const isNumber = (text: string) => text.trim() !== '' && Number.isFinite(Number(text))

/** Builds a spec from the draft, or returns field errors. */
export function buildSpec(draft: Draft, info?: HostInfo): { spec?: SimulationSpec; errors: FieldErrors } {
  const errors: FieldErrors = {}
  const maxCells = info?.maxCells ?? 1 << 20
  const maxLinks = info?.maxNeighborLinks ?? 1 << 23

  const size = draft.size.map(Number)
  draft.size.forEach((s, d) => {
    if (!/^\d+$/.test(s.trim()) || size[d] < 1 || size[d] > MAX_SIZE) errors[`size${d}`] = `Whole number from 1 to ${MAX_SIZE}`
  })
  const cells = size.reduce((a, b) => a * b, 1)
  if (!Object.keys(errors).length && cells > maxCells) {
    errors.size = `${cells.toLocaleString()} cells is too many (max ${maxCells.toLocaleString()})`
  }

  const checkOffsets = (offsets: number[][], key: string) => {
    if (offsets.length === 0) return (errors[key] = 'Add at least one offset')
    const seen = new Set<string>()
    for (const o of offsets) {
      const label = `(${o.join(', ')})`
      if (o.length !== draft.dims || o.some((v) => !Number.isInteger(v))) return (errors[key] = `${label}: needs ${draft.dims} whole numbers`)
      if (o.some((v) => Math.abs(v) > MAX_OFFSET)) return (errors[key] = `${label}: keep within ±${MAX_OFFSET}`)
      if (o.every((v) => v === 0)) return (errors[key] = `${label} is the cell itself`)
      if (seen.has(label)) return (errors[key] = `${label} is repeated`)
      seen.add(label)
    }
  }

  let rule: SimulationSpec['rule'] | undefined
  let neighbors = 0
  if (draft.kind === 'lifelike') {
    const parsed = parseRuleString(draft.ruleString)
    const states = Number(draft.states)
    if (!Number.isInteger(states) || states < 2 || states > 255) errors.states = 'Whole number from 2 to 255'
    const radius = Number(draft.radius)
    if ((draft.neighborhood === 'moore' || draft.neighborhood === 'vonNeumann') && (!Number.isInteger(radius) || radius < 1 || radius > MAX_RADIUS)) {
      errors.radius = `Whole number from 1 to ${MAX_RADIUS}`
    }
    if (draft.neighborhood === 'extrudedMoore' && draft.dims !== 3) errors.neighborhood = 'Extruded Moore is 3D only'
    const offsets = parseOffsets(draft.offsets)
    if (draft.neighborhood === 'custom') checkOffsets(offsets, 'offsets')
    neighbors = neighborCount(draft) ?? 0
    if (neighbors > 512) errors.radius = `${neighbors} neighbors is too many (max 512)`
    if (!parsed) {
      errors.ruleString = 'Use the form B3/S23 (commas and ranges for counts over 9: B5,6/S10-12)'
    } else {
      const bad = [...parsed.birth, ...parsed.survive].find((c) => c > neighbors)
      if (bad !== undefined && neighbors > 0) errors.ruleString = `Count ${bad} is more than the ${neighbors} neighbors`
    }
    if (parsed) {
      rule = {
        kind: 'lifelike',
        birth: parsed.birth,
        survive: parsed.survive,
        states,
        neighborhood: {
          type: draft.neighborhood,
          radius,
          ...(draft.neighborhood === 'custom' ? { offsets } : {}),
        },
      }
    }
  } else {
    const groups = draft.groups.map(parseOffsets)
    if (groups.length < 1 || groups.length > MAX_GROUPS) errors.groups = `Use 1 to ${MAX_GROUPS} groups`
    groups.forEach((g, i) => checkOffsets(g, `group${i}`))
    neighbors = new Set(groups.flat().map((o) => o.join(','))).size
    const expected = 2 ** groups.length
    if (draft.table.length !== expected) errors.table = `Needs ${expected} digits for ${groups.length} groups (has ${draft.table.length})`
    else if (!/^[0-9]*$/.test(draft.table)) errors.table = 'Digits 0-9 only'
    rule = { kind: 'table', groups, table: draft.table }
  }
  if (cells * neighbors > maxLinks) {
    errors.size = `${cells.toLocaleString()} cells × ${neighbors} neighbors is too large; use a smaller grid or neighborhood`
  }

  let seed: SimulationSpec['seed'] | undefined
  if (draft.seedType === 'random') {
    const s = Number(draft.seed)
    const density = Number(draft.density)
    const fill = Number(draft.fill)
    if (!/^\d+$/.test(draft.seed.trim()) || s > 0xffffffff) errors.seed = 'Whole number from 0 to 4294967295'
    if (!isNumber(draft.density) || density < 0 || density > 1) errors.density = 'Number from 0 to 1'
    if (!isNumber(draft.fill) || fill <= 0 || fill > 1) errors.fill = 'Number above 0, up to 1'
    seed = { type: 'random', seed: s, density, fill }
  } else if (draft.seedType === 'cells') {
    const list = parseOffsets(draft.cells)
    const bad = list.find((c) => c.length !== draft.dims || c.some((v, d) => !Number.isInteger(v) || v < 0 || v >= size[d]))
    if (bad) errors.cells = `(${bad.join(', ')}) is not a cell in the grid`
    seed = { type: 'cells', cells: list }
  } else {
    seed = { type: 'empty' }
  }

  if (Object.keys(errors).length || !rule) return { errors }
  return { spec: { size, wrap: draft.wrap, rule, seed }, errors }
}
