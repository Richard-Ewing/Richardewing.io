/**
 * HALLUCINATION DEBT REDUCTION MIDDLEWARE
 * 
 * Intercepts agent code output and validates it against the real codebase state.
 * Blocks phantom dependencies, scores confidence, and routes to appropriate review queues.
 */

import { readFileSync, existsSync } from 'fs';

export interface CodeOutput {
    filePath: string;
    content: string;
    imports: string[];
    agentConfidence: number;
}

export interface ValidationResult {
    approved: boolean;
    score: number;
    phantomImports: string[];
    reviewQueue: 'auto-approve' | 'human-review' | 'auto-reject' | 'blocked';
}

export class HallucinationValidator {
    private packageJson: Record<string, any>;
    
    constructor(projectRoot: string = '.') {
        const pkgPath = `${projectRoot}/package.json`;
        this.packageJson = existsSync(pkgPath) 
            ? JSON.parse(readFileSync(pkgPath, 'utf8'))
            : { dependencies: {}, devDependencies: {} };
    }
    
    public validateOutput(output: CodeOutput): ValidationResult {
        const phantomImports = this.detectPhantomImports(output.imports);
        const score = this.calculateConfidence(output, phantomImports);
        const reviewQueue = this.routeToQueue(score, phantomImports);
        
        return {
            approved: reviewQueue === 'auto-approve',
            score,
            phantomImports,
            reviewQueue
        };
    }
    
    private detectPhantomImports(imports: string[]): string[] {
        const allDeps = {
            ...this.packageJson.dependencies,
            ...this.packageJson.devDependencies
        };
        
        return imports.filter(imp => {
            // Skip relative imports
            if (imp.startsWith('.') || imp.startsWith('/')) return false;
            // Skip node builtins
            const builtins = ['fs', 'path', 'http', 'https', 'crypto', 'os', 'util', 'stream', 'events'];
            if (builtins.includes(imp.split('/')[0])) return false;
            // Check if package exists in dependencies
            const pkgName = imp.startsWith('@') ? imp.split('/').slice(0,2).join('/') : imp.split('/')[0];
            return !(pkgName in allDeps);
        });
    }
    
    private calculateConfidence(output: CodeOutput, phantoms: string[]): number {
        let score = output.agentConfidence;
        // Penalize for phantom imports
        score -= phantoms.length * 0.15;
        // Cap between 0 and 1
        return Math.max(0, Math.min(1, score));
    }
    
    private routeToQueue(score: number, phantoms: string[]): ValidationResult['reviewQueue'] {
        if (phantoms.length > 0) return 'blocked';
        if (score >= 0.95) return 'auto-approve';
        if (score >= 0.85) return 'human-review';
        return 'auto-reject';
    }
}