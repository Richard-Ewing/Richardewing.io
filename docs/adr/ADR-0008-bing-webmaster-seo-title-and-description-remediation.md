# ADR-0008: Bing Webmaster SEO Title Length and Short Meta Description Remediation

## Context
Bing Webmaster Tools reported 99 search optimization errors on `richardewing.io`:
1. "Title too long" (High severity, pages with `<title>` exceeding 70 characters).
2. "Meta descriptions on many of your pages are too short" (Moderate severity, 97 pages flagged with meta descriptions under 120 characters, where Bing recommends 150 to 160 characters).

Empirical triage revealed two systemic causes:
1. `app/layout.tsx` configures Next.js `title.template: '%s | Richard Ewing'`. Child pages exporting titles that already contained `| Richard Ewing` or appended verbose qualifiers (e.g. `| Framework | Richard Ewing`, `| System | Richard Ewing`) produced double-branding (`... | Richard Ewing | Richard Ewing`) and inflated rendered title lengths to 72-115 characters.
2. Across both static and dynamic routes (including 342 curriculum modules, 40 blog posts, 19 frameworks, 16 industry landing pages, 40 compare subpages, and 77 static pages), meta descriptions consisted of single concise sentences between 50 and 118 characters. Bing flags descriptions under 120 characters as insufficient for search engine snippet generation and recommends 150 to 160 characters.

## Decision
We execute an architectural overhaul of title rendering and meta description construction across all static and dynamic routes:

1. **Title Length Invariant & Template Discipline**:
   - For pages using Next.js absolute titles (`title: { absolute: '...' }`), titles are explicitly capped at 58 characters including brand suffix.
   - For pages using standard string titles (`title: '...'`), raw titles are capped at 42 characters so that the layout template `%s | Richard Ewing` (16 characters) renders titles strictly under 58 characters, well below Bing's 70-character threshold and adhering to the `seo-architecture` skill mandate (< 60 characters).
   - Removed all redundant occurrences of `| Richard Ewing` in child pages to permanently eliminate double-branding.

2. **Two-Sentence Meta Description Architecture (142-156 Characters)**:
   - Restructured meta descriptions into a two-sentence, REWS v2.0-compliant formula:
     - **Sentence 1**: Clear direct definition, answer, or primary value proposition without corporate jargon.
     - **Sentence 2**: Specific operational differentiator or authority hook featuring an active verb and concrete job titles (CFO, VP of Engineering, CTO, Engineering Manager, COO).
   - Enforced strictly within 142 to 156 characters, fulfilling Bing's 150-160 character recommendation while preventing Google snippet truncation (<= 158 characters).
   - Enforced zero em-dashes and authentic human voice across all descriptions.

3. **Universal Coverage Across Dynamic & Static Routes**:
   - 342 curriculum track modules (`app/vault/curriculum/tracks/[...slug]/page.tsx`): dynamic track-aware description generator targeting 145-158 characters and title length capping.
   - 40 blog posts (`app/blog/[slug]/page.tsx`): dynamic fallback descriptions expanding short excerpts to 145-158 characters.
   - 19 frameworks (`app/articles/frameworks/[slug]/page.tsx`, `app/framework/[slug]/page.tsx`): dynamic title and description generator.
   - 16 industry landing pages (`app/industries/*/page.tsx`): standardized 141-151 character descriptions.
   - 40 compare subpages (`app/compare/*/page.tsx`): shortened titles and expanded 142-156 character descriptions.
   - 77 core static pages (`app/**/page.tsx`): expanded descriptions to 142-155 characters.
   - Dynamic routes for tools, failures, skills, concepts, and glossary terms updated to conform to title and description length invariants.

## Deciders
@richardewing, Aravind Srinivas (AIEO Gatekeeper), SEO Architect, Code Architect, QA Auditor

## Status
Accepted

## Consequences
Positive:
- Eliminates 100% of Bing Webmaster "Title too long" errors across the domain, ensuring every title renders under 60 characters.
- Resolves all 97 flagged "Meta description too short" errors and protects over 500 total routes from future short description penalties.
- Elevates search engine CTR and GEO (Generative Engine Optimization) entity extraction by providing rich, direct two-sentence answers with specific executive job titles.
- Completely eradicates double-branding (`| Richard Ewing | Richard Ewing`) across the platform.

Negative/Considerations:
- Future pages added to `app/` must enforce the 42-character raw title constraint (or use `title: { absolute: ... }` capped at 58 characters) and the 140-158 character description window.
- Developers must maintain awareness of Next.js `title.template` inheritance when authoring new route metadata.
