# ADR-0014: Option C Post-Economics AEO & In-Scorecard Conversion Engine

## Context
During October 2026, two compounding market shifts reshaped how Founders, CEOs, CFOs, VPs of Product, Engineering Managers, and Customer Support Leads discover and purchase AI execution help:
1. **Top-of-Funnel Search Shift (Query Fan-Out & Hands-On Execution Pain)**: While CFOs and boards remain focused on AI unit economics and ASC 350-40 compliance, operational buyers are urgently searching for hands-on execution relief across five dominant topics: rescuing vibe-coded prototypes stuck at 80% completion (`Regeneration Regress`), automating departments with Claude Code and Model Context Protocol (`MCP`) servers without `MCP Tool Poisoning`, building Answer Engine Optimization (`AEO`) and `llms.txt` citation engines, transitioning from flat seat pricing to hybrid credit packaging, and passing live AI PM builder interviews.
2. **Conversion Drop-Off Between Diagnostics and Checkout**: Visitors running interactive calculators (`/reality-check`, `/tools/aueb`, `/tools/pdi`, and the remaining `/tools/*` testbeds) or landing on programmatic Q&A spokes (`/answers/*`) previously had to navigate away to `/toolkit` or `/services` to purchase a template or book a session. Every extra page hop diluted buyer urgency right at the moment the calculator exposed their dollar risk.

## Decision
We adopt the **Option C Dual-Engine Funnel ("Build, Unstick, Automate & Win" + Commercial Reality Moat)** across `richardewing.io`:
1. **Zero-Click In-Scorecard Conversion Drawer (`app/components/ScorecardCheckoutDrawer.tsx`)**:
   - Created a reusable client component that renders a 3-tier checkout ladder (`$29` Survival Kit / `$79` Complete 13-Playbook System toggle, `$450` 60-Min Live Build/Automation/Unstick Session, and `$2,500` 14-Day Automation/Turnaround Sprint + `$7,500` 21-Day 0-to-1 Build Sprint + Cal.com scoping link) plus a `compact={true}` sticky sidebar mode.
   - Mounted `<ScorecardCheckoutDrawer />` across `/reality-check` (both in the sticky right-hand sidebar across all 5 steps and below the final scorecard), `/tools/aueb`, `/tools/pdi`, `app/components/DiagnosticCTA.tsx` (covering all remaining `/tools/*` routes), `/answers`, and `/answers/[topic]/[persona]/[questionSlug]`.
2. **Reframed Commercial Offer Positioning (`app/lib/products.ts`, `app/toolkit/page.tsx`, `app/services/page.tsx`)**:
   - Repositioned the `$29` Survival Kit, `$79` Complete 13-Playbook System, `$450` 60-Min Session, `$2,500` 14-Day Sprint, `$7,500` 21-Day Sprint, `$10,000/mo` Embedded Fractional CPO & AI Builder Partner retainer, and `$15,000` Technical & AI Product Due Diligence around concrete "Build, Unstick, Automate & Defend" outcomes while preserving 100% of existing Stripe `paymentLink` URLs, prices, and section anchors.
3. **Massive Internet-Wide AEO Question & Answer Expansion (`app/lib/spoke-data.ts` & `app/answers/AnswersMatrixClient.tsx`)**:
   - Added 5 October 2026 topic clusters (`vibe-coding-production-rescue`, `mcp-agents-department-automation`, `aeo-geo-llms-txt-lead-engines`, `ai-pricing-token-margins`, `ai-pm-career-cfo-board-defense`) containing 40 concrete Q&As authored under the `HWS-AEO v3.0` standard (35-word direct answer citation snap followed by lived human reality), expanding `SPOKE_MATRIX` to 93+ Q&As.
   - Added instant client-side search, topic filter pills, and role filter pills on `/answers` while keeping 100% of Q&A HTML and `FAQPage` JSON-LD server-rendered in the initial DOM payload.
4. **Glossary & `llms.txt` Synchronization**:
   - Added 8 canonical October 2026 definitions (`stuck-at-80-percent-trap`, `regeneration-regress`, `mcp-tool-poisoning`, `query-fan-out-aeo`, `systems-of-action`, `one-person-department`, `hybrid-credit-packaging`, `human-in-the-loop-slack-gate`) to `app/glossary/terms.ts` and `app/glossary/pillarsMapping.ts`, and synchronized `app/llms.txt/route.ts` and `app/llms-full.txt/route.ts`.

## Deciders
@richardewing, Paul Graham (Voice / HWS-AEO v3.0), Aravind Srinivas & Lily Ray (AEO / Query Fan-Out), Keith Rabois (Unit Economics & Conversion), Karri Saarinen (UI/UX), Code Architect

## Status
Accepted

## Consequences
Positive:
- Captures high-intent builder, operator, and executive search traffic across ChatGPT Search, Perplexity, Claude, and Google AI Overviews via 40 new `Query Fan-Out` Q&A spokes and 8 canonical glossary entities without losing the institutional Product Economist moat.
- Eliminates multi-hop checkout friction by embedding direct Stripe checkout links (`$29` / `$79` / `$450` / `$2,500` / `$7,500`) and Cal.com scheduling directly inside every diagnostic scorecard and programmatic answer spoke.
- Preserves 100% SSR indexability on `/answers` while giving human visitors instant search and persona filtering across 93+ executive Q&As.
Negative/Considerations:
- Expanding `SPOKE_MATRIX` to 93+ programmatic routes increases static generation surface area during `npm run build` and requires `app/llms.txt/route.ts` and `app/llms-full.txt/route.ts` to stay synchronized whenever new topic clusters are introduced.
- All future additions to `app/lib/spoke-data.ts` and `app/glossary/terms.ts` must strictly pass `verify-qa.mjs` to enforce zero em-dashes and zero banned AI buzzwords across both the 35-word citation snap and the deeper operational breakdown.
