---
name: empirical-research
description: Real-time multi-source empirical research workflow (trailing 30 days) across developer discussions, executive commentary, search console demand, Semrush CPC signals, GitHub trends, and community telemetry. Use before drafting new essays, thought leadership, diagnostic metrics, or curriculum modules.
---

# Empirical Research & 30-Day Grounding Protocol

This skill enforces **Step 1 (Research)** of the Sovereign 5-Step Asset Engine:
$$\text{Research} \longrightarrow \text{Concept} \longrightarrow \text{Framework} \longrightarrow \text{Diagnostic} \longrightarrow \text{Implementation}$$

Every curriculum module, diagnostic benchmark, and strategic essay must start with observed reality from the trailing 30 days, not stale training data or recycled consulting assumptions.

---

## 1. Automated Pre-Draft Telemetry Harvest (`last30days` + Search Pipe)

Before running manual web searches or writing an outline, execute our deterministic demand and pain harvester:
```bash
node .agents/scripts/pull-demand-telemetry.mjs
```
Inspect `.scratch/demand-telemetry-latest.json` alongside [`demand-and-search-intelligence`](file:///d:/Antigravity_RichardEwing.io/.agents/skills/demand-and-search-intelligence/SKILL.md) to ground the topic in live signals across five empirical channels:

1. **Practitioner Discourse (Hacker News & Reddit 30-Day Harvester)**:
   - Review the ranked Hacker News threads (`points + comments * 1.5`) and `r/ExperiencedDevs` / `r/CTO` monthly top discussions captured in `.scratch/demand-telemetry-latest.json`.
   - Look for what broke in production, what unexpectedly blew up cloud or token budgets, what teams rolled back, and what Engineering Managers complain about after hours.
2. **First-Party & Market Search Intent (GSC + `semrush_mcp`)**:
   - Check Google Search Console striking-distance queries (Positions 4 to 15) and high-impression / low-CTR pages.
   - When `semrush_mcp` API units are available, check `phrase_questions` and CPC bids to confirm where CFOs, COOs, and VPs of Operations are spending real budget.
3. **Executive & Industry Postmortems (X, LinkedIn & Conference Transcripts)**:
   - Run targeted `search_web` queries for trailing-30-day postmortems, earnings-call margin commentary, and infrastructure migrations.
   - Filter out promotional launch threads and vendor press releases.
4. **Code & Repository Friction (GitHub Issues & ADRs)**:
   - Check open issues and pull request discussions on active frameworks (Next.js, Cloudflare Workers, MCP servers, LLM SDKs) to spot where abstractions fail under real traffic.
5. **Macro & Capital Signals (Prediction Markets & CapEx Filings)**:
   - Cross-check macro timelines, enterprise software budget shifts, and model pricing compression.

---

## 2. Extraction Invariants (The Lived Evidence Standard)

1. **Concrete Friction Over Theory**: Prioritize numbers that surprised real teams: unexpected token bills, latency spikes, audit failures, or stalled migrations.
2. **Merge Overlapping Signals**: Do not list five separate quotes repeating the same obvious trend. Cluster them into the underlying economic or organizational root cause.
3. **The 10th Thought Principle**: Skip the first nine predictable takes anyone would write on day one. Dig into the second-order operational tension underneath (who gets blamed in the Tuesday staff meeting, which budget line absorbs the cost, and why the obvious fix fails).
4. **Attribution Integrity**: Every statistic, benchmark, or dollar figure must cite its specific empirical source or company context. Never state unsourced numbers.

---

## 3. Pre-Draft Synthesis Gate

Before writing a single paragraph of copy:
- **State the Core Tension**: What does vendor marketing claim vs. what is actually happening on the floor for a CFO, COO, Customer Support Manager, or Engineering Manager?
- **Name the Operational Cost**: Who is losing gross margin, burning engineering weeks, or carrying compliance liability?
- **Wire the Asset Engine**: Map how this research feeds a named Concept, an interactive Diagnostic Calculator (`/tools/*`), and a commercial path (`<ScorecardCheckoutDrawer />` + `/schedule?source=<slug>`).
