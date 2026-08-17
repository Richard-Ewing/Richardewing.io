import type { Metadata } from 'next';
import Link from 'next/link';
import { ROICalculatorClient } from './ROICalculatorClient';

export const metadata: Metadata = {
    title: 'AI Waste & ROI Calculator',
    description: 'Calculate your monthly AI spend leakage, engineering R&D waste, and Product Debt Index (PDI) risk score.',
    alternates: { canonical: 'https://www.richardewing.io/roi-calculator' },
    openGraph: {
        title: 'AI Waste & ROI Calculator | Richard Ewing',
        description: 'Calculate your monthly AI spend leakage, engineering R&D waste, and Product Debt Index (PDI) risk score.',
        url: 'https://www.richardewing.io/roi-calculator',
        siteName: 'Richard Ewing',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Waste & ROI Calculator | Richard Ewing',
        description: 'Calculate your monthly AI spend leakage, engineering R&D waste, and Product Debt Index (PDI) risk score.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

export default function ROICalculatorPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-5xl mx-auto px-6">
                
                {/* Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <div className="text-xs font-mono font-bold text-amber-900 uppercase tracking-widest mb-3">
                        Interactive Diagnostic Tool
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        AI Waste & Capital Calculator
                    </h1>
                    <p className="text-xl text-zinc-900 font-medium leading-relaxed">
                        Quantify token explosion, context rot costs, and unmonitored retry leakage across your engineering team.
                    </p>
                </div>

                {/* Calculator Client Component */}
                <div className="mb-16">
                    <ROICalculatorClient />
                </div>

                {/* Methodology Note */}
                <div className="bg-white border border-zinc-300 rounded-3xl p-8 sm:p-12 shadow-sm text-sm text-zinc-800 space-y-4">
                    <h3 className="text-lg font-grotesk font-bold text-zinc-950">
                        Calculator Methodology & Empirical Model
                    </h3>
                    <p className="leading-relaxed">
                        This calculator uses the Product Debt Index (PDI) and AI Provider Efficiency Ratio (A-PER) baseline formulas. Engineering waste is calculated assuming a $15,000/month fully-loaded engineer cost with variable time misallocated to non-deterministic maintenance depending on governance maturity.
                    </p>
                    <div className="pt-4 border-t border-zinc-200 flex flex-wrap gap-6 text-xs font-mono font-bold text-zinc-700">
                        <Link href="/tools" className="hover:text-zinc-950 transition-colors">
                            Explore All 25 Diagnostic Tools &rarr;
                        </Link>
                        <Link href="/case-studies" className="hover:text-zinc-950 transition-colors">
                            Read $840K Spend Recovery Case Study &rarr;
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
