import type { Metadata } from 'next';
import Link from 'next/link';
import PremiumGuideCTA from '@/app/components/PremiumGuideCTA';
import RelatedContent from '@/components/RelatedContent';

export const metadata: Metadata = {
    title: 'Career Paths: Breaking into AI Product Management | Richard Ewing',
    description: 'The definitive career transition roadmap for PMs moving into AI Product Leadership, Unit Economics, and AI feature P&L management.',
    keywords: ['AI Product Manager', 'AIPM transition', 'How to become an AI PM', 'AI features', 'AI economics PM', 'Career Path AI PM'],
    alternates: { canonical: 'https://www.richardewing.io/guides/breaking-into-ai-product-management' },
    openGraph: { title: 'Career Paths: Breaking into AI Product Management', description: 'The 2026 blueprint for product managers scaling into AI leadership.', url: 'https://www.richardewing.io/guides/breaking-into-ai-product-management', type: 'article' },
};

export default function BreakingIntoAIPMPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-amber-400">Career Paths</Link><span>/</span><span className="text-amber-400 font-bold">AI Product Management</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        Career Paths: Breaking into{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">AI Product Management</span>
                    </h1>
                    
                    <p className="text-lg text-zinc-400 mb-8 max-w-2xl leading-relaxed">
                        Traditional B2B SaaS product management is commoditized. In 2026, the elite tier of product leadership is the <strong>AI Product Manager (AIPM)</strong>. This role demands mastery of AI Unit Economics, cost-of-predictivity curves, and stochastic user experiences.
                    </p>

                    <div className="mb-12">
                        <PremiumGuideCTA guideSlug="product-economics" guideName="The Product Economics Playbook" />
                    </div>

                    <div className="prose prose-invert max-w-none mb-16">
                        <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Triad of the AI PM</h2>
                        <p className="text-zinc-300 mb-6">Transitioning from a traditional PM role requires internalizing three distinct spheres of competence that dictate the profitability of AI features.</p>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
                                <div className="text-xl mb-3">📊</div>
                                <h3 className="text-lg font-bold text-white mb-2">AI Unit Economics</h3>
                                <p className="text-sm text-zinc-400">73% of AI features are margin-negative. You must calculate token costs against ARR to ensure absolute feature profitability.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5">
                                <div className="text-xl mb-3">⚡</div>
                                <h3 className="text-lg font-bold text-white mb-2">Cost of Predictivity</h3>
                                <p className="text-sm text-zinc-400">Knowing when 80% accuracy is acceptable vs when 99.9% accuracy is required, and understanding the exponential infrastructure cost to close that gap.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-rose-500/20 bg-rose-500/5">
                                <div className="text-xl mb-3">🎯</div>
                                <h3 className="text-lg font-bold text-white mb-2">Stochastic UX</h3>
                                <p className="text-sm text-zinc-400">Designing user interfaces that anticipate LLM hallucinations and provide immediate fallback states without breaking workflow trust.</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Non-Deterministic Mindset</h2>
                        <p className="text-zinc-300">
                            Traditional PMs write deterministic JIRA tickets: "If user clicks X, then Y happens." AI PMs write boundaries: "The model must generate a valid P&L statement, bounded by historical data, within 1,200ms, costing no more than $0.003." This shift from defining linear logic to defining bounding boxes is the foundation of the AI product matrix.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-rose-500/10 p-10 text-center mb-16">
                        <h2 className="text-3xl font-grotesk font-bold text-white mb-4">Master the AI Economics Matrix</h2>
                        <p className="text-zinc-300 mb-8 max-w-lg mx-auto">
                            Don't guess what your AI features cost. Learn the exact frameworks to model profitability, route models dynamically, and price agentic capabilities properly.
                        </p>
                        <Link href="/curriculum" className="inline-block px-8 py-4 rounded-xl bg-amber-500 text-black font-bold uppercase tracking-widest text-sm hover:bg-amber-400 transition-colors shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                            Unlock Full Curriculum ($199) →
                        </Link>
                    </div>
                
                    <RelatedContent currentSlug="breaking-into-ai-product-management" type="guide" count={3} />
                </div>
            </div>
        </main>
    );
}
