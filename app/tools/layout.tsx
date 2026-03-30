import StructuredData, { generateSoftwareApplicationSchema } from '@/app/components/seo/StructuredData';

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <StructuredData data={generateSoftwareApplicationSchema('Engineering & AI Diagnostic Tools', 'Free tools including Technical Debt Calculator, AI Cost Calculator, and SaaS Valuation Engine.', 'https://www.richardewing.io/tools')} />
            {children}
        </>
    );
}
