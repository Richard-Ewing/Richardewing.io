/**
 * VERIFICATION ROUTING MIDDLEWARE
 * 
 * This middleware intercepts autonomous agent attempts to escalate code to human reviewers.
 * It enforces deterministic Admissibility Pipelines (testing, linting, diff-size bounds)
 * before a human is ever pinged.
 */

import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

export interface VerificationPayload {
    agentId: string;
    targetBranch: string;
    diffSize: number;
    filesModified: string[];
    testCoveragePercentage: number;
    lintErrors: number;
    proposedReviewer: string;
}

export interface QaOverloadPolicy {
    spec: {
        admissibility_thresholds: {
            max_diff_lines: number;
            minimum_test_coverage: number;
            allowed_directories: string[];
            max_lint_errors: number;
        };
        escalation: {
            max_autonomous_retries: number;
        }
    }
}

export class VerificationRouter {
    private policy: QaOverloadPolicy;
    private retryCount: Record<string, number> = {};

    constructor(policyPath: string = './qa-overload-policy.yaml') {
        const fileContents = readFileSync(policyPath, 'utf8');
        this.policy = yaml.load(fileContents) as QaOverloadPolicy;
    }

    /**
     * Intercepts a PR creation or human review request.
     * @returns true if the payload is admissible for human review.
     */
    public async evaluateAdmissibility(payload: VerificationPayload): Promise<boolean> {
        const thresholds = this.policy.spec.admissibility_thresholds;
        const violations: string[] = [];

        // 1. Diff Size Bound
        if (payload.diffSize > thresholds.max_diff_lines) {
            violations.push(`Diff size (${payload.diffSize}) exceeds maximum allowed (${thresholds.max_diff_lines}).`);
        }

        // 2. Synthetic QA Coverage
        if (payload.testCoveragePercentage < thresholds.minimum_test_coverage) {
            violations.push(`Test coverage (${payload.testCoveragePercentage}%) is below minimum threshold (${thresholds.minimum_test_coverage}%).`);
        }

        // 3. Linting Constraints
        if (payload.lintErrors > thresholds.max_lint_errors) {
            violations.push(`Lint errors (${payload.lintErrors}) exceed maximum allowed (${thresholds.max_lint_errors}).`);
        }

        // 4. Scope Drift Detection
        const drift = payload.filesModified.filter(file => 
            !thresholds.allowed_directories.some(dir => file.startsWith(dir))
        );
        if (drift.length > 0) {
            violations.push(`Scope drift detected. Modified restricted files: ${drift.join(', ')}`);
        }

        // --- Admissibility Decision ---
        if (violations.length > 0) {
            this.handleRejection(payload.agentId, violations);
            return false;
        }

        // Reset retry counter on success
        this.retryCount[payload.agentId] = 0;
        return true;
    }

    private handleRejection(agentId: string, violations: string[]): void {
        const currentRetries = this.retryCount[agentId] || 0;
        const maxRetries = this.policy.spec.escalation.max_autonomous_retries;

        if (currentRetries >= maxRetries) {
            throw new Error(`[GOVERNANCE HALT] Agent ${agentId} exceeded max autonomous retries (${maxRetries}) for failing Admissibility Pipelines.\nViolations:\n${violations.join('\n')}`);
        }

        this.retryCount[agentId] = currentRetries + 1;
        
        // In production, this would route back to the LLM orchestrator with instructions to fix the violations.
        console.warn(`[ADMISSIBILITY REJECTED] Agent ${agentId} must fix outputs autonomously. Violations: ${violations.join(' | ')}`);
    }
}
