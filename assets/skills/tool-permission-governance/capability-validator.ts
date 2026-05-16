/**
 * CAPABILITY VALIDATOR
 * 
 * Cryptographic execution gate. Intercepts the actual runtime execution of a tool.
 * Even if an LLM hallucinates a tool call (or a sub-agent intercepts a payload containing
 * a tool schema it shouldn't have), this middleware throws a Governance Halt.
 */

import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { PermissionBoundaryPolicy } from './tool-scope-engine';

export interface ToolExecutionAttempt {
    agentRole: string;
    agentId: string;
    toolName: string;
    executionParams: any;
}

export class CapabilityValidator {
    private policy: PermissionBoundaryPolicy;

    constructor(policyPath: string = './permission-boundary-policy.yaml') {
        const fileContents = readFileSync(policyPath, 'utf8');
        this.policy = yaml.load(fileContents) as PermissionBoundaryPolicy;
    }

    /**
     * Intercepts tool execution at runtime.
     * @returns true if the agent is cryptographically permitted to execute the tool.
     */
    public validateExecution(attempt: ToolExecutionAttempt): boolean {
        const { agentRole, agentId, toolName } = attempt;

        // 1. Check Global Restrictions
        if (this.policy.spec.global_restrictions.includes(toolName)) {
            this.handleEscalation(agentId, toolName, "Globally Restricted Tool");
        }

        const roleConfig = this.policy.spec.roles[agentRole];
        if (!roleConfig) {
            this.handleEscalation(agentId, toolName, `Unknown Agent Role: ${agentRole}`);
        }

        // 2. Explicit Allowlist Check
        if (!roleConfig.allowed_tools.includes(toolName)) {
            this.handleEscalation(agentId, toolName, "Tool Not in Allowlist for Role");
        }

        // 3. Explicit Denylist Check
        if (roleConfig.forbidden_tools && roleConfig.forbidden_tools.includes(toolName)) {
            this.handleEscalation(agentId, toolName, "Tool Explicitly Forbidden for Role");
        }

        console.log(`[EXECUTION APPROVED] Agent ${agentId} (${agentRole}) invoking ${toolName}`);
        return true;
    }

    private handleEscalation(agentId: string, toolName: string, reason: string): never {
        console.error(`[CRITICAL SECURITY BREACH] Capability Escalation Attempt Blocked.`);
        console.error(`Agent: ${agentId}`);
        console.error(`Target Tool: ${toolName}`);
        console.error(`Reason: ${reason}`);

        // In production, trigger an immediate Slack/PagerDuty SecOps alert here
        throw new Error(`[GOVERNANCE HALT] Unauthorized Tool Execution: ${reason}`);
    }
}
