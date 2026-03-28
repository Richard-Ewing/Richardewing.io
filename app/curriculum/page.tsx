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
import { ChevronDown, PlayCircle, Lock } from 'lucide-react';

const trackMeta = [
    { id: 'cto', title: 'CTO / Engineering Leader', icon: '⚙️', color: 'cyan', subtitle: 'Master the economics of engineering organizations', productId: 'module_cto' },
    { id: 'pm', title: 'Product Manager / CPO', icon: '📊', color: 'purple', subtitle: 'Think like a Product Economist, not a feature factory', productId: 'module_pm' },
    { id: 'investor', title: 'PE / VC / Investor', icon: '💰', color: 'amber', subtitle: 'Technical due diligence for portfolio value creation', productId: 'module_investor' },
    { id: 'ai-enterprise', title: 'AI & Enterprise Architect', icon: '🤖', color: 'purple', subtitle: 'Master the economics of AI operations', productId: 'module_ai_enterprise' },
    { id: 'devops-economics', title: 'Platform Engineering & DevOps', icon: '🚀', color: 'cyan', subtitle: 'Master CI/CD pipeline economics and observability ROI', productId: 'module_devops' },
    { id: 'product-economics', title: 'Product Management Economics', icon: '📈', color: 'purple', subtitle: 'Feature prioritization, pricing strategy, and churn economics', productId: 'module_product_mgmt' },
    { id: 'security-economics', title: 'Security & Compliance Economics', icon: '🔐', color: 'cyan', subtitle: 'Breach cost modeling, compliance ROI, and cyber insurance analysis', productId: 'module_security' },
    { id: 'data-economics', title: 'Data & Analytics Economics', icon: '🗄️', color: 'amber', subtitle: 'Data warehouse costs, quality ROI, and ML pipeline economics', productId: 'module_data' },
    { id: 'engineering-leadership', title: 'Engineering Leadership', icon: '👥', color: 'purple', subtitle: 'CTO economics, headcount planning, and talent retention', productId: 'module_leadership' },
    { id: 'startup-economics', title: 'Startup Economics', icon: '🚀', color: 'cyan', subtitle: 'Runway, burn rate, MVP economics, and fundraising', productId: 'module_startup' },
];

const tracks = trackMeta.map(meta => {
    const trackModules = Object.entries(modules)
        .filter(([key]) => key.startsWith(`${meta.id}/`))
        .map(([key, mod]) => ({
            name: `${mod.moduleId}: ${mod.title}`,
            items: mod.lessons.map(lesson => ({
                label: lesson.title,
                href: `/vault/curriculum/tracks/${key}`,
                isStatic: false
            }))
        }));
    
    return { ...meta, modules: trackModules };
});

const colorMap: Record<string, { border: string; bg: string; text: string; glow: string; dot: string; fill: string }> = {
    cyan: { border: 'border-cyan-500/30', fill: 'bg-cyan-500', bg: 'bg-cyan-500/5', text: 'text-cyan-400', glow: 'bg-cyan-500/10', dot: 'bg-cyan-400' },
    purple: { border: 'border-purple-500/30', fill: 'bg-purple-500', bg: 'bg-purple-500/5', text: 'text-purple-400', glow: 'bg-purple-500/10', dot: 'bg-purple-400' },
    amber: { border: 'border-amber-500/30', fill: 'bg-amber-500', bg: 'bg-amber-500/5', text: 'text-amber-400', glow: 'bg-amber-500/10', dot: 'bg-amber-400' },
};

