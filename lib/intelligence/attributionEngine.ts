import { Asset, Outcome, AttributionConfidence } from '../ontology/asset';

export interface AttributionReport {
    assetId: string;
    assetName: string;
    totalInvestedUSD: number;
    economicValueCreatedUSD: number;
    netReturnUSD: number;
    roiPercentage: number;
    attributionConfidence: AttributionConfidence;
    keyOutcomes: Outcome[];
    attributionMethodology: string;
}

/**
 * Engine 8: Outcome Attribution Engine
 * Traces capital conversion from initial spend -> asset -> activity -> output -> verified outcome.
 */
export function calculateOutcomeAttribution(asset: Asset, outcomes: Outcome[]): AttributionReport {
    const assetOutcomes = outcomes.filter(o => o.assetId === asset.id);
    const annualSpendUSD = asset.monthlyCostUSD * 12;
    const annualVerificationCostUSD = Math.round(asset.verificationTaxHoursPerWeek * 52 * 85); // $85/hr blended rate
    const totalInvestedUSD = annualSpendUSD + annualVerificationCostUSD;

    const economicValueCreatedUSD = assetOutcomes.reduce((acc, o) => acc + o.economicValueUSD, 0);
    const netReturnUSD = economicValueCreatedUSD - totalInvestedUSD;
    const roiPercentage = totalInvestedUSD > 0 ? Math.round((netReturnUSD / totalInvestedUSD) * 100) : 0;

    // Determine highest level of confidence
    let attributionConfidence: AttributionConfidence = 'Unknown';
    if (assetOutcomes.some(o => o.attributionConfidence === 'Direct')) {
        attributionConfidence = 'Direct';
    } else if (assetOutcomes.some(o => o.attributionConfidence === 'Strongly Attributed')) {
        attributionConfidence = 'Strongly Attributed';
    } else if (assetOutcomes.some(o => o.attributionConfidence === 'Estimated')) {
        attributionConfidence = 'Estimated';
    } else if (assetOutcomes.length > 0) {
        attributionConfidence = 'Correlated';
    }

    return {
        assetId: asset.id,
        assetName: asset.name,
        totalInvestedUSD,
        economicValueCreatedUSD,
        netReturnUSD,
        roiPercentage,
        attributionConfidence,
        keyOutcomes: assetOutcomes,
        attributionMethodology: `Calculated from ${assetOutcomes.length} observed outcomes with ${attributionConfidence.toLowerCase()} attribution weighting.`
    };
}
