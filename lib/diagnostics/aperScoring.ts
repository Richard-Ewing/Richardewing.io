export interface BenchmarkData {
    name: string;
    value: number;
    color: string;
}

export interface TeamBreakdown {
    frontend: number;
    backend: number;
    infra: number;
    data: number;
}

export interface AperScoreMetrics {
    aper: number;
    engineeringMargin: number;
    multiplier: number;
    benchmarks: BenchmarkData[];
    totalEngCost: number;
    engineers: number;
    costPerEng: number;
    coordinationTax: number;
    optimalHeadcount: number;
    overheadCost: number;
    teamBreakdown: TeamBreakdown;
    productivityIndex: number;
    newHireRampCost: number;
    teamHealthScore: number;
    revenueGap: number;
    leverageRatio: number;
    valuationGap: number;
    valuationMultiple: number;
}

export interface AperCalculationParams {
    arr: number;
    engineers: number;
    costPerEng: number;
    avgTenure: number;
    hiringVelocity: number;
    remotePercent: number;
    teamBreakdown: TeamBreakdown;
}

export function calculateAperScore(params: AperCalculationParams): AperScoreMetrics {
    const { arr, engineers, costPerEng, avgTenure, hiringVelocity, teamBreakdown } = params;

    const engNum = Math.max(engineers, 1);
    
    const aper = arr / engNum;
    const totalEngCost = engNum * costPerEng;
    const engineeringMargin = ((arr - totalEngCost) / arr) * 100;
    const multiplier = totalEngCost > 0 ? arr / totalEngCost : 0;

    // Coordination tax: increases with team size and decreases with tenure
    const baseCoordinationTax = 15; // 15% baseline
    const sizeMultiplier = Math.log2(engNum) / 4; // Logarithmic scaling
    const tenureDiscount = Math.min(avgTenure / 36, 0.5); // Max 50% discount for 3+ year tenure
    const coordinationTax = baseCoordinationTax * (1 + sizeMultiplier) * (1 - tenureDiscount);

    // Overhead cost calculation
    const overheadCost = totalEngCost * (coordinationTax / 100);

    // Optimal headcount based on ARR benchmarks
    const optimalAper = 500000; // Target $500K/engineer
    const optimalHeadcount = Math.floor(arr / optimalAper);

    // Enhanced metrics
    // Productivity Index: weighted score based on APER, tenure, and team composition
    const aperScore = Math.min(aper / 600000 * 40, 40); // Max 40 points
    const tenureScore = Math.min(avgTenure / 24 * 30, 30); // Max 30 points for 2+ years
    const stabilityScore = Math.max(0, 30 - (hiringVelocity / engNum * 100)); // Lower hiring velocity = higher score
    const productivityIndex = Math.round(aperScore + tenureScore + stabilityScore);

    // New hire ramp cost: 3 months to productivity + opportunity cost
    const rampMonths = 3;
    const newHireRampCost = (costPerEng / 12 * rampMonths) + (aper / 12 * rampMonths * 0.5); // Salary + 50% lost productivity

    // Team health score
    const balanceScore = 100 - Math.abs(50 - (teamBreakdown.frontend + teamBreakdown.backend)) * 2; // Penalty for imbalance
    const infrastructureBonus = teamBreakdown.infra >= 15 ? 10 : 0; // Bonus for proper infra investment
    const teamHealthScore = Math.round((productivityIndex * 0.6) + (balanceScore * 0.3) + (infrastructureBonus * 0.1));

    // Revenue gap to reach elite status
    const targetAper = 500000;
    const revenueGap = Math.max(0, (targetAper * engNum) - arr);
    
    // Valuation impact (CapEx Hemorrhage)
    const valuationMultiple = 10;
    const valuationGap = revenueGap * valuationMultiple;

    // Leverage ratio
    const leverageRatio = totalEngCost > 0 ? arr / totalEngCost : 0;

    const benchmarks: BenchmarkData[] = [
        { name: 'Your Company', value: aper, color: aper >= 600000 ? '#22d3ee' : aper >= 400000 ? '#facc15' : aper >= 200000 ? '#f97316' : '#dc2626' },
        { name: 'Elite SaaS', value: 650000, color: '#22d3ee' },
        { name: 'Good SaaS', value: 450000, color: '#facc15' },
        { name: 'Danger Zone', value: 200000, color: '#dc2626' },
    ];

    return {
        aper, engineeringMargin, multiplier, benchmarks, totalEngCost,
        engineers: engNum, costPerEng, coordinationTax,
        optimalHeadcount, overheadCost, teamBreakdown,
        productivityIndex, newHireRampCost, teamHealthScore, revenueGap, leverageRatio, valuationGap, valuationMultiple
    };
}
