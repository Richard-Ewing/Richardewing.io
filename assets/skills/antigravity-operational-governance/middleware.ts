// Antigravity Operational Governance Middleware
// Meta-governance interceptor for all 4 runtime layers

export interface AgentAction {
    type: 'file_write' | 'command' | 'deploy' | 'page_create' | 'data_modify';
    target: string;
    content?: string;
    context: Record<string, any>;
}

export interface GovernanceResult {
    authorized: boolean;
    violations: string[];
    required_actions: string[];
}

export class AntigravityGovernanceInterceptor {

    // === LAYER 1: IDENTITY CHECKS ===
    private static checkIdentity(action: AgentAction): string[] {
        const violations: string[] = [];
        const content = action.content || '';

        // Block placeholder content
        if (content.includes('TODO') || content.includes('lorem ipsum') || content.includes('placeholder')) {
            violations.push('IDENTITY: No placeholders allowed. Ship complete content only.');
        }

        // Block marketing language
        const banned = ['AI tips', 'prompt tricks', 'AI hacks', 'coding assistant tutorial'];
        for (const term of banned) {
            if (content.toLowerCase().includes(term.toLowerCase())) {
                violations.push(`IDENTITY: Banned term "${term}". Use governance language.`);
            }
        }

        return violations;
    }

    // === LAYER 2: SKILL CHECKS ===
    private static checkSkill(action: AgentAction): string[] {
        const violations: string[] = [];

        // Contrast check for UI files
        if (action.target.endsWith('.tsx') && action.content) {
            const darkBgWithLightText = /bg-\[#1A1A1A\].*text-gray-[34]00/;
            if (darkBgWithLightText.test(action.content)) {
                violations.push('SKILL: Contrast violation — dark background with low-contrast text.');
            }
        }

        return violations;
    }

    // === LAYER 3: TOOL CHECKS ===
    private static checkTool(action: AgentAction): string[] {
        const violations: string[] = [];

        const restricted = ['next.config.ts', 'package.json', '.env'];
        if (action.type === 'file_write') {
            for (const path of restricted) {
                if (action.target.includes(path)) {
                    violations.push(`TOOL: ${path} is write-restricted. Requires human approval.`);
                }
            }
        }

        const blocked = ['.git/', 'node_modules/', '.vercel/'];
        for (const path of blocked) {
            if (action.target.includes(path)) {
                violations.push(`TOOL: ${path} is NEVER-TOUCH. Action blocked.`);
            }
        }

        return violations;
    }

    // === LAYER 4: ENVIRONMENT CHECKS ===
    private static checkEnvironment(action: AgentAction): string[] {
        const violations: string[] = [];

        // New page without SEO registration
        if (action.type === 'page_create') {
            violations.push('ENVIRONMENT: New page detected. Requires sitemap.ts + llms.txt + IndexNow registration.');
        }

        return violations;
    }

    // === MASTER VALIDATION ===
    public static validateAction(action: AgentAction): GovernanceResult {
        const violations = [
            ...this.checkIdentity(action),
            ...this.checkSkill(action),
            ...this.checkTool(action),
            ...this.checkEnvironment(action),
        ];

        const required_actions: string[] = [];
        if (action.type === 'page_create') {
            required_actions.push('Register in app/sitemap.ts');
            required_actions.push('Register in app/llms.txt/route.ts');
            required_actions.push('Run: node ping-all.js');
        }
        if (action.type === 'deploy') {
            required_actions.push('Run: npm run build (verify 0 errors)');
            required_actions.push('Run: git add . && git commit && git push');
            required_actions.push('Run: node ping-all.js');
        }

        return {
            authorized: violations.length === 0,
            violations,
            required_actions,
        };
    }
}
