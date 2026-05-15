/**
 * ADMISSIBILITY ENGINE
 * 
 * Deterministic evaluation logic that compares proposed agent actions
 * against the constraints defined in runtime-policy.yaml.
 */

import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

interface RuntimePolicy {
  spec: {
    blocked_commands: string[];
    write_protected_paths: string[];
    circuit_breakers: { max_blocked_attempts: number };
  };
}

export class AdmissibilityEngine {
  private policy: RuntimePolicy;

  constructor(policyPath: string = './runtime-policy.yaml') {
    const fileContents = readFileSync(policyPath, 'utf8');
    this.policy = yaml.load(fileContents) as RuntimePolicy;
  }

  /**
   * Evaluates if a proposed terminal command is strictly admissible.
   */
  public isCommandAdmissible(proposedCommand: string): boolean {
    const isBlocked = this.policy.spec.blocked_commands.some(cmd => 
      proposedCommand.includes(cmd)
    );
    
    if (isBlocked) {
      console.warn(`[GOVERNANCE REJECT] Command blocked by policy: ${proposedCommand}`);
      return false;
    }
    return true;
  }

  /**
   * Evaluates if a proposed file modification is strictly admissible.
   */
  public isFileWriteAdmissible(targetPath: string): boolean {
    const isProtected = this.policy.spec.write_protected_paths.some(protectedPath => 
      targetPath.startsWith(protectedPath) || targetPath === protectedPath
    );

    if (isProtected) {
      console.warn(`[GOVERNANCE REJECT] Write access denied for protected path: ${targetPath}`);
      return false;
    }
    return true;
  }
}
