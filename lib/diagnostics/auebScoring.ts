export interface ModelData {
    model: string;
    cost: number;
    margin: number;
    costPerUser: number;
}

export interface GrowthData {
    month: string;
    revenue: number;
    cost: number;
}

export interface FeatureData {
    name: string;
    queriesPercent: number;
}

export interface ApiCost {
    name: string;
    costPerUser: number;
    enabled: boolean;
}

export interface AuebScoreMetrics {
    grossMargin: number;
    monthlyRevenue: number;
    monthlyCost: number;
    monthlyProfit: number;
    profitPerUser: number;
    costPerUser: number;
    insolvencyPoint: number;
    models: ModelData[];
    growthData: GrowthData[];
    price: number;
    queries: number;
    users: number;
    monthsToCollapse: number;
    featureBreakdown: { name: string; cost: number; margin: number }[];
    llmCost: number;
    apiCost: number;
    hostingCost: number;
    totalInfraCost: number;
    qpep_roadmap?: Array<{
        month: number;
        focus: string;
        action_items: string[];
    }>;
}

export interface AuebCalculationParams {
    price: number;
    queries: number;
    costPerQuery: number;
    users: number;
    growthRate: number;
    hostingCostPerUser: number;
    premiumCharge: number;
    monetizationStrategy: 'bundled' | 'premium';
    cachingEnabled: boolean;
    features: FeatureData[];
    thirdPartyApis: ApiCost[];
}

