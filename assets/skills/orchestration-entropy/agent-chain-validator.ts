/**
 * AGENT CHAIN VALIDATOR
 * 
 * Inspects the payload passed between agents to ensure it has not
 * drifted from the original user intent.
 */

export class AgentChainValidator {
  
  /**
   * Evaluates the semantic drift of an inter-agent payload.
   * Returns true if admissible, false if entropy has destroyed the intent.
   */
  public validateSemanticDrift(payload: any): boolean {
    if (!payload.originalIntent) {
      console.warn("[WARNING] Payload missing original intent reference. Admissibility failing.");
      return false;
    }

    // In production, this would use a fast deterministic check (e.g., regex, schema validation)
    // or a highly constrained LLM call to score the variance between payload.originalIntent
    // and payload.currentAction.

    if (payload.currentAction === "WAITING_FOR_OTHER_AGENT") {
      // Agents stuck in an agreement loop
      return false;
    }

    return true;
  }
}
