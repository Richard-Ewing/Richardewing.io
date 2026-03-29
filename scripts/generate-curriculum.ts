import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';

import { getAllModuleSlugs, getModule } from '../app/lib/curriculum-data';

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error('❌ ERROR: GEMINI_API_KEY environment variable is missing.');
    console.error('Please configure it in .env.local or run: GEMINI_API_KEY="your-key" npx tsx scripts/generate-curriculum.ts');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); // Fast and cheap for 488 generations

async function generateModule(slug: string) {
    const mod = getModule(slug);
    if (!mod) return;

    // Use mod.moduleId exclusively for the filename since that's what page.tsx looks for!
    const outDir = path.join(process.cwd(), 'app', 'content', 'modules');
    const outPath = path.join(outDir, `${mod.moduleId}.html`);

    if (fs.existsSync(outPath)) {
        console.log(`⏩ Skipping ${mod.moduleId} (already exists)`);
        return;
    }

    // Combine takeaways and sub-lessons into context
    const takeawaysCtx = mod.takeaways.map((t: string) => `- ${t}`).join('\n');
    const lessonCtx = mod.lessons.map((l: any, i: number) => `
### Part ${i + 1}: ${l.title}
${l.content}
Metrics: ${l.details.map((d: any) => d.metric).join(', ')}
Exercise: ${l.exercise}
`).join('\n');

    const prompt = `
You are a top-tier McKinsey consultant, CISO, and CTO advisor. 
You are writing an exclusive $10,000 premium playbook for executives and technical leaders.
Tone: extremely authoritative, actionable, concise, zero fluff, highly technical.

Context for this playbook:
Track: ${mod.trackName}
Module Code: ${mod.moduleId}
Title: ${mod.title}
Description: ${mod.description}

Key Takeaways to cover:
${takeawaysCtx}

Architectural Lessons Outline:
${lessonCtx}

TASK: 
Write a highly structured, 800-1000 word playbook that actually delivers on the outline above.
You must return PURE HTML. Do NOT wrap it in a markdown \`\`\`html block. 
Use semantic HTML (<h1>, <h2>, <p>, <ul>, <li>, <strong>) infused closely with Tailwind CSS classes for styling. 
Theme: Dark mode, cyber-sec, finance, high contrast.
CRITICAL: You are outputting raw HTML strings for innerHTML injection. Use the standard HTML attribute \`class="..."\`. Do NOT use React's \`className="..."\`.
Use classes like: "text-2xl font-bold text-white mb-4", "text-zinc-400 leading-relaxed mb-6", "bg-white/5 border border-white/10 p-6 rounded-xl", "text-cyan-400", "text-emerald-400".
Do not include <html> or <body> tags. Just the interior content payload.
`;

    try {
        console.log(`⏳ Generating content for ${mod.moduleId}...`);
        const result = await model.generateContent(prompt);
        let htmlPayload = result.response.text();
        
        // Strip markdown blocks if Gemini stubbornly includes them
        htmlPayload = htmlPayload.replace(/^```(html)?\s*/i, '').replace(/\s*```$/i, '');

        fs.writeFileSync(outPath, htmlPayload);
        console.log(`✅ Success: ${mod.moduleId}.html written.`);
    } catch (e) {
        console.error(`❌ Failed to generate ${mod.moduleId}:`, e);
    }
}

async function runFactory() {
    console.log('🚀 Starting the AI Content Factory Pipeline...');
    
    // Ensure output directory exists
    const outDir = path.join(process.cwd(), 'app', 'content', 'modules');
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    const slugs = getAllModuleSlugs();
    console.log(`📡 Found ${slugs.length} total modules in curriculum.`);

    // Run sequentially to prevent rate limits, or batch them if desired
    for (const slug of slugs) {
        await generateModule(slug);
        // Small delay to prevent API throttling
        await new Promise(r => setTimeout(r, 1000));
    }

    console.log('🎉 Generation pipeline complete!');
}

runFactory().catch(console.error);
