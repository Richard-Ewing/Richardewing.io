'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  DollarSign, 
  Target,
  BarChart3,
  Award
} from 'lucide-react';

interface AnswerOption {
  text: string;
  isCorrect: boolean;
  rationale: string;
}

interface Question {
  id: number;
  category: 'Cognitive Architecture' | 'Cost Governance' | 'Capital & Formation' | 'Validation & GTM';
  question: string;
  hint: string;
  answerOptions: AnswerOption[];
}

const quizQuestions: Question[] = [
  {
    id: 1,
    category: 'Cognitive Architecture',
    question: "According to the 'Cognitive Division of Labor' rules in the course, which model should a founder use specifically for 'thinking' tasks such as deep analysis, synthesis, and strategy?",
    hint: "Focus on the model assigned to deep reasoning and architecture decisions.",
    answerOptions: [
      {
        text: "Claude 3.5 Sonnet",
        isCorrect: true,
        rationale: "Claude 3.5 Sonnet is designated for thinking because of its superior reasoning, long context window, and intellectual honesty about uncertainty."
      },
      {
        text: "Perplexity Pro",
        isCorrect: false,
        rationale: "Perplexity is optimized for real-time web search and mining social complaints rather than internal strategy and reasoning."
      },
      {
        text: "GPT-4o",
        isCorrect: false,
        rationale: "The framework assigns GPT-4o specifically to 'building' tasks like code generation, schema drafting, and .cursorrules configuration."
      },
      {
        text: "Kimi",
        isCorrect: false,
        rationale: "Kimi is reserved for 'feeling' tasks, including customer persona simulation and emotional depth mapping."
      }
    ]
  },
  {
    id: 2,
    category: 'Cost Governance',
    question: "In the implementation of a Semantic Cache for an AI product, what is the recommended cosine similarity threshold to return a cached response instead of calling the LLM?",
    hint: "Consider the high precision needed to ensure cached answers remain relevant to slightly different user phrasings.",
    answerOptions: [
      {
        text: "0.92 cosine similarity",
        isCorrect: true,
        rationale: "Setting the threshold at 0.92 ensures the query is semantically identical enough to the cached entry to provide a relevant answer while slashing API costs by 30% to 60%."
      },
      {
        text: "0.50 cosine similarity",
        isCorrect: false,
        rationale: "A threshold this low would return irrelevant or completely incorrect responses from the cache due to insufficient similarity."
      },
      {
        text: "0.75 cosine similarity",
        isCorrect: false,
        rationale: "This level of similarity frequently causes cache hallucinations where the intent differs despite sharing a few overlapping keywords."
      },
      {
        text: "1.00 cosine similarity",
        isCorrect: false,
        rationale: "This requires a 100% exact match, destroying the semantic benefit of caching varied human phrasing."
      }
    ]
  },
  {
    id: 3,
    category: 'Capital & Formation',
    question: "What are the three components of the 'Interlocking Business Model' recommended to ensure immediate revenue and deep customer intelligence?",
    hint: "Think of the three interconnected businesses Richard Ewing says you should plan from Day 1.",
    answerOptions: [
      {
        text: "SaaS Product, Consulting / Agency, and Authority Content",
        isCorrect: true,
        rationale: "This triad uses consulting for cash and proprietary customer intelligence, content for organic distribution, and SaaS for scalable recurring revenue."
      },
      {
        text: "B2C Subscription, Enterprise Licensing, and Affiliate Marketing",
        isCorrect: false,
        rationale: "These are distinct revenue models but do not provide the integrated flywheel effect of the SaaS-Consulting-Content strategy."
      },
      {
        text: "Freemium SaaS, Paid Advertising, and White-labeling",
        isCorrect: false,
        rationale: "This focuses on generic monetization tactics rather than the structural strategy of using services to fund and inform software development."
      },
      {
        text: "Technical Audits, Federal Contracting, and Open Source Support",
        isCorrect: false,
        rationale: "While these are elements within the course, they do not constitute the three core pillars of the interlocking business flywheel."
      }
    ]
  },
  {
    id: 4,
    category: 'Validation & GTM',
    question: "When applying 'The Mom Test' framework to customer discovery, which question is considered a 'useless' question that leads to polite lies?",
    hint: "Identify the question that focuses on hypothetical future behavior rather than verified past actions.",
    answerOptions: [
      {
        text: "Would you use this product if I built it?",
        isCorrect: true,
        rationale: "Asking about future intentions invites nice people to tell polite lies to avoid hurting your feelings. Always ask about past actions and actual dollars spent."
      },
      {
        text: "Tell me about the last time you encountered this problem.",
        isCorrect: false,
        rationale: "This is a high-value discovery question because it forces the user to recall specific historical facts rather than opinions."
      },
      {
        text: "What are you currently spending to solve this issue?",
        isCorrect: false,
        rationale: "This uncovers actual market data and budget allocations, which proves whether the pain is severe enough to warrant purchase."
      },
      {
        text: "What happens if this problem doesn't get solved?",
        isCorrect: false,
        rationale: "This identifies the downstream business and emotional fallout, helping validate the true stakes."
      }
    ]
  },
  {
    id: 5,
    category: 'Cost Governance',
    question: "If a user breaches an AI cost-cap limit (such as a session or daily cap), which HTTP status code does the 'Cost-Cap Stack' recommend returning immediately?",
    hint: "Think about the specific status code intended for financial or budgetary barriers in web services.",
    answerOptions: [
      {
        text: "HTTP 402 Payment Required",
        isCorrect: true,
        rationale: "HTTP 402 specifically signals that a payment or credit limit has been reached, instantly terminating runaway inference loops before bills explode."
      },
      {
        text: "HTTP 404 Not Found",
        isCorrect: false,
        rationale: "This indicates a missing resource and misleads the client about why the AI service stopped."
      },
      {
        text: "HTTP 500 Internal Server Error",
        isCorrect: false,
        rationale: "A 500 error suggests a server-side bug rather than an intentional, policy-enforced financial limit."
      },
      {
        text: "HTTP 403 Forbidden",
        isCorrect: false,
        rationale: "403 implies permission or role denial rather than an exceeded financial credit threshold."
      }
    ]
  },
  {
    id: 6,
    category: 'Capital & Formation',
    question: "According to 'Richard's Rule' on entity formation, what is the recommended timeline for a founder to convert from an LLC to a C-Corp?",
    hint: "Consider the major external financial event that typically requires a specific corporate structure for equity management.",
    answerOptions: [
      {
        text: "Only when an institutional VC writes a term sheet",
        isCorrect: true,
        rationale: "Starting as an LLC keeps maintenance low and taxes simple. Convert to a Delaware C-Corp only when institutional venture requirements necessitate it."
      },
      {
        text: "Immediately upon filing for an EIN",
        isCorrect: false,
        rationale: "Filing as a C-Corp too early creates unnecessary administrative overhead and potential double-taxation for bootstrapped builders."
      },
      {
        text: "As soon as the product reaches $10,000 ARR",
        isCorrect: false,
        rationale: "Revenue milestones are less important than funding structures when choosing between pass-through entities and corporations."
      },
      {
        text: "Once the founder decides to apply for SAM.gov",
        isCorrect: false,
        rationale: "SAM.gov registration only requires a legal entity and EIN; it does not dictate a corporate C-Corp structure."
      }
    ]
  },
  {
    id: 7,
    category: 'Validation & GTM',
    question: "What does the '5-Second Rule' for landing pages require a visitor to understand immediately upon arrival?",
    hint: "Identify the four outcome-focused components needed to convert a busy visitor.",
    answerOptions: [
      {
        text: "What you do, who it's for, the measurable outcome, and the next step",
        isCorrect: true,
        rationale: "These four elements ensure the visitor can instantly categorize the value proposition and identify the primary call to action."
      },
      {
        text: "The technical stack, the LLM model used, and the API pricing",
        isCorrect: false,
        rationale: "Technical implementation details distract from the human outcome that drives initial purchase intent."
      },
      {
        text: "Your company history, your team bios, and your mission statement",
        isCorrect: false,
        rationale: "Founders often over-emphasize themselves, but buyers only care about solutions to their own immediate problems."
      },
      {
        text: "The competitive landscape and why your competitors are failing",
        isCorrect: false,
        rationale: "Highlighting competitors immediately takes focus away from your own product's core promise."
      }
    ]
  },
  {
    id: 8,
    category: 'Cognitive Architecture',
    question: "In the 'Product Sense Framework', how is a 'Good' mission statement distinguished from a 'Bad' one?",
    hint: "Contrast a 'what it is' (technical description) with a 'what it does' (human outcome).",
    answerOptions: [
      {
        text: "It describes what the product does for a human being rather than what it is technically.",
        isCorrect: true,
        rationale: "Focusing on the human outcome (e.g., saving compliance officers 10 hours per week) creates visceral economic urgency."
      },
      {
        text: "It includes a comprehensive list of all technical features and integrations.",
        isCorrect: false,
        rationale: "Technical feature lists mask the actual value and make it harder for non-technical buyers to understand the benefit."
      },
      {
        text: "It is written at a high level to ensure it can apply to any industry or customer.",
        isCorrect: false,
        rationale: "Vague statements fail the specificity test; successful AI products must target a concrete customer archetype."
      },
      {
        text: "It prioritizes the technology used, such as RAG or vector embeddings, to show sophistication.",
        isCorrect: false,
        rationale: "Buyers buy results, not technologies; a mission statement must emphasize the measurable economic change."
      }
    ]
  },
  {
    id: 9,
    category: 'Capital & Formation',
    question: "What is the primary benefit of registering an AI startup on SAM.gov in Week 1 or Week 3?",
    hint: "Look for the benefit related to the massive 'B2G' (Business to Government) revenue channel.",
    answerOptions: [
      {
        text: "It unlocks access to $600B+ in federal contracts and non-dilutive SBIR/STTR grants.",
        isCorrect: true,
        rationale: "Registration on SAM.gov is free and mandatory to bid on government contracts or receive $150k to $2M+ in non-dilutive SBIR/STTR research grants."
      },
      {
        text: "It automatically grants the founder $100,000 in OpenAI API credits.",
        isCorrect: false,
        rationale: "API credits are secured through private startup programs like Microsoft Founders Hub, not federal procurement portals."
      },
      {
        text: "It provides legal protection against patent trolls in the AI space.",
        isCorrect: false,
        rationale: "SAM.gov is a federal procurement and entity database, not a legal defense service."
      },
      {
        text: "It is required to open a business bank account at Mercury or Brex.",
        isCorrect: false,
        rationale: "Banking requirements are handled by financial institutions using your Articles of Organization and EIN."
      }
    ]
  },
  {
    id: 10,
    category: 'Validation & GTM',
    question: "Under the 'Silent Launch Strategy', at what point should a founder announce their product publicly on channels like Product Hunt or LinkedIn?",
    hint: "Identify the milestone that ensures you have initial social proof and a stable pricing model before going public.",
    answerOptions: [
      {
        text: "After securing 10 paying customers or signed pilots",
        isCorrect: true,
        rationale: "Securing 10 early paying customers in private validates your pricing and collects real case study quotes before facing public scrutiny."
      },
      {
        text: "Immediately after the MVP is deployed to Vercel",
        isCorrect: false,
        rationale: "Launching publicly on Day 1 causes high bounce rates if messaging and stability have not been field-tested."
      },
      {
        text: "As soon as the LLC is filed and the bank account is open",
        isCorrect: false,
        rationale: "Legal formation is backend infrastructure; public launches must be driven by validated traction."
      },
      {
        text: "Once the founder has reached 1,000 followers on social media",
        isCorrect: false,
        rationale: "Follower count is a vanity metric; a successful launch is driven by validated pain and paying buyers."
      }
    ]
  }
];

