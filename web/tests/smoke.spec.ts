import { expect, test, type Page } from '@playwright/test'

async function boot(page: Page) {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  await page.goto('/')
  await expect(page.getByTestId('app-ready')).toBeVisible({ timeout: 60_000 })
  return errors
}

const generation = async (page: Page) => Number(await page.getByTestId('generation').textContent())
const population = async (page: Page) => Number((await page.getByTestId('population').textContent())!.replace(/[^\d]/g, ''))

async function choosePreset(page: Page, id: string) {
  await page.getByTestId('preset').selectOption(id)
  await expect(page.getByTestId('generation')).toHaveText('0')
}

/** Counts pixels that differ from the background in a canvas (2D or WebGL with preserveDrawingBuffer). */
async function litPixels(page: Page, selector: string) {
  return page.locator(selector).evaluate((canvas: HTMLCanvasElement) => {
    const copy = document.createElement('canvas')
    copy.width = canvas.width
    copy.height = canvas.height
    const ctx = copy.getContext('2d')!
    ctx.drawImage(canvas, 0, 0)
    const data = ctx.getImageData(0, 0, copy.width, copy.height).data
    let lit = 0
    for (let i = 0; i < data.length; i += 4) if (data[i] + data[i + 1] + data[i + 2] > 120) lit++
    return lit
  })
}

test('boots the .NET runtime and reports Vector<int>.Count >= 3', async ({ page }) => {
  const errors = await boot(page)
  const header = await page.locator('aside header').textContent()
  const count = Number(/Count = (\d+)/.exec(header ?? '')?.[1])
  expect(count).toBeGreaterThanOrEqual(3)
  expect(errors).toEqual([])
})

test('2D: step, play, pause, reset', async ({ page }) => {
  await boot(page)
  await choosePreset(page, 'conway-2d')
  const initialPopulation = await population(page)
  expect(initialPopulation).toBeGreaterThan(1000)
  expect(await litPixels(page, '[data-testid=viewer-2d] canvas')).toBe(initialPopulation)

  await page.getByTestId('step').click()
  await expect(page.getByTestId('generation')).toHaveText('1')

  await page.getByTestId('play').click()
  await expect.poll(() => generation(page)).toBeGreaterThan(10)
  await page.getByTestId('play').click()
  const paused = await generation(page)
  await page.waitForTimeout(500)
  expect(await generation(page)).toBe(paused)

  await page.getByTestId('reset').click()
  await expect(page.getByTestId('generation')).toHaveText('0')
  expect(await population(page)).toBe(initialPopulation)
})

test('2D: edit the rule from the UI and apply it', async ({ page }) => {
  await boot(page)
  await choosePreset(page, 'conway-2d')
  await page.getByTestId('rulestring').fill('B36/S23')
  await page.getByTestId('rulestring').press('Enter')
  await expect(page.getByTestId('apply')).toHaveText('Apply changes')
  await page.getByTestId('apply').click()
  await expect(page.getByTestId('apply')).toHaveText('Rebuild')
  await page.getByTestId('step-n').click()
  await expect(page.getByTestId('generation')).toHaveText('10')
})

test('2D: draw cells on an empty grid', async ({ page }) => {
  await boot(page)
  await choosePreset(page, 'conway-2d')
  await page.getByTestId('seed-kind').selectOption('empty')
  await page.getByTestId('apply').click()
  await expect(page.getByTestId('population')).toHaveText('0')
  await page.getByTestId('draw').click()
  const box = (await page.getByTestId('viewer-2d').boundingBox())!
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2)
  await expect(page.getByTestId('population')).toHaveText('1')
})

test('2D: odd Wolfram rule number switches to evaluating every cell', async ({ page }) => {
  await boot(page)
  await choosePreset(page, 'wolfram-30-2d')
  await page.getByTestId('rule-number').fill('73')
  await page.getByTestId('apply').click()
  await expect(page.getByTestId('status')).toContainText('all cells evaluated')
  await page.getByTestId('step-n').click()
  await expect(page.getByTestId('generation')).toHaveText('10')
  expect(await population(page)).toBeGreaterThan(500)
})

test('validates inputs', async ({ page }) => {
  await boot(page)
  await choosePreset(page, 'conway-2d')

  await page.getByTestId('size-0').fill('0')
  await expect(page.getByText('Whole number from 1 to 1024')).toBeVisible()

  await page.getByTestId('rulestring').fill('B3/X23')
  await page.getByTestId('rulestring').press('Enter')
  await expect(page.getByText('Expected e.g. B3/S23')).toBeVisible()

  // Too many cells: reported by the host's validator and blocks Apply.
  await page.getByTestId('dims-3').click()
  for (const [i, v] of ['128', '128', '64'].entries()) await page.getByTestId(`size-${i}`).fill(v)
  await expect(page.getByTestId('errors')).toContainText('exceeds the limit')
  await expect(page.getByTestId('apply')).toBeDisabled()
})

test('3D: renders voxels and steps', async ({ page }) => {
  const errors = await boot(page)
  await choosePreset(page, 'conway-3d')
  const canvas = page.getByTestId('viewer-3d-canvas')
  await expect(canvas).toBeVisible()
  const voxels = Number((await page.getByTestId('voxels').textContent())!.replace(/[^\d]/g, ''))
  expect(voxels).toBe(await population(page))
  expect(voxels).toBeGreaterThan(100)

  await page.getByTestId('step').click()
  await expect(page.getByTestId('generation')).toHaveText('1')
  await expect.poll(() => litPixels(page, '[data-testid=viewer-3d-canvas]')).toBeGreaterThan(1000)

  // Orbit with the mouse without errors.
  const box = (await canvas.boundingBox())!
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
  await page.mouse.down()
  await page.mouse.move(box.x + box.width / 2 + 150, box.y + box.height / 2 + 40, { steps: 5 })
  await page.mouse.up()
  await page.mouse.wheel(0, -300)
  expect(errors).toEqual([])
})
