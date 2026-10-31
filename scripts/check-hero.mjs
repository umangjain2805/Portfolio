import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const errors = [];
const results = [];
for (const width of [360, 390, 768, 1024, 1440, 1920]) {
  const context = await browser.newContext({
    viewport: { width, height: width < 768 ? 844 : 900 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("http://localhost:4174", { waitUntil: "networkidle" });
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > innerWidth,
  );
  const button = await page.locator(".hero-actions").boundingBox();
  if (width >= 1024 && button.y + button.height > 900)
    throw Error(
      `Hero actions below fold at ${width}: ${JSON.stringify(button)}`,
    );
  const violations = (
    await new AxeBuilder({ page })
      .include("#home")
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze()
  ).violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) }));
  if ([390, 1440, 1920].includes(width))
    await page.screenshot({ path: `qa/hero-new-${width}.png` });
  results.push({ width, overflow, violations });
  await context.close();
}
const context = await browser.newContext({
  viewport: { width: 1920, height: 900 },
});
const page = await context.newPage();
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
await page.goto("http://localhost:4174", { waitUntil: "networkidle" });
await page.locator(".particle-stage.scene-ready").waitFor();
await page.waitForTimeout(1500);
await page.screenshot({ path: "qa/hero-new-animated.png" });
const progress = () =>
  page.locator(".particle-stage").getAttribute("data-scroll-progress");
await page.evaluate(() => window.scrollTo(0, 20));
await page.waitForTimeout(400);
const start = Number(await progress());
await page.evaluate(() => window.scrollTo(0, 250));
await page.waitForTimeout(400);
const spread = Number(await progress());
await page.screenshot({ path: "qa/hero-new-scrolled.png" });
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);
const reset = Number(await progress());
if (!(start > 0 && spread > start && reset === 0))
  throw Error(
    `Scroll animation failed: ${JSON.stringify({ start, spread, reset })}`,
  );
console.log(
  JSON.stringify(
    { results, scroll: { start, spread, reset }, errors },
    null,
    2,
  ),
);
await browser.close();
if (errors.length || results.some((r) => r.overflow || r.violations.length))
  process.exitCode = 1;
