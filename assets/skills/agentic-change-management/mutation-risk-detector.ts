/**
 * MUTATION RISK DETECTOR
 * 
 * Middleware that intercepts agent shell commands and API requests to 
 * calculate the blast radius and risk score of the proposed mutation before
 * it touches the infrastructure.
 */

import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

export interface ProposedMutation {
    agentId: string;
    commandType: 'SHELL' | 'API' | 'FILE';
    targetResource: string;
    payload: string;
}

export interface ExecutionAuthorityPolicy {
    spec: {
        risk_scoring: {
            high_risk_patterns: string[];
            medium_risk_patterns: string[];
        };
        authority_mapping: Record<string, 'AUTO' | 'CODE_OWNER' | 'CAB_APPROVAL'>;
    };
}

export class MutationRiskDetector {
    private policy: ExecutionAuthorityPolicy;

    constructor(policyPath: string = './execution-authority-policy.yaml') {
        const fileContents = readFileSync(policyPath, 'utf8');
        this.policy = yaml.load(fileContents) as ExecutionAuthorityPolicy;
    }

    /**
     * Evaluates a proposed mutation and returns the required approval tier.
     */
    public assessRisk(mutation: ProposedMutation): 'AUTO' | 'CODE_OWNER' | 'CAB_APPROVAL' {
        const { payload, targetResource } = mutation;
        const normalizedPayload = payload.toLowerCase();

        // 1. Detect High Risk (e.g. Terraform apply, DB drop, AWS terminate)
        const isHighRisk = this.policy.spec.risk_scoring.high_risk_patterns.some(pattern => 
            normalizedPayload.includes(pattern) || targetResource.includes(pattern)
        );

        if (isHighRisk) {
            console.warn(`[RISK DETECTOR] High-Risk Mutation detected. CAB Approval Required.`);
            return 'CAB_APPROVAL';
        }

        // 2. Detect Medium Risk (e.g. modifying CI workflows, installing new dependencies)
        const isMediumRisk = this.policy.spec.risk_scoring.medium_risk_patterns.some(pattern => 
            normalizedPayload.includes(pattern) || targetResource.includes(pattern)
        );

        if (isMediumRisk) {
            console.log(`[RISK DETECTOR] Medium-Risk Mutation detected. Code Owner Approval Required.`);
            return 'CODE_OWNER';
        }

        // 3. Low Risk (Standard read/write within allowed boundaries)
        console.log(`[RISK DETECTOR] Low-Risk Mutation. Auto-Approval Granted.`);
        return 'AUTO';
    }
}
