export interface HistoricalAnnotation {
    timestamp: string;
    eventTitle: string;
    category: 'Deployment' | 'PolicyChange' | 'VendorShift' | 'TeamExpansion';
    impactSummary: string;
    spendDeltaPct: number;
    velocityDeltaPct: number;
}

export interface OrganizationalTrajectory {
    orgId: string;
    snapshotPeriods: string[];
    monthlySpendTrajectoryUSD: number[];
    productDebtScoreTrajectory: number[];
    governanceScoreTrajectory: number[];
    annotations: HistoricalAnnotation[];
    trajectoryExplanation: string;
}

/**
 * Engine 11: Organizational Memory Engine
 * Tracks state transitions, historical annotations, and trajectory explanations over time.
 */
export function generateOrganizationalTrajectory(orgId: string): OrganizationalTrajectory {
    return {
        orgId,
        snapshotPeriods: ['Jan 2026', 'Feb 2026', 'Mar 2026', 'Apr 2026', 'May 2026', 'Jun 2026'],
        monthlySpendTrajectoryUSD: [118000, 132000, 149000, 173000, 201000, 243000],
        productDebtScoreTrajectory: [82, 79, 74, 68, 62, 58],
        governanceScoreTrajectory: [90, 88, 85, 78, 74, 71],
        annotations: [
            {
                timestamp: '2026-04-15',
                eventTitle: 'Cursor Enterprise & Autonomous Coding Agents Deployed',
                category: 'Deployment',
                impactSummary: 'Copilot adoption grew 40%; AI spend increased 38% due to un-cached context dumps.',
                spendDeltaPct: 38,
                velocityDeltaPct: -8
            },
            {
                timestamp: '2026-05-10',
                eventTitle: 'Prompt Caching Disabled during Architecture Refactor',
                category: 'PolicyChange',
                impactSummary: 'Context rot doubled; token retries increased 22%.',
                spendDeltaPct: 16,
                velocityDeltaPct: -4
            }
        ],
        trajectoryExplanation: 'Spend increased 105% over 6 months primarily driven by April Cursor expansion and May prompt cache de-activation, while product debt increased 24 points.'
    };
}
