import { CorporateTheory } from '../ontology/theory';

/**
 * Corporate Theory Calibration Engine
 * Manages corporate beliefs and updates confidence percentages based on 30-day verified telemetry evidence.
 */
export function calibrateCorporateTheory(
    theory: CorporateTheory,
    verifiedSavingsUSD: number,
    predictedSavingsUSD: number
): CorporateTheory {
    const variancePct = Math.abs(verifiedSavingsUSD - predictedSavingsUSD) / predictedSavingsUSD;
    let confidenceDelta = 0;

    if (variancePct < 0.10) {
        confidenceDelta = +8; // Strong validation
    } else if (variancePct < 0.25) {
        confidenceDelta = +3; // Moderate validation
    } else {
        confidenceDelta = -12; // Invalidation / Calibration required
    }

    const updatedConfidencePct = Math.min(99, Math.max(10, theory.initialConfidencePct + confidenceDelta));
    const status = updatedConfidencePct >= 75 ? 'Validated' : updatedConfidencePct <= 40 ? 'Invalidated' : 'Testing';

    return {
        ...theory,
        updatedConfidencePct,
        evidenceCount: theory.evidenceCount + 1,
        status,
        lastCalibratedAt: new Date().toISOString()
    };
}
