import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Partnerships & Strategy Diagnostics | Richard Ewing',
    description: 'Partnerships provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: ['Richard Ewing partnerships', 'R&D audit partnerships', 'consulting firm partnership', 'white-label technical debt', 'PE advisory partner'],
    alternates: { canonical: 'https://www.richardewing.io/partnerships' },
    openGraph: { title: 'Partnerships — Advisory & Licensing', description: 'Partner with Richard Ewing for R&D Capital Audits.', url: 'https://www.richardewing.io/partnerships', type: 'website' },
};

const partnerTypes = [
    {
        title: 'Management Consulting Firms',
        description: 'Add R&D Capital Audits to your technology practice. White-label our frameworks for your clients. We provide the methodology; you deliver the engagement.',
        benefits: ['White-label PDI and APER tools for your clients', 'Co-branded case studies and thought leadership', 'Training for your consultants on audit methodology', 'Revenue share on referred engagements'],
        icon: '🏢',
        color: 'cyan',
    },
    {
        title: 'PE & VC Firms',
        description: 'Embed R&D Capital Audits into your due diligence process. Get a standing advisory relationship for your portfolio.',
        benefits: ['Preferred pricing for portfolio-wide audits', 'Pre-negotiated retainer for deal flow due diligence', 'Board-ready deliverables tailored to your LP reporting', 'Quarterly portfolio health monitoring'],
        icon: '💼',
        color: 'emerald',
    },
    {
        title: 'Technology Platforms',
        description: 'Integrate our frameworks into your developer platform. Offer PDI scoring, Innovation Tax tracking, or APER benchmarking as product features.',
        benefits: ['API access to scoring algorithms', 'Co-marketing and integration documentation', 'Joint webinars and thought leadership', 'Featured in our tools ecosystem'],
        icon: '⚙️',
        color: 'violet',
    },
    {
        title: 'Executive Recruiters',
        description: 'Use the Audit Interview to assess CTO, VP Engineering, and technical leadership candidates. Standardized, bias-reduced evaluation.',
        benefits: ['Bulk Audit Interview licenses', 'Custom assessment tracks for executive roles', 'Data-driven candidate comparison reports', 'Reduced mis-hire rates for technical leadership'],
        icon: '🎯',
        color: 'amber',
    },
];

const colorMap: Record<string, string> = { cyan: 'border-cyan-500/30 bg-cyan-500/5', emerald: 'border-emerald-500/30 bg-emerald-500/5', violet: 'border-violet-500/30 bg-violet-500/5', amber: 'border-amber-500/30 bg-amber-500/5' };
const textMap: Record<string, string> = { cyan: 'text-cyan-900 font-extrabold font-semibold', emerald: 'text-emerald-900 font-extrabold font-semibold', violet: 'text-violet-400', amber: 'text-amber-400' };

export default function PartnershipsPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-xs font-bold font-mono text-emerald-500 uppercase tracking-widest mb-4">Partnerships</div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                            Grow With{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">AI Economics</span>
                        </h1>
                        <p className="text-xl text-zinc-900 max-w-2xl mx-auto">
                            Embed R&D Capital Audits into your practice, platform, or portfolio. Our frameworks are designed for scale — from individual audits to enterprise-wide deployment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                        {partnerTypes.map((pt, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorMap[pt.color]}`}>
                                <span className="text-3xl mb-4 block">{pt.icon}</span>
                                <h2 className={`text-xl font-grotesk font-bold mb-3 ${textMap[pt.color]}`}>{pt.title}</h2>
                                <p className="text-zinc-900 mb-4 text-sm">{pt.description}</p>
                                <ul className="space-y-2">
                                    {pt.benefits.map((b, j) => (
                                        <li key={j} className="text-sm font-semibold text-zinc-950 flex items-start gap-2">
                                            <span className={textMap[pt.color]}>→</span>{b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-zinc-400 bg-zinc-50 p-10 text-center mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6">Partnership Tiers</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="rounded-xl border border-zinc-400 p-6 flex flex-col">
                                <h3 className="text-lg font-bold text-zinc-950 mb-2">Referral Partner</h3>
                                <p className="text-sm font-semibold text-zinc-950 mb-4 flex-1">Refer clients for R&D audits. Earn referral fees on closed deals.</p>
                                <div className="text-2xl font-bold text-zinc-950 mb-1">Free</div>
                                <div className="text-xs font-bold text-zinc-900 font-bold mb-4">Revenue share on referred deals</div>
                                <a href="mailto:richardewing@exogram.ai?subject=Referral%20Partner%20Application" className="block text-center py-3 rounded-lg border border-zinc-500 text-zinc-950 font-bold text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                                    Apply →
                                </a>
                            </div>
                            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6 relative flex flex-col">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-600 text-zinc-950 font-semibold text-xs font-bold font-medium font-bold uppercase tracking-widest rounded-full">Most Popular</div>
                                <h3 className="text-lg font-bold text-cyan-900 font-extrabold font-semibold mb-2">Licensed Partner</h3>
                                <p className="text-sm font-semibold text-zinc-950 mb-4 flex-1">White-label frameworks for your consulting practice. Includes training and co-branded case studies.</p>
                                <div className="text-2xl font-bold text-zinc-950 mb-1">$2,500<span className="text-lg text-zinc-900">/mo</span></div>
                                <div className="text-xs font-bold text-zinc-900 font-bold mb-4">Annual license + quarterly training</div>
                                <a href="/api/buy/partner_licensed" className="block text-center py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-zinc-950 font-semibold font-bold text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                                    Start Licensed Partnership →
                                </a>
                            </div>
                            <div className="rounded-xl border border-emerald-500/30 p-6 flex flex-col">
                                <h3 className="text-lg font-bold text-emerald-900 font-extrabold font-semibold mb-2">Strategic Partner</h3>
                                <p className="text-sm font-semibold text-zinc-950 mb-4 flex-1">Deep integration. Co-branded. Joint go-to-market. Custom SLA.</p>
                                <div className="text-2xl font-bold text-zinc-950 mb-1">Custom</div>
                                <div className="text-xs font-bold text-zinc-900 font-bold mb-4">Custom partnership agreement</div>
                                <a href="mailto:richardewing@exogram.ai?subject=Strategic%20Partnership%20Inquiry" className="block text-center py-3 rounded-lg border border-emerald-500/30 text-emerald-900 font-extrabold font-semibold font-bold text-xs font-bold uppercase tracking-widest hover:bg-emerald-500/10 transition-all">
                                    Schedule Discussion →
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-10 text-center">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">Become a Partner</h2>
                        <p className="text-zinc-900 mb-8 max-w-xl mx-auto">Whether you&apos;re a consulting firm, PE fund, platform, or recruiter — there&apos;s a partnership model that works.</p>
                        <Link href="/services" className="inline-block px-10 py-5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 font-semibold text-lg font-bold hover:opacity-90 transition-opacity">Discuss Partnership →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
