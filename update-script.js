const fs = require('fs');

const filesToUpdate = [
    'app/api/audit/session/route.ts',
    'app/api/expand/route.ts',
    'app/api/scoring/route.ts',
    'app/api/tools/aueb/save/route.ts'
];

for (const file of filesToUpdate) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace import
    content = content.replace(/import \{ model \} from '@\/app\/lib\/gemini';/, "import { client } from '@/app/lib/gemini';");
    
    // For app/api/audit/session/route.ts
    if (file.includes('audit/session')) {
        content = content.replace(/const result = await model\.generateContent\(\{[\s\S]*?\}\);[\s\S]*?const text = response\.text\(\);/g, "const interaction = await client.interactions.create({ model: 'gemini-3.8-flash', input: prompt });\n        const text = interaction.output_text || '';");
    }
    
    // For app/api/expand/route.ts
    if (file.includes('expand/route')) {
        content = content.replace(/const result = await model\.generateContent\(\{[\s\S]*?\}\);[\s\S]*?const response = result\.response\.text\(\);/g, "const interaction = await client.interactions.create({ model: 'gemini-3.8-flash', input: `Expand on this expertise area with specific examples and insights: \"${topic}\". Context: ${context || \"General inquiry about Richard Ewing's experience.\"}` , system_instruction: SYSTEM_PROMPT });\n        const response = interaction.output_text || '';");
    }
    
    // For app/api/scoring/route.ts
    if (file.includes('scoring/route')) {
        content = content.replace(/const result = await model\.generateContent\(\{[\s\S]*?\}\);[\s\S]*?const memo = result\.response\.text\(\);/g, "const interaction = await client.interactions.create({ model: 'gemini-3.8-flash', input: prompt });\n        const memo = interaction.output_text || '';");
    }
    
    // For app/api/tools/aueb/save/route.ts
    if (file.includes('aueb/save')) {
        content = content.replace(/const result = await model\.generateContent\(\{[\s\S]*?\}\);[\s\S]*?const rawResponse = result\.response\.text\(\);/g, "const interaction = await client.interactions.create({ model: 'gemini-3.8-flash', input: promptContext, system_instruction: SYSTEM_PROMPT });\n            const rawResponse = interaction.output_text || '';");
    }

    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
}
