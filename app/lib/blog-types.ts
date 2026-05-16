// Blog article metadata and content
// Split into categories for maintainability

export interface ArticleData {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    featured?: boolean;
    content: string;
    canonicalUrl?: string;
    relatedFailures?: string[];
    relatedSkills?: string[];
    relatedDiagnostics?: string[];
    relatedControls?: string[];
}

export const categoryColors: Record<string, string> = {
    'Technical Debt': 'text-red-900 font-extrabold font-semibold bg-red-500/10 border-red-500/20',
    'AI Economics': 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    'PE/VC': 'text-emerald-900 font-extrabold font-semibold bg-emerald-500/10 border-emerald-500/20',
    'Engineering Metrics': 'text-cyan-900 font-extrabold font-semibold bg-cyan-500/10 border-cyan-500/20',
    'Leadership': 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    'Engineering Economics': 'text-blue-900 font-extrabold font-semibold bg-blue-500/10 border-blue-500/20',
    'Startup Economics': 'text-pink-400 bg-pink-500/10 border-pink-500/20',
    'Cloud Economics': 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    'DevOps': 'text-orange-900 font-extrabold font-semibold bg-orange-500/10 border-orange-500/20',
    'Product Management': 'text-zinc-950 font-semibolduchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20',
    'Security': 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    'Data Engineering': 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    'M&A': 'text-lime-400 bg-lime-500/10 border-lime-500/20',
    'Board Governance': 'text-indigo-900 font-extrabold font-semibold bg-indigo-500/10 border-indigo-500/20',
    'Team Building': 'text-yellow-900 font-extrabold font-semibold bg-yellow-500/10 border-yellow-500/20',
    'Architecture': 'text-purple-900 font-extrabold font-semibold bg-purple-500/10 border-purple-500/20',
};
