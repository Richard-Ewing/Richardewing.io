
const profiles = [
    {
        publication: 'CIO.com',
        role: 'Expert Contributor',
        description: 'Monthly columnist for enterprise technology network.',
        url: 'https://www.cio.com/author/richard-ewing/',
        logo: '/logos/cio-logo.svg',
        width: 60,
        articleCount: 12,
        featured: true
    },
    {
        publication: 'Built In',
        role: 'Expert Contributor',
        description: 'Monthly columnist. Jan 2026 article featured in Editor\'s Newsletter.',
        url: 'https://builtin.com/authors/richard-ewing',
        logo: '/logos/builtin-logo.svg',
        width: 80,
        articleCount: 8,
        featured: true
    },
    {
        publication: 'Mind the Product',
        role: 'Contributor',
        description: 'Product management community. 300K+ members.',
        url: 'https://www.mindtheproduct.com/author/richard-ewing/',
        logo: '/logos/mindtheproduct-logo.svg',
        width: 60,
        articleCount: 4,
        featured: false
    },
    {
        publication: 'HackerNoon',
        role: 'Published Author',
        description: 'Tech publication with 4M+ monthly readers.',
        url: 'https://hackernoon.com/u/richardewing',
        logo: '/logos/hackernoon-logo.svg',
        width: 100,
        articleCount: 6,
        featured: false
    },
    {
        publication: 'Beehiiv',
        role: 'Publisher',
        description: 'The Product Economist — Executive Briefings.',
        url: 'https://theproducteconomist.beehiiv.com',
        logo: '/logos/beehiiv-logo.svg',
        width: 80,
        articleCount: null,
        featured: true
    },
    {
        publication: 'LinkedIn',
        role: 'Thought Leadership',
        description: 'Professional network presence.',
        url: 'https://linkedin.com/in/richardewing',
        logo: '/logos/linkedin-logo.svg',
        width: 24,
        articleCount: null,
        featured: false
    }
];

export const PublishedProfiles = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h2>Where I Publish</h2>
                <p>Find my work across these publications.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {profiles.map((profile) => (
                    <a
                        key={profile.publication}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`card hover:border-purple-500/50 group block ${profile.featured ? 'border-purple-500/30 bg-purple-900/5' : ''}`}
                    >
                        <div className="flex items-start gap-4">
                            <div className="bg-white/5 p-2 rounded-lg">
                                <img
                                    src={profile.logo}
                                    alt={profile.publication}
                                    className="w-16 h-8 object-contain grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                                        {profile.publication}
                                    </h3>
                                    {profile.featured && (
                                        <span className="text-[10px] uppercase tracking-wider text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded-full">Featured</span>
                                    )}
                                </div>
                                <p className="text-xs text-cyan-400 mb-2 font-mono uppercase tracking-wide">{profile.role}</p>
                                <p className="text-gray-400 text-sm mb-2">{profile.description}</p>
                                {profile.articleCount && (
                                    <p className="text-gray-500 text-xs mt-1 font-mono">
                                        {profile.articleCount} articles
                                    </p>
                                )}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};
