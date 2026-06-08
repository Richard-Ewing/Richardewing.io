const https = require('https');
const fs = require('fs');
const path = require('path');

const queries = [
    "AI Agent Architecture",
    "Agentic Automation",
    "AI Cloud FinOps",
    "Build vs Buy LLM",
    "AI Due Diligence"
];

function fetchRedditQuestions(query) {
    return new Promise((resolve, reject) => {
        const encodedQuery = encodeURIComponent(`${query} ?`);
        const url = `https://www.reddit.com/search.json?q=${encodedQuery}&sort=relevance&t=all&limit=50`;
        
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        };

        https.get(url, options, (res) => {
            let data = '';
            
            // Handle redirects if any
            if (res.statusCode === 301 || res.statusCode === 302) {
                return reject(new Error(`Redirected to ${res.headers.location}`));
            }
            
            if (res.statusCode !== 200) {
                return reject(new Error(`Reddit API Error: ${res.statusCode}`));
            }

            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    const posts = parsed.data.children;
                    
                    const questions = posts
                        .map(p => p.data.title)
                        .filter(title => title.includes('?')) // Only keep actual questions
                        .map(title => title.trim());
                    
                    // Deduplicate
                    const uniqueQuestions = [...new Set(questions)];
                    resolve(uniqueQuestions);
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

async function run() {
    console.log("Scraping Reddit for executive AI questions...\n");
    let output = "# Reddit Extracted Questions for Programmatic SEO\n\n";
    
    for (const q of queries) {
        console.log(`Searching for: "${q}"...`);
        try {
            const questions = await fetchRedditQuestions(q);
            output += `## Topic: ${q}\n`;
            if (questions.length === 0) {
                output += "- *No direct questions found. Try broader terms.*\n";
            } else {
                questions.forEach(question => {
                    output += `- ${question}\n`;
                });
            }
            output += "\n";
            // Sleep to avoid rate limits
            await new Promise(r => setTimeout(r, 2000));
        } catch (e) {
            console.error(`Error on query "${q}":`, e.message);
            output += `## Topic: ${q}\n- Error: ${e.message}\n\n`;
        }
    }
    
    const outputPath = path.join(__dirname, 'reddit_questions.md');
    fs.writeFileSync(outputPath, output);
    console.log(`\n✅ Saved extracted questions to ${outputPath}`);
}

run();
