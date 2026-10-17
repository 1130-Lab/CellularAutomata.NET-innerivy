export type RGB = [number, number, number]

export const BACKGROUND: RGB = [14, 17, 23]
const ALIVE: RGB = [242, 193, 78]
const DYING_END: RGB = [70, 60, 140]

function mix(a: RGB, b: RGB, t: number): RGB {
  return [0, 1, 2].map((i) => Math.round(a[i] + (b[i] - a[i]) * t)) as RGB
}

/** Color for each state: 0 is background, 1 is "alive", 2.. fade out (Generations decay states). */
export function statePalette(states: number): RGB[] {
  const colors: RGB[] = [BACKGROUND, ALIVE]
  for (let s = 2; s < states; s++) {
    colors.push(mix([230, 90, 70], DYING_END, (s - 2) / Math.max(1, states - 3)))
  }
  return colors
}

/** Same palette packed as little-endian RGBA for writing into ImageData via a Uint32Array. */
export function packedPalette(states: number): Uint32Array {
  const out = new Uint32Array(256)
  statePalette(states).forEach(([r, g, b], i) => {
    out[i] = (255 << 24) | (b << 16) | (g << 8) | r
  })
  // Any out-of-range state shows as magenta so bugs are visible.
  for (let i = states; i < 256; i++) out[i] = (255 << 24) | (255 << 16) | 255
  return out
}

/** Smooth gradient used for 3D height / position coloring. t in [0, 1]. */
export function gradient(t: number): RGB {
  const stops: RGB[] = [
    [68, 1, 84],
    [59, 82, 139],
    [33, 145, 140],
    [94, 201, 98],
    [253, 231, 37],
  ]
  const x = Math.min(0.9999, Math.max(0, t)) * (stops.length - 1)
  const i = Math.floor(x)
  return mix(stops[i], stops[i + 1], x - i)
}

/** Colors for neighbor groups in the pattern-rule editor. */
export const GROUP_COLORS = ['#f2c14e', '#4ea8f2', '#e5627a', '#6fd08c', '#b07ef2', '#f28c4e', '#4ee0d6', '#c9c9c9']
