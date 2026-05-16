# OPERATIONAL MANUAL: Context Window Compression

## 1. EXECUTIVE COMPRESSION

**Problem:** LLMs suffer from "Context Window Rot." Over long sessions, the context window fills with old assumptions, failed execution loops, and stale logic. As the window approaches capacity, the model's probabilistic reasoning degrades exponentially. The agent forgets core instructions, begins "patching its own patches," and token burn explodes.

**Consequence:** An agent that was brilliant in Turn 1 becomes a liability in Turn 15. The orchestrator pays maximum token pricing (because the window is full) to receive minimum reasoning quality.

**Remediation:** Implement a **Bounded Cognition Engine**. Context windows must be ruthlessly compressed, prioritized, and checkpointed. Semantic decay must be pruned before it poisons the runtime logic.

---

## 2. FAILURE TAXONOMY

### Observable Symptoms
- **Stale Context Poisoning**: The agent writes code based on an architectural assumption that was proven false 10 turns ago.
- **Lost Instructions**: The agent suddenly starts writing Python even though the system prompt mandated TypeScript. The system prompt was pushed out of the model's active attention mechanism by context bloat.
- **Inference Margin Collapse**: The cost per execution turn spirals out of control as the agent drags 100,000 tokens of dead conversation along with it.

### Root Causes
- **Append-Only Memory**: Simply appending every agent response and tool output to an ever-growing array until the API throws a context length error.
- **Lack of Semantic Truncation**: Failing to realize that an error stack trace from Turn 2 is completely irrelevant to the objective in Turn 20.

### Economic Impact
- **Token Inflation**: Paying $0.15 per turn for dead context, turning a cheap bug fix into a massive compute expenditure.
- **Execution Unreliability**: The inability to run long-horizon tasks because the agent fundamentally decays over time.

---

## 3. TELEMETRY SIGNALS

Monitor your orchestration dashboards for the following critical indicators:
- **`context_utilization_percent`**: If > 80%, reasoning quality is actively degrading.
- **`stale_memory_references`**: The agent mentions a file or variable that hasn't been relevant in > 5 turns.
- **`system_prompt_attention_loss`**: The agent violates a hard constraint defined in the system prompt.

---

## 4. GOVERNANCE ARCHITECTURE

This system relies on three core operational mechanisms:

1. **Memory Priority Policy (`memory-priority-policy.yaml`)**: Defines the strict tiering of context (e.g., Tier 1: System Prompts, Tier 3: Past Tool Outputs) and exactly how they should be compressed.
2. **Context Compression Engine (`context-compression-engine.ts`)**: Middleware that intercepts the prompt array before it hits the LLM, mathematically truncating, summarizing, or discarding low-priority context to stay under a strict token ceiling.
3. **Checkpoint Rotation (`checkpoint-rotation.ts`)**: Mechanism that creates a deterministic "save state" of the execution and wipes the ephemeral context clean.

---

## 5. DEPLOYMENT INSTRUCTIONS

1. **Configure Tiers**: Define your token ceilings in `memory-priority-policy.yaml`.
2. **Deploy Middleware**: Wrap your LangChain `ChatPromptTemplate` or raw API payload construction with the `context-compression-engine.ts`.
3. **Enable Checkpointing**: Force your orchestrator to call `checkpoint-rotation.ts` every N turns to execute a Hard Semantic Reset.

---

## 6. EXOGRAM MAPPING

**Exogram enforces deterministic runtime governance.**

Exogram provides the **Cognitive Load Dashboard**. It visualizes the exact token payload of every agent turn broken down by priority tier. If an agent enters "Context Rot," Exogram allows security teams to manually trigger a Checkpoint Rotation, instantly purging the poisoned context and restoring the agent to a deterministic baseline.
