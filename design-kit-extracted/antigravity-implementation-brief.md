# Antigravity implementation brief — RichardEwing.io

GOAL
Create an original, premium editorial/advisory site about AI economics. Preserve the site's actual palette, identity, content URLs, and credibility. Reference Mardyn for composition and narrative quality, never copy its assets, source, text, or brand treatment.

IMPORTANT
The supplied HTML is a working DESIGN EXPLORATION, not a drop-in production homepage. Its palette, typography, copy, and economics inputs are provisional. Do not deploy it verbatim. noindex is intentional for the prototype; retain noindex for preview only. Do not propagate noindex to production.

PHASE 1: INSPECT BEFORE EDITING
1. Inspect package.json, lockfile, app/router directories, global CSS, shared layout/header/footer, content sources, and existing tests. Report the exact current framework and versions. Do not replace the stack by default.
2. Open https://www.richardewing.io/ and https://mardyn.com/ in the browser. Capture viewport screenshots at 1440x1000 and 390x844, plus full-page views. Review actual animation and interaction behavior. Do not infer visual properties from extracted text.
3. Extract current computed brand colors, typography, existing spacing, and assets. Record original values and the proposed semantic token mapping. Preserve existing hue relationships. Ask for approval before changing brand colors or replacing the main typeface.
4. Inventory homepage CTAs, working benchmark, booking/payment paths, publication evidence, article routes, metadata, canonical URLs, and structured data. Preserve legitimate functionality; flag unverifiable marketing statistics for owner review. Never invent proof, client logos, prices, or guarantees.
5. Create a branch and record baseline screenshots and performance/accessibility checks.

PHASE 2: BUILD THE SYSTEM
Use the HTML as an original layout/composition reference, not a mandate to migrate to plain HTML.
Map --bg, --surface, --ink, --muted, --accent, --line to real current brand tokens.
Adapt into the existing framework: SiteHeader, EditorialHero, CapitalFlowDiagram, MethodRows, UnitEconomicsExperiment, EvidenceLinks, ThesisStatement, EngagementCTA, SiteFooter.
Use semantic HTML, CSS grid, SVG diagrams, clamp typography, and CSS custom properties. Keep content server-rendered where the existing framework supports it. Isolate interactive code to the calculator. No unnecessary global client bundle.
Do not install a dependency to animate a simple reveal. Scroll-driven motion must be feature-detected and have a visible static baseline. Respect reduced motion.
Preserve the existing audit/benchmark workflow: the illustrative calculator is NOT a replacement for a real assessment. Put the validated commercial CTA back into the appropriate position after checking its actual URL and wording.
For proof: build a reusable CaseEvidence component with context, finding, intervention, outcome, timeframe, methodology, and source/permission status. Hide empty components. Never render fabricated placeholder proof on a public page.
Use original diagrams with labels and accessible descriptions. Avoid fake dashboards, endlessly moving gradients, glass-card grids, autoplay video, scroll hijacking, custom cursors, and decorative WebGL.

PHASE 3: SITEWIDE TEMPLATES
Research/writing: large editorial title, compact summary, clear byline/date, readable body, table of contents when necessary, source blocks, related work.
Glossary: concise definition above the fold, interpretation, labeled original diagram when useful, related terms, sources.
Advisory: diagnosis, deliverable preview, substantiated case evidence, explicit scope, working engagement CTA.
About: real portrait with permission, concise thesis, experience, publication links. No AI-generated portrait.
Speaking: topics, audience, actual clips or imagery if available, booking CTA.
Exogram: use current owner-approved positioning; do not infer it from an outdated page or build a second personal-site homepage.
Maintain URL structure, canonical links, and accurate existing schema. Do not automatically create Article schema on every page.

PHASE 4: VERIFICATION
Test at widths 360, 390, 768, 1024, 1440, 1920; long headings; 200% zoom; keyboard only; reduced motion; touch; JavaScript disabled; browser support fallback.
Validate contrast numerically after brand mapping: normal text at least 4.5:1 and large text at least 3:1. Inspect focus and target sizes.
Check slider by keyboard. Check scenario: $0.06 => $6,000 included costs, $18,000 contribution, 75%; $0.25 => $21,200 included costs, $2,800 contribution, 11.7%. Label as illustrative, not company-specific forecasting.
Check no overflow, no clipped SVG labels, readable mobile diagrams, functional links, no hydration warnings, no console errors.
Measure performance with real tool output; project targets: LCP <= 2.5s, INP <= 200ms, CLS <= .1. A local lab result is not a field measurement. Set image dimensions, optimize real imagery, and avoid font-driven layout shift.
Compare before/after screenshots and explain each design decision. Screenshots and written descriptions must reflect the actual browser result.
No production deployment, booking-system changes, pricing changes, URL deletion, or publishing without owner approval.

DELIVER
Token map, changed files, desktop/mobile screenshots, tested browser matrix, accessible fallback behavior, calculator tests, performance results with test conditions, and any unresolved owner decisions.
