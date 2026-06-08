const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('C:\\Users\\richa\\.gemini\\antigravity\\brain\\d74239af-42a0-447a-a8fa-5f258fe2887e\\.system_generated\\logs\\transcript.jsonl');
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  try {
    const obj = JSON.parse(line);
    if (obj.tool_calls) {
      for (const call of obj.tool_calls) {
        if (call.name === 'replace_file_content' || call.name === 'write_to_file' || call.name === 'multi_replace_file_content') {
          console.log(`Step ${obj.step_index}: Tool: ${call.name}, File: ${call.args.TargetFile || call.args.TargetFile}`);
        }
      }
    }
  } catch (e) {
    // Ignore invalid JSON lines
  }
});
