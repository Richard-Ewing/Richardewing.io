import { Metadata } from 'next';
import RagChunkingContent from './content';

export const metadata: Metadata = {
    title: 'RAG Chunking Visualizer | Semantic Optimization',
    description: 'Visually optimize your Retrieval-Augmented Generation (RAG) vector embeddings. See exactly where semantic context breaks under different chunk sizes and...',
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
