import { test, expect } from "@playwright/test";
test("2D runtime, step, play, pause and reset", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Step →" })).toBeEnabled({
    timeout: 60000,
  });
  await page.getByRole("button", { name: "Step →" }).click();
  await expect(page.getByTestId("generation")).toHaveText("1");
  const pixels = await page
    .locator("canvas")
    .evaluate((el: HTMLCanvasElement) =>
      Array.from(
        el.getContext("2d")!.getImageData(0, 0, el.width, el.height).data,
      ).filter((_, i) => i % 4 === 0),
    );
  expect(new Set(pixels).size).toBe(2);
  await page.getByRole("button", { name: "▶ Play" }).click();
  await expect(page.getByTestId("generation")).not.toHaveText("1");
  await page.getByRole("button", { name: "Ⅱ Pause" }).click();
  const generation = await page.getByTestId("generation").textContent();
  await page.waitForTimeout(300);
  await expect(page.getByTestId("generation")).toHaveText(generation!);
  await page.getByRole("button", { name: "↺ Reset" }).click();
  await expect(page.getByTestId("generation")).toHaveText("0");
  await page.screenshot({ path: "test-results/2d.png", fullPage: true });
  expect(errors).toEqual([]);
});

test("3D voxels, custom rules, validation and resize", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Step →" })).toBeEnabled({
    timeout: 60000,
  });
  await page.getByLabel("Preset").selectOption("conway3d");
  await page.getByRole("button", { name: "Apply & restart" }).click();
  await expect(page.getByLabel("3D cellular automaton")).toBeVisible();
  const initial = await page
    .locator(".three-host")
    .getAttribute("data-instances");
  expect(Number(initial)).toBeGreaterThan(0);
  await page.getByRole("button", { name: "Step →" }).click();
  await expect(page.getByTestId("generation")).toHaveText("1");
  const canvas = page.getByLabel("3D cellular automaton");
  const rect = (await canvas.boundingBox())!;
  await page.mouse.move(rect.x + rect.width / 2, rect.y + rect.height / 2);
  await page.mouse.down();
  await page.mouse.move(
    rect.x + rect.width / 2 + 80,
    rect.y + rect.height / 2 + 30,
  );
  await page.mouse.up();
  await page.mouse.wheel(0, 100);
  await page.getByRole("button", { name: "Fit view" }).click();
  await page.screenshot({ path: "test-results/3d.png", fullPage: true });
  await page.getByLabel("Width", { exact: true }).fill("256");
  await page.getByRole("button", { name: "Apply & restart" }).click();
  await expect(page.getByRole("alert")).toContainText("65,536");
  await page.getByLabel("Width", { exact: true }).fill("8");
  await page.getByLabel("Height", { exact: true }).fill("8");
  await page.getByLabel("Depth", { exact: true }).fill("8");
  await page
    .getByRole("combobox", { name: "Neighborhood", exact: true })
    .selectOption("custom");
  await page.getByLabel("Neighbor offsets").fill("[[-1,0,0],[1,0,0],[0,1,0]]");
  await page.getByLabel("Birth counts").fill("1");
  await page.getByLabel("Survival counts").fill("1,2");
  await page.getByRole("button", { name: "Apply & restart" }).click();
  await expect(page.getByRole("alert")).toHaveCount(0);
  await page.getByRole("button", { name: "Step →" }).click();
  await expect(page.getByTestId("generation")).toHaveText("1");
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(canvas).toBeVisible();
  await page.getByLabel("Preset").selectOption("wolfram2d");
  await page.getByLabel("Wolfram rule").fill("110");
  await page.getByRole("button", { name: "Apply & restart" }).click();
  await expect(page.getByLabel("2D cellular automaton")).toBeVisible();
  expect(errors).toEqual([]);
});
