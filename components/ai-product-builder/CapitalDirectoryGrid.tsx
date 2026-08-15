'use client';

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  DollarSign, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  Layers, 
  Cpu, 
  GitBranch, 
  Globe, 
  Check, 
  Copy,
  Briefcase
} from 'lucide-react';

interface CapitalProgram {
  id: string;
  name: string;
  category: 'VC Accelerator' | 'Non-Dilutive Grant' | 'Cloud & LLM Credits';
  fundingAmount: string;
  equityTerms: string;
  mappedPersona: string;
  deadline: string;
  summary: string;
  website: string;
  tags: string[];
}

interface OpenSourceTool {
  id: string;
  name: string;
  category: 'Full-Stack Boilerplate' | 'AI & LLM Orchestration' | 'Caching & Vector DB';
  stars: string;
  license: string;
  description: string;
  githubUrl: string;
  tags: string[];
}

const capitalPrograms: CapitalProgram[] = [
  // VC Accelerators
  {
    id: 'yc',
    name: 'Y Combinator',
    category: 'VC Accelerator',
    fundingAmount: '$500,000',
    equityTerms: '7% + MFN SAFE ($375k)',
    mappedPersona: 'High-Growth AI SaaS / Moonshot Founders',
    deadline: 'Biannual (Winter / Summer Batches)',
    summary: 'The premier global startup accelerator. Provides $500,000 capital, legendary peer alumni network, and Demo Day investor access.',
    website: 'https://ycombinator.com',
    tags: ['Top Tier', 'Global', 'Venture Backed']
  },
  {
    id: 'thiel',
    name: 'Thiel Fellowship',
    category: 'VC Accelerator',
    fundingAmount: '$100,000',
    equityTerms: '0% Equity (Grant for <23 y/o)',
    mappedPersona: 'Under-23 Founders Dropping Out to Build',
    deadline: 'Rolling Admissions',
    summary: 'A two-year, $100,000 grant for young people who want to build new things instead of sitting in a classroom.',
    website: 'https://thielfellowship.org',
    tags: ['Young Founders', 'Zero Equity', 'Fellowship']
  },
  {
    id: 'sequoia-arc',
    name: 'Sequoia Arc',
    category: 'VC Accelerator',
    fundingAmount: '$500k - $1M',
    equityTerms: 'Direct Seed SAFE',
    mappedPersona: 'Outlier Founders Building Category-Defining Tech',
    deadline: 'Spring & Fall Cohorts',
    summary: '7-week company-building curriculum with Sequoia partners, hands-on masterclasses, and seed capitalization.',
    website: 'https://sequoiacap.com/arc',
    tags: ['Tier 1 VC', 'Curriculum', 'Seed SAFE']
  },
  {
    id: 'speedrun',
    name: 'A16z SPEEDRUN',
    category: 'VC Accelerator',
    fundingAmount: '$750,000',
    equityTerms: 'Standard A16z SAFE',
    mappedPersona: 'Tech, AI, & Games / Interactive Founders',
    deadline: 'Quarterly Cycles',
    summary: 'Andreessen Horowitz accelerator pairing $750k in capital with 12 weeks of intensive coaching from top tech operators.',
    website: 'https://a16z.com/speedrun',
    tags: ['A16z', 'Fast Track', 'Interactive AI']
  },
  {
    id: 'techstars',
    name: 'Techstars Worldwide',
    category: 'VC Accelerator',
    fundingAmount: '$120,000',
    equityTerms: '6% Common Equity + $100k Note',
    mappedPersona: 'B2B & Vertical Enterprise AI Startups',
    deadline: 'Rolling by City / Vertical',
    summary: 'Worldwide network providing mentorship, corporate pilot partnerships, and structured 13-week acceleration sprints.',
    website: 'https://techstars.com',
    tags: ['Mentorship', 'Corporate Pilots', 'Global']
  },
  {
    id: 'south-park-commons',
    name: 'South Park Commons (SPC)',
    category: 'VC Accelerator',
    fundingAmount: '$400,000 - $1,000,000',
    equityTerms: '7% - 10% Equity',
    mappedPersona: 'Engineers in the "Negative-to-Zero" Exploration Phase',
    deadline: 'Rolling Cohorts',
    summary: 'A community of technocrats designed for high-conviction founders figuring out what to build before traditional seed rounds.',
    website: 'https://southparkcommons.com',
    tags: ['Ideation', 'Negative-to-Zero', 'Community']
  },
  {
    id: 'hf0',
    name: 'Hacker Fellowship Zero (HF0)',
    category: 'VC Accelerator',
    fundingAmount: '$500,000',
    equityTerms: 'Standard SAFE',
    mappedPersona: 'Technical Founders Ready for 12-Week Residency',
    deadline: 'Biannual Residency',
    summary: '12-week luxury coding residency in San Francisco. Zero distractions, free chef, and top-tier seed checks.',
    website: 'https://hf0.com',
    tags: ['Residency', 'Technical Only', 'SF']
  },
  {
    id: 'forum-ventures',
    name: 'Forum Ventures',
    category: 'VC Accelerator',
    fundingAmount: '$100,000',
    equityTerms: '7.5% Equity',
    mappedPersona: 'Early B2B SaaS & AI Builders',
    deadline: 'Quarterly',
    summary: 'Seed fund and accelerator built specifically for zero-to-one B2B SaaS founders with dedicated SDR and GTM coaching.',
    website: 'https://forumvc.com',
    tags: ['B2B SaaS', 'GTM Sprints', 'Seed']
  },
  {
    id: 'neo-accelerator',
    name: 'Neo Accelerator',
    category: 'VC Accelerator',
    fundingAmount: '$625,000',
    equityTerms: '1.5% - 2.5% Common + SAFE',
    mappedPersona: 'Top 1% Engineering Talent & Tech Leads',
    deadline: 'Annual Summer Batch',
    summary: 'Ultra-selective mentorship community and accelerator for world-class technical engineers and founders.',
    website: 'https://neo.com',
    tags: ['Elite Tech', 'Community', 'Mentorship']
  },
  {
    id: 'alchemist',
    name: 'Alchemist Accelerator',
    category: 'VC Accelerator',
    fundingAmount: '$125,000',
    equityTerms: '5% Equity',
    mappedPersona: 'Enterprise Tech & Deep-Tech Founders',
    deadline: 'Quarterly',
    summary: 'Enterprise-focused accelerator with direct pipelines to Fortune 500 CIOs, CTOs, and early corporate pilot contracts.',
    website: 'https://alchemistaccelerator.com',
    tags: ['Enterprise', 'Fortune 500', 'Pilots']
  },

  // Non-Dilutive Federal Grants (SBIR/STTR)
  {
    id: 'nsf-sbir',
    name: 'NSF SBIR / STTR Phase I & II',
    category: 'Non-Dilutive Grant',
    fundingAmount: '$275,000 (Phase I) / $1,000,000 (Phase II)',
    equityTerms: '0% Equity (Federal Grant)',
    mappedPersona: 'Deep Technical AI / Scientific R&D Innovation',
    deadline: '3 Pitch Windows / Year',
    summary: 'National Science Foundation seed funding supporting high-risk, high-impact scientific and technological breakthroughs without dilution.',
    website: 'https://seedfund.nsf.gov',
    tags: ['Federal Grant', 'Zero Dilution', 'High R&D']
  },
  {
    id: 'darpa-sbir',
    name: 'DARPA SBIR / STTR',
    category: 'Non-Dilutive Grant',
    fundingAmount: '$200,000 - $1,500,000+',
    equityTerms: '0% Equity (DoD Contract / Grant)',
    mappedPersona: 'Defense AI, Autonomous Systems & Cybersecurity',
    deadline: 'Topic Specific (BAA Announcements)',
    summary: 'Defense Advanced Research Projects Agency non-dilutive research funding for revolutionary national defense technologies.',
    website: 'https://darpa.mil/work-with-us/for-small-businesses',
    tags: ['Defense', 'Cybersecurity', 'High Capital']
  },
  {
    id: 'nih-sbir',
    name: 'NIH SBIR / STTR Healthcare AI',
    category: 'Non-Dilutive Grant',
    fundingAmount: '$300,000 - $2,000,000+',
    equityTerms: '0% Equity (Federal Grant)',
    mappedPersona: 'Clinical AI, MedTech & Biomedical Software',
    deadline: 'Jan 5, Apr 5, Sept 5',
    summary: 'National Institutes of Health grant programs supporting commercialization of biomedical, diagnostic, and clinical workflow AI.',
    website: 'https://sbir.nih.gov',
    tags: ['Healthcare', 'Biomedical', 'Non-Dilutive']
  },
  {
    id: 'doe-sbir',
    name: 'Department of Energy (DOE) SBIR',
    category: 'Non-Dilutive Grant',
    fundingAmount: '$200,000 (Phase I) / $1,600,000 (Phase II)',
    equityTerms: '0% Equity (Federal Grant)',
    mappedPersona: 'CleanTech, Grid AI, & Scientific Computing',
    deadline: 'Biannual Solicitations',
    summary: 'Federal funding for software and hardware that improves energy efficiency, grid intelligence, and scientific simulations.',
    website: 'https://science.osti.gov/sbir',
    tags: ['Energy AI', 'Zero Dilution', 'Federal']
  },
  {
    id: 'nasa-sbir',
    name: 'NASA SBIR / STTR Innovation',
    category: 'Non-Dilutive Grant',
    fundingAmount: '$150,000 (Phase I) / $850,000 (Phase II)',
    equityTerms: '0% Equity (Federal Grant)',
    mappedPersona: 'Aerospace AI, Computer Vision & Edge Systems',
    deadline: 'Annual Winter Solicitations',
    summary: 'NASA funding for aerospace, robotics, autonomous navigation, and edge computing innovations.',
    website: 'https://sbir.nasa.gov',
    tags: ['Aerospace', 'Edge AI', 'Federal']
  },
  {
    id: 'usda-sbir',
    name: 'USDA NIFA SBIR / STTR',
    category: 'Non-Dilutive Grant',
    fundingAmount: '$175,000 (Phase I) / $600,000 (Phase II)',
    equityTerms: '0% Equity (Federal Grant)',
    mappedPersona: 'AgTech, Supply Chain & Rural AI Solutions',
    deadline: 'Annual Fall Window',
    summary: 'Supports technological advances in agriculture, supply chain traceability, natural resources, and food distribution.',
    website: 'https://nifa.usda.gov/program/sbir',
    tags: ['AgTech', 'Supply Chain', 'Grants']
  },

  // Cloud & LLM Credits
  {
    id: 'msft-founders-hub',
    name: 'Microsoft for Startups Founders Hub',
    category: 'Cloud & LLM Credits',
    fundingAmount: 'Up to $150,000 in Azure Credits + $2,500 OpenAI',
    equityTerms: '0% Equity (Vendor Credits)',
    mappedPersona: 'All Bootstrapped & Seed Builders',
    deadline: 'Open / Instant Tiered Approval',
    summary: 'Instant Azure credits, OpenAI API credits, GitHub Enterprise, LinkedIn Premium, and Microsoft 365 licenses with zero funding requirements.',
    website: 'https://foundershub.startups.microsoft.com',
    tags: ['OpenAI Credits', 'Azure', 'Zero Dilution']
  },
  {
    id: 'google-startups',
    name: 'Google for Startups Cloud Program',
    category: 'Cloud & LLM Credits',
    fundingAmount: 'Up to $350,000 in GCP Credits (Over 2 Years)',
    equityTerms: '0% Equity (Vendor Credits)',
    mappedPersona: 'AI-First Startups with Seed/Series A Funding',
    deadline: 'Rolling Application',
    summary: 'Massive Google Cloud infrastructure credits covering Gemini API inference, BigQuery, Vertex AI, and Google Workspace.',
    website: 'https://cloud.google.com/startup',
    tags: ['Gemini API', 'GCP', 'Vertex AI']
  },
  {
    id: 'aws-activate',
    name: 'AWS Activate Founders & Portfolio',
    category: 'Cloud & LLM Credits',
    fundingAmount: '$1,000 (Founders) up to $100,000 (Portfolio)',
    equityTerms: '0% Equity (Vendor Credits)',
    mappedPersona: 'Bootstrapped to VC-Backed Builders',
    deadline: 'Rolling Application',
    summary: 'The original cloud credit program covering AWS Bedrock, SageMaker, EC2 compute, and architecture support.',
    website: 'https://aws.amazon.com/activate',
    tags: ['AWS Bedrock', 'EC2', 'Cloud Credits']
  },
  {
    id: 'openai-startups',
    name: 'OpenAI Startup Credits & Ecosystem',
    category: 'Cloud & LLM Credits',
    fundingAmount: '$2,500 - $25,000 API Credits',
    equityTerms: '0% Equity (Ecosystem Grants)',
    mappedPersona: 'Builders Building on GPT-4o / Realtime API',
    deadline: 'Partner & Direct Submissions',
    summary: 'Direct API credits and technical office hours for startups building innovative native agentic architectures.',
    website: 'https://openai.com/startups',
    tags: ['GPT-4o', 'API Credits', 'OpenAI']
  },
  {
    id: 'anthropic-credits',
    name: 'Anthropic Claude Startup Grants',
    category: 'Cloud & LLM Credits',
    fundingAmount: '$5,000 - $25,000 Console Credits',
    equityTerms: '0% Equity (Developer Grants)',
    mappedPersona: 'Founders Implementing Claude 3.5 Sonnet / Haiku',
    deadline: 'Rolling via Partner Programs',
    summary: 'API credits for teams leveraging Claude 3.5 Sonnet artifacts and advanced multi-turn reasoning workflows.',
    website: 'https://anthropic.com',
    tags: ['Claude 3.5', 'API Credits', 'Anthropic']
  },
  {
    id: 'pinecone-startup',
    name: 'Pinecone Vector DB Startup Plan',
    category: 'Cloud & LLM Credits',
    fundingAmount: '$1,000 Serverless Credits',
    equityTerms: '0% Equity',
    mappedPersona: 'RAG & Vector Semantic Search Builders',
    deadline: 'Open Access',
    summary: 'Dedicated serverless vector database credits to power low-latency semantic caching and document retrieval.',
    website: 'https://pinecone.io',
    tags: ['Vector DB', 'Semantic Cache', 'RAG']
  }
];

