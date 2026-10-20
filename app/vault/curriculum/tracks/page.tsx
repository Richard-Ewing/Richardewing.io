import type { Metadata } from 'next';
import Link from 'next/link';
import TrackAccordion from '@/app/components/TrackAccordion';
import CurriculumDirectoryGrid from '@/app/components/client/CurriculumDirectoryGrid';
import { tracks } from '@/app/lib/curriculum-tracks-ui';
import ShineBorder from '@/app/components/magicui/shine-border';
import BlurIn from '@/app/components/magicui/blur-in';
import { BorderBeam } from '@/app/components/magicui/border-beam';
import { GooglePreferredBadge } from '@/app/components/GooglePreferredBadge';

export const metadata: Metadata = {
    title: 'Executive AI Engineering Curriculum',
    description: 'Master AI economics, R&D capital management, FinOps, and deterministic control across 25 authority curriculum tracks. Professional executive training.',
    keywords: ['AI economics academy', 'AI economics curriculum', 'AI economics training', 'R&D capital management', 'technical debt quantification', 'engineering leadership course', 'cloud finops', 'AI pricing strategy', 'career economics', 'CTO training', 'M&A integration', 'vendor economics', 'developer experience', 'remote team economics', 'ai agent economics', 'leadership training'],
    alternates: { canonical: 'https://www.richardewing.io/vault/curriculum/tracks' },
    openGraph: {
        title: 'The AI Economics Academy',
        description: 'Master the business of building across eighteen authority tracks.',
        url: 'https://www.richardewing.io/vault/curriculum/tracks',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The AI Economics Academy',
        description: 'Master the business of building across eighteen authority tracks.',
        images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
    },
};
const colorMap: Record<string, string> = {
    cyan: 'border-[var(--line,rgba(36,51,43,0.16))] bg-white',
    violet: 'border-[var(--line,rgba(36,51,43,0.16))] bg-white',
    emerald: 'border-[var(--line,rgba(36,51,43,0.16))] bg-white',
    amber: 'border-[var(--line,rgba(36,51,43,0.16))] bg-white',
    orange: 'border-[var(--line,rgba(36,51,43,0.16))] bg-white',
    pink: 'border-[var(--line,rgba(36,51,43,0.16))] bg-white',
    red: 'border-[var(--line,rgba(36,51,43,0.16))] bg-white',
    sky: 'border-[var(--line,rgba(36,51,43,0.16))] bg-white',
    indigo: 'border-[var(--line,rgba(36,51,43,0.16))] bg-white',
    rose: 'border-[var(--line,rgba(36,51,43,0.16))] bg-white',
    teal: 'border-[var(--line,rgba(36,51,43,0.16))] bg-white',
    lime: 'border-[var(--line,rgba(36,51,43,0.16))] bg-white',
    fuchsia: 'border-[var(--line,rgba(36,51,43,0.16))] bg-white',
    blue: 'border-[var(--line,rgba(36,51,43,0.16))] bg-white',
};

const textMap: Record<string, string> = {
    cyan: 'text-[var(--forest,#29473b)] font-semibold',
    violet: 'text-[var(--forest,#29473b)] font-semibold',
    emerald: 'text-[var(--forest,#29473b)] font-semibold',
    amber: 'text-[var(--gold,#b77a35)] font-semibold',
    orange: 'text-[var(--gold,#b77a35)] font-semibold',
    pink: 'text-[var(--rose,#c86d56)] font-semibold',
    red: 'text-[var(--rose,#c86d56)] font-semibold',
    sky: 'text-[var(--forest,#29473b)] font-semibold',
    indigo: 'text-[var(--forest2,#162e26)] font-semibold',
    rose: 'text-[var(--rose,#c86d56)] font-semibold',
    teal: 'text-[var(--forest,#29473b)] font-semibold',
    lime: 'text-[var(--forest,#29473b)] font-semibold',
    fuchsia: 'text-[var(--gold,#b77a35)] font-semibold',
    blue: 'text-[var(--forest2,#162e26)] font-semibold',
};

