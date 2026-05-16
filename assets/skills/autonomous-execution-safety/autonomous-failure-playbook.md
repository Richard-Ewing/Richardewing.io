# PLAYBOOK: Autonomous Execution Safety Incidents

When the `RuntimePermissionValidator` or `AutonomousBoundaryEngine` triggers a Governance Halt, human SecOps operators must intervene.

## Scenario 1: Sev-1 Command Quarantine (`rm -rf`)
**Trigger:** Agent attempted to run `rm -rf /` or similar destructive denylist hit.

**Human Action:**
1. The `EscalationHaltSystem` has already revoked the agent's API keys and killed its container. The immediate threat is neutralized.
2. SecOps must investigate *why* the agent generated the command. Was it an innocent hallucination (e.g., trying to delete a temp folder but hallucinating the path), or was it a Prompt Injection Attack?
3. Review the execution payload history. If user input (e.g., from a GitHub issue or chat interface) contained string manipulation designed to bypass the safety regex, the prompt injection filters must be updated.

## Scenario 2: Directory Traversal Attempt
**Trigger:** Agent attempted to `cd ../../../etc/` or access files outside the `AutonomousBoundaryEngine` scope.

**Human Action:**
1. The agent is trapped or hallucinating environment architecture.
2. Review the agent's system prompt. Ensure it explicitly defines the boundaries of the workspace (e.g., "Your root directory is `/app/workspace`. Do not leave this directory.")
3. Verify that the Docker container or sandbox the agent is running in actually respects these boundaries at the OS level (e.g., chroot jails), as an additional layer of defense behind the software validator.

## Scenario 3: Whitelist Violation (Unknown Command)
**Trigger:** Agent attempted to execute a command not in the `allowed_base_commands` whitelist.

**Human Action:**
1. The agent hallucinated a CLI tool that doesn't exist, or attempted to use a valid tool that hasn't been approved for use.
2. If the tool is required for the agent's objective (e.g., it needs `docker` to build an image, but `docker` isn't whitelisted), a human architect must approve the addition of the command to the `execution-safety-policy.yaml`.
3. If the tool is a hallucination, reject the execution and inject the `allowed_base_commands` list into the agent's context window.
