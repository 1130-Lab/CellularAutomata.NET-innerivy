import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { EngineClient } from './engine/client'
import type { EngineInfo, Frame, Preset, SimulationInfo, SimulationSpec, ValidationError } from './engine/types'
import { quickValidate } from './spec'
import { SetupPanel } from './components/SetupPanel'
import { NumberInput } from './components/RuleEditor'
import { Viewer2D } from './components/Viewer2D'
import { statePalette } from './palette'

const Viewer3D = lazy(() => import('./components/Viewer3D'))

const client = new EngineClient()
// Exposed for the Playwright tests (parity check drives the engine directly).
;(window as unknown as { __ca: unknown }).__ca = { client }

const clone = <T,>(v: T): T => structuredClone(v)

type Boot = { phase: 'loading' } | { phase: 'ready' } | { phase: 'error'; message: string }

export default function App() {
  const [boot, setBoot] = useState<Boot>({ phase: 'loading' })
  const [engine, setEngine] = useState<EngineInfo | null>(null)
  const [presets, setPresets] = useState<Preset[]>([])
  const [presetId, setPresetId] = useState('conway-2d')
  const [draft, setDraft] = useState<SimulationSpec | null>(null)
  const [active, setActive] = useState<SimulationSpec | null>(null)
  const [simInfo, setSimInfo] = useState<SimulationInfo | null>(null)
  const [frame, setFrame] = useState<Frame | null>(null)
  const [hostErrors, setHostErrors] = useState<ValidationError[]>([])
  const [runError, setRunError] = useState('')
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(30)
  const [stepsPerFrame, setStepsPerFrame] = useState(1)
  const [stepCount, setStepCount] = useState(10)
  const [drawState, setDrawState] = useState<number | null>(null)
  const busy = useRef(false)

  const apply = useCallback(async (spec: SimulationSpec) => {
    setPlaying(false)
    const { created, frame } = await client.create(spec)
    if (!created.ok) {
      setHostErrors(created.errors ?? [])
      return false
    }
    setHostErrors([])
    setRunError('')
    setActive(clone(spec))
    setSimInfo(created.info!)
    setFrame(frame!)
    setDrawState(null)
    return true
  }, [])

  useEffect(() => {
    client
      .init()
      .then(async ({ info, presets }) => {
        setEngine(info)
        setPresets(presets)
        const first = presets.find((p) => p.id === 'conway-2d') ?? presets[0]
        setPresetId(first.id)
        setDraft(clone(first.spec))
        await apply(first.spec)
        setBoot({ phase: 'ready' })
      })
      .catch((e: Error) => setBoot({ phase: 'error', message: e.message }))
  }, [apply])

  // Authoritative validation from the host, debounced while editing.
  useEffect(() => {
    if (!draft || boot.phase !== 'ready') return
    const handle = setTimeout(() => client.validate(draft).then(setHostErrors).catch(() => {}), 200)
    return () => clearTimeout(handle)
  }, [draft, boot.phase])

  const run = useCallback(async (call: () => Promise<Frame>) => {
    if (busy.current) return
    busy.current = true
    try {
      setFrame(await call())
    } catch (e) {
      setRunError((e as Error).message)
      setPlaying(false)
    } finally {
      busy.current = false
    }
  }, [])

  // Playback: request the next batch only after the previous one arrived.
  useEffect(() => {
    if (!playing) return
    let cancelled = false
    let timer = 0
    const tick = async () => {
      const started = performance.now()
      await run(() => client.step(stepsPerFrame))
      if (cancelled) return
      const interval = speed >= 60 ? 0 : 1000 / speed
      const wait = Math.max(0, interval - (performance.now() - started))
      timer = window.setTimeout(() => requestAnimationFrame(tick), wait)
    }
    tick()
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [playing, speed, stepsPerFrame, run])

  const step = (n: number) => run(() => client.step(n))
  const reset = () => {
    setPlaying(false)
    run(() => client.reset())
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).closest('input, select, textarea')) return
      if (e.code === 'Space') {
        e.preventDefault()
        setPlaying((p) => !p)
      } else if (e.key === 's' || e.key === 'ArrowRight') step(1)
      else if (e.key === 'r') reset()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (boot.phase === 'error')
    return (
      <div className="boot error" data-testid="boot-error">
        <h1>Failed to start the .NET engine</h1>
        <pre>{boot.message}</pre>
        <p>Make sure the site was built with ./build.sh so that _framework/ exists next to index.html.</p>
      </div>
    )
  if (boot.phase === 'loading' || !engine || !draft || !active || !simInfo)
    return <div className="boot" data-testid="booting">Starting .NET WebAssembly runtime…</div>

  const errors = [...quickValidate(draft, engine.limits), ...hostErrors]
  const dirty = JSON.stringify(draft) !== JSON.stringify(active)
  const dims = active.size.length
  const status = frame?.status
  const palette = statePalette(simInfo.states)

  return (
    <div className="app" data-testid="app-ready">
      <aside>
        <header>
          <h1>CellularAutomata.NET</h1>
          <div className="muted small" title={engine.runtime}>
            {engine.runtime} · Vector&lt;int&gt;.Count = {engine.vectorCount}
          </div>
        </header>
        <SetupPanel
          spec={draft}
          presets={presets}
          presetId={presetId}
          limits={engine.limits}
          errors={errors}
          dirty={dirty}
          onPreset={(id) => {
            const p = presets.find((x) => x.id === id)
            if (!p) return
            setPresetId(id)
            setDraft(clone(p.spec))
            apply(p.spec)
          }}
          onChange={(spec) => {
            setDraft(spec)
            setPresetId('custom')
          }}
          onApply={() => apply(draft)}
        />
      </aside>
      <main>
        <div className="toolbar">
          <button className="primary" onClick={() => setPlaying((p) => !p)} data-testid="play" title="Space">
            {playing ? '❚❚ Pause' : '▶ Play'}
          </button>
          <button onClick={() => step(1)} disabled={playing} data-testid="step" title="S or →">
            Step
          </button>
          <span className="group">
            <button onClick={() => step(stepCount)} disabled={playing} data-testid="step-n">
              Step ×
            </button>
            <NumberInput value={stepCount} min={1} max={engine.limits.maxStepsPerCall} onChange={setStepCount} />
          </span>
          <button onClick={reset} data-testid="reset" title="R">
            Reset
          </button>
          <label className="group" title="Target steps per second while playing">
            Speed
            <input type="range" min={1} max={60} value={speed} onChange={(e) => setSpeed(Number(e.target.value))} />
            <span className="muted">{speed >= 60 ? 'max' : `${speed}/s`}</span>
          </label>
          <label className="group" title="Generations computed per frame while playing">
            Gens/frame
            <NumberInput value={stepsPerFrame} min={1} max={100} onChange={setStepsPerFrame} />
          </label>
          {dims === 2 && (
            <span className="group">
              <button className={drawState !== null ? 'on' : ''} onClick={() => setDrawState((d) => (d === null ? 1 : null))} data-testid="draw">
                ✎ Draw
              </button>
              {drawState !== null &&
                palette.map((c, s) => (
                  <button
                    key={s}
                    className={`swatch ${drawState === s ? 'on' : ''}`}
                    style={{ background: `rgb(${c.join(',')})` }}
                    title={s === 0 ? 'Erase (state 0)' : `State ${s}`}
                    onClick={() => setDrawState(s)}
                  />
                ))}
            </span>
          )}
        </div>
        {runError && <div className="error banner">{runError}</div>}
        <div className="stage">
          {dims === 2 ? (
            <Viewer2D
              state={frame?.state ?? null}
              size={active.size}
              states={simInfo.states}
              drawState={drawState}
              onDraw={(indices, s) => run(() => client.setCells(indices, s))}
            />
          ) : (
            <Suspense fallback={<div className="viewer">Loading 3D viewer…</div>}>
              <Viewer3D state={frame?.state ?? null} size={active.size} states={simInfo.states} />
            </Suspense>
          )}
        </div>
        <footer className="status" data-testid="status">
          <span>
            Generation <b data-testid="generation">{status?.generation ?? 0}</b>
          </span>
          <span>
            Population <b data-testid="population">{status?.population.toLocaleString() ?? 0}</b>
          </span>
          <span title="Cells the library evaluates next step">Active {status?.activeCells.toLocaleString()}</span>
          <span>{status?.lastStepMs.toFixed(2)} ms/gen</span>
          <span className="muted">
            {active.size.join('×')} · {simInfo.neighborCount} neighbors · {simInfo.states} states ·{' '}
            {simInfo.updateMode === 'allCells' ? 'all cells evaluated' : 'active cells only'}
          </span>
        </footer>
      </main>
    </div>
  )
}
