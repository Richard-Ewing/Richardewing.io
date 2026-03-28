import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Module 2.4: RAG Architecture Economics | Curriculum | Richard Ewing',
    description: 'Master RAG economics: embedding costs, vector database pricing, chunking strategy impact, retrieval optimization, and hybrid search cost modeling.',
    keywords: ['RAG economics', 'retrieval augmented generation', 'vector database costs', 'embedding costs', 'RAG architecture'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks/ai-product-economics/2-4' },
};

const lessons = [
    { title: 'Lesson 1: RAG Cost Components', content: 'RAG (Retrieval-Augmented Generation) adds retrieval costs on top of generation costs. Understanding each cost component prevents budget surprises when your knowledge base scales.', details: [
        { metric: 'Embedding Cost', description: 'Converting documents into vectors: $0.02-0.10 per million tokens (OpenAI ada-002). One-time cost per document, but re-embedding needed when models change.', benchmark: '100K documents × 1K tokens each = 100M tokens = $2-10 for full embedding' },
        { metric: 'Vector Storage', description: 'Storing embeddings in a vector database. Pinecone: $0.096/hr for 1M vectors. Weaviate Cloud: $25/month for 1M vectors. Self-hosted: infrastructure costs.', benchmark: 'At 10M vectors: $25-100/month storage. At 100M: $250-1000/month.' },
        { metric: 'Retrieval Cost', description: 'Each query searches the vector database for relevant chunks. Cost per query: $0.001-0.01 depending on database and index size.', benchmark: 'At 100K queries/day: $100-1000/month in retrieval costs' },
        { metric: 'Generation with Context', description: 'Retrieved chunks are injected into the LLM prompt, increasing token count. 5 chunks × 500 tokens = 2,500 additional input tokens per query.', benchmark: 'Context injection increases per-query LLM cost by 40-100%' },
    ], exercise: 'Map your RAG pipeline\'s cost components: embedding (one-time), storage (monthly), retrieval (per-query), and augmented generation (per-query). Calculate total monthly cost.' },
    { title: 'Lesson 2: Chunking Strategy Economics', content: 'How you chunk documents directly impacts both retrieval quality AND cost. Wrong chunk size wastes tokens on irrelevant context. Right chunk size maximizes relevance per token.', details: [
        { metric: 'Small Chunks (100-200 tokens)', description: 'More precise retrieval, but requires more chunks per query for full context. Higher retrieval cost, lower generation cost.', benchmark: 'Best for: FAQ-style queries, precise factual lookups' },
        { metric: 'Medium Chunks (500-1000 tokens)', description: 'Balance of context and precision. Most production RAG systems use this range. Good for paragraph-level retrieval.', benchmark: 'Best for: general Q&A, documentation search, customer support' },
        { metric: 'Large Chunks (1000-2000 tokens)', description: 'More context per chunk, but higher generation cost and risk of irrelevant content diluting the response. Fewer retrieval operations needed.', benchmark: 'Best for: summarization, document analysis, legal/medical contexts' },
    ], exercise: 'Test 3 chunk sizes on your knowledge base. Measure: retrieval relevance (precision@5), total tokens consumed, and response quality. Find your optimal balance.' },
    { title: 'Lesson 3: Production RAG Optimization', content: 'Production RAG systems need caching, hybrid search, and reranking to control costs while maintaining quality. These optimizations can reduce RAG costs by 50-70%.', details: [
        { metric: 'Semantic Caching', description: 'Cache responses for semantically similar queries. If someone asks "how do I reset my password?" and a similar query was answered 5 minutes ago, serve the cached response.', benchmark: 'Cache hit rate 30-60% for support/FAQ use cases = 30-60% cost reduction' },
        { metric: 'Hybrid Search', description: 'Combine vector search (semantic) with keyword search (BM25). Hybrid retrieval is 15-30% more accurate, meaning fewer irrelevant chunks in context = lower token costs.', benchmark: 'Hybrid search: 10-20% relevance improvement with minimal additional cost' },
        { metric: 'Reranking', description: 'Retrieve 20 chunks, rerank with a lightweight model, use only top 5. Without reranking: 20 chunks × 500 tokens = 10K tokens. With reranking: 5 chunks × 500 tokens = 2,500 tokens.', benchmark: 'Reranking reduces context tokens 50-75% while improving relevance' },
    ], exercise: 'Implement one optimization (caching, hybrid search, or reranking) in your RAG pipeline. Measure cost reduction and quality impact over 1 week.' },
];

export default function Module24Page() {
    return (
        <main className="pt-20"><div className="page-container"><div className="max-w-4xl mx-auto">
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link><span>/</span>
                <Link href="/curriculum/tracks" className="hover:text-cyan-400">AI Product Economics</Link><span>/</span>
                <span className="text-violet-400 font-bold">Module 2.4</span>
            </div>
            <div className="mb-10">
                <div className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-3">Track 2 — AI Product Economics</div>
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">Module 2.4: <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">RAG Architecture Economics</span></h1>
                <p className="text-lg text-zinc-400 max-w-2xl">Embedding costs, vector database pricing, chunking strategy impact on costs, and production optimizations (caching, hybrid search, reranking) that reduce RAG costs 50-70%.</p>
                <div className="flex items-center gap-4 mt-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">3 Lessons</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~55 min</span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">Intermediate-Advanced</span>
                </div>
            </div>
            <div className="space-y-12">{lessons.map((lesson, i) => (<div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"><div className="p-8"><div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center"><span className="text-xs font-bold text-white">{i + 1}</span></div><h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2></div><p className="text-zinc-400 mb-6">{lesson.content}</p><div className="space-y-3 mb-6">{lesson.details.map((d, j) => (<div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5"><div className="text-sm font-bold text-white mb-1">{d.metric}</div><p className="text-xs text-zinc-500 mb-2">{d.description}</p><div className="text-[10px] font-mono text-violet-500 uppercase tracking-widest">{d.benchmark}</div></div>))}</div><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5"><div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div><p className="text-sm text-zinc-300">{lesson.exercise}</p></div></div></div>))}</div>
            <div className="mt-12 flex items-center justify-between">
                <Link href="/curriculum/tracks/ai-product-economics/2-3" className="text-sm text-zinc-500 hover:text-white transition-colors">← Module 2.3</Link>
                <Link href="/curriculum/tracks/ai-product-economics/2-5" className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-sm hover:opacity-90 transition-opacity">Next: Module 2.5 →</Link>
            </div>
        </div></div></main>
    );
}
