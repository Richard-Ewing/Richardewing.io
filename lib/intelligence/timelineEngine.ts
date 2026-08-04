import { DecisionTimeline } from '../ontology/timeline';

/**
 * Visual Decision Timeline Engine
 * Generates step-by-step visual execution timelines tracing a decision from proposal through verification and board reporting.
 */
export function getDecisionTimeline(decisionId: string = 'rec_1774495131'): DecisionTimeline {
    return {
        decisionId,
        decisionTitle: 'Deploy Intent Router & Token Saver MCP Sidecars',
        currentStepIndex: 5,
        totalSteps: 7,
        overallExecutionHealth: 'VerifiedSuccess',
        steps: [
            {
                stepIndex: 1,
                stepTitle: 'Proposed & Diagnostic Run',
                targetDate: '2026-05-03',
                actualDate: '2026-05-03',
                ownerRole: 'Lead Architect',
                status: 'Completed',
                milestoneDetail: 'Identified $318,000/yr context rot in 14 primary repositories.'
            },
            {
                stepIndex: 2,
                stepTitle: 'Approved by CFO & VP Eng',
                targetDate: '2026-05-05',
                actualDate: '2026-05-05',
                ownerRole: 'CFO & VP Engineering',
                status: 'Completed',
                milestoneDetail: 'Approved $40,000 CapEx allocation for sidecar rollout.'
            },
            {
                stepIndex: 3,
                stepTitle: 'Engineering Deployment Started',
                targetDate: '2026-05-08',
                actualDate: '2026-05-08',
                ownerRole: 'DevOps Lead',
                status: 'Completed',
                milestoneDetail: 'Deployed Token Saver MCP server instances to test repositories.'
            },
            {
                stepIndex: 4,
                stepTitle: '50% Core Repos Completed',
                targetDate: '2026-05-18',
                actualDate: '2026-05-18',
                ownerRole: 'DevOps Lead',
                status: 'Completed',
                milestoneDetail: 'Rolled out sidecars to 7 of 14 primary repositories.'
            },
            {
                stepIndex: 5,
                stepTitle: 'Initial Savings Appearing',
                targetDate: '2026-06-04',
                actualDate: '2026-06-04',
                ownerRole: 'FinOps Analyst',
                status: 'Completed',
                milestoneDetail: 'Observed $26,625/month initial OpEx reduction on AWS Anthropic gateway.',
                financialMetricUSD: 26625
            },
            {
                stepIndex: 6,
                stepTitle: '30-Day Verification Complete',
                targetDate: '2026-07-01',
                actualDate: '2026-07-01',
                ownerRole: 'CFO & Platform Lead',
                status: 'Completed',
                milestoneDetail: 'Verified $319,500/yr actual savings (91% forecast calibration accuracy).',
                financialMetricUSD: 319500
            },
            {
                stepIndex: 7,
                stepTitle: 'Board Reporting & Memory Logged',
                targetDate: '2026-08-13',
                ownerRole: 'CEO',
                status: 'Pending',
                milestoneDetail: 'Log decision package hash to Exogram and report +0.42% EBITDA gain to Board.'
            }
        ]
    };
}
