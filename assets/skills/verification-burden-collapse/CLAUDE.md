# Verification Burden Collapse Prevention

> Runtime Layer: Skill Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Copilot, GitHub Copilot Workspace

## Purpose

Prevents reviewer burnout by routing AI PRs through confidence-scored review queues and detecting rubber-stamp patterns.

## When This Skill Activates

- Reviewer approves PR in < 2 minutes
- Daily review hours exceed 4
- Confidence score < 0.75
- Review queue exceeds 8 PRs

## Installation

Copy this entire directory into your project root:

```
cp -r ./verification-burden-collapse/ /your-project/.claude/skills/verification-burden-collapse/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/verification-burden-collapse/CLAUDE.md
Load policy: .claude/skills/verification-burden-collapse/policy.yaml
```

## Directory Structure

```
verification-burden-collapse/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── review-timer.sh
    ├── confidence-router.sh
    ├── burnout-monitor.sh
    ├── quality-gate.sh
```

## Tools

### `review-timer.sh`
Track review duration and flag rubber-stamps

```bash
bash tools/review-timer.sh
```

### `confidence-router.sh`
Route PRs by confidence score to review tiers

```bash
bash tools/confidence-router.sh
```

### `burnout-monitor.sh`
Track cumulative review hours per engineer

```bash
bash tools/burnout-monitor.sh
```

### `quality-gate.sh`
Enforce minimum review standards before merge

```bash
bash tools/quality-gate.sh
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
- Copilot
- GitHub Copilot Workspace

## Runtime Architecture

This skill operates at the **Skill Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
