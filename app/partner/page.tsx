import type { Metadata } from 'next';
import Link from 'next/link';
import PartnerContactForm from '@/app/components/client/PartnerContactForm';

export const metadata: Metadata = {
    title: 'Partner with Richard: Newsletter & Speaking | Richard Ewing',
    description: 'Sponsor or collaborate with Richard Ewing on AI advisory, speaking, or newsletter placements. Connect directly with technology leaders.',
    alternates: {
        canonical: 'https://www.richardewing.io/partner',
    },
    openGraph: {
        title: 'Partner with Richard: Newsletter & Speaking | Richard Ewing',
        description: 'Sponsor or collaborate with Richard Ewing on AI advisory, speaking, or newsletter placements. Connect directly with technology leaders.',
        url: 'https://www.richardewing.io/partner',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Partner with Richard: Newsletter & Speaking | Richard Ewing',
        description: 'Sponsor or collaborate with Richard Ewing on AI advisory, speaking, or newsletter placements. Connect directly with technology leaders.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

export default function PartnerPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto">
                
                {/* Breadcrumb */}
                <div className="mb-10 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <span>Executive</span><span>/</span><span className="text-cyan-900 font-extrabold">Partnerships & Speaking</span>
                </div>

                {/* Section 1: Introduction and Lived Experience */}
                <section className="mb-16 border-b border-zinc-400 pb-16">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        Systemic reach for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-indigo-700">engineering economics.</span>
                    </h1>
                    <p className="text-xl text-zinc-900 leading-relaxed font-semibold max-w-3xl">
                        While auditing R&D spend for private equity portfolios, I noticed that the hardest part of building technical partnerships is cutting through marketing noise. Real collaboration requires aligning on verified system architectures and predictable economic incentives.
                    </p>
                </section>

                {/* Section 2: Audience & Metrics */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Audience Profile & Reach</h2>
                    <p className="text-sm text-zinc-900 leading-relaxed font-semibold mb-8">
                        The content on this platform speaks directly to decision makers who control engineering budgets and system designs: VPs of Engineering, Chief Technology Officers, Private Equity Operating Partners, and Chief Financial Officers. These readers value structural analysis and clear trade-offs.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                            <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">LinkedIn Reach</div>
                            <div className="text-3xl font-bold text-zinc-950 mb-2">5,000+ Followers</div>
                            <p className="text-xs text-zinc-500 font-semibold">
                                Source: LinkedIn Analytics, July 2026. Verified professional network of engineering directors, staff architects, and technology executives.
                            </p>
                        </div>

                        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                            <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">Newsletter Circulation</div>
                            <div className="text-3xl font-bold text-zinc-950 mb-2">2,400+ Subscribers</div>
                            <p className="text-xs text-zinc-500 font-semibold">
                                Source: Beehiiv Analytics, July 2026. Weekly readers of The AI Economist, representing technical leaders and executive management.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Sponsorship Opportunities */}
                <section className="mb-16 border-t border-zinc-300 pt-12">
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-8">Engagement Formats</h2>
                    
                    <div className="space-y-6">
                        
                        {/* Format 1 */}
                        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Newsletter Sponsorships</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                                Place your product or tool directly in front of active decision makers. Every sponsorship includes a dedicated slot analyzing a specific system challenge, explaining how your product addresses that constraint.
                            </p>
                            <span className="inline-block px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-mono font-semibold text-zinc-600">
                                Format: Weekly Editions
                            </span>
                        </div>

                        {/* Format 2 */}
                        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Webinars</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                                Collaborate on technical, systems-oriented webinars. We map out real architectural patterns, analyze operational failures, and walk through engineering economics calculations for technical audiences.
                            </p>
                            <span className="inline-block px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-mono font-semibold text-zinc-600">
                                Format: Joint Virtual Broadcast
                            </span>
                        </div>

                        {/* Format 3 */}
                        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Speaking</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                                Book keynote talks or panel moderation focused on the economics of engineering. Topics include R&D capital allocation, the risk of technical insolvency, and architectural control layers for production AI systems.
                            </p>
                            <span className="inline-block px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-mono font-semibold text-zinc-600">
                                Format: Keynotes & Panel Moderation
                            </span>
                        </div>

                        {/* Format 4 */}
                        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Product Reviews</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                                Receive a rigorous, system-level review of your developer tool or AI infrastructure platform. The evaluation focuses on real utility, API latency behavior, and unit economics constraints.
                            </p>
                            <span className="inline-block px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-mono font-semibold text-zinc-600">
                                Format: Technical Audits & Written Analysis
                            </span>
                        </div>

                        {/* Format 5 */}
                        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Advisory Engagements</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-4">
                                Establish structured engagements for private equity due diligence or fractional advisory. We audit engineering pipelines, detect capital bleed, and formulate governance policies for executive teams.
                            </p>
                            <span className="inline-block px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-mono font-semibold text-zinc-600">
                                Format: Retainers & Strategic Diagnostics
                            </span>
                        </div>

                    </div>
                </section>

                {/* Section 4: Contact Form */}
                <section className="mb-16 border-t border-zinc-300 pt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-4">Initiate a Partnership</h2>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-6">
                                If your organization builds tools that reduce technical debt or optimize engineering efficiency, we should coordinate.
                            </p>
                            <p className="text-sm text-zinc-700 leading-relaxed mb-6">
                                To ensure alignment, every sponsorship slot or speaking engagement is selected based on real architectural utility. We do not participate in generic marketing promotion.
                            </p>
                            <div className="bg-zinc-100 border border-zinc-300 rounded-2xl p-6">
                                <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">Direct Coordination</h4>
                                <p className="text-xs text-zinc-700 leading-relaxed font-semibold">
                                    Inquiries can also be sent directly to <a href="mailto:richard@richardewing.io" className="text-indigo-600 hover:underline">richard@richardewing.io</a> with the subject line "Partnership Inquiry".
                                </p>
                            </div>
                        </div>
                        <div>
                            <PartnerContactForm />
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
