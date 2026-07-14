const fs = require('fs');
let content = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');

// Add import
if (!content.includes('import RelatedContent')) {
  content = content.replace(
    'import GovernancePathways',
    'import GovernancePathways\nimport RelatedContent from \'@/components/RelatedContent\';\n'
  );
}

// Add component
content = content.replace(
  '<Link href=\"/blog\" className=\"text-sm font-semibold text-zinc-900 font-medium hover:underline\">+? Back to Blog</Link>',
  '<RelatedContent currentSlug={slug} type=\"blog\" />\n                    <div className=\"h-8\"></div>\n                    <Link href=\"/blog\" className=\"text-sm font-semibold text-zinc-900 font-medium hover:underline\">+? Back to Blog</Link>'
);

fs.writeFileSync('app/blog/[slug]/page.tsx', content);
console.log('Modified blog page.');
