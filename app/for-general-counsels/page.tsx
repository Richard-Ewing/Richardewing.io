import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Scale, FileCheck, ArrowRight, Lock, AlertTriangle } from 'lucide-react';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';

export const metadata: Metadata = {
    title: 'Enterprise AI Governance & Liability Defense for General Counsels',
    description: 'Fiduciary AI risk mitigation, SOX 404 agent signing boundaries, and EU AI Act compliance frameworks for Chief Legal Officers and General Counsels.',
    keywords: [
        'General Counsel AI governance',
        'Chief Legal Officer AI risk',
        'SOX 404 autonomous agent compliance',
        'EU AI Act corporate compliance',
        'AI agent liability legal defense',
        'corporate AI safe harbor',
        'AI copyright cleanroom'
    ],
    alternates: { canonical: 'https://www.richardewing.io/for-general-counsels' },
    openGraph: {
        title: 'For General Counsels & Corporate Legal - Enterprise AI Governance',
        description: 'Establish legally defensible signing limits, SOX 404 audit trails, and agent containment.',
        url: 'https://www.richardewing.io/for-general-counsels',
        type: 'website'
    },
};

const legalQuestions = [
    {
        question: 'Who is legally liable when an autonomous AI agent makes a binding financial or contractual commitment?',
        answer: 'Under corporate agency law, automated systems acting with apparent authority bind the corporation. Without decoupled authorization boundaries, AI agents approving price discounts or altered terms create enforceable liabilities.',
        metric: 'The Transaction That Succeeds Framework',
        link: '/articles/frameworks/the-transaction-that-succeeds'
    },
    {
        question: 'How do autonomous code-generating agents impact our SOX 404 financial reporting controls?',
        answer: 'Section 404 mandates strict segregation of duties. When developers deploy AI agents that write and merge code into production financial software without independent human review, internal control attestations fail.',
        metric: 'Board AI Risk Scorecard',
        link: '/tools/board-risk-scorecard'
    },
    {
        question: 'What is our exposure under the EU AI Act enforcement penalties starting in 2026?',
        answer: 'Fines reach up to 35M EUR or 7% of global annual turnover. Companies must classify AI risk tiers, maintain continuous auditability logs, and prove human-in-the-loop oversight across high-risk workflows.',
        metric: 'EU AI Act Compliance Checker',
        link: '/tools/eu-ai-act-checker'
    },
    {
        question: 'How do we verify our internal datasets and prompts remain immune to copyright infringement claims?',
        answer: 'A strict cleanroom IP architecture guarantees that proprietary training datasets, customer inputs, and internal code are decoupled from public model retrieval and vendor retraining loops.',
        metric: 'MCP Security Auditor',
        link: '/tools/mcp-security-auditor'
    },
    {
        question: 'Can prompt injection attacks be used to breach our corporate confidentiality agreements?',
        answer: 'Adversarial prompt injection allows external attackers to bypass system instructions, tricking enterprise chatbots into leaking confidential pricing models, customer lists, or proprietary source code.',
        metric: 'Prompt Injection Defense Sandbox',
        link: '/tools/prompt-injection-sandbox'
    }
];

