# ADR-0026: Cross-Domain Snippet Calibration, Bing Webmaster Recovery & ChatGPT Business SKUs

## Context
Cross-domain first-party telemetry across Google Search Console (GSC), Bing Webmaster Tools, Cloudflare Workers edge logs, and OpenAI ChatGPT Business Hub surfaced four systemic search and AI-citation bottlenecks across `careerwin.ai`, `richardewing.io`, and `exogram.ai`:
1. `careerwin.ai` stopped accumulating new Bing Search Performance data after September 26 because public routes emitted `X-Robots-Tag: noai, noimageai`, a second orphaned IndexNow verification `.txt` file created split host ownership signals, and `careerwin-app/app/layout.js` lacked native `<meta name="msvalidate.01">` ownership metadata.
2. High-impression zero-click pages across all three sites suffered mechanical template defects: unclosed parenthetical keyword suffixes in `careerwin.ai` `/resume-examples/[role]` meta descriptions, cannibalization between `/role/[slug]` and `/resume-examples/[slug]`, 91 of 93 `/answers/*` spoke titles exceeding the 42-character leaf ceiling (rendered truncation past 58 characters), naive `/[.!?]\s/` glossary TL;DR splits clipping abbreviations (`vs.`, `e.g.`, `U.S.`), emoji-prefixed glossary `<h2>` headings, `<p>` author bylines displacing `itemProp="description"` definitions on `FrameworkDefinition`, `&ndash;` / banned buzzword leakage on `/compare/ai-coding-agents` and `/terms`, and retired DevOps `/compare/*` URLs issuing `301 -> /tools` instead of `HTTP 410 Gone`.
3. GSC 1D `query` exports masked up to 74% of long-tail and AI query fan-out traffic under anonymization filters, while unnormalized `today` end-dates falsely compared 25-day windows against 28-day windows due to GSC's 3-day reporting lag.
4. OpenAI ChatGPT Business Hub 9-field TSV product catalogs needed live public `200 OK` landing pages and synchronized `Schema.org/Offer` `price` (`0.00`, `19.00`, `29.00`, `450.00`, `2500.00`) and `availability` (`InStock`) markup without editing frozen homepages (`/`).

## Decision
1. **Unblock Bing & IndexNow (`careerwin.ai`)**: Remove `X-Robots-Tag: noai, noimageai` from indexable public `200 OK` HTML responses in both `careerwin-app/middleware.js` and `careerwin-app/scripts/patch-worker.cjs` while preserving `Content-Signal: ai-train=no, search=yes, ai-input=yes` and `noindex, follow, noai, noimageai` on private `/api/og` and excluded routes; delete the orphaned `careerwin-app/public/f8941785cb7945d89851086209bc2985.txt` key; add `alternateName` (`Career Win`, `CareerWin.ai`) and `NEXT_PUBLIC_BING_VERIFICATION` wiring in `careerwin-app/app/layout.js`.
2. **Enforce Template-Level Title, Description & Heading Calibration**:
   - `careerwin.ai`: Eliminate trailing `(${kwSnippet})` clamping in `/resume-examples/[role]`, differentiate `/role/[slug]` `H1`/title toward scorecards with an explicit template cross-link, sharpen `toolMetadataMap` + `heroLead`, add `Ashby` positioning on `/chrome-extension`, standardize `answerCapsule` coverage on `/ats-screening/[system]`, and align `/pricing` JSON-LD `InStock`.
   - `richardewing.io`: Inject bespoke `<= 42` char `seoTitle` entries across all 93 entries in `app/lib/spoke-data.ts`, render spoke `<h3>` subheadings as `<h2>`, harden glossary TL;DR splitting against abbreviations, inject `h1Override` for `ic-vs-management-track` and `engineering-levels`, remove pictorial emojis from glossary headings/cards while anchoring `{term.title}`, convert author `<p>` in `FrameworkDefinition` to `<div>`, hoist `{mod.moduleId}` out of curriculum `<h1>` tags, upgrade `/compare/ai-coding-agents` with `Stagewise & Zencoder` coverage plus `BreadcrumbList` and `FAQPage` JSON-LD, align `/advisory` (`$2.5K` CFO sprint title + `RW-SPRINT-2500` Offer), `/schedule` (`60 min` Gut-Check + `RW-CALL-450` Offer + `chatgpt-business` banner), and `ToolServerHeader` (`InStock`).
   - `exogram.ai`: Set `/terms` to `noindex, follow`, purge all em/en-dashes and banned words across scoped files, calibrate `secure-openai-assistants-api` and `soc2-audit-trails-for-llm-tool-calls`, and align `/pricing` Free Forever `"500 permanent memories"` plus `EXO-FREE-00` (`0.00`) and `EXO-PRO-19` (`19.00`) JSON-LD.
3. **Return `HTTP 410 Gone` for Retired DevOps `/compare/*` Routes (`richardewing.io`)**: Map retired non-AI DevOps comparison slugs in `scripts/generate-edge-redirects.ts`, `middleware.ts`, and `scripts/patch-worker.mjs` to a deterministic `410 Gone` (`noindex, follow`, 24h cache) via the `__EDGE_410_GONE__` sentinel so crawlers drop dead comparisons instead of diluting `/tools`.
4. **Preserve Frozen Homepages**: Keep `/` (`app/page.tsx`, `careerwin-app/app/page.js`, `exogram-www/src/app/page.tsx`) and root homepage title/description templates 100% untouched across all three repositories.

## Deciders
- @richardewing (Founder & Product Owner)
- Code Architect, SEO Architect, Lived Experience Writer, QA Auditor (MOD v4.0 Operational Council)

## Status
Accepted

## Consequences
- **Positive:**
  - Eliminates contradictory `X-Robots-Tag: noai` suppression on `careerwin.ai` while preserving training-bot WAF blocks and `Content-Signal` directives.
  - Prevents mid-word `<title>` truncation across 93 `/answers/*` spokes, unclosed parentheses across `/resume-examples/*` pages, and broken abbreviation splits across glossary pages.
  - Synchronizes public `Schema.org` `Offer` prices (`0.00`, `19.00`, `29.00`, `450.00`, `2500.00`) and `InStock` availability with all three OpenAI ChatGPT Business 9-field TSV product feeds while holding all homepages frozen.
  - Instructs search engines cleanly to prune retired DevOps comparison pages with `410 Gone` instead of chaining redirects into `/tools`.
- **Negative/Considerations:**
  - Requires setting `NEXT_PUBLIC_BING_VERIFICATION` in `careerwin.ai` environment variables once retrieved from Bing Webmaster Tools and uploading the three generated TSV feeds inside `chatgpt.com/business-hub`.
  - Edge `410 Gone` handling requires keeping `scripts/generate-edge-redirects.ts` synchronized whenever `Tier C` comparison slugs change (`npx tsx scripts/generate-edge-redirects.ts`).
