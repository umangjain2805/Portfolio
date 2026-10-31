import { chromium } from "playwright";
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
await page.goto("http://localhost:4174", { waitUntil: "networkidle" });
await page.waitForTimeout(1400);
const bounds = await page.evaluate(() => {
  const work = document.querySelector("#work");
  const spacer = work.parentElement;
  const track = document.querySelector(".work-track");
  const view = document.querySelector(".work-viewport");
  const start = spacer.getBoundingClientRect().top + scrollY - 80;
  return {
    start,
    end: start + track.scrollWidth - view.clientWidth,
    distance: track.scrollWidth - view.clientWidth,
  };
});
for (const cursor of ["strip", "gutter"]) {
  await page.evaluate((y) => scrollTo(0, y), bounds.end - 140);
  await page.waitForTimeout(1400);
  await page.mouse.move(cursor === "strip" ? 600 : 1420, 500);
  await page.evaluate(() => {
    window.scrollSamples = [];
    let last = performance.now();
    const until = last + 1800;
    function frame(t) {
      window.scrollSamples.push({
        t,
        dt: t - last,
        y: scrollY,
        x: new DOMMatrix(
          getComputedStyle(document.querySelector(".work-track")).transform,
        ).m41,
        skills: document.querySelector("#skills").getBoundingClientRect().top,
      });
      last = t;
      if (t < until) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(1900);
  const samples = await page.evaluate(() => window.scrollSamples);
  const first = samples[0];
  const at100 = samples.find((s) => s.t - first.t >= 100);
  const at500 = samples.find((s) => s.t - first.t >= 500);
  const last = samples.at(-1);
  if (Math.abs(at500.x + bounds.distance) > 1)
    throw Error(
      `Horizontal track is still catching up after pin exit (${cursor})`,
    );
  if (last.y < bounds.end) throw Error("Scroll did not reach Skills");
  console.log(
    JSON.stringify({
      cursor,
      bounds,
      response100: at100.y - first.y,
      response500: at500.y - first.y,
      responseFinal: last.y - first.y,
      trackLag100: at100.x + bounds.distance,
      trackLag500: at500.x + bounds.distance,
      maxFrameMs: Math.max(...samples.map((s) => s.dt)),
      errors,
    }),
  );
  await page.screenshot({ path: `qa/work-exit-${cursor}.png` });
}
await page.setViewportSize({ width: 390, height: 844 });
await page.locator(".project-visual-button").first().hover();
await page.waitForTimeout(400);
const before = await page.evaluate(() => scrollY);
await page.mouse.wheel(240, 0);
await page.waitForTimeout(700);
const mobile = await page.evaluate(() => ({
  left: document.querySelector(".work-viewport").scrollLeft,
  y: scrollY,
}));
if (mobile.left <= 0 || Math.abs(mobile.y - before) > 4)
  throw Error(`Native horizontal scroll regression: ${JSON.stringify(mobile)}`);
console.log(
  JSON.stringify({
    mobileHorizontalScroll: mobile.left,
    verticalDrift: mobile.y - before,
  }),
);
await browser.close();
if (errors.length) throw Error(errors.join("\n"));
