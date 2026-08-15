'use client';

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Copy, 
  Check, 
  Terminal, 
  Sparkles, 
  Layers, 
  Cpu, 
  Workflow, 
  ChevronDown, 
  ChevronUp, 
  Share2 
} from 'lucide-react';

interface PromptItem {
  id: string;
  title: string;
  model: 'Perplexity Pro' | 'Claude 3.5 Sonnet' | 'Kimi' | 'GPT-4o' | 'Sequential Workflow';
  category: string;
  summary: string;
  variables: string[];
  systemPrompt: string;
}

const promptLibrary: PromptItem[] = [
  // PERPLEXITY PRO
  {
    id: 'perp-market-landscape',
    title: 'Market Landscape & Competitor Mapping',
    model: 'Perplexity Pro',
    category: 'Market Research',
    summary: 'Identify direct, indirect, and legacy competitors in an industry with pricing models, target customers, and recent funding.',
    variables: ['[INDUSTRY/VERTICAL]', '[PROBLEM SPACE]'],
    systemPrompt: `Search the web and provide a comprehensive market landscape for AI products in [INDUSTRY/VERTICAL] that address [PROBLEM SPACE].
For each competitor you identify:
1. Company Name & Website URL
2. Core Value Proposition (1 sentence)
3. Target Customer Archetype (SMB, Mid-Market, Enterprise)
4. Estimated Pricing Model (Seat-based, usage-based, flat monthly)
5. Known Limitations or User Complaints (cite Reddit, G2, Trustpilot, or Hacker News)
6. Recent Funding or Company Status (Seed, Series A, Bootstrapped, Acquired)

Synthesize the white space opportunities where no dominant AI solution exists.`
  },
  {
    id: 'perp-pain-points',
    title: 'Specific Pain Point Landscape (Forum & Social Mining)',
    model: 'Perplexity Pro',
    category: 'Validation',
    summary: 'Mines Reddit, Twitter/X, and forums for verbatim complaints, workarounds, and time drains.',
    variables: ['[TARGET ROLE/PERSONA]', '[INDUSTRY/TOOL]'],
    systemPrompt: `Search Reddit (r/[SUBREDDIT_1], r/[SUBREDDIT_2]), Twitter/X, and professional forums for unfiltered complaints from [TARGET ROLE/PERSONA] regarding [INDUSTRY/TOOL].
Find 8-10 specific quotes or common complaints that mention:
1. Specific tasks that take more than 5 hours per week
2. Frustrations with existing commercial tools (mention tool names)
3. Unofficial duct-tape workarounds (e.g., custom Excel macros, Zapier spaghetti)
4. Financial or operational consequences when errors happen

Provide direct links to the forum threads or citations for each complaint.`
  },
  {
    id: 'perp-competitor-complaints',
    title: 'Competitor Complaint & Churn Analysis',
    model: 'Perplexity Pro',
    category: 'Competitive Intelligence',
    summary: 'Dissects 1-star and 2-star reviews of market leaders to find architectural vulnerabilities.',
    variables: ['[COMPETITOR_NAME]'],
    systemPrompt: `Search G2, Capterra, Trustpilot, Reddit, and Twitter for 1-star and 2-star reviews of [COMPETITOR_NAME].
Categorize the primary reasons users churn or complain into 4 pillars:
1. Feature Deficiencies: What functionality is broken or missing?
2. Pricing & Billing: Why do users feel overcharged or locked in?
3. User Experience / Latency: Where is the workflow sluggish or confusing?
4. Customer Support: Where did support fail to resolve critical operational issues?

Summarize the exact wedge an early-stage challenger could use to steal these dissatisfied users.`
  },
  {
    id: 'perp-pricing-intel',
    title: 'B2B SaaS Pricing & Packaging Intelligence',
    model: 'Perplexity Pro',
    category: 'Pricing',
    summary: 'Analyzes live public pricing tiers, hidden seat minimums, and usage caps across 5 competitors.',
    variables: ['[COMPETITOR_1]', '[COMPETITOR_2]', '[COMPETITOR_3]'],
    systemPrompt: `Analyze the public pricing and packaging models for [COMPETITOR_1], [COMPETITOR_2], and [COMPETITOR_3].
For each product, break down:
1. Entry Tier (Price, inclusions, limits)
2. Professional / Growth Tier (Price, seat minimums, API usage limits)
3. Enterprise Tier (Estimated starting contract value, custom SLA terms)
4. Billing Structure (Per-seat, per-token, per-action, or tiered consumption)
5. Free Trial vs Freemium vs Demo-only gate

Identify how a modern, cost-efficient AI architecture could offer 50% better margin while maintaining value-based pricing.`
  },
  {
    id: 'perp-gov-contracts',
    title: 'Federal SBIR / SAM.gov Contract Opportunity Search',
    model: 'Perplexity Pro',
    category: 'Capital & Grants',
    summary: 'Finds active federal grant solicitations (SBIR/STTR) and SAM.gov contract notices in an AI sector.',
    variables: ['[AI DOMAIN/TECHNOLOGY]'],
    systemPrompt: `Search SBIR.gov, SAM.gov, and Grants.gov for open or upcoming Phase I solicitations and contract opportunities related to [AI DOMAIN/TECHNOLOGY].
For each opportunity list:
1. Solicitation Number & Agency (NSF, DARPA, NIH, DOE, DoD)
2. Title & Objective
3. Maximum Grant/Contract Value ($150k - $2M+)
4. Key Eligibility Criteria (e.g., small business, 51% US citizen ownership)
5. Submission Deadline Window and Primary Technical Focus Areas.`
  },

  // CLAUDE 3.5 SONNET
  {
    id: 'claude-idea-audit',
    title: 'Idea Strength & Fatal Flaw Assessment',
    model: 'Claude 3.5 Sonnet',
    category: 'Product Strategy',
    summary: 'Rigorously stress-tests a product thesis against distribution, API wrapper vulnerability, and defensibility.',
    variables: ['[TARGET CUSTOMER]', '[PAIN POINT]', '[PROPOSED SOLUTION]', '[TECH STACK]'],
    systemPrompt: `You are an elite B2B product strategist and former startup operator who has evaluated hundreds of AI businesses.
I am proposing the following product idea:
- Target Customer: [TARGET CUSTOMER]
- Core Pain Point: [PAIN POINT]
- Proposed Solution: [PROPOSED SOLUTION]
- Technology Stack: [TECH STACK]

Conduct a brutally honest, rigorous stress test evaluating:
1. The Thin Wrapper Risk: Could OpenAI, Anthropic, or Microsoft replicate 80% of this with a single UI feature update?
2. Willingness to Pay: Is this an urgent 'hair-on-fire' operational emergency or a 'nice-to-have' productivity tweak?
3. Distribution Channel Vulnerability: How exactly will the first 10 paying customers be acquired without paid ads?
4. Data Flywheel & Moat: What proprietary data, system integrations, or workflow habits protect this over 12 months?
5. The Fatal Flaw: What is the single most likely structural reason this product fails?`
  },
  {
    id: 'claude-mission-optimizer',
    title: 'Mission Statement Optimizer (Human Outcome Focus)',
    model: 'Claude 3.5 Sonnet',
    category: 'Messaging',
    summary: 'Converts feature-heavy technical descriptions into high-conversion human outcome statements.',
    variables: ['[DRAFT MISSION/DESCRIPTION]'],
    systemPrompt: `You are a copywriting master who follows the principle: 'A product is defined by what it does for a human being, not what it is technically.'
Transform this draft description:
"[DRAFT MISSION/DESCRIPTION]"

Generate 5 distinct variations adhering strictly to these rules:
1. No buzzwords: Avoid 'delve', 'seamless', 'robust', 'elevate', 'game-changing', 'unleash', 'cutting-edge'.
2. Format: [Product Name] helps [Specific Target Persona] [Achieve Concrete Economic/Time Outcome] by [Proprietary Mechanism] without [Common Painful Friction].
3. Include the measurable impact (hours saved, error rates reduced, or revenue unlocked).
4. Provide a 1-sentence 'Bar Test' version that an engineer can explain to a non-technical friend in 5 seconds.`
  },
  {
    id: 'claude-interlocking-model',
    title: 'Interlocking Business Model Flywheel Design',
    model: 'Claude 3.5 Sonnet',
    category: 'Business Architecture',
    summary: 'Designs the SaaS + High-Ticket Consulting + Content flywheel for a technical founder.',
    variables: ['[SAAS PRODUCT CONCEPT]', '[TARGET INDUSTRY]'],
    systemPrompt: `Design an interlocking 3-pillar business model for an AI founder building [SAAS PRODUCT CONCEPT] in [TARGET INDUSTRY].

Define the exact operational mechanics for:
1. The High-Ticket Consulting Offer ($5,000 - $10,000 Audit/Setup):
   - What manual forensic audit or implementation service solves the exact problem the SaaS automates?
   - What deliverables are provided in a 2-week engagement?
   - How does this engagement uncover proprietary edge-cases to feed directly into the software codebase?
2. The SaaS Product:
   - What is the self-serve subscription tier ($99 - $499/mo)?
   - How does a consulting client convert into an annual recurring SaaS contract?
3. The Authority Content Strategy:
   - What 5 specific, teardown-style LinkedIn posts and newsletter essays document the consulting findings?
   - How does content drive inbound leads for both the agency and SaaS?`
  },
  {
    id: 'claude-semantic-architecture',
    title: 'Semantic Caching & Cost-Governance System Design',
    model: 'Claude 3.5 Sonnet',
    category: 'Technical Architecture',
    summary: 'Architects Redis vector caching, token budgets, and 402 payment enforcement protocols.',
    variables: ['[APPLICATION USE CASE]', '[EXPECTED QUERY VOLUME]'],
    systemPrompt: `You are a Principal AI Systems Architect. Design a production-ready cost-governance architecture for [APPLICATION USE CASE] handling [EXPECTED QUERY VOLUME] queries/day.

Specify:
1. Semantic Caching Pipeline:
   - Embedding model choice (e.g. text-embedding-3-small vs all-MiniLM-L6-v2)
   - Similarity threshold rationale (explain why 0.92 cosine similarity prevents hallucinations)
   - Redis data schema, vector indexing type (HNSW vs Flat), and TTL eviction policies
2. Hard Financial Circuit Breakers:
   - Rate limiting and session credit decrement logic in middleware
   - When and how to issue HTTP 402 (Payment Required) status codes
   - Fallback strategies when rate limits or upstream LLM outages occur
3. Architectural Decision Record (ADR) format summarizing trade-offs.`
  },

  // KIMI PROMPTS
  {
    id: 'kimi-persona-diary',
    title: 'Customer Persona Raw Diary Entry (Emotional Depth)',
    model: 'Kimi',
    category: 'Customer Psychology',
    summary: 'Simulates the private frustration, internal monologue, and burnout of your target buyer.',
    variables: ['[TARGET ROLE]', '[COMPANY SIZE]', '[CORE OPERATIONAL CRISIS]'],
    systemPrompt: `You are a [TARGET ROLE] at a [COMPANY SIZE] company. It is 8:30 PM on a Thursday evening, and you are sitting alone at your desk dealing with [CORE OPERATIONAL CRISIS].

Write a raw, unfiltered 500-word personal journal entry detailing:
1. What happened today that pushed your stress to the breaking point?
2. What clumsy, manual processes or software tools failed you?
3. What are you terrified will happen if this isn't solved before the quarterly review?
4. How does this workplace stress spill over into your evening, sleep, and personal life?
5. If a software tool solved this tomorrow, what exact feeling of relief would you pay almost anything to experience?

Write with visceral emotional authenticity, avoiding corporate jargon.`
  },
  {
    id: 'kimi-sales-roleplay',
    title: 'Founder-Led Sales Call Simulation & Objection Sparring',
    model: 'Kimi',
    category: 'Sales & GTM',
    summary: 'Roleplays a skeptical B2B budget holder throwing real-world objections at your pitch.',
    variables: ['[PROPOSED PRODUCT]', '[TARGET BUYER ROLE]', '[PRICE POINT]'],
    systemPrompt: `Let's roleplay a live B2B sales discovery call. 
- You act as [TARGET BUYER ROLE] at a mid-market company. You are skeptical, protective of your budget, and have been burned by 'AI hype' tools that hallucinated or violated data privacy.
- I am the technical founder pitching [PROPOSED PRODUCT] priced at [PRICE POINT].

Rules:
1. Do not make it easy. Challenge my claims on ROI, data security, SOC2 compliance, and onboarding time.
2. Throw common objections: 'We can just build this internally with ChatGPT', 'Our IT department will never approve this', 'We already use a tool for this.'
3. Stay strictly in character. Respond to my messages one turn at a time.
4. Begin the roleplay now by asking: 'Alright, I have 15 minutes. What does your tool actually do that our current stack doesn't?'`
  },

  // GPT-4o
  {
    id: 'gpt4o-fastapi-scaffold',
    title: 'FastAPI Production Scaffold with Correlation IDs & JSON Logging',
    model: 'GPT-4o',
    category: 'Engineering & Code',
    summary: 'Generates clean, production-grade Python FastAPI service with structured logging and middleware.',
    variables: ['[SERVICE NAME]', '[ENDPOINTS LIST]'],
    systemPrompt: `Generate a production-ready FastAPI application in Python for [SERVICE NAME] implementing [ENDPOINTS LIST].
Requirements:
1. Correlation ID Middleware using uuid4 and ASGI request state.
2. Structured JSON logging configured with python-json-logger.
3. CORS middleware configured for production domains.
4. Global exception handlers returning RFC 7807 Problem Details JSON format.
5. Pydantic v2 schemas with strict typing and field validation.
6. Health check endpoints: /healthz (liveness) and /readyz (readiness with DB ping).`
  },
  {
    id: 'gpt4o-redis-cache',
    title: 'Redis Vector Semantic Cache Class Implementation',
    model: 'GPT-4o',
    category: 'Engineering & Code',
    summary: 'Complete Python class using redis-py and sentence-transformers with 0.92 cosine matching.',
    variables: ['[EMBEDDING MODEL]', '[REDIS HOST]'],
    systemPrompt: `Write a standalone Python module implementing a SemanticCache class.
Requirements:
1. Initialize Redis connection pool and load SentenceTransformer model ('[EMBEDDING MODEL]').
2. Method \`get(prompt: str, threshold: float = 0.92) -> Optional[dict]\`: Encodes prompt, searches Redis vector index using FT.SEARCH with vector KNN, returns cached response if similarity >= threshold.
3. Method \`set(prompt: str, response: str, metadata: dict, ttl: int = 86400)\`: Computes embedding, stores vector and metadata with TTL expiration.
4. Include schema creation logic with RediSearch IndexDefinition (HNSW, COSINE metric).
5. Add docstrings and type annotations.`
  },

  // SEQUENTIAL WORKFLOWS
  {
    id: 'seq-week1-validation',
    title: 'The 48-Hour Week 1 Validation Sprint (Perplexity → Claude → Kimi)',
    model: 'Sequential Workflow',
    category: 'Multi-Agent Workflow',
    summary: 'The battle-tested 3-stage chain to take an unverified idea to validated customer problem in 48 hours.',
    variables: ['[NICHE/VERTICAL]', '[PROBLEM HYPOTHESIS]'],
    systemPrompt: `STAGE 1 (Perplexity Pro):
Run Prompt: "Search Reddit and Twitter for the top 10 most painful workflows for [NICHE/VERTICAL] around [PROBLEM HYPOTHESIS]. Extract exact quotes, time lost, and tools they hate."

STAGE 2 (Claude 3.5 Sonnet):
Take the output from Stage 1 and run: "Act as a ruthless B2B product strategist. Based on these 10 customer complaints, identify the single highest-value workflow to automate. Draft a 1-sentence value proposition and design a $5,000 forensic audit consulting offer that solves it manually."

STAGE 3 (Kimi):
Take the output from Stage 2 and run: "Generate the visceral emotional diary of a director experiencing this problem at 9:00 PM on a Friday. What words do they use to describe their pain? Use this exact vocabulary to write a 5-question cold outreach discovery DM."`
  }
];

