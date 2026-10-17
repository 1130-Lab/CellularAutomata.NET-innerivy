import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { gradient, statePalette, type RGB } from '../palette'

interface Props {
  state: Uint8Array | null
  size: number[]
  states: number
}

type ColorMode = 'state' | 'height' | 'position'

/** sRGB 0-255 -> linear floats, which is what three.js expects in instanceColor. */
function toLinear([r, g, b]: RGB): [number, number, number] {
  const c = new THREE.Color().setRGB(r / 255, g / 255, b / 255, THREE.SRGBColorSpace)
  return [c.r, c.g, c.b]
}

interface Scene {
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  controls: OrbitControls
  mesh?: THREE.InstancedMesh
  bounds?: THREE.LineSegments
}

export default function Viewer3D({ state, size, states }: Props) {
  const [sx, sy, sz] = size
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<Scene | null>(null)
  const defaultColorMode: ColorMode = states > 2 ? 'state' : 'height'
  const [colorMode, setColorMode] = useState<ColorMode>(defaultColorMode)
  const [colorFor, setColorFor] = useState(states)
  if (colorFor !== states) {
    // Multi-state rules read best by state, 2-state ones by height.
    setColorFor(states)
    setColorMode(defaultColorMode)
  }
  const [autoRotate, setAutoRotate] = useState(false)
  const [showBounds, setShowBounds] = useState(true)
  const [cut, setCut] = useState<[number, number][]>(() => size.map((s) => [0, s - 1]))
  const [visible, setVisible] = useState(0)
  const [webglError, setWebglError] = useState('')

  // Renderer, camera and controls live for the component's lifetime.
  useEffect(() => {
    const el = containerRef.current!
    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true })
    } catch (e) {
      setWebglError((e as Error).message)
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x07090d)
    el.appendChild(renderer.domElement)
    renderer.domElement.dataset.testid = 'viewer-3d-canvas'

    const scene = new THREE.Scene()
    scene.add(new THREE.HemisphereLight(0xdde6ff, 0x202030, 1.6))
    const key = new THREE.DirectionalLight(0xffffff, 2.2)
    key.position.set(1, 1.6, 1.2)
    scene.add(key)
    const fill = new THREE.DirectionalLight(0xffffff, 0.6)
    fill.position.set(-1.2, -0.4, -1)
    scene.add(fill)

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 5000)
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    sceneRef.current = { renderer, scene, camera, controls }

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = el
      renderer.setSize(w, h)
      camera.aspect = w / Math.max(1, h)
      camera.updateProjectionMatrix()
    }
    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(el)

    let frame = 0
    const loop = () => {
      controls.update()
      renderer.render(scene, camera)
      frame = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      controls.dispose()
      const s = sceneRef.current
      s?.mesh?.geometry.dispose()
      ;(s?.mesh?.material as THREE.Material | undefined)?.dispose()
      s?.mesh?.dispose()
      s?.bounds?.geometry.dispose()
      renderer.dispose()
      renderer.domElement.remove()
      sceneRef.current = null
    }
  }, [])

  const resetCamera = useCallback(() => {
    const s = sceneRef.current
    if (!s) return
    const d = Math.max(sx, sy, sz)
    s.camera.position.set(d * 1.15, d * 0.75, d * 1.35)
    s.controls.target.set(0, 0, 0)
    s.controls.update()
  }, [sx, sy, sz])

  // One InstancedMesh with room for every cell; only live cells are written each frame.
  useEffect(() => {
    const s = sceneRef.current
    if (!s) return
    if (s.mesh) {
      s.scene.remove(s.mesh)
      s.mesh.geometry.dispose()
      ;(s.mesh.material as THREE.Material).dispose()
      s.mesh.dispose()
    }
    if (s.bounds) {
      s.scene.remove(s.bounds)
      s.bounds.geometry.dispose()
    }
    const capacity = sx * sy * sz
    const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), new THREE.MeshLambertMaterial(), capacity)
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
    mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(capacity * 3), 3)
    mesh.instanceColor.setUsage(THREE.DynamicDrawUsage)
    mesh.frustumCulled = false
    mesh.count = 0
    s.scene.add(mesh)
    s.mesh = mesh

    const bounds = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(sx, sy, sz)),
      new THREE.LineBasicMaterial({ color: 0x3a4252 }),
    )
    s.scene.add(bounds)
    s.bounds = bounds
    setCut([sx, sy, sz].map((n) => [0, n - 1]))
    resetCamera()
  }, [sx, sy, sz, resetCamera])

  useEffect(() => {
    if (sceneRef.current?.bounds) sceneRef.current.bounds.visible = showBounds
  }, [showBounds])

  useEffect(() => {
    if (sceneRef.current) sceneRef.current.controls.autoRotate = autoRotate
  }, [autoRotate])

  const stateColors = useMemo(() => statePalette(states).map(toLinear), [states])
  const heightColors = useMemo(() => Array.from({ length: sy }, (_, y) => toLinear(gradient(y / Math.max(1, sy - 1)))), [sy])

  useEffect(() => {
    const mesh = sceneRef.current?.mesh
    if (!mesh || !state || state.length !== sx * sy * sz || cut.length !== 3) return
    const matrices = mesh.instanceMatrix.array as Float32Array
    const colors = mesh.instanceColor!.array as Float32Array
    const [[x0, x1], [y0, y1], [z0, z1]] = cut
    // Grid y grows downward (row 0 is "first"), so flip it: row 0 at the top.
    const ox = -sx / 2 + 0.5
    const oy = sy / 2 - 0.5
    const oz = -sz / 2 + 0.5
    let n = 0
    let i = 0
    for (let z = 0; z < sz; z++) {
      for (let y = 0; y < sy; y++) {
        for (let x = 0; x < sx; x++, i++) {
          const s = state[i]
          if (s === 0 || x < x0 || x > x1 || y < y0 || y > y1 || z < z0 || z > z1) continue
          const m = n * 16
          // Identity rotation/scale + translation.
          matrices[m] = 1; matrices[m + 1] = 0; matrices[m + 2] = 0; matrices[m + 3] = 0
          matrices[m + 4] = 0; matrices[m + 5] = 1; matrices[m + 6] = 0; matrices[m + 7] = 0
          matrices[m + 8] = 0; matrices[m + 9] = 0; matrices[m + 10] = 1; matrices[m + 11] = 0
          matrices[m + 12] = x + ox; matrices[m + 13] = oy - y; matrices[m + 14] = z + oz; matrices[m + 15] = 1
          const c =
            colorMode === 'state' || s > 1
              ? stateColors[s] ?? stateColors[1]
              : colorMode === 'height'
                ? heightColors[y]
                : [0.15 + 0.85 * (x / sx), 0.15 + 0.85 * (1 - y / sy), 0.15 + 0.85 * (z / sz)]
          colors[n * 3] = c[0]
          colors[n * 3 + 1] = c[1]
          colors[n * 3 + 2] = c[2]
          n++
        }
      }
    }
    mesh.count = n
    mesh.instanceMatrix.needsUpdate = true
    mesh.instanceColor!.needsUpdate = true
    setVisible(n)
  }, [state, sx, sy, sz, cut, colorMode, stateColors, heightColors])

  const axes = ['X', 'Y', 'Z']
  return (
    <div className="viewer viewer3d" ref={containerRef} data-testid="viewer-3d">
      {webglError && <div className="error">WebGL is not available: {webglError}</div>}
      <div className="viewer-overlay panel3d" onPointerDown={(e) => e.stopPropagation()}>
        <div className="row">
          <label>
            Color
            <select value={colorMode} onChange={(e) => setColorMode(e.target.value as ColorMode)}>
              <option value="state">by state</option>
              <option value="height">by row (Y)</option>
              <option value="position">by position</option>
            </select>
          </label>
          <button onClick={resetCamera}>Reset view</button>
        </div>
        <div className="row">
          <label>
            <input type="checkbox" checked={autoRotate} onChange={(e) => setAutoRotate(e.target.checked)} /> rotate
          </label>
          <label>
            <input type="checkbox" checked={showBounds} onChange={(e) => setShowBounds(e.target.checked)} /> bounds
          </label>
          <span data-testid="voxels">{visible.toLocaleString()} voxels</span>
        </div>
        <details>
          <summary>Cutaway</summary>
          {cut.map(([lo, hi], d) => (
            <div className="cut" key={d}>
              <span>{axes[d]}</span>
              <input
                type="range"
                min={0}
                max={size[d] - 1}
                value={lo}
                onChange={(e) => setCut(cut.map((r, i) => (i === d ? [Math.min(Number(e.target.value), r[1]), r[1]] : r)))}
              />
              <input
                type="range"
                min={0}
                max={size[d] - 1}
                value={hi}
                onChange={(e) => setCut(cut.map((r, i) => (i === d ? [r[0], Math.max(Number(e.target.value), r[0])] : r)))}
              />
              <span className="muted">
                {lo}–{hi}
              </span>
            </div>
          ))}
        </details>
      </div>
      <div className="viewer-hint">Left-drag orbit · right-drag pan · wheel zoom · row 0 (Y) is at the top</div>
    </div>
  )
}
