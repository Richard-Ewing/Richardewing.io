/**
 * RETRY BURN ENGINE
 * 
 * Middleware that tracks token consumption and retry counts for specific agent tasks.
 * Acts as a financial and compute circuit breaker to prevent infinite recursive loops.
 */

import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

export interface ExecutionAttempt {
    taskId: string;
    agentId: string;
    actionType: string;
    estimatedTokenCost: number;
    errorReceived?: string;
}

export interface RetryPolicy {
    spec: {
        budgets: {
            max_usd_per_task: number;
            max_consecutive_errors: number;
            max_total_retries: number;
        };
        circuit_breaker: {
            halt_on_identical_error_count: number;
        }
    }
}

export class RetryBurnEngine {
    private policy: RetryPolicy;
    
    // In-memory state (use Redis for distributed tracking)
    private taskSpend: Record<string, number> = {};
    private retryCounts: Record<string, number> = {};
    private lastErrors: Record<string, string[]> = {};

    constructor(policyPath: string = './retry-budget-policy.yaml') {
        const fileContents = readFileSync(policyPath, 'utf8');
        this.policy = yaml.load(fileContents) as RetryPolicy;
    }

    /**
     * Intercepts an execution attempt BEFORE it runs to ensure budgets are intact.
     * @returns true if execution is permitted.
     */
    public preFlightCheck(attempt: ExecutionAttempt): boolean {
        const { taskId, estimatedTokenCost } = attempt;
        const limits = this.policy.spec.budgets;

        // 1. Hard Budget Check
        const currentSpend = this.taskSpend[taskId] || 0;
        // Approximation: 1000 tokens = $0.01 for this example
        const costUsd = estimatedTokenCost * 0.00001; 
        
        if ((currentSpend + costUsd) > limits.max_usd_per_task) {
            throw new Error(`[FINANCIAL CIRCUIT BREAKER] Task ${taskId} has exceeded max budget of $${limits.max_usd_per_task}. Current spend: $${currentSpend.toFixed(2)}.`);
        }

        // 2. Hard Retry Check
        const retries = this.retryCounts[taskId] || 0;
        if (retries >= limits.max_total_retries) {
            throw new Error(`[COMPUTE CIRCUIT BREAKER] Task ${taskId} has exceeded max retries (${limits.max_total_retries}). Agent is stuck.`);
        }

        return true;
    }

    /**
     * Logs the result of the execution. If an error occurred, updates the failure state.
     */
    public postFlightLog(attempt: ExecutionAttempt, success: boolean): void {
        const { taskId, estimatedTokenCost, errorReceived } = attempt;
        
        // Update financial spend
        this.taskSpend[taskId] = (this.taskSpend[taskId] || 0) + (estimatedTokenCost * 0.00001);

        if (!success && errorReceived) {
            this.retryCounts[taskId] = (this.retryCounts[taskId] || 0) + 1;
            
            if (!this.lastErrors[taskId]) this.lastErrors[taskId] = [];
            this.lastErrors[taskId].push(errorReceived);

            this.evaluateErrorLoop(taskId);
        } else {
            // Reset consecutive error tracking on success, but keep total spend
            this.lastErrors[taskId] = [];
        }
    }

    private evaluateErrorLoop(taskId: string): void {
        const errors = this.lastErrors[taskId];
        const limit = this.policy.spec.circuit_breaker.halt_on_identical_error_count;

        if (errors.length >= limit) {
            // Check if the last N errors are exactly the same string
            const recentErrors = errors.slice(-limit);
            const allIdentical = recentErrors.every(err => err === recentErrors[0]);

            if (allIdentical) {
                throw new Error(`[RECURSIVE LOOP DETECTED] Agent has received the exact same error ${limit} times consecutively. Execution halted.`);
            }
        }
    }
}
