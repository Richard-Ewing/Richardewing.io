import { Metadata } from 'next';
import RagChunkingContent from './content';

export const metadata: Metadata = {
    title: 'RAG Architecture Chunking Engine',
    description: 'Visualize vector embedding strategies, optimize text chunking parameters, and prevent semantic context loss. Tune retrieval precision for your search.',
    keywords: [
        'RAG chunking strategy',
        'Semantic search visualizer',
        'Vector embedding optimization',
        'Pinecone chunk size',
        'LLM text splitting'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/rag-chunking-visualizer',
    },
    openGraph: {
        title: 'RAG Chunking Strategy Visualizer',
        description: 'Map textual data against Vector Database limitations. Visually identify exactly where context overflow destroys semantic meaning.',
        url: 'https://www.richardewing.io/tools/rag-chunking-visualizer',
        type: 'website',
    },
};

import DiagnosticCTA from '@/app/components/DiagnosticCTA';

export default function Page() {
    return (
        <>
            <RagChunkingContent />
            <div className="max-w-5xl mx-auto px-6 pb-20">
                <DiagnosticCTA
                    variant="primary"
                    title="Are bad retrieval chunks inflating your context bill and causing hallucinations?"
                    subtitle="Audit your embedding overlap, retrieval top-k token waste, and QA verification overhead in a focused architecture teardown."
                    metrics={['Chunk Overlap', 'Retrieval Precision', 'Token Savings']}
                />
            </div>
        </>
    );
}
