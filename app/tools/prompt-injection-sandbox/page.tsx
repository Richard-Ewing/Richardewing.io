import { Metadata } from 'next';
import PromptInjectionContent from './content';

export const metadata: Metadata = {
    title: 'Prompt Injection Sandbox | Red Team Your AI | Ewing',
    description: 'Test your system prompts against modern jailbreaks, Base64 encodings, and roleplay bypasses. Find vulnerabilities before attackers do.',
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
