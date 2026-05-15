/**
 * MUTATION RISK DETECTOR
 * 
 * Analyzes the blast radius of an agent's intended changes to classify
 * its risk tier before execution.
 */

export class MutationRiskDetector {
  
  /**
   * Calculates the blast radius based on file paths and command strings.
   * Returns: "LOW" | "HIGH" | "CRITICAL"
   */
  public calculateBlastRadius(targetFiles: string[], proposedCommand?: string): string {
    
    // Check commands first (e.g., executing a migration script is an instant critical)
    if (proposedCommand && (proposedCommand.includes("migrate") || proposedCommand.includes("terraform"))) {
      return "CRITICAL";
    }

    // Check file paths
    let hasHighRisk = false;

    for (const file of targetFiles) {
      if (file.includes('schema.sql') || file.includes('.yaml') || file.includes('governance/')) {
        return "CRITICAL"; // Immediate escalation
      }
      if (file.includes('api/') || file.includes('lib/')) {
        hasHighRisk = true;
      }
    }

    return hasHighRisk ? "HIGH" : "LOW";
  }
}
