export interface TechnologyBalanceSheet {
    assets: {
        productiveAISystemsUSD: number;
        productiveCapabilitiesUSD: number;
        verifiedDecisionsValueUSD: number;
        organizationalKnowledgeAssetUSD: number;
        totalAssetsUSD: number;
    };
    liabilities: {
        productDebtIndexUSD: number;
        aiVolatilityTaxUSD: number;
        verificationTaxOverheadUSD: number;
        governanceRiskExposureUSD: number;
        totalLiabilitiesUSD: number;
    };
    netTechnologyEquityUSD: number;
    incomeStatement: {
        valueCreatedUSD: number;
        wasteEliminatedUSD: number;
        revenueEnabledUSD: number;
    };
}

/**
 * Technology Intelligence Balance Sheet Engine
 * Formulates a standardized financial balance sheet and income statement for enterprise technology decisions.
 */
export function calculateTechnologyBalanceSheet(
    annualAISpendUSD: number,
    annualAvoidedCostUSD: number,
    productDebtScore: number
): TechnologyBalanceSheet {
    const productiveAISystemsUSD = Math.round(annualAISpendUSD * 1.8);
    const productiveCapabilitiesUSD = Math.round(annualAISpendUSD * 2.2);
    const verifiedDecisionsValueUSD = Math.round(annualAvoidedCostUSD * 3.0);
    const organizationalKnowledgeAssetUSD = 500000;

    const totalAssetsUSD = productiveAISystemsUSD + productiveCapabilitiesUSD + verifiedDecisionsValueUSD + organizationalKnowledgeAssetUSD;

    const productDebtIndexUSD = Math.round(annualAISpendUSD * (1 - productDebtScore / 100) * 1.5);
    const aiVolatilityTaxUSD = Math.round(annualAISpendUSD * 0.28);
    const verificationTaxOverheadUSD = Math.round(annualAISpendUSD * 0.18);
    const governanceRiskExposureUSD = 250000;

    const totalLiabilitiesUSD = productDebtIndexUSD + aiVolatilityTaxUSD + verificationTaxOverheadUSD + governanceRiskExposureUSD;
    const netTechnologyEquityUSD = totalAssetsUSD - totalLiabilitiesUSD;

    return {
        assets: {
            productiveAISystemsUSD,
            productiveCapabilitiesUSD,
            verifiedDecisionsValueUSD,
            organizationalKnowledgeAssetUSD,
            totalAssetsUSD
        },
        liabilities: {
            productDebtIndexUSD,
            aiVolatilityTaxUSD,
            verificationTaxOverheadUSD,
            governanceRiskExposureUSD,
            totalLiabilitiesUSD
        },
        netTechnologyEquityUSD,
        incomeStatement: {
            valueCreatedUSD: Math.round(annualAvoidedCostUSD * 1.4),
            wasteEliminatedUSD: annualAvoidedCostUSD,
            revenueEnabledUSD: Math.round(annualAISpendUSD * 2.5)
        }
    };
}
