# Agentic Change Management System

> Runtime Layer: Identity Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Devin, Any autonomous coding agent

## Purpose

CAB-style approval architecture for agent-initiated changes. Risk classification, approval routing, and audit trails.

## When This Skill Activates

- Agent initiates code change
- Change classified as high-risk
- Agent attempts production deployment
- Shadow AI change detected

## Installation

Copy this entire directory into your project root:

```
cp -r ./agentic-change-management/ /your-project/.claude/skills/agentic-change-management/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/agentic-change-management/CLAUDE.md
Load policy: .claude/skills/agentic-change-management/policy.yaml
```

## Directory Structure

```
agentic-change-management/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── risk-classifier.sh
    ├── approval-router.sh
    ├── audit-trail.sh
    ├── shadow-detector.sh
```

## Tools

### `risk-classifier.sh`
Classify change risk level (low/medium/high/critical)

```bash
bash tools/risk-classifier.sh
```

### `approval-router.sh`
Route change to appropriate approval authority

```bash
bash tools/approval-router.sh
```

### `audit-trail.sh`
Log change with justification and approval chain

```bash
bash tools/audit-trail.sh
```

### `shadow-detector.sh`
Detect unauthorized agent changes

```bash
bash tools/shadow-detector.sh
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
- Any autonomous coding agent

## Runtime Architecture

This skill operates at the **Identity Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
