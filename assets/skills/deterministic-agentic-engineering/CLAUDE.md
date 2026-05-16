# Deterministic Agentic Engineering — Master System

> Runtime Layer: Identity Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Copilot, Gemini Code Assist, Amazon Q Developer, Devin, OpenHands, SWE-Agent, CrewAI, AutoGen, LangGraph

## Purpose

The master runtime architecture. Assembles all 4 governance layers into a compiled, immutable execution payload via the Exogram runtime compiler.

## When This Skill Activates

- Any agent trigger event
- Runtime initialization
- Cross-layer governance check
- Post-execution state validation

## Installation

Copy this entire directory into your project root:

```
cp -r ./deterministic-agentic-engineering/ /your-project/.claude/skills/deterministic-agentic-engineering/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/deterministic-agentic-engineering/CLAUDE.md
Load policy: .claude/skills/deterministic-agentic-engineering/policy.yaml
```

## Directory Structure

```
deterministic-agentic-engineering/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── runtime-assembler.sh
    ├── identity-loader.sh
    ├── skill-resolver.sh
    ├── environment-snapshot.sh
```

## Tools

### `runtime-assembler.sh`
Load and compile all 4 governance layers

```bash
bash tools/runtime-assembler.sh
```

### `identity-loader.sh`
Load agent identity constraints

```bash
bash tools/identity-loader.sh
```

### `skill-resolver.sh`
Resolve skill requirements and dependencies

```bash
bash tools/skill-resolver.sh
```

### `environment-snapshot.sh`
Capture current environment state slice

```bash
bash tools/environment-snapshot.sh
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
- CrewAI
- AutoGen
- LangGraph

## Runtime Architecture

This skill operates at the **Identity Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
