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

import StructuredData, { generateSoftwareApplicationSchema } from '@/app/components/seo/StructuredData';

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <StructuredData data={generateSoftwareApplicationSchema('Engineering & AI Diagnostic Tools', 'Free tools including Technical Debt Calculator, AI Cost Calculator, and SaaS Valuation Engine.', 'https://www.richardewing.io/tools')} />
            {children}
        </>
    );
}
