import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { packedPalette } from '../palette'

interface Props {
  state: Uint8Array | null
  size: number[]
  states: number
  /** When set, left-drag paints cells with this state instead of panning. */
  drawState: number | null
  onDraw: (indices: number[], state: number) => void
}

interface View {
  zoom: number
  x: number
  y: number
}

export function Viewer2D({ state, size, states, drawState, onDraw }: Props) {
  const [width, height] = size
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<ImageData | null>(null)
  const [view, setView] = useState<View>({ zoom: 1, x: 0, y: 0 })
  const [hover, setHover] = useState<string>('')
  const drag = useRef<{ mode: 'pan' | 'draw'; lastX: number; lastY: number; painted: Set<number> } | null>(null)
  const palette = useMemo(() => packedPalette(states), [states])

  const fit = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    const { clientWidth: cw, clientHeight: ch } = el
    const zoom = Math.max(0.05, Math.min(cw / width, ch / height) * 0.95)
    setView({ zoom, x: (cw - width * zoom) / 2, y: (ch - height * zoom) / 2 })
  }, [width, height])

  useLayoutEffect(() => {
    imageRef.current = new ImageData(width, height)
    fit()
  }, [width, height, fit])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver(() => fit())
    observer.observe(el)
    return () => observer.disconnect()
  }, [fit])

  useEffect(() => {
    const canvas = canvasRef.current
    const image = imageRef.current
    if (!canvas || !image || !state || state.length !== width * height) return
    const pixels = new Uint32Array(image.data.buffer)
    for (let i = 0; i < state.length; i++) pixels[i] = palette[state[i]]
    canvas.getContext('2d')!.putImageData(image, 0, 0)
  }, [state, width, height, palette])

  // Wheel zoom around the cursor (non-passive so we can preventDefault page scroll).
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const rect = el.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      setView((v) => {
        const zoom = Math.min(64, Math.max(0.05, v.zoom * Math.exp(-e.deltaY * 0.0015)))
        const k = zoom / v.zoom
        return { zoom, x: mx - (mx - v.x) * k, y: my - (my - v.y) * k }
      })
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const cellAt = (e: React.PointerEvent) => {
    const rect = containerRef.current!.getBoundingClientRect()
    const cx = Math.floor((e.clientX - rect.left - view.x) / view.zoom)
    const cy = Math.floor((e.clientY - rect.top - view.y) / view.zoom)
    return cx >= 0 && cy >= 0 && cx < width && cy < height ? { cx, cy, index: cx + cy * width } : null
  }

  const paint = (e: React.PointerEvent) => {
    const cell = cellAt(e)
    const image = imageRef.current
    if (!cell || !drag.current || drawState === null || !image) return
    if (drag.current.painted.has(cell.index)) return
    drag.current.painted.add(cell.index)
    // Immediate local feedback; the host's state replaces it once the edit is applied.
    new Uint32Array(image.data.buffer)[cell.index] = palette[drawState]
    canvasRef.current!.getContext('2d')!.putImageData(image, 0, 0, cell.cx, cell.cy, 1, 1)
  }

  const onPointerDown = (e: React.PointerEvent) => {
    ;(e.target as Element).setPointerCapture(e.pointerId)
    const mode = e.button === 0 && drawState !== null ? 'draw' : 'pan'
    drag.current = { mode, lastX: e.clientX, lastY: e.clientY, painted: new Set() }
    if (mode === 'draw') paint(e)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    const cell = cellAt(e)
    setHover(cell ? `x ${cell.cx}, y ${cell.cy}` : '')
    const d = drag.current
    if (!d) return
    if (d.mode === 'pan') {
      const dx = e.clientX - d.lastX
      const dy = e.clientY - d.lastY
      d.lastX = e.clientX
      d.lastY = e.clientY
      setView((v) => ({ ...v, x: v.x + dx, y: v.y + dy }))
    } else {
      paint(e)
    }
  }

  const onPointerUp = () => {
    const d = drag.current
    drag.current = null
    if (d?.mode === 'draw' && d.painted.size > 0 && drawState !== null) onDraw([...d.painted], drawState)
  }

  return (
    <div
      ref={containerRef}
      className={`viewer viewer2d ${drawState !== null ? 'drawing' : ''}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={() => setHover('')}
      onContextMenu={(e) => e.preventDefault()}
      data-testid="viewer-2d"
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${view.zoom})` }}
      />
      <div className="viewer-overlay">
        <button onClick={fit} onPointerDown={(e) => e.stopPropagation()} title="Fit grid to view">
          Fit
        </button>
        <span>{Math.round(view.zoom * 100)}%</span>
        {hover && <span>{hover}</span>}
      </div>
      <div className="viewer-hint">
        {drawState !== null ? 'Left-drag to draw · right-drag to pan' : 'Drag to pan'} · wheel to zoom
      </div>
    </div>
  )
}
