import { test, expect } from "@playwright/test";
import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
const configs = [
  { size: [9, 7], kind: "totalistic", seed: 12345, density: 0.35, wrap: true },
  {
    size: [7, 6, 5],
    kind: "totalistic",
    neighborhood: "extruded",
    seed: 987,
    density: 0.2,
    wrap: true,
  },
  { size: [9, 7], kind: "wolfram", rule: 30, initial: "single", wrap: false },
  {
    size: [7, 6, 5],
    kind: "wolfram",
    rule: 110,
    seed: 42,
    density: 0.2,
    wrap: false,
  },
  {
    size: [7, 6, 5],
    kind: "totalistic",
    neighborhood: "custom",
    offsets: [
      [-1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    birth: [0, 2],
    survival: [1],
    seed: 12,
    wrap: true,
  },
];
for (const [index, config] of configs.entries())
  test(`native/WASM byte parity ${index + 1}`, async ({ page }) => {
    const dir = mkdtempSync(join(tmpdir(), "ca-parity-"));
    let expected: number[][];
    try {
      const file = join(dir, "config.json");
      writeFileSync(file, JSON.stringify(config));
      expected = JSON.parse(
        execFileSync(
          process.env.DOTNET ?? "dotnet",
          [
            resolve(
              "../Visualizer.Tests/bin/Release/net10.0/Visualizer.Tests.dll",
            ),
            "--fixture",
            file,
          ],
          { encoding: "utf8" },
        ),
      );
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
    await page.goto("/");
    await expect(page.getByRole("button", { name: "Step →" })).toBeEnabled({
      timeout: 60000,
    });
    const actual = await page.evaluate(async (config) => {
      // A separate real WASM instance, using only the public JSExport surface.
      const path = new URL("./wasm/_framework/dotnet.js", document.baseURI)
        .href;
      const { dotnet } = await import(path);
      const host = await dotnet.create();
      const { Exports: api } = await host.getAssemblyExports(
        host.getConfig().mainAssemblyName,
      );
      const metadata = JSON.parse(api.Configure(JSON.stringify(config)));
      const bytes = api.State();
      if (!(bytes instanceof Uint8Array))
        throw Error("State must be a Uint8Array");
      const frames = [Array.from(bytes)];
      for (let i = 0; i < 5; i++) frames.push(Array.from(api.Step()));
      const reset = Array.from(api.Reset());
      return { frames, reset, metadata };
    }, config);
    expect(actual.metadata.vectorWidth).toBeGreaterThanOrEqual(3);
    expect(actual.frames).toEqual(expected!);
    expect(actual.reset).toEqual(expected![0]);
  });
