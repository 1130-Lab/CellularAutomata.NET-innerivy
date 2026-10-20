import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { buildSpec, draftFromSpec, type Draft } from './draft'
import { loadHost, type CaHost } from './host'
import type { SimulationInfo, SimulationSpec } from './types'
import { SetupPanel } from './components/SetupPanel'
import { View2D } from './components/View2D'
import type { Palette3D } from './components/View3D'

// Three.js is only loaded once a 3D grid is shown.
const View3D = lazy(() => import('./components/View3D').then((m) => ({ default: m.View3D })))

const SPEEDS = [1, 2, 5, 10, 20, 30, 60, 120, 240]

export default function App() {
  const [host, setHost] = useState<CaHost>()
  const [loadError, setLoadError] = useState<string>()
  const [presetId, setPresetId] = useState('')
  const [draft, setDraft] = useState<Draft>()
  const [applied, setApplied] = useState<{ spec: SimulationSpec; draft: Draft }>()
  const [hostErrors, setHostErrors] = useState<string[]>([])
  const [info, setInfo] = useState<SimulationInfo>()
  const [states, setStates] = useState<Uint8Array>(new Uint8Array())
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(30)
  const [stepMs, setStepMs] = useState<number>()
  const [stable, setStable] = useState(false)
  const [drawMode, setDrawMode] = useState(false)
  const [palette, setPalette] = useState<Palette3D>('ground')
  const [clip, setClip] = useState<number[]>([])
  const [autoRotate, setAutoRotate] = useState(false)
  const [cameraReset, setCameraReset] = useState(0)

  const { errors } = useMemo(() => (draft ? buildSpec(draft, host?.info) : { errors: {} }), [draft, host])
  const dirty = !!draft && !!applied && JSON.stringify(draft) !== JSON.stringify(applied.draft)

  const refresh = useCallback((h: CaHost, steps: number) => {
    const t = performance.now()
    const next = h.step(steps)
    const elapsed = performance.now() - t
    if (steps > 0) setStepMs(elapsed / steps)
    const stats = h.stats()
    setStates(next)
    setInfo(stats)
    return stats
  }, [])

  const apply = useCallback(
    (h: CaHost, d: Draft) => {
      const { spec } = buildSpec(d, h.info)
      if (!spec) return
      const result = h.create(spec)
      if (!result.ok) {
        setHostErrors(result.errors)
        return
      }
      setHostErrors([])
      setApplied({ spec, draft: d })
      setPlaying(false)
      setStable(false)
      setStepMs(undefined)
      setClip(spec.size)
      refresh(h, 0)
    },
    [refresh],
  )

  const choosePreset = useCallback(
    (h: CaHost, id: string) => {
      const preset = h.presets.find((p) => p.id === id)
      if (!preset) return
      const d = draftFromSpec(preset.spec)
      setPresetId(id)
      setDraft(d)
      apply(h, d)
    },
    [apply],
  )

  useEffect(() => {
    loadHost().then(
      (h) => {
        setHost(h)
        choosePreset(h, h.presets[0].id)
      },
      (e: unknown) => setLoadError(String(e)),
    )
  }, [choosePreset])

  const step = useCallback(() => {
    if (!host || !applied) return
    const stats = refresh(host, 1)
    setStable(stats.changed === 0)
  }, [host, applied, refresh])

  const reset = useCallback(() => {
    if (!host || !applied) return
    host.reset()
    setStable(false)
    setStepMs(undefined)
    refresh(host, 0)
  }, [host, applied, refresh])

  // Play loop: one coarse Step(n) call per animation frame, with n chosen from the speed and frame time.
  const stepMsRef = useRef(1)
  useEffect(() => {
    if (stepMs !== undefined) stepMsRef.current = stepMs
  }, [stepMs])
  useEffect(() => {
    if (!playing || !host) return
    let frame = 0
    let last = performance.now()
    let due = 1
    const tick = (now: number) => {
      due += ((now - last) / 1000) * speed
      last = now
      // Keep each frame's work around 25 ms so the page stays responsive.
      const budget = Math.max(1, Math.floor(25 / Math.max(0.01, stepMsRef.current)))
      const n = Math.min(Math.floor(due), budget)
      if (n > 0) {
        due -= n
        if (due > budget) due = 0
        const stats = refresh(host, n)
        if (stats.changed === 0) {
          setStable(true)
          setPlaying(false)
          return
        }
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [playing, host, speed, refresh])

  const togglePlay = useCallback(() => {
    setStable(false)
    setPlaying((p) => !p)
  }, [])

  // Keyboard: Space play/pause, N or → step, R reset.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('input, textarea, select') || e.ctrlKey || e.metaKey || e.altKey) return
      if (e.key === ' ') {
        e.preventDefault()
        togglePlay()
      } else if (e.key === 'n' || e.key === 'ArrowRight') {
        setPlaying(false)
        step()
      } else if (e.key === 'r') {
        setPlaying(false)
        reset()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [togglePlay, step, reset])

  const paint = useCallback(
    (indices: number[], state: number) => {
      if (!host) return
      const result = host.setCells(indices, state)
      if (!result.ok) setHostErrors(result.errors)
      else refresh(host, 0)
      setStable(false)
    },
    [host, refresh],
  )

  if (loadError) {
    return (
      <div className="splash error">
        <h1>Couldn't start the .NET runtime</h1>
        <pre>{loadError}</pre>
        <p>Run <code>npm run build:dotnet</code> in web/ to produce public/_framework.</p>
      </div>
    )
  }
  if (!host || !draft) {
    return (
      <div className="splash" data-testid="loading">
        <div className="spinner" />
        Loading .NET WebAssembly runtime…
      </div>
    )
  }

  const size = applied?.spec.size ?? []
  const is3D = size.length === 3

  return (
    <div className="app" data-testid="app-ready">
      <aside>
        <header>
          <h1>Cellular Automata</h1>
          <span className="sub" title={`Vector<int>.Count = ${host.info.vectorCount} (max ${host.info.maxDimensions} dimensions)`}>
            CellularAutomata.NET on {host.info.runtime} WebAssembly
          </span>
        </header>
        <SetupPanel
          presets={host.presets}
          presetId={presetId}
          onPreset={(id) => choosePreset(host, id)}
          draft={draft}
          onChange={(d) => {
            setDraft(d)
            setPresetId('')
          }}
          errors={errors}
          hostErrors={hostErrors}
          dirty={dirty}
          onApply={() => apply(host, draft)}
        />
      </aside>
      <main>
        <div className="toolbar">
          <button className="primary" onClick={togglePlay} data-testid="play" title="Space">
            {playing ? 'Pause' : 'Play'}
          </button>
          <button onClick={() => (setPlaying(false), step())} data-testid="step" title="N or →">
            Step
          </button>
          <button onClick={() => (setPlaying(false), reset())} data-testid="reset" title="R">
            Reset
          </button>
          <label className="inline">
            Speed
            <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))} data-testid="speed">
              {SPEEDS.map((s) => (
                <option key={s} value={s}>
                  {s} gen/s
                </option>
              ))}
            </select>
          </label>
          <span className="divider" />
          {is3D ? (
            <>
              <label className="inline">
                Colors
                <select value={palette} onChange={(e) => setPalette(e.target.value as Palette3D)}>
                  <option value="ground">Ground (examples)</option>
                  <option value="height">Height</option>
                  <option value="state">State</option>
                </select>
              </label>
              <label className="inline check">
                <input type="checkbox" checked={autoRotate} onChange={(e) => setAutoRotate(e.target.checked)} />
                Rotate
              </label>
              <button onClick={() => setCameraReset((n) => n + 1)}>Reset view</button>
            </>
          ) : (
            <label className="inline check" title="Left-drag paints cells; right-drag pans">
              <input type="checkbox" checked={drawMode} onChange={(e) => setDrawMode(e.target.checked)} data-testid="draw-mode" />
              Draw cells
            </label>
          )}
        </div>
        {is3D && (
          <div className="toolbar clip">
            <span>Clip</span>
            {size.map((s, d) => (
              <label key={d} className="inline">
                {'xyz'[d]} &lt; {clip[d] ?? s}
                <input
                  type="range"
                  min={1}
                  max={s}
                  value={clip[d] ?? s}
                  onChange={(e) => setClip(size.map((v, i) => (i === d ? Number(e.target.value) : clip[i] ?? v)))}
                />
              </label>
            ))}
          </div>
        )}
        {is3D ? (
          <Suspense fallback={<div className="view" />}>
            <View3D size={size} states={states} stateCount={info?.states ?? 2} palette={palette} clip={clip} autoRotate={autoRotate} resetToken={cameraReset} />
          </Suspense>
        ) : size.length === 2 ? (
          <View2D width={size[0]} height={size[1]} states={states} stateCount={info?.states ?? 2} drawMode={drawMode} onPaint={paint} />
        ) : (
          <div className="view" />
        )}
        <footer className="stats" data-testid="stats">
          <span>
            Generation <b data-testid="generation">{info?.generation ?? 0}</b>
          </span>
          <span>
            Population <b data-testid="population">{info?.population.toLocaleString() ?? 0}</b>
          </span>
          <span title="Cells the rule was evaluated for in the last step (only changed cells and their neighbors are re-evaluated)">
            Evaluated <b>{info?.evaluated.toLocaleString() ?? 0}</b>
          </span>
          <span>
            Changed <b>{info?.changed.toLocaleString() ?? 0}</b>
          </span>
          <span>
            Neighbors <b>{info?.neighborCount ?? 0}</b>
          </span>
          <span>
            Step <b>{stepMs === undefined ? '–' : `${stepMs.toFixed(stepMs < 10 ? 2 : 0)} ms`}</b>
          </span>
          <span>
            Grid <b>{size.join(' × ')}</b>
          </span>
          {stable && <span className="badge">Stable: nothing changed</span>}
          {dirty && <span className="badge warn">Setup has unapplied changes</span>}
        </footer>
      </main>
    </div>
  )
}
