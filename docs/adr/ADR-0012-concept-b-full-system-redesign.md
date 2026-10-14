# ADR-0012: Concept B Full Website System Redesign & Advisory Route Decoupling

## Context
The production deployment of richardewing.io required a unified design system and identity transition to the approved Concept B (Human-First and Immersive Executive Operating System) direction. Previously, the site featured fragmented styling, disconnected color palettes, and legacy redirects (notably redirecting /advisory to /services) that prevented executive advisory offerings from rendering as an independent primary route. Furthermore, the website needed to reconcile 174+ peer-reviewed and verified publications, provide an interactive 5-step Reality Check unit economics calculator, and render an interactive 5-tier isometric architectural stack while preserving SEO equity, sitemap integrity, and Cloudflare Workers edge deployment invariants.

## Decision
1. **Unify Concept B Design Language**: Adopted the approved warm ivory (#FBF8F3), forest green (#1E3327), charcoal slate (#19211D), and bronze gold (#D09A55) design system across all 12 primary pages and editorial subroutes.
2. **Decouple Advisory Route**: Removed stale legacy redirects for /advisory in both middleware.ts and next.config.ts, allowing the dedicated Concept B Executive Advisory page (app/advisory/page.tsx) to render natively with zero redirect overhead.
3. **Interactive Diagnostics & Calculations**: Deployed the 5-step Reality Check stepper with transparent unit economics modeling (28.53% benchmark waste rate across unused capacity, inefficient workflows, over-provisioning, and low-value use cases) and zero synthetic mocks.
4. **Preserve Research & Publications Corpus**: Integrated the full 174+ verified publication inventory from app/lib/research-corpus.ts into components/research/research-explorer.tsx with client-side multi-filter and keyword search.
5. **Edge Starling Murmuration**: Implemented high-efficiency 2D canvas starling flocking simulation with device pixel ratio capped at 1.5, viewport intersection observer pausing, and prefers-reduced-motion fallback.

## Deciders
@richardewing, Steve Jobs (Simplicity & Taste), Paul Graham (Human Writing Standard), Karri Saarinen (UI Craftsmanship), Code Architect, QA Auditor.

## Status
Accepted

## Consequences
Positive:
- Unified, editorial-grade visual design matching the approved 12-page board with authentic headshots from D:\Instashots.
- Direct edge serving of /advisory with zero hops or 308 redirects.
- Full preservation of 174+ publication citations, canonical URLs, and structured data schemas.
- Interactive diagnostics and frameworks delivering immediate, tangible value to executive visitors without paywalls.
- 100% adherence to Sovereign QA gates: zero secret key leaks, zero em-dashes, and clean Cloudflare Workers edge builds.

Negative/Considerations:
- Framer Motion v12 required custom type declarations (types/framer-motion.d.ts) due to local package export constraints.
- Legacy external links to /advisory.html now route directly to /advisory instead of /services.
