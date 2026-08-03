export interface SimulationRange {
    expectedValueUSD: number;
    minRangeUSD: number;
    maxRangeUSD: number;
    confidencePct: number;
    primaryAssumption: string;
    primaryUncertainty: string;
}

export interface DigitalTwinScenarioResult {
    scenarioId: string;
    scenarioName: string;
    financialOutcome: SimulationRange;
    velocityOutcomeDeltaPct: number;
    riskOutcomeDeltaPct: number;
    systemDependenciesImpacted: string[];
    recommendedRealityAction: string;
}

/**
 * Digital Twin Simulation Engine
 * Runs enterprise-wide digital twin scenario simulations (e.g. Copilot removal, AWS price spikes, Agent failures).
 */
export function runDigitalTwinSimulation(scenarioType: 'RemoveCopilot' | 'AWSPriceSpike40' | 'ClaudePriceDouble' | 'AgentFailure'): DigitalTwinScenarioResult {
    if (scenarioType === 'RemoveCopilot') {
        return {
            scenarioId: 'sim_remove_copilot',
            scenarioName: 'Digital Twin Simulation: Deleting Copilot Enterprise Licenses',
            financialOutcome: {
                expectedValueUSD: 142000,
                minRangeUSD: 110000,
                maxRangeUSD: 185000,
                confidencePct: 88,
                primaryAssumption: 'Developer verification tax drops 3.5 hrs/week without code review backlog expansion.',
                primaryUncertainty: 'Sprint story point throughput variance across junior engineers.'
            },
            velocityOutcomeDeltaPct: -12,
            riskOutcomeDeltaPct: -45,
            systemDependenciesImpacted: ['Repository A', 'Repository B', 'CI/CD Review Pipeline'],
            recommendedRealityAction: 'Retain Copilot for Senior Engineers only; deploy static analysis pre-commit firewalls.'
        };
    }

    if (scenarioType === 'AWSPriceSpike40') {
        return {
            scenarioId: 'sim_aws_spike',
            scenarioName: 'Digital Twin Simulation: +40% AWS Compute Infrastructure Price Spike',
            financialOutcome: {
                expectedValueUSD: -284000,
                minRangeUSD: -320000,
                maxRangeUSD: -240000,
                confidencePct: 92,
                primaryAssumption: 'Current EC2 and GPU cluster instance hours remain un-changed.',
                primaryUncertainty: 'Spot instance availability in us-east-1.'
            },
            velocityOutcomeDeltaPct: 0,
            riskOutcomeDeltaPct: +28,
            systemDependenciesImpacted: ['Inference Edge Cluster', 'Vector Database Index', 'ETL Pipeline'],
            recommendedRealityAction: 'Pre-emptively migrate non-deterministic workloads to reserved instances or local edge hardware.'
        };
    }

    return {
        scenarioId: 'sim_claude_price_double',
        scenarioName: 'Digital Twin Simulation: 2x Anthropic API Price Increase',
        financialOutcome: {
            expectedValueUSD: -310000,
            minRangeUSD: -380000,
            maxRangeUSD: -250000,
            confidencePct: 85,
            primaryAssumption: 'Prompt token volume remains at 420M tokens/month.',
            primaryUncertainty: 'Speed of prompt caching adoption across product teams.'
        },
        velocityOutcomeDeltaPct: 0,
        riskOutcomeDeltaPct: +35,
        systemDependenciesImpacted: ['Customer Assistant Agent', 'RAG Retrieval Pipeline', 'Internal Knowledge Base'],
        recommendedRealityAction: 'Immediately activate Intent Router to fallback 65% of queries to 8B SLMs.'
    };
}
