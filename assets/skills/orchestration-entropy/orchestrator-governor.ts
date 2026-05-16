/**
 * ORCHESTRATOR GOVERNOR
 * 
 * Runtime middleware that intercepts messages between agents in a multi-agent workflow.
 * Detects infinite agreement loops, recursive delegation, and token burn runaway chains.
 */

import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

export interface AgentMessagePayload {
    sourceAgent: string;
    targetAgent: string;
    messageContent: string;
    workflowId: string;
    toolsInvoked: string[];
}

export interface EntropyThresholds {
    spec: {
        limits: {
            max_turns_per_workflow: number;
            max_delegation_depth: number;
            max_consecutive_agreements: number;
        };
    };
}

export class OrchestratorGovernor {
    private policy: EntropyThresholds;
    
    // In-memory state tracking (in production, use Redis for distributed agent tracking)
    private workflowTurns: Record<string, number> = {};
    private agreementStreaks: Record<string, number> = {};
    private delegationDepth: Record<string, number> = {};

    constructor(policyPath: string = './entropy-thresholds.yaml') {
        const fileContents = readFileSync(policyPath, 'utf8');
        this.policy = yaml.load(fileContents) as EntropyThresholds;
    }

    /**
     * Intercepts and validates every message passed between agents.
     * Throws an error to halt the execution container if entropy thresholds are breached.
     */
    public validateAgentInteraction(payload: AgentMessagePayload): boolean {
        const { workflowId, sourceAgent, targetAgent, messageContent, toolsInvoked } = payload;
        const limits = this.policy.spec.limits;

        // 1. Turn Exhaustion Detection
        this.workflowTurns[workflowId] = (this.workflowTurns[workflowId] || 0) + 1;
        if (this.workflowTurns[workflowId] > limits.max_turns_per_workflow) {
            this.triggerHalt(workflowId, `Maximum turn limit (${limits.max_turns_per_workflow}) exceeded. Runaway chain detected.`);
        }

        // 2. Infinite Agreement Loop Detection
        if (this.isAgreementLoop(messageContent, toolsInvoked)) {
            this.agreementStreaks[workflowId] = (this.agreementStreaks[workflowId] || 0) + 1;
            if (this.agreementStreaks[workflowId] > limits.max_consecutive_agreements) {
                this.triggerHalt(workflowId, `Agents are stuck in an infinite agreement loop without invoking tools.`);
            }
        } else {
            this.agreementStreaks[workflowId] = 0; // Reset streak on actual work
        }

        // 3. Recursive Delegation Tracking
        const delegationKey = `${workflowId}:${sourceAgent}->${targetAgent}`;
        this.delegationDepth[delegationKey] = (this.delegationDepth[delegationKey] || 0) + 1;
        if (this.delegationDepth[delegationKey] > limits.max_delegation_depth) {
            this.triggerHalt(workflowId, `Agent ${sourceAgent} has recursively delegated to ${targetAgent} too many times.`);
        }

        console.log(`[GOVERNANCE] Agent interaction ${sourceAgent} -> ${targetAgent} approved.`);
        return true;
    }

    private isAgreementLoop(message: string, toolsInvoked: string[]): boolean {
        const agreementPhrases = ["i agree", "that sounds good", "let's proceed", "great plan"];
        const containsAgreement = agreementPhrases.some(phrase => message.toLowerCase().includes(phrase));
        const noToolsUsed = toolsInvoked.length === 0;
        
        return containsAgreement && noToolsUsed;
    }

    private triggerHalt(workflowId: string, reason: string): never {
        console.error(`[CRITICAL ENTROPY DETECTED] Workflow ${workflowId} halted.`);
        console.error(`[REASON] ${reason}`);
        // In production, this throws a specific GovernanceHaltError caught by the orchestrator
        throw new Error(`Orchestration Entropy Halt: ${reason}`);
    }
}
