import fs from 'fs';
import path from 'path';

async function fix() {
    const filePath = path.join(process.cwd(), 'app/lib/blog-articles-10.ts');
    let raw = fs.readFileSync(filePath, 'utf8');
    
    // Let's count how many backticks exist and find odd backtick positions
    const lines = raw.split('\n');
    let backtickCount = 0;
    lines.forEach((line, idx) => {
        const matches = line.match(/`/g);
        if (matches) {
            backtickCount += matches.length;
            console.log(`Line ${idx + 1}: ${matches.length} backtick(s) -> ${line.substring(0, 60)}`);
        }
    });

    console.log(`Total backticks: ${backtickCount}`);
}

fix();
