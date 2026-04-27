import { CurriculumModule, m, l, d } from './curriculum-data';

export const leadershipModules: Record<string, CurriculumModule> = {};

leadershipModules['leadership-autonomy-escalation'] = m(
    'leadership-autonomy-escalation',
    'Module 1: The Four Tiers of Autonomy & Escalation',
    'Mastering the diagnostic model for evaluating employee maturity, ownership, and problem-solving capability. Learn to transition teams from fire-fighting to systemic prevention.',
    'Track 12: Executive Leadership & Mentorship',
    [
        'Identify which tier every employee on your team currently operates at.',
        'Coach Tier 1 and 2 employees to begin proactive communication (Tier 3).',
        'Train elite talent to design systemic preventions (Tier 4).'
    ],
    [
        l('The Escalation Hierarchy',
            [
                'Most organizations are bottlenecked by Tier 1 and Tier 2 employees. Tier 1 employees identify issues and expect management to solve them. Tier 2 employees solve the issue but fail to communicate.',
                'The goal of leadership is not to execute tasks better; it is to build a machine that executes tasks better. That machine requires autonomous, systemic problem-solvers.',
                'The Four Tiers are:\n1. The Reporter (Escalates)\n2. The Solver (Fixes silently)\n3. The Communicator (Fixes and broadcasts)\n4. The Architect (Fixes, broadcasts, systemically prevents, and monitors).'
            ],
            [
                d('Autonomy Tier Ratio', 'Percentage of team members operating at Tier 3 or 4 vs Tier 1 or 2.', '> 60% Tier 3+'),
                d('Recurring Error Rate', 'Frequency of the same class of incident occurring due to lack of systemic prevention.', '< 5%')
            ],
            'Audit your direct reports. Assign them a primary tier (1-4). For everyone at Tier 2 or below, write a one-sentence coaching objective to push them to the next tier.',
            ['Identify the current tier of all direct reports', 'Establish communication SLAs for Tier 2 employees', 'Delegate a root-cause prevention project to a Tier 3 employee'],
            { question: 'What distinguishes a Tier 4 (Apex) employee from a Tier 3 employee?', options: ['They fix the problem faster.', 'They escalate to the CEO.', 'They collaborate cross-functionally to design a systemic prevention.', 'They write the incident report.'], correctIndex: 2, explanation: 'A Tier 4 employee does not just fix the symptom and communicate; they design a permanent, systemic prevention mechanism to eliminate that class of error entirely.' }
        )
    ],
    '/curriculum/leadership-double-diamond',
    undefined,
    'live',
    ['four-tiers-of-autonomy']
);

leadershipModules['leadership-double-diamond'] = m(
    'leadership-double-diamond',
    'Module 2: The Double Diamond Career Trajectory',
    'A structural framework mapping the lifecycle of professional growth and normalizing the "Leadership Reset" that breaks top-tier individual contributors.',
    'Track 12: Executive Leadership & Mentorship',
    [
        'Understand why Individual Contributor (IC) skills do not transfer to management.',
        'Navigate the painful transition from the top of Diamond 1 to the bottom of Diamond 2.',
        'Map out your team’s current position within the Double Diamond.'
    ],
    [
        l('The Leadership Reset',
            [
                'The Double Diamond illustrates a fundamental truth: when you are promoted from Senior IC to Manager, you do not keep climbing. You reset. You start at the narrow bottom of a completely new diamond.',
                'Diamond 1 (The IC Journey): Starts narrow, widens as you gain functional proficiency, and narrows at the top as you plateau as a senior executor.',
                'Diamond 2 (The Leadership Journey): Starts narrow (you have zero leadership skills), widens through trials, tribulations, and coaching, until you master scaling people and hit the next executive plateau.',
                'Failing to recognize the "Leadership Reset" is why elite individual contributors often become terrible, burned-out managers.'
            ],
            [
                d('Management Transition Churn', 'Rate at which new managers return to IC roles or leave the company.', '< 10%'),
                d('Time to Leadership Proficiency', 'Months required for a new manager to operate independently at the widest part of Diamond 2.', '6-9 Months')
            ],
            'Identify a manager who is struggling. Map their current frustration back to their assumption that Diamond 1 skills apply to Diamond 2 problems. Draft a coaching conversation acknowledging the "reset".',
            ['Define the required skills for the bottom of Diamond 2', 'Acknowledge the loss of functional execution dopamine for new managers', 'Establish a learning path for management fundamentals'],
            { question: 'According to the Double Diamond framework, what happens immediately after a promotion to management?', options: ['You reach the peak of Diamond 1.', 'Your functional skills instantly transfer to your new role.', 'You reset to the narrow bottom of Diamond 2 with zero leadership skills.', 'You widen your existing skill base automatically.'], correctIndex: 2, explanation: 'The promotion to leadership is a reset. You leave the peak of your IC diamond and start at the narrow bottom of the leadership diamond, requiring an entirely new set of skills.' }
        )
    ],
    '/curriculum/leadership-problem-continuum',
    undefined,
    'live',
    ['double-diamond-career-trajectory']
);

leadershipModules['leadership-problem-continuum'] = m(
    'leadership-problem-continuum',
    'Module 3: The Intelligence Problem-Solving Continuum',
    'Operationalizing intelligence in a corporate environment. Transform your organization from reactive bleeding to proactive, engineered resilience.',
    'Track 12: Executive Leadership & Mentorship',
    [
        'Define organizational intelligence through the lens of friction navigation.',
        'Master the three phases: Identification, Mitigation, Prevention.',
        'Roll critical thinking, root-cause analysis, and adaptation into a single measurable trajectory.'
    ],
    [
        l('Navigating Friction',
            [
                'In corporate environments, intelligence is not IQ or domain-specific technical knowledge. It is the ability to navigate sequential phases of friction.',
                'Phase 1: Problem Identification. This is seeing the invisible friction and naming the dysfunction. Anyone can do this, but it is the prerequisite.',
                'Phase 2: Problem Mitigation. Stopping the bleeding. This requires real-time adaptation and pivoting.',
                'Phase 3: Problem Prevention. Designing root-cause systemic fixes so the problem never happens again.',
                'Organizations that optimize for employees who can autonomously execute all three phases build inherently resilient organizational cultures.'
            ],
            [
                d('Incident Recurrence Rate', 'Percentage of incidents that are repeats of previously "mitigated" but not "prevented" issues.', '0%'),
                d('Systemic Fix Ratio', 'Ratio of temporary mitigations vs. permanent engineered preventions.', '> 3:1 Preventions')
            ],
            'Take your team’s last major incident or project failure. Map the post-mortem explicitly to the three phases. Did the team stop at Mitigation, or did they execute Prevention?',
            ['Formalize Phase 1 Identification protocols', 'Establish SLA for Phase 2 Mitigation', 'Require formal design for Phase 3 Prevention for all P1 incidents'],
            { question: 'What is the final and most critical phase of the Intelligence Problem-Solving Continuum?', options: ['Problem Identification', 'Problem Mitigation', 'Problem Escalation', 'Problem Prevention'], correctIndex: 3, explanation: 'Problem Prevention is the final phase. It involves designing a root-cause, systemic fix so that the specific problem never occurs again, demonstrating the highest level of organizational intelligence.' }
        )
    ],
    undefined,
    undefined,
    'live',
    ['intelligence-problem-solving-continuum']
);
