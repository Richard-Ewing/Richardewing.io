import Link from 'next/link';

// Maps glossary term categories/slugs to relevant tools
const toolMapping: Record<string, { name: string; url: string; cta: string; emoji: string }> = {
    'technical-debt': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Calculate your technical debt in dollar terms', emoji: '📊' },
    'legacy-code': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Quantify your legacy code burden', emoji: '📊' },
    'refactoring': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Find your refactoring ROI', emoji: '📊' },
    'code-quality': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Measure your code health score', emoji: '📊' },
    'maintenance-burden': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Calculate maintenance vs innovation split', emoji: '📊' },
    'software-entropy': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Measure your software entropy rate', emoji: '📊' },
    'ai-unit-economics': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Find your AI margin collapse point', emoji: '🤖' },
    'ai-cost-governance': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Calculate your AI cost per useful output', emoji: '🤖' },
    'llm-cost-optimization': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Benchmark your LLM costs', emoji: '🤖' },
    'ai-hallucination': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Calculate your AI accuracy cost curve', emoji: '🤖' },
    'saas-valuation': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'Model your valuation scenarios', emoji: '💰' },
    'arr': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'See how ARR changes impact valuation', emoji: '💰' },
    'revenue-per-engineer': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'Benchmark your engineering efficiency', emoji: '👥' },
    'engineering-productivity': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'Calculate your revenue per engineer', emoji: '👥' },
    'developer-productivity': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'Measure your developer output ratio', emoji: '👥' },
    'engineering-hiring': { name: 'Audit Interview', url: '/tools/audit-interview', cta: 'Test AI-age engineering judgment', emoji: '🎯' },
    'technical-interview': { name: 'Audit Interview', url: '/tools/audit-interview', cta: 'Try the modern technical assessment', emoji: '🎯' },
};

// Category-level fallback mappings
const categoryToolMapping: Record<string, { name: string; url: string; cta: string; emoji: string }> = {
    'engineering': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Quantify your engineering debt', emoji: '📊' },
    'ai': { name: 'AI Unit Economics Benchmark', url: '/tools/aueb', cta: 'Calculate your AI cost structure', emoji: '🤖' },
    'finance': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'Model your enterprise value', emoji: '💰' },
    'product': { name: 'APER Diagnostic', url: '/tools/aper', cta: 'Benchmark your product team efficiency', emoji: '👥' },
    'hiring': { name: 'Audit Interview', url: '/tools/audit-interview', cta: 'Test engineering judgment', emoji: '🎯' },
    'leadership': { name: 'Product Debt Index', url: '/tools/pdi', cta: 'Get a board-ready debt assessment', emoji: '📊' },
    'metrics': { name: 'Enterprise Value Scenario Engine', url: '/tools/ev-se', cta: 'Model your SaaS metrics impact', emoji: '💰' },
};

interface GlossaryToolCTAProps {
    slug: string;
    category?: string;
    termTitle: string;
}

export default function GlossaryToolCTA({ slug, category, termTitle }: GlossaryToolCTAProps) {
    const tool = toolMapping[slug] || (category ? categoryToolMapping[category] : null);
    if (!tool) return null;

    return (
        <div className="my-8 p-6 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border border-purple-500/20 rounded-2xl">
            <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{tool.emoji}</span>
                <div className="flex-1">
                    <p className="text-xs text-purple-400 font-mono uppercase tracking-wider mb-1">Free Tool</p>
                    <h4 className="text-lg font-bold text-white mb-1">{tool.cta}</h4>
                    <p className="text-zinc-600 text-sm mb-4">
                        Use the free {tool.name} diagnostic to put numbers behind your {termTitle.toLowerCase()} challenges.
                    </p>
                    <Link
                        href={tool.url}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Try {tool.name} Free →
                    </Link>
                </div>
            </div>
        </div>
    );
}
