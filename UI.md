# UI.md — Umang Jain Portfolio (Build Brief for an AI Coding Assistant)

> **How to use this file.** Hand this whole file to an AI coding assistant (Claude, ChatGPT, Cursor, Copilot, etc.) and say:
> *"Build the portfolio website described in UI.md. Follow it exactly. Ask me only about items listed under 'Open questions'."*
> Everything the AI needs is here: who the site is for, the content, the look and feel, the layout of each section, the motion, the tech stack, and the rules it must not break.

---

## 0. Goal in one paragraph

Build a **single-page, professional developer portfolio** for **Umang Jain** (Full-Stack Developer, IT student at SGSITS Indore). It must feel like a high-end design-studio site: **dark, cinematic, minimal, with a rotating 3D particle sphere in the hero, huge wide display type, hairline grid lines, tiny monospace labels, and smooth scroll-driven motion**. Despite the "wow" visuals it must stay **recruiter-friendly**: fast, readable, accessible, and clear within 5 seconds about who Umang is, what he built, and how to contact him.

---

## 1. Visual references (three screen recordings the owner likes)

The owner supplied three reference videos. Their shared DNA is: *near-monochrome, huge typography, particle/3D hero object, scroll-driven storytelling, thin technical line-work, tiny uppercase labels.* Take these specific ideas from each:

### Reference A — Light studio site with wide black type ("IID" style agency site)
- Off-white paper background (`#F2F2F0`-ish) with subtle grain; a **dotted 3D sphere** made of black dots on the hero that **breaks apart into scattered floating dots** as you scroll, then the headline appears ("MAKE WORK THAT MATTERS TO YOU").
- **Ultra-wide, heavy, uppercase display type** (extended grotesque, tight leading). Headlines are huge and sometimes bleed to the edges. Words reveal with a **blur-to-sharp** transition.
- Whole page sits inside a **thin hairline frame / column grid**; tiny uppercase nav at the top with an underline on the active item; a small 4-dot grid icon top-right.
- **Horizontal project strip**: large image cards side by side, with a caption row beneath (`PROJECT NAME` — `TYPE`), a counter (`0002 / 0007`) and an `ALL PROJECTS ↗` link.
- **"Expertise" cloud**: bordered pill tags with a `+` icon scattered on a grid.
- Page **flips from light to dark** for the "methodology" section (grayscale isometric illustrations on black), then back to light for a big closing line: **"START WITH A CONVERSATION"** + `GET IN TOUCH ↗` button + a small multi-column footer.

### Reference B — "ReFactory" dark industrial site (black + one orange accent)
- Pure black background, **single burnt-orange/red accent** used only for tiny labels, buttons and highlights.
- A **3D object that assembles as you scroll** (debris → finished stool). Scroll is the timeline.
- Large clean sans headline ("Nothing new to see here"), small grey paragraph beneath, tiny **monospace uppercase** eyebrow labels with an orange dot (`• CRAFT, QUALITY & LONGEVITY`), and `SCROLL TO BEGIN` hint.
- **Text scramble/decode** effect: headline letters appear gradually from random characters.
- **Bordered feature grid**: 2×2 grid with 1px dividers and small corner brackets; each cell has an icon in a rounded square, title, short text, and a small orange `LEARN MORE →` button.
- **Row of 4 dark cards** (icon, title, small text) and large stat/statement cards.
- Faint **blueprint / technical circles and crosshairs** in the background, very low opacity.

### Reference C — "The Atelier" luxury dark site
- Near-black background with a **starfield**; a **glowing particle sphere** in the centre that rotates and reacts to scroll/mouse; around it, **thin callout lines** pointing to tiny labels (`THE RITUAL · THE MORNING`, `CLICK TO EXPLORE`).
- **Elegant serif headlines with an italic word** ("The *Atelier*", "The morning, composed.") on top of the particle scene.
- **Fixed section index on the right edge in Roman numerals** (I, II, III, IV, V); the active one gets a longer line.
- Tiny letter-spaced uppercase header/footer text; underlined text link as CTA (`SEE THE RITUAL`).
- Finale: the sphere **dissolves into a glowing particle ring** around the closing message; a handwritten-script accent line (`begin the day`).
- A hushed **intro gate** (thin ring + `ENTER`). *Do not copy the sound part — see "Don't" list.*

