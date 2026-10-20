import { readFileSync } from 'node:fs'
import { expect, test } from '@playwright/test'

// Same cases as CellularAutomata.Web.Tests/CrossRuntimeTests.cs, which checks the native results.
const fixture: { name: string; steps: number; population: number; hash: string; spec: unknown }[] = JSON.parse(
  readFileSync(new URL('../../../CellularAutomata.Web.Tests/Fixtures/cross-runtime.json', import.meta.url), 'utf8'),
)

test('WebAssembly results match native results for the same seed', async ({ page }) => {
  await page.goto('./')
  await expect(page.getByTestId('app-ready')).toBeVisible()
  for (const c of fixture) {
    const result = await page.evaluate(({ spec, steps }) => {
      const host = (globalThis as any).caHost
      const info = host.create(spec)
      if (!info.ok) return { error: info.errors.join(' ') }
      host.step(steps)
      return { hash: host.hash(), population: host.stats().population }
    }, c)
    expect(result, c.name).toEqual({ hash: c.hash, population: c.population })
  }
})
