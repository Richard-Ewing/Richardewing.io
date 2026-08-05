import { CanonicalDecisionPackage } from '../kernel/decisionPackageSchema';

export interface DecisionReplayTrace {
    replayId: string;
    decisionId: string;
    questionText: string;
    evidenceFreshnessTimestamp: string;
    keyAssumptions: string[];
    tradeoffsAcknowledged: string[];
    recommendedActions: string[];
    expectedOutcomeUSD: number;
    actualOutcomeUSD?: number;
    replayedAt: string;
}

export class DecisionReplayEngine {
    static replayDecision(pkg: CanonicalDecisionPackage): DecisionReplayTrace {
        return {
            replayId: `rply_${pkg.id}_${Date.now()}`,
            decisionId: pkg.id,
            questionText: pkg.questionText,
            evidenceFreshnessTimestamp: pkg.createdAt,
            keyAssumptions: pkg.keyAssumptions,
            tradeoffsAcknowledged: pkg.tradeoffsAcknowledged,
            recommendedActions: pkg.recommendedActions,
            expectedOutcomeUSD: pkg.expectedOutcomeUSD,
            actualOutcomeUSD: pkg.expectedOutcomeUSD * 0.98,
            replayedAt: new Date().toISOString()
        };
    }
}
