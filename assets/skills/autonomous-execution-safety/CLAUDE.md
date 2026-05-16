# Autonomous Execution Safety System

> Runtime Layer: Identity Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Devin, OpenHands, SWE-Agent

## Purpose

Enforces authority boundaries, command whitelists, and permission gates for autonomous agent execution.

## When This Skill Activates

- Agent attempts blocked command category
- Agent tries to install unvetted package
- Agent modifies infrastructure files
- Multiple permission violations in sequence

## Installation

Copy this entire directory into your project root:

```
cp -r ./autonomous-execution-safety/ /your-project/.claude/skills/autonomous-execution-safety/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/autonomous-execution-safety/CLAUDE.md
Load policy: .claude/skills/autonomous-execution-safety/policy.yaml
```

## Directory Structure

```
autonomous-execution-safety/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── whitelist-checker.sh
    ├── package-auditor.sh
    ├── permission-gate.sh
    ├── authority-logger.sh
```

## Tools

### `whitelist-checker.sh`
Validate command against safe/restricted/blocked lists

```bash
bash tools/whitelist-checker.sh
```

### `package-auditor.sh`
Vet package before allowing installation

```bash
bash tools/package-auditor.sh
```

### `permission-gate.sh`
Enforce human approval for restricted operations

```bash
bash tools/permission-gate.sh
```

### `authority-logger.sh`
Log all authority boundary interactions

```bash
bash tools/authority-logger.sh
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

This skill operates at the **Identity Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
