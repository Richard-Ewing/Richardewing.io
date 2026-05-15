/**
 * EXECUTION INTERCEPTOR
 * 
 * Sits directly between the Orchestrator's execution intent and the Operating System.
 * Injects the Admissibility Engine and Rollback Circuit.
 */

import { AdmissibilityEngine } from './admissibility-engine';
import { RollbackCircuit } from './rollback-circuit';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export class ExecutionInterceptor {
  private engine: AdmissibilityEngine;
  private circuit: RollbackCircuit;
  private blockedAttempts: number = 0;
  private maxBlockedAttempts: number = 2;

  constructor() {
    this.engine = new AdmissibilityEngine();
    this.circuit = new RollbackCircuit();
  }

  /**
   * The single choke point for agentic execution.
   */
  public async interceptAndExecute(command: string): Promise<string> {
    const isAdmissible = this.engine.isCommandAdmissible(command);

    if (!isAdmissible) {
      this.blockedAttempts++;
      
      if (this.blockedAttempts >= this.maxBlockedAttempts) {
        this.circuit.triggerIsolation();
        throw new Error("[FATAL] Agent attempted to bypass governance boundaries repeatedly. Session terminated.");
      }
      
      throw new Error(`[GOVERNANCE HALT] Command '${command}' is inadmissible.`);
    }

    try {
      // Execution proceeds only if mathematically proven safe
      const { stdout } = await execAsync(command);
      this.blockedAttempts = 0; // Reset on success
      return stdout;
    } catch (error: any) {
      throw new Error(`[RUNTIME ERROR] Safe command failed: ${error.message}`);
    }
  }
}
