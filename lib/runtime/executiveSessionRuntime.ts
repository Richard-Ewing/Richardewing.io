import { CanonicalDecisionPackage } from '../kernel/decisionPackageSchema';

export type ExecutiveSessionType = 
    | 'BoardMeeting' 
    | 'VendorRenewal' 
    | 'BudgetReview' 
    | 'SOXAudit' 
    | 'MAndAAquisition' 
    | 'QuarterlyPlanning';

export interface ExecutiveSession {
    sessionId: string;
    organizationId: string;
    sessionType: ExecutiveSessionType;
    scheduledDate: string;
    executiveOwnerRole: string;
    participatingRoles: string[];
    readinessScorePct: number;
    decisionPackage: CanonicalDecisionPackage;
    sessionStatus: 'Scheduled' | 'InSession' | 'Approved' | 'Executed';
}

export class ExecutiveSessionRuntime {
    static async createSession(
        orgId: string, 
        sessionType: ExecutiveSessionType, 
        ownerRole: string
    ): Promise<ExecutiveSession> {
        const canonicalPackage: CanonicalDecisionPackage = {
            id: `dp_sess_${Date.now()}`,
            version: '1.0.0',
            questionText: `Executive Session Directive for ${sessionType}`,
            organizationId: orgId,
            executiveOwnerRole: ownerRole,
            summary: `Compiled evidence package for ${sessionType} execution.`,
            evidenceSources: [
                {
                    sourceId: 'ev_sess_01',
                    sourceType: 'AWSBilling',
                    sampleSize: 3200,
                    evidenceFreshnessTimestamp: new Date().toISOString(),
                    trustScorePct: 99.4
                }
            ],
            rootCauseChain: ['Repetitive frontier API calls without local context caching.'],
            keyAssumptions: ['Developer adoption rate will exceed 80% across primary repositories.'],
            scenarios: [
                {
                    scenarioId: 'scn_sess_01',
                    title: 'Local SLM Edge Cluster',
                    expectedROIUSD: 319500,
                    latencyImpactMs: 0,
                    riskScorePct: 12
                }
            ],
            recommendedActions: ['Deploy Token Saver MCP server to 14 core repositories.'],
            tradeoffsAcknowledged: ['Initial $40k CapEx required for long-term OpEx reduction.'],
            executionPlanDays: 30,
            expectedOutcomeUSD: 319500,
            verificationScheduleDays: 30,
            overallConfidencePct: 91,
            createdAt: new Date().toISOString()
        };

        return {
            sessionId: `sess_${Date.now()}`,
            organizationId: orgId,
            sessionType,
            scheduledDate: new Date(Date.now() + 86400000 * 3).toISOString(), // 3 days in future
            executiveOwnerRole: ownerRole,
            participatingRoles: ['CEO', 'CFO', 'CTO', 'CISO'],
            readinessScorePct: 96,
            decisionPackage: canonicalPackage,
            sessionStatus: 'Scheduled'
        };
    }
}
