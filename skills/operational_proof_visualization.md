# Skill: Operational Proof Visualization

## When to Use
When building interactive visualizations, simulators, or dashboards that make operational risk VISIBLE, not just intellectually understood.

## Core Principle
Enterprise executives don't buy frameworks. They buy outcomes they can SEE.

The platform must cross the threshold from:
- "intellectually convincing" → "operationally undeniable"

## Component Patterns

### 1. Escalation Simulator (RuntimeEscalationSimulator)
Interactive/animated cascade visualization:
- Auto-plays on scroll-into-view (IntersectionObserver)
- Manual stage controls for user exploration
- Shows 4-5 stages of failure escalation
- Each stage has: specific metrics (tokens, latency, confidence, cost)
- Cost multiplier callout (1× → 207×)
- Governance interception points at each stage
- CTA: /diagnose and failure database

### 2. Cost Burn Curve
Chart showing:
- X-axis: Usage volume (users, requests, sessions)
- Y-axis: Cost per request / total monthly cost
- Inflection point: where cost > revenue (collapse point)
- Governance line: cost with tiered routing vs. without

### 3. Governance Maturity Scorecard
Visual representation:
- 5 maturity levels (Ad-hoc → Optimized)
- Current state indicator
- Industry benchmark comparison
- Recommended next actions per level

### 4. Retry Escalation Curve
Animated chart:
- X-axis: Retry count
- Y-axis: Cumulative token cost
- Shows exponential growth
- Governance ceiling at retry budget cap

## Design Rules
- Dark backgrounds for data visualizations (zinc-950)
- Colored metric bars with animated fill
- Use real numbers grounded in market research
- Always include governance interception callout
- Always link to /diagnose or /exogram
- Auto-play on scroll, manual controls available

## Deployment Targets
- Homepage (between FourHorsemen and ToolsPreview)
- /diagnose (between tools grid and advisory escalation)
- /runtime-failure-index (sidebar or embedded)
- /for-ctos (social proof section)
- /for-boards (risk visualization)

## Research Grounding
Every number must come from real data:
- Reddit/HN: practitioner cost reports
- Enterprise case studies: anonymized outcomes
- Published research: RAND, MIT, Gartner
- Own tools: PDI, AUEB benchmarks
