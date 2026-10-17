import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { expect, test } from '@playwright/test'
import type { EngineClient } from '../src/engine/client'

// Runs the same cases natively (ParityRunner, x64 .NET) and in the browser (.NET WebAssembly,
// in the app's worker) and compares SHA-256 hashes of the state at each checkpoint.

const casesPath = fileURLToPath(new URL('./parity-cases.json', import.meta.url))
const runnerProject = fileURLToPath(
  new URL('../../CellularAutomata.NET.WebHost.ParityRunner/CellularAutomata.NET.WebHost.ParityRunner.csproj', import.meta.url),
)

interface Case {
  name: string
  preset?: string
  spec?: unknown
  checkpoints: number[]
}

test('native and WebAssembly results match for the same seed', async ({ page }) => {
  const cases: Case[] = JSON.parse(readFileSync(casesPath, 'utf8'))
  const native: { vectorCount: number; cases: Record<string, string[]> } = JSON.parse(
    execFileSync('dotnet', ['run', '--project', runnerProject, '-c', 'Release', '--', casesPath], { encoding: 'utf8' }),
  )

  await page.goto('/')
  await expect(page.getByTestId('app-ready')).toBeVisible({ timeout: 60_000 })

  const wasm = await page.evaluate(async (cases: Case[]) => {
    const { client } = (window as unknown as { __ca: { client: EngineClient } }).__ca
    const { info, presets } = await client.init()
    const hex = async (bytes: Uint8Array) =>
      [...new Uint8Array(await crypto.subtle.digest('SHA-256', bytes as BufferSource))].map((b) => b.toString(16).padStart(2, '0')).join('')
    const out: Record<string, string[]> = {}
    for (const c of cases) {
      const spec = c.preset ? presets.find((p) => p.id === c.preset)!.spec : c.spec
      const { created, frame } = await client.create(spec as never)
      if (!created.ok) throw new Error(`${c.name}: ${JSON.stringify(created.errors)}`)
      let state = frame!.state
      let generation = 0
      out[c.name] = []
      for (const checkpoint of c.checkpoints) {
        if (checkpoint > generation) {
          state = (await client.step(checkpoint - generation)).state
          generation = checkpoint
        }
        out[c.name].push(await hex(state))
      }
    }
    return { vectorCount: info.vectorCount, cases: out }
  }, cases)

  console.log(`native Vector<int>.Count = ${native.vectorCount}, wasm Vector<int>.Count = ${wasm.vectorCount}`)
  expect(Object.keys(wasm.cases)).toEqual(cases.map((c) => c.name))
  for (const c of cases) {
    expect(wasm.cases[c.name], c.name).toEqual(native.cases[c.name])
    // Sanity: the run actually changed something after the first checkpoint.
    expect(new Set(native.cases[c.name]).size, `${c.name} should evolve`).toBeGreaterThan(1)
  }
})
