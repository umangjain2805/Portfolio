import { chromium } from "playwright";
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1350, height: 940 } });
let release;
const wait = new Promise((r) => (release = r));
await page.route("**/*.woff2", async (route) => {
  await wait;
  await route.continue();
});
await page.goto("http://localhost:4173", { waitUntil: "domcontentloaded" });
const measure = () =>
  page.evaluate(() =>
    Object.fromEntries(
      [
        ".hero-copy",
        ".hero-title",
        ".hero-bottom",
        ".hero-bottom>p",
        ".hero-meta",
      ].map((s) => {
        const el = document.querySelector(s);
        const r = el.getBoundingClientRect();
        return [
          s,
          { y: r.y, height: r.height, font: getComputedStyle(el).fontFamily },
        ];
      }),
    ),
  );
console.log("before", await measure());
release();
await page.evaluate(() => document.fonts.ready);
console.log("after", await measure());
await browser.close();
