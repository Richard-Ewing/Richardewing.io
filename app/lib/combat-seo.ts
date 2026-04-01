export interface CompetitorMapping {
    toolSlug: string;
    toolName: string;
    competitors: {
        slug: string;
        name: string;
        theirFocus: string; // What the competitor does well but misses the board-level point
        ourAdvantage: string; // Why Exogram is worth $10k+ compared to them
        logo?: string;
    }[];
}

export const COMBAT_SEO_MATRIX: CompetitorMapping[] = [
    {
        toolSlug: 'shadow-ai',
        toolName: 'Shadow AI Endpoint Scanner',
        competitors: [
            {
                slug: 'wiz',
                name: 'Wiz.io',
                theirFocus: 'Broad cloud infrastructure scanning and CSPM visibility.',
                ourAdvantage: 'Exogram deterministicially calculates the exact Cost of Doing Nothing (CODN) for every unsanctioned endpoint, translating IT metrics into direct Board-level financial liability.'
            },
            {
                slug: 'cyberhaven',
                name: 'Cyberhaven',
                theirFocus: 'Data lineage and DLP mapping across applications.',
                ourAdvantage: 'Exogram specifically maps Generative AI data exfiltration to deterministic Local SLM solutions (Llama 3), instantly proving the ROI of Sovereign Hardware over traditional DLP blocking.'
            }
        ]
    },
    {
        toolSlug: 'prompt-injection-sandbox',
        toolName: 'Prompt Injection Intrusion Sandbox',
        competitors: [
            {
                slug: 'promptfoo',
                name: 'Promptfoo',
                theirFocus: 'Developer-centric CLI red-teaming and unit string testing.',
                ourAdvantage: 'Exogram generates a C-Suite executable Confidential Audit detailing the exact dollar-value liability of command hijacking across your RAG pipelines.'
            },
            {
                slug: 'lakera-guard',
                name: 'Lakera Guard',
                theirFocus: 'API-based firewall gating and real-time inference blocking.',
                ourAdvantage: 'Exogram mandates root-cause prevention via Hardened Context XML definitions, eliminating the need to pay latency and API taxes to a third-party firewall.'
            }
        ]
    },
    {
        toolSlug: 'rag-chunking-visualizer',
        toolName: 'RAG Architecture Chunking Engine',
        competitors: [
            {
                slug: 'ragxplorer',
                name: 'RAGxplorer',
                theirFocus: 'Visualizing nodes and clusters in a generalized 2D Plotly map.',
                ourAdvantage: 'Exogram algorithmically computes the Hallucination Liability Metric, calculating the exact monetary support cost of severed semantic boundaries.'
            }
        ]
    },
    {
        toolSlug: 'agent-router',
        toolName: 'Agentic Router FinOps Emulator',
        competitors: [
            {
                slug: 'datadog-llm',
                name: 'Datadog LLM Observability',
                theirFocus: 'Post-deployment APM tracing and latency monitoring for multi-hop chains.',
                ourAdvantage: 'Exogram prevents API Bankruptcy before code is shipped by predicting compound token explosion and modeling the $100k+ savings of Edge-Routed SLMs.'
            }
        ]
    }
];
