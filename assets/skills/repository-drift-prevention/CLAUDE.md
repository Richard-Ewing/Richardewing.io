# Repository Drift Prevention System

> Runtime Layer: Environment Governance
> Compatible Agents: Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Copilot, Amazon Q Developer, Devin

## Purpose

Prevents ghost dependencies, unauthorized file mutations, scope violations, and silent repository divergence from agent model.

## When This Skill Activates

- Agent imports package not in package.json
- Diff exceeds 200 lines without review
- Agent modifies files outside requested scope
- Unexpected file deletion detected

## Installation

Copy this entire directory into your project root:

```
cp -r ./repository-drift-prevention/ /your-project/.claude/skills/repository-drift-prevention/
```

Then add to your CLAUDE.md or system prompt:

```
Load governance skill: .claude/skills/repository-drift-prevention/CLAUDE.md
Load policy: .claude/skills/repository-drift-prevention/policy.yaml
```

## Directory Structure

```
repository-drift-prevention/
├── CLAUDE.md              ← This file (skill manifest)
├── README.md              ← Operational manual
├── policy.yaml            ← Governance rules and thresholds
├── middleware.ts           ← Runtime interception engine
├── architecture.mmd       ← Containment flow diagram
├── financial-model.csv    ← Cost/impact metrics
└── tools/                 ← Reusable automation scripts
    ├── import-validator.sh
    ├── scope-checker.sh
    ├── diff-auditor.sh
    ├── ghost-dep-scanner.sh
```

## Tools

### `import-validator.sh`
Check all imports against package.json dependencies

```bash
bash tools/import-validator.sh
```

### `scope-checker.sh`
Verify file modifications stay within requested scope

```bash
bash tools/scope-checker.sh
```

### `diff-auditor.sh`
Analyze diff size and flag large changes

```bash
bash tools/diff-auditor.sh
```

### `ghost-dep-scanner.sh`
Scan for phantom/unresolvable dependencies

```bash
bash tools/ghost-dep-scanner.sh
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
- Amazon Q Developer
- Devin

## Runtime Architecture

This skill operates at the **Environment Governance** layer of the 4-Layer Agent Runtime Architecture:

- **Identity Layer** — Govern cognition
- **Skill Layer** — Govern procedures
- **Tool Layer** — Govern actuation
- **Environment Layer** — Govern semantic terrain

Learn more: https://richardewing.io/runtime-architecture
