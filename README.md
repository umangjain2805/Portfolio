# Umang Jain — portfolio

Single-page Next.js App Router portfolio built from `UI.md`. TypeScript, Tailwind CSS 4, GSAP ScrollTrigger, Lenis, Three.js/react-three-fiber, Lucide and self-hosted Google Fonts through `next/font`.

## Run

Requires Node.js 22+ and npm.

```sh
npm ci
npm run dev
```

Development: http://localhost:3000

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`build` creates a static `out/` directory. `start` serves it at http://localhost:4173 with compression. Deploy `out/` to any static host, or use Vercel's Next.js integration.

## Content and remaining owner assets

All public text and links live in `data/content.ts`.

- Add the real resume at `public/resume.pdf`. Its links intentionally point to `/resume.pdf`; set `content.resume.enabled` to `false` to hide them until supplied.
- Set `content.about.portrait` to an image URL to fill the optional portrait slot. No portrait is needed.
- Each project has optional `image` and `links` fields. `ProjectMedia` currently renders original abstract geometry, as requested. Add screenshots and actual project URLs when available. No project URLs have been invented.
- SGSITS dates and availability are intentionally omitted.
- Set `NEXT_PUBLIC_SITE_URL` to the real deployed origin **before building**. `.env.example` documents the setting. It enables the canonical URL and absolute social preview URLs; without it, metadata uses the local development origin and no canonical URL is invented.
- `public/og.png` is the generated 1200×630 social card; `public/icon.svg` is the UJ favicon.

## Verification

`npm run test:browser` checks the running dev server with the installed Google Chrome on Windows. Set `CHROME_PATH` for another installation and `QA_URL` for a production preview. It tests all six requested widths, reduced motion, page overflow, automated WCAG checks, project dialogs, focus trapping/return, mobile navigation, the animated layout, and no-WebGL fallback. Screenshots and reports go to the ignored `qa/` directory.

The hero renders text and a deterministic static SVG sphere in server HTML. Its lazy WebGL scene uses 5,000 points on desktop, 1,500 on mobile/coarse-pointer devices, capped DPR, and pauses outside the viewport or in hidden tabs. Reduced motion keeps the static sphere and native project scrolling. Lenis and the pinned project strip are disabled under reduced motion. Windows below 740px high also use native project scrolling so card actions stay reachable. Cards show six technology chips; their dialogs contain the complete supplied stacks.

No analytics, backend, form submission, sound, live statistics, stock images, or fabricated project screenshots are included.

The refined hero responds from the first scroll movement: downward scrolling disperses its points, upward scrolling gathers them, and scroll speed adds a short rotation impulse. There is no initial scroll dead zone. Its desktop introduction and actions remain visible together. Reduced motion retains the static sphere.
