# ADR-0027: First-Person Educational Advice & Cross-Domain Anti-Slop Gate

## Context
Follow-up organic search and UX evaluation around Google's Helpful Content criteria surfaced two risks across `richardewing.io`, `careerwin.ai`, and `exogram.ai`:
1. Several comparison pages, glossary auto-generators, ATS system breakdowns, resume guides, and use-case pages relied on detached third-person summary prose, repetitive `"In 2026, ..."` or consulting template boilerplate (`autoChecklist`, `autoHowToApply`), literal en-dashes/em-dashes (`\u2013` / `\u2014`), or flagged synthetic marketing terms (`robust`, `unlock`, `seamless`, `leverage`, `the bottom line`, `production-ready`).
2. Naively rewriting hundreds of programmatic pages with a small 7-slot prompt pattern would recreate recognizable AI-slop symmetry across sibling URLs. Converting high-intent routes instead requires a broad, non-repetitive **42-Angle First-Person Educational Advice** catalog grounded in `HWS v2.0` (`SKILL.md`), `HWS-AEO v3.0` (`30-to-45-word` factual top answers paired immediately with concrete lived operational advice), and deterministic sibling-opening de-duplication while keeping all three homepages frozen (`0` diff).

## Decision
1. **Codify the Pruned 42-Angle First-Person Educational Matrix**: Create `.agents/skills/lived-experience/references/42-first-person-advice-angles.md` and link it from `.agents/skills/lived-experience/SKILL.md`, requiring first-person peer advice (`I`, `I've`, `I'd`, `my`) that teaches concrete formulas, workflow checks, cost receipts, parser mechanics, and honest disqualifiers without fabricated anecdotes.
2. **Deploy a Deterministic Cross-Domain Anti-Slop & First-Person Verifier**: Author `.agents/scripts/verify-first-person-advice.mjs` to enforce:
   - Zero git diff on frozen homepages across all three repos (`app/page.tsx`, `careerwin-app/app/page.js`, `careerwin-app/app/HomePageClient.js`, and `mnemosyne-app/src/app/page.tsx`).
   - Zero literal en-dashes/em-dashes and zero banned HWS v2.0 slop phrases across scoped files in all three repos.
   - Zero consulting/cookie-cutter boilerplate (`"Assess your organization's current"`, `"Identify quick wins for"`, `"Create a 90-day"`, `"In 2026, "`).
   - 100% unique 5-word openings across sibling advice arrays/maps and mandatory first-person educational blocks plus 17/17 flagship diagram parity in `mnemosyne-app/src/app/use-cases/[slug]/page.tsx`.
3. **Upgrade High-Intent Surfaces Across All 3 Domains**:
   - `richardewing.io`: Upgrade flagship comparisons (`app/compare/cursor-problems/page.tsx`, `app/compare/ai-coding-agents/page.tsx`, `app/compare/why-anthropic-bills-spike-with-tool-use/page.tsx`, `app/compare/claude-md-is-not-governance/page.tsx`, `app/compare/why-cfos-are-shutting-down-ai-pilots/page.tsx`), eliminate boilerplate defaults in `app/glossary/[slug]/page.tsx` and `app/glossary/auto-enrich.ts`, enrich core terms in `app/glossary/terms.ts`, and purge `leverage` plus upgrade lead persona spokes in `app/lib/spoke-data.ts`.
   - `careerwin.ai`: Add unique `insiderAdvice` + `twoMinuteFix` entries across all ATS systems in `careerwin-app/lib/atsData.js` and credit `Richard Ewing` (`Person`) in `careerwin-app/app/ats-screening/[system]/page.js`; add unique `myInsiderTake` + `whenCompetitorFits` across all 40 comparisons in `careerwin-app/app/lib/competitorData.js` + `careerwin-app/app/compare/[slug]/page.js`; upgrade `careerwin-app/app/why-not-chatgpt/page.js`; and eliminate banned slop + `"In 2026, "` openings across `careerwin-app/app/resume-examples/[role]/page.js`.
   - `exogram.ai`: Purge `robust` and add unique `builderFieldNote` advice across all 50 flagship comparisons in `mnemosyne-app/src/app/compare/[slug]/data.ts` + `mnemosyne-app/src/app/compare/[slug]/page.tsx`; add unique `founderAdvice` + `diagramType` across all 17 flagship use cases in `mnemosyne-app/src/app/use-cases/[slug]/data.ts` + `mnemosyne-app/src/app/use-cases/[slug]/page.tsx` so all 17 render accessible inline architecture SVG diagrams + `ImageObject` schema; and remove all 6 dashes plus expand first-person workflow teaching in `mnemosyne-app/src/app/blog/claude-vs-chatgpt-vs-gemini-memory-comparison-2026/page.tsx`.

## Deciders
- @richardewing (Founder & Product Owner)
- Code Architect, Lived Experience Writer, SEO Architect, QA Auditor (MOD v4.0 Operational Council)

## Status
Accepted

## Consequences
- **Positive:**
  - Eliminates template predictability, synthetic buzzwords, and leftover en/em-dashes while preserving 30-to-45-word AEO citation snaps at the top of pages.
  - Mechanically guarantees every ATS guide, competitor comparison, resume guide, glossary term, and use case opens uniquely and teaches concrete practitioner checks at `0 ms` extra Cloudflare Worker runtime CPU and `$0.00` Semrush spend.
  - Equips all 17 `exogram.ai` flagship use cases with matched inline vector diagrams and `ImageObject` structured data instead of leaving 16 unillustrated.
- **Negative/Considerations:**
  - Any future comparison, ATS, or use-case slug additions across the three repositories must supply unique 5-word first-person openings (`insiderAdvice`, `myInsiderTake`, `builderFieldNote`, `founderAdvice`) to pass `.agents/scripts/verify-first-person-advice.mjs`.
  - Changes span three repositories on separate deploy pipelines (`richardewing-io`, `careerwin-app`, `exogram-www`), requiring per-repo contract checks, builds, and Cloudflare Worker deploys.
