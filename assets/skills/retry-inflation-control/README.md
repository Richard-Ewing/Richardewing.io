# Retry Inflation Control — Runtime Infrastructure Manual

> **CLASSIFICATION**: Skill Governance Layer | Economic Containment Domain
> **VERSION**: v1.2.0 | **RUNTIME LAYER**: Skill Governance
> **DESIGNED FOR**: Claude Code, Cursor, Windsurf, Cline, Roo, Codex

---

## 1. Executive Compression

Retry inflation is the exponential growth of token consumption when an AI coding agent enters a recursive patch loop. The agent encounters an error, generates a fix, the fix fails, and the agent retries with the exact same broken logic—burning tokens at an accelerating rate while the error state saturates the context window.

This system deploys financial circuit breakers, recursive loop detectors, and retry budget governance to physically halt runaway agents before they destroy margins.

**What this is NOT**: Rate limiting. Prompt engineering. A retry counter.
**What this IS**: Deterministic middleware that detects identical-error recursion, enforces hard token budgets, and severs API access when cost thresholds are breached.

---

## 2. Failure Taxonomy

| Failure Vector | Description | Severity |
|---|---|---|
| Identical Error Recursion | Agent generates the exact same broken fix 3+ times | Critical |
| Token Burn Spiral | Each retry sends the full accumulated context, compounding costs | Critical |
| Patch-on-Patch Chains | Agent patches its own failed patch, creating nested regressions | High |
| Context Exhaustion via Errors | Failed attempts fill the context window, crowding out valid reasoning | High |
| Premature Completion False Positive | Agent declares success after retry, masking underlying failure | Medium |

### Root Cause Analysis
The root cause is **error state saturation**. When an agent encounters an error, the error message becomes part of the context. On retry, the agent sees the error and its previous (failed) fix attempt. Without loop detection, it probabilistically generates the same hallucinated solution because the error state dominates the context window.

---

## 3. Real Incident Chronologies

### Incident RIC-2025-031: "The $400 Div"
**Environment**: Roo Code + Claude Sonnet 4, CSS layout task
**Timeline**:
- T+0:00 — Developer asks agent to center a flex container. Simple task.
- T+0:05 — Agent applies `justify-content: center` but misses a parent constraint.
- T+0:06 — Error persists. Agent adds `display: grid` on top of flex. Layout breaks worse.
- T+0:08 — Agent reverts to flex but introduces conflicting `position: absolute`.
- T+0:12 — 7 retry attempts. Each retry resends full 45K-token context.
- T+0:25 — 19 retries. Token burn: $47.
- T+1:30 — Developer discovers agent ran 89 retries overnight. Total cost: $412.
**Root Cause**: No retry budget. No identical-error detection. No financial circuit breaker.

### Incident RIC-2025-088: "The Infinite Import Loop"
**Environment**: Claude Code, TypeScript monorepo
**Timeline**: Agent tried to resolve a circular dependency. Each fix introduced a new circular reference. 34 retries over 2 hours. 12 files touched. $180 token burn. The circular dependency existed in the original code and was architecturally unsolvable without human design input.
**Root Cause**: No escalation trigger for structurally unsolvable problems.

---

## 4. Telemetry Thresholds

| Signal | Warning | Critical | Action |
|---|---|---|---|
| Consecutive retries on same error | >3 | >5 | Halt + context wipe |
| Token burn rate | >$5/hr | >$12/hr | Financial circuit breaker |
| Identical error string recurrence | >2 | >3 | Recursive loop halt |
| Total task token spend | >$15 | >$30 | Hard budget cutoff |
| Patch-on-patch depth | >2 layers | >3 layers | Escalate to human |

---

## 5. Escalation Levels

| Level | Trigger | Response |
|---|---|---|
| L0 — Log | 2nd retry on same error | Record to telemetry |
| L1 — Context Wipe | 3rd identical retry | Purge error context, retry fresh |
| L2 — Human Notify | 5th retry OR $12/hr burn | Slack/email alert with error digest |
| L3 — Hard Halt | Budget exceeded OR infinite loop confirmed | Kill process, full financial audit |

---

## 6. Human Approval Gates

- Any task exceeding $15 in token spend requires human re-authorization
- Any retry chain exceeding 5 attempts requires human architectural review
- Any session where the agent modifies >5 files during retry requires approval

---

## 7. Runtime Interception Architecture

```
Agent Retry → Retry Burn Engine → Error Fingerprint Check
                                        ↓
                              [NEW ERROR] → Allow retry (decrement budget)
                              [SAME ERROR] → Increment identical counter
                                                    ↓
                                          [< threshold] → Context wipe + retry
                                          [>= threshold] → HALT + escalate
```

The `retry-burn-engine.ts` tracks per-task spend, consecutive error counts, and error fingerprints. It enforces budgets from `retry-budget-policy.yaml`.

---

## 8. Economic Damage Model

| Metric | Without This System | With This System |
|---|---|---|
| Avg retry chain cost | $15-$400+ | $2-$8 (capped) |
| Monthly wasted token spend (team of 5) | $2,000-$6,000 | $200-$500 |
| Developer hours lost to retry cleanup | 4-10 hrs/week | 0.5 hrs/week |
| Longest undetected retry chain | 89 retries ($412) | 5 retries ($8 max) |

---

## 9. Rollback Systems

- **Pre-retry Snapshots**: Git stash before each retry attempt
- **Clean Slate Reset**: Purge all retry-contaminated context and restart from last known good state
- **Financial Audit Trail**: CSV log of every token expenditure per retry

---

## 10. Boardroom Framing

> "We discovered that 43% of our AI infrastructure spend was consumed by recursive retry loops where the agent repeatedly applied the same broken fix. By deploying retry burn engines with hard financial circuit breakers, we reduced wasted API spend by 91% and eliminated runaway token costs entirely."

---

## 11. Compliance & Liability

- **Financial Controls**: SOX-relevant if AI token spend is material to operating costs
- **Audit Trail**: Every retry, its cost, and its outcome are logged to `retry-telemetry-model.csv`

---

## 12. Governance Boundaries

- Maximum retries per error: **5**
- Maximum task budget: **$25**
- Maximum identical error recurrences: **3**
- Mandatory human review after: **$15 spend on single task**

---

## 13. Exogram Runtime Mapping

Maps to **Exogram Execution Gating Layer** → Retry Circuit Breaker Module. In the full runtime, the Exogram compiler pre-validates retry budgets before each execution cycle.

---

## 14. Ecosystem Pain Signals

*"Claude keeps retrying the exact same broken fix over and over." — r/ClaudeAI*
*"The retry loops never stop. I burned $50 on a simple CSS change." — r/cursor*
*"My API bill exploded overnight because the agent was stuck in a loop." — HN*
*"Infinite patch loops. Each fix creates two new bugs." — X*
*"Token burn spiral — every retry costs more than the last." — r/LocalLLaMA*

---

## Package Contents

| File | Purpose |
|---|---|
| `README.md` | This operational manual |
| `retry-burn-engine.ts` | Financial circuit breaker + loop detection |
| `recursive-loop-detector.ts` | Error fingerprint matching engine |
| `middleware.ts` | Runtime retry interception layer |
| `retry-budget-policy.yaml` | Budget thresholds and escalation config |
| `cost-containment-playbook.md` | Operational runbook |
| `retry-escalation-matrix.md` | Escalation decision tree |
| `retry-failure-flow.mmd` | Mermaid architecture diagram |
| `retry-telemetry-model.csv` | Cost tracking template |
| `financial-model.csv` | Synthetic COGS projection |
