import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, DollarSign, TrendingDown, Shield, Brain, Gauge, Clock, Calculator, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Diagnose Your AI & Engineering Risk | Free Tools',
    description: 'Free diagnostic tools used in $7,500 R&D Capital Audits. Calculate your Technical Insolvency Date, AI cost collapse point, and governance maturity in minutes.',
    alternates: { canonical: 'https://www.richardewing.io/diagnose' },
    openGraph: {
        title: 'Diagnose Your AI & Engineering Risk',
        description: 'Same diagnostic instruments used in $7,500 engagements. Calculate your risk exposure in under 5 minutes.',
        url: 'https://www.richardewing.io/diagnose',
        type: 'website',
    },
};

const painRoutes = [
    {
        pain: '"Our AI costs are spiraling out of control"',
        tool: 'AI Unit Economics Benchmark',
        slug: '/tools/aueb',
        time: '3 min',
        output: 'Your exact cost collapse point — the usage volume where your AI feature starts destroying margin',
        icon: DollarSign,
        color: 'rose',
        stat: 'POCs cost $100s. Production costs $1M+.',
    },
    {
        pain: '"We ship features but nothing ships well"',
        tool: 'Product Debt Index',
        slug: '/tools/pdi',
        time: '4 min',
        output: 'Your Technical Insolvency Date — the quarter when maintenance consumes 100% of engineering capacity',
        icon: TrendingDown,
        color: 'violet',
        stat: 'Average: 47% of eng time is maintenance.',
    },
    {
        pain: '"Engineering is expensive but I cannot measure output"',
        tool: 'APER Calculator',
        slug: '/tools/aper',
        time: '2 min',
        output: 'Revenue per engineer benchmarked against your industry — the metric your board should track',
        icon: Calculator,
        color: 'blue',
        stat: 'Top quartile: $450K+ revenue/engineer.',
    },
    {
        pain: '"Our AI agents are unreliable in production"',
        tool: 'Runtime Failure Index',
        slug: '/runtime-failure-index',
        time: '5 min read',
        output: 'Root cause analysis of every enterprise AI failure mode — context rot, retry inflation, verification collapse',
        icon: AlertTriangle,
        color: 'amber',
        stat: '78% of AI agents are over-privileged.',
    },
    {
        pain: '"Are we getting value from our R&D spend?"',
        tool: 'Enterprise Value × Eng Calculator',
        slug: '/tools/ev-se',
        time: '2 min',
        output: 'Your EV/Software Engineer ratio vs. public benchmarks — reveals whether R&D creates or destroys value',
        icon: Gauge,
        color: 'emerald',
        stat: 'Median EV/SE: $3.2M. Bottom decile: $400K.',
    },
    {
        pain: '"We need to assess engineering candidates properly"',
        tool: 'Audit Interview',
        slug: '/tools/audit-interview',
        time: '15 min',
        output: 'AI-powered engineering assessment that evaluates systems thinking, not LeetCode trivia',
        icon: Users,
        color: 'cyan',
        stat: 'Traditional interviews miss 60%+ of risk.',
    },
];

const colorMap: Record<string, { bg: string; border: string; text: string; pill: string; hover: string }> = {
    rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-600', pill: 'bg-rose-100 text-rose-700', hover: 'hover:border-rose-300' },
    violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-600', pill: 'bg-violet-100 text-violet-700', hover: 'hover:border-violet-300' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', pill: 'bg-blue-100 text-blue-700', hover: 'hover:border-blue-300' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', pill: 'bg-amber-100 text-amber-700', hover: 'hover:border-amber-300' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', pill: 'bg-emerald-100 text-emerald-700', hover: 'hover:border-emerald-300' },
    cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-600', pill: 'bg-cyan-100 text-cyan-700', hover: 'hover:border-cyan-300' },
};

export default function DiagnosePage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">

                    {/* Hero */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 mb-6">
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                            <span className="text-sm font-semibold text-zinc-950">Same instruments used in $7,500 R&D Capital Audits</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
                            What Is Breaking{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-500">Right Now?</span>
                        </h1>
                        <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-2">
                            Start with the pain. Each tool diagnoses a specific instability — and gives you a number your board can act on.
                        </p>
                        <p className="text-sm text-zinc-500 font-medium">
                            <Clock className="w-4 h-4 inline mr-1" />
                            Each diagnosis takes 2-5 minutes. Results are immediate and downloadable.
                        </p>
                    </div>

                    {/* Pain-First Route Grid */}
                    <div className="space-y-6 mb-20">
                        {painRoutes.map((route, i) => {
                            const c = colorMap[route.color];
                            const Icon = route.icon;
                            return (
                                <Link
                                    key={i}
                                    href={route.slug}
                                    className={`block rounded-2xl border ${c.border} ${c.hover} bg-white p-6 md:p-8 group transition-all hover:shadow-md`}
                                >
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">

                                        {/* Pain statement */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className={`w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center`}>
                                                    <Icon className={`w-5 h-5 ${c.text}`} />
                                                </div>
                                                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${c.text}`}>
                                                    {route.time}
                                                </span>
                                            </div>

                                            <p className="text-lg font-bold text-zinc-800 mb-2 italic">
                                                {route.pain}
                                            </p>

                                            <h2 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-violet-700 transition-colors">
                                                → {route.tool}
                                            </h2>

                                            <p className="text-sm text-zinc-600 font-medium leading-relaxed">
                                                {route.output}
                                            </p>
                                        </div>

                                        {/* Side stat + CTA */}
                                        <div className="md:w-64 flex flex-col items-start md:items-end gap-3 md:text-right">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${c.pill}`}>
                                                {route.stat}
                                            </span>
                                            <span className="inline-flex items-center gap-1 text-sm font-bold text-zinc-900 group-hover:text-violet-600 transition-colors">
                                                Run Diagnosis <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>

                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Escalation */}
                    <div className="rounded-2xl bg-zinc-950 p-8 md:p-12 text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Shield className="w-5 h-5 text-violet-400" />
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-violet-400">Want a Professional Interpretation?</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            These tools give you the numbers.<br />
                            <span className="text-violet-400">An R&D Capital Audit gives you the strategy.</span>
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
                            A $450 Gut-Check Session reviews your diagnostic results with Richard Ewing and delivers a prioritized action plan.
                            For comprehensive analysis, the $7,500 R&D Capital Audit includes full financial modeling, board-ready deliverables, and 90-day implementation roadmap.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/advisory" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-rose-500 to-violet-500 text-white font-bold hover:opacity-90 transition-opacity">
                                Book a $450 Gut-Check <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-zinc-600 text-zinc-300 font-bold hover:border-violet-400 hover:text-white transition-all">
                                See All Pricing
                            </Link>
                        </div>
                    </div>

                    {/* Credibility Footer */}
                    <div className="text-center pb-20">
                        <p className="text-sm text-zinc-500 font-medium">
                            Published in <span className="font-bold text-zinc-700">Built In</span> · <span className="font-bold text-zinc-700">CIO.com</span> · <span className="font-bold text-zinc-700">HackerNoon</span> · <span className="font-bold text-zinc-700">Mind the Product</span>
                        </p>
                        <p className="text-xs text-zinc-400 mt-2">
                            436+ governance terms defined · 6 free diagnostic tools · Used in enterprise R&D Capital Audits
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}
