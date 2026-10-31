import sharp from "sharp";
import { readFile } from "node:fs/promises";
const source = await readFile(
  new URL("../data/content.ts", import.meta.url),
  "utf8",
);
const name = source.match(/name:\s*["']([^"']+)["']/)[1];
const title = source.match(/title:\s*["']([^"']+)["']/)[1];
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#0a0a0a"/><rect x="24" y="24" width="1152" height="582" fill="none" stroke="#333"/><circle cx="980" cy="300" r="160" fill="none" stroke="#9a9893" stroke-dasharray="1 8"/><text x="80" y="310" font-family="sans-serif" font-weight="700" font-size="90" fill="#edebe6">${name}</text><text x="84" y="380" font-family="monospace" font-size="24" fill="#ff4a1c">${title.toUpperCase()}</text></svg>`;
await sharp(Buffer.from(svg))
  .png()
  .toFile(
    new URL("../public/og.png", import.meta.url).pathname.replace(
      /^\/([A-Za-z]:)/,
      "$1",
    ),
  );