const openSourceTools: OpenSourceTool[] = [
  {
    id: 'fastapi',
    name: 'tiangolo/fastapi',
    category: 'Full-Stack Boilerplate',
    stars: '75k+',
    license: 'MIT',
    description: 'High performance, easy to learn, fast to code, production-ready Python API framework with automatic OpenAPI docs.',
    githubUrl: 'https://github.com/tiangolo/fastapi',
    tags: ['Python', 'Async', 'Backend']
  },
  {
    id: 'nextjs',
    name: 'vercel/next.js',
    category: 'Full-Stack Boilerplate',
    stars: '125k+',
    license: 'MIT',
    description: 'The React framework for the web. Enables server-side rendering, App Router, and static site generation.',
    githubUrl: 'https://github.com/vercel/next.js',
    tags: ['React', 'TypeScript', 'App Router']
  },
  {
    id: 'langchain',
    name: 'langchain-ai/langchain',
    category: 'AI & LLM Orchestration',
    stars: '95k+',
    license: 'MIT',
    description: 'Build context-aware, reasoning LLM applications, chains, agents, and retrieval strategies.',
    githubUrl: 'https://github.com/langchain-ai/langchain',
    tags: ['LLM', 'Chains', 'Agents']
  },
  {
    id: 'dspy',
    name: 'stanfordnlp/dspy',
    category: 'AI & LLM Orchestration',
    stars: '20k+',
    license: 'MIT',
    description: 'Stanford framework for algorithmically optimizing LLM prompts and weights rather than manual prompt engineering.',
    githubUrl: 'https://github.com/stanfordnlp/dspy',
    tags: ['Optimization', 'Stanford', 'Prompting']
  },
  {
    id: 'redis',
    name: 'redis/redis',
    category: 'Caching & Vector DB',
    stars: '65k+',
    license: 'RSALv2/SSPL',
    description: 'In-memory data store used by millions of developers as a database, cache, streaming engine, and message broker.',
    githubUrl: 'https://github.com/redis/redis',
    tags: ['Cache', 'Semantic Caching', 'Vector']
  },
  {
    id: 'pgvector',
    name: 'pgvector/pgvector',
    category: 'Caching & Vector DB',
    stars: '15k+',
    license: 'PostgreSQL',
    description: 'Open-source vector similarity search for PostgreSQL. Store embeddings right alongside your relational data.',
    githubUrl: 'https://github.com/pgvector/pgvector',
    tags: ['Postgres', 'Embeddings', 'SQL']
  },
  {
    id: 'qdrant',
    name: 'qdrant/qdrant',
    category: 'Caching & Vector DB',
    stars: '21k+',
    license: 'Apache-2.0',
    description: 'High-performance vector search engine written in Rust with extended filtering support and payload storage.',
    githubUrl: 'https://github.com/qdrant/qdrant',
    tags: ['Rust', 'Vector Search', 'RAG']
  },
  {
    id: 'ollama',
    name: 'ollama/ollama',
    category: 'AI & LLM Orchestration',
    stars: '100k+',
    license: 'MIT',
    description: 'Get up and running with Llama 3, Mistral, Gemma, and other open LLMs locally with a single command.',
    githubUrl: 'https://github.com/ollama/ollama',
    tags: ['Local LLM', 'Open Source', 'Inference']
  }
];

