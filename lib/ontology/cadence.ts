export type OperatingCadenceRhythm = 'Daily' | 'Weekly' | 'Monthly' | 'Quarterly' | 'Annual' | 'EventDriven';

export interface OperatingCadenceEvent {
    id: string;
    rhythm: OperatingCadenceRhythm;
    scheduledTime: string;
    engagementTitle: string;
    requiredPreparationStatus: 'NeedsPreparation' | 'PackageReady' | 'InSession' | 'Completed';
    associatedDecisionIds: string[];
}

export interface ExecutionMilestone {
    id: string;
    decisionId: string;
    milestoneTitle: string;
    targetCompletionDate: string;
    assignedTeamRole: string;
    completionPct: number;
    milestoneStatus: 'OnSchedule' | 'Delayed' | 'Completed';
    delayCostPerDayUSD: number;
}
