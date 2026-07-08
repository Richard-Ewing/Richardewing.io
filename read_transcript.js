const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('C:\\Users\\richa\\.gemini\\antigravity\\brain\\9817f679-b2a7-4679-91c0-fb4314b29411\\.system_generated\\logs\\transcript.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.includes('"type":"USER_INPUT"')) {
      try {
        const parsed = JSON.parse(line);
        console.log("--- USER INPUT ---");
        console.log(parsed.content);
      } catch (e) {
        // ignore parse error
      }
    }
  }
}

processLineByLine();
