const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Load environment variables
const envPath = path.join(__dirname, '../.env.production.local');
if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
        if (!line.trim() || line.startsWith('#')) continue;
        const index = line.indexOf('=');
        if (index === -1) continue;
        const key = line.slice(0, index).trim();
        let val = line.slice(index + 1).trim();
        if (val.startsWith('"') && val.endsWith('"')) {
            val = val.slice(1, -1);
        }
        val = val.replace(/\\r\\n/g, '').replace(/\\n/g, '\n');
        process.env[key] = val;
    }
}

// Ensure clean environment variables
for (const key of Object.keys(process.env)) {
    if (typeof process.env[key] === 'string') {
        process.env[key] = process.env[key].replace(/[\r\n]/g, '').trim();
    }
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

async function test() {
    console.log('Testing SDK call with thinkingConfig...');
    try {
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
            generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 100,
                thinkingConfig: {
                    thinkingBudget: 0
                }
            }
        });
        const result = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: 'Hello, what is 2+2?' }] }],
        });
        console.log('SDK Response text:', result.response.text());
        console.log('SDK Response raw usageMetadata:', result.response.usageMetadata);
    } catch (e) {
        console.error('SDK test error:', e);
    }
}

test();
