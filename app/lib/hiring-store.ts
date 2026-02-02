import { SCENARIOS, Role } from './question-bank';

export interface Session {
    session_id: string;
    candidate_id: string;
    interviewer_id: string;
    role: Role;
    current_phase: string;
    start_time: number;
    phases: string[];
    questions_map: Record<string, string>;
    finalized: boolean;
}

export interface Score {
    session_id: string;
    phase: string;
    dimension: string;
    score: number;
    rationale: string;
    timestamp: number;
    time_taken: number;
}

export const HiringStore = {
    // PURE FUNCTION: Just returns a new session object
    generateSession: (sessionId: string, candidateId: string, interviewerId: string, role: Role, phases: string[], questionsMap: Record<string, string>): Session => {
        return {
            session_id: sessionId,
            candidate_id: candidateId,
            interviewer_id: interviewerId,
            role,
            current_phase: phases[0],
            phases,
            start_time: Date.now(),
            finalized: false,
            questions_map: questionsMap
        };
    },

    // PURE FUNCTION: Calculates analytics from provided scores and role
    analyzeSession: (scores: Score[], role: Role) => {
        let total = 0;
        scores.forEach(s => {
            total += s.score;
        });

        // Limit Max Score assumption: 3 questions * 6 = 18 points (L6 avg)
        // L3 avg = 9. L4 avg = 12. L5 avg = 15.

        let verdict = "";
        let rationale = "";
        let decision = "NO HIRE";
        const roleTitle = role === 'engineering' ? 'ENGINEER' : 'PRODUCT MANAGER';
        const isEng = role === 'engineering';

        // Calibration Bands (Adjusted for 3 Phase Protocol)
        if (total < 12) { // Avg < 4 (L3s)
            verdict = `L3: JUNIOR ${roleTitle}`;
            if (isEng) {
                rationale = "Focuses on execution and syntax. Lacks broader system awareness. \"Code Monkey\" mode.";
            } else {
                rationale = "Focuses on rote feature lists. Lacks strategic depth or economic awareness.";
            }
            decision = "NO HIRE";
        } else if (total < 14) { // Avg 4.x (Solid L4)
            verdict = `L4: ${roleTitle}`;
            if (isEng) {
                rationale = "Competent execution but trade-offs are limited to local scope. Misses second-order effects.";
            } else {
                rationale = "Can manage a backlog but lacks capital governance or rigorous prioritization frameworks.";
            }
            decision = "NO HIRE"; // Strict bar
        } else if (total < 16) { // Avg 5.x (L5)
            verdict = `L5: SENIOR ${roleTitle}`;
            if (isEng) {
                rationale = "Demonstrates system ownership and understands maintenance liability. Good default hire.";
            } else {
                rationale = "Understand Unit Economics and can prioritize based on ROI. Solid operator.";
            }
            decision = "HIRE";
        } else if (total < 18) { // Avg ~6 (L6)
            verdict = `L6: STAFF ${roleTitle}`;
            if (isEng) {
                rationale = "Exceptional capital stewardship. Prioritizes ROI, Leverage, and Capital Efficiency.";
            } else {
                rationale = "Drives portfolio-level strategy. Aligns engineering efforts with Enterprise Value.";
            }
            decision = "HIRE";
        } else {
            // High score >= 18 (Consistent L6/L7 performance)
            verdict = `L7/L8: PRINCIPAL ${roleTitle}`;
            if (isEng) {
                rationale = "Visionary technical governance. Realigns entire organizations towards solvency and leverage.";
            } else {
                rationale = "Executive-grade strategic foresight. Defines the market and capital allocation strategy.";
            }
            decision = "HIRE";
        }

        return {
            total,
            verdict,
            decision,
            rationale,
            scores
        };
    }
};
