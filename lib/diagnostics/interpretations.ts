import { PDIScoreMetrics } from "./scoring";

export type Persona = 'Founder' | 'CPO' | 'VP Eng' | 'CFO';

export interface PersonaInsight {
    headline: string;
    detail: string;
    action: string;
}

export const formatMoney = (num: number) => {
    if (num >= 1000000) return '$' + (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return '$' + (num / 1000).toFixed(0) + 'K';
    return '$' + num.toFixed(0);
};

export function getPersonaInsight(persona: Persona, results: PDIScoreMetrics, salary: number): PersonaInsight {
    const score = results.score;
    const waste = results.financials.waste;
    const maintenance = results.metrics.maintenance;

    switch (persona) {
        case 'Founder':
            if (score < 50) return {
                headline: `⚠️ You're burning ${formatMoney(waste)}/year on janitorial work.`,
                detail: `With ${maintenance}% of capacity in maintenance, you're paying senior engineer salaries for junior-level work. This is capital leakage that affects your runway and valuation.`,
                action: 'Schedule a product rationalization session before your next funding round.'
            };
            return {
                headline: 'Your roadmap is investor-ready.',
                detail: `${results.metrics.growth}% growth focus signals healthy capital allocation. Your engineering spend is creating enterprise value.`,
                action: 'Document this as proof of operational discipline for investors.'
            };

        case 'CPO':
            if (score < 60) return {
                headline: `Your roadmap credibility is at ${score}%.`,
                detail: `When ${maintenance}% of engineering is in maintenance mode, your feature commitments become unreliable. The board sees this as execution risk.`,
                action: 'Map the debt hotspots and create a burn-down plan.'
            };
            return {
                headline: 'Your roadmap is execution-ready.',
                detail: `With ${results.metrics.growth}% growth allocation, you have the capacity to hit your commitments.`,
                action: 'Focus on protecting this allocation from scope creep.'
            };

        case 'VP Eng':
            const salaryFallback = salary > 0 ? salary : 100000;
            const seniorHours = waste / (salaryFallback / 2080); // Approximate hours wasted
            if (score < 50) return {
                headline: `${Math.round(seniorHours).toLocaleString()} hours/year of senior IC time is wasted.`,
                detail: `Your team is doing ${maintenance}% maintenance work. This is the #1 cause of senior engineer attrition—they didn't sign up to be janitors.`,
                action: 'Identify the debt clusters and make a case for dedicated reduction sprints.'
            };
            return {
                headline: 'Your team is in high-leverage mode.',
                detail: `At ${score}% efficiency, your engineers are working on value-creating activities. Protect this.`,
                action: 'Maintain discipline on new feature scope to prevent regression.'
            };

        case 'CFO':
            const roi = (100 - maintenance) / 100;
            if (score < 50) return {
                headline: `Engineering ROI: ${(roi * 100).toFixed(0)} cents per dollar.`,
                detail: `For every $1 spent on engineering, ${(maintenance).toFixed(0)} cents is going to maintenance with no return. Annual waste: ${formatMoney(waste)}.`,
                action: 'Model the impact of a debt reduction investment vs. continued drag.'
            };
            return {
                headline: `Engineering ROI: ${(roi * 100).toFixed(0)} cents per dollar.`,
                detail: `This is within healthy bounds for a growth-stage company. Continue monitoring quarterly.`,
                action: 'Set up quarterly PDI tracking as a financial KPI.'
            };

        default:
            return { headline: '', detail: '', action: '' };
    }
}
