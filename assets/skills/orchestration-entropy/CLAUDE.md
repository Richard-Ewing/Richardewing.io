# Orchestration Entropy Containment

> Runtime Layer: Skill Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, CrewAI, AutoGen, LangGraph, Devin, OpenHands

## Purpose

Detects and halts agreement loops, delegation ping-pong, sub-agent explosions, and workflow timeout in multi-agent systems.

## When This Skill Activates

- 10+ consecutive turns without tool invocation
- Delegation depth exceeds 5 levels
- Sub-agent count exceeds limit
- Workflow exceeds max turn count

## Installation

Copy this entire directory into your project root:

```
cp -r ./orchestration-entropy/ /your-project/.claude/skills/orchestration-entropy/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/orchestration-entropy/CLAUDE.md
Load policy: .claude/skills/orchestration-entropy/policy.yaml
```

## Directory Structure

```
orchestration-entropy/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── turn-counter.sh
    ├── agreement-detector.sh
    ├── delegation-depth.sh
    ├── workflow-checkpoint.sh
```

## Tools

### `turn-counter.sh`
Track conversation turns and detect stalls

```bash
bash tools/turn-counter.sh
```

### `agreement-detector.sh`
Flag consecutive agreements without action

```bash
bash tools/agreement-detector.sh
```

### `delegation-depth.sh`
Monitor delegation chain depth

```bash
bash tools/delegation-depth.sh
```

### `workflow-checkpoint.sh`
Save and restore orchestration state

```bash
bash tools/workflow-checkpoint.sh
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
- CrewAI
- AutoGen
- LangGraph
- Devin
- OpenHands

## Runtime Architecture

This skill operates at the **Skill Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
