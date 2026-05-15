/**
 * RUNTIME PERMISSION VALIDATOR
 * 
 * Inspects raw command strings against the declarative Execution Safety Policy.
 */

export class RuntimePermissionValidator {
  
  // These would typically be loaded from execution-safety-policy.yaml
  private allowedPrefixes = ["npm run", "npm test", "git status", "git diff", "git add"];
  private forbiddenTokens = ["rm -rf", "sudo", "curl", "wget", "chmod", "--force", "publish"];

  public validateCommand(commandString: string): boolean {
    const normalizedCmd = commandString.toLowerCase().trim();

    // 1. Check for hard-forbidden destructive tokens
    for (const token of this.forbiddenTokens) {
      if (normalizedCmd.includes(token)) {
        console.error(`[FATAL] Command contains forbidden destructive token: ${token}`);
        return false;
      }
    }

    // 2. Check if the command starts with an allowed prefix
    let isAllowed = false;
    for (const prefix of this.allowedPrefixes) {
      if (normalizedCmd.startsWith(prefix)) {
        isAllowed = true;
        break;
      }
    }

    if (!isAllowed) {
      console.warn(`[WARNING] Command prefix not found in safe-list.`);
      return false;
    }

    // 3. Prevent command injection/chaining
    if (normalizedCmd.includes("&&") || normalizedCmd.includes("||") || normalizedCmd.includes(";")) {
      console.warn(`[WARNING] Command chaining is disabled for autonomous agents to prevent injection escapes.`);
      return false;
    }

    return true;
  }
}
