# PLAYBOOK: Deterministic Governance Operations

When you deploy the Deterministic Agentic Engineering OS, you shift the engineering culture from reviewing *agent outputs* to reviewing *governance boundaries*.

## 1. Initial Deployment Phase
**Goal:** Deploy agents into a Zero-Trust state without halting existing human workflows.
1. Deploy all middlewares in `AUDIT` mode (`enforcement_mode: AUDIT` across all YAML policies).
2. Allow agents to run in parallel to humans.
3. Observe the Exogram dashboards. You will see thousands of "Would Have Halted" events as agents hallucinate and drift.
4. Tune the YAML policies based on actual execution telemetry.

## 2. Hardening Phase
**Goal:** Achieve Execution Certainty.
1. Switch `enforcement_mode` to `STRICT` for the most critical modules first: `ai-cost-containment` and `autonomous-execution-safety`.
2. As agents adapt to the hard constraints, enable `STRICT` mode for `tool-permission-governance` and `repository-drift-prevention`.
3. Agent success rates will plummet initially as their hallucinations are physically blocked. This is expected. Update agent system prompts to explicitly document the new rigid boundaries they must follow.

## 3. Operations Phase
**Goal:** Zero-Human touch for standard workloads.
1. The OS is now fully operational. Agents run entirely autonomously.
2. Humans only intervene when the Exogram Control Plane pages them via the `GovernanceOrchestrator` (e.g., a CAB approval for a terraform apply, or a Sev-1 quarantine event).
3. If an agent fails a task, engineers do not rewrite the agent's code. They update the underlying YAML policy or the specific skill middleware to prevent the failure class structurally.
