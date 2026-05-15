# OPERATIONAL MANUAL: Repository Drift Prevention

## 1. EXECUTIVE COMPRESSION

**Problem:** Agentic engineering happens asynchronously and at high velocity. Without strict state validation, agents will apply patches to outdated repository states, silently override human commits, or hallucinate entirely new architectural paradigms that diverge from the master branch.
**Consequence:** *Repository Drift*. The codebase degrades into a disjointed collection of localized fixes that do not adhere to global abstractions. Code reviews become impossible because the underlying architectural intent has been lost.
**Remediation:** Implement deterministic Repository Validation. Agents must be forced to read a structural repo-map before execution, and their outputs must be diffed against the current `HEAD` state to prevent concurrent mutation conflicts.

## 2. FAILURE TAXONOMY

### Symptoms
- An agent rewrites an entire authentication flow just to fix a typo in a login button.
- An agent pushes code using an old library version because its training data cut-off predated a recent major upgrade.
- Merge conflicts skyrocket because agents are working off stale context windows.

### Root Causes
- **Blind Execution:** Allowing agents to write code without explicitly forcing them to read the current project architecture.
- **Missing Divergence Detection:** Failing to compare the agent's proposed AST (Abstract Syntax Tree) with the repository's established AST patterns.

### Economic Impact
- **Architectural Bankruptcy:** The codebase becomes so fragmented and inconsistent that it must be entirely rewritten. The synthetic COGS savings are wiped out by the massive cost of a human-led refactor.

## 3. IMPLEMENTATION ARCHITECTURE

This system relies on three core operational mechanisms:
1. **The Repository Validator (`repository-validator.ts`)**: Middleware that forces the agent to acknowledge the current architectural state before it is granted write access.
2. **Branch Integrity Policy (`branch-integrity-policy.yaml`)**: Strict rules dictating which directories an agent is allowed to mutate based on the current branch constraints.
3. **Repo Divergence Detector (`repo-divergence-detector.ts`)**: Logic that scans agent-generated PRs for structural anti-patterns (e.g., using `axios` when the repo uses `fetch`).

## 4. EXOGRAM BRIDGE

Frameworks identify instability. Playbooks describe what to do.
**Exogram enforces deterministic runtime governance.**

By deploying Exogram's divergence detectors, architectural drift is physically blocked. Exogram rejects PRs that introduce unapproved libraries or bypass global state managers, forcing the agent to adhere to your established engineering doctrine.
