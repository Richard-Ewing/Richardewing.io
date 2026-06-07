---
name: market-intelligence-analysis
description: "ACTIVATE this skill when performing competitive intelligence, market analysis, pain point discovery, or audience segmentation for richardewing.io. This skill provides the methodology for scanning complaint data, clustering pain points, and identifying starving crowds to build for."
---

# Market Intelligence & Starving Crowd Analysis

## Purpose

This skill codifies the market analysis methodology used to identify the highest-value audiences for richardewing.io. It ensures every market scan follows the same rigorous process: source, cluster, score, and recommend.

## Source Scanning Protocol

### Where to Scan (Priority Order)

1. **Reddit** — Primary signal source for developer and engineering leader pain:
   - r/ExperiencedDevs — Senior/Staff engineer frustrations
   - r/CTO — Executive-level AI governance concerns
   - r/ChatGPT, r/OpenAI — Enterprise AI failures
   - r/CursorAI, r/ClaudeAI — AI coding tool frustrations
   - r/MachineLearning — Production ML governance gaps
   - r/devops — AI deployment failures
   - r/cscareerquestions — Career economics concerns

2. **App Store Reviews** — Product-specific pain:
   - GitHub Copilot, Cursor, Windsurf, Replit negative reviews
   - Enterprise AI platform reviews (G2, Gartner Peer Insights)

3. **Web Complaints** — Broad market signal:
   - Search patterns: "[tool] problems", "[tool] ROI negative", "[concept] complaints"
   - Industry blogs: HackerNoon, dev.to, InfoQ, The New Stack
   - News: TechCrunch, The Register, Ars Technica

4. **Social Media** — Real-time signal:
   - LinkedIn posts from VPs/CTOs/CISOs about AI frustrations
   - Twitter/X engineering discourse

5. **Industry Reports** — Validation data:
   - Gartner, Forrester, IDC for market sizing
   - Academic studies (METR, MIT, Stanford) for empirical data

### What to Capture per Complaint

| Field | Description |
|---|---|
| Pain Point | The specific complaint/frustration |
| Source | URL or reference |
| Frequency | How often this appears (rare/moderate/high/extremely high) |
| Who Complains | Persona: Developer, VP Eng, CTO, CFO, CISO, PM |
| Willingness to Pay | Estimated budget range |
| Growth Trajectory | Getting better, stable, getting worse, or exploding |

## Clustering Methodology

### Cluster Formation Rules

1. Group complaints by ROOT CAUSE, not surface symptom
2. Merge clusters that share the same buyer persona and budget source
3. Name each cluster with a visceral, memorable phrase (not academic language)
4. Maximum 7 clusters — if more, merge the weakest

### Scoring Matrix (50 Points Max)

| Criterion | Max Points | How to Score |
|---|---|---|
| Pain Intensity | 10 | Are they screaming? Career-threatening? Or just annoyed? |
| Monetizability | 10 | Will they pay enterprise pricing? Is there existing budget? |
| Growth Rate | 10 | Is the problem accelerating, stable, or declining? |
| Alignment | 10 | How well does richardewing.io's existing IP address this? |
| Speed to Revenue | 10 | How fast can we capture this with existing assets? |

### Buyer Qualification (BANTA Framework)

For each cluster, verify:
- **B**udget: Does this buyer control budget? How much?
- **A**uthority: Can they sign without committee approval?
- **N**eed: Is this urgent or nice-to-have?
- **T**iming: Is there a forcing function (regulation, billing change, board meeting)?
- **A**lternatives: Are there good alternatives? (Lower = better for us)

## Output Format

Every market intelligence scan must produce:

1. **Raw Complaint Clusters** — All sourced data with URLs
2. **Top 5 Ranked Clusters** — Scored on the 50-point matrix
3. **Starving Crowd Profile** — Specific persona, title, company size, trigger event
4. **Asset Alignment Map** — Which richardewing.io tools/content address each cluster
5. **Gap Analysis** — What's missing from the product/curriculum
6. **Revenue Play** — Lead magnet → diagnostic → framework → conversion path
7. **Timing Recommendation** — Why NOW (market events, regulatory deadlines, trend acceleration)

## Known Starving Crowds (As of June 2026)

### #1: VP/Director of Engineering — AI Economics Crisis
- **Trigger**: Copilot usage-based billing + CFO asking for ROI
- **Budget**: $25K-$150K/yr (reallocated from AI tool licenses)
- **Assets**: AUEB, Copilot ROI, PDI, Innovation Tax Calculator
- **Score**: 49/50

### #2: CISO/CRO — Shadow AI Compliance Panic
- **Trigger**: EU AI Act enforcement August 2026
- **Budget**: $150K-$1M+/yr (compliance budget)
- **Assets**: Shadow AI Scanner, EU AI Act Checker, PAIG
- **Score**: 42/50

### #3: Head of Platform — Agent Governance Gap
- **Trigger**: First silent agent failure in production
- **Budget**: $100K-$500K/yr (new category)
- **Assets**: Agentic Drift Matrix, Exogram, runtime architecture
- **Score**: 39/50

## Key Market Data Points (Sourced, Current)

Use these in content, tools, and advisory positioning:

| Stat | Source | Use For |
|---|---|---|
| $58K/engineer/year hidden AI costs | Industry analysis 2026 | AI Economics Crisis content |
| 19% slower with AI tools (experienced devs) | METR Study 2025 | Counter-narrative to AI hype |
| 41% of new code is AI-generated | GitHub data 2026 | Comprehension debt narrative |
| 29-33% developer trust in AI code | Industry survey 2026 | Trust gap positioning |
| 45% of AI code has security vulnerabilities | Security analysis 2026 | Shadow AI + governance |
| 95% of AI pilots fail ROI | Enterprise analysis 2026 | Pilot purgatory framework |
| 4.3 hrs/week verifying AI = $14.2K/yr | Productivity study 2026 | Verification tax concept |
| 67% employees use AI, 18% have policies | Enterprise survey 2026 | Shadow AI urgency |
| EU AI Act fines: 7% global turnover | EU regulation | Compliance deadline urgency |
| 88% of AI agent projects fail production | Industry analysis 2026 | Agent governance narrative |
| $67.4B global hallucination losses | Market analysis 2024 | Hallucination tax framework |
| 82% of production AI bugs from hallucinations | Bug analysis 2026 | Semantic failure concept |

## When to Re-Run This Analysis

- Every 90 days (market moves fast)
- When a major market event occurs (new regulation, major tool pricing change, viral incident)
- Before creating new content, tools, or advisory offerings
- Before any major site repositioning

## Files This Skill Touches

- Blog articles (`app/lib/blog-articles-*.ts`) — topic selection and framing
- Tool pages (`app/tools/*/page.tsx`) — pain-point positioning in meta
- Advisory offerings (`app/advisory/`) — service alignment to pain clusters
- Glossary terms (`app/glossary/terms.ts`) — new term creation based on market gaps
- Landing pages — conversion-focused pages targeting specific starving crowds
- Curriculum tracks — module additions based on gap analysis
