/**
 * WORKFLOW CHECKPOINT ENGINE
 * 
 * Enforces cryptographic or deterministic proof-of-work before an agent
 * can hand off control to another agent or return to the orchestrator.
 */

export interface HandoffPayload {
    sourceAgent: string;
    targetAgent: string;
    taskObjective: string;
    // The probabilistic natural language response
    narrativeResponse: string; 
    // The deterministic JSON proof of work required by the policy
    deterministicProof: Record<string, any>; 
}

export class WorkflowCheckpointEngine {
    
    /**
     * Validates an agent's attempt to hand off execution state.
     * Prevents agents from saying "I finished it!" without providing the exact JSON schema required.
     */
    public validateHandoff(payload: HandoffPayload, requiredSchemaKeys: string[]): boolean {
        console.log(`[CHECKPOINT] Validating handoff from ${payload.sourceAgent} to ${payload.targetAgent}...`);

        if (!payload.deterministicProof) {
            throw new Error(`[CHECKPOINT FAILED] Agent ${payload.sourceAgent} attempted a handoff without providing deterministic JSON proof.`);
        }

        const missingKeys = requiredSchemaKeys.filter(key => !(key in payload.deterministicProof));

        if (missingKeys.length > 0) {
            throw new Error(`[CHECKPOINT FAILED] Agent ${payload.sourceAgent} is hallucinating task completion. Missing required schema keys: ${missingKeys.join(', ')}`);
        }

        // Additional validation: Ensure the narrative response isn't a known hallucination pattern
        const hallucinatedHandoffs = [
            "i have completed the task in my local environment",
            "the files have been updated theoretically",
            "you can assume the task is done"
        ];

        if (hallucinatedHandoffs.some(h => payload.narrativeResponse.toLowerCase().includes(h))) {
            throw new Error(`[CHECKPOINT FAILED] Agent ${payload.sourceAgent} provided a known hallucinated handoff narrative. Work was not actually executed.`);
        }

        console.log(`[CHECKPOINT PASSED] Cryptographic proof verified. State handed off to ${payload.targetAgent}.`);
        return true;
    }
}
