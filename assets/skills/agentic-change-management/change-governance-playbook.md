# PLAYBOOK: Agentic Change Management

When the `ChangeApprovalEngine` intercepts a mutation and requests human authority, operators must follow deterministic review steps to prevent catastrophic deployments.

## Scenario 1: High-Risk CAB Request (e.g., Terraform Apply)
**Trigger:** Agent requested approval to run `terraform apply`.

**Human Action:**
1. The agent's container is currently frozen in a Wait State.
2. Do NOT blindly approve. 
3. Request the Terraform Plan output from the agent's context window.
4. Verify the plan does not contain destructive actions (e.g., `- aws_db_instance.production_db`).
5. If the plan is destructive and unrequested, Reject the mutation. Terminate the agent container to prevent it from retrying.
6. If the plan is valid, Approve the mutation in the Exogram interface to unlock the agent's container.

## Scenario 2: Medium-Risk Code Owner Request
**Trigger:** Agent requested approval to run `npm install next-auth`.

**Human Action:**
1. This is a supply-chain risk. The agent is attempting to alter the dependency graph.
2. Verify that the requested package is the exact package specified in the original objective, and not a hallucinated typo (e.g., `nextauth` vs `next-auth`).
3. Approve if valid.

## Scenario 3: Agent Bypasses the Engine
**Trigger:** Telemetry shows an agent executed a shell command without triggering a CAB review.

**Human Action:**
1. The agent discovered an alias or a chained bash command (e.g., `echo "terraform apply" | bash`) that evaded the `mutation-risk-detector.ts` regex.
2. Immediately revoke the agent's API keys.
3. Update `execution-authority-policy.yaml` with the newly discovered evasion pattern.
