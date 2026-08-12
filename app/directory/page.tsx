import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Platform Directory & Architecture Index | Richard Ewing',
  description: 'Complete index of all canonical specifications, diagnostic tools, research frameworks, curriculum tracks, and advisory briefings.',
  alternates: {
    canonical: 'https://www.richardewing.io/directory',
  },
};

export default function DirectoryPage() {
  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-28 pb-24 text-zinc-950 font-grotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4 border-b border-zinc-300 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Platform Directory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight">
            Platform Index &amp; Architecture Directory
          </h1>
          <p className="text-base text-zinc-700 max-w-3xl font-medium">
            Complete index of all research specifications, executive diagnostic tools, framework playbooks, curriculum tracks, and advisory publications.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Section 1: Executive Advisory & Strategy */}
          <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-extrabold text-cyan-950 uppercase tracking-wide font-mono border-b border-zinc-200 pb-2">
              Executive Advisory &amp; Strategy
            </h2>
            <ul className="space-y-2 text-sm font-semibold">
              <li><Link href="/services" className="hover:text-cyan-900 transition-colors">Audit &amp; Advisory Services</Link></li>
              <li><Link href="/for-investors" className="hover:text-cyan-900 transition-colors">For PE &amp; VC Investors</Link></li>
              <li><Link href="/for-boards" className="hover:text-cyan-900 transition-colors">For Board Members</Link></li>
              <li><Link href="/for-ctos" className="hover:text-cyan-900 transition-colors">CTO Advisory Toolkit</Link></li>
              <li><Link href="/methodology" className="hover:text-cyan-900 transition-colors">Audit Methodology</Link></li>
              <li><Link href="/partnerships" className="hover:text-cyan-900 transition-colors">Partnerships &amp; Strategy</Link></li>
              <li><Link href="/partner" className="hover:text-cyan-900 transition-colors">Partner with Richard</Link></li>
              <li><Link href="/workshops" className="hover:text-cyan-900 transition-colors">Keynotes &amp; Executive Workshops</Link></li>
              <li><Link href="/testimonials" className="hover:text-cyan-900 transition-colors">Client Testimonials</Link></li>
              <li><Link href="/industries" className="hover:text-cyan-900 transition-colors">Industry AI Economics</Link></li>
              <li><Link href="/profiles" className="hover:text-cyan-900 transition-colors">Media &amp; Publications</Link></li>
              <li><Link href="/book" className="hover:text-cyan-900 transition-colors">Book: Stop Losing Money on AI</Link></li>
              <li><Link href="/about" className="hover:text-cyan-900 transition-colors">About Richard Ewing</Link></li>
            </ul>
          </div>

          {/* Section 2: Frameworks & Specifications */}
          <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-extrabold text-cyan-950 uppercase tracking-wide font-mono border-b border-zinc-200 pb-2">
              Research &amp; Canonical Frameworks
            </h2>
            <ul className="space-y-2 text-sm font-semibold">
              <li><Link href="/concepts" className="hover:text-cyan-900 transition-colors">Canonical Research Directory</Link></li>
              <li><Link href="/articles" className="hover:text-cyan-900 transition-colors">Articles &amp; Research Canon</Link></li>
              <li><Link href="/articles/frameworks/vibe-coding-debt" className="hover:text-cyan-900 transition-colors">Vibe Coding Debt Framework</Link></li>
              <li><Link href="/articles/frameworks/power-user-liability" className="hover:text-cyan-900 transition-colors">Power User Liability</Link></li>
              <li><Link href="/articles/frameworks/dspm" className="hover:text-cyan-900 transition-colors">Data Security Posture Management (DSPM)</Link></li>
              <li><Link href="/articles/frameworks/graph-rag" className="hover:text-cyan-900 transition-colors">Graph RAG Architecture</Link></li>
              <li><Link href="/articles/frameworks/compute-reseller-trap" className="hover:text-cyan-900 transition-colors">Compute Reseller Trap</Link></li>
              <li><Link href="/articles/frameworks/deterministic-control-layer" className="hover:text-cyan-900 transition-colors">Deterministic Control Layer</Link></li>
              <li><Link href="/articles/frameworks/return-on-ai-investment" className="hover:text-cyan-900 transition-colors">Return on AI Investment (ROAI)</Link></li>
              <li><Link href="/articles/frameworks/shadow-agents" className="hover:text-cyan-900 transition-colors">Shadow Agents Framework</Link></li>
              <li><Link href="/articles/frameworks/sovereign-ai" className="hover:text-cyan-900 transition-colors">Sovereign AI Infrastructure</Link></li>
              <li><Link href="/articles/frameworks/agentic-drift" className="hover:text-cyan-900 transition-colors">Agentic Drift (Logic Drift)</Link></li>
              <li><Link href="/articles/frameworks/slm" className="hover:text-cyan-900 transition-colors">Small Language Models (SLM)</Link></li>
              <li><Link href="/articles/frameworks/the-turing-tax" className="hover:text-cyan-900 transition-colors">The Turing Tax</Link></li>
            </ul>
          </div>

          {/* Section 3: Diagnostic Tools & Calculators */}
          <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-extrabold text-cyan-950 uppercase tracking-wide font-mono border-b border-zinc-200 pb-2">
              Diagnostic Tools &amp; ROI Engines
            </h2>
            <ul className="space-y-2 text-sm font-semibold">
              <li><Link href="/tools" className="hover:text-cyan-900 transition-colors">All Diagnostic Calculators</Link></li>
              <li><Link href="/roi-calculator" className="hover:text-cyan-900 transition-colors">AI Waste &amp; ROI Calculator</Link></li>
              <li><Link href="/careerwin" className="hover:text-cyan-900 transition-colors">CareerWin Platform</Link></li>
              <li><Link href="/reports/state-of-ai-engineering" className="hover:text-cyan-900 transition-colors">State of AI Engineering Report</Link></li>
              <li><Link href="/resources" className="hover:text-cyan-900 transition-colors">Resources Hub</Link></li>
              <li><Link href="/system-prompts" className="hover:text-cyan-900 transition-colors">Executive AI System Prompts</Link></li>
              <li><Link href="/skills/getting-started" className="hover:text-cyan-900 transition-colors">Governance Skills Guide</Link></li>
            </ul>
          </div>

          {/* Section 4: Tool Benchmarks & Competitor Comparisons */}
          <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm space-y-4 md:col-span-2 lg:col-span-2">
            <h2 className="text-lg font-extrabold text-cyan-950 uppercase tracking-wide font-mono border-b border-zinc-200 pb-2">
              Tool Benchmarks &amp; Head-to-Head Comparisons
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs font-semibold">
              <Link href="/tools/ai-roi-timeline/vs/forrester-tei" className="hover:text-cyan-900 transition-colors">AI ROI Timeline vs Forrester TEI</Link>
              <Link href="/tools/aueb/vs/aws-cost-explorer" className="hover:text-cyan-900 transition-colors">AUEB vs AWS Cost Explorer</Link>
              <Link href="/tools/due-diligence/vs/gartner-magic-quadrant" className="hover:text-cyan-900 transition-colors">Due Diligence Engine vs Gartner MQ</Link>
              <Link href="/tools/rag-chunking-visualizer/vs/ragxplorer" className="hover:text-cyan-900 transition-colors">RAG Chunking Visualizer vs RAGxplorer</Link>
              <Link href="/tools/prompt-injection-sandbox/vs/lakera-guard" className="hover:text-cyan-900 transition-colors">Prompt Injection Sandbox vs Lakera</Link>
              <Link href="/tools/audit-interview/vs/big-4-consulting" className="hover:text-cyan-900 transition-colors">Audit Interview vs Big 4 Consulting</Link>
              <Link href="/tools/agent-router/vs/datadog-llm" className="hover:text-cyan-900 transition-colors">Agent Router vs Datadog LLM</Link>
              <Link href="/tools/slm-vs-api/vs/openai-enterprise" className="hover:text-cyan-900 transition-colors">SLM vs API vs OpenAI Enterprise</Link>
              <Link href="/tools/prompt-injection-sandbox/vs/promptfoo" className="hover:text-cyan-900 transition-colors">Prompt Sandbox vs Promptfoo</Link>
              <Link href="/tools/ai-margin-analyzer/vs/cloudzero" className="hover:text-cyan-900 transition-colors">AI Margin Analyzer vs CloudZero</Link>
              <Link href="/tools/shadow-ai/vs/wiz" className="hover:text-cyan-900 transition-colors">Shadow AI Scanner vs Wiz.io</Link>
              <Link href="/tools/fte-displacement/vs/workday-planning" className="hover:text-cyan-900 transition-colors">FTE Displacement vs Workday</Link>
              <Link href="/tools/due-diligence/vs/g2-crowd" className="hover:text-cyan-900 transition-colors">Due Diligence Engine vs G2 Reviews</Link>
              <Link href="/tools/shadow-ai/vs/cyberhaven" className="hover:text-cyan-900 transition-colors">Shadow AI Scanner vs Cyberhaven</Link>
              <Link href="/tools/aper/vs/langsmith-evals" className="hover:text-cyan-900 transition-colors">APER Ratio vs LangSmith Evals</Link>
              <Link href="/tools/cloud-repatriation/vs/azure-tco" className="hover:text-cyan-900 transition-colors">Cloud Repatriation vs Azure TCO</Link>
              <Link href="/tools/ev-se/vs/mckinsey-ai-index" className="hover:text-cyan-900 transition-colors">EV vs SE Engine vs McKinsey AI Index</Link>
            </div>
          </div>

          {/* Section 5: Media Recaps & Curriculum Tracks */}
          <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-extrabold text-cyan-950 uppercase tracking-wide font-mono border-b border-zinc-200 pb-2">
              Media Recaps &amp; Curriculum Tracks
            </h2>
            <ul className="space-y-2 text-sm font-semibold">
              <li><Link href="/articles/recap/cio-com" className="hover:text-cyan-900 transition-colors">CIO.com Published Recaps</Link></li>
              <li><Link href="/articles/recap/built-in" className="hover:text-cyan-900 transition-colors">Built In Published Recaps</Link></li>
              <li><Link href="/articles/recap/hackernoon" className="hover:text-cyan-900 transition-colors">HackerNoon Published Recaps</Link></li>
              <li><Link href="/curriculum" className="hover:text-cyan-900 transition-colors">Executive Curriculum Directory</Link></li>
              <li><Link href="/vault/curriculum/tracks/leadership-autonomy-escalation" className="hover:text-cyan-900 transition-colors">Track: Leadership Autonomy &amp; Escalation</Link></li>
              <li><Link href="/vault/curriculum/tracks/leadership-double-diamond" className="hover:text-cyan-900 transition-colors">Track: Double Diamond Trajectory</Link></li>
              <li><Link href="/vault/curriculum/tracks/leadership-problem-continuum" className="hover:text-cyan-900 transition-colors">Track: Problem Continuum</Link></li>
              <li><Link href="/vault/curriculum/tracks/ai-economist/28-2" className="hover:text-cyan-900 transition-colors">Module 28.2: Quantifying AI Value</Link></li>
              <li><Link href="/vault/curriculum/tracks/ai-economist/28-3" className="hover:text-cyan-900 transition-colors">Module 28.3: Shadow AI Audit</Link></li>
              <li><Link href="/vault/curriculum/tracks/ai-economist/28-4" className="hover:text-cyan-900 transition-colors">Module 28.4: Margin Engineering</Link></li>
              <li><Link href="/vault/curriculum/tracks/ai-economist/28-5" className="hover:text-cyan-900 transition-colors">Module 28.5: Boardroom Presentation</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}
