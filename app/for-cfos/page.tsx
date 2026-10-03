import type { Metadata } from 'next';
import Link from 'next/link';
import { DollarSign, TrendingDown, ShieldAlert, ArrowRight, PieChart, FileText } from 'lucide-react';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';

export const metadata: Metadata = {
    title: 'AI Economics & R&D Capital Audits for CFOs',
    description: 'Forensic R&D capital audits, Section 174 software capitalization defense, and AI gross margin engineering for Chief Financial Officers and Directors of Finance.',
    keywords: [
        'CFO AI economics',
        'Section 174 software capitalization',
        'R&D tax audit tech',
        'AI unit economics CFO',
        'software gross margin defense',
        'AI token bill runaway',
        'engineering payroll yield'
    ],
    alternates: { canonical: 'https://www.richardewing.io/for-cfos' },
    openGraph: {
        title: 'For CFOs & Finance Directors - AI Economics & Capital Audits',
        description: 'Forensic software payroll audits and Section 174 capitalization defense in CFO language.',
        url: 'https://www.richardewing.io/for-cfos',
        type: 'website'
    },
};

const cfoQuestions = [
    {
        question: 'Why did our cloud and AI API bill jump 140% while software delivery stayed flat?',
        answer: 'Silent token retry loops and unmonitored evaluation runs in staging. Developers deploy autonomous agents that loop across thousands of prompt iterations when tests fail, burning API budgets with zero production yield.',
        metric: 'AI Unit Economics Benchmark (AUEB)',
        link: '/tools/aueb'
    },
    {
        question: 'How much of our software engineering payroll is genuine innovation versus maintenance drag?',
        answer: 'Across mid-market technology companies, engineering leadership typically claims 75% innovation. Forensic sprint audits routinely reveal that 50% to 65% is maintenance OpEx masquerading as capital investment.',
        metric: 'CFO Capitalization Audit',
        link: '/tools/cfo-capitalization-audit'
    },
    {
        question: 'What is our Section 174 tax drag if the IRS audits our software development expenses?',
        answer: 'Classifying routine bug fixes and maintenance as amortizable software development creates phantom taxable income. A 5-year amortization schedule on misclassified OpEx can cost millions in delayed cash tax relief.',
        metric: 'Section 174 Audit Model',
        link: '/tools/cfo-capitalization-audit'
    },
    {
        question: 'Are our customer-facing AI features profitable or secretly margin-negative?',
        answer: 'Most software companies price AI features as flat add-on seats while paying variable token inference costs per query. Power users quickly flip feature margins negative, destroying SaaS unit economics.',
        metric: 'AI Feature Margin Calculator',
        link: '/tools/ai-feature-margin'
    },
    {
        question: 'When should we stop paying cloud API tokens and self-host smaller open-source models?',
        answer: 'The SLM Break-Even point occurs where continuous enterprise query volume makes private model inference on dedicated GPUs 60% cheaper than pay-per-token frontier APIs.',
        metric: 'SLM Break-Even Calculator',
        link: '/tools/slm-break-even'
    },
    {
        question: 'How much revenue does each engineer actually generate for the business?',
        answer: 'APER (Annualized Productive Engineering Revenue) benchmark models engineering payroll directly against revenue throughput, stripping out vanity metrics and story points.',
        metric: 'APER Benchmark',
        link: '/tools/aper'
    }
];

