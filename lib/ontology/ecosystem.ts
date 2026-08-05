export interface ExecutiveDecisionPackage {
    packageId: string;
    executiveQuestion: string;
    targetRole: 'CEO' | 'CFO' | 'CTO' | 'CISO' | 'Board';
    currentRealitySummary: string;
    desiredStateGoal: string;
    supportingEvidenceSources: string[];
    rootCausesIdentified: string[];
    keyAssumptions: string[];
    scenarioSimulations: string[];
    recommendedActions: string[];
    tradeoffsAcknowledged: string[];
    risksMitigated: string[];
    executionTimelineDays: number;
    expectedFinancialOutcomeUSD: number;
    verificationScheduleDays: number;
    overallConfidencePct: number;
}

export interface ExecutiveWorkflowContract {
    workflowId: string;
    title: string;
    productApplication: 'AICapitalOS' | 'ExecutiveWorkbench' | 'EnterpriseMemory' | 'StrategyStudio' | 'BenchmarkCloud' | 'OrganizationalAlignment';
    ownerRole: string;
    cadence: 'Daily' | 'Weekly' | 'Monthly' | 'Quarterly' | 'Annual' | 'EventDriven';
    decisionPackage: ExecutiveDecisionPackage;
}
