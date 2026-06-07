---
name: autonomous-agent-stack-design
description: "ACTIVATE this skill when designing, auditing, deploying, or maintaining the autonomous AI agent stack for richardewing.io. This skill defines the methodology for identifying every recurring business task, categorizing automatable vs. human-only work, and building self-running agent infrastructure."
---

# Autonomous Agent Stack Design

## Purpose

This skill ensures Richard Ewing's hours go ONLY to high-leverage work that re-energizes him. Every recurring task must be categorized, and anything automatable must be built as an autonomous agent with zero manual triggering.

## Task Discovery Protocol

### Where to Find Recurring Tasks

1. **API Routes** (`app/api/`) — Every route is a potential automation candidate
2. **Content Pipelines** — Blog, glossary, curriculum, PSEO pages
3. **SEO Infrastructure** — Sitemap, IndexNow, canonical checking, GSC monitoring
4. **Payment Processing** — Stripe webhooks, checkout flows
5. **Newsletter** — Beehiiv integrations, subscriber management
6. **Database** — Supabase operations, data cleanup, analytics aggregation
7. **Monitoring** — Uptime, performance, error tracking
8. **Intelligence** — Market scanning, competitor monitoring, trend detection
9. **Email** — Client communications, daily reports, lead nurturing
10. **Scripts** — Any manual scripts in root, `scripts/`, or `package.json`
11. **Scheduled Tasks** — Existing cron jobs, calendar-driven tasks
12. **Client Deliverables** — Reports, audits, diagnostic results

### Categorization Framework

| Category | Definition | Action |
|---|---|---|
| **ALREADY AUTOMATED** | Agent exists and runs on schedule | Monitor only |
| **CAN AUTOMATE NOW** | Code exists, just needs cron/trigger | Wire it up |
| **NEEDS CODE** | Automation possible but code must be written | Build it |
| **CANNOT AUTOMATE** | Requires human judgment, creativity, or relationship | Mark as high-leverage |

## Agent Architecture Standards

### Every Agent MUST Have

1. **Vercel Cron trigger** — No manual triggering. Ever.
2. **CRON_SECRET auth** — Verify `Authorization: Bearer ${CRON_SECRET}` header
3. **Supabase logging** — Write every run to `agent_runs` table with status, duration, metadata
4. **Error handling** — Try/catch with detailed error logging. Never silently fail.
5. **Execution time tracking** — Log start time, end time, duration
6. **Status endpoint** — Report health at `/api/cron/status`

### Agent Route Pattern

```
app/api/cron/{agent-name}/route.ts
```

### Standard Agent Template

```typescript
import { NextResponse } from 'next/server';
import { logAgentRun } from '@/lib/agents/logger';

export async function GET(request: Request) {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const startTime = Date.now();
    try {
        // === AGENT LOGIC HERE ===

        const duration = Date.now() - startTime;
        await logAgentRun('agent-name', 'success', duration, { /* metadata */ });
        return NextResponse.json({ success: true, duration });
    } catch (error) {
        const duration = Date.now() - startTime;
        await logAgentRun('agent-name', 'error', duration, { error: String(error) });
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
```

### Cron Schedule Registration

Add to `vercel.json`:
```json
{
    "crons": [
        {
            "path": "/api/cron/{agent-name}",
            "schedule": "0 7 * * *"
        }
    ]
}
```

## Currently Deployed Agents

| # | Agent | Path | Schedule | What It Does |
|---|---|---|---|---|
| 1 | Intelligence Digest | `/api/cron/intelligence-digest` | Daily 7am UTC | Aggregates market intelligence |
| 2 | Benchmark Aggregator | `/api/cron/benchmark-aggregator` | Daily 8am UTC | Collects performance benchmarks |
| 3 | SEO Health Monitor | `/api/cron/seo-health` | Daily 6am UTC | Monitors SEO metrics |
| 4 | Lead Scorer | `/api/cron/lead-scorer` | Every 6 hours | Scores and prioritizes leads |
| 5 | Content Expander | `/api/cron/content-expander` | Daily 9am UTC | Generates content expansion drafts |
| 6 | Daily Ops Email | `/api/cron/daily-ops-email` | Daily 7am UTC | Sends daily briefing to Richard |

## Environment Variables Required

| Variable | Purpose | Set In |
|---|---|---|
| `CRON_SECRET` | Auth for all cron endpoints | Vercel env (production) |
| `RESEND_API_KEY` | Email delivery for daily ops | Vercel env (production) |
| `SUPABASE_URL` | Database for agent logging | Vercel env (production) |
| `SUPABASE_SERVICE_ROLE_KEY` | Admin DB access | Vercel env (production) |

## What AI CANNOT Automate

These tasks require Richard's human judgment, relationships, and creativity:

| Task | Why It's Human-Only |
|---|---|
| **Client advisory sessions** | Requires empathy, reading the room, relationship trust |
| **Keynote presentations** | Public speaking, audience adaptation, charisma |
| **Strategic pricing decisions** | Market positioning requires intuition + data |
| **Hiring / team building** | Culture fit, character judgment |
| **Partnership negotiations** | Trust-building, reading intent, relationship capital |
| **Content final approval** | Brand voice authenticity, strategic alignment |
| **Investment decisions** | Risk tolerance is personal |
| **Crisis communication** | Stakeholder management requires human judgment |
| **Board relationship management** | Trust, influence, political navigation |
| **Framework invention** | Creating new frameworks (PAIG, Exogram) requires original thinking |

## Agent Monitoring

### Dashboard
- Located at `/admin/agents`
- Auto-refreshes every 30 seconds
- Shows last run status, duration, next scheduled run for each agent
- Clerk-authenticated (admin only)

### API Endpoint
- `GET /api/admin/agent-status` — Returns JSON of all agent statuses
- Requires Clerk authentication

### Daily Email Report
- Sent daily at 7am UTC to richardewing@exogram.ai
- Includes: all agent statuses, site metrics, action items
- Uses Resend for delivery

## When to Add New Agents

Add a new agent when:
1. A task happens on a regular schedule (daily, weekly, hourly)
2. The task can be fully defined with deterministic logic
3. The task doesn't require real-time human input
4. The cost of a missed execution is recoverable
5. The output can be validated programmatically

## Files This Skill Touches

- `app/api/cron/` — All agent route files
- `lib/agents/` — Shared agent utilities (logger, email, dispatcher)
- `vercel.json` — Cron schedule registration
- `app/admin/agents/` — Agent monitoring dashboard
- `app/api/admin/agent-status/` — Agent status API
- Supabase tables: `agent_runs`, `lead_scores`, `content_drafts`
