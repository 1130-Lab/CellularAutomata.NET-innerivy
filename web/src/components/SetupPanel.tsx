import type { ReactNode } from 'react'
import {
  centerCell,
  changeDims,
  formatOffsets,
  neighborCount,
  wolframGroups,
  wolframNumber,
  wolframTable,
  type Draft,
  type FieldErrors,
} from '../draft'
import type { NeighborhoodType, Preset } from '../types'

interface Props {
  presets: Preset[]
  presetId: string
  onPreset: (id: string) => void
  draft: Draft
  onChange: (draft: Draft) => void
  errors: FieldErrors
  hostErrors: string[]
  dirty: boolean
  onApply: () => void
}

const AXES = ['x', 'y', 'z', 'w']

function Field({ label, error, children, hint }: { label: string; error?: string; children: ReactNode; hint?: ReactNode }) {
  return (
    <label className={'field' + (error ? ' invalid' : '')}>
      <span className="field-label">{label}</span>
      {children}
      {error ? <span className="field-error">{error}</span> : hint ? <span className="field-hint">{hint}</span> : null}
    </label>
  )
}

export function SetupPanel({ presets, presetId, onPreset, draft, onChange, errors, hostErrors, dirty, onApply }: Props) {
  const set = <K extends keyof Draft>(key: K, value: Draft[K]) => onChange({ ...draft, [key]: value })
  const preset = presets.find((p) => p.id === presetId)
  const wolfram = draft.kind === 'table' && draft.groups.length === 3 ? wolframNumber(draft.table) : undefined
  const neighbors = draft.kind === 'lifelike' ? neighborCount(draft) : undefined
  const hasErrors = Object.keys(errors).length > 0

  return (
    <form
      className="setup"
      onSubmit={(e) => {
        e.preventDefault()
        onApply()
      }}
    >
      <section>
        <Field label="Preset" hint={preset?.description}>
          <select value={presetId} onChange={(e) => onPreset(e.target.value)} data-testid="preset">
            {presetId === '' && <option value="">Custom</option>}
            {presets.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </Field>
      </section>

      <section>
        <h3>Grid</h3>
        <div className="segmented" role="radiogroup" aria-label="Dimensions">
          {[2, 3].map((d) => (
            <button type="button" key={d} className={draft.dims === d ? 'active' : ''} aria-pressed={draft.dims === d} onClick={() => onChange(changeDims(draft, d))}>
              {d}D
            </button>
          ))}
        </div>
        <div className="row">
          {draft.size.map((s, d) => (
            <Field key={d} label={`Size ${AXES[d]}`} error={errors[`size${d}`]}>
              <input
                inputMode="numeric"
                value={s}
                data-testid={`size-${d}`}
                onChange={(e) => set('size', draft.size.map((v, i) => (i === d ? e.target.value : v)))}
              />
            </Field>
          ))}
        </div>
        {errors.size && <p className="field-error">{errors.size}</p>}
        <div className="row checks">
          {draft.wrap.map((w, d) => (
            <label key={d} className="check">
              <input type="checkbox" checked={w} onChange={(e) => set('wrap', draft.wrap.map((v, i) => (i === d ? e.target.checked : v)))} />
              Wrap {AXES[d]}
            </label>
          ))}
        </div>
      </section>

      <section>
        <h3>Rule</h3>
        <Field label="Type">
          <select value={draft.kind} onChange={(e) => set('kind', e.target.value as Draft['kind'])} data-testid="rule-kind">
            <option value="lifelike">Life-like (birth / survival counts)</option>
            <option value="table">Pattern table (Wolfram-style)</option>
          </select>
        </Field>

        {draft.kind === 'lifelike' ? (
          <>
            <div className="row">
              <Field label="Rule" error={errors.ruleString} hint="Neighbor counts that birth / keep a cell">
                <input value={draft.ruleString} onChange={(e) => set('ruleString', e.target.value)} data-testid="rule-string" spellCheck={false} />
              </Field>
              <Field label="States" error={errors.states} hint={Number(draft.states) > 2 ? 'Cells decay through extra states' : '2 = alive/dead'}>
                <input inputMode="numeric" value={draft.states} onChange={(e) => set('states', e.target.value)} />
              </Field>
            </div>
            <div className="row">
              <Field label="Neighborhood" error={errors.neighborhood} hint={neighbors !== undefined ? `${neighbors} neighbors` : undefined}>
                <select value={draft.neighborhood} onChange={(e) => set('neighborhood', e.target.value as NeighborhoodType)}>
                  <option value="moore">Moore</option>
                  <option value="vonNeumann">von Neumann</option>
                  {draft.dims === 3 && <option value="extrudedMoore">Extruded Moore (24, Conway3D)</option>}
                  <option value="custom">Custom offsets</option>
                </select>
              </Field>
              {(draft.neighborhood === 'moore' || draft.neighborhood === 'vonNeumann') && (
                <Field label="Radius" error={errors.radius}>
                  <input inputMode="numeric" value={draft.radius} onChange={(e) => set('radius', e.target.value)} />
                </Field>
              )}
            </div>
            {draft.neighborhood === 'custom' && (
              <Field label={`Offsets (one per line: ${AXES.slice(0, draft.dims).join(', ')})`} error={errors.offsets}>
                <textarea rows={5} value={draft.offsets} onChange={(e) => set('offsets', e.target.value)} spellCheck={false} />
              </Field>
            )}
          </>
        ) : (
          <>
            <div className="row">
              <Field label="Wolfram rule (0–255)" hint={wolfram === undefined ? 'Needs 3 groups and a 0/1 table' : 'Sets the table below'}>
                <input
                  type="number"
                  min={0}
                  max={255}
                  data-testid="wolfram-number"
                  disabled={draft.groups.length !== 3}
                  value={wolfram ?? ''}
                  onChange={(e) => {
                    const n = Math.round(Number(e.target.value))
                    if (e.target.value !== '' && n >= 0 && n <= 255) set('table', wolframTable(n))
                  }}
                />
              </Field>
              <button
                type="button"
                className="secondary"
                title="Left / center / right groups from the row above (y - 1); extruded along z in 3D"
                onClick={() => onChange({ ...draft, groups: wolframGroups(draft.dims).map(formatOffsets), table: draft.table.length === 8 ? draft.table : wolframTable(30) })}
              >
                Wolfram layout
              </button>
            </div>
            <p className="note">
              Each group reads 1 if any of its cells is non-zero. Group 1 is the most significant bit; table digit <i>i</i> is the new state for pattern <i>i</i>. Cells with no neighbors in the grid keep their state.
            </p>
            {draft.groups.map((g, i) => (
              <Field key={i} label={`Group ${i + 1} offsets`} error={errors[`group${i}`]}>
                <div className="group">
                  <textarea
                    rows={Math.min(4, Math.max(1, g.split('\n').length))}
                    value={g}
                    spellCheck={false}
                    onChange={(e) => set('groups', draft.groups.map((v, j) => (j === i ? e.target.value : v)))}
                  />
                  <button
                    type="button"
                    className="secondary"
                    disabled={draft.groups.length <= 1}
                    title="Remove group"
                    onClick={() => {
                      const groups = draft.groups.filter((_, j) => j !== i)
                      onChange({ ...draft, groups, table: draft.table.slice(0, 2 ** groups.length).padEnd(2 ** groups.length, '0') })
                    }}
                  >
                    ×
                  </button>
                </div>
              </Field>
            ))}
            {errors.groups && <p className="field-error">{errors.groups}</p>}
            <button
              type="button"
              className="secondary"
              disabled={draft.groups.length >= 10}
              onClick={() => onChange({ ...draft, groups: [...draft.groups, ''], table: draft.table + draft.table })}
            >
              Add group
            </button>
            <Field label={`Table (${2 ** draft.groups.length} digits)`} error={errors.table}>
              <input value={draft.table} onChange={(e) => set('table', e.target.value.trim())} spellCheck={false} data-testid="table" />
            </Field>
          </>
        )}
      </section>

      <section>
        <h3>Initial state</h3>
        <Field label="Seed">
          <select value={draft.seedType} onChange={(e) => set('seedType', e.target.value as Draft['seedType'])}>
            <option value="random">Random</option>
            <option value="cells">Cell list</option>
            <option value="empty">Empty (draw your own in 2D)</option>
          </select>
        </Field>
        {draft.seedType === 'random' && (
          <>
            <div className="row">
              <Field label="Seed" error={errors.seed}>
                <div className="group">
                  <input inputMode="numeric" value={draft.seed} onChange={(e) => set('seed', e.target.value)} data-testid="seed" />
                  <button type="button" className="secondary" title="New random seed" onClick={() => set('seed', String(Math.floor(Math.random() * 2 ** 32)))}>
                    New
                  </button>
                </div>
              </Field>
            </div>
            <div className="row">
              <Field label="Density" error={errors.density} hint="Chance a cell starts alive">
                <input inputMode="decimal" value={draft.density} onChange={(e) => set('density', e.target.value)} />
              </Field>
              <Field label="Fill" error={errors.fill} hint="Centred fraction of each axis">
                <input inputMode="decimal" value={draft.fill} onChange={(e) => set('fill', e.target.value)} />
              </Field>
            </div>
          </>
        )}
        {draft.seedType === 'cells' && (
          <>
            <Field label={`Live cells (one per line: ${AXES.slice(0, draft.dims).join(', ')})`} error={errors.cells}>
              <textarea rows={4} value={draft.cells} onChange={(e) => set('cells', e.target.value)} spellCheck={false} />
            </Field>
            <button
              type="button"
              className="secondary"
              onClick={() => set('cells', formatOffsets([centerCell(draft.size.map(Number), draft.kind === 'table')]))}
            >
              Single {draft.kind === 'table' ? 'top-centre' : 'centre'} cell
            </button>
          </>
        )}
      </section>

      <div className="apply">
        {hostErrors.length > 0 && (
          <ul className="host-errors" data-testid="host-errors">
            {hostErrors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
        <button type="submit" className="primary" disabled={hasErrors} data-testid="apply">
          {dirty ? 'Apply changes' : 'Rebuild'}
        </button>
        {hasErrors && <span className="field-error">Fix the highlighted fields</span>}
      </div>
    </form>
  )
}
