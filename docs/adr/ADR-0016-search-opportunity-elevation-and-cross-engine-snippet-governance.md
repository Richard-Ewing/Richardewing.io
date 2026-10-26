# ADR-0016: Search Opportunity Elevation and Cross-Engine Snippet Governance

## Context
Following an empirical audit of Cloudflare Edge telemetry, Google Search Console (GSC) index coverage, and Bing Webmaster Tools snippet reporting, several structural optimization bottlenecks were identified across our highest-intent diagnostic, framework, and commercial assets:

1. **Internal Link Authority Starvation (Click Depth > 2)**: High-value flagship assets: `/articles/frameworks/technical-insolvency-date`, `/articles/frameworks/vibe-coding-debt`, `/articles/frameworks/shadow-agents`, `/tools/pdi`, `/reality-check`, `/tools/aueb`, `/roi-calculator`, `/for-cfos`, `/for-ctos`, `/pricing-sprints`, `/advisory`, and `/compare/ai-guardrails-platforms`: were located at click depths greater than 2 hops from the homepage and primary navigation hubs. Crawlers had to traverse deep hierarchies to discover them.
2. **Cross-Engine Snippet Length Incompatibilities**: Google Search Console and Bing Webmaster Tools evaluate snippet display with conflicting thresholds. Google truncates titles over 60 characters and descriptions over 155 characters. Bing flags titles under 45 characters as underweight or uninformative, while clipping titles over 60 characters. In Next.js App Router, using layout title templates without absolute overrides frequently resulted in accidental double-branding or title truncation.
3. **AEO Answer Deficit (Missing First-100-Word Definitions)**: Generative retrieval engines (ChatGPT Search, Perplexity, Claude, Google AI Overviews) extract direct answers from the opening 100 words of documents. Several core framework and diagnostic routes lacked an extractable, standalone definition block with semantic microdata (`itemProp="description"`).
4. **Disconnected Diagnostic-to-Framework Conversion Loops**: Users completing interactive diagnostics were not systematically routed into deep architectural essays explaining root causes, while readers of deep frameworks lacked direct access to interactive calculators and source-tagged Cal.com booking paths.
5. **Gross Request Conflation in Cloudflare Telemetry**: Gross edge requests on Cloudflare recorded static assets, font preloads, and prefetch pings, obscuring actual human and search crawler HTML document load velocity.

## Decision
We have implemented the **Search Opportunity Elevation & Cross-Engine Snippet Governance** architecture across the entire repository:

1. **Tier-1 Internal Link Authority Feeders**:
   - Built and mounted prominent "Flagship Frameworks & Executive Diagnostics" authority feeder sections on 4 global and hub surfaces: `components/site-shell.tsx` (global footer), `app/components/footer.tsx`, `app/articles/page.tsx`, and `app/tools/page.tsx`.
   - Guaranteed every one of the 10 Tier-1 authority targets is reachable within 2 clicks from the root and primary hubs without violating the homepage freeze rule.
2. **Simultaneous GSC & Bing Snippet Calibration (Intersection Rule)**:
   - Calibrated all target routes to strictly 45 to 60 characters total rendered title (strictly <= 42 characters raw child title to ensure layout template appends ` | Richard Ewing` without double-branding) and strictly 130 to 155 characters description.
   - Enforced active human voice under HWS v2.0 with absolute zero em-dashes and zero banned AI buzzwords (unlock, delve, seamless, robust, leverage, production-ready, missing layer/piece).
3. **Reusable FrameworkDiagnosticBridge Component (`components/seo/FrameworkDiagnosticBridge.tsx`)**:
   - Built a bidirectional conversion bridge:
     - `variant="diagnostic-to-framework"`: mounted on diagnostics (`/reality-check`, `/tools/pdi`, `/tools/aueb`, `/roi-calculator`) providing contextual links to deep architectural essays (TID, Vibe Coding Debt, Shadow Agents).
     - `variant="framework-to-diagnostic"`: mounted on frameworks, executive briefings, and comparisons (`technical-insolvency-date`, `vibe-coding-debt`, `shadow-agents`, `/for-cfos`, `/for-ctos`, `/pricing-sprints`, `/advisory`, `/compare/ai-guardrails-platforms`), pairing interactive calculators with `/schedule?source=...` advisory triage.
   - Created `ExecutiveDefinitionBlock` to render standalone, four-part citable definitions with `itemProp="description"` within the first 100 words of every target page.
4. **Contextual Schedule Banner Alignment (`components/schedule/schedule-diagnostic-banner.tsx`)**:
   - Expanded `SOURCE_CONFIGS` with tailored pre-call advisory context for `vibe-coding-debt`, `technical-insolvency-date`, `shadow-agents`, `for-cfos`, `for-ctos`, `pricing-sprints`, `ai-guardrails`, `ai-guardrails-platforms`, and `advisory`.
5. **Skill Codification & Invariant Enforcement**:
   - Codified Section 16 (Snippet Intersection Rule), Section 17 (AEO First-100-Word Invariant), Section 18 (Tier-1 Authority Feeders), and Section 19 (Cloudflare HTML Telemetry) in `.agents/skills/seo-architecture/SKILL.md`.
   - Codified Section 22 in `.agents/skills/master-directive/SKILL.md`.

## Deciders
- @richardewing (Founder & Product Economist)
- Steve Jobs & Jony Ive (Board Room: Visual Simplicity & Ruthless Subtraction)
- Aravind Srinivas & Lily Ray (War Room: AEO/GEO Snippet Authority & Search Architecture)
- Brian Balfour & Jim Collins (War Room: Closed-Loop Flywheel Systems)
- Paul Graham & William Zinsser (War Room: HWS v2.0 Human Voice & Zero Buzzwords)
- Dan Guido & Simon Willison (War Room: Secret Scanning & Edge Invariants)
- Code Architect & QA Auditor (War Room: Component Architecture & QA Gate Verification)

## Status
Accepted

## Consequences
Positive:
- Elevates all 10 Tier-1 target URLs out of deep-crawl status, ensuring crawler discovery at click depth <= 2 across global and hub surfaces.
- Eliminates SERP title and description truncation across both Google Search Console and Bing Webmaster Tools.
- Maximizes AI Overviews, Perplexity, and ChatGPT Search citation extraction through semantic first-100-word microdata definition blocks.
- Closes the user journey between diagnostic discovery, architectural framework education, and paid executive advisory booking.

Negative/Considerations:
- Adding authority feeder blocks to global footers and hub pages adds a minor DOM footprint (~3KB), which is justified by the search indexing and crawl budget improvements.
- Future diagnostic tools or frameworks must be registered in the feeder inventory and `schedule-diagnostic-banner.tsx` to maintain full ecosystem connectivity.
