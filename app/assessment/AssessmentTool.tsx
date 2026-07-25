'use client';

import { useState } from 'react';
import Link from 'next/link';
import { QUESTIONS, DIMENSIONS } from './questions';
import { calculateScore, type AssessmentResult } from './scoring';
import CheckoutButton from '@/app/components/client/CheckoutButton';
import { ChevronRight, ChevronLeft, AlertTriangle, Download, Mail, CheckCircle } from 'lucide-react';
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
    // Send lead email to API
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
          Answer 15 questions about your AI infrastructure. Get an immediate 0-100 AI Economics Score with estimated margin leakage, governance gaps, and recommended next steps.
        </p>
        
        <div className="flex flex-col gap-3 text-left max-w-sm mx-auto mb-8 bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
          <div className="flex items-center gap-3 text-zinc-800 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>15 questions across 5 core dimensions</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-800 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Takes less than 3 minutes</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-800 text-sm font-medium">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Immediate inline score + PDF report option</span>
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

    return (
      <div className="max-w-3xl mx-auto space-y-8 print:p-0">
        {/* Score Box */}
        <div className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            <h2 className="text-zinc-400 font-mono text-xs tracking-widest uppercase mb-4">
              Your AI Economics Score
            </h2>
            <div className={`text-7xl sm:text-8xl font-grotesk font-bold tracking-tight mb-3 ${getScoreColor(result.overallScore)}`}>
              {result.overallScore}
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mb-3">
              {result.rating}
            </div>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto leading-relaxed">
              Based on your responses across 15 operational metrics. Here is your AI unit economics and infrastructure health breakdown.
            </p>
          </div>
        </div>

        {/* Dimension Breakdown & Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dimensions */}
          <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-6">
              Dimension Breakdown
            </h3>
            <div className="space-y-5">
              {result.dimensions.map((dim) => (
                <div key={dim.key}>
                  <div className="flex justify-between text-xs font-mono font-bold mb-2">
                    <span className="text-zinc-700">{dim.name}</span>
                    <span className="text-zinc-950">{dim.score}/100</span>
                  </div>
                  <div className="w-full bg-zinc-100 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className={`${getScoreBgColor(dim.score)} h-full rounded-full transition-all duration-500`}
                      style={{ width: `${dim.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Margin Leakage & Action */}
          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-300 rounded-3xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-zinc-950 text-base mb-1">
                    Estimated AI Margin Leakage: {result.leakageRange.min}-{result.leakageRange.max}%
                  </h4>
                  <p className="text-xs text-zinc-700 leading-relaxed font-semibold">
                    Estimated percentage of your AI infrastructure spend wasted through inefficient routing, unconstrained prompt loops, or zero cost visibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm">
              <h4 className="font-grotesk font-bold text-zinc-950 mb-3">
                Recommended Action
              </h4>
              <p className="text-xs text-zinc-600 mb-6 font-semibold leading-relaxed">
                Review your results with Richard Ewing in a 30-minute rapid diagnostic session to locate exact capital leaks.
              </p>
              <CheckoutButton 
                productId="gut_check" 
                label={`Book $${COMMERCIAL_OFFERS.gut_check.price} Rapid Diagnostic`} 
                variant="primary" 
              />
            </div>
          </div>
        </div>

        {/* Email Lead & PDF Export */}
        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-2">
                Download Benchmark PDF Report
              </h3>
              <p className="text-xs text-zinc-600 font-semibold max-w-md">
                Get a clean printable PDF report with your 5-dimension score breakdown to share with your board or executive team.
              </p>
            </div>
            
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              {!emailSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="flex gap-2 w-full sm:w-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="enter your email..."
                    required
                    className="px-4 py-3 rounded-xl border border-zinc-300 text-xs font-mono font-medium text-zinc-950 focus:outline-none focus:border-purple-600 flex-1 sm:w-48"
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold font-mono uppercase tracking-widest shrink-0 transition-colors"
                  >
                    Unlock Report
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-3 rounded-xl border border-emerald-200">
                  <CheckCircle className="w-4 h-4" /> Report Unlocked!
                </div>
              )}

              <button
                onClick={handlePrintPDF}
                className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" /> Export PDF
              </button>
            </div>
          </div>
        </div>

        {/* Retake Button */}
        <div className="text-center pt-4">
          <button
            onClick={() => setPhase('intro')}
            className="text-xs font-mono font-bold text-zinc-500 hover:text-zinc-950 uppercase tracking-widest transition-colors cursor-pointer"
          >
            ← Retake Assessment
          </button>
        </div>
      </div>
    );
  }

  return null;
}
