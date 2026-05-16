# PLAYBOOK: Repository Drift Resolution

When the `RepositoryValidator` or `RepoDivergenceDetector` triggers a Governance Halt, human operators must intervene to restore architectural integrity.

## Scenario 1: Scope Drift Detected at Runtime
**Trigger:** `RepositoryValidator` intercepted an agent trying to `write_file` to a path outside of `allowed_directories`.

**Human Action:**
1. The agent's prompt context is misaligned. It believes it needs to edit a file that is not part of its objective.
2. Review the agent's intent. Did it try to edit `/backend/auth` when it was assigned a frontend task?
3. If yes: The agent is hallucinating a full-stack responsibility. Terminate the container.
4. If no (the agent genuinely needed to edit it for the task to work): The human operator misconfigured the `branch-integrity-policy.yaml`. Update the allowed scope for that task type and restart.

## Scenario 2: Ghost Dependency Detected (Pre-Commit)
**Trigger:** `RepoDivergenceDetector` exited with code 1 because the agent modified `package.json`.

**Human Action:**
1. The agent hallucinated an NPM import that does not exist or tried to pull in a library to solve a problem that should have been solved with native code.
2. Run `git checkout -- package.json` to instantly revert the dependency drift.
3. Review the agent's generated code. If it relies on the ghost dependency, discard the diff.
4. Update the agent's system prompt with strict boundaries: *"You are forbidden from importing external libraries. Use only the utilities found in `src/lib`."*

## Scenario 3: Banned Extension Mutation
**Trigger:** Agent attempted to modify a `.yml` GitHub Actions workflow file while assigned to fix a React component.

**Human Action:**
1. This is a potential capability escalation. Agents should never modify deployment pipelines unless explicitly assigned to a DevOps role.
2. Instantly kill the agent process.
3. Verify the prompt injection vectors—did a malicious payload in a database string instruct the agent to rewrite the CI pipeline? Execute standard SecOps incident response.
