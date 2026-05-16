# Context Window Compression System

> Runtime Layer: Environment Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Copilot, Gemini Code Assist, Any LLM with context limits

## Purpose

Manages context window utilization through checkpoint rotation, passive pruning, and emergency compression.

## When This Skill Activates

- Context utilization > 50%
- Instruction recall drops below 90%
- Session exceeds 50 useful interactions
- Emergency: utilization > 85%

## Installation

Copy this entire directory into your project root:

```
cp -r ./context-window-compression/ /your-project/.claude/skills/context-window-compression/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/context-window-compression/CLAUDE.md
Load policy: .claude/skills/context-window-compression/policy.yaml
```

## Directory Structure

```
context-window-compression/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── context-monitor.sh
    ├── passive-prune.sh
    ├── checkpoint-save.sh
    ├── emergency-compress.sh
```

## Tools

### `context-monitor.sh`
Report current context window utilization

```bash
bash tools/context-monitor.sh
```

### `passive-prune.sh`
Remove stale interaction history

```bash
bash tools/passive-prune.sh
```

### `checkpoint-save.sh`
Save critical state to checkpoint file

```bash
bash tools/checkpoint-save.sh
```

### `emergency-compress.sh`
Extract critical state and purge history

```bash
bash tools/emergency-compress.sh
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
- Any LLM with context limits

## Runtime Architecture

This skill operates at the **Environment Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