export default function PromptLibraryViewer() {
  const [activeModel, setActiveModel] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredPrompts = useMemo(() => {
    return promptLibrary.filter(item => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.systemPrompt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesModel = activeModel === 'All' || item.model === activeModel;
      return matchesSearch && matchesModel;
    });
  }, [searchQuery, activeModel]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const modelTabs = ['All', 'Perplexity Pro', 'Claude 3.5 Sonnet', 'Kimi', 'GPT-4o', 'Sequential Workflow'];

  return (
    <div className="w-full space-y-8 text-slate-100">
      {/* Top Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
        {/* Model Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
          {modelTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveModel(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                activeModel === tab
                  ? "bg-sky-500 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search prompts by use case, variables, model..."
            className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
          />
        </div>
      </div>

      {/* Prompts Feed */}
      <div className="space-y-4">
        {filteredPrompts.map(item => {
          const isExpanded = expandedId === item.id;
          return (
            <div 
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-all hover:border-slate-700"
            >
              {/* Header Card */}
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${
                      item.model.includes('Claude') ? "bg-amber-500/10 border-amber-500/30 text-amber-300" :
                      item.model.includes('Perplexity') ? "bg-sky-500/10 border-sky-500/30 text-sky-300" :
                      item.model.includes('Kimi') ? "bg-rose-500/10 border-rose-500/30 text-rose-300" :
                      item.model.includes('GPT') ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" :
                      "bg-purple-500/10 border-purple-500/30 text-purple-300"
                    }`}>
                      {item.model}
                    </span>
                    <span className="text-slate-500 text-xs">•</span>
                    <span className="text-xs font-mono text-slate-400">{item.category}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(item.systemPrompt, item.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-sky-500 hover:text-slate-950 text-slate-300 text-xs font-semibold transition-colors"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Prompt</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                      aria-label="Toggle view"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <h3 
                  onClick={() => toggleExpand(item.id)}
                  className="text-lg font-bold text-white cursor-pointer hover:text-sky-300 transition-colors"
                >
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {item.summary}
                </p>

                {/* Variables Pills */}
                <div className="flex flex-wrap items-center gap-1.5 mt-3">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Fill in:</span>
                  {item.variables.map(v => (
                    <span key={v} className="px-2 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-sky-400 border border-slate-800">
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {/* Collapsible Prompt Body */}
              {isExpanded && (
                <div className="p-6 bg-slate-950 border-t border-slate-800 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-sky-400" />
                      System Prompt &amp; Execution Instructions
                    </span>
                    <button
                      onClick={() => handleCopy(item.systemPrompt, item.id)}
                      className="text-sky-400 hover:underline"
                    >
                      {copiedId === item.id ? "Copied to clipboard" : "Click to copy code block"}
                    </button>
                  </div>
                  <pre className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed overflow-x-auto selection:bg-sky-500 selection:text-slate-950">
                    {item.systemPrompt}
                  </pre>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
