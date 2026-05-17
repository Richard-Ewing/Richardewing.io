# Antigravity Operational Governance — Operations Manual

## What This System Does

This is a meta-governance skill that prevents the exact operational failures observed across 12+ production sessions of building RichardEwing.io. Every rule, threshold, and protocol exists because it was violated and caused rework.

## The Problem It Solves

**Without this skill, every agent session repeats the same mistakes:**

1. **Incomplete deployments** — Pages ship without sitemap or llms.txt registration
2. **Contrast failures** — Dark backgrounds with unreadable text require rework in the next session
3. **Partial parity** — 6 of 15 systems get updated, the other 9 are forgotten
4. **Broken builds** — Code is pushed before verifying the build passes
5. **Missing assets** — Skills ship without GETTING-STARTED.md or tools/
6. **Duplicate content** — README files are identical across skills, destroying trust
7. **No verification** — Changes are reported as "done" without programmatic verification

**Cost of these failures across observed sessions:**
- 4+ hours of rework per session
- 3+ sessions spent fixing contrast issues
- 2+ sessions spent expanding partial content to full parity
- Multiple sessions fixing broken sitemap/llms.txt registration

## Incident Chronology

### Incident 1: The Identical README Problem
**Date**: Session 6 (May 2026)
**What happened**: All 15 README.md files were generated with identical content — same incidents, same telemetry, same quotes. Only the title changed.
**Impact**: The entire marketplace felt "generated" instead of institutional.
**Resolution**: Complete rewrite of all 15 READMEs with unique content.
**Governance rule created**: Asset Parity Protocol (Skill 2D) + uniqueness verification.

### Incident 2: The Dark Box Readability Failure
**Date**: Sessions 7, 8, 10 (recurring)
**What happened**: ExogramBridge component used `bg-[#1A1A1A]` with `text-gray-300` — unreadable text on dark background.
**Impact**: Required emergency fix in 3 separate sessions.
**Resolution**: Converted to light theme with WCAG AA contrast.
**Governance rule created**: Contrast Enforcement Protocol (Skill 2E).

### Incident 3: The 6-of-15 Expansion Gap
**Date**: Session 10 (May 2026)
**What happened**: Failure cards only covered 6 operational failures while the marketplace contained 15 skills.
**Impact**: Disconnection between the diagnostic layer and the product layer.
**Resolution**: Expanded from 6 to 15 failure definitions.
**Governance rule created**: Content Expansion Protocol (Skill 2F).

### Incident 4: The Missing SEO Registration
**Date**: Sessions 4, 5, 7 (recurring)
**What happened**: New pages were deployed but not added to sitemap.ts or llms.txt.
**Impact**: Pages were invisible to search engines and LLMs for days/weeks.
**Resolution**: SEO Registration Pipeline (Skill 2B) — mandatory triple registration.

### Incident 5: The Broken Build Push
**Date**: Session 8 (May 2026)
**What happened**: A syntax error in skills.ts caused the build to fail. Code was committed before verification.
**Impact**: Broken deployment to production.
**Resolution**: Build-Verify-Ship Pipeline (Skill 2A) — build MUST pass before commit.

## Telemetry Thresholds

| Signal | Warning | Critical | Action |
|---|---|---|---|
| Build errors | 1+ warnings | Any error | HALT — fix before commit |
| Missing sitemap entries | 1 missing | 2+ missing | HALT — register all new pages |
| Missing llms.txt entries | 1 missing | 2+ missing | HALT — add descriptive entries |
| Skill files missing | 1 file | 2+ files | HALT — complete all assets |
| Contrast violations | 1 section | Any body text | HALT — fix before shipping |
| Content parity gap | 1 system | 3+ systems | HALT — expand to full coverage |
| Duplicate content | 1 match | Any duplicate | HALT — differentiate immediately |

## Economic Impact

| Without Governance | With Governance |
|---|---|
| 4+ hours rework per session | Zero rework |
| 3+ sessions to fix contrast | Fixed on first pass |
| Broken production deploys | Zero broken deploys |
| Invisible pages (no SEO) | 100% indexed within 24h |
| Partial parity (trust erosion) | Full parity (institutional trust) |

**Estimated savings**: 60-80% reduction in session-over-session rework.

## Ecosystem Pain Signals

These are real patterns observed across production sessions:

> "Why does every new session start by fixing things from the last session?"

> "The dark section is unreadable again."

> "Only 6 of the 15 systems got the update."

> "The page exists but Google doesn't know about it."

> "The build was broken when I pushed."

## Architecture

This skill spans ALL FOUR layers of the runtime architecture:

```
┌─────────────────────────────────────────────┐
│  IDENTITY: Mission, principles, authority   │
│  boundaries, communication style            │
├─────────────────────────────────────────────┤
│  SKILL: Build pipeline, SEO registration,   │
│  triple-check, asset parity, contrast,      │
│  content expansion protocols                │
├─────────────────────────────────────────────┤
│  TOOL: Authorized commands, file paths,     │
│  external requests, restricted operations   │
├─────────────────────────────────────────────┤
│  ENVIRONMENT: Repo structure, data files,   │
│  financial constraints, session state       │
└─────────────────────────────────────────────┘
```

## Learn More

- Runtime Architecture: https://richardewing.io/runtime-architecture
- All 15 Governance Skills: https://richardewing.io/skills
- Getting Started: https://richardewing.io/skills/getting-started
