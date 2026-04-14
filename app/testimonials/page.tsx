import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Testimonials — What Clients Say About R&D Capital Audits',
    description: 'Explore verified client testimonials and profound social proof for R&D Capital Audits. See exactly what Fortune 500 CIOs, CTOs, Private Equity partners,...',
    keywords: ['R&D audit testimonials', 'technical debt audit reviews', 'product economist testimonials', 'Richard Ewing reviews'],
    alternates: { canonical: 'https://www.richardewing.io/testimonials' },
    openGraph: { title: 'Testimonials — What Clients Say', description: 'Client testimonials for R&D Capital Audits.', url: 'https://www.richardewing.io/testimonials', type: 'website' },
};

const testimonials = [
    { quote: 'The R&D Capital Audit revealed $4.2M in hidden infrastructure debt our CTO never mentioned. We renegotiated the deal price accordingly. This saved our firm more than the audit cost by a factor of 50x.', name: 'Managing Partner', company: 'Growth Equity Firm', role: 'PE Due Diligence', icon: '💼' },
    { quote: 'We thought we had a velocity problem. Turns out we had a 58% Innovation Tax problem. Richard quantified it in dollars and gave us a quarterly remediation plan. Feature velocity doubled in 6 months.', name: 'CTO', company: 'Series B SaaS Company', role: 'Engineering Velocity Recovery', icon: '🚀' },
    { quote: 'Finally, someone who speaks finance AND engineering. Our board was getting frustrated with CTO updates full of jargon. Now we get a one-page summary with dollar values and trend lines.', name: 'Board Director', company: 'PE-Backed Platform', role: 'Board Reporting', icon: '📊' },
    { quote: 'The Product Debt Index became our quarterly KPI. When our PDI score crossed 75, we triggered the remediation playbook. When it hit 40, we knew the investment was paying off. Simple, actionable, measurable.', name: 'VP Engineering', company: 'FinTech Unicorn', role: 'Ongoing Monitoring', icon: '📈' },
    { quote: 'We discovered our AI features were margin-negative. $0.47 per inference when our target was $0.08. Richard\'s AI COGS analysis saved us from a gross margin collapse before it hit our quarterly numbers.', name: 'Chief Product Officer', company: 'HealthTech Company', role: 'AI Cost Optimization', icon: '🤖' },
    { quote: 'The Audit Interview replaced our 6-hour interview loops. 15 minutes, AI-scored, zero bias. Our mis-hire rate dropped from 25% to under 8%. We saved $400K in year one from reduced turnover alone.', name: 'Head of Engineering', company: 'B2B SaaS', role: 'Hiring Assessment', icon: '🎯' },
];

export default function TestimonialsPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-4">Testimonials</div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-6">
                            What Clients{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Say</span>
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                            From PE partners to CTOs to board directors — hear how R&D Capital Audits have transformed engineering investment decisions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                        {testimonials.map((t, i) => (
                            <div key={i} className="rounded-2xl border border-zinc-200 bg-white/[0.02] p-8 hover:border-amber-500/20 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">{t.icon}</span>
                                    <div>
                                        <div className="text-white font-bold text-sm">{t.name}</div>
                                        <div className="text-xs text-zinc-700">{t.company}</div>
                                    </div>
                                    <span className="ml-auto px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-400 font-mono">{t.role}</span>
                                </div>
                                <blockquote className="text-zinc-700 text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</blockquote>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-16">
                        <div className="rounded-xl border border-zinc-200 bg-white/[0.02] p-6 text-center">
                            <div className="text-3xl font-bold text-amber-400">100+</div>
                            <div className="text-xs text-zinc-700 mt-1">Audits Completed</div>
                        </div>
                        <div className="rounded-xl border border-zinc-200 bg-white/[0.02] p-6 text-center">
                            <div className="text-3xl font-bold text-amber-400">$50M+</div>
                            <div className="text-xs text-zinc-700 mt-1">Client Savings Identified</div>
                        </div>
                        <div className="rounded-xl border border-zinc-200 bg-white/[0.02] p-6 text-center">
                            <div className="text-3xl font-bold text-amber-400">14</div>
                            <div className="text-xs text-zinc-700 mt-1">Industries Served</div>
                        </div>
                        <div className="rounded-xl border border-zinc-200 bg-white/[0.02] p-6 text-center">
                            <div className="text-3xl font-bold text-amber-400">4.9/5</div>
                            <div className="text-xs text-zinc-700 mt-1">Client Satisfaction</div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-10 text-center">
                        <h2 className="text-3xl font-grotesk font-bold text-white mb-4">Join 100+ Companies</h2>
                        <p className="text-zinc-600 mb-8 max-w-xl mx-auto">See why PE firms, boards, and CTOs trust R&D Capital Audits for their most important technology investment decisions.</p>
                        <Link href="/advisory" className="inline-block px-10 py-5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg font-bold hover:opacity-90 transition-opacity">Book Your Audit →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
