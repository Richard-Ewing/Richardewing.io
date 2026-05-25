import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import AgentRouterContent from './content';

export const metadata: Metadata = {
    title: 'Multi-Agent Token Burn Calculator | Prevent Cloud Bankruptcy',
    description: 'Brute-forcing GPT-4 across an enterprise swarm leads to immediate token bankruptcy. Calculate compound token decay and model the break-even for edge routing.',
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
        description: 'Prove that brute-forcing GPT-4 across an enterprise swarm leads to immediate cloud bankruptcy. Determine exact break-even points for deterministic routing.',
        url: 'https://www.richardewing.io/tools/agent-router',
        type: 'website',
    },
};

export default function Page() {
    return <AgentRouterContent />;
}
