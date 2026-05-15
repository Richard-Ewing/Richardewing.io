# REPOSITORY GOVERNANCE PLAYBOOK

## INCIDENT RESPONSE PROTOCOL
Execute this playbook when the `RepoDivergenceDetector` identifies structural drift, or when the `RepositoryValidator` blocks an agent due to state desynchronization.

### 1. HALT AND ISOLATE
If an agent's code is flagged for architectural drift (e.g., bypassing global state, introducing prohibited libraries), do NOT attempt to manually refactor the agent's PR. Doing so trains the organization to accept manual QA overhead, increasing Hallucination Debt.

### 2. AUDIT THE REPO MAP
Agents diverge when their context is incomplete. 
- Did the agent know that `fetch` was the required standard over `axios`? 
- Was the `repo-map-template.md` updated to reflect recent architectural decisions?
If the map is outdated, update it immediately. The Repo Map is the sole deterministic source of truth for the agent.

### 3. AUTONOMOUS CORRECTION
Reject the PR via the middleware and pass the exact divergence violation back to the orchestrator:
`[GOVERNANCE REJECT] Pattern 'axios' is forbidden. Repository uses native fetch api. Rewrite the implementation.`

### 4. RESOLVING STATE CONFLICTS
If the agent is blocked because its `HEAD` is stale:
1. Nuke the agent's local branch.
2. Force a re-sync with `origin/main`.
3. Re-inject the original task prompt. 
Agents cannot safely resolve complex rebase conflicts. Start fresh.
