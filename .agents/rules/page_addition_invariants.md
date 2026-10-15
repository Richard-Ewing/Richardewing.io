# Page Addition & Route Modification Invariants (Concept B Protocol)

Whenever ANY new page, subpage, tool, curriculum lesson, or comparison route is added or modified in `richardewing.io`, execution must strictly comply with the [Universal Design Constitution](file:///d:/Antigravity_RichardEwing.io/DESIGN_CONSTITUTION.md) and the following 7 invariants:

---

### 1. Mandatory Concept B Visual Conformance
* **Color Palette Invariants**:
  - Background: Warm cream paper (`--paper: #f4f1e9` / `#FAF9F6`).
  - Headers & High-Contrast Surfaces: Deep British racing green (`--forest2: #162e26`).
  - Badges & Accents: Muted gold (`--gold: #b77a35`) and terracotta/rose (`--rose: #c86d56`).
  - Text: Dark ink (`--ink: #1a1a1a` / `#1e2924`) meeting WCAG AAA contrast.
* **Typography**:
  - Display & Page Headlines: `font-serif` (`Playfair Display`).
  - Body & Descriptions: `font-sans` (`DM Sans`).
  - Equations, Code, Metadata & Dates: `font-mono` (`DM Mono`).
* **Absolute Prohibitions**:
  - Zero raw dark-mode terminal cards, cyber gradients, or neon cyan/purple badges.
  - Zero superficial "vibe coding" (e.g., setting a paper background on the parent container while leaving cold brutalist cards inside).

---

### 2. Centralized Component Mandate
* Pages MUST consume centralized editorial components from `components/editorial/` rather than authoring ad-hoc inline card structures:
  - `PublicationCard`: All research essays, articles, and whitepapers.
  - `ToolCard`: All diagnostic calculators, audits, and interactive tools.
  - `ConceptCard`: All canonical concepts and ontology nodes.
  - `EditorialCard`, `MetricPanel`, `QuoteBlock`, `ChartPanel`: Structured callouts, quotes, and economic figures.
  - `AccordionItem`: Click-to-expand FAQs, curriculum outlines, and disclosure sections.
* **Hydration Safety**: Interactive card components must support dual mode (navigational `<Link>` vs selection `<div role="button">`) to prevent nested `<a>` hydration violations.

---

### 3. Route Inventory & Coverage Matrix Synchronization
* Every newly created, renamed, or migrated route MUST be immediately cataloged in:
  1. `docs/FULL_SITE_ROUTE_INVENTORY.md`: Documenting URL path, page title, page family, component source, and primary CTA.
  2. `docs/ROUTE_COVERAGE_MATRIX.md`: Recording status, schema type, responsive validation, and Concept B conformance.

---

### 4. Content & Calculation Preservation Invariant
* **Zero Content Loss**: Never truncate, summarize, or substitute authored text with generic AI placeholder paragraphs.
* **Full Functional Wiring**:
  - Tools and calculators must preserve all mathematical formulas, state hooks, and step-by-step flows.
  - Tool directory views must preserve all 25 diagnostic tools and all executive role filter tabs (CFO, CPO, CTO, EM, FinOps) without truncation.

---

### 5. Mandatory Human Writing Standard (HWS v2.0 / AI Smell Detection)
* Every new page, new content, or page modification MUST strictly enforce the **Human Writing Standard (HWS v2.0 / REWS v2.0)** and the 30-Point AI Smell Detection Checklist (`c:\Users\richa\Downloads\HUMAN_WRITING_STANDARD_AI_SMELL_DETECTION_CHECKLIST.md` & `.agents/skills/lived-experience/SKILL.md`):
  - **Zero Banned AI Buzzwords & Marketing Clichés**: Strictly eliminate filler and synthetic jargon including:
    - *unlock / unlocking / unlocks* (replace with *access, get, download, open, qualify for, generate*)
    - *delve / delve into* (replace with *examine, look at, break down, analyze*)
    - *seamless / seamlessly* (replace with *direct, frictionless, simple, automated*)
    - *robust / robustly* (replace with *resilient, proven, stable, reliable*)
    - *leverage / leveraging* (replace with *use, apply, deploy, exploit*)
    - *the bottom line* as a formulaic summary/punchline (replace with *Executive Readout, Financial Readout, What It Costs, The Takeaway*)
    - *missing layer / missing piece* (replace with concrete operational facts)
    - *production-ready* (replace with *battle-tested, field-tested, production-tested, deployed*)
    - *empower, foster, game-changer, revolutionary, transformative, navigate the landscape, at the end of the day, let that sink in, read that again, full stop, here is the thing*.
  - **Start With the 10th Thought**: Avoid the obvious first predictable framing or corporate boilerplate. Look for the less-obvious human observation, tension, irritation, admission, or contradiction underneath the topic.
  - **Concrete Observed Evidence Over Abstraction**: Prefer something that broke, worked, cost money, took longer, or changed the writer's mind over abstract generalities.
  - **Specific Job Titles Mandate**: Write for the whole floor, not the server room. Never use lazy umbrella labels like "middle managers" or "the C-suite." Always use specific actual job titles: CEO, CFO, COO, Customer Support Manager, Product Ops Lead, Engineering Manager, VP of Operations, Director of Finance, etc.
  - **Zero LinkedIn Voice & Formulaic Symmetry**: Eliminate formulaic bridge phrases, artificially balanced lists of three, and manufactured vulnerability.
  - **The Final Human Test**: *"Would Richard actually say this out loud?"* If not, rewrite it.

---

### 6. SEO, Schemas & Canonical Standard
* **Title Template Suffix Invariant**:
  - `app/layout.tsx` applies `template: '%s | Richard Ewing'`.
  - Child pages MUST NEVER hardcode `| Richard Ewing` in `metadata.title`.
  - Child titles must be concise (42 characters or less) so the rendered title remains strictly under or equal to 60 characters.
* **Meta Descriptions**:
  - Strictly under 155 characters (average 140 to 150 characters).
  - Active voice, high click-through, communicating direct commercial or diagnostic utility.
  - Zero marketing buzzwords (eliminate "unlock", "seamless", "delve", "robust").
* **Mandatory Dual-Schema Architecture (application/ld+json)**:
  - Every page or hub must embed BOTH:
    1. **Primary Entity Schema**: `WebApplication` (calculators/diagnostics), `Article` (methodology/essays with author & publisher), `Service` (advisory offerings), or `CollectionPage` (case studies/archives).
    2. **Hierarchical Breadcrumbs (`BreadcrumbList`)**: Connecting `Home` -> `[Section]` -> `[Page]` to guarantee proper topical hierarchy indexing in Perplexity and Google.
* **Social & Twitter Card Invariant**:
  - Every public route must declare both `openGraph` and `twitter`:
    - `twitter.card`: `'summary_large_image'`
    - `twitter.title`: matching page title
    - `twitter.description`: active voice summary
    - `twitter.images`: dynamic OpenGraph card endpoint (`/api/og?title=...&category=...`)
* **Topical Authority URL Alias Protocol**:
  - Any strategic search query or audit-recommended alias (such as `/ai-cost-audit`, `/rd-capital-audit`, `/ai-spend-calculator`) must be mapped via permanent 308 redirect in `next.config.ts`.
  - Add all redirected aliases to `REDIRECT_DISALLOWED` in `app/sitemap.ts` to prevent duplicate or conflicting indexation.
* **Sitemap Synchronization**:
  - Register all new non-redirected canonical pages in `app/sitemap.ts` with explicit change frequency (`weekly` for hubs/diagnostics) and priority (`0.95`).

---

### 7. Mandatory Turn-End Verification Gate
* No code-modifying turn introducing or altering a page may conclude without passing:
  1. `node .agents/scripts/verify-qa.mjs` (0 errors, 0 warnings, zero secrets, zero em-dashes, zero banned AI buzzwords).
  2. `npm run build` (Clean Next.js compilation across all routes).
  3. `npm run deploy:worker` (Live Cloudflare Workers Edge deployment via Wrangler).
  4. `git add -A && git commit -m "..." && git push origin main && git status` (Clean working tree).
