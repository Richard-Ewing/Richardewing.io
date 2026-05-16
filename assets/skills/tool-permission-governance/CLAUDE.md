# Tool Permission Governance System

> Runtime Layer: Tool Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Any tool-using LLM agent

## Purpose

Enforces least-privilege tool access, blocks capability escalation, redacts secrets from tool output.

## When This Skill Activates

- Agent requests tool not in task manifest
- Tool attempts to read protected path
- Output contains secret/credential patterns
- Capability escalation through tool chaining detected

## Installation

Copy this entire directory into your project root:

```
cp -r ./tool-permission-governance/ /your-project/.claude/skills/tool-permission-governance/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/tool-permission-governance/CLAUDE.md
Load policy: .claude/skills/tool-permission-governance/policy.yaml
```

## Directory Structure

```
tool-permission-governance/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── scope-enforcer.sh
    ├── path-guard.sh
    ├── output-redactor.sh
    ├── escalation-detector.sh
```

## Tools

### `scope-enforcer.sh`
Restrict tools to task-scoped permissions

```bash
bash tools/scope-enforcer.sh
```

### `path-guard.sh`
Block access to sensitive file paths

```bash
bash tools/path-guard.sh
```

### `output-redactor.sh`
Strip secrets from tool responses

```bash
bash tools/output-redactor.sh
```

### `escalation-detector.sh`
Detect capability escalation chains

```bash
bash tools/escalation-detector.sh
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
- Any tool-using LLM agent

## Runtime Architecture

This skill operates at the **Tool Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
