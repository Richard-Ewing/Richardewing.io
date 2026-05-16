# MCP Governance System

> Runtime Layer: Tool Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Any MCP-compatible agent

## Purpose

Enforces context isolation, credential protection, capability manifests, and supply chain validation for MCP tool servers.

## When This Skill Activates

- Agent calls unmanifested tool
- Tool output contains sensitive data patterns
- Cross-tool context leakage detected
- Unverified MCP server connection attempted

## Installation

Copy this entire directory into your project root:

```
cp -r ./mcp-governance/ /your-project/.claude/skills/mcp-governance/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/mcp-governance/CLAUDE.md
Load policy: .claude/skills/mcp-governance/policy.yaml
```

## Directory Structure

```
mcp-governance/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── manifest-checker.sh
    ├── secret-scanner.sh
    ├── context-isolator.sh
    ├── server-verifier.sh
```

## Tools

### `manifest-checker.sh`
Validate tool calls against capability manifest

```bash
bash tools/manifest-checker.sh
```

### `secret-scanner.sh`
Scan tool output for credential/secret patterns

```bash
bash tools/secret-scanner.sh
```

### `context-isolator.sh`
Enforce cross-tool data isolation

```bash
bash tools/context-isolator.sh
```

### `server-verifier.sh`
Validate MCP server identity and integrity

```bash
bash tools/server-verifier.sh
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
- Any MCP-compatible agent

## Runtime Architecture

This skill operates at the **Tool Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
