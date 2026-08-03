export interface StrategicRoadmapHorizon {
    timeHorizon: 'Now (Immediate)' | '30 Days' | '90 Days' | '12 Months';
    actionTitle: string;
    ownerRole: string;
    expectedAnnualSavingsUSD: number;
    description: string;
    readinessStatus: 'ReadyToExecute' | 'PendingApproval' | 'RequiresPilot' | 'LongTermStrategic';
}

export interface EnterpriseStrategicRoadmap {
    organizationId: string;
    horizons: StrategicRoadmapHorizon[];
    totalAnnualSavingsTargetUSD: number;
    explanation: string;
}

/**
 * 4-Horizon Strategic Roadmap Engine
 * Generates timed execution roadmaps (Now, 30 Days, 90 Days, 12 Months) for executive decision implementation.
 */
export function generateStrategicRoadmap(annualSpendUSD: number): EnterpriseStrategicRoadmap {
    const horizonNow: StrategicRoadmapHorizon = {
        timeHorizon: 'Now (Immediate)',
        actionTitle: 'Deploy Token Saver MCP Sidecars',
        ownerRole: 'VP of Engineering',
        expectedAnnualSavingsUSD: Math.round(annualSpendUSD * 0.18),
        description: 'Deploy open-source hybrid RAG sidecars to eliminate PDF document token rot.',
        readinessStatus: 'ReadyToExecute'
    };

    const horizon30Days: StrategicRoadmapHorizon = {
        timeHorizon: '30 Days',
        actionTitle: 'Enforce Intent Router & Prompt Caching',
        ownerRole: 'CTO & Lead Architect',
        expectedAnnualSavingsUSD: Math.round(annualSpendUSD * 0.30),
        description: 'Route deterministic formatting tasks to local models and cache repeating system prompts.',
        readinessStatus: 'PendingApproval'
    };

    const horizon90Days: StrategicRoadmapHorizon = {
        timeHorizon: '90 Days',
        actionTitle: 'Migrate Workloads to Local 8B SLMs',
        ownerRole: 'VP Infrastructure',
        expectedAnnualSavingsUSD: Math.round(annualSpendUSD * 0.15),
        description: 'Deploy vLLM edge cluster for high-volume non-deterministic compute tasks.',
        readinessStatus: 'RequiresPilot'
    };

    const horizon12Months: StrategicRoadmapHorizon = {
        timeHorizon: '12 Months',
        actionTitle: 'Sunset Legacy Redundant Data Pipelines',
        ownerRole: 'CFO & VP Engineering',
        expectedAnnualSavingsUSD: Math.round(annualSpendUSD * 0.08),
        description: 'Retire duplicated third-party vector databases and un-used SaaS analytics seats.',
        readinessStatus: 'LongTermStrategic'
    };

    const totalAnnualSavingsTargetUSD = horizonNow.expectedAnnualSavingsUSD + horizon30Days.expectedAnnualSavingsUSD + horizon90Days.expectedAnnualSavingsUSD + horizon12Months.expectedAnnualSavingsUSD;

    return {
        organizationId: 'org_enterprise_01',
        horizons: [horizonNow, horizon30Days, horizon90Days, horizon12Months],
        totalAnnualSavingsTargetUSD,
        explanation: `Executing across all 4 time horizons captures $${totalAnnualSavingsTargetUSD.toLocaleString()}/yr in total OpEx recovery (-71% spend reduction).`
    };
}