export default function ForCFOsPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI Economics & R&D Capital Audits for CFOs',
        provider: { '@type': 'Person', name: 'Richard Ewing' },
        description: 'Forensic software payroll audits, Section 174 tax defense, and AI gross margin protection for finance executives.',
        url: 'https://www.richardewing.io/for-cfos'
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-900 uppercase tracking-widest mb-4">
                            <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                            For Chief Financial Officers &amp; Directors of Finance
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6 tracking-tight">
                            Your Tech Team Reports Velocity.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                Your Income Statement Needs Margins.
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-700 max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
                            We translate developer jargon, runaway cloud invoices, and complex software payroll into board-level EBITDA protection, defensible Section 174 ledgers, and unit margin clarity.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link 
                                href="/services" 
                                className="px-8 py-4 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all shadow-md active:scale-95"
                            >
                                Schedule CFO Capital Briefing &rarr;
                            </Link>
                            <Link 
                                href="/tools/cfo-capitalization-audit" 
                                className="px-8 py-4 rounded-xl border border-zinc-300 text-zinc-900 font-bold hover:bg-zinc-100 transition-colors"
                            >
                                Run Free Section 174 Audit Free &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* Three Core Financial Pain Points */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4 text-emerald-700">
                                <DollarSign className="w-5 h-5" />
                            </div>
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">Section 174 Tax Amortization Drag</h2>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                The IRS requires 5-year amortization for software development. Misclassifying maintenance bugs as capitalized R&amp;D inflates taxable income and destroys cash flow.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4 text-emerald-700">
                                <TrendingDown className="w-5 h-5" />
                            </div>
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">AI Gross Margin Collapse</h2>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                Enterprise SaaS gross margins are built on 80% economics. Flat-rate seat pricing with uncapped LLM query consumption compresses software margins to single digits.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4 text-emerald-700">
                                <ShieldAlert className="w-5 h-5" />
                            </div>
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">The Hidden Innovation Tax</h2>
                            <p className="text-sm text-zinc-600 leading-relaxed">
                                Companies spend 40% to 65% of developer payroll fixing broken architecture, rewriting unmaintained code, and managing AI dependencies instead of shipping new revenue features.
                            </p>
                        </div>
                    </div>

                    {/* Questions CFOs Must Be Asking */}
                    <div className="mb-16">
                        <div className="text-center mb-10">
                            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-2">
                                Executive Interrogation Guide
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                                Six Questions Every CFO Must Ask Before Approving Next Quarter&apos;s Tech Budget
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {cfoQuestions.map((item, i) => (
                                <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:border-emerald-300 transition-colors">
                                    <h3 className="text-lg font-bold text-zinc-950 mb-2">&ldquo;{item.question}&rdquo;</h3>
                                    <p className="text-sm text-zinc-700 mb-4 leading-relaxed font-medium">{item.answer}</p>
                                    <Link 
                                        href={item.link} 
                                        className="text-xs font-mono font-bold text-emerald-700 hover:text-emerald-900 uppercase tracking-wider inline-flex items-center gap-1"
                                    >
                                        Audit This With {item.metric} &rarr;
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Financial Telemetry & Publication Corpus */}
                    <div className="mb-16">
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                            <div>
                                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-1">
                                    Primary Source Intelligence &bull; CFO &amp; Capitalization
                                </span>
                                <h2 className="text-2xl font-grotesk font-bold text-zinc-950">
                                    Published Financial Research &amp; Articles
                                </h2>
                            </div>
                            <Link 
                                href="/research/publications"
                                className="text-xs font-mono font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 uppercase tracking-wider"
                            >
                                Explore Full Corpus ({RESEARCH_CORPUS.length} Works) &rarr;
                            </Link>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {RESEARCH_CORPUS.filter(art => 
                                art.domain === 'AI Economics' || 
                                art.title.includes('Capitalization') || 
                                art.title.includes('CFO') || 
                                art.title.includes('Tax') ||
                                art.title.includes('Margin')
                            ).slice(0, 4).map((pub) => (
                                <a
                                    key={pub.id}
                                    href={pub.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-5 rounded-2xl border border-emerald-200/80 bg-white hover:border-emerald-400 hover:bg-emerald-50/40 transition flex flex-col justify-between group shadow-sm"
                                >
                                    <div>
                                        <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-2">
                                            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 uppercase">{pub.publisher}</span>
                                            <span className="text-zinc-500">{pub.date}</span>
                                        </div>
                                        <h3 className="text-base font-bold text-zinc-950 group-hover:text-emerald-900 transition-colors mb-2 leading-snug">
                                            {pub.title}
                                        </h3>
                                        <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2">
                                            {pub.thesis}
                                        </p>
                                    </div>
                                    <div className="pt-3 mt-3 border-t border-zinc-200 text-[11px] font-mono text-emerald-700 font-bold flex items-center gap-1">
                                        Read Financial Research Paper &rarr;
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Executive Advisory Callout */}
                    <div className="rounded-3xl border border-emerald-300 bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/90 p-8 sm:p-12 text-center shadow-md">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">
                            Schedule a Forensic CFO Capital Audit
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
                            Two-week forensic engagement: sprint task reclassification, Section 174 exposure analysis, and an EBITDA recovery plan formatted specifically for your Board of Directors and Audit Committee.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link 
                                href="/services" 
                                className="px-10 py-5 rounded-xl bg-emerald-600 text-white font-bold text-base hover:bg-emerald-700 transition-all shadow-md active:scale-95"
                            >
                                Schedule Executive Briefing &rarr;
                            </Link>
                            <Link 
                                href="/tools/cfo-capitalization-audit" 
                                className="px-10 py-5 rounded-xl border border-zinc-300 bg-white text-zinc-900 font-bold text-base hover:bg-zinc-50 transition-colors"
                            >
                                Open Free Capitalization Tool &rarr;
                            </Link>
                        </div>
                        <p className="text-xs text-zinc-500 font-mono mt-6">
                            Safe Harbor: Forensic diagnostics provide financial modeling and operational analysis, not binding tax advice.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
