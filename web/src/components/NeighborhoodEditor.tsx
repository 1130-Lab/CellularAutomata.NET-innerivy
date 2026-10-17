import { useState } from 'react'
import type { Offset } from '../engine/types'
import { GROUP_COLORS } from '../palette'
import { offsetKey } from '../spec'

interface Props {
  dims: number
  /** Offset key -> group index. Totalistic rules use a single group (0). */
  assignments: Map<string, number>
  maxOffset: number
  /** Group painted on click; clicking a cell already in this group removes it. */
  activeGroup: number
  onChange: (assignments: Map<string, number>) => void
}

export function NeighborhoodEditor({ dims, assignments, maxOffset, activeGroup, onChange }: Props) {
  const used = Math.max(1, ...[...assignments.keys()].flatMap((k) => k.split(',').map((v) => Math.abs(Number(v)))))
  const [extra, setExtra] = useState(0)
  const radius = Math.min(maxOffset, Math.max(used, 1 + extra))
  const span = Array.from({ length: 2 * radius + 1 }, (_, i) => i - radius)
  const layers = dims === 3 ? span : [null]

  const toggle = (o: Offset) => {
    const next = new Map(assignments)
    const key = offsetKey(o)
    if (next.get(key) === activeGroup) next.delete(key)
    else next.set(key, activeGroup)
    onChange(next)
  }

  return (
    <div className="nbhd">
      <div className="nbhd-layers">
        {layers.map((z) => (
          <div key={z ?? 'xy'} className="nbhd-layer">
            {z !== null && <div className="nbhd-label">z {z > 0 ? `+${z}` : z}</div>}
            <div className="nbhd-grid" style={{ gridTemplateColumns: `repeat(${span.length}, 1fr)` }}>
              {span.map((y) =>
                span.map((x) => {
                  const o = z === null ? [x, y] : [x, y, z]
                  const group = assignments.get(offsetKey(o))
                  const origin = o.every((v) => v === 0)
                  return (
                    <button
                      key={offsetKey(o)}
                      className={`nbhd-cell ${origin ? 'origin' : ''}`}
                      style={group !== undefined ? { background: GROUP_COLORS[group % GROUP_COLORS.length] } : undefined}
                      title={`(${o.join(', ')})${origin ? ' — the cell itself' : ''}`}
                      onClick={() => toggle(o)}
                    />
                  )
                }),
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="nbhd-footer">
        <span>
          {assignments.size} cell{assignments.size === 1 ? '' : 's'} · radius {radius} · x→ y↓ (y−1 is “above”)
        </span>
        <span>
          <button disabled={radius >= maxOffset} onClick={() => setExtra(radius)} title="Show a larger area">
            +
          </button>
          <button disabled={radius <= used} onClick={() => setExtra(Math.max(0, radius - 2))} title="Show a smaller area">
            −
          </button>
        </span>
      </div>
    </div>
  )
}