export default function CurriculumPage() {
    return (
        <main className="pt-20">
            <div className="page-container relative">
                {/* Visual Header */}
                <div className="max-w-7xl relative mx-auto mb-20 text-center">
                    <div className="inline-flex items-center gap-2 text-[10px] font-mono text-cyan-400 uppercase tracking-widest px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
                        LMS Curriculum Database
                    </div>
                    <h1 className="text-5xl md:text-7xl font-grotesk font-bold text-white mb-6">
                        The Master Data Engine for <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            Engineering Leaders.
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
                        Stop guessing about technical debt, AI strategy, and R&D capital efficiency. 
                        Self-paced, high-fidelity curriculum tracks designed for CTOs, CPOs, and Investors.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="/api/buy/full_curriculum" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors shadow-xl rounded-lg flex items-center gap-2">
                            Unlock Complete Curriculum — $199/yr
                        </a>
                        <Link href="#library" className="px-8 py-4 rounded-lg border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-colors">
                            Browse Free Previews
                        </Link>
                    </div>
                </div>

                {/* The Library (Course Grid) */}
                <div id="library" className="max-w-6xl w-full relative z-10 mx-auto scroll-mt-32">
                    
                    {/* Track Quick Navigation */}
                    <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-8">
                        {tracks.map(track => {
                            const colors = colorMap[track.color];
                            return (
                                <a key={track.id} href={`#track-${track.id}`} className={`px-4 py-2 text-xs font-mono uppercase tracking-widest rounded-lg border ${colors.border} ${colors.bg} ${colors.text} hover:opacity-80 transition-opacity`}>
                                    {track.icon} {track.title}
                                </a>
                            );
                        })}
                    </div>

                    <div className="space-y-6">
                        {tracks.map((track, ti) => {
                            const colors = colorMap[track.color];
                            const isFirst = ti === 0;
                            const totalModules = track.modules.length;
                            const totalLessons = track.modules.reduce((n, m) => n + m.items.length, 0);

                            return (
                                <details 
                                    key={track.id} 
                                    id={`track-${track.id}`} 
                                    className={`group bg-zinc-950 border ${colors.border} rounded-2xl overflow-hidden scroll-mt-24`} 
                                    open={isFirst}
                                >
                                    <summary className={`px-8 py-6 cursor-pointer hover:bg-white/[0.02] flex items-center justify-between gap-6 transition-colors select-none`}>
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-lg">
                                                {track.icon}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <h2 className="text-2xl font-grotesk font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                        {track.title}
                                                    </h2>
                                                    {track.id === 'cto' && (
                                                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">Free Primer</span>
                                                    )}
                                                </div>
                                                <p className="text-zinc-500 text-sm">{track.subtitle}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-6">
                                            <div className="hidden md:flex flex-col items-end text-right">
                                                <span className={`text-[10px] font-mono uppercase tracking-widest ${colors.text}`}>
                                                    {totalModules} Modules · {totalLessons} Lessons
                                                </span>
                                                <span className="text-zinc-600 text-xs">Self-paced track</span>
                                            </div>
                                            <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-open:rotate-180 transition-transform">
                                                <ChevronDown className="w-5 h-5 text-zinc-400" />
                                            </div>
                                        </div>
                                    </summary>

                                    {/* Collapsible Course Content Grid */}
                                    <div className="border-t border-white/5 bg-zinc-900/30 p-8">
                                        
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            {track.modules.map((mod, mi) => (
                                                <div key={mi} className={`rounded-xl border border-white/10 bg-black/40 p-6 flex flex-col hover:border-white/20 transition-all shadow-xl`}>
                                                    <div className="flex items-start justify-between gap-4 mb-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center text-lg font-bold ${colors.text}`}>
                                                                {mi + 1}
                                                            </div>
                                                            <h3 className="text-lg font-bold text-white font-grotesk leading-tight max-w-[280px]">
                                                                {mod.name.split(':')[1]?.trim() || mod.name}
                                                            </h3>
                                                        </div>
                                                        {(track.id === 'cto' && mi === 0) ? (
                                                            <span className="text-[9px] font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 flex items-center gap-1 rounded uppercase"><PlayCircle className="w-3 h-3"/> Free</span>
                                                        ) : (
                                                            <span className="text-[9px] font-mono text-zinc-500 border border-zinc-800 bg-zinc-900 px-2 flex items-center gap-1 rounded uppercase"><Lock className="w-3 h-3"/> Pro</span>
                                                        )}
                                                    </div>

                                                    <div className="flex-1 space-y-2 mb-6 ml-13">
                                                        {mod.items.map((item, ii) => {
                                                            const isStatic = !(item as any).href;
                                                            return (
                                                                <div key={ii} className="flex items-center gap-3 group/item">
                                                                    <div className={`w-1.5 h-1.5 rounded-full ${isStatic ? 'bg-zinc-800' : 'bg-zinc-600'} group-hover/item:bg-white`} />
                                                                    <span className={`text-sm tracking-wide ${isStatic ? 'text-zinc-600' : 'text-zinc-400'}`}>{item.label}</span>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                    
                                                    <Link 
                                                        href={mod.items[0]?.href || '#'}
                                                        className={`mt-auto w-full py-3 rounded-lg border ${colors.border} ${colors.bg} text-center text-xs font-bold font-mono tracking-widest ${colors.text} uppercase hover:brightness-125 transition-all`}
                                                    >
                                                        {(track.id === 'cto' && mi === 0) ? 'Start Free Preview' : 'Preview Syllabus'}
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Purchase Bar for the Track */}
                                        <div className="mt-8 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                                            <div>
                                                <h4 className="text-lg font-bold text-white font-grotesk mb-1">Get the complete {track.title} Track</h4>
                                                <p className="text-zinc-500 text-sm">One-time payment. Lifetime access. Includes updates.</p>
                                            </div>
                                            <a 
                                                href={`/api/buy/${track.productId}?moduleId=${track.id}`}
                                                className={`px-8 py-3 rounded-lg ${colors.fill} text-white font-bold uppercase tracking-widest text-sm shadow-xl hover:opacity-90 transition-opacity whitespace-nowrap`}
                                            >
                                                Buy Track — $29
                                            </a>
                                        </div>

                                    </div>
                                </details>
                            );
                        })}
                    </div>

                </div>
            </div>
        </main>
    );
}