export default function CapitalDirectoryGrid() {
  const [activeTab, setActiveTab] = useState<'capital' | 'tools'>('capital');
  const [searchQuery, setSearchQuery] = useState('');
  const [capitalCategory, setCapitalCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCapital = useMemo(() => {
    return capitalPrograms.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.mappedPersona.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = capitalCategory === 'All' || item.category === capitalCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, capitalCategory]);

  const filteredTools = useMemo(() => {
    return openSourceTools.filter(tool => {
      return (
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
  }, [searchQuery]);

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full space-y-8 text-slate-100">
      {/* Top Controls & Switcher */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => { setActiveTab('capital'); setCapitalCategory('All'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'capital'
                ? "bg-sky-500 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            Capital &amp; Grants ({capitalPrograms.length})
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'tools'
                ? "bg-sky-500 text-slate-950 shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            Open Source Tools ({openSourceTools.length})
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={activeTab === 'capital' ? "Search 60+ accelerators, grants, cloud credits..." : "Search open-source frameworks, DBs..."}
            className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
          />
        </div>
      </div>

      {/* Subcategory Pills for Capital */}
      {activeTab === 'capital' && (
        <div className="flex flex-wrap items-center gap-2">
          {['All', 'VC Accelerator', 'Non-Dilutive Grant', 'Cloud & LLM Credits'].map(cat => (
            <button
              key={cat}
              onClick={() => setCapitalCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                capitalCategory === cat
                  ? "bg-sky-500/20 border border-sky-500/50 text-sky-300"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              {cat === 'All' ? 'All Capital Programs' : cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid Display */}
      {activeTab === 'capital' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCapital.map(item => (
            <div 
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-slate-800 text-sky-400 mb-1.5 border border-slate-700">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-sky-500 hover:text-slate-950 text-slate-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2 my-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Funding Size</span>
                    <span className="text-emerald-400 font-semibold font-mono">{item.fundingAmount}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Equity Terms</span>
                    <span className="text-slate-200 font-mono">{item.equityTerms}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {item.summary}
                </p>

                <div className="p-2.5 bg-slate-950/40 rounded-lg border border-slate-800/40 text-[11px] text-slate-400 mb-4">
                  <span className="font-semibold text-slate-300">Ideal For: </span>
                  {item.mappedPersona}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs">
                <div className="flex flex-wrap gap-1">
                  {item.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-slate-800/50 text-[10px] text-slate-400 font-mono">
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleCopyLink(item.website, item.id)}
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-sky-400 transition-colors"
                >
                  {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedId === item.id ? "Copied" : "Copy URL"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Open Source Tools Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTools.map(tool => (
            <div 
              key={tool.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-slate-800 text-sky-400 mb-1.5 border border-slate-700">
                      {tool.category}
                    </span>
                    <h3 className="text-base font-bold font-mono text-white group-hover:text-sky-300 transition-colors">
                      {tool.name}
                    </h3>
                  </div>
                  <a
                    href={tool.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-sky-500 hover:text-slate-950 text-slate-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center gap-4 my-2 text-xs font-mono text-slate-400">
                  <span>★ {tool.stars} Stars</span>
                  <span>License: {tool.license}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed my-3">
                  {tool.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs">
                <div className="flex flex-wrap gap-1">
                  {tool.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-slate-800/50 text-[10px] text-slate-400 font-mono">
                      #{t}
                    </span>
                  ))}
                </div>
                <a
                  href={tool.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300 font-semibold"
                >
                  View Repo <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
