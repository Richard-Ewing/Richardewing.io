import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import PromptInjectionContent from './content';

export const metadata: Metadata = {
    title: 'Can Your AI Be Jailbroken? | Prompt Injection Red Team Sandbox',
    description: 'Test your AI system prompts against real-world jailbreaks, Base64 encoding attacks, and roleplay bypasses. Find vulnerabilities before attackers do. Free red-teaming tool.',
    keywords: [
        'Prompt Injection Scanner',
        'LLM Red Teaming',
        'System Prompt Defensibility',
        'Jailbreak Sandbox',
        'AI Security Guardrails'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/prompt-injection-sandbox',
    },
    openGraph: {
        title: 'Prompt Injection Defense Sandbox',
        description: 'Dynamically evaluate the structural integrity of your RAG architecture against emergent prompt payload attacks.',
        url: 'https://www.richardewing.io/tools/prompt-injection-sandbox',
        type: 'website',
    },
};

export default function Page() {
    return <PromptInjectionContent />;
}
