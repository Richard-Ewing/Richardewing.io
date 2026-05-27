# Skill: richardewing-conversion-accelerator

## Intent
Enforce conversion rate optimization best practices across all pages, glossary spokes, competitor comparison pages, and interactive calculators on `richardewing.io`.

## Policy Rules

### 1. High-Intent Glossaries (Strategy A)
* Any glossary term defined in `app/glossary/terms/` that has GSC traction (e.g., `hallucination-debt`, `ai-cogs`, `ai-cost-attribution`, `model-right-sizing`) must have a comprehensive, multi-paragraph definition detailing economic impact, risk dynamics, and structural remediation.
* These winners must have direct links to the relevant calculators (`/tools/aueb`, `/tools/pdi`) and explicit references to the paid advisory diagnostics.

### 2. Zero-Friction Lead Magnets (Strategy B)
* The dynamic page template at `app/glossary/[slug]/page.tsx` must render the zero-friction `NewsletterForm` (Checklist lead magnet) above the author bio card.
* The form must capture lead signals cleanly and append UTM analytics tags (`extraData={{ tool: 'glossary_' + slug }}`) for attribution tracking.

### 3. Competitor Comparison Optimization (Strategy C)
* All competitor comparison pages under `app/compare/` must render the `<AdvisoryCTA variant="compare" />` component at the bottom.
* Comparison matrices must contrast traditional infrastructure metrics against AI-specific unit economics (retry overhead, hallucination cost, prompt context decay).

### 4. Free Tool Conversion Bridges (Strategy D)
* Every free interactive diagnostic (PDI, AUEB, EV-SE, APER) must bridge to the paid $450 and $2,500 advisory services.
* The results view must render the `<AdvisoryCTA variant="tool-result" />` component to give high-scoring or at-risk users a direct path to book remediation.
* The `toolMapping` in `app/components/GlossaryToolCTA.tsx` must be maintained to associate GSC-winning terms to their respective calculators.
