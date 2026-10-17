import { defineConfig } from '@playwright/test'

// Runs against the built site in ../dist (run ../build.sh first).
// Uses the system Google Chrome by default; set PW_CHANNEL=bundled to use Playwright's
// own Chromium (install it with `npx playwright install chromium`).
const channel = process.env.PW_CHANNEL === 'bundled' ? undefined : (process.env.PW_CHANNEL ?? 'chrome')
const port = 4173

export default defineConfig({
  testDir: 'tests',
  timeout: 120_000,
  expect: { timeout: 30_000 },
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: `http://localhost:${port}/`,
    channel,
    viewport: { width: 1400, height: 900 },
    // Software WebGL so the 3D viewer works headless.
    launchOptions: { args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] },
  },
  webServer: {
    command: `node tests/static-server.mjs ../dist ${port}`,
    url: `http://localhost:${port}/`,
    reuseExistingServer: !process.env.CI,
  },
})
