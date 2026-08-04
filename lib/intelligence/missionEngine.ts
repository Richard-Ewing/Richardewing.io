import { ExecutiveMission, CampaignProgress } from '../ontology/mission';

/**
 * Executive Mission Engine
 * Manages executive missions, campaign execution progress, and continuous decision evolution.
 */
export function getActiveExecutiveMissions(): ExecutiveMission[] {
    return [
        {
            id: 'msn_01',
            missionTitle: 'AI Cost Optimization & Margin Expansion Mission',
            executiveSponsorRole: 'CFO',
            targetOutcomeGoal: 'Eliminate $319,500/yr AI operating waste (+0.42% EBITDA expansion)',
            activeCampaignCount: 2,
            overallProgressPct: 61,
            remainingTargetSavingsUSD: 182000,
            status: 'Active'
        },
        {
            id: 'msn_02',
            missionTitle: 'S-1 / IPO Technology Audit Readiness Mission',
            executiveSponsorRole: 'CEO',
            targetOutcomeGoal: 'Achieve 100% compliance across runtime governance and shadow AI audit',
            activeCampaignCount: 1,
            overallProgressPct: 85,
            remainingTargetSavingsUSD: 0,
            status: 'OnTrack'
        }
    ];
}

export function getCampaignProgress(missionId: string = 'msn_01'): CampaignProgress {
    return {
        campaignId: 'cmp_01',
        missionId,
        campaignTitle: 'Intent Router & Local Token Saver Deployment',
        progressPct: 61,
        blockedByFactor: 'Procurement approval for vLLM edge node vendor agreement',
        nextMilestoneTitle: 'Deploy Token Saver MCP Sidecars to 14 Core Repositories',
        forecastCompletionDate: 'September 14, 2026',
        annualSavingsRealizedUSD: 137500
    };
}
