---
name: gsc-performance-optimization
description: "ACTIVATE this skill when working with Google Search Console data, SEO performance analysis, autonomous meta rewrites, or the daily SEO optimizer agent. Governs how to interpret GSC data, trigger auto-rewrites, and maintain the autonomous SEO loop."
---

# GSC Performance Optimization Skill — richardewing.io

## Purpose
This skill governs the autonomous SEO performance optimization system. It defines how to interpret Google Search Console data, make autonomous decisions about meta titles/descriptions, and when to alert the human operator.

## Architecture

```
/api/gsc/performance  →  Raw GSC data + AI search queries + IndexNow DB logs
        ↓
/api/cron/seo-optimizer  →  Standardized via logAgentRun. Suggests rewrites based on GSC & AI-intent queries
        ↓
/api/cron/auto-rewriter  →  Standardized via logAgentRun. Gemini rewrites meta, commits to GitHub, pings IndexNow (fallback key 3340d267ae86446787754f0e60a3edc5)
        ↓
/api/actions/trigger  →  One-click email buttons for manual approval (Cache-Control: no-store)
```

## Data Sources
- **Google Search Console API** via `googleapis` package (service account auth)
- **GSC data dimensions**: page performance, query performance, page+query pairs
- **Bing IndexNow logs**: extracted from the `agent_runs` Supabase table for historical telemetry
- **Market Intelligence** from the market-intelligence-analysis skill
- **Starving Crowd Data** from the market intelligence artifact

## Key Metrics (Priority Order)

### 1. CTR (Click-Through Rate)
- **Target**: Advisory/Tools pages > 5% CTR, Curriculum > 3%
- **Alert threshold**: Any paid-funnel page below 2% CTR
- **Autonomous action**: Auto-Rewriter generates new meta titles using Gemini + Scar Tissue framework
- **Manual action**: "Approve & Deploy" button in email digest

### 2. Google AI Search Performance (AI-Intent Segment)
- **Filters**: Isolated search queries containing AI keywords: *'vs'*, *'problems'*, *'failures'*, *'why'*, *'benchmark'*
- **Metrics**: Impressions, Clicks, CTR, and Average Position specifically for AI-intent search traffic
- **Action**: Alert the `seo-optimizer` agent when performance declines to rewrite meta tags targeting developer or VP of Engineering query patterns.

### 3. Bing IndexNow Submission Telemetry
- **Target**: Ensure 100% submission success rate for updated pages.
- **Action**: Fallback automatically to verified domain key `3340d267ae86446787754f0e60a3edc5` and log results (URLs submitted, response code, success status) under `agent_runs` payload.

### 4. Paid Funnel vs Glossary Ratio
- **Target**: Paid funnel impressions > glossary impressions (ratio > 1.0x)
- **Current problem**: Glossary terms dominate impressions; paid funnel pages need more
- **Action**: Auto-rewrite paid page meta to capture more search intent

### 5. Impressions
- **Target**: Tools/Advisory impressions should grow 10%+ month-over-month
- **Action**: Create new content targeting high-impression keywords, add internal links

### 6. Position
- **Target**: Position 1-3 for branded terms, Position 1-10 for tool keywords
- **Alert threshold**: Any page dropping 5+ positions week-over-week
- **Action**: Check content freshness, add internal links, update meta

## Autonomous Decision Rules

### CAN Change Autonomously (No Human Approval)
- Meta title rewrites when CTR < 2% AND impressions > 100 (max 5/day)
- Meta description rewrites when CTR < 2%
- IndexNow submissions using verified fallback key `3340d267ae86446787754f0e60a3edc5`
- Commit to GitHub (auto-deploys via Vercel)

### Requires "Approve & Deploy" Click (Email Button)
- Pages flagged in email digest with lower confidence
- Pages with < 100 impressions (not enough data)
- Any non-tool/advisory/framework pages

