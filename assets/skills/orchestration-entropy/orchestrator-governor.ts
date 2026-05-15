/**
 * ORCHESTRATOR GOVERNOR
 * 
 * The master kernel for multi-agent workflows. Monitors all inter-agent
 * communication and enforces maximum entropy boundaries.
 */

import { AgentChainValidator } from './agent-chain-validator';

export class OrchestratorGovernor {
  private chainDepth: number = 0;
  private readonly maxChainDepth: number = 5;
  private validator: AgentChainValidator;

  constructor() {
    this.validator = new AgentChainValidator();
  }

  /**
   * Called whenever Agent A attempts to spawn or pass control to Agent B.
   */
  public governHandoff(sourceAgent: string, targetAgent: string, payload: any): boolean {
    this.chainDepth++;

    // 1. Enforce strict recursion depth
    if (this.chainDepth > this.maxChainDepth) {
      this.triggerEntropyCollapse(`Maximum chain depth (${this.maxChainDepth}) exceeded. Orchestration halted to prevent infinite loop.`);
      return false;
    }

    // 2. Validate semantic fidelity
    const isAdmissible = this.validator.validateSemanticDrift(payload);
    if (!isAdmissible) {
      this.triggerEntropyCollapse(`Semantic drift exceeded acceptable variance between ${sourceAgent} and ${targetAgent}.`);
      return false;
    }

    console.log(`[GOVERNANCE] Handoff from ${sourceAgent} to ${targetAgent} approved. Current Depth: ${this.chainDepth}`);
    return true;
  }

  private triggerEntropyCollapse(reason: string) {
    console.error("\n========================================================");
    console.error("🚨 [FATAL] ORCHESTRATION ENTROPY COLLAPSE DETECTED 🚨");
    console.error("========================================================");
    console.error(`Reason: ${reason}`);
    console.error("Action: Severing all agentic threads and destroying workflow state.");
    
    // In production, emit event to kill all worker threads
    this.chainDepth = 0; 
    throw new Error("ENTROPY_CIRCUIT_BREAKER_TRIPPED");
  }
}
