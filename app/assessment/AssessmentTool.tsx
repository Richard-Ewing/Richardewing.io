'use client';

import { useState } from 'react';
import Link from 'next/link';
import { QUESTIONS, DIMENSIONS } from './questions';
import { calculateScore, type AssessmentResult } from './scoring';
import CheckoutButton from '@/app/components/client/CheckoutButton';
import { ChevronRight, ChevronLeft, AlertTriangle, Download, Mail, CheckCircle, ShieldAlert, CheckSquare, Lightbulb, FileText } from 'lucide-react';
import { trackAssessmentStart, trackAssessmentComplete } from '@/lib/platform/analytics/telemetry';
import { COMMERCIAL_OFFERS } from '@/lib/platform/offers/offers';

export default function AssessmentTool() {
  const [phase, setPhase] = useState<'intro' | 'questions' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleStart = () => {
    trackAssessmentStart('assessment_page');
    setPhase('questions');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleOptionSelect = (points: number) => {
    const question = QUESTIONS[currentQuestionIndex];
    setAnswers(prev => ({ ...prev, [question.id]: points }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const finalResult = calculateScore(answers);
      setResult(finalResult);
      setPhase('results');
      
      const dimensionMap: Record<string, number> = {};
      finalResult.dimensions.forEach(d => { dimensionMap[d.key] = d.score; });
      trackAssessmentComplete(finalResult.overallScore, dimensionMap);

      fetch('/api/tools/runs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tool_id: 'ai-economics-assessment',
          score: finalResult.overallScore,
          inputs: { answers, dimensions: finalResult.dimensions }
        })
      }).catch(() => {});
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setEmailSubmitted(true);
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        source: 'ai_economics_assessment',
        score: result?.overallScore,
      })
    }).catch(() => {});
  };

  const handlePrintPDF = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  // Intro Phase
  if (phase === 'intro') {
    return (
      <div className="max-w-2xl mx-auto bg-white border border-zinc-300 rounded-3xl p-8 sm:p-10 shadow-sm text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-mono font-bold text-purple-700 uppercase tracking-widest mb-6">
          Diagnostic Tool
        </div>
        <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 mb-4">
          AI Economics Assessment
        </h2>
        <p className="text-base sm:text-lg text-zinc-700 font-medium mb-8 leading-relaxed">
          Answer 15 questions about your AI infrastructure. Get an immediate 0-100 AI Economics Score with detailed dimension findings, estimated margin leakage, and actionable self-serve remediation steps.
        </p>
        
        <div className="flex flex-col gap-3 text-left max-w-sm mx-auto mb-8 bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
          <div className="flex items-center gap-3 text-zinc-800 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>15 operational questions across 5 core dimensions</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-800 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Takes less than 3 minutes</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-800 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Detailed diagnosis + Actionable self-serve playbooks</span>
          </div>
        </div>

        {/* Output PDF Thumbnail Preview Card */}
        <div className="mb-8 p-4 bg-zinc-950 text-white rounded-2xl border border-zinc-800 max-w-sm mx-auto text-left shadow-md">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2 text-[10px] font-mono text-zinc-400">
            <span>YOUR PERSONALIZED PDF OUTPUT</span>
            <span className="text-purple-400 font-bold">5-DIMENSION REPORT</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center font-bold text-xs shrink-0">
              PDF
            </div>
            <div>
              <div className="text-xs font-bold text-white">AI Economics Score & Margin Audit</div>
              <div className="text-[10px] text-zinc-400 font-mono">Includes estimated margin leak % & board brief</div>
            </div>
          </div>
        </div>

        <button
          onClick={handleStart}
          className="bg-gradient-to-r from-violet-600 to-purple-600 hover:opacity-90 text-white font-bold py-4 px-10 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg shadow-purple-500/25 uppercase text-xs tracking-widest cursor-pointer"
        >
          Start Assessment <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // Questions Phase
  if (phase === 'questions') {
    const question = QUESTIONS[currentQuestionIndex];
    const selectedPoints = answers[question.id];
    const hasSelected = selectedPoints !== undefined;
    const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;
    const dimensionName = DIMENSIONS.find(d => d.key === question.dimension)?.name || 'Assessment';

    return (
      <div className="max-w-2xl mx-auto bg-white border border-zinc-300 rounded-3xl p-8 sm:p-10 shadow-sm">
        {/* Progress header */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-2">
            <span>{dimensionName}</span>
            <span>Question {currentQuestionIndex + 1} of {QUESTIONS.length}</span>
          </div>
          <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
            <div className="bg-purple-600 h-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Question Title */}
        <h3 className="text-xl sm:text-2xl font-grotesk font-bold text-zinc-950 mb-6 leading-snug">
          {question.question}
        </h3>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {question.options.map((option, idx) => {
            const isSelected = selectedPoints === option.points;
            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option.points)}
                className={`w-full text-left p-4 rounded-xl border text-sm sm:text-base font-semibold transition-all ${
                  isSelected
                    ? 'border-purple-600 bg-purple-50/60 text-purple-950 shadow-sm'
                    : 'border-zinc-200 bg-white text-zinc-800 hover:border-zinc-300 hover:bg-zinc-50'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex justify-between items-center pt-4 border-t border-zinc-200">
          <button
            onClick={handleBack}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 disabled:opacity-30 disabled:hover:text-zinc-500 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>

          <button
            onClick={handleNext}
            disabled={!hasSelected}
            className="bg-purple-600 hover:bg-purple-700 disabled:opacity-40 text-white font-bold py-3 px-8 rounded-xl transition-all flex items-center gap-2 uppercase text-xs tracking-widest cursor-pointer shadow-md"
          >
            {currentQuestionIndex === QUESTIONS.length - 1 ? 'Calculate Score' : 'Next'} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Results Phase
  if (phase === 'results' && result) {
    const getScoreColor = (score: number) => {
      if (score >= 80) return 'text-emerald-400';
      if (score >= 60) return 'text-cyan-400';
      if (score >= 40) return 'text-amber-400';
      return 'text-rose-400';
    };

    const getScoreBgColor = (score: number) => {
      if (score >= 80) return 'bg-emerald-500';
      if (score >= 60) return 'bg-cyan-500';
      if (score >= 40) return 'bg-amber-500';
      return 'bg-rose-500';
    };

    const getStatusBadge = (status: string) => {
      switch (status) {
        case 'Governed':
          return <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">Governed</span>;
        case 'Maturing':
          return <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-100 text-cyan-800 border border-cyan-300">Maturing</span>;
        case 'Reactive':
          return <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300">Reactive</span>;
        default:
          return <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-rose-100 text-rose-800 border border-rose-300">Exposed</span>;
      }
    };

    return (
      <>
        {/* Inject Print-Specific Styles to fix overlap bugs in PDF Export */}
        <style jsx global>{`
          @media print {
            body {
              background: #ffffff !important;
              color: #000000 !important;
            }
            nav, footer, .no-print, button, form {
              display: none !important;
            }
            .print-container {
              max-width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              box-shadow: none !important;
            }
            .page-break-avoid {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }
            .print-header {
              display: block !important;
              margin-bottom: 20px !important;
              border-b: 2px solid #000000 !important;
              padding-bottom: 12px !important;
            }
          }
          @media screen {
            .print-header {
              display: none;
            }
          }
        `}</style>

        <div className="max-w-4xl mx-auto space-y-8 print-container">
          
          {/* Printable Report Header */}
          <div className="print-header">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl font-bold font-grotesk text-black">Richard Ewing | AI Economist</h1>
                <p className="text-xs text-zinc-600 font-mono">Executive AI Economics Assessment & Diagnostic Report</p>
              </div>
              <div className="text-right text-xs font-mono text-zinc-500">
                Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </div>
            </div>
          </div>

          {/* Overall Score Box */}
          <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl page-break-avoid">
            <div className="relative z-10">
              <h2 className="text-zinc-400 font-mono text-xs tracking-widest uppercase mb-3">
                Your AI Economics Score
              </h2>
              <div className={`text-7xl sm:text-8xl font-grotesk font-bold tracking-tight mb-3 ${getScoreColor(result.overallScore)}`}>
                {result.overallScore}
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-3">
                {result.rating} Status
              </div>
              <p className="text-zinc-300 text-sm max-w-xl mx-auto leading-relaxed font-medium">
                {result.ratingDescription}
              </p>
            </div>
          </div>

          {/* Margin Leakage Summary & Recommended Action */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 page-break-avoid">
            <div className="md:col-span-2 bg-amber-50 border border-amber-300 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-7 h-7 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-grotesk font-bold text-zinc-950 text-lg mb-2">
                    Estimated AI Margin Leakage: {result.leakageRange.min}-{result.leakageRange.max}%
                  </h3>
                  <p className="text-xs text-zinc-800 leading-relaxed font-medium">
                    Based on your responses, an estimated <strong>{result.leakageRange.min}-{result.leakageRange.max}% of your AI cloud and API token expenditure</strong> is wasted through unconstrained prompt loops, missing context boundaries, and zero per-feature cost attribution.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm flex flex-col justify-between no-print">
              <div>
                <h4 className="font-grotesk font-bold text-zinc-950 mb-2 text-sm">
                  Executive Consultation Option
                </h4>
                <p className="text-xs text-zinc-600 mb-4 font-medium leading-relaxed">
                  Review these findings directly with Richard Ewing in a 30-minute rapid diagnostic session.
                </p>
              </div>
              <CheckoutButton 
                productId="gut_check" 
                label={`Book $${COMMERCIAL_OFFERS.gut_check.price} Diagnostic`} 
                variant="primary" 
              />
            </div>
          </div>

          {/* Top Executive Key Levers (Self-Serve Plan) */}
          <div className="bg-zinc-900 text-white rounded-3xl p-8 shadow-lg page-break-avoid">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-grotesk font-bold">
                Top Priority Self-Serve Remediation Plan
              </h3>
            </div>
            <p className="text-xs text-zinc-400 mb-6 font-mono uppercase tracking-widest">
              Immediate action items to increase your AI Economics Score & preserve gross margin:
            </p>
            <div className="space-y-4">
              {result.executiveActionPlan.map((actionStr, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-zinc-800/80 p-4 rounded-xl border border-zinc-700">
                  <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm font-semibold text-zinc-200 leading-snug">
                    {actionStr}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Dimension Diagnostics & Remediation Matrix */}
          <div className="space-y-6">
            <div className="border-b border-zinc-300 pb-3">
              <h3 className="text-2xl font-grotesk font-bold text-zinc-950">
                Detailed 5-Dimension Diagnostic Breakdown
              </h3>
              <p className="text-xs text-zinc-600 font-medium">
                Surgical diagnosis and actionable self-serve playbooks for each operational pillar.
              </p>
            </div>

            <div className="space-y-6">
              {result.dimensions.map((dim) => (
                <div key={dim.key} className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm page-break-avoid">
                  {/* Dimension Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-200">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-xl font-grotesk font-bold text-zinc-950">{dim.name}</h4>
                        {getStatusBadge(dim.status)}
                      </div>
                      <p className="text-xs font-mono text-zinc-500">Score: {dim.score}/100 points ({dim.rawPoints}/{dim.maxPoints} raw)</p>
                    </div>

                    <div className="w-full sm:w-48">
                      <div className="w-full bg-zinc-100 h-3 rounded-full overflow-hidden border border-zinc-200">
                        <div className={`${getScoreBgColor(dim.score)} h-full rounded-full transition-all duration-500`} style={{ width: `${dim.score}%` }} />
                      </div>
                    </div>
                  </div>

                  {/* Diagnosis Finding */}
                  <div className="mb-6 bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
                    <div className="text-xs font-mono font-bold text-purple-900 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" /> Operational Finding & Diagnosis:
                    </div>
                    <p className="text-sm font-semibold text-zinc-900 leading-relaxed">
                      {dim.finding}
                    </p>
                  </div>

                  {/* Actionable Self-Serve Remediation Steps */}
                  <div>
                    <div className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <CheckSquare className="w-3.5 h-3.5" /> Actionable Self-Serve Remediation Steps:
                    </div>
                    <div className="space-y-2.5">
                      {dim.actionableSteps.map((step, stepIdx) => (
                        <div key={stepIdx} className="flex items-start gap-2.5 text-xs font-medium text-zinc-800 leading-relaxed bg-emerald-50/50 p-3 rounded-xl border border-emerald-200/60">
                          <span className="text-emerald-700 font-bold font-mono shrink-0">Step {stepIdx + 1}:</span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Email Lead & PDF Export Footer Bar */}
          <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm no-print">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" /> Print or Export Executive Report
                </h3>
                <p className="text-xs text-zinc-600 font-semibold max-w-md">
                  Export a clean printable PDF report with your 5-dimension diagnostic analysis and self-serve playbooks to share with your board or executive team.
                </p>
              </div>
              
              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                {!emailSubmitted ? (
                  <form onSubmit={handleEmailSubmit} className="flex gap-2 w-full sm:w-auto">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="enter your work email..."
                      required
                      className="px-4 py-3 rounded-xl border border-zinc-300 text-xs font-mono font-medium text-zinc-950 focus:outline-none focus:border-purple-600 flex-1 sm:w-52"
                    />
                    <button
                      type="submit"
                      className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold font-mono uppercase tracking-widest shrink-0 transition-colors cursor-pointer"
                    >
                      Unlock Full PDF
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-3 rounded-xl border border-emerald-200">
                    <CheckCircle className="w-4 h-4" /> Full Report Unlocked!
                  </div>
                )}

                <button
                  onClick={handlePrintPDF}
                  className="px-6 py-3 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" /> Export PDF
                </button>
              </div>
            </div>
          </div>

          {/* Retake Button */}
          <div className="text-center pt-4 no-print">
            <button
              onClick={() => setPhase('intro')}
              className="text-xs font-mono font-bold text-zinc-500 hover:text-zinc-950 uppercase tracking-widest transition-colors cursor-pointer"
            >
              ← Retake Assessment
            </button>
          </div>

        </div>
      </>
    );
  }

  return null;
}
