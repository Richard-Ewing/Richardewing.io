# AI Cost Containment System

> Runtime Layer: Environment Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Any API-consuming agent

## Purpose

Financial circuit breakers for agentic execution. Tracks token spend, enforces budgets, kills runaway processes.

## When This Skill Activates

- Task spend exceeds budget
- Unattended execution > 30 minutes
- Spend rate exceeds threshold
- Weekend/overnight execution detected

## Installation

Copy this entire directory into your project root:

```
cp -r ./ai-cost-containment/ /your-project/.claude/skills/ai-cost-containment/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/ai-cost-containment/CLAUDE.md
Load policy: .claude/skills/ai-cost-containment/policy.yaml
```

## Directory Structure

```
ai-cost-containment/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── budget-tracker.sh
    ├── spend-alert.sh
    ├── kill-runaway.sh
    ├── cost-report.sh
```

## Tools

### `budget-tracker.sh`
Track cumulative token spend against budget

```bash
bash tools/budget-tracker.sh
```

### `spend-alert.sh`
Alert when approaching budget limits

```bash
bash tools/spend-alert.sh
```

### `kill-runaway.sh`
Force-terminate processes exceeding cost limits

```bash
bash tools/kill-runaway.sh
```

### `cost-report.sh`
Generate cost breakdown by task/session/developer

```bash
bash tools/cost-report.sh
```

## Policy Reference

See `policy.yaml` for all governance thresholds, circuit breakers, and escalation rules.

## Middleware Reference

See `middleware.ts` for the TypeScript runtime interception engine.

## Compatible Agents

- Claude Code
- Cursor
- Windsurf
- Cline
- Roo Code
- Codex
- Any API-consuming agent

## Runtime Architecture

This skill operates at the **Environment Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
