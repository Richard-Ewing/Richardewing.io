export interface SLMMigrationSimulation {
    currentMonthlySpendUSD: number;
    projectedMonthlySpendUSD: number;
    monthlySavingsUSD: number;
    annualSavingsUSD: number;
    latencyReductionPct: number;
    remediationSteps: string[];
}

export interface TokenSaverSimulation {
    documentVolumeMonthly: number;
    unoptimizedTokensMonthly: number;
    optimizedTokensMonthly: number;
    tokensSavedMonthly: number;
    monthlyCostAvoidanceUSD: number;
    annualCostAvoidanceUSD: number;
    contextRotReductionPct: number;
}

/**
 * Simulates financial savings and latency impact of migrating deterministic workloads from Frontier APIs (GPT-5/Claude 3.5 Opus) to localized 8B SLMs.
 */
export function simulateSLMMigration(currentMonthlySpendUSD: number, slmRatioPct: number = 65): SLMMigrationSimulation {
    const arbitrableSpend = currentMonthlySpendUSD * (slmRatioPct / 100);
    // SLMs typically cost ~10% of frontier model API rates
    const slmSpend = arbitrableSpend * 0.10;
    const remainingFrontierSpend = currentMonthlySpendUSD * (1 - (slmRatioPct / 100));
    
    const projectedMonthlySpendUSD = Math.round(remainingFrontierSpend + slmSpend);
    const monthlySavingsUSD = Math.round(currentMonthlySpendUSD - projectedMonthlySpendUSD);
    const annualSavingsUSD = monthlySavingsUSD * 12;

    return {
        currentMonthlySpendUSD,
        projectedMonthlySpendUSD,
        monthlySavingsUSD,
        annualSavingsUSD,
        latencyReductionPct: 45, // SLMs running locally or on dedicated edge compute reduce roundtrip latency
        remediationSteps: [
            'Audit prompt logs for deterministic classification and formatting tasks',
            'Deploy local vLLM or Ollama instance for 8B model inference',
            'Configure dynamic intent router to direct complex reasoning to frontier APIs'
        ]
    };
}

/**
 * Simulates cost reduction and context rot elimination from deploying the open-source Token Saver MCP sidecar across developer environments.
 */
export function simulateTokenSaverDeployment(activeDeveloperCount: number, avgPdfsPerDevMonthly: number = 40): TokenSaverSimulation {
    const documentVolumeMonthly = activeDeveloperCount * avgPdfsPerDevMonthly;
    // Average 150-page PDF = ~75,000 tokens when dumped raw into context
    const unoptimizedTokensMonthly = documentVolumeMonthly * 75000;
    // Local hybrid RAG retrieves top-k passages = ~4,500 tokens
    const optimizedTokensMonthly = documentVolumeMonthly * 4500;
    
    const tokensSavedMonthly = unoptimizedTokensMonthly - optimizedTokensMonthly;
    // Assuming average frontier token cost of $3.00 / 1M input tokens
    const monthlyCostAvoidanceUSD = Math.round((tokensSavedMonthly / 1000000) * 3.00);
    const annualCostAvoidanceUSD = monthlyCostAvoidanceUSD * 12;

    return {
        documentVolumeMonthly,
        unoptimizedTokensMonthly,
        optimizedTokensMonthly,
        tokensSavedMonthly,
        monthlyCostAvoidanceUSD,
        annualCostAvoidanceUSD,
        contextRotReductionPct: 88
    };
}
