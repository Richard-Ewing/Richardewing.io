/**
 * CHANGE APPROVAL ENGINE
 * 
 * The automated Change Advisory Board (CAB) for agentic workflows.
 * Intercepts mutations and validates them against the execution authority policy.
 */

import { MutationRiskDetector } from './mutation-risk-detector';

export class ChangeApprovalEngine {
  private detector: MutationRiskDetector;

  constructor() {
    this.detector = new MutationRiskDetector();
  }

  /**
   * Evaluates if an agent is authorized to execute a specific mutation.
   */
  public requestExecutionAuthority(agentId: string, targetFiles: string[], proposedCommand?: string): string {
    const riskScore = this.detector.calculateBlastRadius(targetFiles, proposedCommand);

    if (riskScore === "CRITICAL") {
      console.warn(`[GOVERNANCE REJECT] Agent ${agentId} attempted CRITICAL mutation. Human cryptographic sign-off required.`);
      return "STATUS: BLOCKED. Requires Human Executive Override.";
    }

    if (riskScore === "HIGH") {
      console.warn(`[GOVERNANCE HOLD] Agent ${agentId} attempted HIGH risk mutation. Routing to async peer review.`);
      return "STATUS: PENDING. Routed to human queue.";
    }

    console.log(`[GOVERNANCE APPROVE] Agent ${agentId} executed LOW risk mutation. Auto-approved.`);
    return "STATUS: APPROVED. Execution Authorized.";
  }
}
