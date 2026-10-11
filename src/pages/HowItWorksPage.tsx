import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  BookOpen, 
  Video, 
  Award 
} from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            HOW EDUFIED WORKS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight">
            Two Formats. One Mission.<br />
            <span className="text-brand-blue">Your Maximum Academic Growth.</span>
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            At EDUFIED, we recognize that no two students learn the same way. That’s why our platform seamlessly bridges tailored individual mentorship and collaborative peer cohorts.
          </p>
        </div>

        {/* Comparison Matrix: 1-on-1 vs Batches */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-10 space-y-8">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-black text-brand-navy">
              Comparing Your Learning Experiences
            </h2>
            <p className="text-xs text-slate-500">
              Find the perfect match for your study goals, exam timeline, and preferred learning pace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Column 1: 1-on-1 Coaching */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-brand-navy flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                      Personalized Attention
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">1-on-1 Coaching</h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dedicated time with an expert teacher focused exclusively on your specific gaps, speed, and curriculum targets.
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>100% Custom Pace:</strong> Spend more time on difficult topics, skip what you already master.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Flexible Timing:</strong> Book slots around your school and extracurricular schedule.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Direct Mentorship:</strong> Safe space to ask questions without embarrassment or pressure.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Transparent Fee:</strong> Pay per session or hour directly (₹600 - ₹1,500/hr).</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/teachers"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-brand-navy text-white text-center hover:bg-brand-blue transition shadow-md"
              >
                Find 1-on-1 Teachers
              </Link>
            </div>

            {/* Column 2: Group Batches */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 text-brand-tealDark flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal">
                      Structured Cohorts
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">Group Batches</h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Join a structured 8–12 week masterclass with a small group of motivated peers (15-20 students max).
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span><strong>Systematic Curriculum:</strong> Structured week-by-week roadmap ensuring full syllabus completion.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span><strong>Peer Inspiration:</strong> Learn from other students' questions, discussions, and mock test scores.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span><strong>Fixed Timings:</strong> Disciplined weekly routine with designated class hours.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span><strong>Cost-Effective:</strong> Lower per-hour cost spread across the entire cohort (₹3,000 - ₹6,000 full course).</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/batches"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-brand-navy text-white text-center hover:bg-brand-blue transition shadow-md"
              >
                Explore Batches
              </Link>
            </div>

          </div>
        </div>

        {/* 3 Step Student Journey */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-black text-brand-navy">
              Three Simple Steps to Get Started
            </h2>
            <p className="text-xs text-slate-500">
              No complicated enrollment barriers. Begin in less than 2 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle space-y-2">
              <span className="text-2xl font-black text-brand-blue">1</span>
              <h3 className="font-bold text-base text-slate-900">Search & Filter</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Filter educators by board, subject, experience, ratings, and price, or explore structured batch cohorts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle space-y-2">
              <span className="text-2xl font-black text-brand-teal">2</span>
              <h3 className="font-bold text-base text-slate-900">Select Slot or Batch</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose an available calendar slot for 1-on-1 coaching, or select an upcoming batch date that fits your weekly timetable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle space-y-2">
              <span className="text-2xl font-black text-brand-navy">3</span>
              <h3 className="font-bold text-base text-slate-900">Start Live Learning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Join high-definition interactive video classrooms with digital screen sharing, doubt notes, and recorded recaps.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
