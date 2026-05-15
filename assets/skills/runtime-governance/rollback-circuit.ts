/**
 * ROLLBACK CIRCUIT
 * 
 * The ultimate containment mechanism. When triggered by the ExecutionInterceptor,
 * this circuit physically severs the agent's connection to the environment and rolls
 * back any uncommitted state changes.
 */

import { execSync } from 'child_process';

export class RollbackCircuit {
  
  /**
   * Severs the session and rolls back the repository.
   */
  public triggerIsolation() {
    console.error("\n========================================================");
    console.error("🚨 [FATAL] GOVERNANCE CONTAINMENT PROTOCOL INITIATED 🚨");
    console.error("========================================================");
    console.error("Reason: Agent breached max admissibility threshold.");
    
    try {
      console.log("[CONTAINMENT] Executing hard repository reset...");
      execSync('git reset --hard HEAD');
      execSync('git clean -fd');
      console.log("[CONTAINMENT] State successfully restored to deterministic baseline.");
    } catch (error) {
      console.error("[CONTAINMENT FAILED] Manual intervention required.", error);
    }

    console.error("[CONTAINMENT] Agent process isolation complete. Terminating orchestration thread.");
    process.exit(1); // Force thread death to ensure containment
  }
}
