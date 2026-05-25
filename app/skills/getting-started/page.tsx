import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Terminal, FolderOpen, Settings, Wrench, Shield, Layers, CheckCircle, ArrowRight, AlertTriangle, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Governance Skills Setup Guide | Install in 5 Min',
    description: 'Step-by-step installation guide for AI governance skills. Deploy runtime controls for Claude Code in under 5 minutes. Free and open source.',
    keywords: ['how to use Claude skills', 'install Claude Code skills', 'CLAUDE.md tutorial', 'Cursor rules setup', 'AI coding agent governance', 'deploy runtime governance'],
    openGraph: {
        title: 'Getting Started — Deploy Governance Skills in 10 Minutes',
        description: 'Step-by-step installation guide for Claude Code, Cursor, Windsurf, and all major AI coding agents.',
    },
    alternates: { canonical: 'https://www.richardewing.io/skills/getting-started' },
};

const steps = [
    {
        number: '01',
        icon: FolderOpen,
        title: 'Unzip Your Download',
        description: 'Each purchase downloads as a .zip file containing all governance files, tool scripts, and documentation.',
        content: `Right-click the .zip file and extract it. You'll see a folder containing:`,
        code: `your-skill-name/
├── CLAUDE.md              ← Skill manifest
├── GETTING-STARTED.md     ← This guide  
├── README.md              ← Operations manual
├── policy.yaml            ← Governance rules
├── middleware.ts           ← Runtime code
├── architecture.mmd       ← Architecture diagram
├── financial-model.csv    ← ROI metrics
└── tools/                 ← Reusable scripts
    ├── tool-1.sh
    ├── tool-2.sh
    ├── tool-3.sh
    └── tool-4.sh`,
    },
    {
        number: '02',
        icon: Terminal,
        title: 'Copy Into Your Project',
        description: 'Create a skills directory in your project and copy the governance skill into it.',
        content: 'Open your terminal and run these two commands:',
        code: `# Create the skills directory
mkdir -p .claude/skills/

# Copy the skill folder into your project
cp -r /path/to/your-skill-name/ .claude/skills/your-skill-name/`,
    },
    {
        number: '03',
        icon: BookOpen,
        title: 'Reference It in CLAUDE.md',
        description: 'Tell your AI agent to load and follow the governance rules.',
        content: 'Open (or create) CLAUDE.md in your project root and add:',
        code: `## Governance Skills

Load and follow the governance rules in:
- .claude/skills/your-skill-name/CLAUDE.md
- .claude/skills/your-skill-name/policy.yaml

When any trigger condition is met, execute the
corresponding tool script in the tools/ directory.`,
    },
    {
        number: '04',
        icon: CheckCircle,
        title: 'Verify It Works',
        description: 'Start a new agent session and confirm the skill is loaded.',
        content: 'Ask your agent:',
        code: `"What governance skills are loaded? 
List the trigger conditions and escalation levels."`,
    },
];

const agentConfigs = [
    { name: 'Claude Code', file: 'CLAUDE.md', path: '.claude/skills/', color: 'violet' },
    { name: 'Cursor', file: '.cursorrules', path: '.cursor/skills/', color: 'blue' },
    { name: 'Windsurf', file: '.windsurfrules', path: '.windsurf/skills/', color: 'emerald' },
    { name: 'Cline', file: '.clinerules', path: '.cline/skills/', color: 'amber' },
    { name: 'Roo Code', file: '.roorules', path: '.roo/skills/', color: 'rose' },
    { name: 'Codex', file: 'AGENTS.md', path: '.codex/skills/', color: 'zinc' },
];

const troubleshooting = [
    { problem: 'Agent doesn\'t mention the skill', solution: 'Make sure your root CLAUDE.md or rules file references the skill path. Start a new session after adding the reference.' },
    { problem: 'Agent ignores the governance rules', solution: 'Rules are loaded at session start. Restart the session. If using Cursor, close and reopen the editor.' },
    { problem: 'Tool scripts won\'t run', solution: 'On Mac/Linux, run: chmod +x tools/*.sh — On Windows, use Git Bash or WSL.' },
    { problem: 'YAML syntax error in policy.yaml', solution: 'YAML requires spaces, not tabs. Open in VS Code which highlights syntax errors automatically.' },
    { problem: 'Agent runs tools but they produce errors', solution: 'Make sure you\'re running from the project root, not from inside the skill folder. The tools use relative paths.' },
];

