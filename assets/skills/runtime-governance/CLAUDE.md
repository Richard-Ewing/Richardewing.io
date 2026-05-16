# Runtime Governance for Claude Code

> Runtime Layer: Tool Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Devin, OpenHands, SWE-Agent

## Purpose

Intercepts agent shell commands, validates against whitelist/blacklist, blocks destructive operations, enforces rollback circuits.

## When This Skill Activates

- Agent attempts shell command
- Command matches blacklist pattern
- Agent modifies protected file
- Multiple blocked attempts in sequence

## Installation

Copy this entire directory into your project root:

```
cp -r ./runtime-governance/ /your-project/.claude/skills/runtime-governance/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/runtime-governance/CLAUDE.md
Load policy: .claude/skills/runtime-governance/policy.yaml
```

## Directory Structure

```
runtime-governance/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── command-validator.sh
    ├── file-guard.sh
    ├── rollback-snapshot.sh
    ├── audit-log.sh
```

## Tools

### `command-validator.sh`
Classify and validate shell commands against policy

```bash
bash tools/command-validator.sh
```

### `file-guard.sh`
Protect sensitive files from agent mutation

```bash
bash tools/file-guard.sh
```

### `rollback-snapshot.sh`
Create pre-execution state snapshot

```bash
bash tools/rollback-snapshot.sh
```

### `audit-log.sh`
Append timestamped entry to governance audit trail

```bash
bash tools/audit-log.sh
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
- Devin
- OpenHands
- SWE-Agent

## Runtime Architecture

This skill operates at the **Tool Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
