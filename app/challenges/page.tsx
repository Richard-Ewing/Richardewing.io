import { Metadata } from 'next';
import Link from 'next/link';
import { challenges } from './data';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/challenges' },
    title: 'Enterprise Challenges | Operational Intelligence',
    description: 'Programmatic solutions for specific governance drifts and enterprise AI failures identified in our diagnostic tools.',
};

export default function ChallengesIndexPage() {
    return (
        <div className="max-w-4xl w-full relative z-10 mx-auto">
            <header className="mb-12 border-b border-zinc-400 pb-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                        <ShieldAlert className="w-5 h-5 text-red-900" />
                    </div>
                    <div className="text-sm font-mono text-zinc-900 uppercase tracking-widest font-bold">
                        Enterprise Failure Modes
                    </div>
                </div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-4">
                    Challenges
                </h1>
                <p className="text-xl text-zinc-900 font-semibold leading-relaxed">
                    Identify your organizational pain point and map it directly to the exact diagnostic, framework, and runtime enforcement required to resolve it.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {challenges.map((challenge) => (
                    <Link
                        key={challenge.slug}
                        href={`/challenges/${challenge.slug}`}
                        className="group flex flex-col p-6 rounded-2xl bg-zinc-50 border border-zinc-400 hover:border-cyan-500/50 transition-colors h-full"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-grotesk font-bold text-zinc-950 group-hover:text-cyan-900 transition-colors">
                                {challenge.title}
                            </h2>
                            <ArrowRight className="w-5 h-5 text-zinc-900 font-medium group-hover:text-cyan-500 transition-colors" />
                        </div>
                        <p className="text-sm text-zinc-900 font-medium font-bold leading-relaxed flex-1 mb-6">
                            {challenge.description}
                        </p>
                        
                        <div className="pt-4 border-t border-zinc-300">
                            <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-800 mb-2">
                                <span>Remediation Path</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center px-2 py-1 rounded bg-zinc-200 text-zinc-900 text-xs font-bold font-mono">
                                    {challenge.diagnosticName.split(' ')[0]}
                                </span>
                                <span className="inline-flex items-center px-2 py-1 rounded bg-zinc-200 text-zinc-900 text-xs font-bold font-mono">
                                    {challenge.frameworkName}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
