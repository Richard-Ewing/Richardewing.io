import { AperScoreMetrics } from './aperScoring';
import { Persona, formatMoney } from './interpretations'; // Reuse Persona and formatMoney

export const getAperPersonaInsight = (persona: Persona, results: AperScoreMetrics): { headline: string; detail: string; action: string } => {
    const aper = results.aper;
    const headcountDelta = results.engineers - results.optimalHeadcount;
    const coordinationCost = results.overheadCost;

    switch (persona) {
        case 'Founder':
            if (aper < 300000) return {
                headline: `⚠️ You need ${headcountDelta} fewer engineers.`,
                detail: `At ${formatMoney(aper)}/engineer, you need ${Math.round(headcountDelta * 100 / results.engineers)}% ARR growth before your next hire makes financial sense. Your next raise will be dilutive.`,
                action: 'Book a workforce optimization session before your next board meeting.'
            };
            if (aper < 500000) return {
                headline: `Your next hire costs more than you think.`,
                detail: `Each new engineer at your current APER requires ${formatMoney(500000)} in incremental ARR to break even. Do you have that growth?`,
                action: 'Model the true cost of headcount before expanding.'
            };
            return {
                headline: 'You have hiring runway.',
                detail: `At ${formatMoney(aper)}/engineer, you can add ${results.optimalHeadcount - results.engineers} more engineers while maintaining elite efficiency.`,
                action: 'Scale confidently. Focus on quality over speed.'
            };

        case 'CPO':
            const coordinationTime = results.coordinationTax * 40 / 100; // Hours per week per engineer
            return {
                headline: `Each engineer loses ${coordinationTime.toFixed(1)} hrs/week to coordination.`,
                detail: `That's ${Math.round(coordinationTime * results.engineers * 52)} hours/year of IC time consumed by meetings and context switching. Your velocity is ~${Math.round(100 - results.coordinationTax)}% of theoretical max.`,
                action: 'Map your meeting load and kill the non-essential ones.'
            };

        case 'VP Eng':
            if (headcountDelta > 3) return {
                headline: `You're ${headcountDelta} engineers over optimal capacity.`,
                detail: `Brooks's Law is real: more engineers ≠ more output. Each marginal hire is adding ${formatMoney(coordinationCost / results.engineers)}/year in coordination overhead.`,
                action: 'Consider team topology optimization before RIF.'
            };
            return {
                headline: `Your team is efficiently sized.`,
                detail: `At ${results.engineers} engineers, your coordination tax of ${results.coordinationTax.toFixed(0)}% is within acceptable bounds.`,
                action: 'Focus on reducing per-engineer overhead through tooling.'
            };

        case 'CFO':
            const engineeringRoi = results.multiplier;
            return {
                headline: `Engineering ROI: ${engineeringRoi.toFixed(1)}x.`,
                detail: `For every $1 spent on engineering, you generate $${engineeringRoi.toFixed(2)} in revenue. ${engineeringRoi < 3 ? 'This is below the 3x benchmark for healthy SaaS.' : 'This is a healthy return on engineering investment.'}`,
                action: `${engineeringRoi < 3 ? 'Model headcount scenarios for budget planning.' : 'Maintain discipline as you scale.'}`
            };

        default:
            return { headline: '', detail: '', action: '' };
    }
};
