import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';
import PremiumGuideCTA from '@/app/components/PremiumGuideCTA';
import RelatedContent from '@/components/RelatedContent';

export const metadata: Metadata = {
    title: 'Executive Technology Guide 2026 | Richard Ewing',
    description: 'The definitive 2026 strategic planning guide for CTOs and VPs of Engineering. Covering Agentic AI orchestration, eBPF architectures, and AI FinOps.',
    keywords: ['2026 technology strategy', 'CTO planning 2026', 'Agentic AI adoption', 'eBPF service mesh', 'AI FinOps', 'Executive technology guide'],
    alternates: { canonical: 'https://www.richardewing.io/guides/executive-technology-guide-2026' },
    openGraph: { title: 'Executive Technology Guide 2026', description: 'The blueprint for technical leaders navigating the 2026 architectural shifts.', url: 'https://www.richardewing.io/guides/executive-technology-guide-2026', type: 'article' },
};

const shifts = [
    {
        title: '1. The Shift to Agentic Orchestration',
        description: 'Moving from single-prompt LLM wrappers to multi-agent architectures (LangGraph, CrewAI) that execute complex, multi-step asynchronous workflows.',
        impact: 'High ROI, but massive risk of uncontrolled API burn. Requires strict AI Unit Economics modeling.',
        color: 'violet',
    },
    {
        title: '2. "Sidecar-less" Cloud Native (eBPF)',
        description: 'The death of the traditional service mesh sidecar. Migration toward eBPF-based ambient meshes (Cilium) for zero-overhead kernel-level observability.',
        impact: 'Saves 15-30% on cluster compute costs globally, but requires massive network architecture retraining.',
        color: 'cyan',
    },
    {
        title: '3. LLM Routing Algorithms',
        description: 'The end of using GPT-4o for every query. Implementing semantic routers that automatically funnel 80% of volume to hyper-cheap, on-device SLMs.',
        impact: 'Reduces AI inference costs by up to 95% while maintaining perceived intelligence.',
        color: 'emerald',
    }
];

export default function ExecutiveGuide2026Page() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Guides</Link><span>/</span><span className="text-violet-400 font-bold">Strategy 2026</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        The Executive Technology Guide{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">2026</span>
                    </h1>
                    
                    <p className="text-lg text-zinc-400 mb-6 max-w-2xl leading-relaxed">
                        The technology landscape is hardening. 2024 was about prototyping AI. 2025 was about productionizing it. 2026 is strictly about <strong>margin preservation and unit economics</strong>. If your infrastructure is not radically re-architected this year, your cloud costs will destroy your EBITDA.
                    </p>

                    <div className="mb-12">
                        <PremiumGuideCTA guideSlug="executive-technology-guide-2026" guideName="The Complete 2026 Strategic Blueprint" />
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-8">The Three Architectural Mandates</h2>
                    
                    <div className="space-y-6 mb-16">
                        {shifts.map((shift, i) => (
                            <div key={i} className={`rounded-2xl border p-8 border-${shift.color}-500/30 bg-${shift.color}-500/5`}>
                                <h3 className={`text-2xl font-grotesk font-bold mb-3 text-${shift.color}-400`}>{shift.title}</h3>
                                <p className="text-zinc-300 mb-4">{shift.description}</p>
                                <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">Economic Impact</span>
                                    <p className="text-sm text-white font-medium">{shift.impact}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-zinc-800 bg-black p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Required Tooling Assessment</h2>
                        <p className="text-zinc-400 mb-6">Before authorizing these architectural shifts, your engineering leadership must model the financial impact dynamically.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/tools/aueb" className="block rounded-xl border border-violet-500/20 bg-violet-500/5 p-6 hover:border-violet-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">AUEB Calculator</h3>
                                <p className="text-sm text-zinc-400">Model the exact breaking point of your multi-agent architecture before you deploy it.</p>
                            </Link>
                            <Link href="/comparisons" className="block rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6 hover:border-cyan-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">Vendor Diligence</h3>
                                <p className="text-sm text-zinc-400">Review our deep-dive analysis on SLMs vs LLMs and eBPF vs Istio.</p>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent p-10 text-center mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <h2 className="text-3xl font-grotesk font-bold text-white mb-4 relative z-10">Don&apos;t Guess on Millions in Spend.</h2>
                        <p className="text-zinc-300 mb-8 max-w-lg mx-auto relative z-10">
                            Book a secure, NDA-protected $10,000 architectural review block. We will audit your 2026 roadmap, identify hallucinated ROI, and re-architect your FinOps pipeline before the board sees it.
                        </p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-xl bg-amber-500 text-black font-bold uppercase tracking-widest text-sm hover:bg-amber-400 transition-colors relative z-10 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                            Initiate Advisory Engagement →
                        </Link>
                    </div>
                
                    <RelatedContent currentSlug="executive-technology-guide-2026" type="guide" count={3} />
                </div>
            </div>
        </main>
    );
}
