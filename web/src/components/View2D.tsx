import { useCallback, useEffect, useRef, useState } from 'react'
import { BACKGROUND, statePalette32 } from '../palette'

interface Props {
  width: number
  height: number
  states: Uint8Array
  /** Number of states the rule uses, for coloring. */
  stateCount: number
  /** Left-drag paints cells instead of panning. */
  drawMode: boolean
  /** Called with flat cell indices to set to `state` while painting. */
  onPaint: (indices: number[], state: number) => void
}

interface ViewTransform {
  zoom: number
  x: number
  y: number
}

/**
 * Renders a 2D grid to a canvas through ImageData (one pixel per cell, scaled up without smoothing).
 * Wheel zooms around the cursor, drag pans; in draw mode left-drag paints cells.
 */
export function View2D({ width, height, states, stateCount, drawMode, onPaint }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLCanvasElement | null>(null)
  const view = useRef<ViewTransform>({ zoom: 1, x: 0, y: 0 })
  const drag = useRef<{ mode: 'pan' | 'paint'; lastX: number; lastY: number; state: number; painted: Set<number> } | null>(null)
  const [hover, setHover] = useState<{ x: number; y: number } | null>(null)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    const image = imageRef.current
    if (!canvas || !image) return
    const ctx = canvas.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.fillStyle = '#0b0d11'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    const { zoom, x, y } = view.current
    ctx.imageSmoothingEnabled = false
    ctx.drawImage(image, x, y, width * zoom, height * zoom)
    if (zoom >= 8) {
      ctx.strokeStyle = 'rgba(255,255,255,0.06)'
      ctx.lineWidth = 1
      ctx.beginPath()
      const x0 = Math.max(0, Math.floor(-x / zoom))
      const x1 = Math.min(width, Math.ceil((canvas.width / dpr - x) / zoom))
      const y0 = Math.max(0, Math.floor(-y / zoom))
      const y1 = Math.min(height, Math.ceil((canvas.height / dpr - y) / zoom))
      for (let i = x0; i <= x1; i++) {
        ctx.moveTo(Math.round(x + i * zoom) + 0.5, y + y0 * zoom)
        ctx.lineTo(Math.round(x + i * zoom) + 0.5, y + y1 * zoom)
      }
      for (let j = y0; j <= y1; j++) {
        ctx.moveTo(x + x0 * zoom, Math.round(y + j * zoom) + 0.5)
        ctx.lineTo(x + x1 * zoom, Math.round(y + j * zoom) + 0.5)
      }
      ctx.stroke()
    }
    ctx.strokeStyle = 'rgba(255,255,255,0.25)'
    ctx.strokeRect(x - 0.5, y - 0.5, width * zoom + 1, height * zoom + 1)
  }, [width, height])

  const fit = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    const cw = canvas.width / dpr
    const ch = canvas.height / dpr
    const zoom = Math.max(0.05, Math.min((cw - 24) / width, (ch - 24) / height))
    view.current = { zoom, x: (cw - width * zoom) / 2, y: (ch - height * zoom) / 2 }
    draw()
  }, [width, height, draw])

  // Keep the canvas sized to its container.
  useEffect(() => {
    const container = containerRef.current!
    const canvas = canvasRef.current!
    let first = true
    const observer = new ResizeObserver(() => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.max(1, Math.round(container.clientWidth * dpr))
      canvas.height = Math.max(1, Math.round(container.clientHeight * dpr))
      if (first) fit()
      else draw()
      first = false
    })
    observer.observe(container)
    return () => observer.disconnect()
  }, [fit, draw])

  useEffect(fit, [fit])

  // Upload the states into a width x height image.
  useEffect(() => {
    let image = imageRef.current
    if (!image || image.width !== width || image.height !== height) {
      image = document.createElement('canvas')
      image.width = width
      image.height = height
      imageRef.current = image
    }
    if (states.length !== width * height) return
    const ctx = image.getContext('2d')!
    const data = ctx.createImageData(width, height)
    const pixels = new Uint32Array(data.data.buffer)
    const palette = statePalette32(stateCount)
    for (let i = 0; i < states.length; i++) pixels[i] = palette[states[i]]
    ctx.putImageData(data, 0, 0)
    draw()
  }, [states, width, height, stateCount, draw])

  const cellAt = (clientX: number, clientY: number) => {
    const rect = canvasRef.current!.getBoundingClientRect()
    const { zoom, x, y } = view.current
    const cx = Math.floor((clientX - rect.left - x) / zoom)
    const cy = Math.floor((clientY - rect.top - y) / zoom)
    return cx >= 0 && cy >= 0 && cx < width && cy < height ? { x: cx, y: cy } : null
  }

  // Wheel needs a non-passive listener to prevent page scroll.
  useEffect(() => {
    const canvas = canvasRef.current!
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const rect = canvas.getBoundingClientRect()
      const px = e.clientX - rect.left
      const py = e.clientY - rect.top
      const v = view.current
      const factor = Math.exp(-e.deltaY * 0.0015)
      const zoom = Math.min(80, Math.max(0.05, v.zoom * factor))
      view.current = { zoom, x: px - ((px - v.x) * zoom) / v.zoom, y: py - ((py - v.y) * zoom) / v.zoom }
      draw()
    }
    canvas.addEventListener('wheel', onWheel, { passive: false })
    return () => canvas.removeEventListener('wheel', onWheel)
  }, [draw])

  const paintAt = (clientX: number, clientY: number) => {
    const d = drag.current
    const cell = cellAt(clientX, clientY)
    if (!d || !cell) return
    const index = cell.y * width + cell.x
    if (!d.painted.has(index)) {
      d.painted.add(index)
      onPaint([index], d.state)
    }
  }

  const onPointerDown = (e: React.PointerEvent) => {
    canvasRef.current!.setPointerCapture(e.pointerId)
    const paint = drawMode && e.button === 0
    const cell = cellAt(e.clientX, e.clientY)
    const state = cell && states[cell.y * width + cell.x] === 0 ? 1 : 0
    drag.current = { mode: paint ? 'paint' : 'pan', lastX: e.clientX, lastY: e.clientY, state, painted: new Set() }
    if (paint) paintAt(e.clientX, e.clientY)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    setHover(cellAt(e.clientX, e.clientY))
    const d = drag.current
    if (!d) return
    if (d.mode === 'pan') {
      view.current.x += e.clientX - d.lastX
      view.current.y += e.clientY - d.lastY
      draw()
    } else {
      paintAt(e.clientX, e.clientY)
    }
    d.lastX = e.clientX
    d.lastY = e.clientY
  }

  const zoomBy = (factor: number) => {
    const canvas = canvasRef.current!
    const dpr = window.devicePixelRatio || 1
    const px = canvas.width / dpr / 2
    const py = canvas.height / dpr / 2
    const v = view.current
    const zoom = Math.min(80, Math.max(0.05, v.zoom * factor))
    view.current = { zoom, x: px - ((px - v.x) * zoom) / v.zoom, y: py - ((py - v.y) * zoom) / v.zoom }
    draw()
  }

  return (
    <div className="view" ref={containerRef} style={{ background: BACKGROUND }}>
      <canvas
        ref={canvasRef}
        data-testid="canvas-2d"
        className={drawMode ? 'cursor-draw' : 'cursor-pan'}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={() => (drag.current = null)}
        onPointerCancel={() => (drag.current = null)}
        onPointerLeave={() => setHover(null)}
        onContextMenu={(e) => e.preventDefault()}
        onDoubleClick={() => !drawMode && fit()}
      />
      <div className="view-tools">
        <button onClick={() => zoomBy(1.25)} title="Zoom in">+</button>
        <button onClick={() => zoomBy(0.8)} title="Zoom out">−</button>
        <button onClick={fit} title="Fit grid to view">Fit</button>
      </div>
      <div className="view-hint">
        {hover ? `x ${hover.x}, y ${hover.y} · state ${states[hover.y * width + hover.x] ?? 0}` : 'Wheel: zoom · Drag: pan' + (drawMode ? ' (right button) · Left-drag: paint' : '')}
      </div>
    </div>
  )
}
