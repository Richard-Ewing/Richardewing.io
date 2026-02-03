"use client";

import Link from 'next/link';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const Hero = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref} className={`min-h-[90vh] flex items-center justify-center px-6 py-24 relative overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>

            {/* Background gradients or effects can go here */}
            <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent opacity-50 pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center relative z-10">

                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-purple)]/10 border border-[var(--accent-purple)]/30 mb-8 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-gray-300">Independent R&D Oversight</span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up delay-100">
                    <span className="text-white">I audit engineering spend and surface the capital risks your </span>
                    <span className="gradient-text">
                        metrics don't show.
                    </span>
                </h1>

                {/* Credibility line */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-16 text-gray-400 animate-fade-in-up delay-200">
                    <span>Richard Ewing, Product Economist</span>
                    <span className="hidden md:inline">•</span>
                    <span>$25M ARR scaled</span>
                    <span className="hidden md:inline">•</span>
                    <span>Published in Foundry & Built In</span>
                </div>

                {/* Path Selector - 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-300">

                    <PathCard
                        icon="📊"
                        title="Get an Audit"
                        description="Diagnose my R&D economics"
                        href="/advisory"
                        variant="primary"
                    />

                    <PathCard
                        icon="📖"
                        title="Learn the Framework"
                        description="Read the doctrine"
                        href="/doctrine"
                        variant="secondary"
                    />

                    <PathCard
                        icon="🔧"
                        title="See What I Build"
                        description="Explore Exogram"
                        href="/exogram"
                        variant="secondary"
                    />

                </div>

            </div>
        </section>
    );
};

const PathCard = ({ icon, title, description, href, variant }: { icon: string, title: string, description: string, href: string, variant: 'primary' | 'secondary' }) => {
    const isPrimary = variant === 'primary';

    return (
        <Link
            href={href}
            className={`group relative p-8 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center
        ${isPrimary
                    ? 'bg-[var(--glass-bg)] border-[var(--accent-crimson)] hover:bg-[var(--accent-crimson)]/10 shadow-[0_0_20px_rgba(255,68,68,0.1)] hover:shadow-[0_0_30px_rgba(255,68,68,0.2)]'
                    : 'bg-[var(--glass-bg)] border-white/10 hover:border-[var(--accent-purple)] hover:bg-white/5'
                }
      `}
        >
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{icon}</div>
            <h3 className={`text-xl font-bold mb-2 ${isPrimary ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                {title}
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-gray-300">
                {description}
            </p>

            {isPrimary && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-[var(--accent-crimson)] rounded-b-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            )}
        </Link>
    );
};

export default Hero;
