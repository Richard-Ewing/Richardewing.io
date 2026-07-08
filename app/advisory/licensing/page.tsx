import { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Shield, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Integration System Licensin & Strategy Diagnostics | Richard Ewing',
    description: 'AI Integration System Licensin provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: [
        'white label saas tools', 'consulting firm diagnostic tools', 'PE due diligence tools',
        'technical debt calculator licensing', 'engineering audit tools', 'AI economics tools',
        'management consulting tools', 'due diligence technology assessment', 'fractional cto tools',
    ],
    alternates: { canonical: 'https://www.richardewing.io/advisory/licensing' },
    openGraph: {
        title: 'White-Label Tool Licensing | Richard Ewing',
        description: 'License proprietary R&D diagnostic tools under your brand. Built for consulting firms and PE teams.',
        url: 'https://www.richardewing.io/advisory/licensing',
        type: 'website',
    },
};

export default function LicensingPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <section className="section-lg text-center">
                    <div className="text-xs font-bold text-zinc-900 font-bold uppercase tracking-wide mb-4 font-mono">Partners</div>
                    <h1 className="text-4xl md:text-6xl font-bold text-zinc-950 mb-6 font-grotesk">
                        Your Brand.<br />
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">My Diagnostic Engine.</span>
                    </h1>
                    <p className="text-zinc-950 font-bold text-lg max-w-2xl mx-auto mb-8">
                        License the same proprietary calculators used in $7,500 R&D audits —
                        under your firm's brand, with your client data.
                    </p>
                </section>

                <section className="section max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {[
                            { icon: Building2, title: 'Consulting Firms', desc: 'Add quantitative R&D diagnostics to your advisory practice. Move beyond qualitative assessments.' },
                            { icon: Shield, title: 'PE / VC Due Diligence', desc: 'Evaluate target company engineering health before term sheets. Identify hidden technical debt in dollars.' },
                            { icon: BarChart3, title: 'Fractional CTOs', desc: 'Give your clients a professional-grade diagnostic suite. Position yourself as the expert with data to back it up.' },
                        ].map((item, i) => (
                            <div key={i} className="card p-6">
                                <item.icon className="w-8 h-8 text-purple-900 font-extrabold font-semibold mb-4" />
                                <h3 className="text-lg font-bold text-zinc-950 mb-2">{item.title}</h3>
                                <p className="text-zinc-900 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="card p-8 md:p-12 border-purple-500/20">
                        <h2 className="text-2xl font-bold text-zinc-950 mb-6 font-grotesk">What You Get</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {[
                                'All 5 diagnostic tools under your domain',
                                'Custom branding (logo, colors, copy)',
                                'Client data stays private — your instance only',
                                'PDF report generation with your branding',
                                'Quarterly methodology updates',
                                'Direct Slack access to Richard Ewing',
                                'Training session for your team (1hr)',
                                'Usage analytics dashboard',
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2 text-zinc-950 text-sm">
                                    <CheckCircle className="w-4 h-4 text-purple-900 font-extrabold font-semibold mt-0.5 flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/80 border border-zinc-400 rounded-xl p-6">
                                <div className="text-xs font-bold text-zinc-900 font-bold uppercase mb-2 font-mono">Standard</div>
                                <div className="text-3xl font-bold text-zinc-950 mb-1">$1,500<span className="text-lg text-zinc-900">/mo</span></div>
                                <p className="text-zinc-950 text-sm font-semibold mb-4">3 tools, 1 team seat, quarterly updates</p>
                                <a href="/api/buy/white_label" className="block w-full py-3 text-center rounded-lg border border-purple-500/30 text-purple-900 font-extrabold font-semibold hover:bg-purple-500/10 font-bold text-sm font-semibold transition-all">
                                    Start Standard License →
                                </a>
                            </div>
                            <div className="bg-white/80 border border-purple-500/30 rounded-xl p-6">
                                <div className="text-xs font-bold text-zinc-900 font-bold uppercase mb-2 font-mono">Enterprise</div>
                                <div className="text-3xl font-bold text-zinc-950 mb-1">$3,000<span className="text-lg text-zinc-900">/mo</span></div>
                                <p className="text-zinc-950 text-sm font-semibold mb-4">All 5 tools, unlimited seats, custom integrations</p>
                                <a href="mailto:richardewing@exogram.ai?subject=White-Label%20Licensing%20Inquiry%20(Enterprise)" className="block w-full py-3 text-center rounded-lg bg-purple-600 text-zinc-950 font-semibold hover:bg-purple-500 font-bold text-sm font-semibold transition-all">
                                    Contact for Enterprise →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section max-w-4xl mx-auto text-center">
                    <p className="text-zinc-950 text-sm">
                        Not sure if licensing is the right fit?{' '}
                        <Link href="/advisory" className="text-purple-900 font-extrabold font-semibold hover:text-zinc-900 transition-colors">Book a 30-min call</Link> to discuss.
                    </p>
                </section>
            </div>
        </main>
    );
}
