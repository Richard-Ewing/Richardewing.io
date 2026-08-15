import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'EdTech AI Economics & LLM Inference Costs',
    description: 'Analyze student-facing AI tutor unit economics, curriculum database technical debt, and LMS integration burdens.',
    keywords: ['edtech technical debt', 'learning platform engineering', 'AI tutor governance', 'edtech CTO advisor', 'FERPA compliance', 'educational AI'],
    alternates: { canonical: 'https://www.richardewing.io/industries/edtech' },
    openGraph: { title: 'AI Economics for EdTech', description: 'Learning platform debt, AI tutor governance, and accessibility compliance for education technology.', url: 'https://www.richardewing.io/industries/edtech', type: 'website' },
};

const challenges = [
    { icon: '📚', title: 'Content Delivery Debt', description: 'Video streaming and real-time collaboration create infrastructure costs that scale non-linearly with student growth.' },
    { icon: '🤖', title: 'AI Tutor Governance', description: 'AI tutors must be pedagogically sound and bias-free. Errors in educational AI directly impact student learning outcomes.' },
    { icon: '♿', title: 'Accessibility Requirements', description: 'ADA and WCAG compliance create significant engineering overhead. EdTech products must support all learners and adaptive devices.' },
    { icon: '🔐', title: 'FERPA & COPPA', description: 'Student data privacy laws (FERPA, COPPA) create strict data handling requirements. Non-compliance risks institutional access.' },
];

export default function EdTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/system" className="hover:text-cyan-900 font-extrabold font-semibold">Industries</Link><span>/</span><span className="text-pink-400 font-bold">EdTech</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        AI Economics for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">EdTech</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        EdTech platforms face the unique challenge of serving millions of concurrent users during school hours while maintaining accessibility, privacy compliance, and pedagogical integrity. The economics are unforgiving.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {challenges.map((c, i) => (
                            <div key={i} className="rounded-xl border border-zinc-400 p-6 hover:border-pink-500/30 transition-colors">
                                <div className="text-2xl mb-3">{c.icon}</div>
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-2">{c.title}</h3>
                                <p className="text-zinc-900 text-sm">{c.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-pink-500/30 bg-pink-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">How I Help EdTech Companies</h2>
                        <ul className="space-y-3 text-zinc-950 mb-8">
                            <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">→</span> <span>Quantify content delivery and infrastructure debt as platform scales</span></li>
                            <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">→</span> <span>Audit AI tutor models for pedagogical accuracy and age-appropriateness</span></li>
                            <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">→</span> <span>Calculate the engineering cost of accessibility and privacy compliance</span></li>
                            <li className="flex items-start gap-3"><span className="text-pink-400 mt-1">→</span> <span>Model unit economics for freemium-to-institutional conversion funnels</span></li>
                        </ul>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/tools/pdi" className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-rose-600 text-zinc-950 font-semibold font-bold hover:opacity-90">Free PDI Assessment →</Link>
                            <Link href="/services" className="px-6 py-3 rounded-lg border border-zinc-500 text-zinc-950 font-bold hover:bg-white/5">Book Advisory →</Link>
                        </div>
                    
                    <AdvisoryCTA variant="industry" />
</div>
                </div>
            </div>
        </main>
    );
}
