# SYNTHETIC QA PLAYBOOK

## PURPOSE
To offload the burden of manual code verification back to the autonomous agent, protecting human engineering cycles from Hallucination Debt.

## THE CONTAINMENT PROTOCOL

If an agent submits a Pull Request that breaks compilation, fails linting, or lacks unit tests, **do not review the code.**

### 1. Reject at the Middleware Layer
Use the `VerificationRouter` to intercept the PR event. The human reviewer should never receive a notification if the deterministic checks fail.

### 2. Autonomous Re-Prompting
When the middleware rejects the PR, it automatically sends a system-level prompt back to the agent:
> `[SYSTEM REJECTION] Your code failed to pass compilation. The error log is attached. You must autonomously resolve this failure and ensure all tests pass before requesting human review again.`

### 3. Escalation Limit
If the agent fails to resolve the error after 3 autonomous attempts, the orchestrator triggers the `RetryCircuitBreaker`, halts the session, and rolls back the repository.

## THE HUMAN CONTRACT
Engineers are only permitted to review the *architectural intent* and *business logic* of an agentic PR. They are not permitted to act as spell-checkers for an LLM. If an engineer is debugging syntax errors in an agent's code, the Verification Burden governance has failed.
