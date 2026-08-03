import { ExecutiveResponsibility, OrganizationalCondition } from '../ontology/responsibility';

/**
 * Executive Responsibility Engine
 * Maps executive roles directly to their primary recurring responsibilities and 6-dimensional organizational conditions.
 */
export function getExecutiveResponsibilities(role: 'CFO' | 'CTO' | 'CISO' | 'CEO' = 'CFO'): ExecutiveResponsibility[] {
    switch (role) {
        case 'CFO':
            return [
                {
                    id: 'resp_cfo_01',
                    responsibilityTitle: 'Defend Technology & AI Budget to Board',
                    executiveOwnerRole: 'CFO',
                    cadence: 'Quarterly',
                    successCriteria: 'Board approval of FY27 Tech OpEx budget ($4.2M)',
                    status: 'RequiresAttention',
                    associatedWorkflows: ['Board Meeting Prep', 'Budget Reforecast', 'Vendor Contract Review'],
                    primaryUncertaintyUSD: 318000
                },
                {
                    id: 'resp_cfo_02',
                    responsibilityTitle: 'EBITDA Margin Expansion Target (+0.42%)',
                    executiveOwnerRole: 'CFO',
                    cadence: 'Monthly',
                    successCriteria: 'Achieve $319,500 annual OpEx savings',
                    status: 'OnTrack',
                    associatedWorkflows: ['AI Volatility Tax Audit', 'CPUO Benchmark'],
                    primaryUncertaintyUSD: 40000
                }
            ];

        case 'CTO':
            return [
                {
                    id: 'resp_cto_01',
                    responsibilityTitle: 'Justify Development Platform & Tooling Investments',
                    executiveOwnerRole: 'CTO',
                    cadence: 'Quarterly',
                    successCriteria: 'Prove Cursor Enterprise ROI vs GitHub Copilot baseline',
                    status: 'OnTrack',
                    associatedWorkflows: ['PDI Audit', 'Developer Verification Drag Analysis'],
                    primaryUncertaintyUSD: 118000
                }
            ];

        default:
            return [
                {
                    id: 'resp_ceo_01',
                    responsibilityTitle: 'Fulfill Annual Corporate EBITDA & Growth Promises',
                    executiveOwnerRole: 'CEO',
                    cadence: 'Annual',
                    successCriteria: 'Expand EBITDA margin +1.2% while shipping key roadmap epics',
                    status: 'OnTrack',
                    associatedWorkflows: ['Board Briefing', 'Strategic Portfolio Allocation'],
                    primaryUncertaintyUSD: 612000
                }
            ];
    }
}

export function evaluateOrganizationalCondition(): OrganizationalCondition {
    return {
        organizationId: 'org_enterprise_01',
        reality: 'AI spend expanded +18% MoM due to un-cached PDF dumps in 14 repos.',
        intent: 'Achieve +0.42% EBITDA expansion via technology cost recovery.',
        commitments: 'Token Saver MCP sidecars & Intent Router rollout in progress.',
        momentum: 'OnSchedule',
        confidencePct: 91,
        capacityStatus: 'Available'
    };
}
