import { expect, test, type Page } from '@playwright/test'

async function open(page: Page) {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(String(e)))
  await page.goto('./')
  await expect(page.getByTestId('app-ready')).toBeVisible()
  return errors
}

/** Number of distinct colors in a canvas (via a screenshot, so it works for 2D and WebGL). */
async function distinctColors(page: Page, testId: string) {
  const png = await page.getByTestId(testId).screenshot()
  return page.evaluate(async (bytes) => {
    const bitmap = await createImageBitmap(new Blob([new Uint8Array(bytes)], { type: 'image/png' }))
    const canvas = new OffscreenCanvas(bitmap.width, bitmap.height)
    const ctx = canvas.getContext('2d')!
    ctx.drawImage(bitmap, 0, 0)
    const data = ctx.getImageData(0, 0, bitmap.width, bitmap.height).data
    const colors = new Set<number>()
    for (let i = 0; i < data.length; i += 4 * 7) colors.add((data[i] << 16) | (data[i + 1] << 8) | data[i + 2])
    return colors.size
  }, [...png])
}

const generation = (page: Page) => page.getByTestId('generation').textContent().then(Number)

test('runtime supports at least 3 dimensions', async ({ page }) => {
  await open(page)
  const info = await page.evaluate(() => (globalThis as any).caHost.info)
  expect(info.vectorCount).toBeGreaterThanOrEqual(3)
})

test('2D: renders, steps, plays, pauses and resets', async ({ page }) => {
  const errors = await open(page)
  await expect(page.getByTestId('preset')).toHaveValue('conway-2d')
  await expect(page.getByTestId('generation')).toHaveText('0')
  expect(await distinctColors(page, 'canvas-2d')).toBeGreaterThan(1)

  await page.getByTestId('step').click()
  await expect(page.getByTestId('generation')).toHaveText('1')

  await page.getByTestId('play').click()
  await expect.poll(() => generation(page)).toBeGreaterThan(5)
  await page.getByTestId('play').click()
  const paused = await generation(page)
  await page.waitForTimeout(300)
  expect(await generation(page)).toBe(paused)

  await page.getByTestId('reset').click()
  await expect(page.getByTestId('generation')).toHaveText('0')
  expect(errors).toEqual([])
})

test('2D: Wolfram rule number can be changed', async ({ page }) => {
  await open(page)
  await page.getByTestId('preset').selectOption('wolfram-30-2d')
  await page.getByTestId('wolfram-number').fill('90')
  await expect(page.getByTestId('table')).toHaveValue('01011010')
  await page.getByTestId('apply').click()
  for (let i = 0; i < 4; i++) await page.getByTestId('step').click()
  // Rule 90 from one cell: rows have 1, 2, 2, 4, 2 live cells -> 11 after 4 steps.
  await expect(page.getByTestId('population')).toHaveText('11')
})

test('2D: invalid input is rejected', async ({ page }) => {
  await open(page)
  await page.getByTestId('size-0').fill('0')
  await expect(page.getByTestId('apply')).toBeDisabled()
  await page.getByTestId('size-0').fill('5000')
  await expect(page.getByTestId('apply')).toBeDisabled()
  await page.getByTestId('size-0').fill('64')
  await page.getByTestId('rule-string').fill('B3/S2x')
  await expect(page.getByTestId('apply')).toBeDisabled()
  await page.getByTestId('rule-string').fill('B3/S23')
  await expect(page.getByTestId('apply')).toBeEnabled()

  // The host validates independently of the form.
  const result = await page.evaluate(() =>
    (globalThis as any).caHost.create({ size: [8, 8], wrap: [], rule: { kind: 'lifelike', birth: [12], survive: [], states: 2, neighborhood: { type: 'moore' } }, seed: { type: 'empty' } }),
  )
  expect(result.ok).toBe(false)
  expect(result.errors.join(' ')).toContain('Birth count 12')
})

test('2D: cells can be drawn', async ({ page }) => {
  await open(page)
  await page.getByTestId('preset').selectOption('conway-2d-glider')
  await page.getByTestId('draw-mode').check()
  const box = (await page.getByTestId('canvas-2d').boundingBox())!
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2)
  await expect(page.getByTestId('population')).toHaveText('6')
})

test('3D: renders voxels and steps', async ({ page }) => {
  const errors = await open(page)
  await page.getByTestId('preset').selectOption('conway-3d')
  await expect(page.getByTestId('canvas-3d')).toBeVisible()
  await expect.poll(() => distinctColors(page, 'canvas-3d')).toBeGreaterThan(4)
  await page.getByTestId('step').click()
  await expect(page.getByTestId('generation')).toHaveText('1')

  await page.getByTestId('preset').selectOption('wolfram-30-3d')
  await page.getByTestId('play').click()
  await expect.poll(() => generation(page)).toBeGreaterThan(3)
  expect(errors).toEqual([])
})
