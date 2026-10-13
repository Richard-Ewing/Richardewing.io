# ADR-0009: Product Economist Master Identity and Three-Path Commercial Architecture

## Context
Previously, `richardewing.io` presented all commercial offers as a single vertical value ladder ($0 -> $29 -> $450 -> $2,500 -> $7,500 -> $10k/mo) and mixed legacy offer names across `/services` FAQs, `/pricing`, `/ai-integration`, and `AdvisoryCTA.tsx`. Furthermore, the $7,500 0-to-1 AI Product Build Sprint (a 21-day software engineering build) was stacked inline between a 7-day P&L turnaround audit ($2,500) and a Fractional CPO retainer ($10,000/mo), even though a buyer looking to fix an existing product's P&L has a different intent than a buyer commissioning a new 0-to-1 AI product or a Private Equity partner conducting M&A due diligence. Finally, buyers of the $29 / $79 Operating Kit only received static downloadable files without direct onboarding into the interactive browser workspace (`/workspace`).

## Decision
1. **Establish "Product Economist" (and "Product & AI Economist") as the Master Umbrella Identity**: Position Product Economics as the overarching discipline uniting Richard Ewing's 15+ years scaling enterprise B2B SaaS ($0 to $25M ARR at Tyler Technologies, $20M P&L turnaround +200% YoY, $5M waste reduction, CS + Finance MBA) with AI Unit Economics as his specialized edge.
2. **Split Commercial Offers into 3 Distinct Buying Paths (`buyingPath` in `lib/platform/offers/offers.ts`)**:
   - **Path A (Fix & Scale an Existing Product's P&L)**: Free Diagnostic ($0) -> $29 Operating Kit (+ $79 Complete Bundle) -> $450 1-on-1 P&L & AI Tear-Down -> $2,500 7-Day Product Economics Turnaround Sprint -> $10,000/mo Fractional CPO.
   - **Path B (Build a New 0-to-1 AI Product or Authority Engine)**: $7,500 0-to-1 AI Product & Authority Engine Build Sprint (21-day shipped software deployment).
   - **Path C (Fractional CPO Leadership, PE Diligence & Sponsored Research)**: $10,000/mo Fractional CPO / Product Economist Retainer, $15,000 PE & M&A Product P&L Due Diligence, and $2,500+ Sponsored Benchmark Research.
3. **Wire `/workspace` and `/tools` into `/toolkit-success`, `/toolkit`, `/services`, and `/pricing`**: Upgrade `CustomerWorkspaceStore` (`lib/workspace/customerWorkspace.ts`) and `/workspace` (`app/workspace/page.tsx`) with `localStorage` persistence (`re_product_economist_workspace_v1`), editable company P&L parameters, local scenario saving, connected diagnostic calculators, and Markdown/printable Board Report exports.
4. **Reconcile Legacy Copy Across All Surfaces**: Align `/services` FAQs, `/pricing`, `/ai-integration`, `AdvisoryCTA.tsx`, `app/lib/products.ts`, and `/glossary` search placeholder (`{glossaryTerms.length}+` instead of hardcoded `430+`).

## Deciders
@richardewing, Keith Rabois, Brian Balfour, Paul Graham, Code Architect

## Status
Accepted

## Consequences
Positive:
- Eliminates buyer confusion by separating P&L diagnostic/turnaround buyers (Path A), 0-to-1 AI software build buyers (Path B), and executive retainer / PE diligence buyers (Path C).
- Increases perceived and actual value of the $29 / $79 Operating Kit by pairing downloadable Excel/CSV/MD files with a persistent, interactive browser P&L studio (`/workspace`).
- Removes all pricing and scope contradictions across `/services`, `/pricing`, `/ai-integration`, `AdvisoryCTA.tsx`, and `/glossary`.

Negative/Considerations:
- Browser workspace persistence (`localStorage`) is device-local by default unless synchronized with authenticated vault storage in future iterations.
- Requires keeping `lib/platform/offers/offers.ts` and `app/lib/products.ts` synchronized whenever Stripe payment links or tier prices are updated.
