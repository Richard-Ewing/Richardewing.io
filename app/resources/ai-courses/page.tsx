import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Free AI Courses — Anthropic Academy Curated by Richard Ewing | 2026',
    description: 'The best free AI courses from Anthropic Academy, curated for technology leaders, developers, and board directors. Learn Claude, MCP, AI Fluency, and API development — all free with certificates.',
    keywords: [
        'Anthropic courses', 'free AI courses 2026', 'Claude courses', 'Anthropic Academy',
        'AI fluency course', 'MCP course', 'Claude API course', 'free AI training',
        'AI courses for leaders', 'AI courses for developers', 'Claude Code course',
        'Model Context Protocol course', 'AI governance training', 'Richard Ewing AI courses',
    ],
    alternates: { canonical: 'https://www.richardewing.io/resources/ai-courses' },
    openGraph: {
        title: 'Free AI Courses — Anthropic Academy, Curated | Richard Ewing',
        description: 'The 15 best free AI courses from Anthropic Academy. Curated for leaders, builders, and architects by Richard Ewing.',
        url: 'https://www.richardewing.io/resources/ai-courses',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free AI Courses — Anthropic Academy Curated | Richard Ewing',
        description: '15 free courses from Anthropic Academy. Curated for technology leaders and developers.',
    },
};

