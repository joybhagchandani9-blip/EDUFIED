import React from 'react';
import { 
  Award, 
  DollarSign, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

interface TeacherRecruitmentProps {
  onOpenApplication: () => void;
}

export const TeacherRecruitment: React.FC<TeacherRecruitmentProps> = ({ onOpenApplication }) => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-brand-navyDark via-brand-navy to-slate-900 text-white relative overflow-hidden">
      
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Benefits */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/20 text-brand-teal text-xs font-bold uppercase tracking-wider border border-brand-teal/30">
              <Sparkles className="w-3.5 h-3.5" />
              FOR EDUCATORS & SUBJECT SPECIALISTS
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Great Teachers Deserve a{' '}
              <span className="bg-gradient-to-r from-brand-teal via-brand-tealLight to-brand-blue bg-clip-text text-transparent">
                Great Platform.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Share your expertise, connect with motivated students, and grow your independent teaching business with EDUFIED.
            </p>

            {/* 5 Benefits Listed */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-xs">
                <Award className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Build Your Teaching Profile</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Showcase verified qualifications, intro clips & student ratings.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-xs">
                <Users className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Offer 1-on-1 Sessions</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Deliver bespoke individual coaching at your custom hourly rate.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-xs">
                <TrendingUp className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Create Group Batches</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Scale your reach with structured multi-week cohorts & syllabus.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-xs">
                <Calendar className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Own Your Timings & Fees</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Complete control over your calendar slots and course pricing.</p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenApplication}
                className="px-8 py-4 rounded-2xl font-bold text-sm bg-brand-teal text-slate-950 hover:bg-white shadow-xl hover:shadow-brand-teal/20 transition-all flex items-center gap-2 group"
              >
                <span>Become a Teacher</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-teal" />
                Zero signup fees • Keep up to 90% of earnings
              </span>
            </div>

          </div>

          {/* Right Card: Demo Teacher Profile Preview */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 shadow-2xl backdrop-blur-md relative space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal/20 text-brand-teal flex items-center justify-center font-bold">
                    EDU
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Educator Earnings Demo</h4>
                    <p className="text-[11px] text-slate-400">Monthly breakdown preview</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-1 bg-brand-teal/20 text-brand-teal rounded-lg">
                  Prototype Demo
                </span>
              </div>

              {/* Sample performance figures (clearly identified demo data) */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-700/50">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">1-on-1 Sessions (Sample)</div>
                  <div className="text-xl font-black text-white mt-1">₹36,000</div>
                  <div className="text-[10px] text-slate-400">30 hrs @ ₹1,200/hr</div>
                </div>

                <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-700/50">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Group Batch (Sample)</div>
                  <div className="text-xl font-black text-brand-teal mt-1">₹59,990</div>
                  <div className="text-[10px] text-slate-400">10 students @ ₹5,999</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-950/60 border border-blue-800/50 text-xs text-slate-300 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  “EDUFIED allows me to run both my private JEE mentoring and my board prep batches with zero admin hassle.”
                  <br />
                  <span className="text-slate-400 font-semibold">— Dr. Rajesh Sharma (Physics Faculty)</span>
                </p>
              </div>

              <button
                onClick={onOpenApplication}
                className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 transition"
              >
                Apply to Teach Now (Instant Demo Application)
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
