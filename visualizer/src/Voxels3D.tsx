import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default function Voxels3D({
  state,
  size,
}: {
  state: Uint8Array;
  size: number[];
}) {
  const host = useRef<HTMLDivElement>(null),
    sceneRef = useRef<
      { mesh: THREE.InstancedMesh; reset: () => void } | undefined
    >(undefined);
  const [error, setError] = useState("");
  useEffect(() => {
    const container = host.current!;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch (e) {
      setError(
        `WebGL2 unavailable: ${String(e)}. Switch to a 2D preset to continue.`,
      );
      return;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(0x121c17);
    renderer.domElement.setAttribute("aria-label", "3D cellular automaton");
    container.appendChild(renderer.domElement);
    const scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    const extent = Math.max(...size);
    controls.minDistance = 2;
    controls.maxDistance = extent * 7;
    const reset = () => {
      camera.position.set(extent * 1.3, extent, extent * 1.5);
      controls.target.set(0, 0, 0);
      controls.update();
    };
    reset();
    scene.add(new THREE.AmbientLight(0xffffff, 1.5));
    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(20, 50, 30);
    scene.add(light);
    const geometry = new THREE.BoxGeometry(0.86, 0.86, 0.86),
      material = new THREE.MeshStandardMaterial({
        color: 0xb8e184,
        roughness: 0.8,
      });
    const mesh = new THREE.InstancedMesh(
      geometry,
      material,
      size.reduce((a, b) => a * b, 1),
    );
    mesh.count = 0;
    mesh.frustumCulled = false;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(mesh);
    const boxGeometry = new THREE.BoxGeometry(
      ...(size as [number, number, number]),
    );
    const edges = new THREE.EdgesGeometry(boxGeometry),
      lineMaterial = new THREE.LineBasicMaterial({ color: 0x536a47 });
    scene.add(new THREE.LineSegments(edges, lineMaterial));
    const grid = new THREE.GridHelper(
      extent,
      Math.min(extent, 32),
      0x485c3d,
      0x2d3e2b,
    );
    grid.position.y = -size[1] / 2 - 0.5;
    scene.add(grid);
    sceneRef.current = { mesh, reset };
    const resize = new ResizeObserver(() => {
      const w = container.clientWidth,
        h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
    });
    resize.observe(container);
    renderer.setAnimationLoop(() => {
      controls.update();
      renderer.render(scene, camera);
    });
    return () => {
      sceneRef.current = undefined;
      resize.disconnect();
      renderer.setAnimationLoop(null);
      controls.dispose();
      geometry.dispose();
      material.dispose();
      mesh.dispose();
      boxGeometry.dispose();
      edges.dispose();
      lineMaterial.dispose();
      grid.geometry.dispose();
      (grid.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, [size]);
  useEffect(() => {
    const mesh = sceneRef.current?.mesh;
    if (!mesh) return;
    const matrix = new THREE.Matrix4();
    let count = 0;
    const [w, h, d] = size;
    for (let i = 0; i < state.length; i++)
      if (state[i]) {
        const x = i % w,
          y = Math.floor(i / w) % h,
          z = Math.floor(i / (w * h));
        matrix.makeTranslation(
          x - (w - 1) / 2,
          (h - 1) / 2 - y,
          z - (d - 1) / 2,
        );
        mesh.setMatrixAt(count++, matrix);
      }
    mesh.count = count;
    mesh.instanceMatrix.needsUpdate = true;
    host.current!.dataset.instances = String(count);
  }, [state, size]);
  return (
    <div className="voxel-viewport">
      <div className="three-host" ref={host} />
      {error && (
        <div className="error" role="alert">
          {error}
        </div>
      )}
      <button className="view-reset" onClick={() => sceneRef.current?.reset()}>
        Fit view ↗
      </button>
    </div>
  );
}
