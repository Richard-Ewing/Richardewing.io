# Context Rot Prevention System

> Runtime Layer: Skill Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Copilot, Gemini Code Assist, Amazon Q Developer, Devin, OpenHands, SWE-Agent

## Purpose

Prevents semantic degradation, recursive patch loops, and instruction amnesia in long-running agentic sessions.

## When This Skill Activates

- Session exceeds 60 minutes
- Context window utilization > 65%
- Agent patches same file 3+ times
- Instruction recall drops below 80%

## Installation

Copy this entire directory into your project root:

```
cp -r ./context-rot-prevention/ /your-project/.claude/skills/context-rot-prevention/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/context-rot-prevention/CLAUDE.md
Load policy: .claude/skills/context-rot-prevention/policy.yaml
```

## Directory Structure

```
context-rot-prevention/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── check-context-health.sh
    ├── checkpoint-rotate.sh
    ├── semantic-reset.sh
    ├── patch-chain-detector.sh
```

## Tools

### `check-context-health.sh`
Scan current session for context rot indicators

```bash
bash tools/check-context-health.sh
```

### `checkpoint-rotate.sh`
Save architecture state and compress history

```bash
bash tools/checkpoint-rotate.sh
```

### `semantic-reset.sh`
Emergency context purge preserving critical state

```bash
bash tools/semantic-reset.sh
```

### `patch-chain-detector.sh`
Detect recursive patch loops across files

```bash
bash tools/patch-chain-detector.sh
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
- OpenHands
- SWE-Agent

## Runtime Architecture

This skill operates at the **Skill Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
