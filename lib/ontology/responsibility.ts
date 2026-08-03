export interface ExecutiveResponsibility {
    id: string;
    responsibilityTitle: string;
    executiveOwnerRole: 'CEO' | 'CFO' | 'CIO' | 'CTO' | 'CISO' | 'CPO';
    cadence: 'Weekly' | 'Monthly' | 'Quarterly' | 'Annual';
    successCriteria: string;
    status: 'OnTrack' | 'RequiresAttention' | 'AtRisk';
    associatedWorkflows: string[];
    primaryUncertaintyUSD: number;
}

export interface OrganizationalCondition {
    organizationId: string;
    reality: string; // Live telemetry signal
    intent: string; // Corporate EBITDA / Growth objective
    commitments: string; // Active rollouts & promises
    momentum: 'Ahead' | 'OnSchedule' | 'BehindSchedule';
    confidencePct: number;
    capacityStatus: 'Available' | 'Optimal' | 'Overloaded';
}