export default function GettingStartedPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <BookOpen size={14} /> Getting Started
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        How to Install & Use<br />
                        <span className="text-violet-600">Your Governance Skill</span>
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        No prior experience required. If you can open a terminal, you can deploy runtime governance in under 10 minutes.
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-8 mb-16">
                    {steps.map((step) => (
                        <div key={step.number} className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-sm overflow-hidden">
                            <div className="p-6 sm:p-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                                        <step.icon className="text-violet-700" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono font-bold text-violet-600 uppercase tracking-widest mb-1">Step {step.number}</div>
                                        <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A]">{step.title}</h2>
                                    </div>
                                </div>
                                <p className="text-[#4A4A4A] mb-4">{step.description}</p>
                                <p className="text-sm text-[#5A5A5A] mb-3">{step.content}</p>
                                <pre className="bg-zinc-900 text-zinc-100 rounded-xl p-4 overflow-x-auto text-sm font-mono leading-relaxed">
                                    {step.code}
                                </pre>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Agent-Specific Configs */}
                <div className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
                        <Settings size={22} className="text-violet-600" />
                        Agent-Specific Setup
                    </h2>
                    <p className="text-[#4A4A4A] mb-6">
                        These skills work with every major AI coding agent. Here's where to put the files for each one:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {agentConfigs.map(agent => (
                            <div key={agent.name} className="bg-white rounded-xl p-5 border border-[rgba(0,0,0,0.08)]">
                                <div className="font-bold text-[#1A1A1A] mb-2">{agent.name}</div>
                                <div className="text-xs font-mono text-zinc-500 mb-1">Rules file: <span className="text-violet-600 font-bold">{agent.file}</span></div>
                                <div className="text-xs font-mono text-zinc-500">Skills path: <span className="text-emerald-600 font-bold">{agent.path}</span></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Policy Explained */}
                <div className="mb-16 bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 sm:p-8">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                        <Shield size={20} className="text-violet-600" />
                        Understanding policy.yaml
                    </h2>
                    <p className="text-[#4A4A4A] mb-4">
                        The policy file defines when the governance system activates and what it does. Here&apos;s what the thresholds mean in plain English:
                    </p>
                    <div className="bg-zinc-50 rounded-xl p-4 mb-4">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-zinc-200">
                                    <th className="text-left py-2 font-bold text-zinc-700">If This Happens...</th>
                                    <th className="text-left py-2 font-bold text-zinc-700">The Agent Should...</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-zinc-100"><td className="py-2 text-[#4A4A4A]">Context window 50% full</td><td className="py-2 text-amber-700 font-medium">Log a warning</td></tr>
                                <tr className="border-b border-zinc-100"><td className="py-2 text-[#4A4A4A]">Context window 65% full</td><td className="py-2 text-orange-700 font-medium">Save state and reset</td></tr>
                                <tr className="border-b border-zinc-100"><td className="py-2 text-[#4A4A4A]">Same file patched 5+ times</td><td className="py-2 text-rose-700 font-medium">Stop and ask you</td></tr>
                                <tr><td className="py-2 text-[#4A4A4A]">Spending &gt;$15/hr on tokens</td><td className="py-2 text-red-700 font-bold">Kill process immediately</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-[#5A5A5A]">
                        <strong>You can customize these.</strong> Edit the numbers in <code className="bg-zinc-100 px-1 rounded">policy.yaml</code> to match your team's risk tolerance.
                    </p>
                </div>

                {/* Combining Skills */}
                <div className="mb-16 bg-violet-50 rounded-2xl border border-violet-200 p-6 sm:p-8">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                        <Layers size={20} className="text-violet-600" />
                        Combining Multiple Skills
                    </h2>
                    <p className="text-[#4A4A4A] mb-4">
                        For maximum protection, deploy one skill from each governance layer:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        {[
                            { layer: 'Identity', skill: 'Deterministic Agentic Engineering', slug: 'deterministic-agentic-engineering' },
                            { layer: 'Skill', skill: 'Context Rot Prevention', slug: 'context-rot-prevention' },
                            { layer: 'Tool', skill: 'Runtime Governance', slug: 'runtime-governance' },
                            { layer: 'Environment', skill: 'Repository Drift Prevention', slug: 'repository-drift-prevention' },
                        ].map(rec => (
                            <Link key={rec.slug} href={`/skills/${rec.slug}`} className="p-3 bg-white rounded-lg border border-violet-100 hover:border-violet-300 transition-colors">
                                <div className="text-[10px] font-mono font-bold text-violet-600 uppercase tracking-widest">{rec.layer} Layer</div>
                                <div className="font-medium text-[#1A1A1A] text-sm">{rec.skill}</div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Troubleshooting */}
                <div className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
                        <HelpCircle size={22} className="text-rose-600" />
                        Troubleshooting
                    </h2>
                    <div className="space-y-3">
                        {troubleshooting.map(item => (
                            <details key={item.problem} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-5">
                                <summary className="font-bold text-[#1A1A1A] cursor-pointer flex items-center gap-2">
                                    <AlertTriangle size={14} className="text-amber-600" />
                                    {item.problem}
                                </summary>
                                <p className="mt-3 text-[#4A4A4A] text-sm pl-6">{item.solution}</p>
                            </details>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="p-10 bg-[#1A1A1A] rounded-2xl text-white text-center">
                    <h2 className="text-2xl font-grotesk font-bold mb-4">Ready to deploy?</h2>
                    <p className="text-zinc-400 mb-6">Choose your governance system and start protecting your codebase in under 10 minutes.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/skills" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded hover:bg-zinc-100 transition-colors">
                            Browse All 15 Systems →
                        </Link>
                        <Link href="/runtime-architecture" className="px-8 py-4 text-white font-bold rounded border border-zinc-700 hover:border-zinc-500 transition-colors">
                            Read the Architecture
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
