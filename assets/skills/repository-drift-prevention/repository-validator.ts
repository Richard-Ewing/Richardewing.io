/**
 * REPOSITORY VALIDATOR
 * 
 * Middleware that executes before an agent is granted write access to ensure
 * its internal context map matches the current deterministic HEAD of the repository.
 */

import { execSync } from 'child_process';

export class RepositoryValidator {
  
  /**
   * Validates that the agent is operating on the latest commit to prevent
   * concurrent mutation conflicts.
   */
  public validateContextState(agentAssumedCommitHash: string): boolean {
    try {
      const currentHead = execSync('git rev-parse HEAD').toString().trim();
      
      if (agentAssumedCommitHash !== currentHead) {
        console.warn(`[GOVERNANCE REJECT] Agent context is stale. Expected ${currentHead}, Agent has ${agentAssumedCommitHash}.`);
        return false;
      }
      return true;
    } catch (e) {
      console.error("[ERROR] Failed to read repository state.");
      return false;
    }
  }

  /**
   * Enforces that the agent has explicitly read the architectural repo map.
   */
  public validateMapIngestion(agentSessionLogs: string): boolean {
    const hasReadMap = agentSessionLogs.includes("READ_SYSTEM_REPO_MAP");
    if (!hasReadMap) {
      console.warn("[GOVERNANCE REJECT] Agent attempted execution without ingesting deterministic architectural boundaries.");
      return false;
    }
    return true;
  }
}
