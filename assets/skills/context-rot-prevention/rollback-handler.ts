/**
 * ROLLBACK HANDLER
 * 
 * Invoked by the ExecutionGate when a semantic reset is required.
 * Restores the repository to the last known good deterministic state.
 */

import { execSync } from 'child_process';

export class RollbackHandler {
  private lastKnownGoodCommit: string | null = null;

  /**
   * Sets the deterministic checkpoint before the agent begins execution.
   */
  public createCheckpoint() {
    try {
      const commitSha = execSync('git rev-parse HEAD').toString().trim();
      this.lastKnownGoodCommit = commitSha;
      console.log(`[GOVERNANCE] Checkpoint created at ${this.lastKnownGoodCommit}`);
    } catch (error) {
      console.error("[ERROR] Failed to create git checkpoint.", error);
    }
  }

  /**
   * Hard resets the repository, discarding all probabilistic garbage generated
   * by the agent during the failed session.
   */
  public executeRollback() {
    if (!this.lastKnownGoodCommit) {
      throw new Error("[CRITICAL] No checkpoint found. Cannot execute rollback.");
    }

    console.log(`[GOVERNANCE] Initiating hard rollback to ${this.lastKnownGoodCommit}...`);
    
    try {
      // Nuke uncommitted changes
      execSync('git reset --hard HEAD');
      execSync('git clean -fd');
      
      console.log("[SUCCESS] Repository purged of semantic contamination.");
    } catch (error) {
      console.error("[FATAL] Rollback failed. Manual intervention required.", error);
    }
  }
}
