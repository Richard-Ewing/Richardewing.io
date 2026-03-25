import fs from 'fs';
import path from 'path';

// 1. Inject into all 50 Guides
const guidesDir = path.join('app', 'guides');
const subdirs = fs.readdirSync(guidesDir).filter(f => fs.statSync(path.join(guidesDir, f)).isDirectory());

let injectedCount = 0;

for (const slug of subdirs) {
    const pagePath = path.join(guidesDir, slug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');

        // Check if already injected
        if (content.includes('RelatedContent')) continue;

        // 1. Inject import
        const lastImportIndex = content.lastIndexOf('import ');
        if (lastImportIndex !== -1) {
            const endOfLine = content.indexOf('\n', lastImportIndex);
            content = content.slice(0, endOfLine + 1) + `import RelatedContent from '@/components/RelatedContent';\n` + content.slice(endOfLine + 1);
        } else {
            content = `import RelatedContent from '@/components/RelatedContent';\n` + content;
        }

        // 2. Inject component
        // We'll place it right before the last closing </div> inside <main>
        const match = content.match(/<\/div>\s*<\/div>\s*<\/main>/);
        if (match) {
            content = content.replace(match[0], `<RelatedContent currentSlug="${slug}" type="guide" count={3} />\n                    </div>\n                </div>\n            </main>`);
            fs.writeFileSync(pagePath, content);
            injectedCount++;
        } else {
            // Backup replacement if the exact structure shifted
            const backupMatch = content.match(/<\/div>\s*<\/main>/);
            if (backupMatch) {
                content = content.replace(backupMatch[0], `<RelatedContent currentSlug="${slug}" type="guide" count={3} />\n                </div>\n            </main>`);
                fs.writeFileSync(pagePath, content);
                injectedCount++;
            }
        }
    }
}

console.log(`Successfully injected RelatedContent into ${injectedCount} guides.`);
