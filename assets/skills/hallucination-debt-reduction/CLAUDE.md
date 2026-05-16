# Hallucination Debt Reduction System

> Runtime Layer: Skill Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Copilot, Gemini Code Assist, Amazon Q Developer

## Purpose

Validates agent code output against real codebase state. Blocks phantom dependencies, scores confidence, routes to review queues.

## When This Skill Activates

- Agent imports non-existent package
- Output confidence score < 0.85
- Agent references non-existent API
- Post-merge bug rate exceeds 5%

## Installation

Copy this entire directory into your project root:

```
cp -r ./hallucination-debt-reduction/ /your-project/.claude/skills/hallucination-debt-reduction/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/hallucination-debt-reduction/CLAUDE.md
Load policy: .claude/skills/hallucination-debt-reduction/policy.yaml
```

## Directory Structure

```
hallucination-debt-reduction/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── phantom-import-scanner.sh
    ├── confidence-scorer.sh
    ├── api-validator.sh
    ├── review-router.sh
```

## Tools

### `phantom-import-scanner.sh`
Check imports against package.json and node_modules

```bash
bash tools/phantom-import-scanner.sh
```

### `confidence-scorer.sh`
Score agent output confidence level

```bash
bash tools/confidence-scorer.sh
```

### `api-validator.sh`
Verify referenced APIs actually exist

```bash
bash tools/api-validator.sh
```

### `review-router.sh`
Route PR to appropriate review queue by confidence

```bash
bash tools/review-router.sh
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

## Runtime Architecture

This skill operates at the **Skill Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