### What to combine (the design concept: "Quiet Signal")
| Idea | Taken from |
| --- | --- |
| Rotating dotted/particle sphere in hero that disperses on scroll | A + C |
| Wide, heavy uppercase display type for section titles | A |
| Serif italic accent word inside headlines | C |
| Tiny monospace uppercase labels / eyebrows | B |
| One orange accent colour on a black base | B |
| Hairline frame and column grid lines | A + B |
| Roman-numeral fixed section index (right edge) | C |
| Callout lines with micro-labels around the sphere | C |
| Horizontal project strip with counter | A |
| Bordered feature/skills grid with `+` tags | A + B |
| Light "paper" section inverted against dark for rhythm | A |
| Blur-to-sharp and text-decode reveals | A + B |
| Particle ring/dispersal finale in contact section | C |

**Professional guardrail:** keep ~80% restraint, ~20% spectacle. Motion supports the content; it never hides it. If any effect hurts readability or performance, simplify it.

---

## 2. Design tokens

### Colour
```css
:root {
  --ink:        #0A0A0A;   /* main dark background */
  --ink-2:      #111111;   /* raised surfaces / cards */
  --ink-3:      #1A1A1A;   /* hover surfaces */
  --line:       rgba(255,255,255,0.12);  /* hairlines on dark */
  --text:       #EDEBE6;   /* warm off-white text on dark */
  --text-dim:   #9A9893;   /* secondary text on dark */
  --paper:      #F2F1EE;   /* light section background */
  --paper-ink:  #0A0A0A;   /* text on light */
  --paper-line: rgba(10,10,10,0.14);
  --accent:     #FF4A1C;   /* the ONLY accent: orange-red */
  --accent-soft:rgba(255,74,28,0.14);
}
```
- Accent is used sparingly: eyebrow dots, primary button, active nav/index line, link hover, one highlighted word per section at most.
- No gradients except very subtle radial glow behind the sphere (accent at ≤8% opacity or neutral white at ≤6%).
- Text contrast must meet WCAG AA (4.5:1 body, 3:1 large). `--text-dim` on `--ink` is the lowest allowed secondary tone.

### Typography (all free, Google Fonts)
| Role | Font | Notes |
| --- | --- | --- |
| Display (huge section titles) | **Unbounded** 700–800 (alt: Syne 800) | uppercase, `letter-spacing: -0.02em`, `line-height: 0.95`, `clamp(2.5rem, 9vw, 9rem)` |
| Editorial accent | **Instrument Serif** *italic* | one italic word inside a headline, or a quote |
| Body | **Inter** 400/500 | 16–18px, line-height 1.6, max width ~62ch |
| Labels / meta | **JetBrains Mono** 400/500 | 11–12px, uppercase, `letter-spacing: 0.14em` |

Hero headline pattern: `I build web apps that make *everyday tasks* easier.` — Display font for most words, **Instrument Serif italic** for "everyday tasks".

### Layout & spacing
- 12-column grid, max content width **1280px**, side padding `clamp(20px, 4vw, 56px)`.
- Section vertical padding `clamp(96px, 14vw, 200px)`.
- A fixed **hairline frame** (1px `--line`) inset 12px from the viewport edges on desktop; hidden on mobile.
- Vertical hairline column lines (3–4 lines) behind sections at 6% opacity — decorative only (`aria-hidden`).
- Corner radius: **0–2px** for cards (sharp, technical). Pills/tags: fully rounded (999px).
- Cards: 1px border `--line`, background `--ink-2`, no shadows. Hover: border becomes `--accent` at 60% and card lifts 2px.

### Buttons & links
- **Primary**: solid `--accent` background, black text, mono uppercase label, arrow `↗`, sharp corners, 14px 22px padding. Hover: arrow nudges up-right 3px, background lightens slightly.
- **Secondary**: transparent, 1px `--line` border, text colour; hover border → `--text`.
- **Text link**: mono uppercase, 1px underline that animates left→right on hover (as in "SEE THE RITUAL").
- Minimum tap target 44×44px. Visible focus ring: `outline: 2px solid var(--accent); outline-offset: 3px`.

