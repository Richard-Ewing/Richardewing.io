/**
 * REPOSITORY DIVERGENCE DETECTOR
 * 
 * Scans agent-generated AST or diff payloads to detect anti-patterns
 * that violate established architectural norms.
 */

export class RepoDivergenceDetector {
  private readonly forbiddenPatterns = [
    { pattern: "import axios", reason: "Repository uses native fetch api." },
    { pattern: "useState", reason: "Component is marked as server-only." },
    { pattern: "console.log", reason: "Must use internal telemetry logger." }
  ];

  /**
   * Scans proposed code for architectural drift.
   */
  public detectDrift(proposedCode: string, isServerComponent: boolean): string[] {
    const violations: string[] = [];

    for (const rule of this.forbiddenPatterns) {
      if (proposedCode.includes(rule.pattern)) {
        if (rule.pattern === "useState" && !isServerComponent) {
          continue; // Allowed in client components
        }
        violations.push(`Pattern '${rule.pattern}' forbidden: ${rule.reason}`);
      }
    }

    if (violations.length > 0) {
      console.warn(`[ARCHITECTURAL DRIFT DETECTED] ${violations.length} violations found.`);
    }

    return violations;
  }
}
