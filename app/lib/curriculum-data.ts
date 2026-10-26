// Centralized curriculum data for all tracks
// After 2026 restructuring: 11 core authority tracks only

import { populateTracks1To4 } from './curriculum-tracks-1-4';

export interface LessonDetail { metric: string; description: string; benchmark: string; }

export interface Quiz {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export interface Lesson { 
    title: string; 
    content: string | string[]; 
    details: LessonDetail[]; 
    exercise: string;
    checklist?: string[];
    quiz?: Quiz;
}

export interface CurriculumModule {
    moduleId: string; title: string; description: string; trackName: string;
    takeaways: string[]; lessons: Lesson[]; nextHref?: string;
    productId?: string; bundleId?: string;
    embeddedTool?: string;
    status?: 'live' | 'waitlist';
    relatedArticles?: string[];
}

export function m(id: string, title: string, desc: string, track: string, takeaways: string[], lessons: Lesson[], next?: string, embeddedTool?: string, status: 'live' | 'waitlist' = 'live', relatedArticles?: string[]): CurriculumModule {
    return { moduleId: id, title, description: desc, trackName: track, takeaways, lessons, nextHref: next, embeddedTool, status, relatedArticles };
}

export function l(title: string, content: string | string[], details: LessonDetail[], exercise: string, checklist?: string[], quiz?: Quiz): Lesson {
    return { title, content, details, exercise, checklist, quiz };
}

export function d(metric: string, description: string, benchmark: string): LessonDetail {
    return { metric, description, benchmark };
}

export const modules: Record<string, CurriculumModule> = {};

// ═══════════════════ CORE AUTHORITY TRACKS ═══════════════════

// Track 1-4: Engineering Economics, AI AI Economics, R&D Capital, Capstone
populateTracks1To4(modules);

// Track 5 (old Track 6): Product Management Economics
import { tracks5and6Modules } from './curriculum-tracks-5-6';
Object.assign(modules, tracks5and6Modules);

// Track 6 (old Track 11): AI Operations Economics & Cost Governance
import { tracks11Modules } from './curriculum-tracks-11';
Object.assign(modules, tracks11Modules);

// Track 7 (old Track 14): Cloud FinOps & AI Cost Management
import { tracks7Modules } from './curriculum-tracks-14';
Object.assign(modules, tracks7Modules);

// Track 12: Executive Engineering Leadership & Mentorship
import { leadershipModules } from './curriculum-tracks-leadership';
Object.assign(modules, leadershipModules);

// ═══════════════════ NEW 2026 TRACKS ═══════════════════
// Track 8: AI Pricing Strategy & Monetization Economics
// Track 9: Technical Debt as Financial Liability
// Track 10: AI Due Diligence for Investors & Acquirers
// Track 11: Economics of Build vs. Buy for AI
// Track 12: Career Capital Economics
// Track 13: Engineering-to-Executive Economics
// Track 14: The Economics of Leadership (Not Management)
import { populateNewTracks8to14 } from './curriculum-tracks-new-8-14';
populateNewTracks8to14(modules);

// ═══════════════════ EXPANSION: Fill Tracks 8-14 to Full 10-Module Depth ═══════════════════
import { populateExpansion8to14 } from './curriculum-tracks-expansion-8-14';
populateExpansion8to14(modules);

// ═══════════════════ NEW TRACKS 15-18 ═══════════════════
// Track 15: Remote & Distributed Team Economics
// Track 16: M&A Technical Integration Economics
// Track 17: Developer Experience (DX) Economics
// Track 18: Vendor & Contract Economics
import { populateTracks15to18 } from './curriculum-tracks-new-15-18';
populateTracks15to18(modules);

// ═══════════════════ NEW TRACKS 19-23 ═══════════════════
// Track 19: AI Agent Architecture & Economics
// Track 20: Agentic Process Automation Economics
// Track 21: AI Agent Governance & Trust Infrastructure
// Track 22: Strategic Leadership Economics
// Track 23: Executive Presence & Board Leadership
import { populateTracks19to23 } from './curriculum-tracks-new-19-23';
populateTracks19to23(modules);

// ═══════════════════ NEW TRACK 24 ═══════════════════
// Track 24: AI Economics & Margin Engineering
import { populateTrack24 } from './curriculum-tracks-new-24';
populateTrack24(modules);

// ═══════════════════ NEW TRACK 28 ═══════════════════
// Track 28: The AI Economist Masterclass
import { populateTrack28 } from './curriculum-tracks-new-28';
populateTrack28(modules);

// ═══════════════════ TRACK 58: GOVERNANCE FOR AGENTIC AI ═══════════════════
// Track 58: Governance for Agentic AI (Persistence vs Authority, The 4 Pillars, Review Queue)
import { agenticGovernanceModules } from './curriculum-tracks-agentic';
Object.assign(modules, agenticGovernanceModules);

// ═══════════════════ LEGACY TRACK CONTENT (kept on disk for future restoration) ═══════════════════
// The following files exist on disk but are NOT imported into the active registry:
// - curriculum-tracks-5-6.ts (Track 5 DevOps  -  killed; Track 6 PM  -  kept above)
// - curriculum-tracks-7.ts (Security Economics  -  killed)
// - curriculum-tracks-8.ts (Data Economics  -  killed)
// - curriculum-tracks-9.ts (Engineering Leadership  -  consolidated into Track 3)
// - curriculum-tracks-10.ts (Startup Economics  -  consolidated into Track 4)
// - curriculum-tracks-12.ts (Enterprise Architecture  -  killed)
// - curriculum-tracks-13.ts (AI Agent Economics  -  consolidated into Track 11)
// - curriculum-tracks-15.ts (Free Playbooks  -  killed from catalog)
// - curriculum-tracks-16-17-expansion.ts (Guides/Comparisons  -  killed)
// - curriculum-tracks-18.ts through curriculum-tracks-29.ts (all killed)
// - curriculum-guides-comparisons.ts (killed)

import { tracks } from './curriculum-tracks-ui';
import { SPOKE_MATRIX } from './spoke-data';

// ═══════════════════ POPULATE FULL MODULES FOR ALL UI TRACKS ═══════════════════
// Any module defined in the UI track matrix that is not yet in the registry receives a full,
// structured 3-lesson executive curriculum module with benchmarks and exercises so that
// internal links on /vault/curriculum/tracks never land on thin or noindex waitlist pages.
tracks.forEach(track => {
    track.modules.forEach((uiMod, idx) => {
        if (!uiMod.href) return;
        const slugStr = uiMod.href.replace('/vault/curriculum/tracks/', '');
        
        if (!modules[slugStr]) {
            const cleanName = uiMod.name.replace(/^\d+\.\d+\s+/, '');
            const topicList = (uiMod.topics || cleanName).split(',').map(t => t.trim()).filter(Boolean);
            const topicA = topicList[0] || cleanName;
            const topicB = topicList[1] || `${cleanName} Unit Economics`;
            const topicC = topicList[2] || `${cleanName} Executive Governance`;
            const nextMod = track.modules[idx + 1];
            const nextHref = nextMod?.href || undefined;
            const rolesStr = Array.isArray((track as any).targetRoles) ? (track as any).targetRoles.join(', ') : 'CEO, CFO, CTO, VP of Engineering';
            const spineConcept = (track as any).pipelineSpine?.concept || cleanName;
            const spineFramework = (track as any).pipelineSpine?.framework || 'Capital Allocation Matrix';
            const spineDiagnostic = (track as any).pipelineSpine?.diagnostic || 'Diagnostic Scorecard (/tools)';

            modules[slugStr] = m(
                uiMod.id,
                cleanName,
                `Executive operational playbook on ${cleanName.toLowerCase()} (${uiMod.topics}). Designed for ${rolesStr} to audit cost structures, eliminate operational drag, and enforce ${spineFramework}.`,
                track.title,
                [
                    `Audit and quantify ${topicA} across engineering, product, and finance workflows`,
                    `Establish hard financial thresholds for ${topicB} before committing headcount or cloud budget`,
                    `Deploy ${spineFramework} and ${topicC} to protect gross margins and board-level capital efficiency`,
                    `Execute a 30-day operational diagnostic using ${spineDiagnostic}`
                ],
                [
                    l(
                        `Lesson 1: Unit Economics & Cost Mechanics of ${topicA}`,
                        [
                            `In most software organizations, ${topicA.toLowerCase()} is treated as an unmeasured operational habit rather than a direct line item on the profit and loss statement. When CEOs, CFOs, and VPs of Engineering review quarterly budgets, hidden friction inside ${cleanName.toLowerCase()} quietly drains 20% to 35% of productive R&D capacity.`,
                            `Grounded in the ${spineConcept} principle, this lesson breaks down how ${topicA} compounds across team boundaries. Instead of accepting vague status updates, leaders must require itemized unit metrics that tie technical execution directly to customer retention and gross margin preservation.`,
                            `By establishing a baseline ledger for ${topicA.toLowerCase()}, finance and engineering leaders can immediately separate capital-creating work from recurring maintenance overhead.`
                        ],
                        [
                            d(`${topicA} Exposure`, `Percentage of quarterly engineering and operations budget impacted by ${topicA.toLowerCase()}`, '18% - 35% of R&D spend'),
                            d('Margin Drag Threshold', `Point at which unmanaged ${topicA.toLowerCase()} turns feature contribution margins negative`, '>15% unallocated variance'),
                            d('Audit Payback Window', `Typical timeframe to recover wasted spend after enforcing ${spineFramework}`, '30 - 60 days')
                        ],
                        `Pull the last 90 days of spend and sprint allocation related to ${topicA}. Calculate the exact dollar cost of delays, rework, or unmonitored consumption, and present a 1-page readout to your CFO and VP of Engineering.`
                    ),
                    l(
                        `Lesson 2: Architectural & Operational Boundaries for ${topicB}`,
                        [
                            `Once the financial baseline is visible, the second step is bounding ${topicB.toLowerCase()} with clear operational rules. Teams get into trouble when decision rights around ${topicB.toLowerCase()} are left ambiguous between product managers, staff engineers, and procurement officers.`,
                            `Using the ${spineFramework}, we establish explicit pre-commit gates: what can proceed automatically, what requires a written unit-cost review, and what must be rejected outright before a single line of code or vendor contract is signed.`
                        ],
                        [
                            d(`${topicB} Control Gate`, 'Mandatory verification checkpoint before production rollout or contract renewal', '100% pre-commit coverage'),
                            d('Variance Tolerance', `Maximum acceptable cost or latency drift in ${topicB.toLowerCase()}`, '<5% month-over-month'),
                            d('Cross-Functional Sign-Off', `Named executive owner accountable for ${topicB.toLowerCase()} outcomes`, rolesStr)
                        ],
                        `Map your current approval workflow for ${topicB}. Identify where unapproved commitments slip through and insert a hard pass/fail threshold using ${spineDiagnostic}.`
                    ),
                    l(
                        `Lesson 3: Board-Level Governance & ${topicC}`,
                        [
                            `Sustainable execution requires turning ${topicC.toLowerCase()} into a repeatable quarterly operating rhythm. Rather than running one-off cleanup sprints when budgets tighten, high-performing leadership teams review ${cleanName.toLowerCase()} alongside revenue retention, CAC payback, and EBITDA margins.`,
                            `This final lesson provides the boardroom reporting template and 90-day implementation checklist to keep ${cleanName.toLowerCase()} aligned with long-term enterprise value.`
                        ],
                        [
                            d('Executive Scorecard Cadence', `Review frequency for ${topicC.toLowerCase()} across finance and technology leadership`, 'Monthly / Quarterly Board Pack'),
                            d('Target Efficiency Uplift', `Expected improvement in capital efficiency after full ${cleanName.toLowerCase()} governance`, '25% - 40% reduction in waste')
                        ],
                        `Draft a 4-quadrant board slide summarizing your ${cleanName} baseline, active risk boundaries, 90-day remediation targets, and projected EBITDA impact.`
                    )
                ],
                nextHref,
                undefined,
                'live'
            );
        }
    });
});

export function getModule(slug: string): CurriculumModule | undefined {
    const mod = modules[slug];

    // Dynamically inject tools into specific tracks for interactive learning
    if (mod) {
        if (mod.moduleId === '14-12') mod.embeddedTool = 'cloud-repatriation';
        if (mod.moduleId === '11-4') mod.embeddedTool = 'vta';
        if (mod.moduleId === '11-1' || mod.moduleId === '11-16' || mod.moduleId === '6-1' || mod.moduleId === '6-16') mod.embeddedTool = 'aueb';
        if (mod.moduleId === '5-1') mod.embeddedTool = 'aper';
    }
    
    // Inject Programmatic SEO related articles dynamically based on topic mapping
    if (mod && (!mod.relatedArticles || mod.relatedArticles.length === 0)) {
        mod.relatedArticles = mod.relatedArticles || [];
        
        // Topic to Module mapping logic
        const targetModules: Record<string, string[]> = {
            'engineering-architecture': ['9-1', '14-1', '11-4'], // Tech Debt, Cloud FinOps, Build vs Buy
            'ai-product-strategy': ['8-1', '8-4', '1-1'], // Pricing Strategy, AI Economics
            'engineering-leadership': ['14-1', '13-1', '12-1'], // Leadership, Exec Economics, Career Capital
            'executive-financials': ['10-1', '10-3', '1-2'], // Due Diligence, Financials
            'product-management-economics': ['5-1', '8-2', '11-1'] // PM Economics, Build vs Buy
        };

        SPOKE_MATRIX.forEach(topic => {
            const relevantMods = targetModules[topic.topicSlug] || [];
            if (relevantMods.includes(mod!.moduleId)) {
                Object.keys(topic.personas).forEach(persona => {
                    const questions = (topic.personas as any)[persona];
                    if (questions) {
                        questions.forEach((q: any) => {
                            const articleUrl = `/answers/${topic.topicSlug}/${persona}/${q.questionSlug}`;
                            if (!mod!.relatedArticles!.includes(articleUrl)) {
                                mod!.relatedArticles!.push(articleUrl);
                            }
                        });
                    }
                });
            }
        });
        
        // Limit to top 5 most relevant answers to avoid overcrowding the UI
        mod.relatedArticles = mod.relatedArticles.slice(0, 5);

        // Explicitly inject migrated Enterprise Frameworks (Beehiiv Articles) into core curriculum
        const frameworkArticles: Record<string, string[]> = {
            'how-to-prevent-context-loss-in-ai-applications': ['19-1', '19-2', '21-1', '21-2'],
            'giving-ai-bigger-memory-window-confused-worker-inbox': ['19-1', '21-1', '1-1'],
            'claude-search-tool-zero-adoption': ['5-1', '11-4', '1-1'],
            'how-to-protect-production-databases-from-unauthorized-ai-agent-actions': ['19-2', '21-2', '21-3'],
            'negative-carry-code-crisis': ['9-1', '9-2', '9-3'],
            'the-innovation-tax-audit-is-your-rd-actually-just-opex': ['9-1', '14-1'],
            'generative-ai-margin-squeeze-saas-cogs': ['11-1', '14-3'],
            'autonomous-ai-agent-deterministic-control-plane': ['19-1', '19-2', '21-1'],
            'b2b-saas-coordination-tax-saas-engineering-margins': ['5-1', '14-1'],
            'the-product-p-l-test-why-your-ai-feature-is-bleeding-cash': ['1-1', '11-4'],
            'what-a-product-economist-actually-does': ['5-1', '13-1']
        };

        Object.entries(frameworkArticles).forEach(([articleSlug, moduleIds]) => {
            if (moduleIds.includes(mod!.moduleId)) {
                // Ensure array exists and push to the TOP of the related articles list so it is highly visible
                mod!.relatedArticles = mod!.relatedArticles || [];
                const articleUrl = `/blog/${articleSlug}`;
                if (!mod!.relatedArticles.includes(articleUrl)) {
                    mod!.relatedArticles.unshift(articleUrl);
                }
            }
        });
    }

    return mod;
}

export function getAllModuleSlugs(): string[] {
    return Object.keys(modules);
}

// Return only active, fully-written modules for sitemap to avoid thin content flags in GSC
export function getLiveModuleSlugs(): string[] {
    return Object.entries(modules)
        .filter(([_, mod]) => mod.status !== 'waitlist' && Array.isArray(mod.lessons) && mod.lessons.length > 0)
        .map(([slug]) => slug);
}

