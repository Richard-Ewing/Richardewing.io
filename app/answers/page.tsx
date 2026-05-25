import { Metadata } from 'next';
import Link from 'next/link';
import { SPOKE_MATRIX, Persona } from '../lib/spoke-data';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/answers' },
    title: 'AI & Engineering Economics Q&A | Richard Ewing',
    description: 'Expert answers on AI economics, technical debt, engineering productivity, and R&D capital allocation. Searchable knowledge base.',
};

export default function AnswersHubPage() {
    return (
        <div className="max-w-4xl mx-auto pt-12 pb-24 px-6 relative z-10">
            <header className="mb-16 border-b border-zinc-400 pb-12">
                <span className="text-cyan-900 font-extrabold font-mono text-xs uppercase tracking-widest mb-4 block">Knowledge Base</span>
                <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6 leading-tight">
                    Engineering Economics <br /> Answer Matrix.
                </h1>
                <p className="text-xl text-zinc-900 font-bold leading-relaxed font-serif italic">
                    Hyper-specific answers to the hard questions on AI unit economics, technical debt, and R&D capital efficiency. Select your persona block below.
                </p>
            </header>

            <div className="space-y-16">
                {SPOKE_MATRIX.map((topic) => (
                    <section key={topic.topicSlug} className="bg-white/50 border border-zinc-400 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-400/50">
                            <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                            <h2 className="text-2xl font-bold text-zinc-950 font-grotesk">{topic.topicName}</h2>
                        </div>

                        <div className="space-y-12">
                            {Object.entries(topic.personas).map(([personaStr, queries]) => {
                                const persona = personaStr as Persona;
                                return (
                                    <div key={persona} className="space-y-4">
                                        <h3 className="text-sm font-bold font-mono text-zinc-900 uppercase tracking-widest bg-zinc-200/50 inline-block px-3 py-1 rounded">
                                            For: {persona.replace('-', ' ')}
                                        </h3>
                                        <ul className="space-y-3">
                                            {queries?.map((query) => (
                                                <li key={query.questionSlug} className="group">
                                                    <Link 
                                                        href={`/answers/${topic.topicSlug}/${persona}/${query.questionSlug}`}
                                                        className="flex items-start gap-3 p-4 bg-white/60 hover:bg-white border border-zinc-400/50 hover:border-cyan-500/50 rounded-xl transition-all"
                                                    >
                                                        <span className="text-cyan-900 font-bold mt-0.5">→</span>
                                                        <span className="text-zinc-950 font-bold group-hover:text-cyan-900 transition-colors">
                                                            {query.questionHeadline}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
