const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = 'sk-gamma-maj8pyzWG4O4qIKxK2oOWTYIIUwsH8YjJZXF6tnxY';
const BASE_URL = 'https://public-api.gamma.app/v1.0';

const docs = [
    {
        name: '1_AI_Margin_Engineering_Audit.pdf',
        inputText: `Topic: The AI Margin Engineering Audit and Technical Insolvency.
        
Context: This is an executive briefing for CFOs and CTOs based on Richard Ewing's publications in CIO.com and BuiltIn. 
Content to include:
- The End of Zero Marginal Cost Software: How generative AI introduces variable-cost "Synthetic COGS" that destroy SaaS gross margins.
- The Turing Tax: Why companies overpay for generalized LLMs (like GPT-4) when deterministic execution or SLMs would suffice.
- The Technical Insolvency Date: the point where maintenance and API compute costs consume 100% of engineering capacity.
- The consequences of uncontrolled inference costs on enterprise valuation.

CRITICAL INSTRUCTIONS FOR GENERATION:
- Create a highly professional, board-ready presentation.
- Use a premium, corporate aesthetic. 
- Withhold the actual mathematical formula for calculating the "AI Unit Economics Benchmark (AUEB)". 
- Instead of giving away the formula, create a cliffhanger: Tell the reader that calculating their exact exposure requires a custom architectural audit, and direct them to book a "Diagnostic Strategy Session" with Richard Ewing, AI Economist, at richardewing.io.`
    },
    {
        name: '2_Deterministic_Control_Architecture.pdf',
        inputText: `Topic: Deterministic Control Layers and Escaping the Compute Reseller Trap.
        
Context: This is an executive briefing based on Richard Ewing's "AI Economist" frameworks.
Content to include:
- Power User Liability: In an AI-native world, success can bankrupt you if usage is not capped or routed correctly.
- The Compute Reseller Trap: Why simply wrapping an OpenAI API offers zero defensibility and terrible margins.
- The Deterministic Control Layer: The immutable governance architecture (Semantic Caching, Intent Routing, Admissibility Guardrails) required to protect margins.
- The 10x Rule: An AI feature must generate 10x its inference cost in value.

CRITICAL INSTRUCTIONS FOR GENERATION:
- Create a highly professional, board-ready presentation.
- Use a premium, corporate aesthetic.
- Withhold the exact "Model Routing Algorithms" and "Semantic Caching Architectures" that solve this problem.
- Instead, create a cliffhanger: Tell the reader that implementing Tiered Model Routing to save 75% on inference costs requires proprietary economic modeling, and direct them to enroll in Track 24 at richardewing.io.`
    },
    {
        name: '3_Private_Equity_AI_Diligence.pdf',
        inputText: `Topic: Private Equity M&A Due Diligence in the AI Era.
        
Context: An executive cheatsheet for Private Equity partners and CFOs assessing AI and software acquisitions.
Content to include:
- The Reality of AI Synergy: Why AI acquisitions fail due to hidden architectural incompatibilities and massive Synthetic COGS.
- The "Big Three" Deal Breakers: Probabilistic Hallucination Risk, Data Model Gravity, and Compliance CapEx Shock.
- Why PE firms lose millions when due diligence stops at revenue metrics and ignores the underlying inference unit economics.

CRITICAL INSTRUCTIONS FOR GENERATION:
- Create a highly professional, board-ready presentation.
- Use a premium, corporate aesthetic.
- Withhold the specific "Technical Debt Discount Formula" used to adjust the Enterprise Purchase Price based on AI liabilities.
- Instead, create a cliffhanger: Tell the reader that accurately valuing AI technical debt to negotiate a lower purchase multiple requires an expert "R&D Capital Audit", and direct them to contact Richard Ewing, AI Economist, at richardewing.io for their next acquisition.`
    }
];

function request(method, endpoint, body = null) {
    return new Promise((resolve, reject) => {
        const url = new URL(endpoint, BASE_URL);
        const options = {
            method: method,
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json'
            }
        };

        const req = https.request(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    if (res.statusCode >= 400) {
                        reject(new Error(`API Error: ${res.statusCode} - ${JSON.stringify(parsed)}`));
                    } else {
                        resolve(parsed);
                    }
                } catch (e) {
                    reject(new Error(`Failed to parse response: ${data}`));
                }
            });
        });

        req.on('error', reject);
        if (body) req.write(JSON.stringify(body));
        req.end();
    });
}

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateDoc(doc) {
    console.log(`Starting generation for: ${doc.name}...`);
    
    // 1. Create Generation
    const createPayload = {
        textMode: 'generate',
        format: 'document',
        exportAs: 'pdf',
        inputText: doc.inputText,
        textOptions: {
            amount: 'detailed',
            tone: 'authoritative, professional, executive'
        },
        cardOptions: {
            dimensions: 'a4'
        }
    };

    const createRes = await request('POST', '/v1.0/generations', createPayload);
    const genId = createRes.generationId;
    console.log(`Job ID: ${genId}. Polling...`);

    // 2. Poll Status
    let status = 'pending';
    let exportUrl = null;
    
    while (status !== 'completed' && status !== 'failed') {
        await sleep(5000);
        const statusRes = await request('GET', `/v1.0/generations/${genId}`);
        status = statusRes.status.state || statusRes.status; // check structure based on api
        console.log(`Status: ${status}`);
        
        if (status === 'completed' || (statusRes.status && statusRes.status.state === 'completed')) {
            exportUrl = statusRes.exportUrl;
            break;
        } else if (status === 'failed' || (statusRes.status && statusRes.status.state === 'failed')) {
            throw new Error('Generation failed: ' + JSON.stringify(statusRes));
        }
    }

    if (!exportUrl) {
        throw new Error('Completed but no exportUrl found.');
    }

    // 3. Download PDF
    console.log(`Downloading PDF to ${doc.name}...`);
    const outPath = path.join(__dirname, 'gamma_pdfs', doc.name);
    await downloadFile(exportUrl, outPath);
    console.log(`Finished: ${doc.name}`);
}

async function main() {
    try {
        fs.mkdirSync(path.join(__dirname, 'gamma_pdfs'), { recursive: true });
        for (const doc of docs) {
            await generateDoc(doc);
        }
        console.log('All PDFs generated successfully.');
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

main();
