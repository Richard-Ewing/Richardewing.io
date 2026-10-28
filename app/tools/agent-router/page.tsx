import { Metadata } from 'next';
import AgentRouterContent from './content';

export const metadata: Metadata = {
    title: 'Agentic Router FinOps Emulator',
    description: 'Simulate multi-agent token costs, optimize model routing, and determine break-even points for SLM vs LLM routing. Cut inference spend for your systems.',
    keywords: [
        'Agentic Workflow Simulator',
        'LLM Token Burn Rate Calculator',
        'Multi-Agent System Economics',
        'SLM Router Architecture',
        'Generative AI FinOps'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/agent-router',
    },
    openGraph: {
        title: 'Agentic Token Router FinOps Simulator',
        description: 'Prove that brute-forcing frontier reasoning APIs across an enterprise swarm leads to immediate cloud bankruptcy. Determine exact break-even points for deterministic SLM routing.',
        url: 'https://www.richardewing.io/tools/agent-router',
        type: 'website',
    },
};

import DiagnosticCTA from '@/app/components/DiagnosticCTA';

export default function Page() {
    return (
        <>
            <AgentRouterContent />
            <div className="max-w-5xl mx-auto px-6 pb-20">
                <DiagnosticCTA
                    variant="primary"
                    title="Are frontier reasoning models burning your multi-agent margin?"
                    subtitle="Route routine classification and extraction calls to sub-cent models before your monthly API invoice outpaces customer expansion."
                    metrics={['SLM Routing', 'Token FinOps', 'Gross Margin']}
                />
            </div>
        </>
    );
}
