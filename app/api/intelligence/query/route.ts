import { NextResponse } from 'next/server';
import { diagnoseRootCause } from '@/lib/intelligence/rootCauseEngine';
import { simulateSLMMigration, simulateTokenSaverDeployment } from '@/lib/intelligence/simulationEngine';

export async function POST(req: Request) {
    try {
        const { query } = await req.json();
        const normalizedQuery = (query || '').toLowerCase();

        if (normalizedQuery.includes('spike') || normalizedQuery.includes('costs') || normalizedQuery.includes('increase')) {
            const rca = diagnoseRootCause({ assets: [], outcomes: [], totalMonthlyCostUSD: 45000, totalEconomicValueUSD: 120000, totalAnnualVolatilityTaxUSD: 148000, aiCapitalEfficiencyRatio: 2.1, lastRecalculatedAt: new Date().toISOString() }, 'SpendSpike');
            return NextResponse.json({
                query,
                answerType: 'RootCauseAnalysis',
                headline: rca.problemTitle,
                summary: rca.explainabilitySummary,
                causalChain: rca.causalChain,
                confidencePct: rca.confidencePct,
                recommendedAction: rca.recommendedIntervention
            });
        }

        if (normalizedQuery.includes('simulate') || normalizedQuery.includes('slm') || normalizedQuery.includes('local')) {
            const sim = simulateSLMMigration(45000, 65);
            return NextResponse.json({
                query,
                answerType: 'SimulationResult',
                headline: 'SLM Migration Scenario Simulation',
                summary: `Migrating 65% of deterministic LLM workloads to local 8B SLMs reduces monthly spend from $${sim.currentMonthlySpendUSD.toLocaleString()} to $${sim.projectedMonthlySpendUSD.toLocaleString()} (saves $${sim.annualSavingsUSD.toLocaleString()}/year).`,
                metrics: sim,
                recommendedAction: 'Deploy Ollama / vLLM local router endpoint.'
            });
        }

        if (normalizedQuery.includes('optimize') || normalizedQuery.includes('first') || normalizedQuery.includes('action')) {
            return NextResponse.json({
                query,
                answerType: 'ExecutivePrioritization',
                headline: 'Top 3 Recommended Interventions for Maximum Capital Return',
                summary: '1. Deploy Token Saver MCP to cut document context rot ($61K/yr savings).\n2. Enforce exact-match semantic caching boundary ($37K/yr savings).\n3. Route 80B formatting tasks to local 8B SLM ($84K/yr savings).',
                confidencePct: 88,
                recommendedAction: 'Execute Token Saver MCP deployment across engineering.'
            });
        }

        // Fallback default response
        return NextResponse.json({
            query,
            answerType: 'GeneralIntelligence',
            headline: 'Executive AI Capital Intelligence Summary',
            summary: 'Your current AI Capital Efficiency Ratio is 2.1x. Current monthly spend is $45,000 with an annual AI Volatility Tax of $148,000 across 14 active autonomous agents.',
            confidencePct: 82,
            recommendedAction: 'Run full AUEB and PDI diagnostic baseline.'
        });

    } catch (error: any) {
        return NextResponse.json({ error: error?.message || 'Error processing executive query' }, { status: 500 });
    }
}
