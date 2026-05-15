/**
 * EXECUTION GATING MIDDLEWARE
 * 
 * This middleware intercepts LLM execution requests and validates them against 
 * the RetryCircuitBreaker policy to prevent context rot and recursive patching.
 */

import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

interface RetryPolicy {
  spec: {
    limits: {
      max_consecutive_failures: number;
    };
  };
}

export class ExecutionGate {
  private consecutiveFailures: number = 0;
  private maxFailures: number;

  constructor(policyPath: string = './retry-policy.yaml') {
    const fileContents = readFileSync(policyPath, 'utf8');
    const policy = yaml.load(fileContents) as RetryPolicy;
    this.maxFailures = policy.spec.limits.max_consecutive_failures;
  }

  /**
   * Intercepts the agent's execution attempt.
   * Throws an error if the agent is caught in a recursive patching loop.
   */
  public async validateExecution(agentContext: string, proposedAction: string): Promise<boolean> {
    if (this.consecutiveFailures >= this.maxFailures) {
      this.triggerGovernanceHalt();
      return false; // Execution blocked
    }
    
    // Admissibility checks...
    const isAdmissible = this.checkSemanticDrift(agentContext, proposedAction);
    
    if (!isAdmissible) {
      this.consecutiveFailures++;
      throw new Error(`[GOVERNANCE HALT] Proposed action violates admissibility constraints. Failure count: ${this.consecutiveFailures}`);
    }

    // Reset on success
    this.consecutiveFailures = 0;
    return true; // Execution permitted
  }

  private checkSemanticDrift(context: string, action: string): boolean {
    // In production, this validates the action against the RepoMap.
    // E.g., if the agent attempts to patch a file it just patched unsuccessfully.
    const isPatchingOwnPatch = action.includes('revert') && context.includes('previous patch failed');
    return !isPatchingOwnPatch;
  }

  private triggerGovernanceHalt() {
    console.error("[CRITICAL] Agent has hit maximum retry threshold.");
    console.error("[CRITICAL] Initiating mandatory semantic reset and repository rollback.");
    // Trigger rollback handler here
  }
}
