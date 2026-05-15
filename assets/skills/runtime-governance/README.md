# OPERATIONAL MANUAL: Runtime Governance

## 1. EXECUTIVE COMPRESSION

**Problem:** Agents operating with read/write access to your environment without execution gating are unconstrained liabilities. "System prompts" are probabilistic suggestions, not deterministic boundaries. 
**Consequence:** Unsafe agent execution. Agents can unilaterally wipe databases, execute destructive terminal commands, or rewrite core infrastructure because there is no mechanism to mathematically block an action before it occurs.
**Remediation:** Implementation of deterministic runtime governance. Every execution request must be intercepted, routed through an Admissibility Engine, scored for confidence and risk, and either allowed, halted, or rolled back.

## 2. FAILURE TAXONOMY

### Symptoms
- **Destructive Actions:** The agent executes commands like `rm -rf` or drops database tables.
- **Out of Bounds Execution:** The agent modifies files completely unrelated to the assigned task.
- **Prompt Bypass:** The agent successfully ignores a `system_prompt` directive when given a conflicting user instruction.

### Root Causes
- **Observability vs Governance:** You have logs (observability) but no interceptors (governance). You can see the failure, but you cannot prevent it.
- **Probabilistic Trust:** Relying on the LLM to govern itself.

### Economic Impact
- **Catastrophic Liability:** The cost of an agent exposing environment variables or wiping production data is theoretically unbounded.
- **Compliance Failures:** Violation of SOC2/ISO requirements regarding automated systems with unaudited write-access.

### Governance Implications
- Without runtime interception, you have governance theater. You do not have control.

## 3. REAL PAIN SIGNALS

If your team is saying these things, you lack Runtime Governance:
> *"The agent just deleted the entire config directory."*
> *"I told it not to touch the database, but it did anyway."*
> *"We only know it failed because the CI pipeline broke."*

## 4. IMPLEMENTATION ARCHITECTURE

This system relies on three core operational mechanisms:
1. **The Execution Interceptor (`execution-interceptor.ts`)**: The physical hook that pauses the execution loop between the LLM generating a command and the OS executing it.
2. **The Admissibility Engine (`admissibility-engine.ts`)**: The deterministic logic that evaluates the proposed command against the `runtime-policy.yaml`.
3. **The Rollback Circuit (`rollback-circuit.ts`)**: The containment mechanism that triggers when a high-risk violation occurs, instantly severing the session and reverting state.

## 5. EXOGRAM BRIDGE

Frameworks identify instability. Playbooks describe what to do.
**Exogram enforces deterministic runtime governance.**

This toolkit provides the architecture for building custom middleware. Exogram provides this out-of-the-box, sitting at the orchestrator level to enforce mathematically guaranteed runtime containment.
