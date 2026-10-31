import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import { mkdir, writeFile } from "node:fs/promises";
await mkdir("qa", { recursive: true });
const browser = await chromium.launch({
  executablePath:
    process.env.CHROME_PATH ||
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
  args: ["--enable-webgl", "--ignore-gpu-blocklist"],
});
const results = [];
const errors = [];
for (const width of [360, 390, 768, 1024, 1440, 1920]) {
  const context = await browser.newContext({
    viewport: { width, height: width < 768 ? 844 : 1000 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  page.on("pageerror", (err) => errors.push(String(err)));
  await page.goto(process.env.QA_URL || "http://localhost:3000", {
    waitUntil: "networkidle",
  });
  await page.evaluate(() => document.fonts.ready);
  const dimensions = await page.evaluate(() => ({
    viewport: innerWidth,
    page: document.documentElement.scrollWidth,
    h1: document.querySelectorAll("h1").length,
    sections: document.querySelectorAll("main>section").length,
  }));
  if (dimensions.page > width)
    throw Error(`Overflow at ${width}: ${dimensions.page}`);
  const axe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  results.push({
    width,
    ...dimensions,
    violations: axe.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      nodes: v.nodes.map((n) => ({
        target: n.target,
        summary: n.failureSummary,
      })),
    })),
  });
  if (width === 390 || width === 1440)
    await page.screenshot({ path: `qa/page-${width}.png`, fullPage: true });
  for (let i = 0; i < 3; i++) {
    const button = page.locator(".project-content > button").nth(i);
    await button.scrollIntoViewIfNeeded();
    await button.click();
    if (!(await page.locator(".project-modal").isVisible()))
      throw Error("Missing modal");
    await page.keyboard.press("Tab");
    if (
      !(await page.evaluate(() => !!document.activeElement?.closest("dialog")))
    )
      throw Error("Focus escaped modal");
    await page.keyboard.press("Escape");
    if (await page.locator(".project-modal").count())
      throw Error("Escape failed");
    if (!(await button.evaluate((el) => el === document.activeElement)))
      throw Error("Focus not restored");
  }
  if (width < 768) {
    await page.getByRole("button", { name: "Open menu", exact: true }).click();
    await page.locator('#mobile-menu a[href="#contact"]').click();
    if (await page.locator("#mobile-menu").isVisible())
      throw Error("Menu did not close");
  }
  await context.close();
}
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
page.on("pageerror", (e) => errors.push(String(e)));
await page.goto(process.env.QA_URL || "http://localhost:3000", {
  waitUntil: "networkidle",
});
await page.waitForTimeout(1800);
await page.screenshot({ path: "qa/hero-animated.png" });
const scene = await page.locator(".particle-stage").getAttribute("class");
await page.locator("#work").scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
await page.screenshot({ path: "qa/work-desktop.png" });
for (let i = 0; i < 3; i++) {
  const button = page.locator(".project-content > button").nth(i);
  await button.focus();
  await page.waitForTimeout(1200);
  const rect = await button.boundingBox();
  if (
    !rect ||
    rect.y < 80 ||
    rect.y + rect.height > 1000 ||
    rect.x < 0 ||
    rect.x + rect.width > 1440
  )
    throw Error(
      `Pinned project ${i + 1} action is out of view: ${JSON.stringify(rect)}`,
    );
  await page.keyboard.press("Enter");
  await page.keyboard.press("Escape");
}
for (const width of [360, 390, 768, 1024, 1440, 1920]) {
  await page.setViewportSize({ width, height: width < 768 ? 844 : 1000 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(250);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > innerWidth,
  );
  if (overflow) throw Error(`Animated layout overflow at ${width}`);
}
const fallback = await browser.newPage({
  viewport: { width: 390, height: 844 },
});
await fallback.addInitScript(() => {
  const original = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (type, ...args) {
    if (String(type).startsWith("webgl")) return null;
    return original.call(this, type, ...args);
  };
});
await fallback.goto(process.env.QA_URL || "http://localhost:3000", {
  waitUntil: "networkidle",
});
if (await fallback.locator(".webgl-scene").count())
  throw Error("WebGL fallback failed");
if (!(await fallback.locator(".fallback-sphere").isVisible()))
  throw Error("Fallback sphere missing");
await fallback.close();
await writeFile(
  "qa/results.json",
  JSON.stringify({ results, errors, scene }, null, 2),
);
console.log(
  JSON.stringify(
    {
      results: results.map((r) => ({
        width: r.width,
        overflow: r.page > r.viewport,
        violations: r.violations,
      })),
      errors,
      scene,
    },
    null,
    2,
  ),
);
await browser.close();
if (errors.length || results.some((r) => r.violations.length))
  process.exitCode = 1;
