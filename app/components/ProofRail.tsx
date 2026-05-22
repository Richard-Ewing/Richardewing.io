/**
 * ProofRail — Persistent credibility proof bar
 * 
 * Displays operational proof-of-authority metrics across key pages.
 * Designed to be deployed on: homepage, /advisory, /principal, /for-ctos, /for-boards, /diagnose
 * 
 * Grounded in real metrics from the platform:
 * - $7,500+ R&D Capital Audits delivered
 * - 436+ governance terms defined
 * - 6 free diagnostic tools
 * - Published across 4 major platforms
 */
import { BookOpen, Wrench, FileText, Building2 } from 'lucide-react';

const proofs = [
    { icon: Building2, label: '$7,500+ R&D Audits', sublabel: 'Enterprise engagements' },
    { icon: BookOpen, label: '436+ Terms Defined', sublabel: 'Governance glossary' },
    { icon: Wrench, label: '6 Free Diagnostics', sublabel: 'Board-ready instruments' },
    { icon: FileText, label: '4 Publications', sublabel: 'BuiltIn · CIO · HN · MtP' },
];

const ProofRail = () => {
    return (
        <section className="py-6 border-y border-zinc-100 bg-zinc-50/50">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {proofs.map((p, i) => {
                        const Icon = p.icon;
                        return (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-4 h-4 text-violet-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-zinc-900 leading-tight">{p.label}</p>
                                    <p className="text-xs text-zinc-500 font-medium">{p.sublabel}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProofRail;
