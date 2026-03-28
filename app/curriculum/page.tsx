import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Engineering Economics Curriculum | Richard Ewing',
    description: 'Self-paced learning tracks for CTOs, Product Managers, and PE/VC investors. Master technical debt valuation, AI unit economics, and R&D capital efficiency.',
    keywords: [
        'CTO curriculum', 'product manager training', 'technical debt course',
        'AI unit economics training', 'engineering economics education',
        'PE technical due diligence', 'fractional CTO training',
    ],
    alternates: { canonical: 'https://www.richardewing.io/curriculum' },
    openGraph: {
        title: 'Engineering Economics Curriculum | Richard Ewing',
        description: 'Self-paced learning tracks for CTOs, PMs, and investors.',
        url: 'https://www.richardewing.io/curriculum',
        type: 'website',
    },
};

import { modules } from '@/lib/curriculum-data';

const trackMeta = [
    {
        id: 'cto',
        title: 'CTO / Engineering Leader',
        icon: '⚙️',
        color: 'cyan',
        subtitle: 'Master the economics of engineering organizations',
    },
    {
        id: 'pm',
        title: 'Product Manager / CPO',
        icon: '📊',
        color: 'purple',
        subtitle: 'Think like a Product Economist, not a feature factory',
    },
    {
        id: 'investor',
        title: 'PE / VC / Investor',
        icon: '💰',
        color: 'amber',
        subtitle: 'Technical due diligence for portfolio value creation',
    },
    {
        id: 'ai-enterprise',
        title: 'AI & Enterprise Architect',
        icon: '🤖',
        color: 'purple',
        subtitle: 'Master the economics of AI operations and scalable enterprise architecture',
    },
];

// Dynamically generate the syllabus directly from the premium Vault datastore
const tracks = trackMeta.map(meta => {
    const trackModules = Object.entries(modules)
        // Match the prefix, e.g. "cto/1-1"
        .filter(([key]) => key.startsWith(`${meta.id}/`))
        .map(([key, mod]) => ({
            name: `${mod.moduleId}: ${mod.title}`,
            items: mod.lessons.map(lesson => ({
                label: lesson.title,
                isStatic: true // Enforce no free clickable routing
            }))
        }));
    
    return { ...meta, modules: trackModules };
});

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string; dot: string }> = {
    cyan: { border: 'border-cyan-500/30', bg: 'bg-cyan-500/5', text: 'text-cyan-400', glow: 'bg-cyan-500/10', dot: 'bg-cyan-400' },
    purple: { border: 'border-purple-500/30', bg: 'bg-purple-500/5', text: 'text-purple-400', glow: 'bg-purple-500/10', dot: 'bg-purple-400' },
    amber: { border: 'border-amber-500/30', bg: 'bg-amber-500/5', text: 'text-amber-400', glow: 'bg-amber-500/10', dot: 'bg-amber-400' },
};

