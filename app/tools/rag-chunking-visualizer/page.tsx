import { Metadata } from 'next';
import RagChunkingContent from './content';

export const metadata: Metadata = {
    title: 'RAG Architecture Chunking Engine',
    description: 'Visualize vector embedding strategies, optimize text chunking parameters, and prevent semantic context loss.',
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

export default function Page() {
    return <RagChunkingContent />;
}
