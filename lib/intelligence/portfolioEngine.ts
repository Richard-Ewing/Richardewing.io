import { EnterpriseInvestment, EnterprisePortfolio } from '../ontology/investment';

/**
 * Portfolio Intelligence Engine
 * Aggregates all enterprise technology investments into portfolio-level scorecards.
 */
export function evaluateEnterprisePortfolio(investments: EnterpriseInvestment[]): EnterprisePortfolio {
    const totalCapitalInvestedUSD = investments.reduce((acc, i) => acc + i.capitalInvestedUSD, 0);
    const totalExpectedReturnUSD = investments.reduce((acc, i) => acc + i.expectedAnnualReturnUSD, 0);
    const totalActualReturnUSD = investments.reduce((acc, i) => acc + i.actualAnnualReturnUSD, 0);
    const capitalAtRiskUSD = investments.filter(i => i.productDebtImpactScore < 50 || i.riskExposureUSD > 50000).reduce((acc, i) => acc + i.capitalInvestedUSD, 0);

    const sorted = [...investments].sort((a, b) => b.returnVarianceUSD - a.returnVarianceUSD);
    const topWinners = sorted.filter(i => i.returnVarianceUSD > 0).slice(0, 5);
    const topValueDestroyers = [...sorted].reverse().filter(i => i.returnVarianceUSD < 0).slice(0, 5);

    const recommendedReallocationsUSD = topValueDestroyers.reduce((acc, i) => acc + i.monthlyOperatingCostUSD * 12, 0);

    return {
        portfolioId: 'portfolio_enterprise_tech',
        totalCapitalInvestedUSD,
        totalExpectedReturnUSD,
        totalActualReturnUSD,
        capitalAtRiskUSD,
        activeInvestmentCount: investments.length,
        topWinners,
        topValueDestroyers,
        recommendedReallocationsUSD
    };
}
