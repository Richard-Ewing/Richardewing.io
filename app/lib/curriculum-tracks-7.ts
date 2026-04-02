import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks7Modules: Record<string, CurriculumModule> = {};

const t7 = 'Track 7 — Security & Compliance Economics';

// ═══════════════════ TRACK 7: SECURITY & COMPLIANCE ECONOMICS ═══════════════════

tracks7Modules['security-economics/7-1'] = m('7-1', 'Breach Cost Modeling', 'Calculate the hard financial execution of security failures, regulatory notification costs, and brand depreciation.', t7, 
    ['Quantify IBM breach frameworks', 'Calculate regulatory notification costs', 'Model brand vs capability depreciation'], [
        l('The True Cost of a Data Breach', 
            [
                'The IBM Cost of a Data Breach report consistently pegs the average enterprise breach at over $4.45M. However, the internal math is highly variable based on data density and regulatory jurisdiction.',
                'Direct costs (forensics, outside counsel, regulatory fines) typically only account for 30% of the total economic impact. The remaining 70% is driven by invisible costs: customer churn, brand depreciation, and the opportunity cost of freezing the product roadmap for 3-6 months.',
                'A single leaked database table in the EU (GDPR) carries a theoretical maximum fine of 4% of global revenue. In California (CCPA), statutory damages range from $100 to $750 per consumer per incident, regardless of actual damage.'
            ],
            [
                d('Notification Floor', 'Minimum statutory cost to mail breach notifications to affected users.', '$1.50 - $4.00 per physical letter'),
                d('Roadmap Freeze Cost', 'Cost of halting feature engineering for root-cause analysis.', 'Compute: Total R&D Payroll ÷ 12 months')
            ],
            'Audit your user database. Calculate the absolute worst-case scenario under CCPA ($750 per California resident row) to establish your baseline maximum liability.',
            ['Query your production database for the count of distinct users residing in California.', 'Multiply that count by $750 to determine statutory maximum exposure.', 'Draft a 1-page memo comparing this exposure to your current cybersecurity budget.'],
            {
                question: 'Which of the following typically represents the LARGEST financial impact following a data breach?',
                options: ['Forensic investigation retainers', 'Ransomware extortion payouts', 'Lost future revenue due to customer churn and reputation damage', 'Hardware replacement and infrastructure rebuilds'],
                correctIndex: 2,
                explanation: 'While forensic retainers and extortion payouts are massive, they are one-time capital hits. Customer churn permanently destroys recurring revenue and Enterprise Value (EV) multipliers.'
            }
        ),
        l('Opportunity Cost of Forensic Freezes', 
            [
                'When a breach hits, the engineering roadmap stops dead. Every engineer becomes an investigator or heavily scrutinized remediator. This "all-hands" pivot halts new features, directly delaying future revenue targets.',
                'A 3-month feature freeze effectively zeros out a quarter of your revenue growth. If your SaaS adds $2M in new ARR per quarter, a major incident costs you that $2M permanently.',
                'Executive boards commonly under-evaluate this. They log the $500k forensic bill but ignore the $2M in missing new-logo revenue. Present security budgets as "roadmap insurance."'
            ],
            [
                d('Velocity Depreciation', 'The immediate drop in feature output when engineering shifts to incident response.', '100% loss during active triage'),
                d('Revenue Displacement', 'The deferred or permanently lost revenue due to delayed feature launches.', 'Calculate: Avg Monthly New ARR x Months Frozen')
            ],
            'Identify your Q3/Q4 feature roadmap. Assuming a 6-week total freeze, what is the exact dollar amount of delayed revenue?',
            ['Consult the PM team for the revenue projections of the next 3 major features.', 'Calculate what a 6-week delay does to end-of-year recognized revenue.', 'Present this figure alongside your next cybersecurity budget request.'],
            {
                question: 'How should a CISO frame a request for larger security budgets to the Board?',
                options: ['By listing the number of blocked malware attacks per month', 'By explaining technical stack vulnerabilities using CVSS scores', 'As direct insurance against product roadmap freezes and subsequent revenue displacement', 'By warning them of personal legal liability for all board members'],
                correctIndex: 2,
                explanation: 'Boards think in terms of revenue, growth, and Enterprise Value. Framing security as "roadmap insurance" directly ties protective spending to the preservation of the company\'s growth targets.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/7-2', undefined, 'live', ['shadow-agents']
);

tracks7Modules['security-economics/7-2'] = m('7-2', 'Compliance ROI', 'Transform SOC 2, ISO 27001, and HIPAA from cost centers into aggressive revenue-unlocking assets.', t7, 
    ['Calculate SOC 2 revenue ROI', 'Automate evidence collection', 'Monetize enterprise trust'], [
        l('The Mathematical ROI of SOC 2', 
            [
                'Security compliance is rarely sold internally as a revenue driver, but for B2B SaaS, it is the ultimate sales accelerant. Enterprise procurement teams will hard-block deals without a valid SOC 2 Type II or ISO 27001 certificate.',
                'If it costs $150,000 (auditor fees + engineering time) to achieve SOC 2, and it unblocks a stalled $500,000 enterprise contract pipeline, the ROI is mathematical and immediate.',
                'Compliance is not a tax; it is a feature you sell to procurement. Every month you delay compliance is a month you are locked out of the Fortune 500 market.'
            ],
            [
                d('Sales Cycle Velocity', 'Reduction in security questionnaire friction post-certification.', 'Typical reduction: 30-50 days'),
                d('Enterprise Revenue Ceiling', 'The maximum ARR achievable without formal compliance certification.', 'Usually stalls at ~$2M-$5M ARR')
            ],
            'Quantify the Enterprise Revenue Ceiling of your current sales pipeline by tagging deals lost or stalled due to security objections.',
            ['Open your CRM (Salesforce/HubSpot).', 'Filter Closed-Lost deals over the last 12 months for "Security" or "No SOC 2".', 'Sum the total ARR lost to calculate the exact opportunity cost of non-compliance.'],
            {
                question: 'Why do Enterprise procurement teams demand SOC 2 or ISO 27001?',
                options: ['To ensure the software is bug-free', 'To outsource their vendor risk management liability to an independent auditing firm', 'Because government regulations require all software to be SOC 2 certified', 'To negotiate lower pricing'],
                correctIndex: 1,
                explanation: 'Procurement teams use SOC 2 to cover their own liability. If a vendor is breached, the procurement officer is protected because an independent CPA firm certified the vendor\'s controls.'
            }
        ),
        l('Continuous Automation Economics', 
            [
                'Historically, compliance required 400+ hours of manual screenshot-taking by highly paid engineers. This is an egregious misallocation of capital.',
                'Modern compliance requires Continuous Control Monitoring (CCM) platforms like Vanta, Drata, or Secureframe. These platforms hook directly into AWS/GCP, GitHub, and your HRIS to monitor compliance programmatically.',
                'The $15,000 annual license for a CCM platform pays for itself the moment it saves one senior engineer from spending 3 weeks collecting active-directory screenshots.'
            ],
            [
                d('Evidence Velocity', 'Time taken to produce required artifacts for the auditor.', 'Pre-CCM: Weeks | Post-CCM: Clicks'),
                d('Drift Detection', 'Real-time alerting when a system falls out of compliance.', '< 15 minutes vs Annual discovery')
            ],
            'Calculate the manual labor cost of your next audit cycle without automation.',
            ['Estimate the number of controls required (typically ~100 for SOC 2).', 'Assume 1.5 hours of manual gathering per control.', 'Multiply 150 hours by your average engineering hourly rate to determine the manual cost baseline.'],
            {
                question: 'What is the primary financial benefit of a Continuous Control Monitoring (CCM) platform like Vanta or Drata?',
                options: ['It guarantees you will pass the audit without findings', 'It eliminates the need to pay external CPA auditors', 'It radically depreciates the engineering labor cost associated with manual evidence collection', 'It replaces the need for a Chief Information Security Officer (CISO)'],
                correctIndex: 2,
                explanation: 'A CCM platform connects directly to your systems to pull evidence automatically. This frees up hundreds of highly expensive engineering hours, making the platform pay for itself instantly via labor savings.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/7-3', undefined, 'live'
);

tracks7Modules['security-economics/7-3'] = m('7-3', 'Security Debt Quantification', 'Model the financial liability of unpatched vulnerabilities and prioritize remediation based on risk exposure.', t7, 
    ['Translate CVSS into dollars', 'Prioritize by exploitability', 'Implement SLAs for CVEs'], [
        l('Quantifying Unpatched Liability', 
            [
                'Every known vulnerability in production is an unfunded liability on the balance sheet. Security debt is technically defined as: the financial exposure created by deferring security patches in favor of feature development.',
                'Not all CVEs (Common Vulnerabilities and Exposures) are equal. A CVSS 9.8 vulnerability on an internal server with no internet access is functionally less risky than a CVSS 6.5 vulnerability on your public-facing API.',
                'Remediation prioritization must fuse technical severity with asset criticality and exploitability vectors.'
            ],
            [
                d('Asset Criticality Index (ACI)', 'A multiplier applied to a vulnerability based on the data the server holds.', '1.0 (Low) to 5.0 (High)'),
                d('Expected Loss Exposure', 'Probability of Exploit × Potential Breach Cost.', 'Determines dollar value of the risk')
            ],
            'Implement an SLA (Service Level Agreement) policy for patching vulnerabilities based on CVSS severity.',
            ['Draft a policy: Critical (CVSS 9.0+) fixed in 7 days. High (7.0-8.9) in 30 days. Medium in 90 days.', 'Secure executive sign-off from engineering leadership to guarantee these SLAs trump roadmap features.', 'Automate alerting to flag when a server breaches its patch SLA.'],
            {
                question: 'Why is patching a CVSS 9.8 vulnerability NOT always the highest immediate priority?',
                options: ['Because CVSS scores are randomly generated', 'The vulnerability may exist on an isolated, non-critical asset without internet exposure', 'Patching takes too much time away from the product roadmap', 'Because attackers do not use CVSS scores'],
                correctIndex: 1,
                explanation: 'Risk is Severity × Probability. Even a technically severe flaw has near-zero risk if there is no mathematical path for an attacker to reach the vulnerable component. Contextual exploitability determines priority.'
            }
        ),
        l('The Remediation Arbitrage', 
            [
                'Fixing security bugs in production is 100x more expensive than fixing them during the design phase. This is the core economic thesis of "Shifting Left." securing code before it compiles.',
                'If an architect spends 4 hours designing secure session handling upfront (Cost: $600), it prevents a future pen-test finding that mandates a 3-week refactor (Cost: $25,000) while halting feature work.',
                'The goal is to push discovery as far left in the SDLC as possible. SAST in the IDE is cheaper than DAST in staging, which is infinitely cheaper than a bug bounty payout in production.'
            ],
            [
                d('Shift-Left Multiplier', 'The escalating cost curve of fixing a bug later in the software lifecycle.', 'Design: 1x | Dev: 5x | Test: 15x | Prod: 100x'),
                d('Bug Bounty Yield', 'The ROI of paying friendly hackers to find exploits before criminals do.', 'A $5k bounty prevents a $5M breach')
            ],
            'Audit your CI/CD pipeline for automated security scanning blocks.',
            ['Ensure SAST (Static Analysis) runs on every Pull Request.', 'Configure the pipeline to auto-fail any PR that introduces a Critical or High CVE dependency.', 'Verify developers cannot bypass this block without CISO approval.'],
            {
                question: 'What is the primary economic argument for "Shifting Left" in Application Security?',
                options: ['It allows you to fire your QA team', 'Vulnerabilities discovered in production are exponentially more expensive to fix than those caught during design or coding', 'It satisfies government compliance frameworks automatically', 'It makes the code run faster in production'],
                correctIndex: 1,
                explanation: 'Re-architecting a built, deployed system takes massive engineering effort and halts the roadmap. Catching the flaw when it is merely a line of uncompiled code takes minutes, minimizing the financial impact.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/7-4', undefined, 'live'
);

tracks7Modules['security-economics/7-4'] = m('7-4', 'Identity & Access Economics', 'The cost structures behind Single Sign-On (SSO), Multi-Factor Authentication (MFA), and zero-trust identity architectures.', t7, 
    ['Calculate SSO implementation ROI', 'Price identity providers', 'Audit lifecycle management drag'], [
        l('The SAML/SSO Taxation Model', 
            [
                'For B2B SaaS, offering SAML/SSO (Single Sign-On) integration is the gateway to the enterprise. However, SaaS vendors historically weaponize SSO, moving it strictly into their highest-tier "Enterprise" pricing plans (the "SSO Wall of Shame").',
                'While enforcing an "SSO Tax" drives revenue upgrades, it inherently compromises the baseline security of small-to-mid accounts by forcing them to rely on weak passwords and scattered credentials.',
                'Economically, you must balance the immediate MRR gain of paywalling SSO against the long-term enterprise value risk of a credential stuffing attack on a non-SSO client that ultimately breaches your platform.'
            ],
            [
                d('SSO Paywall Revenue', 'The MRR strictly generated by customers forced to upgrade solely to unlock SAML.', 'Easily quantifiable via Sales feedback'),
                d('Breach Liability Offset', 'The reduced legal liability when a client uses SSO (IdP owns the authentication risk).', 'Harder to quantify but massive in scale')
            ],
            'Evaluate the long-term impact of offering SSO as a standard feature across all paid tiers.',
            ['Calculate how much revenue is actively generated by the "SSO Tax" today.', 'Weigh this against the brand damage and liability of a credential stuffing attack on a lower-tier customer.', 'Consider transitioning to an "SSO for All" model as a market differentiator.'],
            {
                question: 'Why do most B2B SaaS companies place SAML/SSO exclusively in their most expensive pricing tiers?',
                options: ['SAML is extraordinarily expensive to process via CPU cycles', 'It is a pure price-discrimination tactic because large enterprises absolutely require SSO and have the budget to pay the premium', 'Small businesses do not know what SSO is', 'It is illegal to offer SSO to companies with under 50 employees'],
                correctIndex: 1,
                explanation: 'The "SSO Tax" is a pricing strategy. Enterprise IT protocols mandate SSO for centralized offboarding/onboarding control. Vendors exploit this mandatory requirement to force expensive tier upgrades.'
            }
        ),
        l('Lifecycle Management (Join/Mover/Leaver)', 
            [
                'Identity economics isn\'t just about logging in; it\'s about offboarding. When an employee is terminated, how long do they retain access to your AWS console, CRM, or source code?',
                'Manual offboarding has a 100% failure rate over a long enough timeline. Forgotten SaaS accounts (Shadow IT) result in "orphan accounts" which are prime targets for takeover, as nobody is monitoring them.',
                'The ROI of automated SCIM (System for Cross-domain Identity Management) provisioning is realized through avoiding catastrophic, post-termination insider threats.'
            ],
            [
                d('Orphan Account Risk', 'Active accounts tied to departed employees.', 'Usually > 15% in non-automated orgs'),
                d('Automated Provisioning (SCIM)', 'Protocol to automatically create/destroy accounts via the central IdP.', 'Reduces offboarding time from days to seconds')
            ],
            'Conduct a manual access audit on your top 3 most critical SaaS applications.',
            ['Export the user list from AWS, GitHub, and your CRM.', 'Cross-reference this list against your official HR active employee directory.', 'Terminate the access of any user who no longer works at the company immediately.'],
            {
                question: 'What is the primary danger of relying on "manual offboarding" processes via IT support tickets?',
                options: ['It uses too much paper', 'It creates unmonitored "orphan accounts" when tickets are missed, leaving gaping backdoors into corporate data', 'It requires too many IT engineers', 'It violates the GDPR'],
                correctIndex: 1,
                explanation: 'Humans make mistakes. A missed sub-task on an offboarding ticket leaves an active, unmonitored credential floating in the wild. Attackers love orphan accounts because nobody notices when they log in.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/7-5', undefined, 'live'
);

tracks7Modules['security-economics/7-5'] = m('7-5', 'Application Security Investment', 'Capital allocation strategies for SAST, DAST, penetration testing, and bug bounty programs.', t7, 
    ['Calculate AppSec ROI', 'Compare static vs dynamic tooling costs', 'Design bug bounty economics'], [
        l('Static vs Dynamic Analysis (SAST/DAST)', 
            [
                'Application Security (AppSec) tooling splits into two economic profiles: Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST).',
                'SAST scans raw source code (Shift Left). It is cheap, fast, but highly prone to false positives, requiring heavy engineering labor to tune out noise. DAST scans the running application from the outside. It is slow, catches complex logic flaws, but has very low false positives.',
                'The economic optimum is a hybrid model: heavy SAST running transparently in the CI/CD pipeline, backed by deep DAST scans prior to major version releases.'
            ],
            [
                d('False Positive Fatigue', 'The engineering time wasted investigating SAST hits that are not real bugs.', 'Can consume 20%+ of AppSec team bandwidth'),
                d('Scan Velocity', 'How fast the tool completes. Slow scans block deployments and bleed money.', 'SAST: Minutes | DAST: Hours')
            ],
            'Review the alert configuration of your primary SAST tool (e.g., SonarQube, Snyk).',
            ['Identify the ruleset generating the highest volume of "False Positive" or "Ignored" alerts.', 'Disable that specific rule globally to reclaim engineering velocity.', 'Focus the tool exclusively on high-confidence, critical vulnerabilities like SQLi and XSS.'],
            {
                question: 'What is the most significant hidden cost when deploying a Static Application Security Testing (SAST) tool?',
                options: ['The perpetual license fee paid to the vendor', 'The engineering labor exhausted by investigating and dismissing massive volumes of false positive alerts', 'The physical server hardware required to run the scans', 'The bandwidth consumed by the scanner'],
                correctIndex: 1,
                explanation: 'SAST tools examine code without runtime context, leading them to flag safe mechanisms as potentially hostile. If poorly tuned, developers spend more time clearing fake alerts than writing code.'
            }
        ),
        l('The Economics of Penetration Testing', 
            [
                'A compliance-grade penetration test (Pen Test) costs $15k to $30k and provides a point-in-time snapshot. It is essentially a rapidly depreciating asset; the moment new code is pushed the next day, the test is outdated.',
                'However, Pen Tests are mandatory for achieving SOC 2, closing enterprise deals, and satisfying cyber insurance underwriters. Therefore, a Pen Test is a compliance mandate first, and a security diagnostic second.',
                'To maximize ROI from a Pen Test, force the consulting firm into "Purple Teaming" — where they actively collaborate with your internal defenders showing them *how* they breach the systems, rather than just throwing a PDF report over the wall.'
            ],
            [
                d('Point-in-Time Depreciation', 'The loss of validity of a pen test report as new code is shipped.', 'Depreciates fully within 6-12 months'),
                d('Purple Team ROI', 'The added value of internal team upskilling during the testing engagement.', 'Transforms an audit into live training')
            ],
            'Restructure your next Penetration Test RFP to mandate "Purple Teaming" protocols.',
            ['Require the external hackers to hold a daily standup with your internal DevOps team.', 'Demand that they signal your SOC when executing specific attacks to test your internal alerting.', 'Require a final read-out workshop showing the exact exploit chains used.'],
            {
                question: 'Why is a standard Penetration Test considered a "rapidly depreciating asset"?',
                options: ['The PDF report physically degrades over time', 'It only reflects the security posture at the exact moment the test was run; subsequent code deployments immediately invalidate its findings', 'Hackers change their pricing models constantly', 'The software vendor goes out of business'],
                correctIndex: 1,
                explanation: 'In a continuous delivery (CI/CD) environment, the codebase changes daily. A report stating the app is secure today cannot guarantee it will remain secure after tomorrow\'s deployment.'
            }
        ),
        l('Bug Bounty Mathematics', 
            [
                'Bug Bounty programs (via HackerOne or Bugcrowd) crowdsource your security by paying independent researchers for finding exploits. You only pay for successful results, making it highly capital efficient compared to salaried penetration testers.',
                'The economic catch: managing a public bug bounty requires dedicated triage engineers. If you launch a program without tuning out the noise, you will be crushed under thousands of worthless "low severity" submissions like missing email headers.',
                'Private, invite-only bounties with highly targeted scopes yield the highest signal-to-noise ratio and the best ROI per dollar spent.'
            ],
            [
                d('Signal-to-Noise Ratio', 'The volume of critical, actionable bugs vs worthless "beg bounty" spam submissions.', 'Target: > 20% actionable'),
                d('Bounty Triage Tax', 'The internal engineering hours spent validating external bug submissions.', '1-2 full-time headcount for public programs')
            ],
            'Design the scope for an initial, private Bug Bounty program.',
            ['Limit the scope strictly to your most critical APIs or financial transaction systems.', 'Explicitly exclude low-impact vulnerabilities (e.g., lack of rate-limiting, missing CSP headers) to prevent spam.', 'Set aggressive payouts ($5,000+) for Remote Code Execution (RCE) to attract elite talent.'],
            {
                question: 'What is the most capital efficient mechanism to run a Bug Bounty program for a mid-market SaaS company?',
                options: ['A massive public program open to the entire internet', 'Paying via cryptocurrency to avoid taxes', 'A private, invite-only program with a tightly restricted scope focused exclusively on critical asset endpoints', 'Refusing to pay bounties to save money'],
                correctIndex: 2,
                explanation: 'Public programs generate crippling amounts of low-quality spam that burn internal triage labor. Private programs with elite, vetted hackers focus entirely on high-impact vulnerabilities with minimal noise.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/7-6', undefined, 'live'
);

tracks7Modules['security-economics/7-6'] = m('7-6', 'Security Operations Center', 'Pricing in-house vs outsourced monitoring (MSSP/MDR) and managing SIEM ingestion costs.', t7, 
    ['Calculate SIEM data ingestion costs', 'Compare in-house vs MDR ROI', 'Evaluate alert fatigue burnout'], [
        l('SIEM Ingestion Economics', 
            [
                'A Security Information and Event Management (SIEM) platform like Splunk or Datadog aggregates logs to detect threats. The pricing model is almost entirely based on ingestion volume (GBs per day).',
                'Blindly routing all system logs into a SIEM is an economic disaster. Pushing terabytes of debug-level application logs or dense AWS VPC flow logs will bankrupt the security budget instantly.',
                'Cost optimization demands aggressive log filtering at the edge. Drop high-volume, low-value logs before they hit the SIEM, and route them to cheap cold storage (like S3) for compliance purposes.'
            ],
            [
                d('Effective Ingestion Rate', 'The cost per gigabyte of security telemetry actively indexed.', 'Target: Optimize out > 60% of noise'),
                d('Compliance Cold Storage', 'Routing necessary but low-value logs to AWS S3 instead of the SIEM.', 'Saves up to 90% on log retention costs')
            ],
            'Implement an aggressive log filtering policy at the endpoint collector level.',
            ['Identify the top 3 highest-volume log sources currently piping into your SIEM.', 'Determine if these logs have ever actively triggered a security alert.', 'If not, reroute them exclusively to cold S3 buckets to slash the daily ingestion bill.'],
            {
                question: 'Why is routing 100% of all company logs into a SIEM highly discouraged?',
                options: ['The SIEM vendor will ban your account', 'Because SIEM platforms charge by ingestion volume, making high-volume, low-security-value logs incredibly expensive to process', 'The logs will automatically trigger thousands of fake alerts', 'It is illegal under privacy laws'],
                correctIndex: 1,
                explanation: 'SIEM billing is consumption-based. If you ingest firehoses of raw telemetry without filtering, you are paying premium per-gigabyte rates to store data that provides zero security detection value.'
            }
        ),
        l('In-House vs MDR Outsourcing', 
            [
                'Building a 24/7/365 internal Security Operations Center (SOC) requires a minimum of 8-12 security analysts to cover all shifts and holidays. This guarantees an annual payroll exceeding $1.5M, before factoring in software licensing.',
                'For 95% of organizations, farming this capability out to a Managed Detection & Response (MDR) provider (e.g., CrowdStrike Falcon Complete, Arctic Wolf) is an operational necessity. You achieve 24/7 coverage for a fraction of the cost.',
                'The calculus: In-house SOCs are only economically viable for Fortune 500s or companies where security IP is the core product. Everyone else must outsource the "eyes on glass" alerting.'
            ],
            [
                d('24/7 Shift Multiplier', 'The mathematical reality that covering 168 hours a week requires ~5 headcount minimum.', 'The hidden cost of "we need 24 hour coverage"'),
                d('MDR Arbitrage', 'Paying a vendor to amortize their SOC costs across hundreds of clients.', 'Access to top-tier talent for the price of 1 junior analyst')
            ],
            'Conduct an ROI comparison matrix for your 24/7 security monitoring requirements.',
            ['Calculate the fully loaded payroll of 6 Level-1 Security Analysts to cover all shifts natively.', 'Request an MDR quote from a top-tier provider mapping to your endpoint count.', 'Present the stark cost delta to the specific executives demanding 24/7 manual coverage.'],
            {
                question: 'Why is building a 24/7 internal SOC mathematically prohibitive for most mid-market companies?',
                options: ['Finding security analysts who want to work night shifts is impossible', 'Covering 168 hours a week requires a vast amount of redundant headcount that drives payroll into the millions', 'MDR platforms refuse to sell to mid-market companies', 'Internal teams cannot use advanced hacking tools'],
                correctIndex: 1,
                explanation: 'The sheer volume of human capital required to monitor screens 24 hours a day, 365 days a year, while accounting for vacation and sick leave, makes an internal SOC an unjustifiable capital sink for non-enterprise companies.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/7-7', undefined, 'live'
);

// We will map 7-7 through 7-15 seamlessly.
tracks7Modules['security-economics/7-7'] = m('7-7', 'Cloud Security Economics', 'Evaluating CSPM solutions, zero trust cloud fabrics, and the hidden costs of massive encryption overlays.', t7, 
    ['Audit CSPM ROI', 'Manage encryption key costs', 'Architect isolated VPCs'], [
        l('Cloud Security Posture Management (CSPM)', 
            [
                'The dominant vector for cloud breaches is not advanced hacking—it is misconfiguration (e.g., open S3 buckets, exposed RDS instances). Cloud environments are too massive to audit manually.',
                'A CSPM tool constantly scans the AWS/GCP fabric and compares configurations against CIS benchmarks or SOC 2 frameworks. The economic value is simple: it systematically eliminates the unforced errors that lead to catastrophic data leaks.',
                'However, CSPMs generate thousands of compliance alerts. If left untuned, they paralyze the DevOps team with "low severity" infrastructure noise. CSPMs must be gated to block builds, not just generate PDF reports.'
            ],
            [
                d('Misconfiguration Remediation', 'The time taken to close public access to sensitive cloud storage.', 'Target: Automated instant closure via Lambda functions'),
                d('Alert-to-Action Ratio', 'The percentage of CSPM alerts that actively result in configuration fixes.', 'Below 10% indicates the tool is configured too broadly')
            ],
            'Implement automated remediation for public storage buckets.',
            ['Configure your CSPM or AWS Config to flag any S3 bucket that transitions to "Public".', 'Trigger a Lambda function that instantly strips the public ACL and notifies the security team.', 'This converts a monitoring tool into an active, protective financial asset.'],
            {
                question: 'What is the most common root cause of major cloud data breaches?',
                options: ['Zero-day vulnerabilities in AWS hypervisors', 'Nation-state actors using quantum computers', 'Simple misconfigurations by internal staff, such as accidentally leaving a cloud storage bucket open to the public internet', 'DDoS attacks'],
                correctIndex: 2,
                explanation: 'The vast majority of cloud breaches are completely avoidable unforced errors. An engineer makes a database or storage bucket temporarily public for testing, forgets to switch it back, and it is subsequently found by automated internet scanners.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/7-8', undefined, 'live'
);

tracks7Modules['security-economics/7-8'] = m('7-8', 'Supply Chain Security', 'Analyzing the cost of SBOM maintenance, dependency risks, and third-party vendor assessments.', t7, 
    ['Quantify SBOM labor', 'Automate dependency updates', 'Accelerate vendor reviews'], [
        l('Software Bill of Materials (SBOM) Cost', 
            [
                'An SBOM is an ingredient list for your software. Following the SolarWinds and log4j disasters, enterprise and government customers demand SBOMs to verify you aren\'t shipping them embedded malware.',
                'Manually generating an SBOM is impossible. Modern apps contain thousands of open-source transit dependencies. Implementing automated SBOM generation in the CI/CD pipeline is now a mandatory cost of doing business in B2B markets.',
                'The hidden cost of SBOMs is maintenance. When a new vulnerability hits a nested dependency, you must be able to instantly query your SBOM to see if you are exposed. The speed of this query determines your incident response cost.'
            ],
            [
                d('Dependency Transitivity', 'The risk inherited from dependencies of your dependencies.', 'Often accounts for 80%+ of an application\'s actual attack surface'),
                d('SBOM Generation Time', 'The engineering delay required to produce an SBOM for an auditor.', 'Pre-automation: Days | Post-automation: Zero (generated on commit)')
            ],
            'Integrate automated SBOM generation into your build pipeline.',
            ['Select a tool like Syft or Trivy.', 'Configure it to execute during the Docker image build phase.', 'Deposit the resulting JSON artifact into a centralized, queryable repository for instant incident response.'],
            {
                question: 'Why are manual SBOM (Software Bill of Materials) audits economically and technically unfeasible?',
                options: ['Because developers do not know what code they wrote', 'Modern applications pull in thousands of transitive, nested open-source dependencies that change continuously during automated builds', 'Auditors legally require hand-written documentation', 'Because open-source is illegal to document'],
                correctIndex: 1,
                explanation: 'A modern app is an assembly line, pulling in massive trees of dependencies. A manual list is outdated the moment the next `npm install` runs. Automation is the only way to track the true composition.'
            }
        ),
        l('Vendor Risk Management Friction', 
            [
                'Every integrated third-party API or SaaS vendor extends your attack surface. If your ticketing vendor is breached, the attacker now possesses all your internal network diagrams.',
                'The standard defense is Vendor Risk Questionnaires (SIGs, CAIQs). However, sending 300-question Excel sheets to every vendor paralyzes procurement and delays the integration of revenue-driving tools by months.',
                'To optimize vendor risk economics, implement "Risk Tiering." Only subject Tier-1 vendors (those handling PII or production access) to deep manual audits. Rely on automated platform checks (BitSight, SecurityScorecard) for lower tiers to accelerate procurement.'
            ],
            [
                d('Procurement Drag', 'The business velocity lost while waiting for security to approve a new vendor.', 'Must be minimized for Tier-3 non-critical tools'),
                d('Tier-1 Exposure', 'Vendors holding the "keys to the kingdom" requiring deep vetting.', 'Examples: AWS, Snowflake, Auth0')
            ],
            'Implement a fast-track vendor approval matrix.',
            ['Create a massive 3-question filter: Does this tool hold PII? Does it touch production? Does it alter financial data?', 'If the answer is ALL NO, auto-approve the vendor using only their public SOC 2 report.', 'Reserve deep, manual 100-question vetting strictly for tools answering YES.'],
            {
                question: 'What is the fastest way to reduce the economic drag "Vendor Risk Assessments" place on corporate procurement?',
                options: ['Force every vendor, regardless of size, to answer a 500-question custom Excel spreadsheet', 'Implement Risk Tiering to fast-track low-risk vendors while reserving deep audits exclusively for platforms handling sensitive data', 'Hire more security analysts to read spreadsheets faster', 'Ignore vendor risk completely'],
                correctIndex: 1,
                explanation: 'Applying maximum security friction to a vendor supplying marketing graphics software is a massive waste of resources and delays business operations. Tiering aligns the intensity of the audit with the actual financial risk of the vendor.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/7-9', undefined, 'live'
);

tracks7Modules['security-economics/7-9'] = m('7-9', 'Data Protection Economics', 'The cost analysis of Data Loss Prevention (DLP), encryption overhead, and automated classification.', t7, 
    ['Calculate Encryption Overhead', 'Deploy DLP systems efficiently', 'Map multi-tenant data constraints'], [
        l('Data Loss Prevention (DLP) Trade-offs', 
            [
                'DLP software scans outgoing emails, USB drives, and cloud uploads to prevent sensitive data (like SSNs or source code) from leaving the corporate boundary.',
                'The economic failure rate of DLP deployments is staggering. Out of the box, DLPs generate thousands of false positives (e.g., blocking an engineer from uploading a log file because a randomly generated string resembled a credit card number).',
                'Aggressive DLP configurations destroy employee productivity and breed intense resentment. DLP must be rolled out strictly in "Monitor Only" mode for at least 90 days to tune the noise before switching to "Blocking" mode.'
            ],
            [
                d('False Positive Block Rate', 'Percentage of legitimate operations halted by the DLP.', 'Must be driven to near-zero before enforcing blocks'),
                d('Shadow IT Evasion', 'Employees bypassing corporate tools because the DLP makes them unusable.', 'High friction guarantees policy circumvention')
            ],
            'Audit your existing or planned DLP deployment strategy.',
            ['Ensure the system operates in "Audit/Monitor" mode across all departments.', 'Review the top 100 blocked/flagged events to tune out systemic false positives.', 'Only flip the switch to "Block" on exact, high-confidence matches (e.g., specific regex patterns for SSNs).'],
            {
                question: 'Why do aggressive Data Loss Prevention (DLP) rollouts typically fail and harm companies economically?',
                options: ['They are too cheap to be effective', 'They generate massive amounts of false positives that block legitimate engineering and business workflows, destroying productivity', 'They cannot read PDF files', 'Hackers easily disable them via remote commands'],
                correctIndex: 1,
                explanation: 'A security tool that blocks the business from operating is a liability. Untuned DLPs treat normal business data as malicious, forcing employees to file support tickets just to send emails to clients.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/7-10', undefined, 'live'
);

tracks7Modules['security-economics/7-10'] = m('7-10', 'Incident Response Economics', 'Optimizing retainer costs, the ROI of tabletop exercises, and measuring the financial impact of Mean Time to Recovery (MTTR).', t7, 
    ['Optimize MTTR Financials', 'Calculate Tabletop Exercise ROI', 'Negotiate IR Retainers'], [
        l('Tabletop Exercise ROI', 
            [
                'A security tabletop exercise brings the executive team together to roleplay a catastrophic breach (e.g., a massive ransomware attack). It tests communication, legal protocols, and technical recovery under simulated pressure.',
                'The ROI of a tabletop exercise is immense because it shifts the discovery of procedural failures (e.g., discovering the PR team doesn\'t know how to issue a breach notification) from a multi-million dollar live crisis to a cheap, 4-hour meeting.',
                'Executing a live incident response plan for the *first time* during an actual breach ensures total chaos. Tabletop muscle-memory reduces Mean Time to Recovery (MTTR) by days, saving millions in downtime.'
            ],
            [
                d('MTTR (Mean Time to Recovery)', 'The total hours from breach detection to full system restoration.', 'Directly correlates with revenue lost and brand damage'),
                d('Muscle Memory ROI', 'The financial value of executives knowing exactly who to call during a crisis without hesitation.', 'Saves critical hours during the "golden period" of a breach')
            ],
            'Schedule a Ransomware Tabletop Exercise for your executive steering committee next quarter.',
            ['Engage an external facilitator to run a non-technical, business-focused ransomware scenario.', 'Inject realistic stressors (e.g., reporters calling the CEO, extortion timers ticking down).', 'Identify the top 3 gaps in your communication playbook and remediate them.'],
            {
                question: 'What is the primary financial reason to conduct regular Incident Response Tabletop Exercises?',
                options: ['To figure out which engineer to fire if a breach occurs', 'To test whether the firewall can handle DDoS traffic', 'To identify and fix procedural and communication failures in a cheap, safe environment rather than discovering them during a multi-million dollar live crisis', 'To satisfy HR team-building requirements'],
                correctIndex: 2,
                explanation: 'During a real breach, confusion costs millions. Knowing exactly who calls legal, who talks to the press, and who authorizes the shutdown of production clusters saves critical time and massive amounts of money.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/7-11', undefined, 'live'
);

tracks7Modules['security-economics/7-11'] = m('7-11', 'Cyber Insurance Analysis', 'Navigating premium modeling, coverage gaps (Subrogation), and risk transfer vs retention strategies.', t7, 
    ['Model insurance premium limits', 'Identify voiding covenants', 'Determine optimal retention'], [
        l('Risk Transference and Cyber Insurance', 
            [
                'No system is perfectly secure. At a certain point, the marginal cost to secure a system exceeds the expected loss of a breach. This is where risk transference (Cyber Insurance) becomes economically mandatory.',
                'Cyber insurance premiums have skyrocketed due to ransomware. To secure a policy, underwriters demand demonstrable controls: MFA everywhere, EDR/MDR deployments, and offline immutable backups.',
                'If your controls fail the underwriter audit, your premiums will easily exceed the cost of simply implementing the controls. The investment in security tooling is directly subsidized by decreased insurance premiums.'
            ],
            [
                d('Retained Risk', 'The deductible or self-insured retention (SIR) before the policy pays.', 'Typically $25K - $250K for mid-market'),
                d('Subrogation / Voiding', 'When an insurer refuses to pay due to gross negligence or misrepresentation.', '100% loss realization')
            ],
            'Review your current cyber liability policy to map explicit exclusions.',
            ['Locate your corporate cyber insurance binder.', 'Navigate to the "Exclusions" or "Warranties" section.', 'Verify if the policy mandates 14-day patching for CVSS 9.0+ vulnerabilities. Ensure your CI/CD pipeline meets this SLA.'],
            {
                question: 'What is the most common reason cyber insurance claims are denied during a ransomware event?',
                options: ['The attack originated from a nation-state', 'The extortion demand was paid in cryptocurrency', 'The victim organization failed to implement basic controls (like MFA for all admins) explicitly sworn to in the policy application', 'The data was hosted in AWS'],
                correctIndex: 2,
                explanation: 'Cyber insurance policies are voided if the insured party misrepresents their security posture. If you check "Yes, we use MFA" on the application and a breach occurs via an un-MFA\'d account, the claim will be denied for material misrepresentation.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/7-12', undefined, 'live'
);

tracks7Modules['security-economics/7-12'] = m('7-12', 'Security Awareness Training', 'Calculating the ROI of behavior modification, phishing simulation economics, and culture change.', t7, 
    ['Calculate Phishing Simulation ROI', 'Measure click-rate degradation', 'Transform culture into defense'], [
        l('Phishing Simulation Economics', 
            [
                'Employees are the absolute weakest link in any perimeter. Social engineering bypasses the most expensive firewalls in the world. Phishing simulation platforms (e.g., KnowBe4) are the cheapest counter-measure available.',
                'However, the goal is not to shame employees who click links. Punishment-based training creates a hostile culture where employees hide mistakes. The economic goal is establishing an instant-reporting reflex.',
                'An employee clicking a malicious link is bad. An employee clicking a link, realizing the error, and reporting it to the SOC within 60 seconds is an enterprise victory. It allows rapid containment.'
            ],
            [
                d('Click Rate', 'The percentage of employees who click simulated phishing links.', 'Should consistently decline to < 3% over 12 months'),
                d('Reporting Velocity', 'The speed at which an employee flags a suspicious email to the security team.', 'Target: < 5 minutes')
            ],
            'Audit your internal phishing simulation metrics over the last 6 months.',
            ['Shift the primary performance KPI away from "Click Rate" and towards "Report Rate".', 'Implement a one-click "Report Suspicious Email" button in Outlook/Gmail to remove all friction from the alerting process.', 'Reward employees who report sophisticated attacks.'],
            {
                question: 'When measuring the success of a Security Awareness Program, what is the most valuable economic metric to track?',
                options: ['The amount of time employees spend watching educational videos', 'Getting the Click Rate to absolute 0%', 'The Reporting Velocity (how fast employees escalate suspicious emails to the SOC)', 'The number of employees fired for failing checks'],
                correctIndex: 2,
                explanation: 'Click rates will never be 0%. Someone will always fall for a highly targeted attack. The most critical defense is ensuring that when a mistake happens, it is reported instantly so containment protocols can begin before laterally spreading.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/7-13', undefined, 'live'
);

tracks7Modules['security-economics/7-13'] = m('7-13', 'Privacy Program Economics', 'The cost of global privacy fragmentation, DSAR automation, and engineering for Privacy by Design.', t7, 
    ['Automate DSAR processing', 'Map Data Privacy fragmentation', 'Engineer Privacy by Design'], [
        l('The DSAR Processing Tax', 
            [
                'Under GDPR and CCPA, consumers have the right to demand a copy of all their data, or demand its absolute deletion (Data Subject Access Requests).',
                'If your backend data is sprawling and unindexed, fulfilling a single DSAR can take a Data Engineer 10-15 hours of manual database querying and scrubbing across dozens of microservices. This is a massive hidden tax on engineering.',
                'Investing in data mapping and automated DSAR orchestration tools transforms a $1,500 manual process into a $0.05 automated API call.'
            ],
            [
                d('Manual DSAR Cost', 'Engineering Labor Rate × Hours required to manually delete a user across all systems.', 'Average non-automated cost: $500 - $1500 per request'),
                d('Data Fragmentation Penalty', 'The exponential difficulty of complying with deletion requests when data is copied across shadow databases.', 'Forces architectural consolidation')
            ],
            'Run a mock DSAR execution drill against yourself.',
            ['Select a random active test user in your production system.', 'Attempt to locate and assemble every piece of PII connected to that user across all backend databases and 3rd party SaaS platforms.', 'Calculate the total labor hours required.'],
            {
                question: 'What constitutes the massive hidden engineering tax associated with GDPR/CCPA compliance?',
                options: ['Paying the actual government fines', 'The engineering hours burned manually hunting down and extracting/deleting user records across fragmented databases for DSARs', 'Encrypting the data in transit', 'Hiring lawyers to write the privacy policy'],
                correctIndex: 1,
                explanation: 'Fines only happen when you are caught failing. But executing a manual Data Subject Access Request (DSAR) requires senior engineers to manually query databases, halting actual product work. Automation here yields massive ROI.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/7-14', undefined, 'live'
);

tracks7Modules['security-economics/7-14'] = m('7-14', 'Security Board Reporting', 'Frameworks for translating technical cyber risk into financial Board of Directors presentations.', t7, 
    ['Translate CVEs to Enterprise Risk', 'Build CISO Dashboards', 'Justify Capital Requests'], [
        l('Translating Risk to the Board', 
            [
                'The Board of Directors does not care about cross-site scripting, zero-days, or firewalls. They care about Enterprise Value, growth continuity, and legal liability. A CISO presenting technical metrics to a board has already failed the assignment.',
                'Security metrics must be translated into risk. How much revenue is exposed? What is the probability of an outage? How does our security posture accelerate or delay the enterprise sales pipeline?',
                'An effective board presentation anchors security investment requests directly to the company\'s strategic growth objectives.'
            ],
            [
                d('The Language of Risk', 'Swapping technical jargon for business impact.', 'Instead of "Patching Apache," use "Preserving e-commerce checkout uptime"'),
                d('Peer Benchmarking', 'Boards love comparisons. Show where your security spend and maturity sits relative to direct market competitors.', 'Drives actionable budget approval')
            ],
            'Refactor your standard security presentation to remove all mention of specific malware or technical jargon.',
            ['Convert "Number of Phishing Emails Blocked" into "Risk Avoidance & Employee Readiness Score".', 'Convert "Open Vulnerabilities" into "Backlog of Technical Liability".', 'Align your next budget request directly to an upcoming business objective (e.g., "This tooling ensures we pass the auditor checks required to close the Q3 enterprise pipeline").'],
            {
                question: 'When presenting to the Board of Directors, how should a CISO frame a request for an expensive new security platform?',
                options: ['By detailing the advanced cryptographic algorithms the tool uses', 'By explicitly linking the tool to the protection of key revenue streams and the unblocking of enterprise sales compliance requirements', 'By threatening to quit if they don\'t approve the budget', 'By explaining how many zero-days the tool caught in testing'],
                correctIndex: 1,
                explanation: 'Boards allocate capital based on ROI and risk to revenue. If you can prove that spending $200k on a platform directly protects a $20M revenue stream or accelerates SOC 2 compliance to close deals, the budget is instantly approved.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/7-15', undefined, 'live'
);

tracks7Modules['security-economics/7-15'] = m('7-15', 'Security Economics Synthesis', 'The complete, unified economic model of security investment, portfolio risk views, and final capstone architecture.', t7, 
    ['Merge compliance and architecture', 'Finalize risk portfolios', 'Calculate Total Cost of Security (TCS)'], [
        l('The Capstone Synthesis', 
            [
                'Security Economics establishes that security is not a technology problem; it is a capital allocation problem. You cannot secure everything. You must allocate your finite resources (engineering talent and capital) to protect the assets that generate the most revenue.',
                'A mature organization balances protective tooling (MDR, Firewalls) with proactive compliance (SOC 2 automation) and rapid recovery (Tabletops, Insurance). Any imbalance results in either massive unnecessary spending or catastrophic exposure.',
                'The ultimate goal is to embed the cost of security natively into the Cost of Goods Sold (COGS) for the product, transforming security from an IT overhead expense into a measurable component of product profitability.'
            ],
            [
                d('Total Cost of Security (TCS)', 'The unified sum of security payroll, SaaS licensing, auditor fees, and the engineering productivity tax.', 'Must be tracked quarterly'),
                d('Security-to-Revenue Ratio', 'Security spend as a percentage of total corporate revenue.', 'Benchmark target varies by industry, but tracking the trendline is mandatory')
            ],
            'Assemble your Total Cost of Security (TCS) model.',
            ['Sum your dedicated security headcount payroll.', 'Add the annual licensing costs of your security stack (SIEM, EDR, CSPM, WAF).', 'Add compliance audit fees (CPA firms).', 'Present this baseline as the unified TCS to your CFO during the next budget cycle.'],
            {
                question: 'What is the ultimate economic realization regarding enterprise security strategy?',
                options: ['With enough budget, perfect security is achievable', 'Security is fundamentally a capital allocation problem where finite resources must be dynamically deployed to protect the most critical revenue-generating assets', 'Security should be outsourced entirely to reduce headcount liability', 'Pen-testers are always right'],
                correctIndex: 1,
                explanation: 'Perfect security is economically impossible. If you attempt to secure a low-value internal blog with the same intensity as your core financial database, you misallocate capital. Risk-based prioritization is the only sustainable strategy.'
            }
        )
    ], undefined, undefined, 'live'
);
