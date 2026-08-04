export interface EnterpriseInitiative {
    id: string;
    title: string;
    executiveSponsor: string;
    overallProgressPct: number;
    activeMissionCount: number;
    realizedValueUSD: number;
    status: 'OnTrack' | 'AtRisk' | 'Preparing';
}