---

## 3. Global UI elements

1. **Header (fixed, top)** — left: monogram logo `UJ` (Display font, in a 36px square with 1px border). Centre/right: mono uppercase links `HOME · ABOUT · EXPERIENCE · WORK · SKILLS · CONTACT`; active link underlined in accent. Far right: `VIEW RESUME ↗` secondary button. On mobile: a menu button opens a full-screen overlay menu with large Display-font links.
2. **Section index (fixed, right edge, desktop only)** — Roman numerals `I II III IV V VI VII` stacked vertically in mono 11px; the active one shows a longer accent line beside it. Clicking scrolls to that section. (From Reference C.)
3. **Scroll progress** — 2px accent line at the very top that grows with scroll.
4. **Custom cursor (desktop, pointer:fine only)** — small 10px ring that grows to 40px over links/buttons and shows a tiny mono label (`VIEW`, `OPEN`) over project cards. Never hide the native cursor on touch devices; keep native cursor visible on text inputs.
5. **Smooth scrolling** — Lenis, with `prefers-reduced-motion` disabling it.
6. **Preloader (≤1.4 s total)** — black screen, thin ring draws itself around `UJ`, then fades. Skippable; shown once per session. No "ENTER" gate, no sound.
7. **Footer** — see section 11.

---

## 4. Page structure (single page, in order)

| # | Index | Section | Theme | Signature visual |
| --- | --- | --- | --- | --- |
| 1 | I | Home / Hero | dark | Rotating particle sphere + callout lines |
| 2 | II | About | dark | Two-column text with big pull-quote, hairline grid |
| 3 | III | Experience | dark | Vertical timeline of two roles, bordered cards |
| 4 | IV | Selected Work | **light (paper)** | Horizontal scrolling project strip |
| 5 | V | Skills | dark | Bordered 2×3 grid with `+` tags |
| 6 | VI | Problem Solving, Education & Leadership | dark | Stat cards + education card + two activity cards |
| 7 | VII | Contact + Footer | **light (paper)** | Giant "Let's build something useful." + particle ring |

The light↔dark flips (sections 4 and 7) mirror Reference A and give the page rhythm. Transition between themes with a quick clip-path/colour wipe on scroll, not an abrupt jump.

---

## 5. Section specifications and **public copy** (use this text; simple English)

### 5.1 Hero (I — Home)
**Layout.** Full viewport height. Particle sphere centred (about 60vh diameter), slowly rotating, tilting slightly toward the mouse. Three thin callout lines extend from the sphere to tiny mono labels:
- `FULL-STACK DEVELOPER`
- `SGSITS · INDORE`
- `SCROLL TO EXPLORE`

**Text (bottom-left, over/under the sphere):**
- Eyebrow (mono, accent dot): `• HI, I'M UMANG JAIN`
- Headline: **I build web apps that make *everyday tasks* easier.**
- Description: *I'm an Information Technology student at SGSITS, Indore. I build websites and the systems behind them, and explore how AI can help solve practical problems.*
- Buttons: **View My Work** (primary, scrolls to Work) · **Get in Touch** (secondary, scrolls to Contact) · **View Resume** (text link)
- Bottom bar (mono, tiny): `INDORE, MADHYA PRADESH, INDIA` left · `© 2026` right · scroll hint centre.

**Sphere behaviour (see §7):** on scroll it spreads into floating dots (Reference A) and the About headline fades in through the dots.

### 5.2 About (II)
- Eyebrow: `• ABOUT`
- Display title (wide uppercase, two lines): `TURNING IDEAS INTO THINGS PEOPLE CAN *USE*` (last word in Instrument Serif italic, accent colour)
- Body (two short paragraphs, left column, ~60ch):
  > I enjoy turning ideas into things people can use. My work covers both what users see on a website and the systems running behind it.
  >
  > I have contributed to the official SGSITS website and worked on the frontend of Prashikshan AI, an interview preparation platform. My projects explore business management, temporary file sharing, and AI-assisted dispute resolution.
  >
  > I care about clear interfaces, organized code, and understanding how an application works from start to finish. Alongside development, I practice data structures and algorithms to strengthen my problem-solving skills.
