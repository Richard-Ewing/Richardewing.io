export interface ValueAttributionReport {
    decisionTitle: string;
    operationalChange: string;
    capabilityImpact: string;
    grossMarginImpactPct: number;
    ebitdaImpactPct: number;
    estimatedEnterpriseValueImpactUSD: number;
    explanation: string;
}

/**
 * Enterprise Value Attribution Engine
 * Traces operational changes through gross margin and EBITDA directly to Enterprise Valuation expansion.
 */
export function calculateEnterpriseValueAttribution(
    decisionTitle: string,
    annualSavingsUSD: number,
    currentAnnualRevenueUSD: number,
    ebitdaMultiple: number = 10
): ValueAttributionReport {
    const ebitdaImpactUSD = annualSavingsUSD;
    const ebitdaImpactPct = currentAnnualRevenueUSD > 0 
        ? parseFloat(((ebitdaImpactUSD / currentAnnualRevenueUSD) * 100).toFixed(2)) 
        : 0;
    const estimatedEnterpriseValueImpactUSD = Math.round(ebitdaImpactUSD * ebitdaMultiple);

    return {
        decisionTitle,
        operationalChange: 'Deployed Intent Router + Token Saver MCP Sidecars across engineering repos.',
        capabilityImpact: 'Reduced context rot and model overprovisioning; improved AI engineering unit economics.',
        grossMarginImpactPct: parseFloat((ebitdaImpactPct * 1.2).toFixed(2)),
        ebitdaImpactPct,
        estimatedEnterpriseValueImpactUSD,
        explanation: `Saving $${annualSavingsUSD.toLocaleString()}/yr directly expands EBITDA by +${ebitdaImpactPct}%, yielding an estimated +$${estimatedEnterpriseValueImpactUSD.toLocaleString()} increase in Enterprise Value (${ebitdaMultiple}x EBITDA multiple).`
    };
}
