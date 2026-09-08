import { X, Target, Eye, ShieldCheck, Award, Users2, Cpu, Globe2, Building } from 'lucide-react';
import { Logo } from './Logo';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export function AboutModal({ isOpen, onClose, onOpenContact }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#071326] text-white p-6 sm:p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo variant="light" size="sm" />
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Company Profile
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                About Helixion Innovation
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">
              Innovating Today, Shaping Tomorrow
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Helixion Innovation is a technology powerhouse headquartered in Indore, Madhya Pradesh, India. We specialize in engineering intelligent, scalable, and resilient digital solutions that power industry leaders, Fortune enterprises, and transformative startups across the globe.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
              <div className="flex items-center gap-2 mb-2 text-[#0070f3]">
                <Target className="w-5 h-5" />
                <h5 className="font-bold text-sm text-slate-900">Our Mission</h5>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                To empower global businesses with future-ready digital architectures, frictionless software workflows, and actionable intelligence that drives sustainable growth.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100">
              <div className="flex items-center gap-2 mb-2 text-[#0284c7]">
                <Eye className="w-5 h-5" />
                <h5 className="font-bold text-sm text-slate-900">Our Vision</h5>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                To be the most trusted global engineering ally, bridging complex human problems with elegant computational precision and uncompromising product craftsmanship.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              The Helixion Standard
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <Cpu className="w-6 h-6 text-blue-600 mx-auto mb-1.5" />
                <h6 className="font-bold text-xs text-slate-800">Technological Mastery</h6>
                <p className="text-[11px] text-slate-500 mt-0.5">Modern, battle-tested stacks</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-6 h-6 text-blue-600 mx-auto mb-1.5" />
                <h6 className="font-bold text-xs text-slate-800">Enterprise Security</h6>
                <p className="text-[11px] text-slate-500 mt-0.5">Zero-trust architecture</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <Users2 className="w-6 h-6 text-blue-600 mx-auto mb-1.5" />
                <h6 className="font-bold text-xs text-slate-800">Client-First Agile</h6>
                <p className="text-[11px] text-slate-500 mt-0.5">Transparent co-creation</p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <Award className="w-6 h-6 text-blue-600 mx-auto mb-1.5" />
                <h6 className="font-bold text-xs text-slate-800">Proven Execution</h6>
                <p className="text-[11px] text-slate-500 mt-0.5">99.9% on-time delivery</p>
              </div>
            </div>
          </div>

          {/* Headquarters Location Highlight */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <Building className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600">
              <strong className="text-slate-900 block mb-0.5">Corporate Headquarters</strong>
              Indore, Madhya Pradesh, India &bull; Serving global clients across North America, Europe, and Asia-Pacific.
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Transform your enterprise with Helixion Innovation
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="bg-[#0070f3] hover:bg-[#005ecb] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