export function calculateAuebScore(params: AuebCalculationParams): AuebScoreMetrics {
    const { price, queries, costPerQuery, users, growthRate, hostingCostPerUser, premiumCharge, monetizationStrategy, cachingEnabled, features, thirdPartyApis } = params;

    const effectiveRevenuePerUser = monetizationStrategy === 'premium' ? price + premiumCharge : price;

    // Apply caching discount to LLM costs
    const effectiveLlmCost = cachingEnabled ? costPerQuery * 0.6 : costPerQuery;
    const llmCostPerUser = queries * effectiveLlmCost;

    // Calculate third-party API costs
    const apiCostPerUser = thirdPartyApis
        .filter(api => api.enabled)
        .reduce((sum, api) => sum + api.costPerUser, 0);

    // Total cost per user
    const totalCostPerUser = llmCostPerUser + apiCostPerUser + hostingCostPerUser;

    const grossMargin = effectiveRevenuePerUser > 0 ? ((effectiveRevenuePerUser - totalCostPerUser) / effectiveRevenuePerUser) * 100 : 0;
    const profitPerUser = effectiveRevenuePerUser - totalCostPerUser;

    const monthlyRevenue = effectiveRevenuePerUser * users;
    const llmCost = llmCostPerUser * users;
    const apiCost = apiCostPerUser * users;
    const hostingCost = hostingCostPerUser * users;
    const totalInfraCost = llmCost + apiCost + hostingCost;
    const monthlyProfit = monthlyRevenue - totalInfraCost;
    const insolvencyPoint = effectiveLlmCost > 0 ? Math.floor(price / effectiveLlmCost) : 0;

    // Calculate months to margin collapse (when cost > revenue)
    let monthsToCollapse = 0;
    if (grossMargin < 100) {
        for (let i = 1; i <= 36; i++) {
            const projectedUsers = users * Math.pow(1 + (growthRate / 100), i);
            const projectedCost = projectedUsers * totalCostPerUser;
            const projectedRevenue = projectedUsers * effectiveRevenuePerUser;
            if (projectedCost > projectedRevenue * 0.5) { // Cost > 50% of revenue
                monthsToCollapse = i;
                break;
            }
        }
    }

    const models: ModelData[] = [
        { model: 'GPT-4', cost: 0.03 },
        { model: 'GPT-4o', cost: 0.015 },
        { model: 'GPT-4o-mini', cost: 0.001 },
        { model: 'Claude Sonnet', cost: 0.015 },
        { model: 'Claude Haiku', cost: 0.0008 },
        { model: 'Llama 3 (70B)', cost: 0.0005 },
    ].map(m => ({
        ...m,
        margin: effectiveRevenuePerUser > 0 ? ((effectiveRevenuePerUser - (queries * m.cost) - apiCostPerUser - hostingCostPerUser) / effectiveRevenuePerUser) * 100 : 0,
        costPerUser: queries * m.cost
    })).sort((a, b) => b.margin - a.margin);

    const growthData: GrowthData[] = Array.from({ length: 12 }, (_, i) => {
        const month = i + 1;
        const monthUsers = users * Math.pow(1 + (growthRate / 100), i);
        return {
            month: `M${month}`,
            revenue: (monthUsers * effectiveRevenuePerUser) / 1000,
            cost: (monthUsers * totalCostPerUser) / 1000,
        };
    });

    // Feature breakdown
    const featureBreakdown = features.map(f => ({
        name: f.name,
        cost: (f.queriesPercent / 100) * llmCost,
        margin: 100 - ((f.queriesPercent / 100) * (100 - grossMargin))
    }));

    const qpep_roadmap = [];
    if (grossMargin < 50) {
        qpep_roadmap.push({ month: 1, focus: "Hemorrhage Control & Semantic Caching", action_items: ["Audit 'Chat' & 'Search' payload bloat", "Deploy Redis Semantic Caching", "Rate-limit high-frequency API endpoints"] });
        qpep_roadmap.push({ month: 2, focus: "SLM Orchestration & Evaluation", action_items: ["Evaluate open-weight SLMs (e.g. Llama 3) for routine queries", "Build intent-classifier routing layer", "Shadow-test SLM responses vs current OpenAI baselines"] });
        qpep_roadmap.push({ month: 3, focus: "Production Migration", action_items: ["Route 40% of low-complexity traffic to sovereign SLMs", "Decommission redundant vector search infrastructure", "Stabilize gross margin > 70%"] });
    } else if (!cachingEnabled) {
        qpep_roadmap.push({ month: 1, focus: "Immediate Margin Capture", action_items: ["Deploy vector caching layer (Redis or similar)", "Identify duplicate high-token queries", "Establish baseline token budgets per user"] });
        qpep_roadmap.push({ month: 2, focus: "Mid-Term Cost Deflection", action_items: ["Evaluate intent routing for simpler models", "Transition 'Summary' features to cheaper tiers", "Monitor API egress taxation"] });
        qpep_roadmap.push({ month: 3, focus: "Sustainable Modeling", action_items: ["Shift to provisioned throughput vs on-demand", "Lock in Enterprise commits for API services", "Target 85%+ margin"] });
    } else {
        qpep_roadmap.push({ month: 1, focus: "Growth Infrastructure", action_items: ["Monitor auto-scaling cloud costs against MAU growth", "Stress-test database read/write limits", "Establish automated FinOps alerts"] });
        qpep_roadmap.push({ month: 2, focus: "Model Arbitrage & Fine-tuning", action_items: ["Fine-tune custom Llama models on proprietary datasets", "Reduce reliance on general-purpose frontier models", "A/B test fine-tuned SLM vs GPT-4"] });
        qpep_roadmap.push({ month: 3, focus: "Market Dominance", action_items: ["Reinvest margin into R&D / feature expansion", "Explore multi-modal AI offerings", "Maintain strict unit economic discipline"] });
    }

    return {
        grossMargin, monthlyRevenue, monthlyCost: totalInfraCost, monthlyProfit, profitPerUser,
        costPerUser: totalCostPerUser, insolvencyPoint, models, growthData,
        price, queries, users,
        monthsToCollapse: monthsToCollapse || 36,
        featureBreakdown,
        llmCost, apiCost, hostingCost, totalInfraCost,
        qpep_roadmap
    };
}
