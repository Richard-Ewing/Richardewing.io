export interface StakeholderPosition {
    stakeholderRole: 'CFO' | 'CTO' | 'CISO' | 'Procurement' | 'Legal' | 'Board';
    primaryObjectionOrGoal: string;
    evidenceSource: string;
    confidencePct: number;
    acceptableCompromiseBoundary: string;
}

export interface CompromiseOption {
    optionLabel: string;
    tradeoffSummary: string;
    acceptedByRoles: string[];
    rejectedByRoles: string[];
    expectedFinancialImpactUSD: number;
}

export interface StrategicRehearsalPackage {
    engagementTitle: string;
    rehearsalType: 'BoardMeeting' | 'VendorNegotiation' | 'QBR' | 'BudgetDefense';
    simulatedQuestionsAndObjections: Array<{
        question: string;
        askingRole: string;
        recommendedResponse: string;
        supportingEvidence: string;
    }>;
    batnaSummary?: string;
    recommendedConcessions?: string[];
    synthesizedCompromiseOptions: CompromiseOption[];
}
