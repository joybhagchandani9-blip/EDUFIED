import React from 'react';
import { MOCK_TESTIMONIALS } from '../../data/mockData';
import { Star, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-navy bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            PROTOTYPE SAMPLE REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Loved by Students. Trusted by Parents.
          </h2>
          <p className="text-sm text-slate-500">
            Transparent educator discovery and structured learning batches designed to build actual confidence.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {MOCK_TESTIMONIALS.map(t => (
            <div
              key={t.id}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 flex flex-col justify-between hover:shadow-card hover:border-brand-blue/30 transition-all duration-300"
            >
              <div>
                {/* Format badge & rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100/80 text-brand-navy">
                    {t.format}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  “{t.quote}”
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <h4 className="font-bold text-xs text-slate-900 leading-tight">
                    {t.author}
                  </h4>
                  <p className="text-[10px] text-slate-500 line-clamp-1">{t.role}</p>
                  <span className="text-[10px] text-brand-blue font-semibold">{t.courseOrSubject}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Transparency Banner */}
        <div className="bg-gradient-to-r from-blue-50/80 via-teal-50/50 to-slate-50 rounded-3xl p-6 sm:p-8 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2 justify-center md:justify-start">
              <ShieldCheck className="w-5 h-5 text-brand-teal" />
              Built on Complete Pricing & Schedule Transparency
            </h3>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              Every educator lists their own verified credentials, hourly fee, and batch syllabus upfront. Reschedule sessions with ease and enjoy flexible refund guidelines.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 shrink-0">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Zero hidden charges
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Direct tutor chat
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