export default function CurriculumTracksPage() {
    const completedModuleIds: string[] = [];

    return (
        <main className="min-h-screen bg-[var(--paper,#f4f1e9)] pt-24 pb-24 text-[var(--ink,#1e2924)]">
            <div className="page-container max-w-5xl mx-auto px-6">
                <div>
                    
                    {/* Enterprise Executive HERO */}
                    <div className="text-center mb-16 relative">
                        <p className="eyebrow center mb-3">
                            <i /> AI Economics Academy · Sovereign Operating System
                        </p>
                        <h1 className="text-4xl sm:text-6xl font-serif font-medium text-[var(--ink)] tracking-tight mb-6">
                            The AI Economics <em className="italic text-[var(--forest)] font-normal">Academy.</em>
                        </h1>
                        
                        <p className="text-base sm:text-lg text-[var(--muted)] font-sans max-w-3xl mx-auto mb-8 leading-relaxed">
                            This is not a generic course catalog or certificate mill. It is the operational consumption layer of our research and proving grounds: 25 deep curriculum tracks designed to turn empirical telemetry into balance-sheet outcomes.
                        </p>
                        
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6">
                            <div className="text-center bg-white px-6 py-4 rounded-2xl border border-[var(--line)] shadow-sm">
                                <div className="text-3xl font-serif font-bold text-[var(--ink)]">25</div>
                                <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mt-1">Authority Tracks</div>
                            </div>
                            <div className="text-center bg-white px-6 py-4 rounded-2xl border border-[var(--line)] shadow-sm">
                                <div className="text-3xl font-serif font-bold text-[var(--ink)]">303</div>
                                <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mt-1">Deep Modules</div>
                            </div>
                            <div className="text-center bg-[var(--paper2)] px-6 py-4 rounded-2xl border border-[var(--line)] shadow-sm">
                                <div className="text-3xl font-mono font-bold text-[var(--forest2)]">$149</div>
                                <div className="text-xs font-mono uppercase tracking-widest text-[var(--gold)] mt-1 font-semibold">Per Track</div>
                            </div>
                            <div className="text-center bg-[var(--forest2)] text-white px-6 py-4 rounded-2xl border border-[var(--forest)] shadow-sm">
                                <div className="text-3xl font-mono font-bold text-[#d8c7a8]">$999</div>
                                <div className="text-xs font-mono uppercase tracking-widest text-emerald-300 mt-1 font-semibold">All 25 Tracks</div>
                            </div>
                        </div>
                    </div>

                    {/* THE 5-STEP SOVEREIGN ASSET ENGINE PIPELINE */}
                    <div className="mb-16 bg-white border border-[var(--line)] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                            <div>
                                <span className="px-3 py-1 bg-[var(--paper2)] text-[var(--forest)] text-xs font-mono font-bold rounded-full border border-[var(--line)] uppercase tracking-wider">
                                    The Academy Engine Moat
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[var(--ink)] mt-3">
                                    Why This Beats Generic Courseware
                                </h2>
                            </div>
                            <span className="text-xs font-mono text-[var(--gold)] font-semibold">
                                Closed-Loop Sovereign System
                            </span>
                        </div>

                        <p className="text-sm text-[var(--muted)] leading-relaxed font-sans mb-8">
                            Most tech academies sell video courses with static frameworks that disconnect from actual production systems. Our curriculum operates as the direct consumption layer of our 5-step asset pipeline:
                        </p>

                        {/* 5-Step Pipeline Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
                            <div className="p-5 rounded-2xl bg-[var(--paper2)] border border-[var(--line)] flex flex-col justify-between">
                                <div>
                                    <div className="text-[10px] font-mono font-bold text-[var(--gold)] uppercase tracking-widest mb-1">Step 1</div>
                                    <h3 className="text-sm font-serif font-bold text-[var(--ink)] mb-1">Research</h3>
                                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                                        Empirical industry investigations &amp; live failure telemetry across CIO.com and Built In.
                                    </p>
                                </div>
                                <div className="mt-3 text-[10px] font-mono font-bold text-[var(--forest)]">&rarr; 174+ Works</div>
                            </div>

                            <div className="p-5 rounded-2xl bg-[var(--paper2)] border border-[var(--line)] flex flex-col justify-between">
                                <div>
                                    <div className="text-[10px] font-mono font-bold text-[var(--gold)] uppercase tracking-widest mb-1">Step 2</div>
                                    <h3 className="text-sm font-serif font-bold text-[var(--ink)] mb-1">Concept</h3>
                                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                                        130+ atomic economic and architectural truths linked in an ontological knowledge graph.
                                    </p>
                                </div>
                                <div className="mt-3 text-[10px] font-mono font-bold text-[var(--forest)]">&rarr; Graph Mesh</div>
                            </div>

                            <div className="p-5 rounded-2xl bg-[var(--paper2)] border border-[var(--line)] flex flex-col justify-between">
                                <div>
                                    <div className="text-[10px] font-mono font-bold text-[var(--gold)] uppercase tracking-widest mb-1">Step 3</div>
                                    <h3 className="text-sm font-serif font-bold text-[var(--ink)] mb-1">Framework</h3>
                                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                                        Rigorous operating models: Inference Dividend, Systems Governor, and PDI Formulas.
                                    </p>
                                </div>
                                <div className="mt-3 text-[10px] font-mono font-bold text-[var(--forest)]">&rarr; Blueprints</div>
                            </div>

                            <div className="p-5 rounded-2xl bg-[var(--paper2)] border border-[var(--line)] flex flex-col justify-between">
                                <div>
                                    <div className="text-[10px] font-mono font-bold text-[var(--gold)] uppercase tracking-widest mb-1">Step 4</div>
                                    <h3 className="text-sm font-serif font-bold text-[var(--ink)] mb-1">Diagnostic</h3>
                                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                                        Interactive proving grounds and ROI calculators that stress-test architectures.
                                    </p>
                                </div>
                                <Link href="/tools" className="mt-3 text-[10px] font-mono font-bold text-[var(--forest)] hover:underline flex items-center gap-1">
                                    &rarr; 25 Diagnostics
                                </Link>
                            </div>

                            <div className="p-5 rounded-2xl bg-[var(--paper2)] border border-[var(--line)] flex flex-col justify-between">
                                <div>
                                    <div className="text-[10px] font-mono font-bold text-[var(--gold)] uppercase tracking-widest mb-1">Step 5</div>
                                    <h3 className="text-sm font-serif font-bold text-[var(--ink)] mb-1">Implementation</h3>
                                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                                        Live runtime execution (Exogram proxy layers) and executive advisory alignment.
                                    </p>
                                </div>
                                <Link href="/vault/blueprints" className="mt-3 text-[10px] font-mono font-bold text-[var(--forest)] hover:underline flex items-center gap-1">
                                    &rarr; Production Blueprints
                                </Link>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-600">
                            <span>Every module in this academy connects directly back to this operational spine.</span>
                            <Link href="/concepts" className="text-[var(--gold)] font-bold hover:underline">
                                Explore Concepts Directory &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* ADVISORY UPSELL */}
                    <div className="mb-16 bg-[var(--forest2)] text-white rounded-3xl p-8 sm:p-10 border border-[var(--forest)] shadow-sm">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1 space-y-3">
                                <p className="eyebrow text-[#d8c7a8]">
                                    <i /> Enterprise Advisory Alignment
                                </p>
                                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white">
                                    Need organizational implementation?
                                </h3>
                                <p className="text-sm text-zinc-300 leading-relaxed max-w-xl">
                                    The curriculum gives your team the frameworks. Advisory ensures they deploy them. I integrate these economic models directly into your SDLC through executive coaching and bi-weekly operations alignment.
                                </p>
                                <div className="pt-2">
                                    <Link href="/services" className="button button-gold">
                                        Explore Executive Advisory ↗
                                    </Link>
                                </div>
                            </div>
                            <div className="md:w-64 w-full flex flex-col items-center justify-center bg-white/5 rounded-2xl border border-white/10 p-6 text-center">
                                <div className="text-xs font-mono text-[#d8c7a8] uppercase tracking-wider mb-1">Strategic Retainer</div>
                                <div className="text-2xl font-serif font-bold text-white mb-1">Advisory</div>
                                <div className="text-[11px] font-mono text-zinc-400">Fixed-Fee · 3-Week Sprints</div>
                            </div>
                        </div>
                    </div>

                    <CurriculumDirectoryGrid>
                        {/* 1. Engineering Economics Foundations (Tracks 1-4) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-[var(--line)] flex-grow"></div>
                                <h2 className="text-xs font-semibold font-mono text-[var(--forest)] uppercase tracking-widest font-bold">Engineering Economics Foundations</h2>
                                <div className="h-px bg-[var(--line)] flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(0, 4).map((track, i) => (
                                    <TrackAccordion key={`core-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>

                        {/* 2. AI, Cloud & Agent Economics (Tracks 5-11, 19-21) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-[var(--line)] flex-grow"></div>
                                <h2 className="text-xs font-semibold font-mono text-[var(--forest)] uppercase tracking-widest font-bold">AI, Cloud &amp; Agent Economics</h2>
                                <div className="h-px bg-[var(--line)] flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(4, 11).map((track, i) => (
                                    <TrackAccordion key={`ai-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                                {/* AI Agent Tracks 19-21 */}
                                {tracks.slice(18, 21).map((track, i) => (
                                    <TrackAccordion key={`agent-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                                {/* AI Economics & Probabilistic Eng Tracks 24, 25 */}
                                {tracks[23] && <TrackAccordion key="ai-economics" track={tracks[23]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {tracks[24] && <TrackAccordion key="probabilistic-eng" track={tracks[24]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                            </div>
                        </div>

                        {/* 3. Career Capital & Leadership (Tracks 12-15, 17, 22) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-[var(--line)] flex-grow"></div>
                                <h2 className="text-xs font-semibold font-mono text-[var(--gold)] uppercase tracking-widest font-bold">Career Capital &amp; Leadership</h2>
                                <div className="h-px bg-[var(--line)] flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(11, 14).map((track, i) => (
                                    <TrackAccordion key={`career-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                                {/* Remote Teams Track 15 */}
                                {tracks[14] && <TrackAccordion key="career-remote" track={tracks[14]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* DX Economics Track 17 */}
                                {tracks[16] && <TrackAccordion key="career-dx" track={tracks[16]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Strategic Leadership Track 22 */}
                                {tracks[21] && <TrackAccordion key="career-leadership" track={tracks[21]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Startup Economics Track 26 */}
                                {tracks[25] && <TrackAccordion key="startup-economics" track={tracks[25]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                            </div>
                        </div>

                        {/* 4. Executive & Board Economics (Selected executive tracks + 16, 18, 23) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-[var(--line)] flex-grow"></div>
                                <h2 className="text-xs font-semibold font-mono text-[var(--forest2)] uppercase tracking-widest font-bold">Executive &amp; Board Economics</h2>
                                <div className="h-px bg-[var(--line)] flex-grow"></div>
                            </div>
                            <p className="text-sm text-[var(--muted)] font-sans mb-8 text-center italic">Board reporting, EBITDA translation, M&amp;A leadership, and technical debt at the balance sheet level &mdash; curated for senior leaders, CTOs, and CFOs.</p>
                            <div className="space-y-6">
                                {/* Track 4: Capstone & Applied Practice */}
                                {tracks[3] && <TrackAccordion key="exec-capstone" track={tracks[3]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Track 9: Tech Debt as Financial Liability */}
                                {tracks[8] && <TrackAccordion key="exec-techdebt" track={tracks[8]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Track 10: AI Due Diligence */}
                                {tracks[9] && <TrackAccordion key="exec-dd" track={tracks[9]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Track 13: Engineering-to-Executive */}
                                {tracks[12] && <TrackAccordion key="exec-e2e" track={tracks[12]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Track 16: M&A Integration */}
                                {tracks[15] && <TrackAccordion key="exec-ma" track={tracks[15]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Track 18: Vendor & Contract Economics */}
                                {tracks[17] && <TrackAccordion key="exec-vendor" track={tracks[17]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Track 23: Executive Presence & Board Leadership */}
                                {tracks[22] && <TrackAccordion key="exec-presence" track={tracks[22]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Track 27: Boardroom AI Governance */}
                                {tracks[26] && <TrackAccordion key="exec-boardroom-ai" track={tracks[26]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                            </div>
                        </div>
                    </CurriculumDirectoryGrid>

                    {/* BOTTOM CTA */}
                    <div className="mt-20 pt-16 border-t border-[var(--line)]">
                        <div className="rounded-3xl bg-[var(--paper2)] p-10 sm:p-16 border border-[var(--line)] text-center relative overflow-hidden shadow-sm">
                            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[var(--ink)] mb-4">
                                Stop Guessing at ROI. <em className="italic text-[var(--forest)] font-normal">Start Proving It.</em>
                            </h2>
                            <p className="text-base text-[var(--muted)] max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
                                Every module teaches you to connect engineering velocity to verifiable business outcomes. $149 per track. $999 for complete curriculum access.
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Link href="/services" className="button button-gold">
                                    Explore Executive Advisory ↗
                                </Link>
                                <Link href="/vault" className="button button-outline">
                                    Access Full Curriculum Vault ↗
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Google Preferred Source Official Credential */}
                    <GooglePreferredBadge variant="card" className="mt-12" />

                </div>
            </div>
        </main>
    );
}
