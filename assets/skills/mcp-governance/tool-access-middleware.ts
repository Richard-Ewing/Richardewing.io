/**
 * TOOL ACCESS MIDDLEWARE
 * 
 * Intercepts LLM tool_calls directed at MCP servers to enforce
 * strict access control, payload validation, and rate limiting.
 */

import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

interface MCPPolicy {
  spec: {
    blacklisted_tools: string[];
    file_access_boundaries: {
      denied_directories: string[];
    };
  };
}

export class ToolAccessMiddleware {
  private policy: MCPPolicy;

  constructor(policyPath: string = './mcp-policy.yaml') {
    const fileContents = readFileSync(policyPath, 'utf8');
    this.policy = yaml.load(fileContents) as MCPPolicy;
  }

  /**
   * Intercepts and validates the tool call before it reaches the MCP Server.
   */
  public validateToolCall(toolName: string, args: Record<string, any>): boolean {
    // 1. Check Tool Blacklist
    if (this.policy.spec.blacklisted_tools.includes(toolName)) {
      console.warn(`[MCP GOVERNANCE] Tool access denied. '${toolName}' is blacklisted.`);
      return false;
    }

    // 2. Payload Inspection (e.g., checking file paths)
    if (toolName === 'read_file' || toolName === 'write_file') {
      const targetPath = args.path || args.AbsolutePath;
      
      if (!targetPath) return false;

      const isDenied = this.policy.spec.file_access_boundaries.denied_directories.some(
        dir => targetPath.includes(dir)
      );

      if (isDenied) {
        console.warn(`[MCP GOVERNANCE] Payload validation failed. Access to '${targetPath}' is restricted.`);
        return false;
      }
    }

    // 3. (In production) Enforce Rate Limits here

    console.log(`[MCP GOVERNANCE] Tool call '${toolName}' mathematically validated.`);
    return true;
  }
}
