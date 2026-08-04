export type DecisionTimelineStepStatus = 'Completed' | 'InProgress' | 'Pending';

export interface DecisionTimelineStep {
    stepIndex: number;
    stepTitle: string;
    targetDate: string;
    actualDate?: string;
    ownerRole: string;
    status: DecisionTimelineStepStatus;
    milestoneDetail: string;
    financialMetricUSD?: number;
}

export interface DecisionTimeline {
    decisionId: string;
    decisionTitle: string;
    currentStepIndex: number;
    totalSteps: number;
    steps: DecisionTimelineStep[];
    overallExecutionHealth: 'OnSchedule' | 'Delayed' | 'VerifiedSuccess';
}
