# ADR-0015: Holistic Ecosystem Interconnectivity & Exogram Conversion Architecture

## Context
During a comprehensive ecosystem audit of `richardewing.io` following the Option C Post-Economics AEO and In-Scorecard Conversion Engine rollout (ADR-0014), we identified a structural gap across our software flagship and conversion funnel surfaces:

1. **Orphaned Exogram Flagship & Sub-Pages**: While `/exogram` featured an interactive five-stage Runtime Boundary Simulator (`ExogramSandbox`), it behaved like a standalone product brochure. It lacked a dedicated lead-capture blueprint, had no inline commercial checkout drawer (`ScorecardCheckoutDrawer`), did not link to its own sub-routes (`/exogram/architecture`, `/exogram/demo`, `/exogram/docs`, `/exogram/use-cases`, `/exogram/roadmap`), and routed all primary CTAs to generic `/advisory` rather than a contextual Cal.com booking pipeline (`/schedule?source=exogram`).
2. **Broken External Tool Bridges**: In `app/tools/tools-content.tsx`, the `exogram-sandbox` and `exogram-analyze` cards pointed to external URLs (`https://exogram.ai/proving-ground` and `https://exogram.ai/analyze`) that were not routed on the primary domain, leaking high-intent engineering and executive traffic out of the conversion loop.
3. **Unwired Client Forms (Zero-Mock Invariant Violation)**: Three high-intent interactive intake forms (`app/exogram/demo/ExogramDemoForm.tsx`, `app/speaking/SpeakingBookingForm.tsx`, and `components/ai-product-builder/IntakeApplicationForm.tsx`) relied on `setTimeout` state toggles without sending their payloads to `/api/lead-capture` or `/api/leads`. Furthermore, `IntakeApplicationForm.tsx` rendered white text on a white success card (`text-white` on `bg-white`), making the confirmation heading invisible.
4. **Incomplete Schedule Source Context**: `components/schedule/schedule-diagnostic-banner.tsx` only recognized four diagnostic tool sources (`pdi`, `aueb`, `ev-se`, `aper`), leaving visitors arriving from `/exogram`, `/security`, `/runtime-architecture`, `/careerwin`, `/speaking`, or `/ai-product-builder` without tailored pre-call framing.

## Decision
We are upgrading `richardewing.io` to enforce **Holistic Ecosystem Interconnectivity ("Everything Feeds Everything")** and converting the Exogram cluster into a closed-loop lead generation, technical verification, and commercial booking engine:

1. **Exogram Flagship Conversion Upgrade (`app/exogram/page.tsx` & `components/exogram/ExogramBlueprintCapture.tsx`)**:
   - Created `ExogramBlueprintCapture.tsx`, a lead-capture component offering *"The Deterministic Runtime Boundary Blueprint: 5 Invariants for Enterprise Agent Deployments"* (including a copyable EAAP v1.0 YAML policy manifest) wired to `POST /api/leads`.
   - Mounted `<ExogramBlueprintCapture />` and `<ScorecardCheckoutDrawer source="exogram" />` directly on `/exogram` so engineering leaders, CTOs, and CISOs can purchase the $29/$79 Survival Kit, book a $450 Working Session, or schedule a $2,500 Sprint without leaving the page.
   - Added a 6-card **Exogram Technical Deep-Dive & Verification Hub** connecting `/exogram` to `/exogram/architecture`, `/exogram/demo`, `/exogram/docs`, `/exogram/use-cases`, `/exogram/roadmap`, and `/tools/mcp-security-auditor`.
   - Wired all Exogram sub-pages (`docs`, `docs/[slug]`, `architecture`, `use-cases`, `roadmap`) with contextual `/schedule?source=exogram` and `/exogram/demo` conversion bridges.
2. **Real Backend Wiring for All Client Forms**:
   - Wired `ExogramDemoForm.tsx`, `SpeakingBookingForm.tsx`, and `IntakeApplicationForm.tsx` to `POST` to `/api/lead-capture` and `/api/leads` with structured payloads, error handling, and post-submission fast-track Cal.com booking links (`/schedule?source=...`).
   - Fixed the invisible `text-white` heading bug on the `IntakeApplicationForm.tsx` confirmation card (`text-zinc-900 font-semibold`).
   - Updated `/api/lead-capture/route.ts` to log leads and return `{ success: true }` gracefully when `RESEND_API_KEY` is absent in local/preview environments while delivering emails via Resend in production.
3. **16-Source Contextual Schedule Banner (`components/schedule/schedule-diagnostic-banner.tsx`)**:
   - Expanded `SOURCE_CONFIGS` from 4 sources to 16 ecosystem sources (`exogram`, `exogram-demo`, `exogram-docs`, `runtime-architecture`, `security`, `careerwin`, `speaking`, `ai-product-builder`, `advisory-cta`, `mcp-security-auditor`, `shadow-ai`, `cfo-capitalization-audit`, plus `pdi`, `aueb`, `ev-se`, `aper`).
4. **Internal Tool Hub & Edge Redirect Hardening (`app/tools/tools-content.tsx` & `middleware.ts`)**:
   - Repointed `exogram-sandbox` to `/exogram/demo` and `exogram-analyze` to `/exogram/architecture`.
   - Added clean path-only 301 redirects in `middleware.ts` (`EDGE_REDIRECTS`) for `/exogram/proving-ground`, `/exogram/analyze`, `/exogram/security`, `/exogram/pricing`, and `/exogram/blueprint`.
5. **Codification of Section 18 Mandate**:
   - Codified **Section 18: The Holistic Ecosystem Interconnectivity & Big-Picture Flywheel Mandate ("Everything Feeds Everything")** across `.agents/AGENTS.md`, `.agents/rules/always_on_mod_execution.md`, `.agents/skills/master-directive/SKILL.md`, `.agents/skills/spec-driven-development/SKILL.md`, and all 5 War Room agent definitions.

## Deciders
- @richardewing (Founder & Product Economist)
- Steve Jobs & Jony Ive (Board Room: Visual & Structural Clarity)
- Brian Balfour & Jim Collins (War Room: Closed-Loop Flywheel Systems)
- Keith Rabois & Ruth Porat (War Room: Commercial Unit Economics & Conversion)
- Aravind Srinivas & Lily Ray (War Room: AEO/GEO Citation Graph)
- Dan Guido & Simon Willison (War Room: Edge Redirect & API Security)
- Code Architect & QA Auditor (War Room: Technical Implementation & Verification)

## Status
Accepted

## Consequences
Positive:
- Eliminates dead-end brochure pages across the entire `/exogram` cluster; every technical deep-dive now feeds email blueprint capture, interactive sandbox verification, inline Stripe checkout, or contextual Cal.com booking.
- Achieves 100% compliance with the Zero-Mock Production Invariant across all client intake forms (`ExogramDemoForm`, `SpeakingBookingForm`, `IntakeApplicationForm`), ensuring zero lost executive leads.
- Preserves contextual continuity on `/schedule` across 16 ecosystem entry points so prospects see their exact technical or financial context above the Cal.com embed.
- Protects SEO/AEO link equity by routing legacy `/exogram/*` paths via clean 301 edge redirects without query-string concatenation bugs.

Negative/Considerations:
- Expanding `SOURCE_CONFIGS` to 16 sources requires keeping `schedule-diagnostic-banner.tsx` synchronized whenever new flagship products or diagnostic calculators are launched.
- `/api/lead-capture` logs payloads to worker stdout when `RESEND_API_KEY` is unconfigured in local development; production environments must maintain active Resend credentials and Supabase `lead_captures` table availability for persistent storage.
