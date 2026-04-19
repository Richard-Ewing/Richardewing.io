const { execSync } = require('child_process');
const urls = [
  "https://www.richardewing.io/articles/recap/built-in",
  "https://www.richardewing.io/articles/recap/hackernoon",
  "https://www.richardewing.io/vault/curriculum/tracks",
  "https://www.richardewing.io/articles/board-reporting-cto-framework",
  "https://www.richardewing.io/articles/innovation-tax-calculator",
  "https://www.richardewing.io/articles/prompt-engineering-economics",
  "https://www.richardewing.io/articles/technology-asset-valuation",
  "https://www.richardewing.io/articles/sre-team-economics",
  "https://www.richardewing.io/articles/data-pipeline-cost-optimization",
  "https://www.richardewing.io/articles/due-diligence-ai-assessment",
  "https://www.richardewing.io/glossary",
  "https://www.richardewing.io/glossary/serverless",
  "https://www.richardewing.io/glossary/design-system",
  "https://www.richardewing.io/glossary/burn-multiple",
  "https://www.richardewing.io/glossary/code-review",
  "https://www.richardewing.io/articles"
];

for(const u of urls) {
  try {
     console.log("Pinging google for " + u);
     execSync('node ping-google.js ' + u, {stdio: 'inherit'});
  } catch(e) {}
}
const args = urls.join(" ");
execSync('node ping-indexnow.js ' + args, {stdio: 'inherit'});
