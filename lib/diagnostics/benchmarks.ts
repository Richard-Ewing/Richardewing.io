// Centralized Benchmark Intelligence Layer
// This file provides the deterministic category averages and baselines to drive comparative intelligence.

export type DiagnosticTool = 'pdi' | 'aper' | 'aueb';

export interface BenchmarkRecord {
    industryAverage: number;
    topQuartile: number;
    bottomQuartile: number;
    unit: 'score' | 'currency' | 'percentage';
    description: string;
}

const pdiBenchmarks: Record<string, BenchmarkRecord> = {
    'SaaS': { industryAverage: 57, topQuartile: 32, bottomQuartile: 78, unit: 'score', description: 'B2B SaaS average maintenance burden.' },
    'FinTech': { industryAverage: 65, topQuartile: 45, bottomQuartile: 82, unit: 'score', description: 'Financial services compliance overhead.' },
    'HealthTech': { industryAverage: 62, topQuartile: 40, bottomQuartile: 80, unit: 'score', description: 'Healthcare regulatory coordination.' },
    'Default': { industryAverage: 58, topQuartile: 35, bottomQuartile: 75, unit: 'score', description: 'Global enterprise software baseline.' }
};

const aperBenchmarks: Record<string, BenchmarkRecord> = {
    'SaaS': { industryAverage: 450000, topQuartile: 750000, bottomQuartile: 250000, unit: 'currency', description: 'SaaS revenue per engineer.' },
    'FinTech': { industryAverage: 520000, topQuartile: 900000, bottomQuartile: 300000, unit: 'currency', description: 'FinTech revenue per engineer.' },
    'Default': { industryAverage: 480000, topQuartile: 800000, bottomQuartile: 280000, unit: 'currency', description: 'Standard tech enterprise revenue per engineer.' }
};

const auebBenchmarks: Record<string, BenchmarkRecord> = {
    'SaaS': { industryAverage: 65, topQuartile: 82, bottomQuartile: 45, unit: 'percentage', description: 'SaaS Gross Margin on AI capabilities.' },
    'Default': { industryAverage: 60, topQuartile: 78, bottomQuartile: 40, unit: 'percentage', description: 'Standard AI Gross Margin baseline.' }
};

/**
 * Returns the benchmark metrics for a specific tool and industry.
 */
export function getBenchmark(tool: DiagnosticTool, industry: string = 'Default'): BenchmarkRecord {
    const defaultIndustry = 'Default';
    
    switch (tool) {
        case 'pdi':
            return pdiBenchmarks[industry] || pdiBenchmarks[defaultIndustry];
        case 'aper':
            return aperBenchmarks[industry] || aperBenchmarks[defaultIndustry];
        case 'aueb':
            return auebBenchmarks[industry] || auebBenchmarks[defaultIndustry];
        default:
            throw new Error(`Unknown diagnostic tool: ${tool}`);
    }
}
