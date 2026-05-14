export interface RecommendedTrack {
    id: string;
    title: string;
    desc: string;
}

export function getRecommendedTracks(score: number, growth: number, debtVelocity: number): RecommendedTrack[] {
    if (score < 50) {
        return [
            { id: 'Track 16', title: 'Technical Debt Forgiveness Protocols', desc: 'Stop bleeding capital. A framework to enforce 70/20/10 capacity allocation and isolate sprawling system collapse.' },
            { id: 'Track 20', title: 'System Design Economics', desc: 'Refactor enterprise architecture based strictly on Cost of Goods Sold (COGS) rather than vanity engineering metrics.' }
        ];
    }
    if (growth < 30) {
        return [
            { id: 'Track 28', title: 'Agentic Process Automation (APA)', desc: 'Augment a starved engineering bench with Multi-Agent execution to drive massive product execution via specialized proxy workers.' },
            { id: 'Track 07', title: 'Generative Coding Economics', desc: 'Deploy localized SLM Copilots securely to bypass human developer bottlenecks and scale feature velocity instantly.' }
        ];
    }
    if (debtVelocity > 5) {
        return [
            { id: 'Track 23', title: 'Neural-Symbolic AI & System 2 Reasoning', desc: 'Your error velocity is catastrophic. Enforce deterministic policy logic architectures to prevent algorithmic structural damage.' },
            { id: 'Track 14', title: 'Semantic CI/CD Pipeline Moats', desc: 'Prevent future integration failure by implementing strict automated, AI-driven QA regression gating prior to merges.' }
        ];
    }
    return [
        { id: 'Track 29', title: 'AI Supply Chain & GPU FinOps', desc: 'Optimize your stable baseline by enforcing strict token-level API accounting and forecasting massive cloud scale costs.' },
        { id: 'Track 10', title: 'Sovereign Edge Implementation', desc: 'Prepare your stable architecture for fully disconnected, localized private deployments (M1/Edge TPU inference limits).' }
    ];
}
