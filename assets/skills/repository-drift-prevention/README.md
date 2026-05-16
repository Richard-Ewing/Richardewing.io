# OPERATIONAL MANUAL: Repository Drift Prevention

## 1. EXECUTIVE COMPRESSION

**Problem:** Probabilistic AI agents lack deterministic structural awareness. Without hard boundaries, an agent tasked with fixing a UI component may "hallucinate" an architectural refactor, silently changing database schemas, utility functions, or core configuration files. This creates *Repository Drift*—a structural divergence between the agent's internal representation of the code and the actual deterministic repository state.

**Consequence:** The codebase fragments. The agent breaks unrelated features, reinvents existing utilities instead of importing them, and creates a massive technical debt burden that takes days for human architects to untangle. 

**Remediation:** Implement **Continuous Divergence Detection and Deterministic Alignment Protocols**. Agents must be programmatically restricted from mutating files outside their explicit execution scope, and the repository state must be mathematically validated before and after every execution turn.

---

## 2. FAILURE TAXONOMY

### Observable Symptoms
- **Scope Drift**: An agent assigned to edit `frontend/components/Button.tsx` submits a PR that also deletes lines in `backend/auth/middleware.ts`.
- **Reinvented Wheels**: The agent writes a new 50-line utility function for data formatting because it was unaware of the existing `lib/formatters.ts`.
- **Ghost Dependencies**: The agent imports libraries that are not in `package.json`, causing CI/CD pipeline failures.

### Root Causes
- **Unbounded Write Access**: Granting an agent `write_file` access globally across the entire workspace.
- **Context Blindness**: The agent cannot see the full repository structure, so it assumes missing files must be created from scratch.

### Economic Impact
- **Architectural Corruption**: Unchecked drift eventually requires a full human rewrite of the affected modules, wasting both the original compute cost and the human recovery time.

---

## 3. TELEMETRY SIGNALS

Monitor your orchestration dashboards for the following critical indicators:
- **`files_mutated_outside_scope`**: Any value > 0 means the agent is drifting and must be halted.
- **`new_file_creation_rate`**: High rates of autonomous file creation usually indicate the agent is reinventing existing logic rather than modifying it.
- **`ci_dependency_failures`**: Tracks how often the agent hallucinates imports.

---

## 4. GOVERNANCE ARCHITECTURE

This system relies on three core operational mechanisms:

1. **Branch Integrity Policy (`branch-integrity-policy.yaml`)**: Defines the exact regex file paths the agent is allowed to mutate for a given task.
2. **Repository Validator (`repository-validator.ts`)**: Middleware that intercepts `write_file` commands and verifies the target path against the Integrity Policy.
3. **Repo Divergence Detector (`repo-divergence-detector.ts`)**: Post-execution analysis that mathematically checks the git diff to ensure no ghost dependencies or banned structural changes occurred.

---

## 5. DEPLOYMENT INSTRUCTIONS

1. **Configure Policies**: Define the execution scope in `branch-integrity-policy.yaml`.
2. **Deploy Middleware**: Wrap the agent's file system tools (e.g., `write_file`, `delete_file`, `git_commit`) with `repository-validator.ts`.
3. **Continuous Detection**: Run `repo-divergence-detector.ts` as a pre-commit hook or as the first step in your CI pipeline to catch drift before it enters the `main` branch.

---

## 6. EXOGRAM MAPPING

**Exogram enforces deterministic runtime governance.**

Exogram provides real-time visualizations of the **Agentic Blast Radius**. If `repository-validator.ts` detects an agent attempting to mutate a file outside its authorized zone, Exogram drops the network connection to the LLM and instantly forces a hard Git reset, protecting the repository architecture.
