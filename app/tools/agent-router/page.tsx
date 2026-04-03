import { Metadata } from 'next';
import AgentRouterContent from './content';

export const metadata: Metadata = {
    title: 'Agentic Flow Token Simulator | AI Fleet Economics',
    description: 'Calculate the compound token decay and GPU execution costs of multi-agent LLM workflows. Visualize the financial necessity of SLM Edge Routers.',
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
