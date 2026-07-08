import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import AgentRouterContent from './content';

export const metadata: Metadata = {
    title: 'Multi & Strategy Diagnostics | Richard Ewing',
    description: 'Multi provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
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
