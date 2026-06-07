# Funnel Architecture Skill — richardewing.io

## Purpose
This skill defines the conversion funnel architecture for richardewing.io. Every page, component, and content piece must push visitors DOWN the funnel toward paid services.

## The Funnel Layers

```
AWARENESS (Glossary + Blog + pSEO)
    ↓ GlossaryToolCTA component
ENGAGEMENT (Free Diagnostic Tools)
    ↓ Advisory Upsell Cards
CONVERSION (Advisory + Curriculum + Guides)
    ↓ Stripe Payment Links
REVENUE ($450 - $15,000)
```

## Funnel Rules

### Layer 1: Glossary → Tools (Awareness → Engagement)
- EVERY glossary term MUST have a `GlossaryToolCTA` mapping to a relevant tool
- CTA text must be pain-point driven: "Find out how much X is costing you"
- NOT "Learn more about X" or "Calculate your X score"
- The GlossaryToolCTA component at `app/components/GlossaryToolCTA.tsx` manages all mappings
- Category fallbacks ensure no glossary page is a dead end

### Layer 2: Tools → Advisory (Engagement → Conversion)
- EVERY tool result section MUST include an advisory upsell card
- Pattern: "Want an expert to run this for your organization?"
- Primary CTA: "Book Advisory Session →" → /advisory
- Secondary CTA: "$450 Gut-Check Call →" → /api/buy/gut_check
- The upsell must be AFTER results, not before (don't gate, entice)

### Layer 3: Advisory → Revenue (Conversion → Payment)
- Advisory page routes by pain point (4 paths + diagnostics)
- Each path links to specific Stripe payment links via /api/buy/[productSlug]
- Products catalog at `app/lib/products.ts` is the single source of truth

## Tool-to-Advisory Mapping

| Tool | Primary Advisory Service | Price |
|---|---|---|
| PDI (Product Debt Index) | Insolvency Diagnostic | $2,500 |
| AUEB (AI Unit Economics) | AI Cost Governance | $5,000 |
| APER (Revenue Per Engineer) | Strategy Session | $500 |
| EV-SE (Valuation Engine) | PE/VC Due Diligence | $15,000 |
| Copilot ROI Calculator | AI Cost Governance | $5,000 |
| Shadow AI Scanner | Shadow AI Remediation | $10,000 |
| Hallucination Tax Calculator | Hallucination Tax Audit | $5,000 |
| EU AI Act Checker | AI Policy Readiness | $2,500 |
| Innovation Tax Calculator | Full R&D Capital Audit | $7,500 |
| FTE Displacement | Strategy Session | $500 |
| Agentic Drift Matrix | Agent Production Readiness | $5,000 |

## Content Rules
- Blog articles: 2-3 inline tool CTAs per article
- Landing pages: Hero CTA → primary tool, secondary → advisory
- Curriculum pages: CTA to diagnostic tools as "assess before you learn"
- All CTAs use the Scar Tissue framework voice (pain-first, not feature-first)

## Anti-Patterns (NEVER Do This)
- Dead-end pages with no CTA
- "Learn more" as a CTA (tell them what they'll GET)
- Gating tools before showing value (show results, THEN upsell)
- Generic "Contact us" (always show a price and a direct buy link)
- Linking to external tools (keep traffic on richardewing.io)
