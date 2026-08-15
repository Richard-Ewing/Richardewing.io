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
        toolSlug: 'ai-margin-analyzer',
        toolName: 'AI Margin Collapse Analyzer',
        competitors: [
            {
                slug: 'cloudzero',
                name: 'CloudZero',
                theirFocus: 'Unit economics and COGS tracking for deterministic cloud infrastructure.',
                ourAdvantage: 'Exogram automatically calculates the probabilistic variance of LLM token burn, isolating generative AI costs from standard cloud compute.'
            }
        ]
    },
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
    },
    {
        toolSlug: 'due-diligence',
        toolName: 'AI Vendor Due Diligence Engine',
        competitors: [
            {
                slug: 'gartner-magic-quadrant',
                name: 'Gartner Magic Quadrant',
                theirFocus: 'High-level subjective market positioning and enterprise brand safety.',
                ourAdvantage: 'Exogram executes a surgical, technical audit of a vendors proprietary Moat, SLA liabilities, and Shadow Compute architecture, giving you absolute leverage in contract negotiations.'
            },
            {
                slug: 'g2-crowd',
                name: 'G2 Reviews',
                theirFocus: 'Aggregated user sentiment and subjective feature scores.',
                ourAdvantage: 'Exogram replaces opinion with mathematical CODN extraction, guaranteeing you never sign a multi-year AI contract without knowing the exact technical debt you are inheriting.'
            }
        ]
    },
    {
        toolSlug: 'aueb',
        toolName: 'AI Unit Economics Baseline',
        competitors: [
            {
                slug: 'aws-cost-explorer',
                name: 'AWS Cost Explorer',
                theirFocus: 'Tracking raw compute spend and reactive budget alerts.',
                ourAdvantage: 'Exogram calculates the hidden Margin Collapse of non-deterministic inference, allowing boards to forecast exactly when AI features become structurally unprofitable.'
            }
        ]
    },
    {
        toolSlug: 'audit-interview',
        toolName: 'Autonomous Audit Interview',
        competitors: [
            {
                slug: 'big-4-consulting',
                name: 'Big 4 Consulting (Deloitte/PwC)',
                theirFocus: 'Lengthy 6-month discovery phases using junior analysts to gather basic taxonomy.',
                ourAdvantage: 'Exogram deploys an Autonomous Senior Threat Architect to immediately interrogate teams, identifying $1M+ in Shadow AI liabilities in 30 minutes.'
            }
        ]
    },
    {
        toolSlug: 'ev-se',
        toolName: 'Enterprise Value vs System Evaporation',
        competitors: [
            {
                slug: 'mckinsey-ai-index',
                name: 'McKinsey AI Impact Models',
                theirFocus: 'Generalized macroeconomic productivity curves for long-term planning.',
                ourAdvantage: 'Exogram maps precisely how open-source SLMs will evaporate your proprietary SaaS moat in real-time, allowing you to defensive-pivot before your enterprise value crashes.'
            }
        ]
    },
    {
        toolSlug: 'ai-roi-timeline',
        toolName: 'AI ROI Timeline Calculator',
        competitors: [
            {
                slug: 'forrester-tei',
                name: 'Forrester Total Economic Impact',
                theirFocus: 'Retrospective historical data and standard software deprecation cycles.',
                ourAdvantage: 'Exogram models the exponential compounding of Autonomous Execution velocity, proving that delaying AI implementation by 6 months results in an insurmountable geometric disadvantage.'
            }
        ]
    },
    {
        toolSlug: 'aper',
        toolName: 'AI Provider Efficiency Ratio',
        competitors: [
            {
                slug: 'langsmith-evals',
                name: 'LangSmith Evaluators',
                theirFocus: 'Granular prompt-level testing and LLM output token tracking.',
                ourAdvantage: 'Exogram zooms out to the macro-financial layer, calculating exactly which Model Provider offers the most revenue-generating execution per dollar spent across 10,000 parallel calls.'
            }
        ]
    },
    {
        toolSlug: 'slm-vs-api',
        toolName: 'SLM vs API Architecture Tradeoff',
        competitors: [
            {
                slug: 'openai-enterprise',
                name: 'OpenAI Enterprise Cost Calculator',
                theirFocus: 'Selling API usage through bulk token volume discounts.',
                ourAdvantage: 'Exogram mathematically proves the exact utilization threshold where Sovereign Local Models (SLMs) become millions of dollars cheaper than third-party API dependency.'
            }
        ]
    },
    {
        toolSlug: 'cloud-repatriation',
        toolName: 'AI Cloud Repatriation Calculator',
        competitors: [
            {
                slug: 'azure-tco',
                name: 'Azure Total Cost of Ownership',
                theirFocus: 'Justifying infinite cloud scaling with managed services.',
                ourAdvantage: 'Exogram models the exact inflection point where repatriating AI inference to bare-metal sovereign clusters stops the massive bleeding of cloud hyper-scaler margins.'
            }
        ]
    },
    {
        toolSlug: 'fte-displacement',
        toolName: 'FTE Augmentation Simulator',
        competitors: [
            {
                slug: 'workday-planning',
                name: 'Workday Workforce Planning',
                theirFocus: 'Linear head-count reduction and standard HR turnover metrics.',
                ourAdvantage: 'Exogram models true Hyper-Leverage - where a single 10x architect weaponized with autonomous agents outperforms an entire traditional department, fundamentally rewriting unit economics.'
            }
        ]
    }
];
