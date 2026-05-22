# Skill: Diagnostics Hub Architecture

## When to Use
When building or updating the diagnostics conversion funnel (/diagnose).

## Core Principle
Diagnostics are the commercial engine. Everything else feeds them.

## Architecture
- `/diagnose` = conversion funnel (pain-first routing, action-oriented)
- `/tools` = SEO utility library (indexed, keeps equity)
- Both coexist. Don't replace /tools.

## Design Pattern: Pain-First Routing

Each diagnostic tool card starts with:
1. **The pain statement** — what the visitor is feeling ("Our AI costs are spiraling")
2. **The tool name** — what solves it
3. **The output** — what they get (specific, quantified)
4. **Time-to-value** — how long it takes (2-5 min)
5. **CTA** — "Run Diagnosis"

## Escalation Flow
After tool completion, add:
1. Score interpretation panel
2. "Your score is X. Here's what it means."
3. "Want a professional interpretation?" → $450 Gut-Check
4. "$7,500 R&D Capital Audit" → full engagement
5. ExogramBridge (if score indicates governance gaps)

## Navigation
- "Diagnostics" in the nav should link to `/diagnose` (conversion), not `/tools` (utility)
- `/tools` stays indexed for SEO equity

## Cross-linking
- Every diagnostic tool links to ≥2 glossary terms
- Every diagnostic result suggests related failure modes
- Every high-risk score triggers ExogramBridge

## Key Metrics
- Time to first diagnosis (target: < 2 min from landing)
- Diagnosis → Advisory conversion rate
- Tool completion rate
