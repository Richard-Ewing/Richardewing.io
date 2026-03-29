import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';

const htmlDir = path.join(process.cwd(), 'app', 'content', 'modules');
const parsedDir = path.join(process.cwd(), 'app', 'content', 'parsed');

if (!fs.existsSync(parsedDir)) {
    fs.mkdirSync(parsedDir, { recursive: true });
}

async function parseAllModules() {
    const files = fs.readdirSync(htmlDir).filter(f => f.endsWith('.html'));

    console.log(`Starting to parse ${files.length} modules...`);

    let successCount = 0;
    let fallbackCount = 0;

    for (const file of files) {
        const moduleId = file.replace('.html', '');
        const html = fs.readFileSync(path.join(htmlDir, file), 'utf8');

        // Parse HTML using Cheerio
        const $ = cheerio.load(html, null, false); // false = don't wrap in html/body

        const lessons: { title: string, html: string }[] = [];

        // Find all parts (usually starting with "Part ")
        // The LLM wraps them in a div container.
        $('h3').each((i, el) => {
            const h3Text = $(el).text();
            if (h3Text.toLowerCase().includes('part ')) {
                // Find parent div, usually the wrapper for the lesson
                const lessonContainer = $(el).closest('div');
                if (lessonContainer.length > 0) {
                    const lessonHtml = $.html(lessonContainer);
                    lessons.push({ title: h3Text, html: lessonHtml });
                    
                    // Remove from DOM so it doesn't double-render in the Syllabus
                    lessonContainer.remove();
                }
            }
        });

        // Clean up the "Architectural Lessons Outline" header as it's now empty
        $('h2').each((i, el) => {
            if ($(el).text().toLowerCase().includes('architectural lessons outline') || $(el).text().toLowerCase().includes('execution cadence')) {
                $(el).closest('section').remove(); // remove the whole block if possible
                $(el).remove();
            }
        });

        // Whatever is left is the Syllabus introduction!
        const syllabusHtml = $.html();

        const jsonPayload = {
            syllabus: syllabusHtml.trim(),
            lessons: lessons
        };

        if (lessons.length === 0) {
            fallbackCount++;
        } else {
            successCount++;
        }

        fs.writeFileSync(
            path.join(parsedDir, `${moduleId}.json`), 
            JSON.stringify(jsonPayload, null, 2),
            'utf8'
        );
    }

    console.log(`✅ Parsing complete!`);
    console.log(`- Successfully chunked ${successCount} modules.`);
    if (fallbackCount > 0) {
        console.log(`- ${fallbackCount} modules had no 'Part X:' headers and will render as a 1-page syllabus.`);
    }
}

parseAllModules().catch(console.error);
