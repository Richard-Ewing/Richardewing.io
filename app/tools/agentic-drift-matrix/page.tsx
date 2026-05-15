import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download, Database, Layers, BrainCircuit } from 'lucide-react';
import { ScrollReveal } from '@/components/magicui/scroll-reveal';
import ShineBorder from '@/components/magicui/shine-border';
import { BorderBeam } from '@/components/magicui/border-beam';

export const metadata: Metadata = {
    title: 'Agentic Drift Diagnostic Matrix | Richard Ewing',
    description: 'Measure the exact turn-limit where your AI agents begin to fail. Stop paying for massive context windows that degrade accuracy.',
    keywords: [
        'Agentic Drift',
        'AI Reliability',
        'State Management Decay',
        'LLM Context Window',
        'Generative AI Hallucination',
        'Enterprise AI Architecture'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/agentic-drift-matrix',
    },
    openGraph: {
        title: 'Agentic Drift Diagnostic Matrix',
        description: 'Measure the exact turn-limit where your AI agents begin to fail. Stop paying for massive context windows that degrade accuracy.',
        url: 'https://www.richardewing.io/tools/agentic-drift-matrix',
        type: 'website',
    }
};

export default function AgenticDriftMatrixPage() {
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-900 font-extrabold text-xs font-mono uppercase tracking-widest mb-6">
                            <Layers size={14} /> Reliability Engineering
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tighter mb-6 leading-tight">
                            The Agentic Drift <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Diagnostic Matrix</span>
                        </h1>
                        <p className="text-xl text-zinc-900 max-w-2xl mx-auto leading-relaxed">
                            AI is not a database. It is a decaying asset. When you give an AI agent a massive context window and let it run a complex workflow, it suffers from Agentic Drift.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={50}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white border border-zinc-400 p-6 rounded-2xl shadow-lg">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center mb-4">
                                <BrainCircuit size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Constraint Forgetting</h3>
                            <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                                Identify the exact step in the workflow where the agent forgets the original system prompt and begins to hallucinate its own rules.
                            </p>
                        </div>
                        <div className="bg-white border border-zinc-400 p-6 rounded-2xl shadow-lg">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-4">
                                <Database size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">State Management</h3>
                            <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                                Stop relying on the LLM's context window for state. Learn how to map deterministic external memory to prevent decay.
                            </p>
                        </div>
                        <div className="bg-white border border-zinc-400 p-6 rounded-2xl shadow-lg">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                                <Layers size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Compute Waste</h3>
                            <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                                You are paying for a massive context window while receiving degraded accuracy. Map the threshold where your compute ROI goes negative.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <div className="relative rounded-[2rem] bg-zinc-50 border border-zinc-400 p-8 sm:p-12 text-center shadow-2xl overflow-hidden">
                        <BorderBeam size={400} duration={12} delay={9} borderWidth={2} colorFrom="#6366f1" colorTo="#06b6d4" />
                        
                        <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 mb-4 relative z-10">
                            Download the .XLSX Matrix
                        </h2>
                        <p className="text-zinc-900 mb-8 max-w-xl mx-auto relative z-10">
                            Run your standard AI workflow through this matrix to find your exact failure threshold. Stop buying larger context windows just to make your hallucinations more expensive.
                        </p>

                        <div className="flex justify-center relative z-10">
                            <ShineBorder className="w-full sm:w-auto p-1 rounded-xl bg-white" borderColor="#6366f1" duration={3}>
                                <a 
                                    href="/downloads/agentic-drift-matrix.xlsx" 
                                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white border border-zinc-200 hover:bg-zinc-800 text-zinc-950 font-semibold font-black uppercase tracking-widest rounded-lg transition-all"
                                >
                                    <Download size={18} />
                                    Download Matrix
                                </a>
                            </ShineBorder>
                        </div>
                        
                        <p className="text-xs text-zinc-900 font-bold font-mono uppercase tracking-widest mt-6 relative z-10">
                            Secure Excel File (.xlsx) • No Macros • Engineering-Ready
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={150}>
                    <div className="mt-20 border-t border-zinc-400 pt-12 text-center">
                        <h3 className="text-lg font-bold text-zinc-950 mb-4">Ready to stop the decay permanently?</h3>
                        <p className="text-sm text-zinc-900 font-medium mb-6">See the architecture I use to enforce deterministic state management.</p>
                        <a 
                            href="https://newsletter.richardewing.io/p/fixing-agentic-drift" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-bold text-indigo-900 hover:text-indigo-700 underline underline-offset-4 transition-colors"
                        >
                            Read "Fixing Agentic Drift" →
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </main>
    );
}