- Right column: a small bordered "facts" card (mono labels + values):
  - `ROLE` — Full-Stack Developer
  - `BASE` — Indore, Madhya Pradesh, India
  - `STUDYING` — B.Tech, Information Technology
  - `INSTITUTE` — SGSITS, Indore
  - `GRADUATING` — June 2028 (expected)
- Words in the paragraph fade from 30% to 100% opacity as they scroll through the viewport (scroll-linked text reveal).

### 5.3 Experience (III)
- Eyebrow: `• EXPERIENCE`
- Display title: `WHERE I'VE *WORKED*`
- Two bordered cards on a vertical hairline timeline (newest first). Each card: role (Display font, medium size), organisation (mono), dates, summary, bullets, tech chips. Corner-bracket decoration on hover (Reference B).

**Card 1 — Frontend Developer Intern — Prashikshan AI**
- Organisation: Sarthi Initiative, SGSITS, Indore
- Dates: **15 Feb 2026 – 15 Apr 2026**
- Summary: Worked on the frontend of an AI-powered platform that helps users prepare for interviews through practice questions and personalized preparation content.
- Bullets:
  - Developed responsive, interactive interfaces using React.
  - Built reusable components for sign-in, interview setup, and practice sessions.
  - Connected the interface to backend APIs for account and interview workflows.
  - Added state management and error handling to support those workflows.
