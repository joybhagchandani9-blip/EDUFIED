import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Award, 
  DollarSign, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  HelpCircle
} from 'lucide-react';

export const BecomeTeacherPage: React.FC = () => {
  const { submitTeacherApplication } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subjects, setSubjects] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [experienceYears, setExperienceYears] = useState('5-7');
  const [coachingFormat, setCoachingFormat] = useState<'1-on-1' | 'Batches' | 'Both'>('Both');
  const [city, setCity] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-brand-teal text-xs font-bold uppercase tracking-wider border border-teal-200">
            <Sparkles className="w-3.5 h-3.5" />
            EDUCATOR PARTNERSHIP
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight leading-tight">
            Teach on Your Terms.<br />
            <span className="text-brand-teal">Build Your Digital Practice.</span>
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Connect directly with ambitious students across India. Create both 1-on-1 coaching offerings and scalable multi-week group batches with zero platform lock-in.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-subtle space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">100% Autonomy in Pricing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Define your own hourly rate for 1-on-1 coaching and batch registration fees. No forced pricing ceilings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-subtle space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Custom Scheduling</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Teach mornings, evenings, or weekends. Control your availability slots with intuitive calendar management.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-subtle space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-brand-navyLight flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">Direct Student Inquiries</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Receive verified bookings and batch enrollments without dealing with cold outreach or commission middlemen.
            </p>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-10 max-w-3xl mx-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-4 border-emerald-100">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                Application Submitted
              </span>
              <h2 className="text-2xl font-black text-slate-900">
                Welcome to the EDUFIED Community!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for applying, {fullName}. Your application has been logged in our prototype demo database. You can also test the full <strong>Teacher Dashboard</strong> right away using the switcher at the top of the page.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-black text-brand-navy">
                  Educator Application Form
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Tell us about your teaching experience, subjects, and preferred coaching format.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Sharma"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-brand-blue focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Subjects Taught *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mathematics, JEE Advanced, CBSE 10"
                    value={subjects}
                    onChange={e => setSubjects(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Highest Qualifications *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. M.Sc IIT Delhi, Ph.D, B.Ed"
                    value={qualifications}
                    onChange={e => setQualifications(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Teaching Experience *
                  </label>
                  <select
                    value={experienceYears}
                    onChange={e => setExperienceYears(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  >
                    <option value="1-3">1 to 3 Years</option>
                    <option value="4-6">4 to 6 Years</option>
                    <option value="7-10">7 to 10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    City / Primary Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bengaluru / Remote Online"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-brand-blue focus:outline-none"
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
                      className={`p-3 rounded-xl text-xs font-bold border transition ${
                        coachingFormat === fmt
                          ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {fmt === 'Both' ? 'Both Formats' : fmt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Short Teaching Introduction & Philosophy
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a brief overview of your teaching approach, past results, and favorite topics..."
                  value={introduction}
                  onChange={e => setIntroduction(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium focus:ring-2 focus:ring-brand-blue focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-brand-navy text-white font-bold text-sm hover:bg-brand-blue shadow-lg hover:shadow-brand-blue/30 transition flex items-center justify-center gap-2 group"
              >
                <span>Submit Teacher Application</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-center text-slate-400">
                🔒 Prototype Notice: Applications are simulated locally.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
