'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Sparkles, 
  Terminal, 
  DollarSign, 
  ShieldCheck, 
  ArrowRight,
  Layers,
  ChevronDown,
  ChevronUp,
  Cpu,
  Target,
  ExternalLink
} from 'lucide-react';

interface DailySprint {
  day: string;
  title: string;
  hours: string;
  focus: string;
  tactics: string[];
  deliverable: string;
}

interface WeekModule {
  weekNum: string;
  theme: string;
  subtitle: string;
  milestone: string;
  sprints: DailySprint[];
}

const curriculumData: WeekModule[] = [
  {
    weekNum: "Week 0",
    theme: "Pre-Work: Foundation & Cognitive Setup",
    subtitle: "Self-Paced Baseline Sprint",
    milestone: "Verified Development Stack, Formatted Repos, and Idea Parking Lot.",
    sprints: [
      {
        day: "0.1",
        title: "The Production Tool Stack Setup",
        hours: "2 Hours",
        focus: "Configuring development environment and API keys.",
        tactics: [
          "Cursor IDE configured with Pro account access and .cursorrules standards.",
          "Claude Pro and Perplexity Pro accounts active for research sprints.",
          "OpenAI, Anthropic, and Vercel accounts configured with billing limits.",
          "Supabase project created and GitHub organization initialized."
        ],
        deliverable: "Working local repo connecting to Supabase and Claude API."
      },
      {
        day: "0.2",
        title: "Baseline Diagnostic Assessment",
        hours: "1 Hour",
        focus: "Benchmarking architecture, pricing, and capital readiness.",
        tactics: [
          "Complete the 10-Question Founder Diagnostic Quiz.",
          "Map blind spots across unit economics, caching, and entity formation.",
          "Document target commercial revenue milestones for the 4-week sprint."
        ],
        deliverable: "Diagnostic report logged in Notion workspace."
      },
      {
        day: "0.3",
        title: "The Idea Parking Lot Exercise",
        hours: "2 Hours",
        focus: "Structuring 3 candidate problem spaces for validation.",
        tactics: [
          "Draft 3 problem spaces based on verified domain friction or personal work history.",
          "Enforce the 'Mom Test' filter to remove hypothetical fluff.",
          "Map estimated software budget vs enterprise willingness to pay."
        ],
        deliverable: "3 formatted candidate problem briefs."
      }
    ]
  },
  {
    weekNum: "Week 1",
    theme: "Ideation, Validation & The Product Sense Framework",
    subtitle: "From Zero to Validated B2B Problem",
    milestone: "1-Sentence Value Proposition, 5 Customer Discovery Transcripts, and $5,000 Consulting SOW.",
    sprints: [
      {
        day: "Day 1",
        title: "Product Sense Mastery & The Mom Test",
        hours: "2 Hours Live",
        focus: "Customer discovery mechanics and avoiding polite lies.",
        tactics: [
          "The 3 Layers of Customer Pain: Surface vs Business Impact vs Emotional Burnout.",
          "The 6 Core Questions of Google's PM method adapted for solo founders.",
          "The Mom Test framework: why 'would you use this?' destroys startups."
        ],
        deliverable: "5-question customer discovery interview script."
      },
      {
        day: "Day 2",
        title: "The AI Cognitive Division of Labor",
        hours: "2 Hours Sprint",
        focus: "Assigning models by their genuine cognitive strengths.",
        tactics: [
          "Claude 3.5 Sonnet: Deep reasoning, architectural synthesis, and strategy.",
          "Perplexity Pro: Real-time search, competitive intelligence, and social mining.",
          "Kimi: Empathy mapping, persona simulation, and emotional depth.",
          "GPT-4o: Code generation, schema design, and .cursorrules."
        ],
        deliverable: "Documented multi-agent prompt workflow."
      },
      {
        day: "Day 3",
        title: "Market Validation Sprints (Social & Forum Mining)",
        hours: "2 Hours Sprint",
        focus: "Mining unfiltered complaints from Reddit, Twitter, and review portals.",
        tactics: [
          "Executing Perplexity search recipes across target industry subreddits.",
          "Extracting verbatim quotes, time lost, and software tools users hate.",
          "Conducting competitor autopsies on 1-star and 2-star G2/Trustpilot reviews."
        ],
        deliverable: "10 validated customer quotes with cited forum URLs."
      },
      {
        day: "Day 4",
        title: "High-Ticket Consulting Offer Design ($5k - $10k)",
        hours: "2 Hours Live",
        focus: "Structuring manual services that fund and validate software.",
        tactics: [
          "Designing the 2-week Forensic Code & AI Cost Governance Audit.",
          "Using consulting engagements to uncover proprietary enterprise edge cases.",
          "Master Consulting SOW template teardown and pricing anchor strategies."
        ],
        deliverable: "Completed, customizable SOW ready to pitch."
      },
      {
        day: "Day 5",
        title: "Customer Discovery Calls & Live Admissions Review",
        hours: "2 Hours Live",
        focus: "Reviewing discovery call recordings and synthesizing findings.",
        tactics: [
          "Peer review of customer discovery transcripts in small breakout groups.",
          "Filtering out 'feature requests' from genuine root-cause business pain.",
          "1-sentence value proposition refinement with Richard Ewing."
        ],
        deliverable: "Approved 1-sentence value proposition and target buyer profile."
      }
    ]
  },
  {
    weekNum: "Week 2",
    theme: "Technical Architecture, Clean Code & AI Infrastructure",
    subtitle: "Building the Defensible, Cost-Governed Engine",
    milestone: "Working FastAPI + Redis Semantic Cache + Stripe Webhooks Deployed to Production.",
    sprints: [
      {
        day: "Day 6",
        title: "The AI Startup Tech Stack & API Scaffolding",
        hours: "2 Hours Live",
        focus: "FastAPI, Next.js 14 App Router, and clean system boundaries.",
        tactics: [
          "Next.js App Router server components with leaf client component boundaries.",
          "FastAPI backend with structured JSON logging and UUID correlation IDs.",
          "PostgreSQL database setup on Supabase with Row Level Security (RLS)."
        ],
        deliverable: "Production API scaffold deployed to Railway/Vercel."
      },
      {
        day: "Day 7",
        title: "Cost Governance & The Semantic Cache (0.92 Cosine)",
        hours: "2 Hours Sprint",
        focus: "Slashing LLM API costs by 30% to 60% with Redis vector similarity.",
        tactics: [
          "Deploying sentence-transformers (all-MiniLM-L6-v2) for prompt embeddings.",
          "Setting Redis HNSW vector indexes with exact 0.92 cosine similarity gates.",
          "Implementing hard cost-caps and issuing HTTP 402 Payment Required."
        ],
        deliverable: "Live SemanticCache class benchmarked against real prompts."
      },
      {
        day: "Day 8",
        title: "Distributed Auth & Microservice Security (HMAC-SHA256)",
        hours: "2 Hours Sprint",
        focus: "Cryptographically signed headers for microservice cross-talk.",
        tactics: [
          "Exogram-CareerWin HMAC-SHA256 signed header authentication protocol.",
          "Anti-replay protection with 5-minute timestamp drift validation.",
          "Constant-time signature verification preventing timing side-channel attacks."
        ],
        deliverable: "Microservice cross-talk middleware verified with unit tests."
      },
      {
        day: "Day 9",
        title: "Billing Infrastructure & Monetization Lifecycle",
        hours: "2 Hours Live",
        focus: "Stripe Checkout, webhooks, and subscription lifecycle management.",
        tactics: [
          "Configuring Stripe subscription products, customer portals, and webhooks.",
          "Handling checkout.session.completed and invoice.payment_succeeded events.",
          "Automatic token quota resets and failed payment handling."
        ],
        deliverable: "Live Stripe webhook router receiving test events."
      },
      {
        day: "Day 10",
        title: "Forensic Code Review & Architecture Lock",
        hours: "2 Hours Live",
        focus: "1:1 architectural audits of every founder's repository.",
        tactics: [
          "Live code audit of API routes, error boundaries, and security headers.",
          "Eliminating LLM wrapper fragility and vendor lock-in.",
          "Final QA verification and staging environment deployment."
        ],
        deliverable: "Approved, locked production codebase ready for pilots."
      }
    ]
  },
  {
    weekNum: "Week 3",
    theme: "Business Formation, Startup Capital & Value-Based Pricing",
    subtitle: "From Hacker to Incorporated Corporate Entity",
    milestone: "Filed LLC/EIN, $100k+ Secured Cloud Credits, SAM.gov UEI, and Value-Based Price Grid.",
    sprints: [
      {
        day: "Day 11",
        title: "Legal Entity Formation & Banking Rails",
        hours: "2 Hours Live",
        focus: "LLC vs C-Corp, EIN filing, and business banking.",
        tactics: [
          "Richard's Rule: Start with a simple LLC; convert to C-Corp only when VC checks arrive.",
          "Filing state Articles of Organization and securing free instant EIN from IRS.gov.",
          "Opening business banking at Mercury / Brex with separate tax reserve sub-accounts."
        ],
        deliverable: "Filed legal entity and active corporate bank account."
      },
      {
        day: "Day 12",
        title: "The $500K Startup Credit Arbitrage",
        hours: "2 Hours Sprint",
        focus: "Securing non-dilutive cloud and AI compute credits.",
        tactics: [
          "Microsoft Founders Hub application ($150k Azure + $2,500 OpenAI API).",
          "Google for Startups Cloud program ($350k over 2 years for Gemini/GCP).",
          "AWS Activate, Anthropic, Pinecone, and Vercel startup credit stacks."
        ],
        deliverable: "Submitted credit applications across all major cloud vendors."
      },
      {
        day: "Day 13",
        title: "Non-Dilutive Federal Funding: SBIR/STTR & SAM.gov",
        hours: "2 Hours Sprint",
        focus: "Tapping into $600B+ federal contracts and $150k-$2M+ grants.",
        tactics: [
          "Step-by-step registration on SAM.gov and securing Unique Entity Identifier (UEI).",
          "Decoding the 15-page SBIR/STTR Phase I Project Narrative blueprint.",
          "Aligning technical R&D milestones with NSF, DARPA, and NIH grant solicitations."
        ],
        deliverable: "Active SAM.gov UEI and draft SBIR Phase I proposal narrative."
      },
      {
        day: "Day 14",
        title: "Value-Based Pricing Strategy & ROI Anchoring",
        hours: "2 Hours Live",
        focus: "Pricing against customer value rather than server costs.",
        tactics: [
          "The 10x ROI Anchor Formula: Price at 10% of the economic value created or saved.",
          "3-Tier Pricing Architecture: Entry vs Professional vs Strategic Pilot.",
          "The $500 30-Day Pilot Agreement with automatic SaaS conversion terms."
        ],
        deliverable: "Final 3-tier pricing matrix and signed pilot agreement template."
      },
      {
        day: "Day 15",
        title: "Venture Capital vs Bootstrapping Strategy",
        hours: "2 Hours Live",
        focus: "When to raise venture capital and how to negotiate terms.",
        tactics: [
          "Analyzing YC, Sequoia Arc, and A16z SPEEDRUN application rubrics.",
          "Understanding SAFE notes, post-money valuation caps, and dilution traps.",
          "Mastering the SaaS + Consulting flywheel to achieve infinite runway."
        ],
        deliverable: "Completed accelerator application draft and cap table simulation."
      }
    ]
  },
  {
    weekNum: "Week 4",
    theme: "Go-To-Market, Launch Mechanics & Scale",
    subtitle: "Acquiring Paying Customers & Launching the Flywheel",
    milestone: "High-Converting Landing Page, 10 Paying Pilot Customers, and Graduation Pitch.",
    sprints: [
      {
        day: "Day 16",
        title: "The 5-Second Landing Page Architecture",
        hours: "2 Hours Live",
        focus: "High-conversion direct-response design and copywriting.",
        tactics: [
          "The 5-Second Rule: What you do, who it's for, outcome, next step.",
          "Eliminating marketing fluff and buzzwords (REWS v1.0 standards).",
          "Building interactive visual proof modules, calculators, and demo snippets."
        ],
        deliverable: "Live high-converting landing page deployed on custom domain."
      },
      {
        day: "Day 17",
        title: "The Silent Launch Strategy (10 Paying Customers)",
        hours: "2 Hours Sprint",
        focus: "Securing initial paying pilots before public exposure.",
        tactics: [
          "Executing direct 1:1 outreach to discovery call participants.",
          "Closing $500 Strategic Pilot Agreements with concierge onboarding.",
          "Gathering verified customer testimonials and case study metrics."
        ],
        deliverable: "2 signed pilot agreements or 10 active beta users."
      },
      {
        day: "Day 18",
        title: "The Content & Authority Flywheel",
        hours: "2 Hours Sprint",
        focus: "Engineering organic distribution on LinkedIn and Substack.",
        tactics: [
          "The 'Build in Public' Teardown Framework: Documenting real consulting audits.",
          "Writing high-signal technical essays that attract enterprise buyers.",
          "Setting up the 5-Day Email Lead Magnet Starter Kit funnel."
        ],
        deliverable: "3 scheduled authority posts and active email capture sequence."
      },
      {
        day: "Day 19",
        title: "Full-Stack Founder Operations & 12-Month Model",
        hours: "2 Hours Live",
        focus: "Mastering financial projections and cash flow management.",
        tactics: [
          "12-Month Pro-Forma model accounting for 5% monthly SaaS churn.",
          "Managing consulting capacity while scaling automated software revenue.",
          "Setting up the 10 Master Notion Operational Relational Databases."
        ],
        deliverable: "Configured 12-month financial model and Notion workspace."
      },
      {
        day: "Day 20",
        title: "Demo Day, Graduation & Investor Network Review",
        hours: "3 Hours Live",
        focus: "Live product demonstrations and graduation pitch reviews.",
        tactics: [
          "5-minute live product demo and commercial traction pitch.",
          "Direct feedback from Richard Ewing and guest seed investors.",
          "Alumni network induction and ongoing peer advisory access."
        ],
        deliverable: "Graduation certificate, alumni access, and live product in production."
      }
    ]
  }
];

