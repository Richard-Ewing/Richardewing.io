import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, BookOpen, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Certified Product Economist (CPE) | Richard Ewing',
    description: 'Earn the CPE credential. Master R&D capital allocation, technical debt measurement, AI unit economics, and enterprise valuation.',
    keywords: [
        'product economist certification', 'technical debt certification', 'CPE certification',
        'product management certification 2026', 'R&D audit certification', 'engineering economics course',
        'AI cost governance training', 'product leader certification', 'CTO certification program',
        'fractional cpo training', 'technical due diligence certification',
    ],
    alternates: { canonical: 'https://www.richardewing.io/certification' },
    openGraph: {
        title: 'Certified Product Economist (CPE) | Richard Ewing',
        description: 'The only certification in product economics. Master R&D capital allocation and technical debt measurement.',
        url: 'https://www.richardewing.io/certification',
        type: 'website',
    },
};

const modules = [
    { num: '01', title: 'R&D Capital Allocation', desc: 'Treat engineering spend as a capital allocation problem. Learn to measure Return on Invested Capital (ROIC) for software teams. Map feature costs to revenue outcomes.', hours: '4 hours' },
    { num: '02', title: 'Technical Debt Measurement', desc: 'Quantify technical debt in dollar terms, not story points. Calculate your Technical Insolvency Date. Build the business case for refactoring that CFOs actually fund.', hours: '4 hours' },
    { num: '03', title: 'AI Unit Economics', desc: 'Understand cost per useful AI output, hallucination rates as economic risk, and inference cost governance. When to build vs. buy AI capabilities.', hours: '3 hours' },
    { num: '04', title: 'Enterprise Valuation Impact', desc: 'How technical decisions affect ARR multiples, gross margin, and enterprise valuation. The financial language boards and investors use.', hours: '3 hours' },
    { num: '05', title: 'Forensic Audit Methodology', desc: 'The complete audit process: stakeholder interviews, code-level assessment, financial modeling, and board-ready deliverable creation.', hours: '4 hours' },
    { num: '06', title: 'AI Governance & Cost Control', desc: 'Build inference cost governance frameworks, set up model routing economics, establish AI budget allocation models, and implement Cost of Predictivity tracking.', hours: '4 hours' },
    { num: '07', title: 'PE/VC Due Diligence Practice', desc: 'Conduct technology due diligence for investors: 15 red flags, valuation adjustment methodology, quality of technology reporting, and investment committee presentations.', hours: '4 hours' },
    { num: '08', title: 'Portfolio Monitoring & Benchmarking', desc: 'Continuous PDI monitoring across portfolio companies, DORA metrics benchmarking, Innovation Tax trending, and quarterly board report generation.', hours: '4 hours' },
    { num: '09', title: 'Advanced Diagnostic Tools', desc: 'Deep mastery of all Richard Ewing tools: PDI Calculator, APER, AUEB, EV-SE, and the AI-powered Audit Interview engine. Build custom scoring models.', hours: '4 hours' },
    { num: '10', title: 'Client Communication & Storytelling', desc: 'Present technical findings in financial language. Board slide creation, executive summary writing, and the art of translating code-level issues into dollar impact.', hours: '4 hours' },
    { num: '11', title: 'Building Your Practice', desc: 'Launch and scale a product economics consulting practice: pricing models, engagement structures, proposal templates, and client acquisition strategies.', hours: '4 hours' },
    { num: '12', title: 'Capstone: Live Audit Simulation', desc: 'Apply all frameworks to a realistic multi-company case study. Present findings and remediation roadmap. Peer-reviewed by Richard Ewing with personalized feedback.', hours: '6 hours' },
];

export default function CertificationPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <section className="section-lg text-center">
                    <div className="text-xs text-amber-400 uppercase tracking-wide mb-4 font-mono">Professional Certification</div>
                    <h1 className="text-4xl md:text-6xl font-bold text-zinc-950 mb-6 font-grotesk">
                        Certified Product<br />
                        <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Economist.</span>
                    </h1>
                    <p className="text-zinc-800 text-lg max-w-2xl mx-auto mb-4">
                        The only professional credential in product economics.
                        Master the methodology. Earn the title.
                    </p>
                    <p className="text-zinc-800 text-sm max-w-lg mx-auto mb-8">
                        48 hours of instruction · 12 modules · Live capstone review · Credential valid for 2 years
                    </p>

                    <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-amber-500/10 border border-amber-500/20">
                        <Award className="w-5 h-5 text-amber-400" />
                        <span className="text-amber-400 font-bold text-sm">Cohort 1: Q3 2026 — Waitlist Open</span>
                    </div>
                </section>

                <section className="section max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-zinc-950 mb-8 font-grotesk text-center">Curriculum</h2>
                    <div className="space-y-4">
                        {modules.map((mod) => (
                            <div key={mod.num} className="card p-6 flex items-start gap-6 group hover:border-amber-500/30 transition-colors">
                                <div className="text-2xl font-bold text-amber-400/30 font-mono group-hover:text-amber-400/60 transition-colors">{mod.num}</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-lg font-bold text-zinc-900">{mod.title}</h3>
                                        <span className="text-xs text-zinc-800 font-mono">{mod.hours}</span>
                                    </div>
                                    <p className="text-zinc-900 text-sm">{mod.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="section max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {[
                            { icon: GraduationCap, title: 'Who It\'s For', items: ['CTOs & VPs of Engineering', 'Product Leaders & CPOs', 'Fractional CTOs & Consultants', 'PE/VC Due Diligence Teams'] },
                            { icon: BookOpen, title: 'What You Learn', items: ['R&D Capital Allocation', 'Technical Debt in $ Terms', 'AI Cost Governance', 'Board-Ready Deliverables'] },
                            { icon: Users, title: 'What You Get', items: ['CPE Credential (2-year)', 'Alumni Slack Community', 'Diagnostic Tool Access', 'Annual Recertification'] },
                        ].map((section, i) => (
                            <div key={i} className="card p-6">
                                <section.icon className="w-8 h-8 text-amber-400 mb-4" />
                                <h3 className="text-lg font-bold text-zinc-950 mb-3">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 text-zinc-900 text-sm">
                                            <CheckCircle className="w-3 h-3 text-amber-400/50 mt-1 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="card p-8 md:p-12 border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent text-center">
                        <div className="text-3xl font-bold text-zinc-950 mb-2">$1,500</div>
                        <p className="text-zinc-950 text-sm mb-6">Per certification · Payment plans available</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/api/buy/certification"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-widest text-sm rounded-xl transition-all"
                            >
                                Reserve Your Spot — $1,500 <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="https://theproducteconomist.beehiiv.com/subscribe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 font-bold uppercase tracking-widest text-xs rounded-xl transition-all"
                            >
                                Just Join Waitlist
                            </a>
                        </div>
                        <p className="text-[10px] text-zinc-800 mt-4">Cohort 1 opens Q3 2026. Pay now to secure priority enrollment.</p>
                    </div>
                </section>

                <section className="section max-w-4xl mx-auto text-center">
                    <p className="text-zinc-950 text-sm">
                        Questions?{' '}
                        <a href="mailto:richardewing@exogram.ai?subject=CPE%20Certification%20Inquiry" className="text-amber-400 hover:text-zinc-900 transition-colors">Email Richard directly</a>
                        {' '}or{' '}
                        <Link href="/advisory" className="text-amber-400 hover:text-zinc-900 transition-colors">book a call</Link>.
                    </p>
                </section>
            </div>
        </main>
    );
}
