"use client";

import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const NewsletterSection = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section ref={ref} className={`py-24 px-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-4xl mx-auto">

                <div className="p-12 rounded-3xl bg-[var(--bg-secondary)] border border-white/10 text-center relative overflow-hidden">

                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

                    <div className="relative z-10">
                        <span className="text-[var(--accent-purple)] font-bold tracking-widest text-sm uppercase mb-4 block">Executive Briefings</span>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Product Economist Newsletter</h2>

                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Subscribe and get the <strong className="text-white">R&D Audit Checklist</strong> — The 15 questions I ask in every $7,500 engagement.
                        </p>

                        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-6 py-4 rounded-lg bg-[var(--bg-primary)] border border-white/10 text-white focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="px-8 py-4 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-colors whitespace-nowrap"
                            >
                                Get Checklist →
                            </button>
                        </form>

                        Monthly. No fluff. 2,000+ executives read before they decide.
                    </p>

                    <div className="mt-6 border-t border-white/10 pt-6">
                        <Link href="/tools" className="text-xs text-gray-500 hover:text-white uppercase tracking-widest transition-colors flex items-center justify-center gap-2 group">
                            Or try my free tools
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
        </section >
    );
};

export default NewsletterSection;