const glossaryTerms = [
  { term: "Cognitive Division of Labor", def: "A framework assigning distinct AI models to specific cognitive functions: Claude for deep thinking, Perplexity for search/research, Kimi for emotional persona simulation, and GPT-4o for code generation." },
  { term: "Semantic Cache", def: "A caching system that uses vector embeddings (at 0.92 cosine similarity) to identify semantically identical user queries and return cached LLM responses, reducing API costs by 30% to 60%." },
  { term: "The Mom Test", def: "A customer discovery interviewing methodology designed by Rob Fitzpatrick to avoid getting polite lies by asking only about past behavior and actual money spent, never hypothetical future intentions." },
  { term: "Richard's Rule (Entity Formation)", def: "The rule stating that technical founders should start as a low-cost LLC and convert to a Delaware C-Corp only when institutional venture capital requires it via a signed term sheet." },
  { term: "5-Second Landing Page Rule", def: "The conversion design requirement that a visitor must understand what the product does, who it is for, the measurable outcome, and the next step within 5 seconds of landing." },
  { term: "Silent Launch Strategy", def: "The practice of securing 10 paying customers or signed pilots via direct outreach before announcing the product publicly on Product Hunt, Hacker News, or social media." },
  { term: "Interlocking Flywheel", def: "A business model combining SaaS subscriptions, high-ticket consulting audits, and authority content where consulting cash funds SaaS development and content drives inbound leads for both." },
  { term: "HTTP 402 Payment Required", def: "An HTTP status code used in AI cost governance to immediately terminate user sessions that exceed token or financial credit thresholds, preventing runaway inference bills." },
  { term: "SBIR / STTR", def: "Small Business Innovation Research and Small Business Technology Transfer programs providing $150k to $2M+ in non-dilutive federal grants from agencies like NSF, DARPA, and NIH." },
  { term: "SAM.gov", def: "The official System for Award Management portal for the U.S. government, required to bid on federal contracts and receive federal grant funding." }
];

