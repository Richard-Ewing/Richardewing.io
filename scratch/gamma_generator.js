const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = 'sk-gamma-maj8pyzWG4O4qIKxK2oOWTYIIUwsH8YjJZXF6tnxY';
const BASE_URL = 'https://public-api.gamma.app/v1.0';

const docs = [
    {
        name: '1_The_Innovation_Tax_Audit.pdf',
        inputText: `Topic: The Innovation Tax and Technical Insolvency.
        
Context: This is an executive briefing for CFOs and CTOs based on Richard Ewing's publications in CIO.com and BuiltIn. 
Content to include:
- The 68% Problem: 68% of engineering spend goes to maintenance, not innovation.
- The concept of "Zombie Assets": features that cost money to maintain but provide no value.
- The Technical Insolvency Date: the point where maintenance consumes 100% of engineering capacity.
- The consequences of technical debt on enterprise valuation and attrition.

CRITICAL INSTRUCTIONS FOR GENERATION:
- Create a highly professional, board-ready presentation.
- Use a premium, corporate aesthetic. 
- Withhold the actual mathematical formula for calculating the "Product Debt Index (PDI)". 
- Instead of giving away the formula, create a cliffhanger: Tell the reader that calculating their exact PDI and Insolvency Date requires a custom architectural audit, and direct them to book a "Diagnostic Strategy Session" at richardewing.io.`
    },
    {
        name: '2_AI_Unit_Economics_Matrix.pdf',
        inputText: `Topic: AI Unit Economics and Model Collapse.
        
Context: This is an executive briefing based on Richard Ewing's publications in Hackernoon and MindTheProduct.
Content to include:
- ROAI (Return on AI Investment) vs ROI. Why CFOs are killing AI pilots in 2026.
- The Margin Disintegration Problem: How per-token API costs destroy standard SaaS gross margins.
- The 10x Rule: An AI feature must generate 10x its inference cost in value.
- Model Collapse: Why AI is a depreciating CapEx asset that requires continuous human data funding.

CRITICAL INSTRUCTIONS FOR GENERATION:
- Create a highly professional, board-ready presentation.
- Use a premium, corporate aesthetic.
- Withhold the exact "Model Routing Algorithms" and "Semantic Caching Architectures" that solve this problem.
- Instead, create a cliffhanger: Tell the reader that implementing Tiered Model Routing to save 75% on inference costs requires proprietary economic modeling, and direct them to book an "AI Economics Review" at richardewing.io.`
    },
    {
        name: '3_MA_Technical_Diligence.pdf',
        inputText: `Topic: Private Equity M&A Technical Due Diligence.
        
Context: An executive cheatsheet for Private Equity partners and CFOs assessing software acquisitions.
Content to include:
- The Reality of M&A Synergy: Why software integrations fail due to hidden architectural incompatibilities.
- The "Big Three" Deal Breakers: Identity Silos, Data Model Gravity, and Compliance CapEx Shock.
- Why PE firms lose millions when due diligence stops at revenue metrics and ignores engineering health.

CRITICAL INSTRUCTIONS FOR GENERATION:
- Create a highly professional, board-ready presentation.
- Use a premium, corporate aesthetic.
- Withhold the specific "Technical Debt Discount Formula" used to adjust the Enterprise Purchase Price.
- Instead, create a cliffhanger: Tell the reader that accurately valuing technical debt to negotiate a lower purchase multiple requires an expert "R&D Audit", and direct them to contact Richard Ewing at richardewing.io for their next acquisition.`
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
