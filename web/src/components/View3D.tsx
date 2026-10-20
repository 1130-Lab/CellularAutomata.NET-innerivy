import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { BACKGROUND, GROUND, stateColor } from '../palette'

export type Palette3D = 'ground' | 'height' | 'state'

interface Props {
  size: number[]
  states: Uint8Array
  stateCount: number
  palette: Palette3D
  /** Only cells with coordinate < clip[d] on every axis are shown. */
  clip: number[]
  autoRotate: boolean
  /** Incremented to move the camera back to its default position. */
  resetToken: number
}

interface Scene {
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  controls: OrbitControls
  mesh: THREE.InstancedMesh
  bounds: THREE.LineSegments
}

const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9)
const groundColors = GROUND.map((c) => new THREE.Color(c))

function createMesh(capacity: number) {
  const mesh = new THREE.InstancedMesh(geometry, new THREE.MeshStandardMaterial({ roughness: 0.85, metalness: 0 }), capacity)
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
  mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(capacity * 3), 3)
  mesh.instanceColor.setUsage(THREE.DynamicDrawUsage)
  mesh.count = 0
  mesh.frustumCulled = false
  return mesh
}

/**
 * Voxel view: every live cell is an instance of one cube in an InstancedMesh. Cells hidden on all six
 * sides are skipped. Orbit with left-drag, pan with right-drag, zoom with the wheel.
 */
export function View3D({ size, states, stateCount, palette, clip, autoRotate, resetToken }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<Scene | null>(null)
  const [sx, sy, sz] = size

  useEffect(() => {
    const container = containerRef.current!
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.domElement.dataset.testid = 'canvas-3d'
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(BACKGROUND)
    scene.add(new THREE.HemisphereLight(0xdde6ff, 0x30281e, 1.6))
    const sun = new THREE.DirectionalLight(0xffffff, 1.8)
    sun.position.set(0.6, 1, 0.4)
    scene.add(sun)

    // Same field of view as the Silk.NET examples.
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 5000)
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    const mesh = createMesh(1024)
    scene.add(mesh)
    const bounds = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0x5b6475 }))
    scene.add(bounds)
    sceneRef.current = { renderer, scene, camera, controls, mesh, bounds }

    const resize = () => {
      const w = Math.max(1, container.clientWidth)
      const h = Math.max(1, container.clientHeight)
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    const observer = new ResizeObserver(resize)
    observer.observe(container)
    resize()

    renderer.setAnimationLoop(() => {
      controls.update()
      renderer.render(scene, camera)
    })

    return () => {
      renderer.setAnimationLoop(null)
      observer.disconnect()
      controls.dispose()
      const s = sceneRef.current!
      s.mesh.dispose()
      ;(s.mesh.material as THREE.Material).dispose()
      s.bounds.geometry.dispose()
      renderer.dispose()
      renderer.domElement.remove()
      sceneRef.current = null
    }
  }, [])

  // Bounding box and camera when the grid size changes or the view is reset.
  useEffect(() => {
    const s = sceneRef.current!
    s.bounds.geometry.dispose()
    s.bounds.geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(sx, sy, sz))
    const radius = Math.hypot(sx, sy, sz) / 2
    const distance = radius / Math.sin(THREE.MathUtils.degToRad(45 / 2))
    s.camera.position.copy(new THREE.Vector3(0.9, 0.6, 1).normalize().multiplyScalar(distance))
    s.camera.near = Math.max(0.05, distance / 1000)
    s.camera.far = distance * 10
    s.camera.updateProjectionMatrix()
    s.controls.target.set(0, 0, 0)
    s.controls.maxDistance = distance * 4
    s.controls.update()
  }, [sx, sy, sz, resetToken])

  useEffect(() => {
    sceneRef.current!.controls.autoRotate = autoRotate
  }, [autoRotate])

  // Rebuild instances from the states.
  useEffect(() => {
    const s = sceneRef.current!
    if (states.length !== sx * sy * sz) return
    const [cx, cy, cz] = clip
    const plane = sx * sy
    const shown = (x: number, y: number, z: number) =>
      x >= 0 && y >= 0 && z >= 0 && x < cx && y < cy && z < cz && states[x + y * sx + z * plane] !== 0

    let count = 0
    for (let i = 0; i < states.length; i++) if (states[i] !== 0) count++
    if (count > s.mesh.instanceMatrix.count) {
      s.scene.remove(s.mesh)
      s.mesh.dispose()
      s.mesh = createMesh(Math.max(count, s.mesh.instanceMatrix.count * 2))
      s.scene.add(s.mesh)
    }

    const matrices = s.mesh.instanceMatrix.array as Float32Array
    const colors = s.mesh.instanceColor!.array as Float32Array
    const color = new THREE.Color()
    const ox = -sx / 2 + 0.5
    const oy = -sy / 2 + 0.5
    const oz = -sz / 2 + 0.5
    let n = 0
    for (let z = 0; z < sz && z < cz; z++) {
      for (let y = 0; y < sy && y < cy; y++) {
        for (let x = 0; x < sx && x < cx; x++) {
          const i = x + y * sx + z * plane
          const state = states[i]
          if (state === 0) continue
          if (
            shown(x - 1, y, z) && shown(x + 1, y, z) &&
            shown(x, y - 1, z) && shown(x, y + 1, z) &&
            shown(x, y, z - 1) && shown(x, y, z + 1)
          ) {
            continue
          }
          const m = n * 16
          matrices.fill(0, m, m + 16)
          matrices[m] = matrices[m + 5] = matrices[m + 10] = matrices[m + 15] = 1
          matrices[m + 12] = x + ox
          matrices[m + 13] = y + oy
          matrices[m + 14] = z + oz
          if (palette === 'ground' && state === 1) {
            color.copy(groundColors[Math.imul(i, 2654435761) >>> 30])
          } else if (palette === 'height' && state === 1) {
            color.setHSL(0.62 - 0.55 * (y / Math.max(1, sy - 1)), 0.65, 0.55)
          } else {
            color.setRGB(...(stateColor(state, stateCount).map((c) => c / 255) as [number, number, number]), THREE.SRGBColorSpace)
          }
          color.toArray(colors, n * 3)
          n++
        }
      }
    }
    s.mesh.count = n
    s.mesh.instanceMatrix.needsUpdate = true
    s.mesh.instanceColor!.needsUpdate = true
  }, [states, sx, sy, sz, stateCount, palette, clip])

  return <div className="view" ref={containerRef} />
}
