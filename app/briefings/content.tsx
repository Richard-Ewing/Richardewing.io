'use client';

import Link from 'next/link';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import { LeadMagnetCTA } from '../components/LeadMagnetCTA';

interface BriefCardProps {
    number: string;
    title: string;
    subtitle: string;
    href: string;
    isNew?: boolean;
    date: string;
}

const BriefCard = ({ number, title, subtitle, href, isNew, date }: BriefCardProps) => (
    <a href={href} className="block group h-full">
        <div className="card h-full p-6 hover:border-purple-500/50 transition-all relative overflow-hidden">
            {isNew && (
                <div className="absolute top-0 right-0 bg-purple-500/20 text-purple-900 font-extrabold font-semibold px-3 py-1 text-xs font-bold font-medium font-bold uppercase tracking-widest rounded-bl-lg border-l border-b border-purple-500/30">
                    New
                </div>
            )}
            <div className="text-xs font-bold text-zinc-950 mb-3 font-mono uppercase tracking-widest">{number} · {date}</div>
            <h3 className="font-semibold text-lg text-zinc-950 mb-2 group-hover:text-purple-900 font-extrabold font-semibold transition-colors font-grotesk">
                {title}
            </h3>
            <p className="text-zinc-950 font-bold text-sm font-semibold leading-relaxed">
                {subtitle}
            </p>
        </div>
    </a>
);

