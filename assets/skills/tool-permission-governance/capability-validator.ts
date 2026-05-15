/**
 * CAPABILITY VALIDATOR
 * 
 * Inspects the payload arguments of an allowed tool call to ensure
 * they do not violate payload constraints.
 */

export class CapabilityValidator {
  
  private readonly blockedPaths = [".env", "secrets", "node_modules", ".git"];
  private readonly destructiveSql = ["DROP", "DELETE", "TRUNCATE", "ALTER"];

  /**
   * Validates tool call payloads before they hit the MCP server.
   */
  public validateToolPayload(toolName: string, args: Record<string, any>): boolean {
    
    // File system constraints
    if (toolName === "read_file" || toolName === "write_file") {
      const filePath = args['path'] || "";
      for (const blocked of this.blockedPaths) {
        if (filePath.includes(blocked)) {
          console.error(`[FATAL] Agent attempted to access blocked path: ${filePath}`);
          return false;
        }
      }
    }

    // Database constraints
    if (toolName === "execute_sql") {
      const query = (args['query'] || "").toUpperCase();
      for (const token of this.destructiveSql) {
        if (query.includes(token)) {
          console.error(`[FATAL] Agent attempted destructive SQL operation: ${token}`);
          return false;
        }
      }
    }

    return true;
  }
}
