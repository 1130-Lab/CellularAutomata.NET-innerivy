import { useState } from 'react'
import type { EngineLimits, Offset, PatternRule, RuleSpec, TotalisticRule } from '../engine/types'
import {
  defaultRule,
  extrudedMoore,
  formatRulestring,
  moore,
  numberFromTable,
  offsetKey,
  parseRulestring,
  tableFromNumber,
  vonNeumann,
  wolframGroups,
} from '../spec'
import { GROUP_COLORS } from '../palette'
import { NeighborhoodEditor } from './NeighborhoodEditor'

interface Props {
  rule: RuleSpec
  dims: number
  limits: EngineLimits
  onChange: (rule: RuleSpec) => void
}

const parseKey = (k: string): Offset => k.split(',').map(Number)

export function RuleEditor({ rule, dims, limits, onChange }: Props) {
  return (
    <div className="rule-editor">
      <label className="row">
        <span>Rule type</span>
        <select
          value={rule.kind}
          onChange={(e) => onChange(defaultRule(e.target.value as RuleSpec['kind'], dims))}
          data-testid="rule-kind"
        >
          <option value="totalistic">Totalistic (Life-like / Generations)</option>
          <option value="pattern">Pattern table (Wolfram-style)</option>
        </select>
      </label>
      {rule.kind === 'totalistic' ? (
        <TotalisticEditor rule={rule} dims={dims} limits={limits} onChange={onChange} />
      ) : (
        <PatternEditor rule={rule} dims={dims} limits={limits} onChange={onChange} />
      )}
      <label className="row check" title="Matches the `if (neighbors.Count == 0) return;` guard in the example rules">
        <input
          type="checkbox"
          checked={rule.isolatedCellsKeepState ?? true}
          onChange={(e) => onChange({ ...rule, isolatedCellsKeepState: e.target.checked })}
        />
        <span>Cells with no in-bounds neighbors keep their state</span>
      </label>
    </div>
  )
}