export default function CurriculumMindmapViewer() {
  const [activeWeek, setActiveWeek] = useState<string>("Week 1");
  const [expandedSprint, setExpandedSprint] = useState<string | null>("Day 1");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const currentModule = curriculumData.find(m => m.weekNum === activeWeek) || curriculumData[1];

  const filteredGlossary = glossaryTerms.filter(t => 
    t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.def.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full space-y-12 text-slate-100">
      {/* Week Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 border border-slate-800 p-3 rounded-2xl">
        {curriculumData.map(week => (
          <button
            key={week.weekNum}
            onClick={() => {
              setActiveWeek(week.weekNum);
              setExpandedSprint(week.sprints[0]?.day || null);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeWeek === week.weekNum
                ? "bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20"
                : "bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{week.weekNum}</span>
          </button>
        ))}
      </div>

      {/* Week Overview Banner */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-sky-400 font-mono">
              Cohort Module: {currentModule.weekNum}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {currentModule.theme}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {currentModule.subtitle}
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 flex items-start gap-3 text-xs">
          <Target className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-emerald-400 uppercase tracking-wider">
              Core Milestone Deliverable:{" "}
            </span>
            <span className="text-slate-200">{currentModule.milestone}</span>
          </div>
        </div>
      </div>

      {/* Sprints Accordion */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
          <Clock className="w-4 h-4 text-sky-400" />
          Daily Sprint Playbooks &amp; Live Sessions
        </h3>

        {currentModule.sprints.map(sprint => {
          const isOpen = expandedSprint === sprint.day;
          return (
            <div
              key={sprint.day}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden transition-all hover:border-slate-700"
            >
              <button
                onClick={() => setExpandedSprint(isOpen ? null : sprint.day)}
                className="w-full p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/30">
                      {sprint.day}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{sprint.hours}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {sprint.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {sprint.focus}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-semibold text-sky-400 hidden sm:inline">
                    {isOpen ? "Collapse" : "View Tactics"}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-800 text-slate-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              {isOpen && (
                <div className="p-6 bg-slate-950 border-t border-slate-800 space-y-4 animate-in fade-in duration-200">
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Tactical Execution Steps:
                    </h5>
                    <ul className="space-y-2">
                      {sprint.tactics.map((tactic, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 bg-slate-900/90 rounded-xl border border-sky-500/30 text-xs">
                    <span className="font-semibold text-sky-400 uppercase tracking-wider">Required Deliverable: </span>
                    <span className="text-slate-200">{sprint.deliverable}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 17-Term Technical Founder Glossary */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-sky-400 font-mono">
              Knowledge Repository
            </span>
            <h3 className="text-xl font-bold text-white">
              The Full-Stack Founder Technical Glossary
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Core terminology bridging modern AI engineering with corporate finance and GTM.
            </p>
          </div>

          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Filter terms..."
            className="px-3.5 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 w-full sm:w-60"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredGlossary.map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/80 space-y-1.5">
              <h4 className="text-xs font-bold font-mono text-sky-400">
                {item.term}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.def}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
