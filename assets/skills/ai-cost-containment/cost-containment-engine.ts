/**
 * COST CONTAINMENT ENGINE
 * 
 * Middleware that intercepts all LLM API calls, calculates exact USD cost 
 * based on token counts and model pricing, and enforces hard financial limits.
 */

import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

export interface LlmRequest {
    tenantId: string;
    featureId: string;
    model: string;
    estimatedPromptTokens: number;
    maxCompletionTokens: number;
}

export interface TokenBudgetPolicy {
    spec: {
        pricing_tiers: Record<string, { input_usd_per_1k: number; output_usd_per_1k: number }>;
        limits: {
            max_usd_per_tenant_monthly: number;
            max_usd_per_feature_call: number;
        };
        action_on_breach: string;
    };
}

export class CostContainmentEngine {
    private policy: TokenBudgetPolicy;
    
    // In-memory state tracking (in production, use Redis/Stripe Metering)
    private tenantMonthlySpend: Record<string, number> = {};

    constructor(policyPath: string = './token-budget-policy.yaml') {
        const fileContents = readFileSync(policyPath, 'utf8');
        this.policy = yaml.load(fileContents) as TokenBudgetPolicy;
    }

    /**
     * Intercepts an LLM request BEFORE it is sent to the provider.
     * Calculates the maximum possible cost and halts if budgets are exceeded.
     */
    public validateRequestCost(request: LlmRequest): boolean {
        const { tenantId, featureId, model, estimatedPromptTokens, maxCompletionTokens } = request;
        
        const pricing = this.policy.spec.pricing_tiers[model];
        if (!pricing) {
            throw new Error(`[GOVERNANCE HALT] Unknown model requested: ${model}. Cannot calculate financial risk.`);
        }

        // Calculate maximum possible cost for this specific call
        const maxCallCost = ((estimatedPromptTokens / 1000) * pricing.input_usd_per_1k) + 
                            ((maxCompletionTokens / 1000) * pricing.output_usd_per_1k);

        const limits = this.policy.spec.limits;

        // 1. Single Call Limit (Prevent massive context blowouts)
        if (maxCallCost > limits.max_usd_per_feature_call) {
            this.handleBreach(`Feature ${featureId} requested a call that could cost $${maxCallCost.toFixed(4)}. Limit is $${limits.max_usd_per_feature_call}.`);
        }

        // 2. Tenant Monthly Limit (Prevent margin erosion)
        const currentSpend = this.tenantMonthlySpend[tenantId] || 0;
        if ((currentSpend + maxCallCost) > limits.max_usd_per_tenant_monthly) {
            this.handleBreach(`Tenant ${tenantId} has exceeded their monthly AI budget of $${limits.max_usd_per_tenant_monthly}.`);
        }

        console.log(`[COST CONTAINMENT] Request approved. Max risk: $${maxCallCost.toFixed(4)}`);
        return true;
    }

    /**
     * Logs the actual cost after the LLM responds.
     */
    public recordActualSpend(tenantId: string, model: string, actualInputTokens: number, actualOutputTokens: number): void {
        const pricing = this.policy.spec.pricing_tiers[model];
        if (!pricing) return;

        const actualCost = ((actualInputTokens / 1000) * pricing.input_usd_per_1k) + 
                           ((actualOutputTokens / 1000) * pricing.output_usd_per_1k);

        this.tenantMonthlySpend[tenantId] = (this.tenantMonthlySpend[tenantId] || 0) + actualCost;
    }

    private handleBreach(reason: string): never {
        console.error(`[FINANCIAL CIRCUIT BREAKER TRIPPED]`);
        console.error(`[REASON] ${reason}`);
        
        if (this.policy.spec.action_on_breach === 'HARD_HALT') {
            throw new Error(`AI Cost Containment Halt: ${reason}`);
        } else {
            // Soft fail fallback logic (e.g., return cached response or degraded service)
            throw new Error(`AI Cost Containment Halt: ${reason}`);
        }
    }
}
