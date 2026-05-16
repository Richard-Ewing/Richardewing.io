/**
 * REPO DIVERGENCE DETECTOR
 * 
 * Post-execution analysis tool (runs in CI or Pre-Commit).
 * Mathematically checks the git diff to ensure no ghost dependencies or banned 
 * structural changes occurred, bridging the gap between runtime validation and commit.
 */

import { execSync } from 'child_process';
import { readFileSync } from 'fs';

export class RepoDivergenceDetector {
    
    /**
     * Analyzes the current git diff against the base branch.
     * Throws an error if unauthorized architectural changes are detected.
     */
    public detectDivergence(baseBranch: string = 'main'): boolean {
        console.log(`[DIVERGENCE DETECTOR] Analyzing diff against ${baseBranch}...`);

        try {
            // Get list of changed files
            const diffOutput = execSync(`git diff --name-only ${baseBranch}`).toString();
            const changedFiles = diffOutput.split('\n').filter(Boolean);

            this.checkPackageJsonDrift(changedFiles, baseBranch);
            
            console.log(`[DIVERGENCE DETECTOR] Repository structure verified. No architectural drift detected.`);
            return true;

        } catch (error: any) {
            console.error(`[CRITICAL DRIFT DETECTED] ${error.message}`);
            // In a pre-commit hook, this exits with code 1 to block the commit
            process.exit(1);
        }
    }

    /**
     * Ensures the agent did not hallucinate "ghost dependencies" by modifying package.json
     * without explicit human approval.
     */
    private checkPackageJsonDrift(changedFiles: string[], baseBranch: string): void {
        const packageJsonModified = changedFiles.some(file => file.endsWith('package.json'));
        
        if (packageJsonModified) {
            // In a strict governance environment, autonomous agents are NOT allowed to modify dependencies.
            // If they need a dependency, they must halt and request human execution.
            throw new Error(`Agent mutated package.json. Ghost dependencies are strictly prohibited. You must manually verify the dependency tree.`);
        }
    }
}
