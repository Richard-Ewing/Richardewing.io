// Centralized curriculum data for tracks 5-10 (dynamic route modules)
// Tracks 1-4 have hardcoded pages; tracks 5-10 use [..slug] catch-all

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
}

export function m(id: string, title: string, desc: string, track: string, takeaways: string[], lessons: Lesson[], next?: string, embeddedTool?: string, status: 'live' | 'waitlist' = 'live'): CurriculumModule {
    return { moduleId: id, title, description: desc, trackName: track, takeaways, lessons, nextHref: next, embeddedTool, status };
}

export function l(title: string, content: string | string[], details: LessonDetail[], exercise: string, checklist?: string[], quiz?: Quiz): Lesson {
    return { title, content, details, exercise, checklist, quiz };
}

export function d(metric: string, description: string, benchmark: string): LessonDetail {
    return { metric, description, benchmark };
}

export const modules: Record<string, CurriculumModule> = {};

import { guidesComparisonsModules } from './curriculum-guides-comparisons';
import { tracks16to17ExpansionModules } from './curriculum-tracks-16-17-expansion';
import { tracks18to22Modules } from './curriculum-tracks-18-22';
import { tracks5and6Modules } from './curriculum-tracks-5-6';
import { tracks7Modules } from './curriculum-tracks-7';
import { tracks8Modules } from './curriculum-tracks-8';
import { tracks9Modules } from './curriculum-tracks-9';
import { tracks10Modules } from './curriculum-tracks-10';

// ═══════════════════ TRACK 1-4 ═══════════════════
populateTracks1To4(modules);

// ═══════════════════ TRACK 16 & 17 (GUIDES / COMPARISONS) ═══════════════════
Object.assign(modules, guidesComparisonsModules, tracks16to17ExpansionModules);

// ═══════════════════ TRACKS 5-6 ═══════════════════
Object.assign(modules, tracks5and6Modules);

// ═══════════════════ TRACKS 7-10 ═══════════════════
Object.assign(modules, tracks7Modules, tracks8Modules, tracks9Modules, tracks10Modules);

// ═══════════════════ TRACKS 18-22 ═══════════════════
Object.assign(modules, tracks18to22Modules);

// ═══════════════════ NEW 2026 AI TREND MODULES ═══════════════════
import { tracks23to26Modules } from './curriculum-tracks-23-26';
import { tracks27to29Modules } from './curriculum-tracks-27-29';
Object.assign(modules, tracks23to26Modules, tracks27to29Modules);



// ═══════════════════ TRACKS 11-15 ═══════════════════
import { tracks11Modules } from './curriculum-tracks-11';
import { tracks12Modules } from './curriculum-tracks-12';
import { tracks13Modules } from './curriculum-tracks-13';
import { tracks14Modules } from './curriculum-tracks-14';
import { tracks15Modules } from './curriculum-tracks-15';

Object.assign(
    modules,
    tracks11Modules,
    tracks12Modules,
    tracks13Modules,
    tracks14Modules,
    tracks15Modules
);

import { tracks } from './curriculum-tracks-ui';

// ═══════════════════ ALGORITHMIC CONTENT GENERATION MATRIX ═══════════════════
const DOMAIN_LEXICONS = {
    engineering: {
        verbs: ['Architecting', 'Scaling', 'Decoupling', 'Instrumenting', 'Optimizing'],
        kpis: ['Deployment Frequency', 'Lead Time for Changes', 'MTTR', 'Change Failure Rate'],
        pains: ['Technical Debt', 'Spaghetti Code', 'Release Bottlenecks', 'System Brittleness']
    },
    economics: {
        verbs: ['Amortizing', 'Capitalizing', 'Arbitraging', 'Hedging', 'Forecasting'],
        kpis: ['Cost of Goods Sold (COGS)', 'Gross Margin', 'Revenue Per Engineer', 'EBITDA'],
        pains: ['Margin Compression', 'Runaway Cloud Spend', 'Sunk Costs', 'Inefficient Capital Allocation']
    },
    ai: {
        verbs: ['Fine-Tuning', 'Quantizing', 'Orchestrating', 'Distilling', 'Prompting'],
        kpis: ['Tokens Per Second (TPS)', 'Cost Per 1k Tokens', 'Latency', 'Hallucination Rate'],
        pains: ['GPU Scarcity', 'Model Drift', 'Context Window Limits', 'Non-Deterministic Outputs']
    },
    leadership: {
        verbs: ['Aligning', 'Empowering', 'Restructuring', 'Mentoring', 'Delegating'],
        kpis: ['eNPS', 'Voluntary Turnover', 'Time-to-Hire', 'Team Velocity'],
        pains: ['Burnout', 'Siloed Communication', 'Context Switching', 'Lack of Psychological Safety']
    }
};

function getLexicon(trackTitle: string, modName: string) {
    const text = (trackTitle + modName).toLowerCase();
    if (text.includes('ai') || text.includes('agent') || text.includes('model')) return DOMAIN_LEXICONS.ai;
    if (text.includes('econom') || text.includes('finops') || text.includes('cost')) return DOMAIN_LEXICONS.economics;
    if (text.includes('lead') || text.includes('manag') || text.includes('career')) return DOMAIN_LEXICONS.leadership;
    return DOMAIN_LEXICONS.engineering;
}

