import { useEffect, useRef, useState } from "react";
export function Canvas2D({
  state,
  size,
}: {
  state: Uint8Array;
  size: number[];
}) {
  const ref = useRef<HTMLCanvasElement>(null),
    drag = useRef<number[] | null>(null);
  const [view, setView] = useState({ zoom: 1, x: 0, y: 0 });
  useEffect(() => {
    const canvas = ref.current!;
    canvas.width = size[0];
    canvas.height = size[1];
    const ctx = canvas.getContext("2d")!;
    const image = ctx.createImageData(size[0], size[1]);
    for (let i = 0; i < state.length; i++) {
      const j = i * 4,
        alive = state[i] !== 0;
      image.data[j] = alive ? 184 : 18;
      image.data[j + 1] = alive ? 225 : 28;
      image.data[j + 2] = alive ? 132 : 23;
      image.data[j + 3] = 255;
    }
    ctx.putImageData(image, 0, 0);
  }, [state, size]);
  return (
    <div
      className="canvas-viewport"
      onWheel={(e) =>
        setView((v) => ({
          ...v,
          zoom: Math.max(
            0.5,
            Math.min(16, v.zoom * (e.deltaY > 0 ? 0.9 : 1.1)),
          ),
        }))
      }
      onPointerDown={(e) => {
        drag.current = [e.clientX, e.clientY];
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (drag.current) {
          const [x, y] = drag.current;
          setView((v) => ({
            ...v,
            x: v.x + e.clientX - x,
            y: v.y + e.clientY - y,
          }));
          drag.current = [e.clientX, e.clientY];
        }
      }}
      onPointerUp={() => (drag.current = null)}
      onPointerCancel={() => (drag.current = null)}
    >
      <canvas
        aria-label="2D cellular automaton"
        ref={ref}
        style={{
          transform: `translate(${view.x}px,${view.y}px) scale(${view.zoom})`,
        }}
      />
      <button
        className="view-reset"
        onClick={() => setView({ zoom: 1, x: 0, y: 0 })}
      >
        Fit view ↗
      </button>
    </div>
  );
}
