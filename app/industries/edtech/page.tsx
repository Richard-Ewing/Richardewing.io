import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Product Economics for EdTech — Learning Platform Debt & A...',
    description: 'Product economics advisory for EdTech companies. Learning platform technical debt, AI tutor governance, content delivery costs, and accessibility compli...',
    keywords: ['edtech technical debt', 'learning platform engineering', 'AI tutor governance', 'edtech CTO advisor', 'FERPA compliance', 'educational AI'],
    alternates: { canonical: 'https://www.richardewing.io/industries/edtech' },
    openGraph: { title: 'Product Economics for EdTech', description: 'Learning platform debt, AI tutor governance, and accessibility compliance for education technology.', url: 'https://www.richardewing.io/industries/edtech', type: 'website' },
};

const challenges = [
    { icon: '📚', title: 'Content Delivery Debt', description: 'Video streaming, interactive content, and real-time collaboration create infrastructure costs that scale non-linearly with user growth. Peak usage durin...' },
    { icon: '🤖', title: 'AI Tutor Governance', description: 'AI tutors must be pedagogically sound, age-appropriate, and bias-free. Unlike enterprise AI, errors in educational AI directly impact learning outcomes ...' },
    { icon: '♿', title: 'Accessibility Requirements', description: 'ADA, Section 508, WCAG 2.1 AA compliance creates significant engineering overhead. EdTech products must be accessible to all learners, including those w...' },
    { icon: '🔐', title: 'FERPA & COPPA', description: 'Student data privacy laws (FERPA for higher ed, COPPA for K-12) create strict data handling requirements. Non-compliance can result in loss of instituti...' },
];

export default function EdTechPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-medium font-mono text-zinc-800 uppercase tracking-widest">
                        <Link href="/industries" className="hover:text-cyan-400">Industries</Link><span>/</span><span className="text-pink-400 font-bold">EdTech</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Product Economics for{' '}
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
                            <Link href="/advisory" className="px-6 py-3 rounded-lg border border-zinc-500 text-zinc-950 font-bold hover:bg-white/5">Book Advisory →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