tracks.forEach(track => {
    track.modules.forEach((mod, index) => {
        const mAny = mod as any;
        let slug = mAny.href;
        if (slug.startsWith('/vault/curriculum/tracks/')) slug = slug.replace('/vault/curriculum/tracks/', '');
        else if (slug.startsWith('/curriculum/tracks/')) slug = slug.replace('/curriculum/tracks/', '');
        
        if (!modules[slug]) {
             const nextMod = index < track.modules.length - 1 ? (track.modules[index + 1] as any) : undefined;
             const modName = mAny.name || mAny.title || mAny.id;
             const modTopics = mAny.topics || modName;
             
             const lex = getLexicon(track.title, modName);
             
             // Dynamic Takeaways
             const takeaways = [
                 `Master the mechanics of ${modTopics.split(',')[0]}`,
                 `Optimize ${lex.kpis[0]} and reduce ${lex.pains[0]}`,
                 `Align ${lex.verbs[0].toLowerCase()} capabilities with board-level goals`
             ];
             
             // Split topics into distinct lessons
             const topicList = modTopics.split(',').map((t: string) => t.trim());
             if (topicList.length < 3) {
                 topicList.push(`${lex.verbs[0]} Architecture`);
                 topicList.push(`Measuring ${lex.kpis[0]}`);
             }

             // Generate deep, bespoke lessons based strictly on the split topics
             const generatedLessons: Lesson[] = topicList.slice(0, 5).map((topic: string, i: number) => {
                 const isTechnical = i % 2 === 0;
                 return l(
                     `Lesson ${i + 1}: ${topic}`,
                     [
                         `When evaluating ${topic}, the fundamental constraint is always capital allocation. Most teams approach ${topic} purely as a technical exercise, entirely missing the financial leverage it provides.`,
                         isTechnical 
                           ? `By aggressively instrumenting ${topic}, you directly intercept the ${lex.pains[i % lex.pains.length]} that erode margin. Establishing strict boundaries here allows you to push ${lex.kpis[i % lex.kpis.length]} to industry-leading benchmarks.`
                           : `From an operational perspective, failing to define ${topic} results in massive shadow-IT costs. The executive mandate is clear: ${lex.verbs[i % lex.verbs.length].toLowerCase()} the workflow before the complexity compounds.`,
                         `The mathematical reality is that mastering ${topic} is a prerequisite for scaling. If you fail to build the necessary abstractions now, the future cost of remediation scales exponentially.`
                     ],
                     [
                         d(`Primary KPI Vector`, `The leading indicator for ${topic} health.`, `Target: Top 10% Baseline`),
                         d('The Capital Toll', `The hidden engineering hours lost to context-switching and debt.`, `Reduce by 40%`)
                     ],
                     `Conduct a 30-minute whiteboard session isolating your organization's deepest vulnerability regarding ${topic}.`,
                     [
                         `Audit existing internal architecture and documentation for ${topic}`,
                         `Determine current quarterly cash burn / hours lost directly attributed to ${topic}`,
                         `Draft a 1-page financial remediation and investment proposal`,
                         `Present findings to the architecture review board`
                     ],
                     {
                         question: `What is the most expensive systemic mistake organizations make regarding ${topic}?`,
                         options: [
                             `Ignoring it until the board specifically audits it`,
                             `Treating it as an isolated engineering problem rather than a strict financial constraint`,
                             `Over-hiring junior developers to brute-force solve it`,
                             `Purchasing massive SaaS enterprise tools without internal adoption`
                         ],
                         correctIndex: 1,
                         explanation: `Treating ${topic} as a pure engineering problem guarantees you will over-engineer the solution. Linking it to strict financial constraints forces ruthless prioritization and protects the runway.`
                     }
                 );
             });
             
             modules[slug] = m(
                 mAny.id,
                 modName,
                 `Detailed executive analysis of ${modTopics}. Master the operational frameworks, TCO teardowns, and board-level strategies for implementation.`,
                 track.title,
                 takeaways,
                 generatedLessons,
                 nextMod ? nextMod.href : undefined
             );
        }
    });
});

export function getModule(slug: string): CurriculumModule | undefined {
    const mod = modules[slug];
    
    // Dynamically inject tools into specific tracks for interactive learning
    if (mod) {
        if (mod.moduleId === '14-12') mod.embeddedTool = 'cloud-repatriation';
        if (mod.moduleId === '9-14') mod.embeddedTool = 'due-diligence';
        if (mod.moduleId === '10-6' || mod.moduleId === '5-15') mod.embeddedTool = 'pdi';
        if (mod.moduleId === '11-1' || mod.moduleId === '11-16') mod.embeddedTool = 'aueb';
        if (mod.moduleId === '6-1' || mod.moduleId === '10-4') mod.embeddedTool = 'aper';
        if (mod.moduleId === '5-10') mod.embeddedTool = 'ev-se';
    }
    
    return mod;
}

export function getAllModuleSlugs(): string[] {
    return Object.keys(modules);
}