const tracks = [
    {
        id: 'leaders',
        label: 'For Leaders',
        icon: '🎯',
        color: 'cyan',
        borderColor: 'border-cyan-500/30',
        bgColor: 'bg-cyan-500/10',
        textColor: 'text-cyan-400',
        description: 'Build AI fluency for strategic decision-making. No coding required.',
        courses: [
            {
                name: 'Claude 101',
                url: 'https://anthropic.skilljar.com/claude-101',
                description: 'Learn how to use Claude for everyday work tasks, understand core features, and explore resources for advanced learning.',
                editorial: 'Start here. Every technology leader should understand what Claude can and cannot do before making procurement or build decisions.',
            },
            {
                name: 'AI Fluency: Framework & Foundations',
                url: 'https://anthropic.skilljar.com/ai-fluency-framework-foundations',
                description: 'Learn to collaborate with AI systems effectively, efficiently, ethically, and safely.',
                editorial: 'The best single course for board directors and C-suite executives. Covers the ethical and safety considerations that matter in governance conversations.',
            },
            {
                name: 'Introduction to Claude Cowork',
                url: 'https://anthropic.skilljar.com/introduction-to-claude-cowork',
                description: 'Learn to work alongside Claude on your real files and projects with the Cowork task loop, plugins, and multi-step workflows.',
                editorial: 'Hands-on course for leaders who want to use Claude as a daily productivity tool — not just understand it theoretically.',
            },
        ],
    },
    {
        id: 'builders',
        label: 'For Builders',
        icon: '🛠️',
        color: 'purple',
        borderColor: 'border-purple-500/30',
        bgColor: 'bg-purple-500/10',
        textColor: 'text-purple-400',
        description: 'Integrate Claude into your development workflow. Ship AI-powered features.',
        courses: [
            {
                name: 'Building with the Claude API',
                url: 'https://anthropic.skilljar.com/claude-with-the-anthropic-api',
                description: 'Comprehensive course covering API requests, prompt design, and integrating Claude with external services.',
                editorial: 'Essential for any developer building AI features. Pair this with my AUEB calculator to validate your unit economics before you ship.',
            },
            {
                name: 'Claude Code in Action',
                url: 'https://anthropic.skilljar.com/claude-code-in-action',
                description: 'Integrate Claude Code into your development workflow — read files, run commands, edit code, and automate tasks.',
                editorial: 'The practical "get things done" course. If your team uses Claude Code, this is required training.',
            },
            {
                name: 'Introduction to Agent Skills',
                url: 'https://anthropic.skilljar.com/introduction-to-agent-skills',
                description: 'Build, configure, and share Skills in Claude Code — reusable markdown instructions that Claude applies to the right tasks.',
                editorial: 'Skills are how you scale AI productivity across a team. This eliminates the "everyone prompts differently" problem.',
            },
            {
                name: 'Introduction to Subagents',
                url: 'https://anthropic.skilljar.com/introduction-to-subagents',
                description: 'Use and create sub-agents in Claude Code to manage context, delegate tasks, and build specialized workflows.',
                editorial: 'Advanced but critical for complex codebases. Subagents keep main conversations clean while delegating specialized work.',
            },
        ],
    },
    {
        id: 'architects',
        label: 'For Architects',
        icon: '🔌',
        color: 'emerald',
        borderColor: 'border-emerald-500/30',
        bgColor: 'bg-emerald-500/10',
        textColor: 'text-emerald-400',
        description: 'Design production AI systems. MCP, cloud integrations, and infrastructure.',
        courses: [
            {
                name: 'Introduction to Model Context Protocol',
                url: 'https://anthropic.skilljar.com/introduction-to-model-context-protocol',
                description: 'Build MCP servers and clients from scratch using Python. Master tools, resources, and prompts to connect Claude with external services.',
                editorial: 'MCP is the emerging standard for AI-to-tool communication. Exogram uses MCP for its verification infrastructure. This is the foundation course.',
            },
            {
                name: 'MCP: Advanced Topics',
                url: 'https://anthropic.skilljar.com/model-context-protocol-advanced-topics',
                description: 'Advanced implementation patterns including sampling, notifications, file system access, and transport mechanisms.',
                editorial: 'Take this after the intro. Production MCP deployments require understanding sampling and transport — this covers both.',
            },
            {
                name: 'Claude with Amazon Bedrock',
                url: 'https://anthropic.skilljar.com/claude-in-amazon-bedrock',
                description: 'Full training for working with Anthropic models through AWS Bedrock — originally created as an AWS accreditation program.',
                editorial: 'If your infrastructure runs on AWS, this is how you deploy Claude at enterprise scale.',
            },
            {
                name: 'Claude with Google Cloud Vertex AI',
                url: 'https://anthropic.skilljar.com/claude-with-google-vertex',
                description: 'Comprehensive course covering working with Anthropic models through Google Cloud\'s Vertex AI.',
                editorial: 'The GCP equivalent of the Bedrock course. Choose based on your cloud provider.',
            },
        ],
    },
    {
        id: 'educators',
        label: 'For Educators & Nonprofits',
        icon: '🎓',
        color: 'amber',
        borderColor: 'border-amber-500/30',
        bgColor: 'bg-amber-500/10',
        textColor: 'text-amber-400',
        description: 'Bring AI fluency into classrooms, teams, and organizations.',
        courses: [
            {
                name: 'AI Fluency for Educators',
                url: 'https://anthropic.skilljar.com/ai-fluency-for-educators',
                description: 'Empowers faculty, instructional designers, and educational leaders to apply AI Fluency in teaching and institutional strategy.',
                editorial: 'If you\'re responsible for upskilling a team, this is the course to take first — then use it as a template for your own training programs.',
            },
            {
                name: 'Teaching AI Fluency',
                url: 'https://anthropic.skilljar.com/teaching-ai-fluency',
                description: 'Empowers academic faculty, instructional designers, and others to teach and assess AI Fluency in instructor-led settings.',
                editorial: 'The "train the trainer" course. For organizations building internal AI education programs.',
            },
            {
                name: 'AI Fluency for Students',
                url: 'https://anthropic.skilljar.com/ai-fluency-for-students',
                description: 'Develop AI Fluency skills that enhance learning, career planning, and academic success through responsible AI collaboration.',
                editorial: 'Recommend to junior engineers and new graduates. Sets the right foundation for AI-augmented work.',
            },
            {
                name: 'AI Fluency for Nonprofits',
                url: 'https://anthropic.skilljar.com/ai-fluency-for-nonprofits',
                description: 'Develop AI fluency to increase organizational impact and efficiency while staying true to mission and values.',
                editorial: 'Purpose-built for mission-driven organizations. Covers the ethical considerations unique to nonprofit AI adoption.',
            },
        ],
    },
];

