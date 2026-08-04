import { EnterpriseInitiative } from '../ontology/initiative';

/**
 * Enterprise Initiative Engine
 * Manages top-level enterprise initiatives (AI Transformation, Cloud Cost Optimization, IPO Readiness).
 */
export function getEnterpriseInitiatives(): EnterpriseInitiative[] {
    return [
        {
            id: 'init_01',
            title: 'AI Transformation & Efficiency',
            executiveSponsor: 'CEO & CFO',
            overallProgressPct: 72,
            activeMissionCount: 3,
            realizedValueUSD: 319500,
            status: 'OnTrack'
        },
        {
            id: 'init_02',
            title: 'Cloud Cost Optimization',
            executiveSponsor: 'VP Engineering',
            overallProgressPct: 54,
            activeMissionCount: 2,
            realizedValueUSD: 180000,
            status: 'OnTrack'
        },
        {
            id: 'init_03',
            title: 'S-1 / IPO Readiness Audit',
            executiveSponsor: 'CFO & General Counsel',
            overallProgressPct: 81,
            activeMissionCount: 1,
            realizedValueUSD: 0,
            status: 'Preparing'
        }
    ];
}
