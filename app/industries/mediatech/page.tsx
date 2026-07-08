import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Content Pipeline Debt Is Destr & Strategy Diagnostics | Richard Ewing',
    description: 'Content Pipeline Debt Is Destr provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: ['mediatech technical debt', 'streaming technology', 'content delivery infrastructure', 'media technology economics', 'CDN engineering debt'],
    alternates: { canonical: 'https://www.richardewing.io/industries/mediatech' },
    openGraph: { title: 'MediaTech AI Economics', description: 'R&D capital challenges in media and entertainment technology.', url: 'https://www.richardewing.io/industries/mediatech', type: 'article' },
};

const sections = [
    { title: 'Streaming Infrastructure Debt', description: 'Delivering high-definition video at scale requires massive CDN infrastructure and adaptive bitrate encoding pipelines.', stats: 'CDN cost per user: $3-8/month at scale', color: 'violet' },
    { title: 'Content Recommendation AI', description: 'Recommendation engines require continuous training on viewing events, driving up database and model training costs.', stats: 'Recommendation quality = 80%+ of engagement', color: 'cyan' },
    { title: 'DRM & Rights Management', description: 'DRM across territories and platforms requires complex licensing database rules that change with content windows.', stats: 'Rights data: thousands of rules per title per territory', color: 'amber' },
    { title: 'Ad Tech Integration Debt', description: 'Ad-supported streaming requires real-time bidding, dynamic ad insertion, and custom third-party tracking integrations.', stats: '20-50 ad partner integrations per platform', color: 'rose' },
];

const colorMap: Record<string, string> = { violet: 'border-violet-500/30 bg-violet-500/5', cyan: 'border-cyan-500/30 bg-cyan-500/5', amber: 'border-amber-500/30 bg-amber-500/5', rose: 'border-rose-500/30 bg-rose-500/5' };
const textMap: Record<string, string> = { violet: 'text-violet-400', cyan: 'text-cyan-900 font-extrabold font-semibold', amber: 'text-amber-400', rose: 'text-rose-400' };

export default function MediaTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/system" className="hover:text-cyan-900 font-extrabold font-semibold">Industries</Link><span>/</span><span className="text-violet-400 font-bold">MediaTech</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        MediaTech{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">AI Economics</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">Media and entertainment technology faces unique R&D economics: massive content delivery infrastructure, AI recommendation systems, complex rights management, and ad tech integration debt.</p>

                    <div className="space-y-6 mb-16">
                        {sections.map((s, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorMap[s.color]}`}>
                                <h2 className={`text-2xl font-grotesk font-bold mb-3 ${textMap[s.color]}`}>{s.title}</h2>
                                <p className="text-zinc-900 mb-4">{s.description}</p>
                                <span className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest">{s.stats}</span>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-8 text-center">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">MediaTech R&D Audit</h2>
                        <p className="text-zinc-950 mb-6">Quantify your streaming infrastructure debt, recommendation AI costs, and content delivery economics.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 text-zinc-950 font-semibold font-bold hover:opacity-90 transition-opacity">Book MediaTech Audit →</Link>
                    
                    <AdvisoryCTA variant="industry" />
</div>
                </div>
            </div>
        </main>
    );
}