export default function AiCoursesPage() {
    return (
        <main className="pt-24 pb-20">
            <div className="page-container">

                {/* Hero */}
                <section className="text-center mb-16 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="relative">
                        <p className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-4">Curated by Richard Ewing</p>
                        <h1 className="text-4xl md:text-6xl font-grotesk font-bold text-white mb-6">
                            The AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Learning Path.</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
                            Anthropic just released 15 free courses through their Academy.
                            I&apos;ve curated them by audience with my editorial commentary on which ones matter — and why.
                        </p>
                        <p className="text-sm text-zinc-500 max-w-xl mx-auto">
                            All courses are free, self-paced, and include completion certificates. No Anthropic account required — just a free Skilljar login.
                        </p>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
                    {[
                        { value: '15', label: 'Free Courses' },
                        { value: '4', label: 'Learning Tracks' },
                        { value: '$0', label: 'Total Cost' },
                        { value: '✓', label: 'Certificates Included' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/5">
                            <div className="text-2xl font-bold text-white font-mono">{stat.value}</div>
                            <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{stat.label}</div>
                        </div>
                    ))}
                </section>

                {/* Course Tracks */}
                <div className="space-y-16 max-w-5xl mx-auto">
                    {tracks.map((track) => (
                        <section key={track.id} id={track.id}>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="text-3xl">{track.icon}</span>
                                <div>
                                    <h2 className="text-2xl font-bold text-white font-grotesk">{track.label}</h2>
                                    <p className="text-sm text-zinc-400">{track.description}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {track.courses.map((course) => (
                                    <a
                                        key={course.name}
                                        href={course.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group block p-6 rounded-xl bg-white/[0.03] border ${track.borderColor} hover:bg-white/[0.06] transition-all hover:shadow-lg`}
                                    >
                                        <div className="flex items-start justify-between gap-2 mb-3">
                                            <h3 className={`text-lg font-bold text-white group-hover:${track.textColor} transition-colors font-grotesk`}>
                                                {course.name}
                                            </h3>
                                            <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0 mt-1">↗</span>
                                        </div>
                                        <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{course.description}</p>
                                        <div className={`text-xs ${track.textColor} font-mono leading-relaxed border-t border-white/5 pt-3`}>
                                            <span className="font-bold uppercase tracking-widest">Richard&apos;s Take:</span>{' '}
                                            <span className="text-zinc-400">{course.editorial}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Newsletter Capture */}
                <section className="mt-16 max-w-2xl mx-auto">
                    <div className="card p-8 text-center border-purple-500/30 bg-purple-900/10">
                        <div className="text-xs text-purple-400 uppercase tracking-wide mb-4 font-mono">
                            AI Course Companion
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 font-grotesk">
                            Get Richard&apos;s AI Course Notes
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-md mx-auto">
                            Which sections to skip. What to focus on. How each course maps to real capital decisions.
                            <br /><span className="text-white">One email. No spam.</span>
                        </p>
                        <a
                            href="https://theproducteconomist.beehiiv.com/subscribe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 mb-4 transition-colors font-grotesk"
                        >
                            Subscribe for Course Notes →
                        </a>
                        <p className="text-gray-500 text-sm">
                            Join 2,000+ executives. Monthly briefings + course companion notes.
                        </p>
                    </div>
                </section>

                {/* Cross-sell CTA */}
                <section className="mt-12 max-w-3xl mx-auto">
                    <div className="card p-10 border-purple-500/20 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 text-center">
                        <p className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-4">After the Courses</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-grotesk">
                            Courses teach you AI. <span className="text-cyan-400">I teach you the economics.</span>
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Knowing how to build with AI is necessary. Knowing whether you <em>should</em> build — and at what cost — is what separates winners from margin casualties.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/tools/aueb" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity text-sm">
                                Calculate Your AI Unit Economics →
                            </Link>
                            <Link href="/advisory" className="px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                                Book an R&D Audit →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Schema.org markup */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'ItemList',
                            name: 'Free AI Courses — Anthropic Academy Curated by Richard Ewing',
                            description: 'Curated catalog of 15 free Anthropic Academy courses for technology leaders, developers, and architects.',
                            numberOfItems: 15,
                            itemListElement: tracks.flatMap((track, ti) =>
                                track.courses.map((course, ci) => ({
                                    '@type': 'ListItem',
                                    position: ti * 4 + ci + 1,
                                    item: {
                                        '@type': 'Course',
                                        name: course.name,
                                        description: course.description,
                                        provider: { '@type': 'Organization', name: 'Anthropic', url: 'https://anthropic.com' },
                                        url: course.url,
                                        isAccessibleForFree: true,
                                    },
                                }))
                            ),
                        }),
                    }}
                />
            </div>
        </main>
    );
}
