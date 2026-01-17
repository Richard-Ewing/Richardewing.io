
import { OpenAI } from 'openai';
import { z } from 'zod';

const SYSTEM_PROMPT = `
You are The Product Economist. Classify engineering tasks to detect insolvency.
RULES:
1. MAINTENANCE (Bad - Red): Fix, bug, refactor, debt, update, compliance, meeting, chore.
2. RETENTION (Neutral - Violet): Uptime, security, support, sso, legal.
3. GROWTH (Good - Cyan): New feature, launch, revenue, upsell, experiment.

OUTPUT JSON:
{
  "summary": { 
    "growth_count": number, 
    "retention_count": number, 
    "maintenance_count": number, 
    "total_count": number 
  }
}
`;

export async function POST(req: Request) {
    try {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) return new Response(JSON.stringify({ error: "Missing API Key" }), { status: 500 });

        const openai = new OpenAI({ apiKey: apiKey });

        const { tickets } = await req.json();
        if (!tickets || !tickets.length) return new Response("No data", { status: 400 });

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `AUDIT:\n${JSON.stringify(tickets)}` }
            ],
            response_format: { type: "json_object" },
            temperature: 0.1,
        });

        const jsonResponse = JSON.parse(completion.choices[0].message.content || "{}");
        return new Response(JSON.stringify(jsonResponse), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Audit failed" }), { status: 500 });
    }
}
