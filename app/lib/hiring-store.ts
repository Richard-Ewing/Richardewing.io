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
    // Each of 3 phases is now scored L3-L8 (3-8 points)
    // Total range: 9-24
    analyzeSession: (scores: Score[], role: Role) => {
        let total = 0;
        scores.forEach(s => {
            total += s.score;
        });

        // 3 phases scored 3-8, total range is 9-24
        // Scoring bands:
        // L3 (9-11):  Consistently surface-level, junior responses
        // L4 (12-14): Some competence, local scope thinking
        // L5 (15-17): Strong system-level thinking, solid senior
        // L6 (18-20): Capital stewardship, staff-level excellence
        // L7 (21-22): Portfolio strategy, organizational leadership
        // L8 (23-24): Principal/executive-grade foresight

        let verdict = "";
        let rationale = "";
        let decision = "NO HIRE";
        const roleTitle = role === 'engineering' ? 'ENGINEER' : 'PRODUCT MANAGER';
        const isEng = role === 'engineering';

        if (total <= 11) {
            verdict = `L3: JUNIOR ${roleTitle}`;
            if (isEng) {
                rationale = "Focuses on execution and syntax. Lacks broader system awareness. Struggles to see past immediate code-level problems.";
            } else {
                rationale = "Focuses on rote feature lists. Lacks strategic depth, economic awareness, or stakeholder management skill.";
            }
            decision = "NO HIRE";
        } else if (total <= 14) {
            verdict = `L4: ${roleTitle}`;
            if (isEng) {
                rationale = "Competent execution but trade-offs are limited to local scope. Misses second-order effects and maintenance implications.";
            } else {
                rationale = "Can manage a backlog but lacks capital governance or rigorous prioritization frameworks. Reactive, not proactive.";
            }
            decision = "NO HIRE";
        } else if (total <= 17) {
            verdict = `L5: SENIOR ${roleTitle}`;
            if (isEng) {
                rationale = "Demonstrates system ownership and understands maintenance liability. Prioritizes stability alongside velocity. Solid default hire.";
            } else {
                rationale = "Understands Unit Economics and prioritizes based on ROI. Can defend decisions with data. Solid operator who thinks in trade-offs.";
            }
            decision = "HIRE";
        } else if (total <= 20) {
            verdict = `L6: STAFF ${roleTitle}`;
            if (isEng) {
                rationale = "Exceptional capital stewardship. Prioritizes ROI, Leverage, and Capital Efficiency across the system. Thinks in terms of organizational impact.";
            } else {
                rationale = "Drives portfolio-level strategy. Aligns engineering efforts with Enterprise Value. Understands the economic engine behind product decisions.";
            }
            decision = "HIRE";
        } else if (total <= 22) {
            verdict = `L7: PRINCIPAL ${roleTitle}`;
            if (isEng) {
                rationale = "Technical leader who connects engineering decisions to market positioning and enterprise value. Proposes frameworks that prevent entire classes of problems.";
            } else {
                rationale = "Strategic operator who sees the entire business as a product. Connects product decisions to capital allocation, market dynamics, and long-term competitive advantage.";
            }
            decision = "HIRE";
        } else {
            // Score >= 23 (Consistent L8 performance)
            verdict = `L8: DISTINGUISHED ${roleTitle}`;
            if (isEng) {
                rationale = "Visionary technical governance. Realigns entire organizations towards solvency and leverage. Thinks at the intersection of technology, economics, and strategy.";
            } else {
                rationale = "Executive-grade strategic foresight. Defines the market and capital allocation strategy. Transforms how the organization thinks about product-market fit.";
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
