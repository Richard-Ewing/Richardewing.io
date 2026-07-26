import type { Metadata } from 'next';
import Image from 'next/image';
import { SpeakingBookingForm } from './SpeakingBookingForm';

export const metadata: Metadata = {
    title: 'Executive Keynotes & Speaking | AI Economics & R&D Strategy',
    description: 'Book Richard Ewing for keynote addresses, board briefings, and executive workshops on AI unit economics, R&D capital governance, and runtime cost control.',
    alternates: { canonical: 'https://www.richardewing.io/speaking' },
    openGraph: {
        title: 'Executive Keynotes & Speaking | Richard Ewing',
        description: 'Book Richard Ewing for keynote addresses, board briefings, and executive workshops on AI unit economics, R&D capital governance, and runtime cost control.',
        url: 'https://www.richardewing.io/speaking',
        siteName: 'Richard Ewing',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Executive Keynotes & Speaking | Richard Ewing',
        description: 'Book Richard Ewing for keynote addresses, board briefings, and executive workshops on AI unit economics, R&D capital governance, and runtime cost control.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

const keynotes = [
    {
        title: 'The Innovation Tax: Why Your R&D Is Just OpEx',
        target: 'CTOs, CFOs, PE Operating Partners',
        description: 'An empirical exploration of how non-deterministic software and prompt bloat convert innovation budgets into recurring maintenance liabilities. Features framework mechanisms for calculating your Product Debt Index.',
    },
    {
        title: 'Deterministic AI Governance Before European AI Act Fines Hit',
        target: 'CISOs, General Counsel, Enterprise Architects',
        description: 'Why probabilistic LLM firewalls fail at scale, and how VPC-level policy-as-code enforces hard context boundaries, prevents data exfiltration, and satisfies regulatory audit standards.',
    },
    {
        title: 'The AI Economist: A New Role for the C-Suite',
        target: 'Board Directors, CEOs, Managing Directors',
        description: 'Why traditional financial models misprice software development in the generative era, and how leading technology companies track Revenue Per Engineer and AI Provider Efficiency Ratios.',
    },
];

export default function SpeakingPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-5xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <div className="text-xs font-mono font-bold text-amber-900 uppercase tracking-widest mb-3">
                        Keynotes & Executive Briefings
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        Partner with Richard Ewing
                    </h1>
                    <p className="text-xl text-zinc-900 font-medium leading-relaxed">
                        Delivering board-level insights on AI unit economics, engineering capital allocation, and runtime governance to executive leadership teams globally.
                    </p>
                </div>

                {/* Keynote Topics Section */}
                <div className="mb-20">
                    <h2 className="text-xs font-mono font-bold text-zinc-900 uppercase tracking-widest mb-8 text-center">
                        Featured Keynote Presentations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {keynotes.map((kt, idx) => (
                            <div key={idx} className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-mono font-bold rounded-md uppercase tracking-wider mb-4">
                                        Topic #{idx + 1}
                                    </span>
                                    <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-3 leading-snug">
                                        {kt.title}
                                    </h3>
                                    <p className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider mb-4">
                                        Audience: {kt.target}
                                    </p>
                                    <p className="text-sm font-medium text-zinc-800 leading-relaxed mb-6">
                                        {kt.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Media & Published Proof */}
                <div className="bg-white border border-zinc-300 rounded-3xl p-8 sm:p-12 mb-20 shadow-sm">
                    <div className="max-w-3xl">
                        <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest mb-3 block">
                            Published In & Speaking Experience
                        </span>
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-6">
                            Thought Leadership & Executive Authored Work
                        </h2>
                        <p className="text-zinc-800 text-base font-medium leading-relaxed mb-8">
                            Richard Ewing writes on AI economics and engineering governance across leading publications including CIO.com, Built In, HackerNoon, and Mind the Product, reaching over 10,800 technology executives.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-zinc-200">
                            <div>
                                <div className="text-2xl font-grotesk font-bold text-zinc-950">10,800+</div>
                                <div className="text-xs font-mono font-semibold text-zinc-700">Executive Reach</div>
                            </div>
                            <div>
                                <div className="text-2xl font-grotesk font-bold text-zinc-950">136+</div>
                                <div className="text-xs font-mono font-semibold text-zinc-700">Published Frameworks</div>
                            </div>
                            <div>
                                <div className="text-2xl font-grotesk font-bold text-zinc-950">$0 to $25M</div>
                                <div className="text-xs font-mono font-semibold text-zinc-700">ARR Scaled</div>
                            </div>
                            <div>
                                <div className="text-2xl font-grotesk font-bold text-zinc-950">MBA / CS</div>
                                <div className="text-xs font-mono font-semibold text-zinc-700">Finance & CompSci</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Speaker Kit & Download */}
                <div className="bg-zinc-900 text-white rounded-3xl p-8 sm:p-12 mb-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-4">
                            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">
                                Event Organizers
                            </span>
                            <h3 className="text-2xl font-grotesk font-bold">
                                Download Executive Speaker Kit
                            </h3>
                            <p className="text-zinc-300 text-sm font-medium leading-relaxed max-w-xl">
                                Access high-res headshots, official 150-word & 300-word executive bios, talk abstracts, and standard AV specifications for conference planning.
                            </p>
                        </div>
                        <a 
                            href="/assets/images/headshot.jpg"
                            download="Richard_Ewing_Headshot.jpg"
                            className="px-6 py-3 bg-white text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-colors whitespace-nowrap"
                        >
                            Download Speaker Assets ↓
                        </a>
                    </div>
                </div>

                {/* Booking Form Section */}
                <div className="bg-white border border-zinc-300 rounded-3xl p-8 sm:p-12 shadow-sm">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-10">
                            <span className="text-xs font-mono font-bold text-amber-900 uppercase tracking-widest mb-2 block">
                                Direct Scheduling
                            </span>
                            <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-3">
                                Request Keynote or Briefing Availability
                            </h2>
                            <p className="text-zinc-700 text-sm font-medium">
                                Submit your event details below. We confirm availability and custom abstract tailoring within 24 hours.
                            </p>
                        </div>

                        <SpeakingBookingForm />
                    </div>
                </div>

            </div>
        </main>
    );
}
