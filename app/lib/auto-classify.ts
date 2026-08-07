export function classifyDomain(title: string, content: string): string {
    const text = (title + ' ' + content).toLowerCase();
    
    if (text.includes('ai governance') || text.includes('security') || text.includes('kill switch') || text.includes('prompt injection')) {
        return 'AI Governance';
    }
    if (text.includes('ai economics') || text.includes('margin squeeze') || text.includes('inference') || text.includes('token')) {
        return 'AI Economics';
    }
    if (text.includes('software economics') || text.includes('technical debt') || text.includes('subprime code') || text.includes('zombie code')) {
        return 'Software Economics';
    }
    if (text.includes('engineering leadership') || text.includes('vibe coding') || text.includes('audit interview')) {
        return 'Engineering Leadership';
    }
    if (text.includes('career') || text.includes('hire') || text.includes('promotion')) {
        return 'Career Economics';
    }
    return 'Product Leadership'; // default
}

export function mapConceptSlugs(title: string, content: string, domain: string): string[] {
    const text = (title + ' ' + content).toLowerCase();
    const slugs = new Set<string>();

    const mapping: Record<string, string[]> = {
        'hallucination tax': ['hallucination-tax'],
        'audit interview': ['audit-interview'],
        'ai volatility tax': ['ai-volatility-tax'],
        'kill switch': ['agent-kill-switch'],
        'deterministic governance': ['deterministic-governance'],
        'product economist': ['product-economist'],
        'subprime code': ['subprime-code-crisis'],
        'inference': ['inference-economics'],
        'context rot': ['context-rot'],
        'r&d ponzi': ['r-and-d-ponzi']
    };

    for (const [keyword, mappedSlugs] of Object.entries(mapping)) {
        if (text.includes(keyword)) {
            mappedSlugs.forEach(s => slugs.add(s));
        }
    }
    
    return Array.from(slugs);
}
