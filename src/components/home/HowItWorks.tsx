import React, { useState } from 'react';
import { 
  Compass, 
  Search, 
  Sparkles, 
  GraduationCap, 
  Calendar, 
  CreditCard, 
  CheckCircle2, 
  Users, 
  Layers,
  ArrowRight
} from 'lucide-react';

export const HowItWorks: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  const [perspective, setPerspective] = useState<'student' | 'teacher'>('student');

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & perspective toggle */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            SIMPLE & TRANSPARENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            How EDUFIED Works
          </h2>
          <p className="text-sm text-slate-500">
            A frictionless learning journey designed for modern students and empowering top educators.
          </p>

          {/* Perspective selector */}
          <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200 mt-2">
            <button
              onClick={() => setPerspective('student')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition ${
                perspective === 'student'
                  ? 'bg-white text-brand-navy shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Students & Parents
            </button>
            <button
              onClick={() => setPerspective('teacher')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition ${
                perspective === 'teacher'
                  ? 'bg-white text-brand-navy shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Educators & Tutors
            </button>
          </div>
        </div>

        {perspective === 'student' ? (
          /* Student 3-Step Flow */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-brand-blue/40 transition-all hover:shadow-card relative group">
              <div className="w-14 h-14 rounded-2xl bg-blue-100/70 text-brand-blue flex items-center justify-center font-black text-xl mb-6 group-hover:scale-105 transition-transform">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Choose Your Learning Style
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Select between personalized 1-on-1 coaching for tailored pace, or structured group batches for collaborative peer discussions.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-navyLight">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                <span>1-on-1 vs Batches in one click</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-brand-blue/40 transition-all hover:shadow-card relative group">
              <div className="w-14 h-14 rounded-2xl bg-teal-100/70 text-brand-tealDark flex items-center justify-center font-black text-xl mb-6 group-hover:scale-105 transition-transform">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Find Your Match
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Compare verified educators by subject expertise, teaching methodology, qualifications, transparent demo fees, and calendar availability.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-navyLight">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                <span>Zero hidden agency fees</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:border-brand-blue/40 transition-all hover:shadow-card relative group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100/70 text-brand-blue flex items-center justify-center font-black text-xl mb-6 group-hover:scale-105 transition-transform">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Start Learning Seamlessly
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Book a 1-on-1 session slot or enroll in a batch with instant demo confirmation. Access virtual classrooms and manage your schedule in your Student Dashboard.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-navyLight">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                <span>Instant classroom access</span>
              </div>
            </div>

          </div>
        ) : (
          /* Teacher 3-Step Flow */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center font-black text-xl mb-6">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Create Your Educator Profile
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Highlight your academic credentials, teaching experience, subject mastery, and upload your intro video and pedagogy style.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80">
              <div className="w-14 h-14 rounded-2xl bg-blue-100/70 text-brand-blue flex items-center justify-center font-black text-xl mb-6">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Define Offerings & Timetable
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Set your own hourly fees for 1-on-1 sessions, launch custom multi-week cohorts, set batch capacities, and control your calendar.
              </p>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80">
              <div className="w-14 h-14 rounded-2xl bg-purple-100/70 text-purple-800 flex items-center justify-center font-black text-xl mb-6">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Teach & Grow Your Practice
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Host sessions, track student progress, receive simulated demo earnings, and build a lasting reputation on a dedicated platform.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
