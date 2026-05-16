/**
 * TOOL SCOPE ENGINE
 * 
 * Middleware that dynamically provisions a subset of tools into the LLM's context window
 * based on the agent's assigned role and the specific objective. Prevents Global Tool Exposure.
 */

import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

export interface ToolDefinition {
    name: string;
    description: string;
    schema: any;
    execute: (params: any) => Promise<any>;
}

export interface PermissionBoundaryPolicy {
    spec: {
        roles: Record<string, {
            allowed_tools: string[];
            forbidden_tools: string[];
        }>;
        global_restrictions: string[];
    };
}

export class ToolScopeEngine {
    private policy: PermissionBoundaryPolicy;
    private allAvailableTools: Map<string, ToolDefinition> = new Map();

    constructor(policyPath: string = './permission-boundary-policy.yaml') {
        const fileContents = readFileSync(policyPath, 'utf8');
        this.policy = yaml.load(fileContents) as PermissionBoundaryPolicy;
    }

    /**
     * Registers a tool into the global registry.
     */
    public registerTool(tool: ToolDefinition): void {
        this.allAvailableTools.set(tool.name, tool);
    }

    /**
     * Provisions the specific tools an agent is permitted to see and use.
     * @returns An array of ToolDefinitions to inject into the LLM context.
     */
    public provisionAgentScope(agentRole: string): ToolDefinition[] {
        const roleConfig = this.policy.spec.roles[agentRole];
        
        if (!roleConfig) {
            console.warn(`[WARNING] Agent Role '${agentRole}' not found in policy. Defaulting to Zero-Trust (No Tools).`);
            return [];
        }

        const scopedTools: ToolDefinition[] = [];

        for (const toolName of roleConfig.allowed_tools) {
            // Enforce Global Restrictions (e.g. drop-database is globally banned in prod)
            if (this.policy.spec.global_restrictions.includes(toolName)) {
                console.error(`[SECURITY] Cannot provision ${toolName} to ${agentRole}. Tool is globally restricted.`);
                continue;
            }

            // Enforce explicit role restrictions
            if (roleConfig.forbidden_tools && roleConfig.forbidden_tools.includes(toolName)) {
                console.error(`[SECURITY] Cannot provision ${toolName} to ${agentRole}. Explicitly forbidden.`);
                continue;
            }

            const tool = this.allAvailableTools.get(toolName);
            if (tool) {
                scopedTools.push(tool);
            }
        }

        console.log(`[SCOPE PROVISIONED] Agent '${agentRole}' granted access to ${scopedTools.length} tools: ${scopedTools.map(t => t.name).join(', ')}`);
        return scopedTools;
    }
}
