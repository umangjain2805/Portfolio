import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const results = [];
for (const width of [360, 390, 768, 1024, 1440, 1920]) {
  const context = await browser.newContext({
    viewport: { width, height: width < 768 ? 844 : 1080 },
    reducedMotion: "reduce",
    permissions: ["clipboard-read", "clipboard-write"],
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("http://localhost:4174", { waitUntil: "networkidle" });
  await page.locator("#contact").scrollIntoViewIfNeeded();
  const socialLinks = page.locator("#contact .contact-social-link");
  if ((await socialLinks.count()) !== 4)
    throw Error("Expected four contact social links");
  const expected = [
    "https://github.com/umangjain2805",
    "https://www.linkedin.com/in/umang-jain-1647a6335/",
    "https://leetcode.com/u/umang0528/",
    "https://www.codechef.com/users/umang0528",
  ];
  for (let i = 0; i < 4; i++) {
    if ((await socialLinks.nth(i).getAttribute("href")) !== expected[i])
      throw Error("Incorrect social URL");
    if (
      (await socialLinks.nth(i).getAttribute("target")) !== "_blank" ||
      (await socialLinks.nth(i).getAttribute("rel")) !== "noopener noreferrer"
    )
      throw Error("Unsafe social link");
  }
  if (
    (await page.locator("#contact .contact-cta").getAttribute("href")) !==
    "mailto:umangjain2805@gmail.com"
  )
    throw Error("Incorrect mail action");
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > innerWidth,
  );
  const violations = (
    await new AxeBuilder({ page })
      .include("#contact")
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze()
  ).violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) }));
  await page.getByRole("button", { name: "Copy email", exact: true }).click();
  await page.getByRole("status").filter({ hasText: "Copied" }).waitFor();
  if (
    (await page.evaluate(() => navigator.clipboard.readText())) !==
    "umangjain2805@gmail.com"
  )
    throw Error("Email copy failed");
  if ([390, 1440, 1920].includes(width))
    await page
      .locator("#contact")
      .screenshot({ path: `qa/contact-${width}.png` });
  results.push({ width, overflow, violations, errors });
  await context.close();
}
console.log(JSON.stringify(results, null, 2));
const motionContext = await browser.newContext({
  viewport: { width: 1440, height: 1080 },
});
const motionPage = await motionContext.newPage();
await motionPage.goto("http://localhost:4174", { waitUntil: "networkidle" });
await motionPage.locator("#contact").scrollIntoViewIfNeeded();
await motionPage.waitForTimeout(1000);
await motionPage.locator("#contact .contact-cta").hover();
await motionPage.waitForTimeout(350);
await motionPage
  .locator("#contact")
  .screenshot({ path: "qa/contact-hover.png" });
await motionPage.locator("#contact .contact-social-link").first().focus();
if (
  !(await motionPage
    .locator("#contact .contact-social-link")
    .first()
    .evaluate((el) => el === document.activeElement))
)
  throw Error("Social keyboard focus failed");
await motionContext.close();
await browser.close();
if (results.some((r) => r.overflow || r.violations.length || r.errors.length))
  process.exitCode = 1;
