# UI.md acceptance review

- [x] Particle hero: Fibonacci sphere, slow rotation, pointer tilt/repulsion, scroll dispersal, SVG callouts, 800-point starfield, static SVG and reduced-motion fallback. Text is server-rendered before the lazy 3D scene.
- [x] Wide uppercase display type and italic Instrument Serif accents. All four specified fonts use `next/font`, swap behavior and adjusted fallbacks. Reserved hero lines prevent font-induced shifts.
- [x] Fixed header, mobile dialog menu, Roman section index, viewport frame, column lines, top scroll progress and session preloader.
- [x] Paper Work and Contact sections, legible clip-path shade wipes, dark remaining sections. The wipe stays light enough to preserve text contrast throughout.
- [x] Three projects in a pinned desktop strip/native mobile scroll-snap row, counters, progress, keyboard controls, details dialogs and status chips. Current and planned features stay separate. Complete technology stacks are in the dialogs. Original abstract geometry fills the replaceable media slots.
- [x] Both experience entries, supplied internship dates only, SGSITS link and recognition wording. No claims of AI backend authorship.
- [x] Six skills categories and their exact supplied items; no ratings or percentage bars.
- [x] Resume-attributed statistics, education and both leadership/activity cards. No CGPA, semester, live counters or invented dates.
- [x] Supplied contact copy, email, copy feedback, safe social links, faint particle ring, footer and back-to-top. No phone number or contact backend.
- [x] Automated checks at 360, 390, 768, 1024, 1440 and 1920px: no page overflow, zero WCAG A/AA violations under reduced motion, all three dialogs open/close, focus stays within and returns, mobile menu works. Animated layout and pinned keyboard actions also checked. No-WebGL fallback checked by denying WebGL contexts.
- [x] Desktop/mobile screenshots visually reviewed. Production Lighthouse reports and screenshots are in `qa/` (generated, ignored by Git). Performance, accessibility and SEO targets pass; CLS is below 0.1 and LCP below 2.5 seconds in local audits.
- [x] Lint, TypeScript and static production build pass. Browser checks report zero uncaught runtime errors. External links use safe target/rel attributes and new-tab announcements. Copy and links are centralized in `data/content.ts`.

Owner inputs intentionally outstanding: real `public/resume.pdf`, optional portrait, screenshots and actual project URLs. The real deployed origin is required in `NEXT_PUBLIC_SITE_URL` to emit a canonical URL and production social image URLs. No deployment domain was invented.

Local production Lighthouse results (Chrome headless, Lighthouse 13.6):

| Audit | Desktop | Mobile |
| --- | ---: | ---: |
| Performance | 97 | 85 |
| Accessibility | 100 | 100 |
| SEO | 100 | 100 |
| Best practices | 100 | 100 |
| LCP | 0.4s | 1.1s |
| CLS | 0 | 0 |

Practical layout choices: short windows (<740px tall) use native project scrolling; cards show six technology chips with full stacks in dialogs. The contact ring uses SVG clusters rather than a second WebGL canvas to keep the finale lightweight.

Hero refinement: desktop introduction and CTAs fit in the viewport. Particle dispersion begins with the first scroll movement; a 20px scroll produced progress 0.0261, 250px produced 0.3268, and returning to the top reset it to zero. Scroll velocity adds a brief rotation impulse. Six-width overflow/accessibility checks, reduced-motion layout, WebGL rendering, lint, type-check and production build pass.
