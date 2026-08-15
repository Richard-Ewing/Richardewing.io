'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Send,
  User,
  Code2,
  Lightbulb,
  Target,
  Calendar
} from 'lucide-react';

interface FormData {
  // Section 1
  fullName: string;
  email: string;
  linkedinUrl: string;
  locationTimezone: string;
  referralSource: string;
  // Section 2
  technicalBackground: string;
  priorDeployments: string;
  devEnvironment: string;
  // Section 3
  productIdea: string;
  validationStatus: string;
  entityStatus: string;
  // Section 4
  timeCommitment: string;
  commercialGoal: string;
  biggestRoadblock: string;
  whyJoin: string;
  // Section 5
  cohortDate: string;
  liveAttendance: string;
  customQuestions: string;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  linkedinUrl: '',
  locationTimezone: '',
  referralSource: '',
  technicalBackground: '',
  priorDeployments: '',
  devEnvironment: '',
  productIdea: '',
  validationStatus: '',
  entityStatus: '',
  timeCommitment: '',
  commercialGoal: '',
  biggestRoadblock: '',
  whyJoin: '',
  cohortDate: 'Upcoming Pilot Cohort (Strictly Capped at 10 Seats)',
  liveAttendance: '',
  customQuestions: ''
};

export default function IntakeApplicationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(prev => prev + 1);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean submission handling or wire to API
    try {
      await new Promise(r => setTimeout(r, 1200));
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepsMeta = [
    { num: 1, title: "Demographics", icon: User },
    { num: 2, title: "Technical Stack", icon: Code2 },
    { num: 3, title: "Validation Stage", icon: Lightbulb },
    { num: 4, title: "Goals & Commitment", icon: Target },
    { num: 5, title: "Logistics", icon: Calendar },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          Selective Intake Filter
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          The AI Product Builder Pilot Application
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
          Enrollment is capped at 10 to 15 technical founders to maintain high peer network quality and ensure personalized 1:1 architectural feedback from Richard Ewing.
        </p>
      </div>

      {!isSubmitted ? (
        <div>
          {/* Progress Bar & Tabs */}
          <div className="mb-8">
            <div className="grid grid-cols-5 gap-2 mb-3">
              {stepsMeta.map(s => {
                const Icon = s.icon;
                const isActive = step === s.num;
                const isPassed = step > s.num;
                return (
                  <button
                    key={s.num}
                    onClick={() => s.num < step && setStep(s.num)}
                    disabled={s.num > step}
                    className={`flex flex-col items-center gap-1.5 p-2 rounded-xl text-center transition-all ${
                      isActive 
                        ? "bg-sky-500/10 border border-sky-500/40 text-sky-400 font-semibold" 
                        : isPassed 
                        ? "bg-slate-950/40 text-emerald-400 cursor-pointer hover:bg-slate-800/40" 
                        : "bg-slate-950/20 text-slate-600 cursor-not-allowed"
                    }`}
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-current text-xs">
                      {isPassed ? <CheckCircle2 className="w-3.5 h-3.5" /> : s.num}
                    </div>
                    <span className="hidden sm:inline text-[11px] truncate w-full">{s.title}</span>
                  </button>
                );
              })}
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-sky-500 transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={step === totalSteps ? handleSubmit : handleNext}>
            {/* Step 1: Demographics */}
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="border-b border-slate-800 pb-3">
                  <h3 className="text-base font-semibold text-white">Section 1: Basic Information & Profile</h3>
                  <p className="text-xs text-slate-400">Introduce yourself and where you operate.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => updateField('fullName', e.target.value)}
                    placeholder="e.g. Marcus Vance"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Primary Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => updateField('email', e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    LinkedIn or GitHub Profile URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.linkedinUrl}
                    onChange={e => updateField('linkedinUrl', e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Location & Timezone *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.locationTimezone}
                      onChange={e => updateField('locationTimezone', e.target.value)}
                      placeholder="e.g. Austin, TX (CST)"
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      How did you hear about us? *
                    </label>
                    <select
                      required
                      value={formData.referralSource}
                      onChange={e => updateField('referralSource', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Newsletter">Newsletter / Substack</option>
                      <option value="Hacker News">Hacker News</option>
                      <option value="Referral">Peer Referral</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Technical Background */}
            {step === 2 && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="border-b border-slate-800 pb-3">
                  <h3 className="text-base font-semibold text-white">Section 2: Technical Stack & Capabilities</h3>
                  <p className="text-xs text-slate-400">We verify that every participant has the coding ability to ship independently.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Describe your engineering background. What languages and backend frameworks are you most comfortable using? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.technicalBackground}
                    onChange={e => updateField('technicalBackground', e.target.value)}
                    placeholder="e.g. 5+ years backend in Python/FastAPI, TypeScript, PostgreSQL, and basic Next.js frontend."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Have you built and deployed a production application before? Describe the stack and hosting infrastructure. *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.priorDeployments}
                    onChange={e => updateField('priorDeployments', e.target.value)}
                    placeholder="e.g. Deployed B2B web app on Vercel + Railway with Supabase Auth and Stripe billing."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    What is your current development environment? (IDE, version control, cloud) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.devEnvironment}
                    onChange={e => updateField('devEnvironment', e.target.value)}
                    placeholder="e.g. Cursor Pro, GitHub, Vercel, Railway, Docker"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Product Ideation & Validation */}
            {step === 3 && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="border-b border-slate-800 pb-3">
                  <h3 className="text-base font-semibold text-white">Section 3: Product Ideation & Commercial Experience</h3>
                  <p className="text-xs text-slate-400">Having an idea is not required, but understanding your stage helps us calibrate.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Do you currently have a specific product idea? If yes, describe the core outcome in 2-3 sentences. (If no, state &quot;none&quot;) *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.productIdea}
                    onChange={e => updateField('productIdea', e.target.value)}
                    placeholder="e.g. We help bank compliance officers locate regulatory violations in loan files 10x faster than manual review."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Have you conducted any customer discovery conversations or market validation for this idea? *
                  </label>
                  <select
                    required
                    value={formData.validationStatus}
                    onChange={e => updateField('validationStatus', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                  >
                    <option value="">Select validation level</option>
                    <option value="5+ Customer Discovery Calls Completed">Yes, I have conducted 5+ customer discovery calls</option>
                    <option value="Desk Research Only">Yes, I have conducted desk research but no live calls</option>
                    <option value="Deep Personal Pain">No, but I have deep personal experience with this exact pain point</option>
                    <option value="Starting From Scratch">No, I am starting completely from scratch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Have you ever incorporated a business entity, opened a business bank account, or configured a live Stripe account? *
                  </label>
                  <select
                    required
                    value={formData.entityStatus}
                    onChange={e => updateField('entityStatus', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                  >
                    <option value="">Select entity status</option>
                    <option value="Completed All Three">Yes, I have completed all three (Entity, Bank, Live Stripe)</option>
                    <option value="Some Completed">I have completed some, but not all</option>
                    <option value="Understand Steps">No, but I understand the steps</option>
                    <option value="Unsure Where to Start">No, and I am not sure where to start</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 4: Commitment & Goals */}
            {step === 4 && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="border-b border-slate-800 pb-3">
                  <h3 className="text-base font-semibold text-white">Section 4: Time Commitment & Commercial Goals</h3>
                  <p className="text-xs text-slate-400">Ensuring high accountability and measurable milestones.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Are you prepared to block out 8-12 hours per week for 4 consecutive weeks to dedicate to live sessions and product sprints? *
                  </label>
                  <select
                    required
                    value={formData.timeCommitment}
                    onChange={e => updateField('timeCommitment', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                  >
                    <option value="">Select commitment level</option>
                    <option value="Yes, 12+ hours/week">Yes, 12+ hours per week (Fully committed)</option>
                    <option value="Yes, 8-12 hours/week">Yes, 8-12 hours per week (Standard sprint)</option>
                    <option value="No, less than 8 hours">No, I cannot commit 8 hours per week right now</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    What is your primary, measurable commercial goal for this 4-week cohort? *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.commercialGoal}
                    onChange={e => updateField('commercialGoal', e.target.value)}
                    placeholder="e.g. Validate a high-ticket B2B pain point, deploy a working MVP with semantic caching, and secure 2 paying pilot customers."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    What is your single biggest fear or roadblock regarding launching a product? *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.biggestRoadblock}
                    onChange={e => updateField('biggestRoadblock', e.target.value)}
                    placeholder="e.g. Building in a vacuum for months only to launch to silence; or getting overwhelmed by entity and sales logistics."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Why do you want to join this cohort specifically rather than attempting to build on your own? *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.whyJoin}
                    onChange={e => updateField('whyJoin', e.target.value)}
                    placeholder="e.g. I need structured accountability, direct feedback on unit economics, and an experienced operator who has built $25M ARR product lines."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors leading-relaxed"
                  />
                </div>
              </div>
            )}

            {/* Step 5: Logistics */}
            {step === 5 && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="border-b border-slate-800 pb-3">
                  <h3 className="text-base font-semibold text-white">Section 5: Logistics & Final Verification</h3>
                  <p className="text-xs text-slate-400">Confirming schedule alignment and opening direct communication.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Select Cohort Enrollment Window *
                  </label>
                  <input
                    type="text"
                    disabled
                    value={formData.cohortDate}
                    className="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-sm text-sky-300 font-semibold cursor-not-allowed"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">Tuition: $1,500 Pilot Rate (Standard tuition increases to $2,500 after pilot seats fill).</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Live interactive sessions are held on Mondays and Thursdays at 6:00 PM PST. Can you reliably attend? *
                  </label>
                  <select
                    required
                    value={formData.liveAttendance}
                    onChange={e => updateField('liveAttendance', e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                  >
                    <option value="">Select attendance confirmation</option>
                    <option value="Yes, I can reliably attend live">Yes, I can reliably attend live (Recordings also available)</option>
                    <option value="Async only">I will participate primarily asynchronously via recordings & Slack</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Do you have any specific technical or business questions for Richard? (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.customQuestions}
                    onChange={e => updateField('customQuestions', e.target.value)}
                    placeholder="Any specific architectural concerns, tech stack questions, or entity considerations..."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-sky-500 transition-colors leading-relaxed"
                  />
                </div>

                {/* Rubric Preview Alert */}
                <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-300 space-y-1">
                  <div className="font-semibold text-sky-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    How Applications Are Evaluated (Weighted Rubric)
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Technical Ability (25%) • Customer Orientation (20%) • Commitment & Urgency (20%) • Coachability (20%) • Cohort Diversity & Fit (15%). Applications scoring in the top tier receive invitations to schedule a 15-minute diagnostic screening call.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 mt-8 border-t border-slate-800">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 text-xs font-semibold transition-all"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : <div />}

              {step < totalSteps ? (
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-sky-500/20"
                >
                  Continue to Step {step + 1} <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-sky-400/25 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>Submitting Application...</>
                  ) : (
                    <>Submit Pilot Application <Send className="w-4 h-4" /></>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      ) : (
        /* Submission Success Screen */
        <div className="text-center p-8 bg-slate-950/80 rounded-2xl border border-emerald-500/40 animate-in fade-in duration-500 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white">
            Application Received Successfully
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-white font-semibold">{formData.fullName || "Builder"}</span>. Your submission has been securely logged into our admissions review portal.
          </p>

          <div className="text-left p-4 bg-slate-900/90 rounded-xl border border-slate-800 text-xs text-slate-300 max-w-md mx-auto space-y-2">
            <div className="font-semibold text-sky-400 uppercase tracking-wider">
              What Happens Next:
            </div>
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-sky-400 flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">1</span>
              <span><strong>Admissions Review:</strong> Richard reviews all submissions personally within 24 hours.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-sky-400 flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">2</span>
              <span><strong>Diagnostic Screening:</strong> Qualified candidates receive an invitation to a 15-minute diagnostic call to align on goals.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-sky-400 flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">3</span>
              <span><strong>Enrollment &amp; Pre-Work:</strong> Upon acceptance, your pilot seat is locked for 48 hours, and Week 0 Pre-Work unlocks instantly.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