- Chips: `React` `FastAPI` `REST APIs` `JWT` `PostgreSQL` (these are the project's stack as listed on the resume)
- **Do not** claim Umang built the platform's AI backend (Gemini API, prompt engineering etc. describe the platform, not his personal work).

**Card 2 — Web Developer — Official SGSITS Website**
- Organisation: Shri Govindram Seksaria Institute of Technology and Science, Indore
- Link: `https://www.sgsits.ac.in/` (text link `VISIT WEBSITE ↗`, opens in new tab with `rel="noopener noreferrer"`)
- Dates: *not supplied → show no dates.*
- Summary: Contributed to the development and improvement of my institute's official website as part of a collaborative development effort.
- Bullets:
  - Helped develop new website modules and add features for institutional needs.
  - Improved existing functionality and usability.
  - Worked with the development team to maintain and extend website components.
- Badge (small, accent outline): `RECOGNISED — received a letter recognizing technical contributions`

### 5.4 Selected Work (IV) — light section
- Eyebrow: `• SELECTED WORK`
- Display title: `PROJECTS`, with counter `03` in mono
- **Horizontal strip** (pinned section; vertical scroll moves cards sideways on desktop; native horizontal swipe/scroll-snap on mobile). Each card is large (≈ 60vw desktop, 85vw mobile), with: index `0001`, type chip, status chip, title, card description, tech chips, and an "OPEN DETAILS" action that opens a **modal / expandable panel** with the detailed description. Below the strip: counter `0001 / 0003`, progress bar, and `ALL PROJECTS ↗` (only if a projects page/GitHub link exists — otherwise omit).
- **No screenshots were supplied.** Do **not** use fake mockups. Each card's visual is an abstract generative typographic/geometric panel (large index number, a subtle particle or line pattern in different tint per project). Leave a clearly marked `<ProjectMedia />` slot so real screenshots can be dropped in later.

**Project 1 — CRM Platform — Business Management and Automation**
- Chips: `Freelance project` · `Ongoing development`
- Card description: A business management platform designed to bring customer details, sales follow-ups, team access, and billing into one workspace.
- Detail: Small businesses often manage customer information, follow-ups, and payments across different tools. I'm working on a platform that brings these activities together. Each business has its own workspace, data, and team permissions.
- Current work and foundation:
  - Separate business workspaces and database rules to keep company data apart.
  - Account authentication and permissions for different team members.
  - Subscription billing and invoice management.
  - Modular backend APIs and database models.
  - A demo for exploring customer tracking and sales workflows.
- Planned expansion: Broader customer management, WhatsApp automation, employee management, and connected business workflows are being developed in phases.
- Tech: Next.js · React · TypeScript · Node.js · Fastify · PostgreSQL · Prisma · Redis · BullMQ · Docker · pnpm · Turborepo
- Links: **none** (private freelance repo → no source button).
- Note: "Digitalcrest" is the *demo business*, **not** the product name — do not present it as the product name.

**Project 2 — TrustZero — AI-Assisted Dispute Resolution**
- Chips: `Demo project` · `Simulated payments`
- Card description: A demo that uses AI to review evidence from buyers and sellers, explain a dispute decision, and send uncertain cases to a human administrator.
- Detail: TrustZero explores what happens when a buyer and seller disagree about delivered work. It simulates holding a payment until the agreement is completed. When a dispute is raised, AI reviews the evidence and considers both sides. A rule-based check determines whether the system acts on the decision or requests human review.
- Features:
  - Separate accounts for buyers, sellers, and administrators.
  - Simulated wallets, payment holding, releases, and refunds.
  - Evidence submission and AI-assisted review.
  - A live view of the review process and its reasoning.
  - A recorded history of financial actions and decisions.
- Tech: Java · Spring Boot · React · Vite · Tailwind CSS · PostgreSQL · Spring Security · Fireworks AI
- Wording rule: say **demo with simulated payments**; real payment integration is planned. Never imply real customer funds or guaranteed-correct decisions. Do not add a "My role" section and do not claim sole authorship.
- Links: none supplied.

**Project 3 — SnapShare — Temporary File and Code Sharing**
- Chips: `In development`
- Card description: A project in development for sharing files and code through links with passwords, expiration times, and limited access.
- Detail: Sometimes a file only needs to be shared briefly. SnapShare is being developed to give users more control over how long a link remains available and how it can be used.
- **Implemented** (show with ✓ marks):
  - Account registration, sign-in, and sign-out.
  - A dashboard accessible after signing in.
  - Responsive React interfaces and shared input validation.
  - Password hashing, cookie-based sessions, and login rate limits.
  - API security middleware, structured logs, and account-flow tests.
- **Planned** (show with ○ marks, dimmer): File uploads, code snippet sharing, password-protected links, expiration controls, one-time claims, notifications, and automatic storage cleanup.
- Tech (current): React · TypeScript · Tailwind CSS · Node.js · Express · MongoDB · Zod
- Planned infrastructure: AWS S3 and Redis/BullMQ workers (label as *planned*).
- Links: none supplied.

> Keep the **Implemented vs Planned** distinction visible wherever features are listed (CRM and SnapShare). Never present planned features as shipped.

### 5.5 Skills (V)
- Eyebrow: `• SKILLS`
- Display title: `TOOLS I *WORK* WITH`
- Layout: Reference B's **bordered 2×3 grid** with 1px dividers and corner brackets. Each cell: small icon in a rounded square, category title, then `+` pill tags (Reference A). Hover a cell → its tags light up in accent.
- Cells:
  | Category | Items |
  | --- | --- |
  | Languages | C/C++, Java, JavaScript, TypeScript, SQL |
  | Frontend | React, Next.js, Tailwind CSS, Redux Toolkit |
  | Backend | Node.js, Express, REST APIs, JWT, Zod |
  | Databases | MongoDB, PostgreSQL, Prisma |
  | Tools | Git, GitHub, Docker, Postman, Redis |
  | Fundamentals | Data Structures and Algorithms, OOP, DBMS, Operating Systems, Computer Networks |
- **No percentage bars, no star ratings, no "expert" labels.**
- Optional: a slow marquee line of tech names in mono between sections (pause on hover; static under reduced motion).

### 5.6 Problem Solving, Education & Leadership (VI)
**Problem solving**
- Eyebrow: `• PROBLEM SOLVING`
- Display title: `PRACTICE, *DAILY*`
- Intro: I practice problem solving to improve how I break down problems, compare approaches, and write efficient code.
- Three stat cards (big Display numerals, count-up on entry, small mono caption):
  - `400+` — Data structures & algorithms problems solved on LeetCode
  - `2★` — CodeChef rating `1400+`
  - `31,494` — All India Rank, JEE Main 2024
- Under the cards, tiny mono note: `Figures as reported on my resume.`
- Two link chips: `LEETCODE ↗` → https://leetcode.com/u/umang0528/ · `CODECHEF ↗` → https://www.codechef.com/users/umang0528
- **Do not** label the CodeChef rating "current" or "highest". **No live counters.**

**Education**
- Card: **Shri Govindram Seksaria Institute of Technology and Science (SGSITS)** — B.Tech in Information Technology — Indore, Madhya Pradesh — September 2024 – June 2028 (expected)
- Copy: Studying Information Technology while building full-stack projects and strengthening my understanding of software development and computer science.
- **Omit CGPA and current semester.**

**Leadership & activities** (two cards)
- **Head of Marketing — HackIndore 4.0** — Core member of Club HashInclude. Led promotions, outreach, and branding activities to encourage participation in the event.
- **Member — BIS Club, SGSITS** — Participate in collaborative initiatives and club activities.

### 5.7 Contact + Footer (VII) — light section
- Eyebrow: `• CONTACT`
- Giant Display headline (fills the width, blur-to-sharp reveal, last word italic serif): **LET'S BUILD SOMETHING *USEFUL.***
- Copy: Have a project in mind or an opportunity to share? I'd love to hear about it.
- Primary button: **Say Hello** → `mailto:umangjain2805@gmail.com` (plus a "copy email" icon button that shows a small "Copied" toast).
- Email displayed as large underlined text: `umangjain2805@gmail.com`
- Social links (mono, uppercase, arrow ↗, open in new tab):
  - LINKEDIN → https://www.linkedin.com/in/umang-jain-1647a6335/
  - GITHUB → https://github.com/umangjain2805
  - LEETCODE → https://leetcode.com/u/umang0528/
  - CODECHEF → https://www.codechef.com/users/umang0528
- Background: a faint particle ring (Reference C finale) in dark ink at ~15% opacity that gently swirls toward the cursor.
- **Do not show the phone number on the site.** (Optional later; not default.)
- **No contact form backend unless asked.** Mailto is the default.

**Footer (mono, tiny, multi-column like Reference A):**
- Left: `Umang Jain — Building useful things. Learning along the way.`
- Middle columns: `NAVIGATE` (section links) · `ELSEWHERE` (4 social links) · `CONTACT` (email)
- Right: `© 2026 UMANG JAIN` and a `BACK TO TOP ↑` link.

---

## 6. Hero & global particle visuals — implementation

**Library:** `three` + `@react-three/fiber` (or plain `three`). Lazy-load the canvas after first paint so text renders instantly.

**Sphere**
- ~5,000 points distributed with a **Fibonacci sphere** (even spacing). Point size varies slightly; additive blending on dark; on the light sections render as black dots on paper.
- Idle: rotates around Y at ~0.05 rad/s; subtle noise displacement (breathing).
- Pointer: sphere eases (lerp 0.05) toward pointer rotation; nearby points are gently pushed away within a radius (repulsion), springing back.
- **Scroll timeline** (GSAP ScrollTrigger, `scrub: true`):
  1. 0–15%: sphere centred and intact.
  2. 15–40%: points drift outward and scale down into scattered floating dots (starfield), sphere fades.
  3. Through About/Experience: sparse dots drift behind content at low opacity (≤25%) — never behind small text at readable contrast cost.
  4. Contact: points gather into a **ring** around the headline.
- Starfield: ~800 tiny static/slow-drifting dots in the background of dark sections.
- Callout lines are SVG overlaid and fade out when scrolling begins.

**Performance budget**
- Mobile/low-power: 1,500 points, no pointer repulsion, DPR capped at 1.5.
- Desktop: DPR capped at 2. Pause rendering when the canvas is off-screen (`IntersectionObserver`) or tab hidden.
- `prefers-reduced-motion: reduce` → render a **static** sphere frame (no rotation, no scroll morph) and disable scramble/blur reveals (show text immediately).
- WebGL unavailable → fall back to a 2D canvas dotted sphere or a static SVG; never a blank hero.
- Target: Lighthouse Performance ≥ 90 desktop / ≥ 80 mobile, CLS < 0.1, LCP < 2.5 s. Hero text must paint before the 3D loads.

## 7. Motion language

| Effect | Where | Spec |
| --- | --- | --- |
| Blur-to-sharp word reveal | Display headlines | Per word: `opacity 0→1`, `blur(12px)→0`, `y 24→0`, stagger 60 ms, ease `cubic-bezier(.2,.7,.2,1)`, 700 ms, once |
| Text decode / scramble | Eyebrow labels, section index numbers | Random glyphs resolve to final text over ~600 ms; screen-reader text stays static via `aria-label` |
| Scroll-linked word fade | About paragraph | Opacity 0.3→1 per word |
| Section theme wipe | Work (light), Contact (light) | Background colour transitions over ~0.5 s of scroll using a clip-path/overlay |
| Pinned horizontal scroll | Projects | `ScrollTrigger` pin; `x` moves with scrub; snap optional |
| Count-up | Stat cards | 1.2 s ease-out once when 40% visible |
| Card hover | All cards | border → accent 60%, translateY(-2px), 200 ms |
| Magnetic buttons | Primary buttons (desktop) | 8px max pull toward cursor |
| Hairline draw | Frame, grid lines, timeline | `scaleY/scaleX 0→1` on entry |

Rules: durations 200–800 ms (hero/scrub excepted); easing consistent; animate only `transform` and `opacity` (plus `filter` sparingly); everything reveals **once**, never loops except the sphere and marquee.

---

## 8. Recommended tech stack

- **Next.js (App Router) + TypeScript**, static export friendly
- **Tailwind CSS** with the tokens above mapped into the theme
- **GSAP + ScrollTrigger** for scroll timelines; **Lenis** for smooth scroll
- **Framer Motion** (optional) for small component transitions and modal
- **Three.js / react-three-fiber** for the particle scene
- Fonts via `next/font/google` (Unbounded, Instrument Serif, Inter, JetBrains Mono)
- Icons: `lucide-react`
- Deploy on **Vercel** (or any static host); no backend required

**Suggested file structure**
```
/app
  layout.tsx            // fonts, metadata, JSON-LD Person schema
  page.tsx              // composes sections
  globals.css           // tokens, base styles
/components
  Header.tsx  SectionIndex.tsx  ScrollProgress.tsx  Cursor.tsx  Preloader.tsx
  sections/ Hero.tsx About.tsx Experience.tsx Work.tsx Skills.tsx Proof.tsx Contact.tsx Footer.tsx
  three/ ParticleSphere.tsx Starfield.tsx ParticleRing.tsx
  ui/ Button.tsx Chip.tsx Card.tsx Modal.tsx RevealText.tsx Scramble.tsx
/data
  content.ts            // ALL copy and links from this file as typed data
/public
  resume.pdf            // owner adds; see Open questions
  og.png                // social preview 1200×630
```
Keep **all copy in `/data/content.ts`** so text can be edited without touching components.

---

## 9. Responsive behaviour

- **≥1280px**: full layout, frame lines, right-edge Roman index, custom cursor, pinned horizontal project strip.
- **768–1279px**: no custom cursor; index hidden; grid collapses to 6 columns; strip still pinned.
- **<768px**: single column; header becomes menu button; **projects become a native horizontal scroll-snap row** (no pinning); skills grid becomes 1 column; hero sphere smaller (≈ 44vh) and moved above the headline; display type uses the small end of its `clamp()`; frame lines hidden; 16–20px gutters; no horizontal page scroll.
- Test widths: 360, 390, 768, 1024, 1440, 1920.

## 10. Accessibility, SEO & quality

- Semantic landmarks: `header`, `nav`, `main`, `section[aria-labelledby]`, `footer`; one `h1` (the hero headline); logical `h2/h3`.
- Skip-to-content link; full keyboard navigation; visible focus; modal traps focus, closes on `Esc`, returns focus.
- All decorative canvases/lines `aria-hidden="true"`; text effects never remove real text from the DOM.
- Respect `prefers-reduced-motion` and `prefers-color-scheme` (site is intentionally dark/light mixed; do not auto-invert).
- External links: `target="_blank" rel="noopener noreferrer"` with a visually hidden "opens in a new tab".
- Metadata: title `Umang Jain — Full-Stack Developer`, description from the hero text, Open Graph + Twitter card, canonical URL, favicon (UJ monogram), `Person` JSON-LD (name, jobTitle, email, sameAs = GitHub, LinkedIn, LeetCode, CodeChef, alumniOf/affiliation SGSITS).
- No lorem ipsum, no placeholder images, no console errors, no layout shift from fonts (use `display: swap` + size-adjust).

---

## 11. Content rules (guardrails — the AI must obey)

**Do**
- Use the copy above verbatim or lightly trimmed for space. Keep English simple and direct.
- Preserve "Implemented" vs "Planned" and "Demo / Ongoing / In development" statuses.
- Credit the coding stats as "as reported on my resume".

**Don't**
- ❌ Don't invent anything: user counts, business impact, performance numbers, employment dates, client names, demo URLs, repository URLs, testimonials, awards.
- ❌ Don't claim sole ownership of TrustZero or the CRM, or that Umang built Prashikshan AI's AI backend.
- ❌ Don't add CGPA, current semester, skill percentage bars, "expert" labels, or live LeetCode/CodeChef counters.
- ❌ Don't show the phone number by default.
- ❌ Don't add a source-code button to the CRM (private repo). Don't turn a profile URL into a project repo link.
- ❌ Don't add background music or autoplay sound. No auto-opening popups, no cookie banner unless analytics are added.
- ❌ Don't copy any reference site's logo, wordmark, illustrations, photos or exact copy (e.g. "ReFactory", "The Atelier", the reference agency's logo). Take only the *design ideas*.
- ❌ Don't show the "Open questions" section on the website.

## 12. Open questions (builder should leave sensible placeholders, never invent)

1. **Resume file** — add `public/resume.pdf`; until then the `View Resume` button should link to `/resume.pdf` and be easy to disable via a flag in `content.ts`.
2. **Portrait / photo** — none supplied; the site works without one. Leave an optional slot in the About facts card.
3. **Project links** — no live demos, videos or public repos supplied; add buttons only when URLs are placed in `content.ts`.
4. **SGSITS work dates / modules** — not supplied; show none.
5. **Availability line** — whether to say "Open to internships / freelance / full-time"; default: do not claim availability.
6. **Real project screenshots** — drop into the `<ProjectMedia />` slots when available.

## 13. Raw data (source of truth)

```yaml
name: Umang Jain
title: Full-Stack Developer
location: Indore, Madhya Pradesh, India
email: umangjain2805@gmail.com
education:
  degree: B.Tech in Information Technology
  institute: Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore
  period: September 2024 – June 2028 (expected)
links:
  linkedin: https://www.linkedin.com/in/umang-jain-1647a6335/
  github: https://github.com/umangjain2805
  leetcode: https://leetcode.com/u/umang0528/
  codechef: https://www.codechef.com/users/umang0528
  sgsits: https://www.sgsits.ac.in/
stats_as_reported_on_resume:
  leetcode_problems: "400+"
  codechef: "2-star (1400+)"
  jee_main_2024_air: 31494
footer: "Umang Jain — Building useful things. Learning along the way."
```

## 14. Acceptance checklist (the build is done when…)

- [ ] Hero shows a rotating particle sphere with callout lines; text is readable immediately; sphere disperses on scroll.
- [ ] Display type is wide, uppercase, with one italic-serif accent word per major headline.
- [ ] Fixed header, Roman-numeral section index, hairline frame, scroll-progress bar all work.
- [ ] Light (Work, Contact) and dark sections alternate with a smooth transition.
- [ ] All three projects appear in a horizontal strip with details modal, statuses, tech chips; no fake screenshots or links.
- [ ] Experience shows both roles with the correct dates/wording; no overclaiming.
- [ ] Skills grid matches the table exactly; no percentage bars.
- [ ] Stats, education, leadership present and worded as above.
- [ ] Contact section and footer match the copy; phone number not shown.
- [ ] Works at 360px–1920px, no horizontal scroll; keyboard accessible; reduced-motion respected.
- [ ] Lighthouse: Performance ≥ 90 desktop, Accessibility ≥ 95, SEO ≥ 95.
- [ ] No console errors; all external links open safely; content lives in `/data/content.ts`.
