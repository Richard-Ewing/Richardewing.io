# Sovereign Machine-Readable Design System Token Lock (`DESIGN_TOKENS_LOCK.md`)

**Authority**: `DESIGN_CONSTITUTION.md` + `ADR-0020`  
**Purpose**: Machine-locked token specification across our three properties (`richardewing.io`, `exogram.ai`, `careerwin.ai`). Agents MUST bind to the active property profile below and NEVER invent ad-hoc Tailwind palettes, import external theme libraries (`Nutlope/hallmark` themes, `styles.refero.design` external CSS), or average multiple UI references into generic SaaS layouts.

---

## 1. Profile 1: `richardewing.io` (Frozen Concept B Executive Editorial)

- **Target Audience**: CEOs, CFOs, COOs, VPs of Operations, Directors of Finance, Engineering Managers, Customer Support Managers, and Private Equity Operating Partners.
- **Core Surface Tokens**:
  - `canvas.primary`: `#FAF9F6` (Warm Cream - frozen primary background invariant)
  - `surface.card`: `#FFFFFF` (Crisp Editorial Card) with `1px solid #E5E7EB` (`border-zinc-200`)
  - `surface.warmSecondary`: `#F5F0EB` (Warm Linen Callout / Secondary Band)
  - `surface.executiveDark`: `#111827` (Dark Slate Boardroom Callout; body text inside MUST use `#FFFFFF` / `text-white` or `text-zinc-100`, NEVER `text-zinc-400`)
- **Ink & Semantic Accents**:
  - `ink.primary`: `#1A1A1A` / `#111827`
  - `ink.secondary`: `#3F3F46` (`text-zinc-700`) / `#52525B` (`text-zinc-600`)
  - `accent.telemetry`: `#0891B2` (`cyan-600`) / `#06B6D4` (`cyan-500`)
  - `status.positive`: `#047857` (`emerald-700` on light) / `#34D399` (`emerald-400` on `#111827`)
  - `status.warning`: `#B45309` (`amber-700` on light)
  - `status.risk`: `#BE123C` (`rose-700` on light)
- **Typography Scale & Font Pairing**:
  - `font.display`: Editorial Serif / `Space Grotesk` (`font-grotesk` / `font-serif`), tight tracking, high contrast.
  - `font.body`: `Inter` (`font-sans`), `15px-17px` comfortable reading measure (`60ch-72ch`), `leading-relaxed`.
  - `font.telemetry`: `JetBrains Mono` (`font-mono text-[10px] sm:text-xs uppercase tracking-widest tabular-nums`) - preserved explicitly for Concept B category eyebrows, unit-economics figures, and formula readouts.
- **Explicit Prohibitions on `richardewing.io`**:
  - **HARD BAN** on `@splinetool/react-spline` and `@splinetool/runtime` (`~970 KB` duplicate 3D engine + `'wasm-unsafe-eval'` CSP tax). Existing isolated Three.js / `@react-three/fiber` scenes (`components/home/HeadsetScene.tsx`, `app/components/canvas/NeuralSubstrate.tsx`) and `app/page.tsx` are frozen until Oct 6, 2026.
  - **HARD BAN** on liquid-glass WebGL distortion, scroll-jacking, purple-neon AI gradients, and section-cutting brochureware rules.

---

## 2. Profile 2: `exogram.ai` (Spatial Intelligence & Verifiable Action Governance)

- **Target Audience**: CTOs, CISOs, Principal Platform Architects, AI Infrastructure Leads, and Risk Officers.
- **Core Surface & Governance Status Tokens**:
  - Tactile Living Tile grid with crisp `1px` structural borders, zero ornamental fluff, and sub-50ms state feedback.
  - `gate.ALLOWED`: High-contrast Emerald (`#10B981` / `bg-emerald-500/10 border-emerald-500/30 text-emerald-400`)
  - `gate.BLOCKED`: High-contrast Rose (`#F43F5E` / `bg-rose-500/10 border-rose-500/30 text-rose-400`)
  - `gate.ESCALATE`: High-contrast Amber (`#F59E0B` / `bg-amber-500/10 border-amber-500/30 text-amber-400`)
  - `provenance.tierBadges`: Monospace `L1 RAW EVENT` -> `L2 ATOMIC CLAIM` -> `L3 ORG SYNTHESIS` badges with inspectable SHA-256 state hashes (`tabular-nums`).
- **3D & Spatial Authoring Rules (`Spline / Hana -> R3F Pipeline`)**:
  - Never install `@splinetool/runtime` alongside `three`. Use Spline 3D or Spline Hana strictly as an **upstream authoring studio**, exporting optimized `.glb` geometry or `@react-three/fiber` JSX.
  - Gate every spatial canvas behind `next/dynamic(..., { ssr: false })`, `IntersectionObserver` viewport activation, and a mandatory static `.webp` poster fallback whenever `prefers-reduced-motion: reduce` is active.

---

## 3. Profile 3: `careerwin.ai` (Mass-Appeal Consumer Empowerment)

- **Target Audience**: Everyday job seekers across all industries and experience levels (nurses, teachers, operations coordinators, retail managers, engineers, new grads).
- **Core Surface & Copy Tokens**:
  - `canvas.paper`: Warm Paper (`#FDFBF7` / `#FAF7F2`) paired with energetic Coral action accents (`#F97316` / `#EA580C` / `#E11D48` coral-terracotta spectrum) and deep charcoal ink (`#18181B`).
  - `copy.readingLevel`: Strict **6th-grade reading level**. Active, encouraging, plain English. Zero consulting jargon, zero elitist executive buzzwords, zero developer acronyms.
  - `mobile.ergonomics`: Every interactive button, drill card, option chip, and drawer close control MUST maintain `>= 44px x 44px` mobile thumb target bounds with zero horizontal overflow at `390px` viewport width.
  - **HARD BAN** on heavy 3D WebGL/WASM runtimes that drain mobile battery or degrade Largest Contentful Paint on mid-tier phones.

---

## 4. The Anti-Averaging Decision Ledger (Mobbin Reference Rule)

When querying `mobbin_mobbin` MCP (`search_flows`, `search_screens`, `search_sections`) for UX interaction mechanics:
1. **Never Average Multiple Layouts**: Combining header A, card grid B, and drawer C produces generic SaaS mush. Choose **one** primary structural flow sequence for the target interaction (for example, Stripe's progressive checkout drawer sequence or Linear's keyboard-accessible filter bar).
2. **Flow Mechanics Only, Sovereign Tokens Always**: Extract only the *state progression, progressive disclosure order, empty/loading/error handling, and mobile ergonomics* from Mobbin. Render 100% of colors, fonts, borders, and copy through the active property profile above.
3. **4-Line Provenance Note**: Before mutating a complex multi-step UI flow in `.scratch/` or an implementation plan, record a compact 4-line provenance block:
   - `Property Profile`: (`richardewing.io` | `exogram.ai` | `careerwin.ai`)
   - `Dominant UX Flow Reference`: (Single chosen flow mechanics pattern + `mobbin_url` if queried)
   - `Rejected Conflicting Pattern`: (What layout/chrome from external references was intentionally discarded)
   - `Preserved Commercial Hooks`: (Exact CTAs, `/schedule?source=` params, checkout drawers, and `/api/*` endpoints verified via `verify-ui-integrity.mjs`)
