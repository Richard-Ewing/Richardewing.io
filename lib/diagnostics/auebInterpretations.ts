import { AuebScoreMetrics } from './auebScoring';
import { Persona, formatMoney } from './interpretations';

export const getAuebPersonaInsight = (persona: Persona, results: AuebScoreMetrics): { headline: string; detail: string; action: string } => {
    const margin = results.grossMargin;
    const collapse = results.monthsToCollapse;
    const monthlyCost = results.monthlyCost;

    switch (persona) {
        case 'Founder':
            if (margin < 30) return {
                headline: '⚠️ You are scaling into bankruptcy.',
                detail: `At ${formatMoney(monthlyCost)}/month in AI costs, your next funding round will be a down round. Investors will see this in due diligence.`,
                action: 'Book an emergency margin audit before your next board meeting.'
            };
            if (margin < 50) return {
                headline: 'Your runway is shorter than you think.',
                detail: `AI costs will consume 50%+ of revenue in ${collapse} months at current growth. This will force a pricing conversation you\'re not ready for.`,
                action: 'Model the impact on your next raise. Book a strategy call.'
            };
            return {
                headline: 'Your unit economics are investor-ready.',
                detail: `${margin.toFixed(0)}% gross margin gives you pricing power and runway. You can afford to grow aggressively.`,
                action: 'Optimize further to maximize valuation multiple.'
            };

        case 'CPO':
            const worstFeature = results.featureBreakdown.sort((a, b) => a.margin - b.margin)[0];
            if (margin < 50) return {
                headline: `Feature "${worstFeature?.name || 'AI'}" is your margin killer.`,
                detail: `This feature consumes ${((worstFeature?.cost || 0) / monthlyCost * 100).toFixed(0)}% of AI costs. Either re-architect or remove it.`,
                action: 'Get a feature P&L analysis to identify the real ROI.'
            };
            return {
                headline: 'Your AI features are economically viable.',
                detail: `All features are contributing positively to margin. Focus on expansion, not optimization.`,
                action: 'Model new AI feature economics before building.'
            };

        case 'VP Eng':
            const bestModel = results.models[0];
            const currentMargin = results.grossMargin;
            const potentialMargin = bestModel?.margin || currentMargin;
            const savings = (potentialMargin - currentMargin) / 100 * results.monthlyRevenue;

            if (savings > 1000) return {
                headline: `Switching to ${bestModel?.model} saves ${formatMoney(savings)}/month.`,
                detail: `Your current model choice is costing you ${formatMoney(savings * 12)}/year in lost margin. This is a quick win.`,
                action: 'Get a model migration roadmap with quality benchmarks.'
            };
            return {
                headline: 'Your model selection is near-optimal.',
                detail: `Potential savings from model switching are minimal. Focus on caching and query optimization.`,
                action: 'Schedule an architecture review for further gains.'
            };

        case 'CFO':
            const aiCacRatio = monthlyCost / (results.monthlyRevenue / results.users);
            if (margin < 50) return {
                headline: `AI CAC is ${(aiCacRatio * 100).toFixed(0)}% of ARPU.`,
                detail: `For every $1 of revenue, you're spending ${(aiCacRatio).toFixed(2)} on AI infrastructure. Industry benchmark is < 20%.`,
                action: 'Model the impact on LTV:CAC and payback period.'
            };
            return {
                headline: 'AI unit economics are within benchmarks.',
                detail: `AI costs at ${(100 - margin).toFixed(0)}% of revenue is acceptable for this stage. Monitor monthly.`,
                action: 'Set up automated margin tracking and alerts.'
            };

        default:
            return { headline: '', detail: '', action: '' };
    }
};
