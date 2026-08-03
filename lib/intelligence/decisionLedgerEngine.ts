import { exogramClient, ExogramLedgerRecord } from '../exogram/client';

export interface DecisionLedgerEntry {
    decisionId: string;
    decisionTitle: string;
    executiveOwner: string;
    corporateGoal: string;
    evidenceTelemetrySources: string[];
    predictedFinancialSavingsUSD: number;
    actualObservedSavingsUSD: number;
    decisionAccuracyPct: number;
    exogramRecordHash: string;
    timestamp: string;
    status: 'Logged' | 'Executing' | 'Verified' | 'Calibrated';
}

/**
 * Decision Ledger Engine
 * Cryptographically logs and verifies enterprise technology decisions onto the business Decision Ledger using the Exogram.ai API.
 */
export async function logDecisionToLedger(
    decisionTitle: string,
    executiveOwner: string,
    corporateGoal: string,
    predictedFinancialSavingsUSD: number,
    evidenceTelemetrySources: string[]
): Promise<DecisionLedgerEntry> {
    const payload = {
        decisionTitle,
        executiveOwner,
        corporateGoal,
        predictedFinancialSavingsUSD,
        evidenceTelemetrySources
    };

    const exogramRecord: ExogramLedgerRecord = await exogramClient.recordInvestmentLedger(
        `inv_${Date.now()}`,
        'DecisionLogged',
        payload
    );

    return {
        decisionId: exogramRecord.recordId,
        decisionTitle,
        executiveOwner,
        corporateGoal,
        evidenceTelemetrySources,
        predictedFinancialSavingsUSD,
        actualObservedSavingsUSD: 0,
        decisionAccuracyPct: 100,
        exogramRecordHash: exogramRecord.hash,
        timestamp: exogramRecord.timestamp,
        status: 'Logged'
    };
}
