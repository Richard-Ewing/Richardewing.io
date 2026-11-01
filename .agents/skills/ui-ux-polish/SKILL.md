---
name: ui-ux-polish
description: Enforces executive visual design standards, high-contrast dark mode typography (text-white, text-zinc-100), Framer Motion accordions (FAQItem), dynamic layout math, and zero visual cliché tropes. Use this skill when designing or refining UI/UX.
---

# UI/UX Refinement & Premium Polish

To elevate Web Applications into premium, executive-level products (particularly targeting PE sponsors, VPs of Engineering, and CFOs), interfaces must look state-of-the-art and function flawlessly.

## 1. Visual Aesthetics & Design System

1. **Curated Color Palettes**:
   - Avoid generic browser-default colors (plain red, green, blue).
   - Use tailwind tones combined with premium background colors (e.g., `#F5F0EB` linen, dark slate, deep indigo/cyan radial glows).
4. **Dark Mode Text Contrast**:
   - When using dark backgrounds (`bg-zinc-900`, `bg-black`, `#18181b`), you MUST use ultra-high contrast text utilities (`text-white`, `text-zinc-100`, `text-zinc-200`) instead of mid-tier greys like `text-zinc-400` which become unreadable.
2. **Developer-Aesthetic Grids**:
   - Overlay clean developer graticule line meshes and radial background glows to create futuristic layout depth.
3. **Smooth Shading and Gradients**:
   - Implement slow color transitions and subtle border/shadow scaling.
   - Use CSS gradients for dynamic thumbnails (e.g., categorizing articles dynamically with specific gradient bounds).

## 2. Dynamic Micro-Animations

1. **Smooth FAQ Accordions**:
   - Always replace native `<details>` summaries with Framer Motion or CSS height transition wrappers (`FAQItem`) to ensure smooth height-reveals.
2. **Pill-Style Transitions**:
   - Use Framer Motion's `layoutId` for sliding pill filters, ensuring fluid animations when toggling states (e.g., "All" vs "Most Popular").
3. **Scroll-Progress Meters**:
   - Bind timeline lines or progress bars to `scrollYProgress` using Framer Motion to engage users as they read.

## 3. SEO & Structured Data

1. **Structured FAQ Schemas**:
   - Inject `FAQPage` JSON-LD schemas alongside FAQ accordions so search engines parse the question-answer pairs correctly.
2. **ItemList Schemas**:
   - Output structured lists for indexes like articles or frameworks to boost domain search authority.
3. **Dynamic Social Card Metadata**:
   - Ensure every dynamic route implements `generateMetadata` generating canonical tags, descriptions, titles, and points to the principal's headshot image (`/assets/images/headshot.jpg`).

## 4. Architectural Segregation (Server vs Client)

1. **Preserve SSR Metadata**:
   - Keep page-level routes as Server Components so Next.js can resolve and inject metadata, headers, and canonical tags.
2. **Isolate Client Code**:
   - Place client-specific hooks (`useState`, `useEffect`, `localStorage`, `framer-motion`) into isolated leaf components (e.g., `ContactForm.tsx`, `SyllabusPreview.tsx`, `ResearchTimeline.tsx`) and import them into Server page routes.
3. **Prevent SSR Mismatches**:
   - Wrap any direct browser-state accesses (like `localStorage` checks) inside React `useEffect` hooks or `typeof window !== 'undefined'` bounds to prevent dehydration errors during build rendering.

## 5. Sovereign Token Lock & `mobbin_mobbin` MCP Flow Sequencing (ADR-0020)

Before designing, redesigning, or polishing any UI component or flow, read [`references/DESIGN_TOKENS_LOCK.md`](references/DESIGN_TOKENS_LOCK.md) and enforce this strict separation between **UX flow mechanics** and **visual brand tokens**:

1. **Mobbin MCP Hierarchy (`best-practices` -> `search` / `redesign-screen`)**:
   - Use the connected **`mobbin_mobbin` MCP** (`search_flows`, `search_screens`, `search_sections`) strictly to ground **UX flow sequencing, multi-step onboarding, checkout/upgrade drawer mechanics, empty/loading/error states, and mobile table progressive disclosure** in real shipped products.
   - **Never copy external visual themes**: Every color, surface (`#FAF9F6` Warm Cream on `richardewing.io`), font (`Space Grotesk` / `Inter` / `JetBrains Mono`), and border MUST come exclusively from [`references/DESIGN_TOKENS_LOCK.md`](references/DESIGN_TOKENS_LOCK.md) and `DESIGN_CONSTITUTION.md`.
2. **Anti-Averaging Decision Ledger**:
   - Never average three different Mobbin screens into a generic middle-ground layout. Lock **one** dominant structural sequence and note the 4-line provenance block (`Property Profile`, `Dominant UX Flow Reference`, `Rejected Conflicting Pattern`, `Preserved Commercial Hooks`).

## 6. Commercial & Structural AST Preservation (`verify-ui-integrity.mjs`)

Before refactoring any existing `.tsx` route or interactive component:
1. Run `node .agents/scripts/verify-ui-integrity.mjs --before <file-or-dir>` to snapshot all `href` destinations, `<ScorecardCheckoutDrawer />`, `<PayGate />`, `<AdvisoryCTA />`, `<StructuredData />`, `<form>` `/api/*` handlers, and `<h1>`/`<h2>` counts across the component graph into `.scratch/ui-ledger/before.json`.
2. After completing edits, run `node .agents/scripts/verify-ui-integrity.mjs --kept <file-or-dir>` to verify that moving JSX into `"use client"` leaves preserved 100% of revenue links, checkout triggers, and wired form endpoints.

## 7. The 5 Objective Headless DOM Assertions

Every new or refactored UI surface must satisfy all five objective DOM checks (with subjective brochureware section-cutting rules strictly banned):
1. **Zero Horizontal Overflow**: `document.documentElement.scrollWidth <= window.innerWidth` (`horizontalOverflow === false`) at both `390px` (mobile) and `1440px` (desktop). Never use `w-[100vw]` where scrollbar width triggers horizontal bleed.
2. **Zero Console & Network Asset Errors**: `0` uncaught runtime console errors and `0` HTTP `4xx/5xx` failed local asset requests.
3. **Verified Font Readiness**: Confirm `await document.fonts.ready` and `document.fonts.check(...)` before evaluating visual screenshots (`desktop-early` at `100ms`, `desktop` at `1440x900`, `mobile` at `390x844` saved to `.scratch/shots/`).
4. **WCAG `>= 4.5:1` Body Contrast**: Maintain `>= 4.5:1` contrast on all body and metadata text (never place low-contrast `text-zinc-400` body copy on `#111827` dark callouts or `#FAF9F6` warm cream cards).
5. **Mobile Ergonomics & CTA Clearance**: Enforce `>= 44px` height/width on primary mobile tap targets and zero bounding-box overlap on above-the-fold CTAs.

