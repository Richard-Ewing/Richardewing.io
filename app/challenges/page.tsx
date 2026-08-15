import { Metadata } from 'next';
import Link from 'next/link';
import { challenges, Challenge } from './data';
import { ArrowRight, DollarSign, Shield, AlertTriangle, LucideIcon } from 'lucide-react';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/challenges' },
    title: 'Enterprise AI Failure Modes & Challenges',
    description: 'Nine enterprise failure modes where AI creates measurable financial risk. From billing shock to governance drift, with diagnostic and remediation paths.',
    openGraph: {
        title: 'Enterprise AI Challenges - Cost, Governance & Engineering Economics',
        description: 'Nine enterprise failure modes where AI creates measurable financial risk. Each challenge maps to a diagnostic and remediation path.',
        url: 'https://www.richardewing.io/challenges',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Enterprise AI Challenges - Cost, Governance & Engineering Economics',
        description: 'Nine enterprise failure modes where AI creates measurable financial risk. Each challenge maps to a diagnostic and remediation path.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

const ChallengeCard = ({ challenge }: { challenge: Challenge }) => {
    return (
        <Link 
            href={`/challenges/${challenge.slug}`}
            className="group block bg-white border border-zinc-200 rounded-2xl p-8 hover:shadow-xl hover:border-zinc-300 transition-all duration-300 flex flex-col h-full"
        >
            <div className="flex-grow">
                <h3 className="font-grotesk font-bold text-2xl text-zinc-900 mb-4 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                    {challenge.title}
                    <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1" />
                </h3>
                <p className="text-sm text-zinc-700 leading-relaxed mb-8">
                    {challenge.description}
                </p>
            </div>
            
            <div className="pt-6 border-t border-zinc-100 mt-auto">
                <div className="text-xs font-mono text-zinc-500 mb-3 uppercase tracking-wider">
                    Remediation Path
                </div>
                <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800">
                        {challenge.diagnosticName}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800">
                        {challenge.frameworkName}
                    </span>
                </div>
            </div>
        </Link>
    );
};

interface CategorySectionProps {
    title: string;
    description: string;
    icon: LucideIcon;
    colorClass: string;
    bgClass: string;
    challenges: Challenge[];
}

const CategorySection = ({ title, description, icon: Icon, colorClass, bgClass, challenges }: CategorySectionProps) => {
    if (challenges.length === 0) return null;
    
    return (
        <section className="mb-24">
            <div className="mb-10 max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bgClass}`}>
                        <Icon className={`w-5 h-5 ${colorClass}`} />
                    </div>
                    <h2 className="font-mono text-sm font-bold tracking-widest uppercase text-zinc-900">
                        {title}
                    </h2>
                </div>
                <p className="text-zinc-600 text-lg leading-relaxed">
                    {description}
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challenges.map((challenge) => (
                    <ChallengeCard key={challenge.slug} challenge={challenge} />
                ))}
            </div>
        </section>
    );
};

export default function ChallengesPage() {
    const economicsChallenges = challenges.filter(c => c.category === 'ai-economics');
    const governanceChallenges = challenges.filter(c => c.category === 'engineering-governance');
    const operationalChallenges = challenges.filter(c => c.category === 'operational-risk');

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-5xl mx-auto px-6">
                {/* Hero Section */}
                <div className="max-w-4xl mb-24">
                    <div className="mb-6 flex items-center gap-2 text-sm font-mono text-zinc-500 uppercase tracking-widest">
                        <span>Problems</span>
                        <span className="text-zinc-300">/</span>
                        <span className="text-zinc-900 font-medium">Enterprise AI Challenges</span>
                    </div>
                    
                    <h1 className="font-grotesk text-5xl md:text-6xl font-bold text-zinc-900 tracking-tight leading-tight mb-8">
                        The question is not whether AI works.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            The question is whether AI pays.
                        </span>
                    </h1>
                    
                    <p className="text-xl text-zinc-700 leading-relaxed max-w-3xl mb-10">
                        Nine measurable failure modes where enterprise AI creates financial risk, governance exposure, or engineering waste. Each challenge maps directly to a diagnostic assessment and remediation framework.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <Link 
                            href="/assessment" 
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors shadow-sm"
                        >
                            Take the AI Economics Assessment
                        </Link>
                        <Link 
                            href="/services" 
                            className="text-zinc-600 font-medium hover:text-zinc-900 transition-colors flex items-center gap-1 group"
                        >
                            Or book a $450 diagnostic
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Category Sections */}
                <CategorySection
                    title="AI Economics"
                    description="Where AI spending exceeds AI returns. Cost visibility gaps, margin collapse, workforce ROI failure, and compliance exposure."
                    icon={DollarSign}
                    colorClass="text-rose-600"
                    bgClass="bg-rose-100"
                    challenges={economicsChallenges}
                />
                
                <CategorySection
                    title="Engineering Governance"
                    description="Where architectural drift, technical debt, and policy violations compound into structural risk."
                    icon={Shield}
                    colorClass="text-violet-600"
                    bgClass="bg-violet-100"
                    challenges={governanceChallenges}
                />
                
                <CategorySection
                    title="Operational Risk"
                    description="Where AI agents and LLM outputs create unpredictable failure cascades in production systems."
                    icon={AlertTriangle}
                    colorClass="text-amber-600"
                    bgClass="bg-amber-100"
                    challenges={operationalChallenges}
                />

                {/* Assessment Bridge */}
                <div className="mt-16 bg-zinc-950 text-white rounded-3xl p-10 md:p-16 flex flex-col items-center text-center">
                    <h2 className="font-grotesk text-3xl md:text-4xl font-bold mb-4">
                        Not sure which challenge applies to you?
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mb-10 leading-relaxed">
                        The AI Economics Assessment asks 15 questions about your infrastructure and identifies your specific risk areas in under 5 minutes.
                    </p>
                    <Link 
                        href="/assessment" 
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-zinc-900 bg-white rounded-full hover:bg-zinc-100 transition-colors shadow-lg shadow-white/10"
                    >
                        Start the Free Assessment
                    </Link>
                </div>
            </div>
        </main>
    );
}
