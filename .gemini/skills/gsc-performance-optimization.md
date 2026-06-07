# GSC Performance Optimization Skill — richardewing.io

## Purpose
This skill governs the autonomous SEO performance optimization agent. It defines how to interpret Google Search Console data, make autonomous decisions about meta titles/descriptions, and when to alert the human operator.

## Data Sources
- **Google Search Console API** via `googleapis` package (service account auth)
- **Market Intelligence** from the market-intelligence-analysis skill
- **Starving Crowd Data** from the market intelligence artifact

## Key Metrics (Priority Order)

### 1. CTR (Click-Through Rate)
- **Target**: Advisory/Tools pages > 5% CTR, Curriculum > 3%
- **Alert threshold**: Any paid-funnel page below 2% CTR
- **Action**: Rewrite meta title and description using Scar Tissue framework

### 2. Impressions
- **Target**: Tools/Advisory impressions should grow 10%+ month-over-month
- **Alert threshold**: Advisory/Tools total impressions < Glossary total impressions (current problem)
- **Action**: Create new content targeting high-impression keywords, add internal links

### 3. Position
- **Target**: Position 1-3 for branded terms, Position 1-10 for tool keywords
- **Alert threshold**: Any page dropping 5+ positions week-over-week
- **Action**: Check content freshness, add internal links, update meta

### 4. Clicks
- **Target**: Tools/Advisory clicks growing faster than glossary clicks
- **Action**: Optimize CTAs, improve page load speed, A/B test titles

## Autonomous Decision Rules

### CAN Change Autonomously (No Human Approval)
- Meta title rewrites when CTR < 2% (must follow Scar Tissue framework)
- Meta description rewrites when CTR < 2%
- Internal link additions (glossary → tool, tool → advisory)
- Blog article CTA additions
- IndexNow submissions for changed pages

### CANNOT Change Autonomously (Requires Human Alert)
- Page URL structure changes
- New page creation
- Pricing or product changes
- Removing existing content
- Changes to advisory/payment flow

## Meta Title Rewrite Protocol (When CTR < 2%)

1. Pull current title from code
2. Pull top queries driving impressions to this page
3. Cross-reference queries with starving crowd pain points
4. Rewrite title using Scar Tissue framework:
   - Lead with the PAIN, not the feature
   - Include a NUMBER ($, %, time)
   - Max 60 characters
   - Must contain primary keyword
5. Log the change in Supabase `seo_changes` table
6. Submit to IndexNow
7. Email daily digest with all changes

## Starving Crowd → Keyword Alignment

| Starving Crowd | Target Keywords | Current Best Page |
|---|---|---|
| VP Eng (AI billing shock) | "copilot ROI", "AI coding tool cost" | /tools/copilot-roi, /ai-economics-crisis |
| CISO (Shadow AI) | "shadow AI risk", "AI compliance audit" | /tools/shadow-ai, /tools/eu-ai-act-checker |
| Platform Eng (Agent governance) | "AI agent failures", "agentic drift" | /tools/agentic-drift-matrix |
| Eng Director (Vibe coding debt) | "AI technical debt", "vibe coding problems" | /tools/pdi |
| Ops VP (Hallucination tax) | "AI hallucination cost", "verification tax" | /tools/hallucination-tax |

## Email Digest Format
Subject: "[richardewing.io] Daily SEO Performance — {date}"
Body:
- Top 10 pages by impressions (with CTR, clicks, position)
- Pages with CTR < 2% (action items)
- Changes made today (meta rewrites, internal links added)
- Comparison: Advisory/Tools impressions vs Glossary impressions
- Market intel alignment score (how well traffic matches starving crowds)
