import { CustomerMissionRecord, OrganizationalReasoningQueryResult } from '../ontology/customerRecord';

/**
 * Customer Mission Record Engine
 * Maps customer accounts to active missions, living campaign progress, and institutional organizational reasoning queries.
 */
export function getCustomerMissionRecord(customerId: string = 'cust_enterprise_01'): CustomerMissionRecord {
    return {
        customerId,
        customerName: 'Enterprise FinServ Corp',
        industry: 'FinancialServices',
        activeMissions: [
            {
                missionTitle: 'Reduce AI Operating Cost',
                progressPct: 74,
                remainingSavingsUSD: 181000,
                status: 'OnSchedule'
            },
            {
                missionTitle: 'Engineering Modernization',
                progressPct: 43,
                remainingSavingsUSD: 240000,
                status: 'Blocked'
            },
            {
                missionTitle: 'AI Governance & Audit Readiness',
                progressPct: 92,
                remainingSavingsUSD: 0,
                status: 'Monitoring'
            },
            {
                missionTitle: 'Board Technology Review',
                progressPct: 80,
                remainingSavingsUSD: 0,
                status: 'Preparing (Board Sync in 4 Days)'
            }
        ],
        livingCampaigns: [
            {
                campaignId: 'cmp_01',
                title: 'Intent Router & Local Token Saver Deployment',
                progressPct: 74,
                owner: 'VP Engineering',
                status: 'Blocked',
                blockedReason: 'Procurement review for vLLM edge node vendor agreement',
                remainingSavingsUSD: 181000,
                nextMilestoneTitle: 'Deploy Token Saver MCP Sidecars to 14 Core Repos',
                forecastCompletionDate: 'September 14, 2026'
            }
        ],
        estimatedExecutiveReadingTimeMinutes: 7
    };
}

export function queryOrganizationalReasoning(question: string): OrganizationalReasoningQueryResult {
    return {
        queryQuestion: question,
        originalDecisionDate: '2026-07-28',
        reasonSummary: 'Selected Intent Router + Token Saver MCP sidecars over frontier API dumps to eliminate document context rot and reduce monthly token waste.',
        alternativesConsidered: [
            'Sonnet + Prompt Caching ($216,000/yr savings)',
            'Local 8B SLM Cluster ($283,500/yr savings)',
            'Intent Router + Token Saver ($319,500/yr savings)'
        ],
        expectedSavingsUSD: 319500,
        actualVerifiedSavingsUSD: 319500,
        confidencePct: 91,
        stillValidToday: true,
        todayRecommendation: 'Maintain Intent Router deployment; update vLLM edge cluster for secondary repository scaling.'
    };
}
