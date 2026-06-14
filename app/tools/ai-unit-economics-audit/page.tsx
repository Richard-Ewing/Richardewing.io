import { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { ArrowLeft, Download, Calculator, TrendingDown, DollarSign } from 'lucide-react';
import { ScrollReveal } from '@/components/magicui/scroll-reveal';
import ShineBorder from '@/components/magicui/shine-border';
import { BorderBeam } from '@/components/magicui/border-beam';

export const metadata: Metadata = {
    title: 'Stop Pricing AI Like SaaS or Burn Margins | Unit Economics Audit',
    description: 'Variable token usage eats margins. Calculate your exact Technical Insolvency Date — when API costs exceed subscription pricing. Download free XLSX matrix.',
    keywords: [
        'AI Unit Economics',
        'Technical Insolvency Date',
        'LLM Cost Calculator',
        'Generative AI margins',
        'AI Pricing Strategy',
        'AI Economics Template'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/ai-unit-economics-audit',
    },
    openGraph: {
        title: 'AI Unit Economics Audit Template',
        description: 'Calculate your exact Technical Insolvency Date. Stop pricing AI like SaaS and map your generative compute exposure.',
        url: 'https://www.richardewing.io/tools/ai-unit-economics-audit',
        type: 'website',
    }
};

export default function AIUnitEconomicsAuditPage() {
    return (
        <main className="min-h-screen pt-24 pb-32">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Breadcrumb */}
                <div className="mb-12">
                    <Link href="/tools" className="inline-flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest hover:text-cyan-900 transition-colors">
                        <ArrowLeft size={14} /> Back to Toolkit
                    </Link>
                </div>

                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-900 font-extrabold text-xs font-mono uppercase tracking-widest mb-6">
                            <Calculator size={14} /> Executive Diagnostic Matrix
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tighter mb-6 leading-tight">
                            The AI Unit Economics <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Audit Template</span>
                        </h1>
                        <p className="text-xl text-zinc-900 max-w-2xl mx-auto leading-relaxed">
                            SaaS was a fixed cost. AI is a variable cost tied directly to usage. If you price your generative features like standard software, you are structurally engineering a margin collapse.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={50}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white border border-zinc-400 p-6 rounded-2xl shadow-lg">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center mb-4">
                                <TrendingDown size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Technical Insolvency</h3>
                            <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                                Pinpoint the exact day in the billing cycle where the cost of a user's API compute exceeds their monthly subscription value.
                            </p>
                        </div>
                        <div className="bg-white border border-zinc-400 p-6 rounded-2xl shadow-lg">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-4">
                                <Calculator size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Token Liability</h3>
                            <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                                Calculate the true cost per query, factoring in input tokens, output tokens, and hidden vector database retrieval costs.
                            </p>
                        </div>
                        <div className="bg-white border border-zinc-400 p-6 rounded-2xl shadow-lg">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                                <DollarSign size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Break-Even Velocity</h3>
                            <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                                Determine the maximum number of actions a power user can take before they force your unit economics upside down.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <div className="relative rounded-[2rem] bg-zinc-50 border border-zinc-400 p-8 sm:p-12 text-center shadow-2xl overflow-hidden">
                        <BorderBeam size={400} duration={12} delay={9} borderWidth={2} colorFrom="#ef4444" colorTo="#3b82f6" />
                        
                        <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 mb-4 relative z-10">
                            Download the .XLSX Framework
                        </h2>
                        <p className="text-zinc-900 mb-8 max-w-xl mx-auto relative z-10">
                            Plug in your average token usage per session to see exactly where your margins break. Hand this directly to your CFO to model your AI exposure.
                        </p>

                        <div className="flex justify-center relative z-10">
                            <ShineBorder className="w-full sm:w-auto p-1 rounded-xl bg-white" borderColor="#ef4444" duration={3}>
                                <a 
                                    href="/downloads/ai-unit-economics-audit.xlsx" 
                                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white border border-zinc-200 hover:bg-zinc-100 text-zinc-950 font-semibold font-black uppercase tracking-widest rounded-lg transition-all"
                                >
                                    <Download size={18} />
                                    Download Audit Matrix
                                </a>
                            </ShineBorder>
                        </div>
                        
                        <p className="text-xs text-zinc-900 font-bold font-mono uppercase tracking-widest mt-6 relative z-10">
                            Secure Excel File (.xlsx) • No Macros • Board-Ready
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={150}>
                    <div className="mt-20 border-t border-zinc-400 pt-12 text-center">
                        <h3 className="text-lg font-bold text-zinc-950 mb-4">Need help fixing the gaps it uncovers?</h3>
                        <p className="text-sm text-zinc-900 font-medium mb-6">Read the full system breakdown on how to restructure your architecture for profitability.</p>
                        <a 
                            href="https://newsletter.richardewing.io/p/technical-insolvency-date" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-bold text-cyan-900 hover:text-cyan-700 underline underline-offset-4 transition-colors"
                        >
                            Read "The Technical Insolvency Date" →
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        
            <div className="page-container max-w-4xl mx-auto">
                <AdvisoryCTA variant="tool-result" />
            </div>
        </main>
    );
}
