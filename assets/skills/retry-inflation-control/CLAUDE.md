# Retry Inflation Control System

> Runtime Layer: Skill Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Copilot, Gemini Code Assist, Amazon Q Developer, Devin

## Purpose

Detects and halts recursive retry loops, error fingerprint recurrence, and runaway token burn before financial damage occurs.

## When This Skill Activates

- Same error fingerprint appears 3+ times
- Task token spend exceeds $25
- Retry count exceeds 5 for single error
- Agent enters identical fix-fail cycle

## Installation

Copy this entire directory into your project root:

```
cp -r ./retry-inflation-control/ /your-project/.claude/skills/retry-inflation-control/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/retry-inflation-control/CLAUDE.md
Load policy: .claude/skills/retry-inflation-control/policy.yaml
```

## Directory Structure

```
retry-inflation-control/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── retry-budget-tracker.sh
    ├── error-fingerprint.sh
    ├── kill-retry-loop.sh
    ├── cost-audit.sh
```

## Tools

### `retry-budget-tracker.sh`
Track token spend per task with budget alerts

```bash
bash tools/retry-budget-tracker.sh
```

### `error-fingerprint.sh`
Hash and compare error patterns for recurrence

```bash
bash tools/error-fingerprint.sh
```

### `kill-retry-loop.sh`
Force-halt runaway retry chains

```bash
bash tools/kill-retry-loop.sh
```

### `cost-audit.sh`
Generate cost report for current session

```bash
bash tools/cost-audit.sh
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
- Gemini Code Assist
- Amazon Q Developer
- Devin

## Runtime Architecture

This skill operates at the **Skill Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