export default function CurriculumPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-6xl w-full relative z-10 mx-auto">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <span>Learn</span><span>/</span><span className="text-cyan-400 font-bold">Curriculum</span>
                    </div>

                    <div className="mb-12 border-b border-white/10 pb-12">
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-6">
                            Engineering Economics{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cobalt">
                                Curriculum.
                            </span>
                        </h1>
                        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                            Self-paced learning tracks for engineering leaders, product managers, and investors.
                            <br />
                            <span className="text-white">
                                Master the frameworks, tools, and metrics that separate gut-feel from data-driven technology leadership.
                            </span>
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-8">
                            <a
                                href="/api/buy/full_curriculum"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg text-white font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity shadow-lg"
                            >
                                Unlock All 60 Modules — $199/yr
                            </a>
                            <span className="text-zinc-600 text-sm">~$3.30/module · Cancel anytime</span>
                        </div>
                    </div>

                    {/* Track Selection Header */}
                    <div className="flex flex-wrap gap-4 mb-16">
                        {tracks.map(track => {
                            const colors = colorMap[track.color];
                            return (
                                <a
                                    key={track.id}
                                    href={`#${track.id}`}
                                    className={`card px-6 py-4 ${colors.border} hover:${colors.bg} transition-all group`}
                                >
                                    <span className="text-2xl mr-3">{track.icon}</span>
                                    <span className={`text-sm font-bold uppercase tracking-widest ${colors.text}`}>
                                        {track.title}
                                    </span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Tracks */}
                    {tracks.map((track, ti) => {
                        const colors = colorMap[track.color];
                        return (
                            <div key={track.id} id={track.id} className="mb-24">
                                <div className={`relative rounded-2xl border ${colors.border} overflow-hidden`}>
                                    {/* Track Header */}
                                    <div className={`${colors.bg} px-8 py-8 border-b ${colors.border}`}>
                                        <div className="flex items-center gap-4 mb-2">
                                            <span className="text-4xl">{track.icon}</span>
                                            <div>
                                                <h2 className="text-3xl font-grotesk font-bold text-white">
                                                    {track.title}
                                                </h2>
                                                <p className="text-zinc-400 mt-1">{track.subtitle}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 mt-4">
                                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                                                {track.modules.length} modules
                                            </span>
                                            <span className="text-xs text-zinc-600">•</span>
                                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                                                {track.modules.reduce((n, m) => n + m.items.length, 0)} topics
                                            </span>
                                            <span className="text-xs text-zinc-600">•</span>
                                            <span className={`text-xs font-mono uppercase tracking-widest ${colors.text}`}>
                                                Self-Paced
                                            </span>
                                        </div>
                                    </div>

                                    {/* Modules */}
                                    <div className="divide-y divide-white/5">
                                        {track.modules.map((mod, mi) => (
                                            <div key={mi} className="px-8 py-6 hover:bg-white/[0.02] transition-colors">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className={`w-8 h-8 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center text-sm font-bold ${colors.text}`}>
                                                        {mi + 1}
                                                    </span>
                                                    <h3 className="text-lg font-bold text-white font-grotesk">
                                                        {mod.name}
                                                    </h3>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ml-11">
                                                    {mod.items.map((item, ii) => {
                                                        const isStatic = !(item as any).isTool && !(item as any).isExternal;
                                                        
                                                        const innerContent = (
                                                            <>
                                                                <span className={`w-1.5 h-1.5 rounded-full ${(item as any).isTool ? colors.dot : isStatic ? 'bg-zinc-700' : 'bg-zinc-600 group-hover:bg-zinc-400'} transition-colors`} />
                                                                <span className={`text-sm ${
                                                                    (item as any).isTool
                                                                        ? `${colors.text} font-bold`
                                                                        : isStatic
                                                                        ? 'text-zinc-500' // Dim the static preview text slightly
                                                                        : 'text-zinc-400 group-hover:text-white'
                                                                } transition-colors`}>
                                                                    {item.label}
                                                                </span>
                                                                {(item as any).isExternal && (
                                                                    <span className="text-zinc-600 text-xs">↗</span>
                                                                )}
                                                            </>
                                                        );

                                                        const className = `group flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                                                            (item as any).isTool
                                                                ? `${colors.bg} border ${colors.border} hover:border-opacity-100`
                                                                : isStatic 
                                                                ? 'pointer-events-none' 
                                                                : 'hover:bg-white/5'
                                                        }`;

                                                        if (isStatic) {
                                                            return <div key={ii} className={className}>{innerContent}</div>;
                                                        }

                                                        return (
                                                            <Link
                                                                key={ii}
                                                                href={(item as any).href || '#'}
                                                                target={(item as any).isExternal ? '_blank' : undefined}
                                                                rel={(item as any).isExternal ? 'noopener noreferrer' : undefined}
                                                                className={className}
                                                            >
                                                                {innerContent}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Track CTA */}
                                    <div className={`${colors.bg} px-8 py-6 border-t ${colors.border}`}>
                                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                            <p className={`text-sm font-bold ${colors.text}`}>
                                                Unlock the complete {track.title} Track — $29
                                            </p>
                                            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                                                <a
                                                    href={`/api/buy/module_${track.id.replace('-', '_')}?moduleId=track_${track.id}`}
                                                    className={`px-6 py-3 rounded-lg border flex-1 text-center md:flex-none ${colors.border} bg-white/5 text-white font-bold text-sm uppercase tracking-widest hover:${colors.bg} transition-all`}
                                                >
                                                    Unlock Track
                                                </a>
                                                <Link
                                                    href="/advisory"
                                                    className={`px-6 py-3 rounded-lg border flex-1 text-center md:flex-none ${colors.border} ${colors.text} font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all`}
                                                >
                                                    Book Advisory
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Pricing Tiers */}
                    <div className="py-20 border-t border-white/10">
                        <h2 className="text-3xl font-grotesk font-bold text-white mb-4 text-center">
                            Choose Your Access Level.
                        </h2>
                        <p className="text-zinc-400 mb-12 max-w-xl mx-auto text-center">
                            Start with a single module or unlock the complete library with certificate.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            {/* Tier 1: Single Module */}
                            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col">
                                <div className="text-xs text-zinc-500 uppercase tracking-widest font-mono mb-3">Starter</div>
                                <div className="text-3xl font-bold text-white mb-1">$29</div>
                                <div className="text-sm text-zinc-500 mb-6">One-time · Lifetime access · 1 module</div>
                                <ul className="space-y-2 mb-6 flex-1">
                                    <li className="flex items-start gap-2 text-sm text-zinc-400"><span className="text-emerald-400 mt-0.5">✓</span> Access to 1 complete module</li>
                                    <li className="flex items-start gap-2 text-sm text-zinc-400"><span className="text-emerald-400 mt-0.5">✓</span> All lessons &amp; assessments</li>
                                    <li className="flex items-start gap-2 text-sm text-zinc-400"><span className="text-emerald-400 mt-0.5">✓</span> Lifetime access</li>
                                </ul>
                                <a href="#tracks" className="block text-center py-3 rounded-lg border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                                    Browse Modules — $29
                                </a>
                            </div>



                            {/* Tier 3: Full Curriculum */}
                            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-6 flex flex-col">
                                <div className="text-xs text-cyan-400 uppercase tracking-widest font-mono mb-3">Complete</div>
                                <div className="text-3xl font-bold text-white mb-1">$199<span className="text-lg text-zinc-500">/yr</span></div>
                                <div className="text-sm text-zinc-500 mb-1">All 60 modules · 14 tracks</div>
                                <div className="text-xs text-cyan-400 mb-6">~$3.30/module · Cancel anytime</div>
                                <ul className="space-y-2 mb-6 flex-1">
                                    <li className="flex items-start gap-2 text-sm text-zinc-400"><span className="text-cyan-400 mt-0.5">✓</span> All 60 modules, 14 tracks</li>
                                    <li className="flex items-start gap-2 text-sm text-zinc-400"><span className="text-cyan-400 mt-0.5">✓</span> 5 diagnostic tool access</li>
                                    <li className="flex items-start gap-2 text-sm text-zinc-400"><span className="text-cyan-400 mt-0.5">✓</span> Certificate of completion</li>
                                    <li className="flex items-start gap-2 text-sm text-zinc-400"><span className="text-cyan-400 mt-0.5">✓</span> New modules as released</li>
                                </ul>
                                <a href="/api/buy/full_curriculum" className="block text-center py-3 rounded-lg border border-cyan-500/30 text-cyan-400 font-bold text-sm uppercase tracking-widest hover:bg-cyan-500/10 transition-all">
                                    Unlock Everything — $199/yr
                                </a>
                            </div>
                        </div>

                        <p className="text-zinc-600 text-xs mt-6 text-center">
                            All plans include access to free tools. Not sure? <Link href="/tools/pdi" className="text-cyan-400 hover:text-cyan-300 underline">Try the free PDI calculator</Link> first.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
