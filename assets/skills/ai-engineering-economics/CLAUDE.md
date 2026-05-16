# AI Engineering Economics Models

> Runtime Layer: Environment Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Any AI development workflow

## Purpose

Tracks synthetic COGS across all agentic tasks. Measures true ROI including hidden verification and remediation costs.

## When This Skill Activates

- Sprint ROI turns negative
- Cost overrun exceeds 30%
- Verification burden exceeds 50% of task cost
- Quarterly AI spend audit due

## Installation

Copy this entire directory into your project root:

```
cp -r ./ai-engineering-economics/ /your-project/.claude/skills/ai-engineering-economics/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/ai-engineering-economics/CLAUDE.md
Load policy: .claude/skills/ai-engineering-economics/policy.yaml
```

## Directory Structure

```
ai-engineering-economics/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── cogs-tracker.sh
    ├── roi-calculator.sh
    ├── cost-per-feature.sh
    ├── quarterly-report.sh
```

## Tools

### `cogs-tracker.sh`
Log token costs, verification hours, remediation hours per task

```bash
bash tools/cogs-tracker.sh
```

### `roi-calculator.sh`
Calculate true ROI including hidden costs

```bash
bash tools/roi-calculator.sh
```

### `cost-per-feature.sh`
Calculate actual cost per shipped feature

```bash
bash tools/cost-per-feature.sh
```

### `quarterly-report.sh`
Generate executive economic summary

```bash
bash tools/quarterly-report.sh
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
- Any AI development workflow

## Runtime Architecture

This skill operates at the **Environment Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
