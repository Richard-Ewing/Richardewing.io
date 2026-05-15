# OPERATIONAL MANUAL: Context Window Compression

## 1. EXECUTIVE COMPRESSION

**Problem:** Modern LLMs boast massive context windows (128k to 1M+ tokens), leading developers to lazily dump entire repositories into the prompt. However, as the context window fills, the model's instruction-following fidelity degrades exponentially.
**Consequence:** *Context Saturation Collapse*. The agent "forgets" the core constraints defined in the system prompt. It hallucinates variables, ignores formatting rules, and begins writing code that contradicts the architectural documentation it was just fed.
**Remediation:** Implement Bounded Cognition. Do not rely on the LLM's raw context capacity. Use a Context Compression Engine to strictly throttle the token flow, prioritizing recent execution state and deterministic architectural rules while aggressively truncating stale conversational history.

## 2. FAILURE TAXONOMY

### Symptoms
- The agent correctly follows a rule for the first 5 prompts, but blatantly violates it on the 6th prompt.
- The agent apologizes for an error, but then outputs the exact same error again (because the true constraint has fallen out of its attention mechanism).
- API latency spikes to 45+ seconds per request as the orchestrator passes 100k tokens of dead conversation history back and forth.

### Root Causes
- **Lazy Context Management:** Blindly appending `message.push(new_message)` without a truncation strategy.
- **Priority Inversion:** Allowing noisy execution logs (e.g., massive stack traces) to push critical system instructions out of the model's active attention span.

### Economic Impact
- **Margin Decay:** You are paying per-token. Sending 100k tokens of stale context on every single API call mathematically destroys the unit economics of the feature being built.

## 3. IMPLEMENTATION ARCHITECTURE

This system relies on three core operational mechanisms:
1. **The Context Compression Engine (`context-compression-engine.ts`)**: Middleware that intercepts the prompt array before it hits the API, forcefully truncating low-priority tokens to maintain a strict cognitive bound (e.g., 8k tokens max).
2. **Memory Priority Policy (`memory-priority-policy.yaml`)**: The ruleset defining what stays and what goes. (e.g., System Prompt = P0, Current File = P1, 10-turn-old conversation = P4).
3. **Checkpoint Rotation (`checkpoint-rotation.ts`)**: A system that summarizes stale conversation history into a dense, compressed string, rather than passing raw dialogue.

## 4. EXOGRAM BRIDGE

Frameworks identify instability. Playbooks describe what to do.
**Exogram enforces deterministic runtime governance.**

By piping all orchestrator traffic through Exogram's Context Compression Engine, the LLM is forced into a state of "Bounded Cognition." It is only permitted to "see" the exact tokens required to execute the immediate next step, guaranteeing maximum instruction adherence and minimizing API costs.
