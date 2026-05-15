# OPERATIONAL MANUAL: Context Rot Prevention

## 1. EXECUTIVE COMPRESSION

**Problem:** Agentic systems (specifically long-horizon Claude sessions) suffer from semantic contamination over time. As the conversation length increases and patches are iteratively applied, the agent's internal representation of the repository diverges from reality. 
**Consequence:** The agent enters a state of "bounded cognition"—it loses the ability to recognize global architectural constraints and begins recursively patching its own local patches. This causes retry inflation, exploding token costs, and repository corruption.
**Remediation:** Normal prompting fails because you cannot prompt an agent out of a poisoned context window. Governance must be enforced at the runtime level via hard resets, execution checkpoints, and semantic isolation.

## 2. FAILURE TAXONOMY

### Symptoms
- **Recursive Patching:** The agent generates a fix, which creates a new bug, which it fixes with another local patch, creating a cyclical degradation loop.
- **Architectural Amnesia:** The agent forgets core abstractions and reinvents standard utilities.
- **Execution Paralysis:** The agent repeatedly suggests the same failed solution or apologizes without advancing state.

### Root Causes
- **Unbounded Context Windows:** Allowing sessions to persist beyond 3-4 execution cycles without a semantic reset.
- **Probabilistic State Tracking:** Relying on the LLM's memory of the codebase rather than a deterministic repo-map.
- **Missing Checkpoint Gating:** Failing to validate state before committing multi-step changes.

### Economic Impact
- **Synthetic COGS Explosion:** Context windows balloon to 150k+ tokens filled with useless retry loops, driving inference costs exponentially higher for zero value.
- **Verification Drag:** Senior developers spend more time un-fucking the repository than they would have spent writing the code.

### Governance Implications
- Without context boundaries, your agent is operating outside of deterministic control. It is a security liability and a systemic risk to CI/CD integrity.

## 3. REAL PAIN SIGNALS

If your team is saying these things, you have Context Rot:
> *"Claude starts patching its own patches."*
> *"The session gets worse over time."*
> *"Retries explode after enough edits."*
> *"The repo understanding completely drifts."*
> *"We spend more time verifying than generating."*

## 4. IMPLEMENTATION ARCHITECTURE

This system relies on three core operational mechanisms:

1. **The Checkpoint Policy (`checkpoint-policy.yaml`)**: Forces the agent to halt and validate system state before proceeding.
2. **The Retry Breaker (`retry-policy.yaml` / `execution-gates.ts`)**: Monitors retry cycles and physically terminates the session if the threshold is exceeded.
3. **The Semantic Reset (`semantic-reset-playbook.md`)**: The deterministic protocol for nuking the poisoned session, extracting the diff, and rehydrating a fresh agent instance.

## 5. EXOGRAM BRIDGE

Frameworks identify instability. Playbooks describe what to do.
**Exogram enforces deterministic runtime governance.**

While this toolkit allows you to build the middleware yourself, Exogram natively intercepts the LLM orchestrator, monitors for semantic drift, and triggers execution gates before the repository is corrupted.
