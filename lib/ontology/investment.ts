export type InvestmentDomain = 
    | 'AI' 
    | 'Engineering' 
    | 'Cloud' 
    | 'Security' 
    | 'Product' 
    | 'Infrastructure' 
    | 'Vendors' 
    | 'People' 
    | 'Automation' 
    | 'Data';

export type InvestmentStatus = 'Active' | 'UnderReview' | 'Optimized' | 'Sunsetted' | 'Proposed';

/**
 * Universal Atomic Primitive: Investment
 * Everything an enterprise spends money or labor on is an Investment.
 */
export interface EnterpriseInvestment {
    id: string;
    title: string;
    domain: InvestmentDomain;
    owner: string;
    department: 'Finance' | 'Engineering' | 'Product' | 'Security' | 'Executive';
    
    // Capital & Financials
    capitalInvestedUSD: number;
    monthlyOperatingCostUSD: number;
    expectedAnnualReturnUSD: number;
    actualAnnualReturnUSD: number;
    returnVarianceUSD: number;
    roiPercentage: number;
    
    // Risk & Liabilities
    riskExposureUSD: number;
    productDebtImpactScore: number; // 0-100 (100 = debt-free)
    status: InvestmentStatus;
    
    // Systems & Assets Connected
    systemComponentIds: string[];
    observedPeriodStart: string;
    observedPeriodEnd: string;
}

export interface EnterprisePortfolio {
    portfolioId: string;
    totalCapitalInvestedUSD: number;
    totalExpectedReturnUSD: number;
    totalActualReturnUSD: number;
    capitalAtRiskUSD: number;
    activeInvestmentCount: number;
    topWinners: EnterpriseInvestment[];
    topValueDestroyers: EnterpriseInvestment[];
    recommendedReallocationsUSD: number;
}

/**
 * Calculates investment return variance and ROI percentage.
 */
export function calculateInvestmentReturn(investment: EnterpriseInvestment): EnterpriseInvestment {
    const returnVarianceUSD = investment.actualAnnualReturnUSD - investment.expectedAnnualReturnUSD;
    const roiPercentage = investment.capitalInvestedUSD > 0
        ? Math.round(((investment.actualAnnualReturnUSD - investment.capitalInvestedUSD) / investment.capitalInvestedUSD) * 100)
        : 0;

    return {
        ...investment,
        returnVarianceUSD,
        roiPercentage
    };
}
