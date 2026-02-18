
export const NewsletterSignup = ({ variant = 'default' }: { variant?: 'default' | 'compact' | 'full' }) => {

    const beehiivUrl = 'https://theproducteconomist.beehiiv.com/subscribe';

    if (variant === 'compact') {
        return (
            <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm font-grotesk">Get new articles first:</span>
                <a
                    href={beehiivUrl}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-500 transition-colors font-grotesk"
                >
                    Subscribe on Beehiiv →
                </a>
            </div>
        );
    }

    if (variant === 'full') {
        return (
            <div className="card p-8 text-center border-purple-500/30 bg-purple-900/10">
                <div className="text-xs text-purple-400 uppercase tracking-wide mb-4 font-mono">
                    Monthly Newsletter
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-grotesk">
                    Executive Briefings
                </h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                    Dense, actionable intelligence for leaders who don't have time for "thought leadership."
                    <br /><span className="text-white">Read time: 5-10 minutes each.</span>
                </p>
                <a
                    href={beehiivUrl}
                    target="_blank"
                    className="inline-block px-8 py-4 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 mb-4 transition-colors font-grotesk"
                >
                    Subscribe on Beehiiv →
                </a>
                <p className="text-gray-500 text-sm">
                    Join 2,000+ executives. One email per month. Unsubscribe anytime.
                </p>
            </div>
        );
    }

    // Default
    return (
        <div className="card p-6">
            <h3 className="text-lg font-semibold text-white mb-2 font-grotesk">
                Get New Briefs First
            </h3>
            <p className="text-gray-400 text-sm mb-4">
                One email per month. No spam. Unsubscribe anytime.
            </p>
            <a
                href={beehiivUrl}
                target="_blank"
                className="inline-block px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors font-grotesk"
            >
                Subscribe on Beehiiv →
            </a>
        </div>
    );
};
