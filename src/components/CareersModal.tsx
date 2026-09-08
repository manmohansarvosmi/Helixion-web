import { useState, type FormEvent } from 'react';
import { X, Briefcase, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { JobOpening } from '../types';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

const openings: JobOpening[] = [
  {
    id: 'sr-fullstack-dev',
    title: 'Senior Full Stack Engineer (React / Node / Go)',
    department: 'Engineering',
    location: 'Indore, MP (Hybrid / Remote)',
    type: 'Full-time',
    experience: '4-7 Years',
  },
  {
    id: 'lead-cloud-architect',
    title: 'Lead Cloud & DevOps Architect (AWS / Kubernetes)',
    department: 'Cloud Infrastructure',
    location: 'Indore, MP (Hybrid)',
    type: 'Full-time',
    experience: '6+ Years',
  },
  {
    id: 'flutter-mobile-lead',
    title: 'Senior Mobile Engineer (Flutter / React Native)',
    department: 'Mobile Engineering',
    location: 'Indore, MP (Hybrid / Remote)',
    type: 'Full-time',
    experience: '3-6 Years',
  },
  {
    id: 'data-ai-engineer',
    title: 'Data & Machine Learning Engineer (Python / Spark)',
    department: 'Data & AI',
    location: 'Indore, MP (Hybrid)',
    type: 'Full-time',
    experience: '3-5 Years',
  },
  {
    id: 'it-consultant',
    title: 'Principal IT Transformation Consultant',
    department: 'Consulting & Strategy',
    location: 'Indore, MP / Client Site',
    type: 'Full-time',
    experience: '8+ Years',
  },
];

export function CareersModal({ isOpen, onClose, onOpenContact }: CareersModalProps) {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applied, setApplied] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');

  if (!isOpen) return null;

  const handleApply = (e: FormEvent) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#071326] text-white p-6 sm:p-8 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Join Our Engineering Force
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              Careers at Helixion Innovation
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Build high-impact technology solutions for the world&apos;s most ambitious enterprises.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {applied ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">
                Application Received!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-4">
                Thank you for applying to Helixion Innovation. Our talent acquisition team will review your profile and reach out via {applicantEmail || 'email'}.
              </p>
              <button
                onClick={() => {
                  setApplied(false);
                  setSelectedJob(null);
                }}
                className="bg-[#0070f3] text-white px-5 py-2 rounded-lg text-xs font-semibold"
              >
                View More Positions
              </button>
            </div>
          ) : selectedJob ? (
            <div className="space-y-4">
              <button
                onClick={() => setSelectedJob(null)}
                className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
              >
                &larr; Back to all open positions
              </button>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                  {selectedJob.department}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                  {selectedJob.title}
                </h4>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" /> {selectedJob.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-500" /> {selectedJob.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-blue-500" /> {selectedJob.experience}
                  </span>
                </div>
              </div>

              <form onSubmit={handleApply} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    LinkedIn / Portfolio / GitHub URL *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Brief Introduction / Highlights
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your tech background and key projects..."
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#0070f3] hover:bg-[#005ecb] text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Open Positions ({openings.length})
                </h4>
                <span className="text-xs text-slate-500">
                  Headquarters: Indore, India
                </span>
              </div>

              <div className="space-y-2.5">
                {openings.map((job) => (
                  <div
                    key={job.id}
                    className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/40 border border-slate-100 hover:border-blue-200 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                        {job.department}
                      </span>
                      <h5 className="text-sm font-bold text-slate-900">
                        {job.title}
                      </h5>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" /> {job.type}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedJob(job)}
                      className="bg-[#0070f3] hover:bg-[#005ecb] text-white text-xs font-medium px-4 py-2 rounded-lg inline-flex items-center justify-center gap-1 shrink-0 transition-colors cursor-pointer"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Life at Helixion */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900 to-[#071324] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="font-bold text-sm">Don&apos;t see a direct fit?</h5>
              <p className="text-xs text-blue-200">
                Send your resume to careers@helixioninnovation.com for future opportunities.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="bg-white text-[#071324] hover:bg-slate-100 font-semibold text-xs px-4 py-2 rounded-lg shrink-0 transition-colors"
            >
              Contact Recruiting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
