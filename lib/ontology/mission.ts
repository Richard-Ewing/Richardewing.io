export interface ExecutiveMission {
    id: string;
    missionTitle: string;
    executiveSponsorRole: 'CEO' | 'CFO' | 'CTO' | 'CISO' | 'Board';
    targetOutcomeGoal: string;
    activeCampaignCount: number;
    overallProgressPct: number;
    remainingTargetSavingsUSD: number;
    status: 'Active' | 'OnTrack' | 'Blocked' | 'Completed';
}

export interface CampaignProgress {
    campaignId: string;
    missionId: string;
    campaignTitle: string;
    progressPct: number;
    blockedByFactor: string;
    nextMilestoneTitle: string;
    forecastCompletionDate: string;
    annualSavingsRealizedUSD: number;
}
