import { CanonicalDecisionPackage, ExecutiveRole } from '../kernel/decisionPackageSchema';

export interface BoardMeetingRequest {
    organizationId: string;
    meetingDate: string;
    executiveOwnerRole: ExecutiveRole;
    objectiveIds: string[];
}

export interface BoardMeetingPackage {
    meetingId: string;
    summary: string;
    decisionPackage: CanonicalDecisionPackage;
    talkingPoints: string[];
    expectedBoardQuestions: Array<{
        question: string;
        askingRole: string;
        recommendedResponse: string;
    }>;
    powerpointExportRef: string;
}

export class BoardMeetingService {
    async generatePackage(request: BoardMeetingRequest): Promise<BoardMeetingPackage> {
        const canonicalPackage: CanonicalDecisionPackage = {
            id: 'dp_board_001',
            version: '1.0.0',
            questionText: 'Should we deploy Intent Router and Token Saver MCP sidecars enterprise-wide?',
            organizationId: request.organizationId,
            executiveOwnerRole: request.executiveOwnerRole,
            summary: 'Un-cached document context rot in 14 repositories inflating AWS Anthropic spend by $319,500/yr.',
            evidenceSources: [
                {
                    sourceId: 'ev_01',
                    sourceType: 'AWSBilling',
                    sampleSize: 2400,
                    evidenceFreshnessTimestamp: new Date().toISOString(),
                    trustScorePct: 99.4
                }
            ],
            rootCauseChain: [
                'Frontier LLM context dumps without local BM25 keyword chunking',
                'Lack of pre-commit static analysis firewalls'
            ],
            keyAssumptions: [
                'Developer adoption rate will exceed 80% across primary repositories',
                'Local 8B SLM edge node hardware CapEx capped at $40,000'
            ],
            scenarios: [
                {
                    scenarioId: 'scn_01',
                    title: 'Local SLM Cluster',
                    expectedROIUSD: 319500,
                    latencyImpactMs: 0,
                    riskScorePct: 12
                }
            ],
            recommendedActions: [
                'Approve $40,000 CapEx for local edge nodes',
                'Deploy Token Saver MCP server to 14 core repositories'
            ],
            tradeoffsAcknowledged: [
                'Initial $40k CapEx required for long-term OpEx reduction',
                'DevOps team allocation of 120 engineering hours'
            ],
            executionPlanDays: 30,
            expectedOutcomeUSD: 319500,
            verificationScheduleDays: 30,
            overallConfidencePct: 91,
            createdAt: new Date().toISOString()
        };

        return {
            meetingId: `board_mtg_${Date.now()}`,
            summary: 'Board Technology Investment Briefing: Intent Router & Token Saver Sidecar Rollout.',
            decisionPackage: canonicalPackage,
            talkingPoints: [
                'Identified $319,500/yr in un-cached document context rot across 14 primary repos.',
                'Local sidecar RAG cuts frontier API token overhead by 60%–90% with zero code egress.',
                'CapEx payback period is 4.5 months, yielding +0.42% EBITDA expansion.'
            ],
            expectedBoardQuestions: [
                {
                    question: 'Why did AI infrastructure spend double in Q2?',
                    askingRole: 'CFO',
                    recommendedResponse: 'Context rot and repetitive PDF context queries inflated API tokens by +410%. Token Saver sidecars recover $319,500/yr.'
                },
                {
                    question: 'Are we exposed to proprietary data leaks via developer LLM tools?',
                    askingRole: 'CISO',
                    recommendedResponse: 'All local sidecars run hybrid RAG with local BM25 keyword matching and zero third-party data egress.'
                }
            ],
            powerpointExportRef: 's3://exports/board_deck_2026_q3.pptx'
        };
    }
}
