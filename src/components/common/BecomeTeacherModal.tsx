import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, CheckCircle2, GraduationCap, Briefcase, Sparkles, ArrowRight } from 'lucide-react';

interface BecomeTeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BecomeTeacherModal: React.FC<BecomeTeacherModalProps> = ({ isOpen, onClose }) => {
  const { submitTeacherApplication } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subjects, setSubjects] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [experienceYears, setExperienceYears] = useState('5');
  const [coachingFormat, setCoachingFormat] = useState<'1-on-1' | 'Batches' | 'Both'>('Both');
  const [city, setCity] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitTeacherApplication({
      fullName,
      email,
      phone,
      subjects: subjects.split(',').map(s => s.trim()).filter(Boolean),
      qualifications,
      experienceYears,
      coachingFormat,
      city,
      introduction
    });
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setSubjects('');
    setQualifications('');
    setIntroduction('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-navyDark text-white p-6 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-teal text-slate-900">
              Educator Onboarding
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Join EDUFIED as a Teacher
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Build your profile, set your own fees & schedules, and teach motivated learners nationwide.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-4 border-emerald-100 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-1.5">
                  Demo Application Received
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Thank You, {fullName || 'Teacher'}!
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto leading-relaxed">
                  Your application to teach on EDUFIED has been recorded in the prototype demo state. In a live system, our academic team would review credentials and schedule an interactive demo.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-left space-y-1.5 text-slate-600">
                <p><strong className="text-slate-800">Format:</strong> {coachingFormat} Coaching</p>
                <p><strong className="text-slate-800">Subjects:</strong> {subjects || 'Mathematics, Physics'}</p>
                <p><strong className="text-slate-800">Contact:</strong> {email || 'teacher@demo.com'} • {phone || '+91 98765 00000'}</p>
              </div>

              <button
                onClick={handleResetAndClose}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-brand-navy text-white hover:bg-brand-blue transition"
              >
                Close & Return to Platform
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Sharma"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Subjects Taught *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Physics, JEE Advanced"
                    value={subjects}
                    onChange={e => setSubjects(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Qualifications *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. M.Sc, B.Tech IIT, B.Ed"
                    value={qualifications}
                    onChange={e => setQualifications(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Teaching Experience *
                  </label>
                  <select
                    value={experienceYears}
                    onChange={e => setExperienceYears(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  >
                    <option value="1-3">1 - 3 years</option>
                    <option value="4-6">4 - 6 years</option>
                    <option value="7-10">7 - 10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bengaluru / Mumbai"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Coaching Format *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['1-on-1', 'Batches', 'Both'] as const).map(fmt => (
                    <button
                      type="button"
                      key={fmt}
                      onClick={() => setCoachingFormat(fmt)}
                      className={`p-2 rounded-xl text-xs font-bold border transition ${
                        coachingFormat === fmt
                          ? 'bg-brand-navy text-white border-brand-navy'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {fmt === 'Both' ? 'Both Formats' : fmt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Short Teaching Introduction & Philosophy
                </label>
                <textarea
                  rows={2}
                  placeholder="Share a brief overview of your teaching style, achievements, and past results..."
                  value={introduction}
                  onChange={e => setIntroduction(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-brand-navy text-white font-bold text-sm hover:bg-brand-blue shadow-lg hover:shadow-brand-blue/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Submit Teacher Application</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-center text-slate-400">
                EDUFIED charges zero listing fees. Teachers keep up to 90% of their earnings.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
