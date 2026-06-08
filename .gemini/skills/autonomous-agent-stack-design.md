---
name: autonomous-agent-stack-design
description: "ACTIVATE this skill when designing, auditing, deploying, or maintaining the autonomous AI agent stack for richardewing.io. This skill defines the methodology for identifying every recurring business task, categorizing automatable vs. human-only work, and building self-running agent infrastructure."
---

# Autonomous Agent Stack Design

## Purpose

This skill ensures Richard Ewing's hours go ONLY to high-leverage work that re-energizes him. Every recurring task must be categorized, and anything automatable must be built as an autonomous agent with zero manual triggering.

## Currently Deployed Agents

| # | Agent | Path | Schedule | What It Does |
|---|---|---|---|---|
| 1 | Intelligence Digest | `/api/cron/intelligence-digest` | Daily 7am UTC | Aggregates market intelligence |
| 2 | Benchmark Aggregator | `/api/cron/benchmark-aggregator` | Daily 8am UTC | Collects performance benchmarks |
| 3 | SEO Health Monitor | `/api/cron/seo-health` | Daily 6am UTC | Monitors SEO metrics |
| 4 | Lead Scorer | `/api/cron/lead-scorer` | Every 6 hours | Scores and prioritizes leads |
| 5 | Content Expander | `/api/cron/content-expander` | Daily 9am UTC | Generates content expansion drafts |
| 6 | Daily Ops Email | `/api/cron/daily-ops-email` | Daily 7am UTC | Sends daily briefing to Richard |
| 7 | **SEO Optimizer** | `/api/cron/seo-optimizer` | Daily 9am UTC | Pulls GSC data, identifies low-CTR pages, triggers auto-rewriter, emails actionable digest |
| 8 | **Auto Rewriter** | `/api/cron/auto-rewriter` | Triggered by SEO Optimizer | Gemini-powered meta title/description rewriter, commits to GitHub, auto-deploys via Vercel |

## The Autonomous SEO Loop

```
Daily @ 9am UTC:
  SEO Optimizer → GSC API (page+query data)
       ↓
  Starving Crowd Alignment scoring
       ↓
  Identify low-CTR pages (<2%, 100+ impressions)
       ↓
  Auto-Rewriter → Gemini generates new meta titles
       ↓
  GitHub commit → Vercel auto-deploy
       ↓
  IndexNow submission
       ↓
  Email digest with one-click action buttons
       ↓
  Richard clicks "Approve & Deploy" or "Skip"
       ↓
  Action API triggers rewriter → confirmation email
```

### Safety Guardrails
- Max 5 autonomous rewrites per day
- Only rewrites pages with 100+ impressions
- Only rewrites tools/advisory/framework pages (never blog/glossary)
- All changes logged to Supabase with old/new titles
- Email shows exactly what was changed with reasoning
- Action buttons expire after 72 hours (HMAC-signed tokens)

## Action System (One-Click Email Buttons)

- **Endpoint**: `/api/actions/trigger?token=...`
- **Actions**: `approve-rewrite`, `skip`
- **Security**: HMAC-SHA256 signed tokens using CRON_SECRET
- **Expiry**: 72 hours
- **Flow**: Email → Click button → API triggers auto-rewriter → Confirmation email sent
- **Confirmation**: After action completes, sends "[Action Complete]" email with results

## Admin Dashboard (Command Center)

- **URL**: `/admin/command-center`
- **Auth**: Clerk login + email allowlist (richardewing1@gmail.com, richardewing@exogram.ai)
- **Tabs**: Overview | SEO | Revenue | Agents
- **Data Sources**:
  - Revenue: `/api/admin/revenue` (Stripe)
  - SEO: `/api/gsc/performance` (Google Search Console)
  - Agents: `/api/admin/agent-status` (Supabase)
- **Auto-refresh**: Every 60 seconds
- **Period toggle**: 7d / 14d / 28d

## Agent Architecture Standards

### Every Agent MUST Have

1. **Vercel Cron trigger** — No manual triggering. Ever.
2. **CRON_SECRET auth** — Verify `Authorization: Bearer ${CRON_SECRET}` header
3. **Supabase logging** — Write every run to `agent_runs` table with status, duration, metadata
4. **Error handling** — Try/catch with detailed error logging. Never silently fail.
5. **Execution time tracking** — Log start time, end time, duration
6. **Status endpoint** — Report health at `/api/admin/agent-status`

### Agent Route Pattern

```
app/api/cron/{agent-name}/route.ts
```

### API Auth Pattern (Dual Auth)

All admin/dashboard-facing APIs accept BOTH:
1. `Bearer CRON_SECRET` header (for cron jobs and server-to-server)
2. Clerk session cookies (for browser dashboard access)

```typescript
const hasCronAuth = authHeader === `Bearer ${process.env.CRON_SECRET}`;
if (!hasCronAuth) {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
```

## Environment Variables Required

| Variable | Purpose | Set In |
|---|---|---|
| `CRON_SECRET` | Auth for all cron endpoints + action token signing | Vercel env (production) |
| `RESEND_API_KEY` | Email delivery (Resend) | Vercel env (production) |
| `SUPABASE_URL` | Database for agent logging | Vercel env (production) |
| `SUPABASE_SERVICE_ROLE_KEY` | Admin DB access | Vercel env (production) |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | GSC API access | Vercel env (production) |
| `STRIPE_SECRET_KEY` | Revenue tracking | Vercel env (production) |
| `GITHUB_TOKEN` | Auto-rewriter commits to GitHub | Vercel env (production) |
| `GEMINI_API_KEY` | AI-powered meta title generation | Vercel env (production) |

## Email Infrastructure

- **Sending domain**: `updates.richardewing.io` (verified in Resend)
- **From**: `seo@updates.richardewing.io`
- **DNS records**: DKIM, SPF, MX on IONOS
- **Recipient**: `richardewing@exogram.ai`

## What AI CANNOT Automate

These tasks require Richard's human judgment, relationships, and creativity:

| Task | Why It's Human-Only |
|---|---|
| **Client advisory sessions** | Requires empathy, reading the room, relationship trust |
| **Keynote presentations** | Public speaking, audience adaptation, charisma |
| **Strategic pricing decisions** | Market positioning requires intuition + data |
| **Content final approval** | Brand voice authenticity, strategic alignment |
| **Framework invention** | Creating new frameworks (PAIG, Exogram) requires original thinking |

## Files This Skill Touches

- `app/api/cron/` — All agent route files
- `app/api/actions/trigger/` — One-click action system
- `app/api/admin/` — Agent status, revenue APIs
- `app/api/gsc/` — Google Search Console API
- `app/admin/` — Dashboard (command-center, seo-performance, agents)
- `vercel.json` — Cron schedule registration
- Supabase tables: `agent_runs`, `lead_scores`, `seo_snapshots`
