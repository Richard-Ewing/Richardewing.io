/**
 * REVIEWER ESCALATION MATRIX
 * 
 * Determines who (if anyone) should review an agent's output based on 
 * the risk profile of the mutated files.
 */

export class ReviewerEscalation {
  
  public determineRequiredSignoff(modifiedFiles: string[]): string {
    const isCoreArchitecture = modifiedFiles.some(f => 
      f.includes('governance/') || f.includes('middleware/')
    );

    const isDatabaseMutation = modifiedFiles.some(f => 
      f.includes('schema.sql') || f.includes('migrations/')
    );

    if (isCoreArchitecture || isDatabaseMutation) {
      return "ESCALATION: Principal Engineer Sign-off Required. High-risk architectural mutation detected.";
    }

    const isUIOnly = modifiedFiles.every(f => 
      f.includes('components/ui/') || f.includes('.css')
    );

    if (isUIOnly) {
      return "ESCALATION: Standard Peer Review. Low-risk UI mutation.";
    }

    return "ESCALATION: Standard Peer Review + QA Validation.";
  }
}
