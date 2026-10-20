// Colors for cell states. State 0 is empty, 1 is alive, 2+ are decaying (Generations) or table outputs.

export const BACKGROUND = '#11141a'

/** Average colors of the ground textures used by the Conway3D and Wolfram3D examples. */
export const GROUND = ['#797b6b', '#777561', '#616950', '#656c53']

const ALIVE: [number, number, number] = [0x7d, 0xd3, 0xfc]
const DYING_FROM: [number, number, number] = [0xf5, 0x9e, 0x0b]
const DYING_TO: [number, number, number] = [0x7c, 0x2d, 0x12]

/** RGB for a non-zero state, given how many states the rule has. */
export function stateColor(state: number, states: number): [number, number, number] {
  if (state <= 1) return ALIVE
  const t = states > 3 ? (state - 2) / (states - 3) : 0
  return DYING_FROM.map((c, i) => Math.round(c + (DYING_TO[i] - c) * t)) as [number, number, number]
}

/** Packed little-endian ABGR colors for ImageData, indexed by state. */
export function statePalette32(states: number): Uint32Array {
  const palette = new Uint32Array(256)
  const [br, bg, bb] = [0x11, 0x14, 0x1a]
  palette[0] = (255 << 24) | (bb << 16) | (bg << 8) | br
  for (let s = 1; s < 256; s++) {
    const [r, g, b] = stateColor(s, Math.max(states, s + 1))
    palette[s] = (255 << 24) | (b << 16) | (g << 8) | r
  }
  return palette
}
