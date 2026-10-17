import type { EngineLimits, Preset, SeedKind, SimulationSpec } from '../engine/types'
import { convertDims } from '../spec'
import { NumberInput, RuleEditor } from './RuleEditor'

interface Props {
  spec: SimulationSpec
  presets: Preset[]
  presetId: string
  limits: EngineLimits
  errors: { path: string; message: string }[]
  dirty: boolean
  onPreset: (id: string) => void
  onChange: (spec: SimulationSpec) => void
  onApply: () => void
}

const AXES = ['X (width)', 'Y (height)', 'Z (depth)']
const pct = (v: number | undefined, fallback: number) => Math.round((v ?? fallback) * 1000) / 10

export function SetupPanel({ spec, presets, presetId, limits, errors, dirty, onPreset, onChange, onApply }: Props) {
  const dims = spec.size.length
  const maxSide = dims === 2 ? limits.maxSide2D : limits.maxSide3D
  const seed = spec.seed
  const setSeed = (patch: Partial<SimulationSpec['seed']>) => onChange({ ...spec, seed: { ...seed, ...patch } })
  const cells = spec.size.reduce((a, b) => a * b, 1)
  const setFraction = (key: 'regionMin' | 'regionMax' | 'at', d: number, percent: number, fallback: number) => {
    const values = Array.from({ length: dims }, (_, i) => seed[key]?.[i] ?? fallback)
    values[d] = percent / 100
    setSeed({ [key]: values })
  }

  return (
    <div className="setup">
      <section>
        <h2>Preset</h2>
        <select value={presetId} onChange={(e) => onPreset(e.target.value)} data-testid="preset">
          <optgroup label="From the examples">
            {presets.filter((p) => p.fromExample).map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </optgroup>
          <optgroup label="More">
            {presets.filter((p) => !p.fromExample).map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </optgroup>
          {presetId === 'custom' && <option value="custom">Custom</option>}
        </select>
        <p className="help">{presets.find((p) => p.id === presetId)?.description ?? 'Modified from a preset.'}</p>
      </section>

      <section>
        <h2>Grid</h2>
        <div className="segmented">
          {[2, 3].map((d) => (
            <button key={d} className={dims === d ? 'on' : ''} onClick={() => dims !== d && onChange(convertDims(spec, d))} data-testid={`dims-${d}`}>
              {d}D
            </button>
          ))}
        </div>
        {spec.size.map((s, d) => (
          <div className="row" key={d}>
            <span>{AXES[d]}</span>
            <NumberInput
              value={s}
              min={1}
              max={maxSide}
              testId={`size-${d}`}
              onChange={(v) => onChange({ ...spec, size: spec.size.map((x, i) => (i === d ? v : x)) })}
            />
            <label className="check inline" title="Wrap around at both edges of this axis">
              <input
                type="checkbox"
                checked={spec.wrap[d] ?? false}
                onChange={(e) => onChange({ ...spec, wrap: spec.size.map((_, i) => (i === d ? e.target.checked : spec.wrap[i] ?? false)) })}
              />
              wrap
            </label>
          </div>
        ))}
        <p className="help">
          {cells.toLocaleString()} cells (max {limits.maxCells.toLocaleString()}).
        </p>
      </section>

      <section>
        <h2>Rule</h2>
        <RuleEditor rule={spec.rule} dims={dims} limits={limits} onChange={(rule) => onChange({ ...spec, rule })} />
      </section>

      <section>
        <h2>Initial state</h2>
        <label className="row">
          <span>Seed</span>
          <select value={seed.kind} onChange={(e) => onChange({ ...spec, seed: defaultsFor(e.target.value as SeedKind, dims) })} data-testid="seed-kind">
            <option value="random">Random</option>
            <option value="single">Single cell</option>
            <option value="empty">Empty (draw your own in 2D)</option>
            {seed.kind === 'points' && <option value="points">Pattern from preset</option>}
          </select>
        </label>
        {seed.kind === 'random' && (
          <>
            <label className="row">
              <span>Density</span>
              <NumberInput value={seed.density ?? 0.3} min={0} max={1} step={0.05} integer={false} testId="density" onChange={(density) => setSeed({ density })} />
            </label>
            <label className="row">
              <span>RNG seed</span>
              <NumberInput value={seed.rng ?? 1} min={0} max={4294967295} testId="rng" onChange={(rng) => setSeed({ rng })} />
              <button title="New random seed" onClick={() => setSeed({ rng: Math.floor(Math.random() * 2 ** 32) })}>🎲</button>
            </label>
            <details>
              <summary>Region (% of each axis)</summary>
              {spec.size.map((_, d) => (
                <div className="row" key={d}>
                  <span>{AXES[d].split(' ')[0]}</span>
                  <NumberInput value={pct(seed.regionMin?.[d], 0)} min={0} max={100} step={5} integer={false} onChange={(v) => setFraction('regionMin', d, v, 0)} />
                  <span className="muted">to</span>
                  <NumberInput value={pct(seed.regionMax?.[d], 1)} min={0} max={100} step={5} integer={false} onChange={(v) => setFraction('regionMax', d, v, 1)} />
                </div>
              ))}
            </details>
          </>
        )}
        {seed.kind === 'single' &&
          spec.size.map((_, d) => (
            <label className="row" key={d}>
              <span>{AXES[d].split(' ')[0]} at %</span>
              <NumberInput value={pct(seed.at?.[d], 0.5)} min={0} max={100} step={5} integer={false} onChange={(v) => setFraction('at', d, v, 0.5)} />
            </label>
          ))}
      </section>

      <div className="apply">
        {errors.length > 0 && (
          <ul className="errors" data-testid="errors">
            {errors.map((e, i) => (
              <li key={i}>
                <code>{e.path || 'spec'}</code> {e.message}
              </li>
            ))}
          </ul>
        )}
        <button className="primary" disabled={errors.length > 0} onClick={onApply} data-testid="apply">
          {dirty ? 'Apply changes' : 'Rebuild'}
        </button>
      </div>
    </div>
  )
}

function defaultsFor(kind: SeedKind, dims: number): SimulationSpec['seed'] {
  switch (kind) {
    case 'random':
      return { kind, rng: 1, density: 0.3 }
    case 'single':
      return { kind, at: dims === 2 ? [0.5, 0] : [0.5, 0, 0.5] }
    default:
      return { kind }
  }
}