export default function ForGeneralCounselsPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Enterprise AI Governance & Liability Defense for General Counsels',
        provider: { '@type': 'Person', name: 'Richard Ewing' },
        description: 'Fiduciary AI risk defense, SOX 404 agent signing limits, and regulatory compliance for General Counsels and Chief Legal Officers.',
        url: 'https://www.richardewing.io/for-general-counsels'
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-mono font-bold text-slate-900 uppercase tracking-widest mb-4">
                            <Scale className="w-3.5 h-3.5 text-slate-700" />
                            For General Counsels &amp; Chief Legal Officers
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6 tracking-tight">
                            Autonomous Agents Are Making Decisions.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-zinc-900">
                                Who Has Legal Signing Authority?
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-700 max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
                            When AI tools draft contracts, approve customer claims, and modify production software, traditional corporate policies fail. We install legally defensible signing limits, SOX 404 auditability, and cleanroom IP safe harbors.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link 
                                href="/services" 
                                className="px-8 py-4 rounded-xl bg-zinc-900 text-white font-bold hover:bg-black transition-all shadow-md active:scale-95"
                            >
                                Schedule Legal Counsel Briefing &rarr;
                            </Link>
                            <Link 
                                href="/tools/board-risk-scorecard" 
                                className="px-8 py-4 rounded-xl border border-zinc-300 text-zinc-900 font-bold hover:bg-zinc-100 transition-colors"
                            >
                                Run Board Governance Scorecard &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* Three Core Legal Risk Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4 text-slate-800">
                                <Scale className="w-5 h-5" />
                            </div>
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">Apparent Authority &amp; Liability</h2>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                Automated agents deployed to customer or supplier interfaces can inadvertently enter binding commitments, alter warranty terms, or promise unauthorized refunds.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4 text-slate-800">
                                <FileCheck className="w-5 h-5" />
                            </div>
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">SOX 404 Internal Control Drift</h2>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                Financial auditors require continuous traceability. Code and workflows written by AI that bypass human dual-authorization directly threaten corporate SOX attestations.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4 text-slate-800">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">Regulatory Enforcement</h2>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                The EU AI Act imposes strict transparency, technical documentation, and systemic risk assessments. Penalties can reach up to 35M EUR or 7% of global annual revenue.
                            </p>
                        </div>
                    </div>

                    {/* Questions Legal Leaders Must Ask */}
                    <div className="mb-16">
                        <div className="text-center mb-10">
                            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-widest block mb-2">
                                Legal Governance Blueprint
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                                Five Legal Questions Corporate Counsel Must Mandate Across All AI Operations
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {legalQuestions.map((item, i) => (
                                <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:border-slate-400 transition-colors">
                                    <h3 className="text-lg font-bold text-zinc-950 mb-2">&ldquo;{item.question}&rdquo;</h3>
                                    <p className="text-sm text-zinc-700 mb-4 leading-relaxed font-medium">{item.answer}</p>
                                    <Link 
                                        href={item.link} 
                                        className="text-xs font-mono font-bold text-slate-800 hover:text-black uppercase tracking-wider inline-flex items-center gap-1"
                                    >
                                        Audit with {item.metric} &rarr;
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legal Research Corpus */}
                    <div className="mb-16">
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                            <div>
                                <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-widest block mb-1">
                                    Primary Source Intelligence &bull; Legal &amp; Governance
                                </span>
                                <h2 className="text-2xl font-grotesk font-bold text-zinc-950">
                                    Legal Governance Research Papers
                                </h2>
                            </div>
                            <Link 
                                href="/research/publications"
                                className="text-xs font-mono font-bold text-slate-800 hover:text-black flex items-center gap-1 uppercase tracking-wider"
                            >
                                Explore Full Corpus ({RESEARCH_CORPUS.length} Works) &rarr;
                            </Link>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {RESEARCH_CORPUS.filter(art => 
                                art.domain === 'AI Governance' || 
                                art.title.includes('Board') || 
                                art.title.includes('Risk') || 
                                art.title.includes('Governance')
                            ).slice(0, 4).map((pub) => (
                                <a
                                    key={pub.id}
                                    href={pub.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50/40 transition flex flex-col justify-between group shadow-sm"
                                >
                                    <div>
                                        <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-2">
                                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-900 uppercase">{pub.publisher}</span>
                                            <span className="text-zinc-500">{pub.date}</span>
                                        </div>
                                        <h3 className="text-base font-bold text-zinc-950 group-hover:text-slate-900 transition-colors mb-2 leading-snug">
                                            {pub.title}
                                        </h3>
                                        <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2">
                                            {pub.thesis}
                                        </p>
                                    </div>
                                    <div className="pt-3 mt-3 border-t border-zinc-200 text-[11px] font-mono text-slate-800 font-bold flex items-center gap-1">
                                        Read Legal Governance Paper &rarr;
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Legal Counsel Advisory Briefing Callout */}
                    <div className="rounded-3xl border border-slate-300 bg-gradient-to-br from-slate-50 via-white to-zinc-100 p-8 sm:p-12 text-center shadow-md">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">
                            Establish Enterprise AI Legal Safe Harbors
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
                            Two-week legal and operational review: establish decoupled agent authorization limits, audit SOX 404 segregation of duties, and construct defensible AI safe-harbor disclosures.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link 
                                href="/services" 
                                className="px-10 py-5 rounded-xl bg-zinc-900 text-white font-bold text-base hover:bg-black transition-all shadow-md active:scale-95"
                            >
                                Schedule Legal Counsel Briefing &rarr;
                            </Link>
                            <Link 
                                href="/tools/eu-ai-act-checker" 
                                className="px-10 py-5 rounded-xl border border-zinc-300 bg-white text-zinc-900 font-bold text-base hover:bg-zinc-50 transition-colors"
                            >
                                Run Free EU AI Act Check &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
