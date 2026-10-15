# RichardEwing.io - Route Coverage Matrix & Concept B Design Conformance

> **Standard**: Concept B Global Design System Specification
> **Audit Date**: 2026-10-15T13:50:58.039Z
> **Hosting & Edge Deployment**: Cloudflare Workers (@opennextjs/cloudflare, wrangler.jsonc)
> **Quality Gate**: MOD v4.0 verify-qa.mjs (Zero Secrets + Zero Em-Dashes + Root Hygiene)

---

## 1. Global Concept B Design System Standards

All routes in RichardEwing.io adhere to the approved Concept B design specification:

| Token / Attribute | Value | Implementation Invariant |
| :--- | :--- | :--- |
| **Warm Paper Background** | `--paper: #f4f1e9` / `--paper2: #ebe7dc` / `#FAF9F6` | Frozen invariant. Replaces generic dark/pure white backgrounds across content layers. |
| **Forest Green Headers** | `--forest: #29473b` / `--forest2: #162e26` | Primary contrast surfaces, executive card headers, dark mode highlights. |
| **Terracotta / Rose Accent**| `--rose: #c86d56` / `--gold: #b77a35` | Accents, badges, highlights, and primary actionable CTAs. |
| **Ink & Contrast Typography**| `--ink: #1e2924` / `--muted: #66716a` | Text readability meeting WCAG AAA standard on warm paper. |
| **Serif Typography** | `Playfair Display`, Georgia, Cambria, serif | Editorial headlines, section titles, and key value propositions. |
| **Sans Typography** | `DM Sans`, system-ui, sans-serif | Highly legible interface text, metrics labels, and descriptions. |
| **Mono Typography** | `DM Mono`, ui-monospace, monospace | Technical equations, code snippets, metadata tags, and dates. |

---

## 2. Shared Concept B Component Inventory

The following core components represent the unified editorial building blocks deployed across all page families:

| Component Name | Source Location | Production Wiring & Routes | Primary Usage & Behavior |
| :--- | :--- | :--- | :--- |
| **`EditorialCard`** | `components/editorial/EditorialCard.tsx` | Global editorial templates | Core editorial container with warm paper/forest header, metadata eyebrow, serif title, and interactive link arrow. |
| **`PublicationCard`**| `components/editorial/PublicationCard.tsx` | `/research`, `/research/publications` (`research-explorer.tsx`) | Peer-reviewed publication entry displaying publisher badge (CIO.com, Built In, etc.), date, thesis summary, and archival link. |
| **`ConceptCard`** | `components/editorial/ConceptCard.tsx` | `/concepts` (`concept-explorer.tsx`) | Ontology card linking canonical concept to its mathematical axioms, research evidence, and connected knowledge graph. Dual-mode support. |
| **`ToolCard`** | `components/editorial/ToolCard.tsx` | `/tools` (`tools-content.tsx`, `app/tools/page.tsx`) | Diagnostic calculator summary card featuring live telemetry metric preview, risk badge, executive role tags, and direct audit action. |
| **`MetricPanel`** | `components/editorial/MetricPanel.tsx` | Diagnostic tools & audit reports | High-contrast numerical callout highlighting dollar savings, efficiency multipliers, or insolvency dates. |
| **`QuoteBlock`** | `components/editorial/QuoteBlock.tsx` | Core essays & curriculum | High-impact italicized executive axiom bordered with forest or gold accent and attributed to Richard Ewing. |
| **`ChartPanel`** | `components/editorial/ChartPanel.tsx` | Research briefs & benchmarks | Visual SVG container displaying unit cost curves, latency bands, or phase transition diagrams. |
| **`AccordionItem`** | `components/editorial/AccordionItem.tsx` | Master Legal Hub (`/legal`), compare FAQs | Accessible, animated disclosure element for FAQs, curriculum outlines, and complex calculation steps. |

---

## 3. Page Family Coverage & Conformance Matrix

| Page Family | Route Count | Status | Concept B Conformance | SEO & Schema | Verification Status |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Core & Executive Hub** | 157 | Active | 100% | `WebSite`, `Person`, `Organization`, `Service`, `Article` | Passed |
| **Research & Publications** | 48 | Indexed | 100% | `CollectionPage`, `Article`, `DefinedTermSet` | Passed |
| **Editorial & Blog** | 152 | Indexed / Canonical | 100% | `BlogPosting`, `Author` | Passed |
| **Interactive Diagnostics & Tools** | 46 | Active | 100% | `WebApplication`, `HowTo` | Passed |
| **Concepts & Ontology** | 132 | Indexed | 100% | `DefinedTerm`, `FAQPage` | Passed |
| **Glossary Terms (Indexed)** | 98 | Indexed | 100% | `DefinedTerm`, `DefinedTermSet` | Passed |
| **Glossary Terms (Redirected)** | 453 | 301/308 | N/A | Clean Redirect Target | Passed |
| **Glossary Pillars** | 17 | Indexed | 100% | `CollectionPage`, `BreadcrumbList` | Passed |
| **Curriculum & Vault Tracks** | 348 | Indexed | 100% | `Course`, `EducationalOccupationalProgram` | Passed |
| **Compare & Teardowns (Tier A)** | 45 | Indexed | 100% | `Article`, `FAQPage` | Passed |
| **Programmatic Answers** | 51 | Indexed | 100% | `QAPage`, `Answer` | Passed |
| **Industries & Verticals** | 15 | Indexed | 100% | `Service`, `Audience` | Passed |
| **Ventures (Exogram, CareerWin)** | 26 | Active | 100% | `SoftwareApplication`, `TechArticle` | Passed |
| **Legal, Policy & Utility** | 1 | Active | 100% | `AboutPage`, `ContactPage` | Passed |

---

## 4. Technical Constraints & Preservation Invariants

1. **Zero Content Loss**: Every single word of analysis, thesis, evidence, and mathematical calculation has been preserved in its entirety without truncation.
2. **Zero Fake Numbers**: All diagnostics, ROI calculators, and statistics use validated formulas and explicit, transparent assumptions.
3. **Cloudflare Edge Deployment**: Exclusively routed and deployed through `@opennextjs/cloudflare` and `wrangler.jsonc` to `richardewing.io`. Never Vercel.
4. **Prerender & Window Safety**: All browser-dependent APIs and canvas hooks are guarded by `useEffect` or `typeof window !== 'undefined'`.
5. **Zero Secret Key Leaks**: Strictly verified through automated pre-deployment AST inspection in `verify-qa.mjs`.
