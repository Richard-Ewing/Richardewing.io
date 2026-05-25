import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download, ShieldCheck, Route, FileCode2 } from 'lucide-react';
import { ScrollReveal } from '@/components/magicui/scroll-reveal';
import ShineBorder from '@/components/magicui/shine-border';
import { BorderBeam } from '@/components/magicui/border-beam';

export const metadata: Metadata = {
    title: 'Deterministic Control Layer | AI Architecture',
    description: 'Why probabilistic AI needs deterministic boundaries. The 4-layer architecture that prevents AI agent drift, hallucination, and cost overruns.',
    keywords: [
        'Deterministic Control Layer',
        'Synthetic COGS',
        'AI Architecture Board',
        'LLM Routing',
        'Enterprise AI Deployment',
        'AI Automation Illusion'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/architecture/deterministic-control-layer',
    },
    openGraph: {
        title: 'Deterministic Control Layer Architecture',
        description: 'Download the high-res Miro architecture board for separating reasoning from routing. Cap your API costs and control Synthetic COGS.',
        url: 'https://www.richardewing.io/architecture/deterministic-control-layer',
        type: 'website',
    }
};

export default function DeterministicControlLayerPage() {
    return (
        <main className="min-h-screen pt-24 pb-32">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Breadcrumb */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest hover:text-emerald-900 transition-colors">
                        <ArrowLeft size={14} /> Back to Home
                    </Link>
                </div>

                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 font-extrabold text-xs font-mono uppercase tracking-widest mb-6">
                            <Route size={14} /> Systems Engineering
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tighter mb-6 leading-tight">
                            Deterministic <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Control Layer</span>
                        </h1>
                        <p className="text-xl text-zinc-900 max-w-2xl mx-auto leading-relaxed">
                            Stop substituting cheap human labor with expensive generative compute. Growth does not equal margin in the AI era. If your unit economics are upside down, scaling will just accelerate bankruptcy.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={50}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white border border-zinc-400 p-6 rounded-2xl shadow-lg">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-4">
                                <Route size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">The Triage Gate</h3>
                            <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                                Never send user prompts directly to an LLM. Route requests through a cheap NLP classifier first. Keep 80% of traffic off expensive generative compute.
                            </p>
                        </div>
                        <div className="bg-white border border-zinc-400 p-6 rounded-2xl shadow-lg">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                                <ShieldCheck size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">The Guardrail Layer</h3>
                            <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                                Define the absolute boundaries of your system using standard code, not prompts. Prevent hallucinations before generation even begins.
                            </p>
                        </div>
                        <div className="bg-white border border-zinc-400 p-6 rounded-2xl shadow-lg">
                            <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4">
                                <FileCode2 size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Narrow Generation</h3>
                            <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                                Only activate the expensive LLM for specific extraction or reasoning tasks. Pass strictly limited context windows to cap your Synthetic COGS.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <div className="relative rounded-[2rem] bg-zinc-50 border border-zinc-400 p-8 sm:p-12 text-center shadow-2xl overflow-hidden">
                        <BorderBeam size={400} duration={12} delay={9} borderWidth={2} colorFrom="#10b981" colorTo="#06b6d4" />
                        
                        <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 mb-4 relative z-10">
                            Download the Architecture Board
                        </h2>
                        <p className="text-zinc-900 mb-8 max-w-xl mx-auto relative z-10">
                            Hand this high-resolution Miro board directly to your engineering lead on Monday to start separating your reasoning from your routing.
                        </p>

                        <div className="flex justify-center relative z-10">
                            <ShineBorder className="w-full sm:w-auto p-1 rounded-xl bg-white" borderColor="#10b981" duration={3}>
                                <a 
                                    href="/downloads/deterministic-control-layer-board.pdf" 
                                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white border border-zinc-200 hover:bg-zinc-800 text-zinc-950 font-semibold font-black uppercase tracking-widest rounded-lg transition-all"
                                >
                                    <Download size={18} />
                                    Download Miro Board
                                </a>
                            </ShineBorder>
                        </div>
                        
                        <p className="text-xs text-zinc-900 font-bold font-mono uppercase tracking-widest mt-6 relative z-10">
                            High-Res PDF Export • Engineering-Ready
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={150}>
                    <div className="mt-20 border-t border-zinc-400 pt-12 text-center">
                        <h3 className="text-lg font-bold text-zinc-950 mb-4">Want the full deployment guide?</h3>
                        <p className="text-sm text-zinc-900 font-medium mb-6">Read the complete breakdown on how to calculate and cap your Synthetic COGS.</p>
                        <a 
                            href="https://newsletter.richardewing.io/p/capping-synthetic-cogs" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-bold text-emerald-900 hover:text-emerald-700 underline underline-offset-4 transition-colors"
                        >
                            Read "The Automation Illusion" →
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