export default function BriefingsPage() {
    const briefs = [
        { number: '16', title: 'Meta Muse Code vs. Cursor vs. Antigravity (Multi-Agent Isolation)', subtitle: 'Why Git worktree file isolation fails at the runtime layer and how autonomous verification loops make failure cheap.', href: 'https://builtin.com/articles/meta-muse-code-comparison', isNew: true, date: 'Aug 2026' },
        { number: '15', title: 'How Context Engines Power AI Career Intelligence', subtitle: 'How structured schemas, metadata retention, and relational databases replace stateless prompt wrappers in CareerWin.ai.', href: 'https://theaieconomist.beehiiv.com/p/how-context-engines-power-ai-career-intelligence', isNew: true, date: 'Aug 2026' },
        { number: '14', title: 'Leading Product Strategy When Build Costs Approach Zero', subtitle: 'Why zero software creation cost shifts PM from backlog velocity to managing uncertainty and preserving unit margins.', href: 'https://www.linkedin.com/pulse/ai-economist-leading-product-strategy-when-build-costs-richard-ewing-x5bic', isNew: true, date: 'Aug 2026' },
        { number: '13', title: 'Why Static Resumes Are Dead (Career Operating Systems)', subtitle: 'How dynamic talent intelligence and CareerWin OS replace flat PDF resumes in an AI-screened hiring market.', href: 'https://www.linkedin.com/pulse/why-static-resumes-dead-shift-career-operating-systems-richard-ewing-iui1c', isNew: true, date: 'Aug 2026' },
        { number: '12', title: 'I Used AI to Build My Startup (Cursor vs. Google Antigravity)', subtitle: 'Why unconstrained AI coding tools fail outside sandboxes and how static root rules build reliable software.', href: 'https://builtin.com/articles/ai-coding-tools-practical-evaluation', isNew: true, date: 'Aug 2026' },
        { number: '11', title: 'Real Innovation Requires Deleting Code', subtitle: 'An expert analysis of how to audit for zombie features and execute the Sunset Protocol.', href: 'https://builtin.com/articles/innovation-requires-deleting-code', isNew: false, date: 'Feb 2026' },
        { number: '10', title: 'The Audit Interview Scorecard', subtitle: 'When AI writes the code, what are employers actually hiring for? The 4 Dimensions of Engineering Judgment.', href: 'https://builtin.com/articles/audit-interview-scorecard', isNew: true, date: 'Feb 2026' },
        { number: '09', title: 'The 3 Financial Metrics Every PM Needs', subtitle: 'Selected for the Mind the Product Newsletter.', href: 'https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/', isNew: true, date: 'Feb 2026' },
        { number: '08', title: 'Reimagining the Coding Interview', subtitle: 'AI can generate code. The scarce skill is catching what AI gets wrong.', href: 'https://builtin.com/articles/reimagining-coding-interview', isNew: false, date: 'Feb 2026' },
        { number: '07', title: 'The AI Product Business Test', subtitle: 'Validating AI unit economics before writing code.', href: 'https://builtin.com/articles/ai-product-business-test', isNew: false, date: 'Jan 2026' },
        { number: '01', title: 'The AI Volatility Tax', subtitle: 'Why AI features are destroying your gross margins.', href: '#', date: 'Feb 2026' },
        { number: '02', title: 'The Senior Ceiling', subtitle: 'Breaking through the IC-to-Executive transition.', href: '#', date: 'Feb 2026' },
        { number: '03', title: 'Financial Conway\'s Law', subtitle: 'Why architecture mirrors your funding model.', href: '#', date: 'Jan 2026' },
    ];

    return (
        <div className="max-w-4xl w-full relative z-10 mx-auto">
            {/* Background FX */}
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                <span>Signal</span><span>/</span><span className="text-zinc-950 font-bold">Briefings</span>
            </div>

            <ScrollReveal>
                <div className="mb-12">
                    <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-4 font-mono">
                        Monthly Newsletter
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6 font-grotesk">
                        Executive<br />
                        <span className="text-purple-900 font-extrabold font-semibold">Briefings.</span>
                    </h1>
                    <p className="text-zinc-950 font-bold text-lg mb-8 max-w-2xl">
                        <strong>The AI Economist</strong> - AI Economics applied to AI.<br/><br/>
                        Dense, actionable intelligence for leaders who don't have time for
                        "thought leadership." <span className="text-zinc-900">Read time: 5-10 minutes each.</span>
                    </p>

                    <a
                        href="https://theaieconomist.beehiiv.com/subscribe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/20"
                    >
                        Subscribe on Beehiiv →
                    </a>
                </div>
            </ScrollReveal>

            {/* Brief Cards - Grid */}
            <ScrollReveal delay={100}>
                <h2 className="text-2xl font-bold text-zinc-950 mb-8 font-grotesk">Recent Briefs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                    {briefs.map((brief, i) => (
                        <BriefCard key={i} {...brief} />
                    ))}
                </div>
            </ScrollReveal>

            {/* Tool CTA */}
            <ScrollReveal delay={150}>
                <div className="mb-20">
                    <div className="card-featured p-8 md:p-10 border-purple-500/50 hover:border-purple-500/80 transition-all">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div>
                                <div className="text-xs font-bold text-zinc-900 font-bold uppercase mb-2 font-mono">Interactive Tool</div>
                                <h3 className="text-2xl font-bold text-zinc-950 mb-2 font-grotesk">
                                    AI Unit Economics Benchmark™
                                </h3>
                                <p className="text-zinc-950 font-bold text-sm font-semibold max-w-md">
                                    Calculate if your AI features will scale or collapse before you write a single line of code.
                                </p>
                            </div>
                            <Link
                                href="/tools/aueb"
                                className="px-6 py-3 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-500 transition-colors whitespace-nowrap shadow-sm"
                            >
                                Launch Tool →
                            </Link>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Subscribe CTA */}
            <ScrollReveal delay={200}>
                <div className="mb-12 max-w-2xl mx-auto text-center">
                    <LeadMagnetCTA variant="full" />
                </div>
            </ScrollReveal>

            {/* Archive link */}
            <ScrollReveal delay={300}>
                <div className="text-center pb-20">
                    <p className="text-zinc-950 text-sm font-semibold mb-4">
                        Full archive on Beehiiv:
                    </p>
                    <a
                        href="https://theaieconomist.beehiiv.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-900 font-extrabold font-semibold hover:text-purple-900 font-extrabold font-semibold transition-colors border-b border-purple-500/30 hover:border-purple-400"
                    >
                        theaieconomist.beehiiv.com →
                    </a>
                </div>
            </ScrollReveal>
        </div>
    );
}
