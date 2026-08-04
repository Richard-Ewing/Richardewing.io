export interface LivingCampaign {
    campaignId: string;
    title: string;
    progressPct: number;
    owner: string;
    status: 'Ahead' | 'OnSchedule' | 'Blocked' | 'AtRisk';
    blockedReason?: string;
    remainingSavingsUSD: number;
    nextMilestoneTitle: string;
    forecastCompletionDate: string;
}

export interface CustomerMissionRecord {
    customerId: string;
    customerName: string;
    industry: string;
    activeMissions: Array<{
        missionTitle: string;
        progressPct: number;
        remainingSavingsUSD: number;
        status: string;
    }>;
    livingCampaigns: LivingCampaign[];
    estimatedExecutiveReadingTimeMinutes: number;
}

export interface OrganizationalReasoningQueryResult {
    queryQuestion: string;
    originalDecisionDate: string;
    reasonSummary: string;
    alternativesConsidered: string[];
    expectedSavingsUSD: number;
    actualVerifiedSavingsUSD: number;
    confidencePct: number;
    stillValidToday: boolean;
    todayRecommendation: string;
}
