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

const audienceSegments = [
    "Product Managers and Product Leaders",
    "Engineering Leaders and Chief Technology Officers",
    "Software Engineers and AI Practitioners",
    "Founders and Technology Executives",
    "Recruiters and HR Leaders"
];

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
                    <p className="text-sm text-zinc-900 leading-relaxed font-semibold mb-6">
                        Rather than chasing traditional influence or surface-level views, this platform focuses on high-intent engagement from professionals who actively govern technology systems and allocate engineering capital.
                    </p>

                    <div className="bg-white border border-zinc-300 rounded-3xl p-8 mb-8 shadow-sm">
                        <h3 className="text-base font-bold text-zinc-950 mb-4 font-mono uppercase tracking-wide">Primary Audience Composition</h3>
                        <ul className="space-y-3">
                            {audienceSegments.map((segment, index) => (
                                <li key={index} className="flex items-center gap-3 text-sm font-semibold text-zinc-900">
                                    <span className="text-emerald-600 font-bold">✓</span>
                                    {segment}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">LinkedIn Reach</div>
                                <div className="text-2xl font-bold text-zinc-950 mb-2">10,845 Followers</div>
                            </div>
                            <p className="text-[10px] text-zinc-500 font-semibold mt-4 leading-normal">
                                Source: LinkedIn Analytics, July 2026. Verified network of engineering directors, staff architects, and tech executives.
                            </p>
                        </div>

                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">Newsletter Column</div>
                                <div className="text-2xl font-bold text-zinc-950 mb-2">1,362 Subscribers</div>
                            </div>
                            <p className="text-[10px] text-zinc-500 font-semibold mt-4 leading-normal">
                                Source: LinkedIn Newsletter Dashboard, July 2026. Professional readers subscribed to The AI Economist column.
                            </p>
                        </div>

                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">AI SEARCH AUTHORITY</div>
                                <div className="text-2xl font-bold text-zinc-950 mb-2">778 Citations</div>
                            </div>
                            <p className="text-[10px] text-zinc-500 font-semibold mt-4 leading-normal">
                                Source: Bing Webmaster AI Performance, 3-month rolling. Content cited as primary source in AI-generated answers across enterprise technology topics.
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
                            <h3 className="text-lg font-bold text-zinc-950 mb-2">Newsletter sponsorships</h3>
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

                    {/* Passionfroot Booking */}
                    <div className="mt-8 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                        <div className="md:flex items-center justify-between gap-8">
                            <div className="mb-6 md:mb-0">
                                <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-700 uppercase tracking-widest mb-2">
                                    Instant Booking
                                </div>
                                <h3 className="text-xl font-bold font-grotesk text-zinc-950 mb-2">
                                    Book directly through Passionfroot
                                </h3>
                                <p className="text-zinc-700 text-sm max-w-lg leading-relaxed font-semibold">
                                    Browse available sponsorship slots, speaking formats, and collaboration options. Select a package, pay securely, and coordinate logistics in one place.
                                </p>
                            </div>
                            <a
                                href="https://www.passionfroot.me/richard-ewing"
                                target="_blank"
                                rel="noopener"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-white font-bold rounded-xl transition-all whitespace-nowrap text-sm shadow-sm"
                            >
                                View Passionfroot Storefront
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                            </a>
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
                                <p className="text-xs text-zinc-700 leading-relaxed font-semibold mb-3">
                                    Inquiries can also be sent directly to <a href="mailto:richardewing@exogram.ai" className="text-indigo-600 hover:underline">richardewing@exogram.ai</a> with the subject line "Partnership Inquiry".
                                </p>
                                <p className="text-xs text-zinc-700 leading-relaxed font-semibold">
                                    Or browse and book available slots on <a href="https://www.passionfroot.me/richard-ewing" target="_blank" rel="noopener" className="text-indigo-600 hover:underline">Passionfroot</a>.
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
