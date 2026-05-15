/**
 * RECURSIVE LOOP DETECTOR
 * 
 * Analyzes the agent's proposed patches across retries to detect if it is
 * stuck in a deterministic loop (e.g., proposing Patch A, then Patch B, then Patch A again).
 */

import * as crypto from 'crypto';

export class RecursiveLoopDetector {
  private patchHistory: Set<string> = new Set();
  private maxIdenticalPatches: number = 2;

  /**
   * Hashes the proposed patch and checks if the agent has already tried
   * this exact solution in the current session.
   */
  public isLoopDetected(proposedCode: string): boolean {
    const hash = crypto.createHash('sha256').update(proposedCode).digest('hex');

    if (this.patchHistory.has(hash)) {
      console.warn(`[WARNING] Agent has proposed this exact code block previously.`);
      // In a more complex implementation, we'd count occurrences. 
      // For this implementation, returning true means it's a duplicate.
      return true;
    }

    this.patchHistory.add(hash);
    return false;
  }
}
