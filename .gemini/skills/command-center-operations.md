---
name: command-center-operations
description: "ACTIVATE this skill when working on the admin Command Center dashboard, email action system, revenue tracking, or any admin-facing operations interface. Governs the design, data flow, and action system for richardewing.io operations."
---

# Command Center Operations Skill

## Purpose

The Command Center is the single pane of glass for all richardewing.io operations. Every metric shown is connected to an autonomous action — no vanity dashboards.

## Architecture

### Dashboard: `/admin/command-center`

| Tab | Data Source | Connected Action |
|---|---|---|
| **Revenue** | `/api/admin/revenue` (Stripe) | Tracks advisory conversion funnel — are tools → advisory upsells working? |
| **SEO** | `/api/gsc/performance` (GSC) | Feeds auto-rewriter — low CTR pages get rewritten automatically |
| **Agents** | `/api/admin/agent-status` (Supabase) | Monitors autonomous loop health — any agent failure stops the chain |
| **Pipeline** | `/api/admin/agent-status` (lead_scores) | Lead Scorer auto-tiers users by diagnostic tool engagement |

### Every Metric → Action Map

| Metric | If Bad → Autonomous Action |
|---|---|
| CTR < 2% on tool/advisory page | Auto-Rewriter rewrites meta title |
| Paid/Glossary ratio < 1.0x | Flags in email, suggests more tool/advisory content |
| Agent "error" status | Included in email digest as action item |
| HOT leads in pipeline | Lead Scorer already flagged for follow-up |
| Revenue by category imbalanced | Shows which product line needs attention |
| Starving crowd with 0 queries | Gap identified → content creation needed |

### One-Click Email Actions

The daily email digest includes **clickable action buttons** for each recommendation:

```
[✅ Approve & Deploy] → /api/actions/trigger?token=HMAC_SIGNED_TOKEN
```

**Flow**:
1. SEO Optimizer identifies action items
2. `generateActionUrl()` creates HMAC-signed URLs with page data
3. Email includes buttons for each action
4. Richard clicks "Approve & Deploy"
5. Browser opens `/api/actions/trigger` which:
   - Verifies HMAC token (expires 72hr)
   - Triggers auto-rewriter for that specific page
   - Sends confirmation email with results
   - Renders success page in browser

## Auth & Security

### Admin Dashboard Access
- **Auth**: Clerk session required
- **Allowlist**: `richardewing1@gmail.com`, `richardewing@exogram.ai`
- **Layout**: `app/admin/layout.tsx` enforces auth on ALL `/admin/*` routes

### API Dual Auth
All dashboard-facing APIs accept BOTH:
- `Bearer CRON_SECRET` (server-to-server, cron jobs)
- Clerk session cookies (browser dashboard)

### Email Action Tokens
- HMAC-SHA256 signed with CRON_SECRET
- Payload: action type + page data (url, impressions, clicks, ctr, queries)
- 72-hour expiry
- One-time use is NOT enforced (safe to click multiple times — rewriter is idempotent)

## Design System (Light Theme)

The Command Center uses the site's standard design tokens:
- **Background**: `#F5F0EB` (warm cream) — inherited from body
- **Cards**: `bg-white border-black/8 shadow-sm rounded-xl`
- **Card hover**: `border-black/15 shadow-[0_4px_12px_rgba(0,0,0,0.08)]`
- **Text primary**: `#1A1A1A`, secondary: `#3A3A3A`, muted: `#6B6B6B`
- **Accent**: `#7C3AED` (purple), `#0891B2` (cyan)
- **Headings**: Space Grotesk font
- **Active tab**: `bg-[#7C3AED] text-white`
- **Status badges**: Pastel backgrounds (emerald-50, red-50, amber-50)

## Files

- `app/admin/layout.tsx` — Auth gate + admin nav bar
- `app/admin/command-center/page.tsx` — Server metadata
- `app/admin/command-center/content.tsx` — Client dashboard component
- `app/api/admin/revenue/route.ts` — Stripe revenue API
- `app/api/admin/agent-status/route.ts` — Agent status API
- `app/api/gsc/performance/route.ts` — GSC performance API
- `app/api/actions/trigger/route.ts` — Email action handler