function CountPicker({ label, values, max, onChange }: { label: string; values: number[]; max: number; onChange: (v: number[]) => void }) {
  const set = new Set(values)
  return (
    <div className="counts">
      <span className="counts-label">{label}</span>
      <div className="counts-grid">
        {Array.from({ length: max + 1 }, (_, n) => (
          <button
            key={n}
            className={set.has(n) ? 'on' : ''}
            onClick={() => {
              const next = new Set(set)
              if (next.has(n)) next.delete(n)
              else next.add(n)
              onChange([...next].sort((a, b) => a - b))
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  )
}

function TotalisticEditor({ rule, dims, limits, onChange }: { rule: TotalisticRule; dims: number; limits: EngineLimits; onChange: (r: RuleSpec) => void }) {
  const formatted = formatRulestring(rule)
  const [text, setText] = useState(formatted)
  const [textError, setTextError] = useState('')
  const [shown, setShown] = useState(formatted)
  if (formatted !== shown) {
    setShown(formatted)
    setText(formatted)
    setTextError('')
  }

  const k = rule.neighborhood.length
  const assignments = new Map(rule.neighborhood.map((o) => [offsetKey(o), 0]))
  const setNeighborhood = (neighborhood: Offset[]) =>
    onChange({
      ...rule,
      neighborhood,
      birth: rule.birth.filter((b) => b <= neighborhood.length),
      survive: rule.survive.filter((s) => s <= neighborhood.length),
    })

  const applyText = () => {
    const parsed = parseRulestring(text)
    if (typeof parsed === 'string') return setTextError(parsed)
    const bad = [...parsed.birth, ...parsed.survive].find((n) => n > k)
    if (bad !== undefined) return setTextError(`${bad} is larger than the neighborhood (${k} cells).`)
    setTextError('')
    onChange({ ...rule, birth: parsed.birth, survive: parsed.survive, states: parsed.states ?? rule.states })
  }

  return (
    <>
      <label className="row">
        <span>Rulestring</span>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={applyText}
          onKeyDown={(e) => e.key === 'Enter' && applyText()}
          data-testid="rulestring"
        />
      </label>
      {textError && <div className="error">{textError}</div>}
      <CountPicker label="Birth" values={rule.birth} max={k} onChange={(birth) => onChange({ ...rule, birth })} />
      <CountPicker label="Survive" values={rule.survive} max={k} onChange={(survive) => onChange({ ...rule, survive })} />
      <label className="row">
        <span>States</span>
        <NumberInput
          value={rule.states}
          min={2}
          max={limits.maxStates}
          onChange={(states) => onChange({ ...rule, states })}
          title="2 = Life-like. More states = Generations: cells that die decay through extra states."
        />
      </label>
      <div className="subhead">Neighborhood ({k} cells)</div>
      <div className="button-row">
        <button onClick={() => setNeighborhood(moore(dims))}>Moore</button>
        <button onClick={() => setNeighborhood(vonNeumann(dims))}>von Neumann</button>
        {dims === 3 && <button onClick={() => setNeighborhood(extrudedMoore())} title="Conway3D's 24-cell neighborhood">Extruded Moore (24)</button>}
        <button onClick={() => setNeighborhood(moore(dims, 2))}>Moore r2</button>
        <button onClick={() => setNeighborhood([])}>Clear</button>
      </div>
      <NeighborhoodEditor
        dims={dims}
        assignments={assignments}
        maxOffset={limits.maxOffset}
        activeGroup={0}
        onChange={(m) => setNeighborhood([...m.keys()].map(parseKey))}
      />
    </>
  )
}

function PatternEditor({ rule, dims, limits, onChange }: { rule: PatternRule; dims: number; limits: EngineLimits; onChange: (r: RuleSpec) => void }) {
  const [brush, setBrush] = useState(0)
  const groupCount = rule.groups.length
  const maxGroups = Math.min(limits.maxGroups, 6)
  const assignments = new Map<string, number>()
  rule.groups.forEach((g, i) => g.forEach((o) => assignments.set(offsetKey(o), i)))

  const setGroupCount = (n: number) => {
    const groups = Array.from({ length: n }, (_, i) => rule.groups[i] ?? [])
    const table = Array.from({ length: 2 ** n }, (_, i) => rule.table[i] ?? 0)
    setBrush((b) => Math.min(b, n - 1))
    onChange({ ...rule, groups, table })
  }

  const setAssignments = (m: Map<string, number>) => {
    const groups: Offset[][] = Array.from({ length: groupCount }, () => [])
    for (const [key, g] of m) groups[g].push(parseKey(key))
    onChange({ ...rule, groups })
  }

  const ruleNumber = numberFromTable(rule.table)
  const maxNumber = (1n << BigInt(rule.table.length)) - 1n

  return (
    <>
      <p className="help">
        Each group reads 1 if any of its cells is alive. The groups form a binary number (first group = most significant bit)
        that picks the cell's next state from the table. With 3 groups this is Wolfram's numbering.
      </p>
      <label className="row">
        <span>Groups</span>
        <NumberInput value={groupCount} min={1} max={maxGroups} onChange={setGroupCount} />
      </label>
      <div className="button-row">
        <span className="muted">Paint:</span>
        {rule.groups.map((g, i) => (
          <button
            key={i}
            className={`chip ${brush === i ? 'on' : ''}`}
            style={{ borderColor: GROUP_COLORS[i], color: brush === i ? '#111' : GROUP_COLORS[i], background: brush === i ? GROUP_COLORS[i] : undefined }}
            onClick={() => setBrush(i)}
          >
            {String.fromCharCode(65 + i)} ({g.length})
          </button>
        ))}
        <button onClick={() => onChange({ ...rule, groups: wolframGroups(dims), table: rule.table.length === 8 ? rule.table : tableFromNumber(30n, 3) })}>
          Wolfram {dims === 3 ? '(extruded)' : 'L/C/R'}
        </button>
      </div>
      <NeighborhoodEditor dims={dims} assignments={assignments} maxOffset={limits.maxOffset} activeGroup={brush} onChange={setAssignments} />
      <label className="row">
        <span>Rule number</span>
        <BigNumberInput value={ruleNumber} max={maxNumber} onChange={(n) => onChange({ ...rule, table: tableFromNumber(n, groupCount) })} />
      </label>
      <div className="table-grid">
        {rule.table
          .map((out, index) => ({ out, index }))
          .reverse()
          .map(({ out, index }) => (
            <button
              key={index}
              className="table-entry"
              title={`Input ${index.toString(2).padStart(groupCount, '0')} → ${out}`}
              onClick={() => onChange({ ...rule, table: rule.table.map((v, i) => (i === index ? 1 - v : v)) })}
            >
              <span className="table-in">
                {Array.from({ length: groupCount }, (_, g) => {
                  const bit = (index >> (groupCount - 1 - g)) & 1
                  return <i key={g} style={{ background: bit ? GROUP_COLORS[g] : undefined }} />
                })}
              </span>
              <span className={`table-out ${out ? 'on' : ''}`}>{out}</span>
            </button>
          ))}
      </div>
    </>
  )
}

/** Integer input that only commits valid values and shows an inline error otherwise. */
export function NumberInput({
  value,
  min,
  max,
  step = 1,
  integer = true,
  onChange,
  title,
  testId,
}: {
  value: number
  min: number
  max: number
  step?: number
  integer?: boolean
  onChange: (v: number) => void
  title?: string
  testId?: string
}) {
  const [text, setText] = useState(String(value))
  const [error, setError] = useState('')
  const [shown, setShown] = useState(value)
  if (value !== shown) {
    // The value changed from outside (e.g. a preset was loaded).
    setShown(value)
    setText(String(value))
    setError('')
  }
  const commit = (t: string) => {
    const v = Number(t)
    if (t.trim() === '' || !Number.isFinite(v) || (integer && !Number.isInteger(v)) || v < min || v > max) {
      setError(`${integer ? 'Whole number' : 'Number'} from ${min} to ${max}`)
      return
    }
    setError('')
    if (v !== value) onChange(v)
  }
  return (
    <span className="num">
      <input
        type="number"
        value={text}
        min={min}
        max={max}
        step={step}
        title={title}
        className={error ? 'invalid' : ''}
        onChange={(e) => {
          setText(e.target.value)
          commit(e.target.value)
        }}
        data-testid={testId}
      />
      {error && <span className="error">{error}</span>}
    </span>
  )
}

function BigNumberInput({ value, max, onChange }: { value: bigint; max: bigint; onChange: (v: bigint) => void }) {
  const [text, setText] = useState(value.toString())
  const [error, setError] = useState('')
  const [shown, setShown] = useState(value)
  if (value !== shown) {
    setShown(value)
    setText(value.toString())
    setError('')
  }
  return (
    <span className="num">
      <input
        value={text}
        inputMode="numeric"
        className={error ? 'invalid' : ''}
        data-testid="rule-number"
        onChange={(e) => {
          setText(e.target.value)
          if (!/^\d+$/.test(e.target.value) || BigInt(e.target.value) > max) {
            setError(`Whole number from 0 to ${max}`)
            return
          }
          setError('')
          onChange(BigInt(e.target.value))
        }}
      />
      {error && <span className="error">{error}</span>}
    </span>
  )
}