export default function FounderQuizEngine() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showHint, setShowHint] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = quizQuestions[currentIdx];
  const isAnswered = selectedAnswers[currentQ.id] !== undefined;
  const selectedOptIdx = selectedAnswers[currentQ.id];

  const handleSelectOption = (optionIdx: number) => {
    if (isAnswered) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: optionIdx }));
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowHint({});
    setCurrentIdx(0);
    setIsCompleted(false);
  };

  // Calculate score
  const totalScore = quizQuestions.reduce((acc, q) => {
    const selected = selectedAnswers[q.id];
    if (selected !== undefined && q.answerOptions[selected]?.isCorrect) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const scorePercentage = Math.round((totalScore / quizQuestions.length) * 100);

  // Category breakdown
  const categoryStats = quizQuestions.reduce((acc, q) => {
    const cat = q.category;
    if (!acc[cat]) acc[cat] = { total: 0, correct: 0 };
    acc[cat].total += 1;
    const selected = selectedAnswers[q.id];
    if (selected !== undefined && q.answerOptions[selected]?.isCorrect) {
      acc[cat].correct += 1;
    }
    return acc;
  }, {} as Record<string, { total: number; correct: number }>);

  return (
    <div className="w-full max-w-4xl mx-auto my-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm text-slate-100">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Founder Diagnostic Engine
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            The AI Product Builder Readiness Benchmark
          </h2>
        </div>
        {!isCompleted && (
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">
              Question {currentIdx + 1} of {quizQuestions.length}
            </span>
            <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-sky-500 transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {!isCompleted ? (
        <div>
          {/* Question Card */}
          <div className="mb-6">
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              {currentQ.category}
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed">
              {currentQ.question}
            </h3>
          </div>

          {/* Hint Toggle */}
          <div className="mb-6">
            <button
              onClick={() => setShowHint(prev => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-400 transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              {showHint[currentQ.id] ? "Hide architectural hint" : "View architectural hint"}
            </button>
            {showHint[currentQ.id] && (
              <div className="mt-2 p-3 bg-slate-950/60 border border-slate-800 rounded-lg text-xs text-slate-300 leading-normal">
                <span className="font-semibold text-sky-400">Hint: </span>
                {currentQ.hint}
              </div>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQ.answerOptions.map((opt, idx) => {
              const isSelected = selectedOptIdx === idx;
              let btnStyle = "bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40 text-slate-200";

              if (isAnswered) {
                if (opt.isCorrect) {
                  btnStyle = "bg-emerald-950/40 border-emerald-500/60 text-emerald-200";
                } else if (isSelected && !opt.isCorrect) {
                  btnStyle = "bg-rose-950/40 border-rose-500/60 text-rose-200";
                } else {
                  btnStyle = "bg-slate-950/30 border-slate-800/40 text-slate-500 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start justify-between gap-4 ${btnStyle}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm sm:text-base font-normal leading-relaxed">
                      {opt.text}
                    </span>
                  </div>
                  {isAnswered && (
                    <div className="shrink-0 mt-0.5">
                      {opt.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-400" />
                      ) : null}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Rationale Reveal */}
          {isAnswered && (
            <div className="mb-8 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-sm leading-relaxed animate-in fade-in duration-300">
              <div className="font-semibold text-xs uppercase tracking-wider mb-1 flex items-center gap-2">
                {currentQ.answerOptions[selectedOptIdx]?.isCorrect ? (
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Correct Formulation
                  </span>
                ) : (
                  <span className="text-rose-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" /> Strategic Blindspot
                  </span>
                )}
              </div>
              <p className="text-slate-300 mt-1">
                {currentQ.answerOptions[selectedOptIdx]?.rationale}
              </p>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all disabled:opacity-40 disabled:hover:bg-sky-500 shadow-lg shadow-sky-500/20"
            >
              {currentIdx === quizQuestions.length - 1 ? "Complete Benchmark" : "Next Question"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Results Report */
        <div className="space-y-8 animate-in fade-in duration-500">
          <div className="text-center p-8 bg-slate-950/60 rounded-2xl border border-slate-800">
            <Award className="w-12 h-12 text-sky-400 mx-auto mb-3" />
            <h3 className="text-3xl font-extrabold text-white mb-1">
              Your Readiness Score: {scorePercentage}%
            </h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              You correctly answered {totalScore} out of {quizQuestions.length} core architecture, capital, and GTM validation questions.
            </p>
            <div className="inline-block mt-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/10 border border-sky-500/30 text-sky-300">
              {scorePercentage >= 80 
                ? "Elite Operator Track (Ready for Deployment)" 
                : scorePercentage >= 60 
                ? "High-Potential Builder (Needs Capital & GTM Rails)" 
                : "Ideation Phase (Vulnerable to Backward Build)"}
            </div>
          </div>

          {/* Category Breakdown */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-sky-400" />
              Dimension Breakdown
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(categoryStats).map(([cat, stats]) => {
                const pct = Math.round((stats.correct / stats.total) * 100);
                return (
                  <div key={cat} className="p-4 bg-slate-950/40 rounded-xl border border-slate-800/80">
                    <div className="flex justify-between items-center text-xs font-medium text-slate-300 mb-2">
                      <span>{cat}</span>
                      <span className="font-mono text-sky-400">{stats.correct}/{stats.total} ({pct}%)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${
                          pct >= 75 ? "bg-emerald-400" : pct >= 50 ? "bg-amber-400" : "bg-rose-400"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Pathways */}
          <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-bold text-white">
                Ready to Bridge Code to Capital in 4 Weeks?
              </h4>
              <p className="text-xs text-slate-300 max-w-lg">
                The AI Product Builder is strictly capped at 10 to 15 technical founders per cohort to guarantee direct code reviews, live legal sprints, and pilot customer acquisition.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 text-xs font-semibold transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake
              </button>
              <Link
                href="/apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-sky-400/20"
              >
                Apply for Pilot ($1,500) <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
