import { ArticleData } from './blog-types';
import { articlesBatch1 } from './blog-articles-1';
import { articlesBatch2 } from './blog-articles-2';
import { articlesBatch3 } from './blog-articles-3';
import { articlesBatch4 } from './blog-articles-4';
import { articlesBatch5 } from './blog-articles-5';

// Merge all article batches into a single lookup
export const allArticles: Record<string, ArticleData> = {
    ...articlesBatch1,
    ...articlesBatch2,
    ...articlesBatch3,
    ...articlesBatch4,
    ...articlesBatch5,
};

// Get sorted article list (newest first)
export function getSortedArticles() {
    return Object.entries(allArticles)
        .map(([slug, article]) => ({ slug, ...article }))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get articles by category
export function getArticlesByCategory(category: string) {
    return getSortedArticles().filter(a => a.category === category);
}

// Get all unique categories with counts
export function getCategories() {
    const cats: Record<string, number> = {};
    Object.values(allArticles).forEach(a => {
        cats[a.category] = (cats[a.category] || 0) + 1;
    });
    return Object.entries(cats)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);
}
