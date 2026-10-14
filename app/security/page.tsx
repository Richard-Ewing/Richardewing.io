import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, FileCode, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise Security & Trust Center | Richard Ewing',
  description:
    'Security architecture, VPC isolation, zero data retention (ZDR), policy-as-code enforcement, and NDA compliance protocols.',
  alternates: { canonical: 'https://www.richardewing.io/security' },
  openGraph: {
    title: 'Enterprise Security & Trust Center | Richard Ewing',
    description:
      'Security architecture, VPC isolation, zero data retention (ZDR), policy-as-code enforcement, and NDA compliance protocols.',
    url: 'https://www.richardewing.io/security',
    type: 'website',
  },
};

const securityPillars = [
  {
    icon: ShieldCheck,
    title: 'Private VPC Isolation',
    description:
      'Exogram operates inside your cloud infrastructure boundary (AWS Private VPC, GCP Service Connect, or Azure VNet). No inference traffic or context definitions ever leave your enterprise perimeter.',
  },
  {
    icon: Lock,
    title: 'Zero Data Retention (ZDR)',
    description:
      'Prompts, evaluation trees, and model responses are validated purely in ephemeral memory at line rate. Ephemeral state is purged immediately following token emission.',
  },
  {
    icon: FileCode,
    title: 'Policy-as-Code Architecture',
    description:
      'Governance definitions are declared as code in strict XML schemas. Changes undergo git-backed code reviews with cryptographically signed release commits.',
  },
  {
    icon: Handshake,
    title: 'Mutual NDA Protocol',
    description:
      'All advisory engagements and pre-acquisition technical audits execute under bilateral executive NDAs, protecting proprietary algorithms, source code, and financial cap tables.',
  },
];

export default function SecurityPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Enterprise Security & Trust Center',
    description:
      'Enterprise security architecture, VPC isolation, zero data retention, and bilateral NDA protocols.',
    url: 'https://www.richardewing.io/security',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="inner-hero">
        <div className="inner-art" />
        <div className="inner-copy">
          <p className="eyebrow">
            <i /> Architecture · Trust &amp; Governance
          </p>
          <h1>Enterprise Security &amp; Trust Center</h1>
          <p className="inner-lede">
            Exogram runtime enforcement and advisory diagnostics operate under strict
            data isolation, zero data retention, and VPC-level execution standards.
          </p>
          <div className="actions">
            <Link className="button button-gold" href="/reality-check">
              Run the Reality Check ↗
            </Link>
            <Link className="button button-outline" href="/contact?subject=Security+Inquiry">
              Initiate NDA Protocol
            </Link>
          </div>
        </div>

        <aside className="inner-aside glass">
          <span>THE SECURITY INVARIANT</span>
          <strong>Your data never leaves your perimeter.</strong>
          <p>
            Zero data retention, VPC isolation, and policy-as-code governance built for
            regulated enterprise environments.
          </p>
        </aside>
      </section>

      {/* Security Pillars Grid */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="eyebrow center">Enterprise Safeguards</p>
            <h2 className="text-3xl font-serif text-[var(--ink)]">
              Four Pillars of Security Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[var(--line)] rounded-2xl p-8 shadow-sm flex flex-col justify-between hover:border-[var(--gold)] transition-all"
                >
                  <div>
                    <div className="p-3 bg-[var(--paper2)] text-[var(--gold)] rounded-xl w-fit mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[var(--ink)] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NDA Protocol Detail Card */}
      <section className="section border-t border-[var(--line)]">
        <div className="max-w-4xl mx-auto bg-[var(--forest2)] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-[var(--gold)] uppercase tracking-widest mb-3 block">
              Advisory Confidentiality Protocol
            </span>
            <h2 className="text-3xl font-serif font-bold mb-4">
              Executive NDA &amp; Due Diligence Safeguards
            </h2>
            <p className="text-zinc-200 text-sm leading-relaxed mb-6">
              Prior to accessing codebases, R&amp;D financial ledgers, or telemetry logs
              for an R&amp;D Capital Audit or PE Due Diligence engagement, a bilateral NDA
              is executed. We store zero client source code outside your encrypted
              repository infrastructure.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              <Link
                href="/contact?subject=NDA+Protocol"
                className="button button-gold text-xs"
              >
                Initiate NDA Protocol ↗
              </Link>
              <Link
                href="/exogram"
                className="button button-ghost-light text-xs"
              >
                Explore Exogram Runtime ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <p className="eyebrow">Technical Compliance</p>
        <h2>Have Custom Security or Compliance Requirements?</h2>
        <p>
          Speak directly with our technical security leads regarding VPC deployment
          topologies and policy schema definitions.
        </p>
        <div className="actions center">
          <Link className="button button-gold" href="/contact?subject=Security+Compliance">
            Contact Technical Security Team ↗
          </Link>
          <Link className="button button-ghost-light" href="/framework">
            Explore Governance Framework ↗
          </Link>
        </div>
      </section>
    </>
  );
}
