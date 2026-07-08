const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env.prod.real
dotenv.config({ path: path.join(__dirname, '.env.prod.real') });

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
    console.error("No OPENAI_API_KEY found in .env.prod.real");
    process.exit(1);
}

const metadataList = JSON.parse(fs.readFileSync('current_metadata.json', 'utf8'));

// Filter out files that were already done manually
const skipFiles = [
    '\\app\\page.tsx', 
    '\\app\\about\\page.tsx', 
    '\\app\\pricing\\page.tsx', 
    '\\app\\advisory\\layout.tsx', 
    '\\app\\ai-integration\\page.tsx'
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function callOpenAI(item) {
    const prompt = `
You are an expert SEO architect. Rewrite the given title and description according to the exact rules below:

Current Title: ${item.title}
Current Description: ${item.description}

Rules for Title:
- Under 60 characters
- Formula: [Entity or exact question phrase] + [specific outcome/differentiator] + | Richard Ewing
- Example: AI Economist & Enterprise Capital Audits | Richard Ewing

Rules for Description:
- Under 155 characters
- Sentence 1: The direct answer or definition.
- Sentence 2: Differentiator or proof + action verb.
- Must be active voice. No "Learn more".

Return ONLY a strict JSON object with no markdown wrappers or other text:
{"title": "new title", "description": "new description"}
`;

    try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{role: "user", content: prompt}],
                temperature: 0.1
            })
        });

        if (!res.ok) throw new Error(`API error: ${res.statusText}`);
        
        const data = await res.json();
        const content = data.choices[0].message.content.trim();
        return JSON.parse(content);
    } catch (e) {
        console.error(`Error processing ${item.file}: ${e.message}`);
        return null;
    }
}

async function run() {
    let count = 0;
    for (const item of metadataList) {
        if (skipFiles.includes(item.file)) continue;

        console.log(`Processing [${count + 1}/${metadataList.length}]: ${item.file}`);
        
        const newMeta = await callOpenAI(item);
        if (newMeta && newMeta.title && newMeta.description) {
            const filePath = path.join(__dirname, item.file);
            let fileContent = fs.readFileSync(filePath, 'utf8');

            // Replace Title
            const titleRegex = /(title:\s*['"`])(.*?)(['"`])/;
            fileContent = fileContent.replace(titleRegex, `$1${newMeta.title}$3`);

            // Replace Description
            const descRegex = /(description:\s*['"`])(.*?)(['"`])/;
            fileContent = fileContent.replace(descRegex, `$1${newMeta.description}$3`);

            fs.writeFileSync(filePath, fileContent);
            console.log(` -> Updated ${item.file}`);
        }
        
        // Anti-rate-limit delay
        await sleep(250);
        count++;
    }
    console.log("Bulk rewrite complete!");
}

run();
