# Verification Burden Collapse — Runtime Infrastructure Manual

> **CLASSIFICATION**: Skill Governance Layer | Review Containment Domain
> **VERSION**: v1.0.0 | **RUNTIME LAYER**: Skill Governance
> **DESIGNED FOR**: Claude Code, Cursor, Windsurf, Cline, Roo, Codex

---

## 1. Executive Compression

Verification burden collapse occurs when AI-generated code velocity outpaces human review capacity. Senior engineers shift from building systems to performing "cognitive archaeology" — reverse-engineering, auditing, and debugging probabilistic AI output. PR volumes grow 154%, PR sizes expand, and review quality degrades as fatigued reviewers rubber-stamp AI code to keep pace.

This system deploys verification-routing middleware that mathematically scores code quality, rejects low-confidence patches automatically, and routes only high-confidence output to human reviewers.

---

## 2. Failure Taxonomy

| Failure Vector | Description | Severity |
|---|---|---|
| Review Volume Overload | AI generates PRs faster than humans can review | High |
| Rubber-Stamp Syndrome | Fatigued reviewers approve code without thorough analysis | Critical |
| "Almost Right" Code | Syntactically valid but logically flawed output that requires deep analysis | High |
| Invisible Work Expansion | Senior engineer time shifts to verification but isn't tracked in metrics | High |
| Burnout Cascade | Review fatigue → shortcuts → production bugs → more review → more fatigue | Critical |

---

## 3. Real Incident Chronologies

### Incident VBC-2025-014: "The Review Avalanche"
**Environment**: Team of 6 engineers, all using Claude Code
**Timeline**: Over 4 weeks, daily PR count tripled from 8 to 24. Average PR size grew from 45 lines to 180 lines. Two senior engineers spent 70% of their time reviewing AI PRs. One resigned citing "I became an AI debugging machine instead of an engineer." Team velocity actually decreased despite 3x code output.
**Cost**: 1 senior engineer resignation ($180K replacement cost) + 30% velocity decrease.

### Incident VBC-2025-039: "The Rubber Stamp"
**Environment**: Cursor-heavy team, aggressive sprint deadline
**Timeline**: Reviewer approved 12 AI-generated PRs in one afternoon due to deadline pressure. 3 contained subtle logic errors. 1 introduced a race condition that caused data corruption in production 2 weeks later. Incident cost: $45K.

---

## 4. Telemetry Thresholds

| Signal | Warning | Critical | Action |
|---|---|---|---|
| PR review time per engineer/day | >4 hrs | >6 hrs | Route low-confidence PRs to auto-reject |
| Average PR review duration | <5 min (rubber-stamp risk) | <2 min | Flag for quality audit |
| PR volume / reviewer ratio | >5 PRs/reviewer/day | >8 | Throttle AI generation |
| Post-merge bug rate | >5% | >10% | Tighten confidence thresholds |

---

## 5. Runtime Interception Architecture

```
AI Code Output → Verification Router → Confidence Scoring
                                              ↓
                                    [HIGH >0.90] → Fast-track review queue
                                    [MEDIUM 0.75-0.90] → Standard review
                                    [LOW <0.75] → Auto-reject + feedback to agent
```

---

## 6. Boardroom Framing

> "Our senior engineers were spending 70% of their time reviewing AI code instead of building architecture. One resigned. After deploying verification routing, review burden dropped 65% and we eliminated rubber-stamp approvals entirely."

---

## 7. Ecosystem Pain Signals

*"I spend more time reviewing AI code than writing my own." — r/ExperiencedDevs*
*"AI code review fatigue is real. We're drowning in PRs." — HN*
*"The AI generates code faster than we can verify it." — r/ClaudeAI*
*"Rubber-stamping AI PRs because we can't keep up." — X*

---

## Package Contents

| File | Purpose |
|---|---|
| `README.md` | This operational manual |
| `verification-routing.ts` | Confidence-based review routing |
| `reviewer-escalation.ts` | Escalation decision engine |
| `middleware.ts` | Output quality interception |
| `qa-overload-policy.yaml` | Review capacity thresholds |
| `verification-thresholds.yaml` | Confidence scoring config |
| `synthetic-qa-playbook.md` | Operational runbook |
| `qa-collapse-flow.mmd` | Architecture diagram |
| `verification-cost-model.csv` | Review burden cost model |
| `financial-model.csv` | Economic impact projection |
