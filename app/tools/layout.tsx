import type { Metadata } from 'next';
import { toolsHubKeywords } from '../lib/keywords';

export const metadata: Metadata = {
    title: 'Free Engineering & AI Calculators — Technical Debt, AI Cost, SaaS Valuation Tools | Richard Ewing',
    description: 'Free diagnostic tools: Technical Debt Calculator (PDI), AI Cost Calculator (AUEB), SaaS Valuation Engine (EV-SE), Revenue Per Engineer Benchmark (APER), and AI-Age Interview Tool. By Product Economist Richard Ewing.',
    keywords: toolsHubKeywords,
    alternates: { canonical: 'https://www.richardewing.io/tools' },
    openGraph: {
        title: 'Free Engineering & AI Diagnostic Tools | Richard Ewing',
        description: 'Five free tools: Technical Debt Calculator, AI Cost Calculator, SaaS Valuation Engine, Revenue Per Engineer, and AI Interview Assessment.',
        url: 'https://www.richardewing.io/tools',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Engineering & AI Tools | Richard Ewing',
        description: 'Technical debt calculator, AI cost benchmark, SaaS valuation, revenue per engineer, and AI-age interview tool.',
    },
};

const toolsFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the Product Debt Index (PDI)?', acceptedAnswer: { '@type': 'Answer', text: 'The PDI is a free calculator that quantifies hidden technical debt in dollar terms. It calculates your Technical Insolvency Date — the quarter when maintenance consumes 100% of engineering capacity. Try it at richardewing.io/tools/pdi.' }},
        { '@type': 'Question', name: 'How do I calculate AI unit economics?', acceptedAnswer: { '@type': 'Answer', text: 'Use the AUEB (AI Unit Economics Benchmark) at richardewing.io/tools/aueb. It calculates your Cost of Predictivity, AI margin collapse point, and compares costs across GPT-4, Claude, Gemini, and open-source models.' }},
        { '@type': 'Question', name: 'What is a good revenue per engineer?', acceptedAnswer: { '@type': 'Answer', text: 'Growth-stage SaaS: $200K-500K. Scale: $500K-1M. Elite (Stripe, Figma): $1M+. Use the APER calculator at richardewing.io/tools/aper to benchmark your engineering efficiency.' }},
        { '@type': 'Question', name: 'How do I value my SaaS company?', acceptedAnswer: { '@type': 'Answer', text: 'SaaS companies are valued as a multiple of ARR. In 2026, multiples range from 5-15x. Use the EV-SE (Enterprise Value Scenario Engine) at richardewing.io/tools/ev-se to model how different scenarios affect your valuation.' }},
    ],
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsFaqSchema) }} />
            {children}
        </>
    );
}
