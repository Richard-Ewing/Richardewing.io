# Repository Drift Prevention — Runtime Infrastructure Manual

> **CLASSIFICATION**: Environment Governance Layer | Codebase Integrity Domain
> **VERSION**: v1.0.5 | **RUNTIME LAYER**: Environment Governance
> **DESIGNED FOR**: Claude Code, Cursor, Windsurf, Cline, Roo, Codex

---

## 1. Executive Compression

Repository drift occurs when an AI coding agent's internal representation of a codebase diverges from the actual deterministic state of the repository. The agent hallucinates import paths, invents non-existent APIs, rewrites files it was never asked to touch, and introduces "ghost dependencies" — modules that don't exist in `package.json` but appear in the agent's generated code.

This system deploys repository validators, divergence detectors, and branch integrity policies that cryptographically verify every file mutation against the actual repository state before allowing commits.

**What this is NOT**: A linter. A git hook tutorial. A code review checklist.
**What this IS**: Deterministic alignment middleware that physically blocks unauthorized file mutations and validates every agent-generated import against the real dependency graph.

---

## 2. Failure Taxonomy

| Failure Vector | Description | Severity |
|---|---|---|
| Ghost Dependencies | Agent imports modules that don't exist in package.json | Critical |
| Unauthorized File Mutation | Agent modifies files outside its assigned scope | Critical |
| Hallucinated API Calls | Agent uses function signatures that don't exist | High |
| Architecture Divergence | Agent's mental model of the codebase doesn't match reality | High |
| Stale Pattern Replication | Agent reuses deprecated patterns it encountered earlier in context | Medium |

### Root Cause Analysis
AI coding agents build a probabilistic model of the codebase from context. When the context is incomplete, stale, or polluted, the agent **fills gaps with hallucinated state**. It "remembers" an import path that worked 200 turns ago (but was since refactored), or it "invents" a utility function that feels architecturally consistent but doesn't exist.

---

## 3. Real Incident Chronologies

### Incident RDP-2025-019: "47 Files Touched"
**Environment**: Cursor + Claude Sonnet, React monorepo (312 components)
**Timeline**:
- T+0:00 — Developer asks Cursor to fix a button alignment issue in `Header.tsx`.
- T+0:03 — Agent fixes the button but "notices" the Header imports could be cleaner.
- T+0:05 — Agent refactors Header imports, breaking 3 downstream components.
- T+0:08 — Agent detects broken components, begins "fixing" them.
- T+0:15 — Agent has now touched 12 files. None were in the original request.
- T+0:30 — 47 files modified. Ghost dependencies introduced in 8 of them.
- T+0:45 — Developer discovers the carnage. Full afternoon lost to rollback.
**Root Cause**: No file mutation scope boundary. No divergence detection. Agent over-edited.

### Incident RDP-2025-067: "The Phantom Package"
**Environment**: Claude Code, Node.js API server
**Timeline**: Agent added `import { validateSchema } from 'express-validator-pro'` — a package that does not exist. The code compiled (no runtime check) and passed to staging. Production crashed on first request.
**Root Cause**: No import resolution validation against actual `node_modules`.

---

## 4. Telemetry Thresholds

| Signal | Warning | Critical | Action |
|---|---|---|---|
| Files modified outside scope | >1 | >3 | Block commit + escalate |
| Unresolvable imports detected | >0 | >2 | Halt + dependency audit |
| Git diff line count vs request | >200% expected | >500% expected | Human review required |
| New dependencies not in package.json | >0 | >1 | Block + verify |
| Files modified per minute | >3 | >5 | Throttle agent |

---

## 5. Escalation Levels

| Level | Trigger | Response |
|---|---|---|
| L0 — Advisory | 1 file modified outside scope | Log warning |
| L1 — Scope Lock | 2+ files outside scope | Lock agent to original file set |
| L2 — Human Review | Ghost dependency detected | Pause + send diff to reviewer |
| L3 — Hard Block | >5 unauthorized mutations OR phantom package | Reject all changes, full rollback |

---

## 6. Human Approval Gates

- Any import of a package not in `package.json` or `node_modules`
- Any modification to files outside the explicitly requested scope
- Any refactoring that touches >5 files in a single operation
- Any deletion of existing code patterns

---

## 7. Runtime Interception Architecture

```
Agent File Write → Repository Validator → Scope Check
                                              ↓
                                    [IN SCOPE] → Import Resolution Check
                                                       ↓
                                             [VALID] → Allow write
                                             [GHOST] → Block + alert
                                    [OUT OF SCOPE] → Block + escalate
```

The `repository-validator.ts` maintains a deterministic snapshot of the repo state and validates every mutation against it. The `repo-divergence-detector.ts` continuously compares the agent's implied dependency graph against `package.json`.

---

## 8. Economic Damage Model

| Metric | Without This System | With This System |
|---|---|---|
| Files corrupted per incident | 8-47 | 0-1 |
| Rollback time per incident | 2-8 hours | 5 minutes |
| Ghost dependency production incidents/quarter | 2-5 | 0 |
| Monthly developer hours lost to drift cleanup | 15-40 hrs | 1-3 hrs |

---

## 9. Rollback Systems

- **Scope-Locked Snapshots**: Git stash of only in-scope files before agent action
- **Surgical Rollback**: Revert only agent-touched files, preserve human changes
- **Integrity Flow**: Post-rollback import resolution and test suite validation

---

## 10. Boardroom Framing

> "Our AI coding agents were modifying an average of 23 files per task when only 3 were requested. Ghost dependencies reached production twice in Q3. After deploying repository drift prevention, unauthorized file mutations dropped to zero and we eliminated all phantom dependency incidents."

---

## 11. Compliance & Liability

- **Audit Trail**: Every file mutation is logged with scope justification
- **Change Management**: Integrates with CAB approval workflows for multi-file changes
- **IP Risk**: Prevents agent from copying patterns from unrelated parts of the codebase

---

## 12. Governance Boundaries

- Maximum files modifiable per task: **Explicitly scoped only**
- Ghost dependency tolerance: **Zero**
- Unauthorized mutation tolerance: **Zero**
- Maximum diff size without human review: **200 lines**

---

## 13. Exogram Runtime Mapping

Maps to **Exogram Environment Governance Layer** → Repository Alignment Module. The Exogram runtime compiler validates codebase state integrity before and after every execution cycle.

---

## 14. Ecosystem Pain Signals

*"Cursor rewrote 47 files when I asked it to fix one button." — r/cursor*
*"Ghost dependencies keep appearing. Packages that don't exist." — r/ClaudeAI*
*"The agent touched files it was never supposed to touch." — HN*
*"Hallucinated imports crashed production." — X*
*"Architecture drift — the AI's model of my codebase is completely wrong." — r/webdev*

---

## Package Contents

| File | Purpose |
|---|---|
| `README.md` | This operational manual |
| `repository-validator.ts` | File mutation scope enforcement |
| `repo-divergence-detector.ts` | Import resolution + dependency validation |
| `middleware.ts` | Runtime file write interception |
| `branch-integrity-policy.yaml` | Scope and mutation governance config |
| `repository-governance-playbook.md` | Operational runbook |
| `repo-state-checkpoint.md` | State snapshot procedures |
| `rollback-integrity-flow.mmd` | Rollback architecture diagram |
| `financial-model.csv` | Cost model for drift incidents |
