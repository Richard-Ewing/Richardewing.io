import type { Metadata } from 'next';
import Link from 'next/link';
import { Activity, Clock, Users, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';

export const metadata: Metadata = {
    title: 'Operational AI Governance for COOs',
    description: 'Operational risk frameworks, customer support agent reliability, and workflow coordination audits for Chief Operating Officers and VPs of Operations.',
    keywords: [
        'COO AI operations',
        'AI workflow reliability',
        'customer support AI failure',
        'operations management AI drift',
        'vendor sprawl tech ops',
        'agent coordination debt',
        'VP Operations AI governance'
    ],
    alternates: { canonical: 'https://www.richardewing.io/for-coos' },
    openGraph: {
        title: 'For COOs & Operations Executives - Workflow Reliability & AI Governance',
        description: 'Stop operational gridlock, silent agent failures, and customer support queue blowouts.',
        url: 'https://www.richardewing.io/for-coos',
        type: 'website'
    },
};

const cooQuestions = [
    {
        question: 'Why are our customer support queues backed up when we spent $250k on automated AI agents?',
        answer: 'When models hallucinate answers or encounter ambiguous customer requests, they quietly stall or route tickets into unmonitored escalation queues. Human frontline reps end up spending more time un-tangling bot mistakes than answering customers directly.',
        metric: 'Agentic Drift Matrix',
        link: '/tools/agentic-drift-matrix'
    },
    {
        question: 'Why are managers spending half their work week triaging automated work rather than running teams?',
        answer: 'Synthetic volume inflation. Automated AI tools generate drafts, pull requests, and summaries in seconds, but human managers bear the air-traffic control tax of verifying, auditing, and fixing every synthetic output.',
        metric: 'Code Review Bottleneck Calculator',
        link: '/tools/code-review-bottleneck-calc'
    },
    {
        question: 'How many unapproved AI software tools are our employees secretly using with corporate data?',
        answer: 'Over 68% of knowledge workers report using personal AI subscriptions to bypass slow corporate IT policies, copying sensitive customer data into consumer web apps with zero retention controls.',
        metric: 'Shadow AI Auditor',
        link: '/tools/shadow-ai'
    },
    {
        question: 'Did our AI tooling actually save employee time, or did it just shift work from one department to another?',
        answer: 'Most AI implementations create phantom productivity: one team saves 10 hours writing code or copy, but downstream QA, legal, or customer support spends 15 hours fixing subtle runtime errors.',
        metric: 'FTE Displacement & Yield Audit',
        link: '/tools/fte-displacement'
    },
    {
        question: 'What happens when an automated model update quietly breaks our daily business workflows?',
        answer: 'Silent prompt regressions occur when foundation model providers update weights, altering how instructions are interpreted. Without deterministic boundary testing, business processes silently fail for weeks before detection.',
        metric: 'Autonomous Agent Readiness (AARI)',
        link: '/tools/aari'
    }
];

export default function ForCOOsPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Operational AI Governance & Workflow Audits for COOs',
        provider: { '@type': 'Person', name: 'Richard Ewing' },
        description: 'Audits and operational reliability frameworks for Chief Operating Officers, VPs of Operations, and Customer Support Directors.',
        url: 'https://www.richardewing.io/for-coos'
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-blue-900 uppercase tracking-widest mb-4">
                            <Activity className="w-3.5 h-3.5 text-blue-600" />
                            For Chief Operating Officers &amp; VPs of Operations
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6 tracking-tight">
                            Your Vendors Promised Autonomy.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Your Floor Has Coordination Debt.
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-700 max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
                            When AI pilots fail, they don&apos;t explode; they silently create work. Customer support queues back up, managers become air-traffic controllers, and broken workflows hide behind impressive demo dashboards.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link 
                                href="/services" 
                                className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
                            >
                                Schedule Operations Briefing &rarr;
                            </Link>
                            <Link 
                                href="/tools/agentic-drift-matrix" 
                                className="px-8 py-4 rounded-xl border border-zinc-300 text-zinc-900 font-bold hover:bg-zinc-100 transition-colors"
                            >
                                Run Drift Audit Free &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* Operational Reality Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4 text-blue-700">
                                <Clock className="w-5 h-5" />
                            </div>
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">The Air-Traffic Control Tax</h2>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                AI agents produce high-volume work in seconds, but human managers burn hours reviewing, auditing, and fixing subtle hallucinations before customers see them.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4 text-blue-700">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">Silent Workflow Regressions</h2>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                Foundation models change weekly. When an API update causes automated routines to drop edge-case logic, operational bottlenecks remain invisible until customers complain.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4 text-blue-700">
                                <Users className="w-5 h-5" />
                            </div>
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">Shadow Tool Sprawl</h2>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                Different departments license overlapping AI tools without oversight. You pay for 15 disparate subscriptions while sensitive customer data leaks across fragmented vendors.
                            </p>
                        </div>
                    </div>

                    {/* Questions COOs Must Ask */}
                    <div className="mb-16">
                        <div className="text-center mb-10">
                            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">
                                Operational Diagnostic Checklist
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                                Five Questions Operations Leaders Must Interrogate Across All Automated Workflows
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {cooQuestions.map((item, i) => (
                                <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:border-blue-300 transition-colors">
                                    <h3 className="text-lg font-bold text-zinc-950 mb-2">&ldquo;{item.question}&rdquo;</h3>
                                    <p className="text-sm text-zinc-700 mb-4 leading-relaxed font-medium">{item.answer}</p>
                                    <Link 
                                        href={item.link} 
                                        className="text-xs font-mono font-bold text-blue-700 hover:text-blue-900 uppercase tracking-wider inline-flex items-center gap-1"
                                    >
                                        Benchmark with {item.metric} &rarr;
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Operational Research Corpus */}
                    <div className="mb-16">
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                            <div>
                                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                                    Primary Source Intelligence &bull; Operational Systems
                                </span>
                                <h2 className="text-2xl font-grotesk font-bold text-zinc-950">
                                    Operational Research &amp; Field Studies
                                </h2>
                            </div>
                            <Link 
                                href="/research/publications"
                                className="text-xs font-mono font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 uppercase tracking-wider"
                            >
                                Explore Full Corpus ({RESEARCH_CORPUS.length} Works) &rarr;
                            </Link>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {RESEARCH_CORPUS.filter(art => 
                                art.domain === 'AI Governance' || 
                                art.title.includes('Review') || 
                                art.title.includes('Operational') || 
                                art.title.includes('Drift')
                            ).slice(0, 4).map((pub) => (
                                <a
                                    key={pub.id}
                                    href={pub.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-5 rounded-2xl border border-blue-200/80 bg-white hover:border-blue-400 hover:bg-blue-50/40 transition flex flex-col justify-between group shadow-sm"
                                >
                                    <div>
                                        <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-2">
                                            <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 uppercase">{pub.publisher}</span>
                                            <span className="text-zinc-500">{pub.date}</span>
                                        </div>
                                        <h3 className="text-base font-bold text-zinc-950 group-hover:text-blue-900 transition-colors mb-2 leading-snug">
                                            {pub.title}
                                        </h3>
                                        <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2">
                                            {pub.thesis}
                                        </p>
                                    </div>
                                    <div className="pt-3 mt-3 border-t border-zinc-200 text-[11px] font-mono text-blue-700 font-bold flex items-center gap-1">
                                        Read Operational Field Study &rarr;
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* COO Operational Briefing Callout */}
                    <div className="rounded-3xl border border-blue-300 bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/90 p-8 sm:p-12 text-center shadow-md">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">
                            Restore Operational Velocity &amp; SLA Integrity
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
                            We audit end-to-end workflow handoffs, eliminate coordination debt between human managers and automated agents, and install deterministic guardrails that prevent customer support breakdowns.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link 
                                href="/services" 
                                className="px-10 py-5 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 transition-all shadow-md active:scale-95"
                            >
                                Schedule Operations Review &rarr;
                            </Link>
                            <Link 
                                href="/tools" 
                                className="px-10 py-5 rounded-xl border border-zinc-300 bg-white text-zinc-900 font-bold text-base hover:bg-zinc-50 transition-colors"
                            >
                                Explore All Operational Tools &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
