import Link from 'next/link';
import { glossaryTerms } from '../glossary/terms';
import { frameworks } from '../lib/data';

interface RelatedContentProps {
    currentPath?: string;
    category?: string;
    showTools?: boolean;
    showGlossary?: boolean;
    showFrameworks?: boolean;
    maxItems?: number;
}

export default function RelatedContent({
    currentPath = '',
    category,
    showTools = true,
    showGlossary = true,
    showFrameworks = true,
    maxItems = 4,
}: RelatedContentProps) {
    const tools = [
        { name: 'Technical Debt Calculator (PDI)', url: '/tools/pdi', desc: 'Quantify hidden technical debt in dollar terms' },
        { name: 'AI Cost Calculator (AUEB)', url: '/tools/aueb', desc: 'Calculate AI unit economics and margin collapse point' },
        { name: 'SaaS Valuation Engine (EV-SE)', url: '/tools/ev-se', desc: 'Model enterprise value scenarios' },
        { name: 'Revenue Per Engineer (APER)', url: '/tools/aper', desc: 'Benchmark engineering efficiency' },
        { name: 'Audit Interview', url: '/tools/audit-interview', desc: 'AI-age engineering hiring assessment' },
    ].filter(t => t.url !== currentPath);

    const relevantGlossary = glossaryTerms
        .filter(t => !currentPath.includes(t.slug))
        .filter(t => !category || t.category === category)
        .slice(0, maxItems);

    const relevantFrameworks = frameworks
        .filter(f => !currentPath.includes(f.slug))
        .slice(0, maxItems);

    return (
        <div className="mt-16 border-t border-white/10 pt-12">
            <h2 className="text-2xl font-grotesk font-bold text-white mb-8">Explore More</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {showTools && (
                    <div>
                        <h3 className="text-sm font-mono text-cyan-500 uppercase tracking-widest mb-4">Free Tools</h3>
                        <div className="space-y-3">
                            {tools.slice(0, maxItems).map(tool => (
                                <Link key={tool.url} href={tool.url} className="block group">
                                    <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{tool.name}</div>
                                    <div className="text-xs text-zinc-500">{tool.desc}</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {showGlossary && relevantGlossary.length > 0 && (
                    <div>
                        <h3 className="text-sm font-mono text-cyan-500 uppercase tracking-widest mb-4">Glossary</h3>
                        <div className="space-y-3">
                            {relevantGlossary.map(term => (
                                <Link key={term.slug} href={`/glossary/${term.slug}`} className="block group">
                                    <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{term.title}</div>
                                    <div className="text-xs text-zinc-500 line-clamp-1">{term.definition.slice(0, 80)}...</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {showFrameworks && relevantFrameworks.length > 0 && (
                    <div>
                        <h3 className="text-sm font-mono text-cyan-500 uppercase tracking-widest mb-4">Frameworks</h3>
                        <div className="space-y-3">
                            {relevantFrameworks.map(fw => (
                                <Link key={fw.slug} href={`/articles/frameworks/${fw.slug}`} className="block group">
                                    <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{fw.name}</div>
                                    <div className="text-xs text-zinc-500 line-clamp-1">{fw.definition.replace(/\n/g, ' ').slice(0, 80)}...</div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 text-xs text-zinc-600">
                <Link href="/glossary" className="hover:text-cyan-500 transition-colors">Full Glossary →</Link>
                <Link href="/tools" className="hover:text-cyan-500 transition-colors">All Tools →</Link>
                <Link href="/doctrine" className="hover:text-cyan-500 transition-colors">Doctrine →</Link>
                <Link href="/advisory" className="hover:text-cyan-500 transition-colors">Advisory Services →</Link>
                <Link href="/articles" className="hover:text-cyan-500 transition-colors">Articles →</Link>
            </div>
        </div>
    );
}
