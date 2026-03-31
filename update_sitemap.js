const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'app', 'sitemap.ts');
let content = fs.readFileSync(sitemapPath, 'utf8');

// 1. Add import for blog data if not exists
if (!content.includes('getSortedArticles')) {
    content = content.replace(
        "import { tracks } from '@/app/lib/curriculum-tracks-ui';",
        "import { tracks } from '@/app/lib/curriculum-tracks-ui';\nimport { getSortedArticles } from '@/app/lib/blog-data';"
    );
}

// 2. Inject blogPages map and update the return array
if (!content.includes('const blogPages: MetadataRoute.Sitemap')) {
    const injectionStr = `
    const blogPages: MetadataRoute.Sitemap = getSortedArticles().map(article => ({
        url: \`\${baseUrl}/blog/\${article.slug}\`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        ...glossaryPages,
        ...frameworkPages,
        ...blogPages,`;
        
    content = content.replace(
        `    return [\r\n        ...glossaryPages,\r\n        ...frameworkPages,`,
        injectionStr
    );
    // Fallback if line endings differ
    if (content.indexOf('blogPages') === -1) {
        content = content.replace(
            `    return [\n        ...glossaryPages,\n        ...frameworkPages,`,
            injectionStr
        );
    }
}

// 3. Replace hardcoded dates with new Date()
content = content.replace(/new Date\('2026-03-25'\)/g, 'new Date()');
content = content.replace(/new Date\('2026-03-28'\)/g, 'new Date()');
content = content.replace(/new Date\('2026-03-29'\)/g, 'new Date()');

fs.writeFileSync(sitemapPath, content, 'utf8');
console.log('Sitemap successfully updated with dynamic blog indexing and build-time dating.');
