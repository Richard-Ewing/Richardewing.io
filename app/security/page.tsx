import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Enterprise Security & Trust Center',
    description: 'Security architecture, VPC isolation, zero data retention (ZDR), policy-as-code enforcement, and NDA compliance protocols.',
    alternates: { canonical: 'https://www.richardewing.io/security' },
    openGraph: {
        title: 'Enterprise Security & Trust Center | Richard Ewing',
        description: 'Security architecture, VPC isolation, zero data retention (ZDR), policy-as-code enforcement, and NDA compliance protocols.',
        url: 'https://www.richardewing.io/security',
        siteName: 'Richard Ewing',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Enterprise Security & Trust Center | Richard Ewing',
        description: 'Security architecture, VPC isolation, zero data retention (ZDR), policy-as-code enforcement, and NDA compliance protocols.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

const securityPillars = [
    {
        icon: '🛡️',
        title: 'Private VPC Isolation',
        description: 'Exogram operates inside your cloud infrastructure boundary (AWS Private VPC, GCP Service Connect, or Azure VNet). No inference traffic or context definitions ever leave your enterprise perimeter.',
    },
    {
        icon: '⚡',
        title: 'Zero Data Retention (ZDR)',
        description: 'Prompts, evaluation trees, and model responses are validated purely in ephemeral memory at line rate. Ephemeral state is purged immediately following token emission.',
    },
    {
        icon: '📄',
        title: 'Policy-as-Code Architecture',
        description: 'Governance definitions are declared as code in strict XML/Rego schemas. Changes undergo git-backed code reviews with cryptographically signed release commits.',
    },
    {
        icon: '🤝',
        title: 'Mutual NDA Protocol',
        description: 'All advisory engagements and pre-acquisition technical audits execute under bilateral executive NDAs, protecting proprietary algorithms, source code, and financial cap tables.',
    },
];

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-5xl mx-auto px-6">
                
                {/* Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <div className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest mb-3">
                        Enterprise Architecture & Trust Protocol
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        Security & Governance Controls
                    </h1>
                    <p className="text-xl text-zinc-900 font-medium leading-relaxed">
                        Exogram runtime enforcement and advisory diagnostics operate under strict data isolation, zero data retention, and VPC-level execution standards.
                    </p>
                </div>

                {/* Security Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {securityPillars.map((p, idx) => (
                        <div key={idx} className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-3xl mb-4">{p.icon}</div>
                                <h3 className="text-2xl font-grotesk font-bold text-zinc-950 mb-3">
                                    {p.title}
                                </h3>
                                <p className="text-sm font-medium text-zinc-800 leading-relaxed">
                                    {p.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* NDA Protocol Detail Card */}
                <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl">
                    <div className="max-w-2xl">
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3 block">
                            Advisory Confidentiality Protocol
                        </span>
                        <h2 className="text-3xl font-grotesk font-bold mb-4">
                            Executive NDA & Due Diligence Safeguards
                        </h2>
                        <p className="text-zinc-300 text-sm font-medium leading-relaxed mb-6">
                            Prior to accessing codebases, R&D financial ledgers, or telemetry logs for an R&D Capital Audit or PE Due Diligence engagement, a bilateral NDA is established. We store zero client source code outside your encrypted repository infrastructure.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-800">
                            <Link 
                                href="/contact"
                                className="px-6 py-3 bg-white text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-colors"
                            >
                                Initiate NDA Protocol &rarr;
                            </Link>
                            <Link 
                                href="/exogram/demo"
                                className="px-6 py-3 bg-zinc-900 border border-zinc-700 text-zinc-200 font-mono text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-zinc-800 transition-colors"
                            >
                                Request Sandbox Access &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="bg-white border border-zinc-300 rounded-3xl p-8 sm:p-12 text-center shadow-sm">
                    <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">
                        Have Custom Security or Compliance Questions?
                    </h2>
                    <p className="text-zinc-700 text-base max-w-xl mx-auto mb-8 font-medium">
                        Speak directly with our technical security leads regarding VPC deployment topologies and policy schema definitions.
                    </p>
                    <Link 
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-zinc-950 text-white text-xs font-mono font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-800 transition-colors"
                    >
                        Contact Technical Security Team &rarr;
                    </Link>
                </div>

            </div>
        </main>
    );
}
