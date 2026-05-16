# PLAYBOOK: Orchestration Entropy Reset

When the `OrchestratorGovernor` triggers a Governance Halt, human operators must intervene to prevent total state loss and token burn.

## Scenario 1: Infinite Agreement Loop Detected
**Trigger:** Agent A and Agent B passed 3 consecutive turns saying "I agree" without invoking any required execution tools.

**Human Action:**
1. Do not manually invoke the tool for the agent.
2. Review the prompts of both agents. They are likely suffering from **"Polite Alignment Protocol"**—a common LLM fine-tuning artifact where models prioritize conversational politeness over deterministic tool usage.
3. Update the System Prompt of the receiving agent: *"You must respond by invoking the `execute_bash` tool. Do NOT respond with conversational text. Do NOT express agreement."*
4. Reset the workflow state to the turn immediately preceding the loop and resume.

## Scenario 2: Runaway Delegation Chain
**Trigger:** Delegation depth exceeded threshold (e.g., Manager -> Coder -> CodeReviewer -> UnitTester -> SubTester).

**Human Action:**
1. The orchestration hierarchy is too deep. The system has lost the original context.
2. Kill the container.
3. Flatten the orchestration graph in your LangGraph/CrewAI config. No agent should be more than 2 hops away from the Master Orchestrator.
4. Restart the objective from Turn 0.

## Scenario 3: Hallucinated Checkpoint Handoff
**Trigger:** The `WorkflowCheckpointEngine` caught an agent claiming completion without providing the required `deterministicProof` JSON.

**Human Action:**
1. The agent likely ran out of tokens to generate the JSON, or its reasoning failed silently.
2. Reject the handoff and inject an explicit API error back into the agent's context: *"SYSTEM REJECTION: You failed to return the mandated schema. Provide the JSON proof."*
3. If it fails again, the task is too complex for a single prompt. Decompose the task into two smaller objectives.
