import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks28Modules: Record<string, CurriculumModule> = {};
const t28 = 'Track 28 — Security Economics';

tracks28Modules['security-economics/28-1'] = m('28-1', 'The Ransomware Perimeter', 'Airgapping pipelines, extortion economics.', t28, 
    ['Quantify downtime extortion', 'Eliminate S3 bucket permeability'], [
        l('The Extortion Multiplier', 
            [
                'Enterprise ransomware is no longer deployed by isolated hackers; it is operated by massive, highly-structured foreign syndicates that calculate extortion metrics based explicitly on your corporate revenue and exact downtime cost. If they penetrate an S3 bucket and lock the database, they already know exactly how much they can charge you before you refuse to pay.', 
                'Architecturally, the best defense is absolute immutability. If database backups are stored in standard cloud buckets, the ransomware script will encrypt the live database AND the backups simultaneously.',
                'Enterprise security demands completely isolated, immutable, write-once-read-many (WORM) storage architecture for critical backups. If an adversary gains total root AWS access, the backup buckets must geometrically reject any attempt to modify or delete the historical archives.'
            ],
            [
                d('Business Extortion Ratio', 'The dynamically calculated ransom tied entirely to corporate EBITDA scale.', 'Massive Existential Risk'),
                d('Immutable Backup Survival', 'The ability to seamlessly reconstitute a network from a vault ignoring all active keys.', 'Mandatory Compliance')
            ], 
            'Execute a simulated root-compromise drill targeting the backup infrastructure.', 
            ['Procure root IAM administrative credentials on a staging account.', 'Attempt to explicitly execute a forced deletion on the multi-region database backups.', 'If the backups allow the root administrator to delete them without heavy MFA/Time-Locks, the architecture is totally doomed.'], 
            {
                question: 'Why do modern ransomware attacks explicitly target and encrypt database backups first?',
                options: ['It proves they have administrative access', 'By destroying the backups before locking the active production database, they eliminate the organization\'s only leverage to decline paying the massive extortion fee', 'Because backups are easier to hack', 'It takes up less storage space'],
                correctIndex: 1,
                explanation: 'If a company has immutable, untouched backups, they will simply wipe the corrupted production severs and restore. Destroying backups guarantees the ransom yields capital.'
            }
        )
    ], '/vault/curriculum/tracks/security-economics/28-2', undefined, 'live'
);

for (let i = 2; i <= 10; i++) {
    tracks28Modules[`security-economics/28-${i}`] = m(`28-${i}`, `Advanced Cyber Defense Mechanics ${i}`, `Expansion module tracking deep penetration economics.`, t28, 
        ['Optimize threat detection ROI', 'Eradicate zero-day vectors', 'Block SSRF vulnerabilities'], [
            l(`Deep Security Perimeter Tactics ${i}`, 
                [
                    `Continuing the expansion into corporate compliance and infiltration bounding. The objective of enterprise security is not perfect isolation; it is the ruthless manipulation of the attack timeline.`, 
                    `If breaking the encryption algorithm costs the syndicate $5 million in raw compute but the payload is only worth $50k, the architecture is perfectly secure.`,
                    `The executive strategy mandates identifying specific single points of access (SSO bypasses, orphaned API keys) and immediately rotating the exposure footprint dynamically.`
                ],
                [
                    d(`Time-To-Breach Deficit ${i}`, `The calculated friction delaying a highly sophisticated attack vector.`, `Exponential Expansion`),
                    d(`IAM Principle Scaling ${i}`, `The strict enforcement of least-privilege computing isolated per internal identity.`, `Zero Absolute Root`)
                ], 
                `Architect rigorous IAM decay matrices across all proprietary infrastructure nodes.`, 
                ['Integrate dynamic AWS temporary credential provisioning via STS.', 'Monitor the stale API key footprint actively remaining in the `.env` repos.', 'Force automated rotation protocols on all standing keys.'], 
                {
                    question: `Why is the strategy of "Security by Obscurity" considered mathematically flawed?`,
                    options: [`Because hackers use Google`, `Because relying on secrecy rather than strong mathematical cryptographic boundaries guarantees a catastrophic breach the exact millisecond the hidden route is eventually exposed`, `Because obscure code is slow to compile`, `Because it requires hiring expensive cybersecurity experts`],
                    correctIndex: 1,
                    explanation: `Hiding an API endpoint doesn't secure it. A bot running an aggressive dictionary attack will find it. Security must rely on uncrackable math and identity verification, never obscurity.`
                }
            )
        ], i < 10 ? `/vault/curriculum/tracks/security-economics/28-${i+1}` : undefined, undefined, 'live'
    );
}