### CANNOT Change Autonomously (Requires Human)
- Page URL structure changes
- New page creation
- Pricing or product changes
- Removing existing content
- Changes to advisory/payment flow

## Meta Title Rewrite Protocol (Auto-Rewriter)

1. Pull current title from page source code via GitHub API
2. Pull top queries driving impressions to this page (from page+query GSC data)
3. Cross-reference queries with starving crowd pain points
4. Send to Gemini with Scar Tissue framework instructions:
   - Lead with the PAIN, not the feature
   - Include a NUMBER ($, %, time)
   - Max 60 characters
   - Must contain primary keyword from top queries
   - NO dead words (unlock, ecosystem, delve, synergy, etc.)
5. Commit change to GitHub → Vercel auto-deploys
6. Submit to IndexNow using the fallback key `3340d267ae86446787754f0e60a3edc5`
7. Log run execution record in Supabase `agent_runs` via standardized `logAgentRun` function containing telemetry payload
8. Include in daily email digest with one-click action buttons

## Starving Crowd → Keyword Alignment

| Starving Crowd | Target Keywords | Current Best Page |
|---|---|---|
| VP Eng (AI billing shock) | "copilot ROI", "AI coding tool cost" | /tools/copilot-roi, /ai-economics-crisis |
| CISO (Shadow AI) | "shadow AI risk", "AI compliance audit" | /tools/shadow-ai, /tools/eu-ai-act-checker |
| Platform Eng (Agent governance) | "AI agent failures", "agentic drift" | /tools/agentic-drift-matrix |
| Eng Director (Vibe coding debt) | "AI technical debt", "vibe coding problems" | /tools/pdi |
| Ops VP (Hallucination tax) | "AI hallucination cost", "verification tax" | /tools/hallucination-tax |

## Email Digest Format

**Subject**: `[richardewing.io] Daily SEO Performance — {date} [{N} auto-deployed]`
**From**: `seo@updates.richardewing.io`

**Sections**:
1. KPI cards: Impressions, Clicks, Paid/Glossary Ratio
2. Performance by Category table
3. Starving Crowd Alignment table
4. Top 15 Pages table
5. **Action Items with one-click buttons** — each low-CTR page has:
   - [✅ Approve & Deploy] — triggers auto-rewriter for that page (unless site-wide warning)
   - [Skip] — acknowledges, no action
6. Autonomous Changes Deployed (if any auto-rewrites ran)
7. Link to Command Center dashboard

## Dashboard (Command Center & SEO Performance)

The `/admin/seo-performance` and `/admin/command-center` dashboards show:
- **SEO tab**: Impressions, clicks, CTR by category, paid/glossary ratio, top pages, top queries
- **Bing IndexNow Analytics**: Submission history log, API status, and submission volume KPI
- **Google AI Search performance**: KPI cards isolating AI search impressions, clicks, CTR, average position, and a table of AI-intent queries
- **Revenue tab**: Stripe data (total rev, MRR, AOV, by-category, recent transactions)
- **Agents tab**: All 8 agent statuses (including `auto-rewriter` and `seo-optimizer`), autonomous rewrite log, recent runs table
- Period toggle: 7d / 14d / 28d
- Auto-refreshes every 60s

## Files This Skill Touches

- `lib/agents/logger.ts` — Types and name declarations for the agents registry
- `app/api/admin/agent-status/route.ts` — Agent registry API supporting status dashboard checks
- `app/api/gsc/performance/route.ts` — GSC data API (with robust setup error falls)
- `app/api/cron/seo-optimizer/route.ts` — Daily optimizer agent
- `app/api/cron/auto-rewriter/route.ts` — Gemini-powered meta rewriter + IndexNow submission
- `app/api/actions/trigger/route.ts` — One-click email action handler
- `app/admin/command-center/` — Dashboard (page.tsx + content.tsx)
- `app/admin/seo-performance/` — SEO dashboard (page.tsx + content.tsx)
- `app/admin/layout.tsx` — Admin auth gate

