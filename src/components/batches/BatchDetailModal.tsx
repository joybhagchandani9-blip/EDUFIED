import React, { useState } from 'react';
import { Batch } from '../../types';
import { 
  X, 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  CheckCircle2, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

interface BatchDetailModalProps {
  batch: Batch | null;
  isOpen: boolean;
  onClose: () => void;
  onJoin: (batch: Batch) => void;
}

export const BatchDetailModal: React.FC<BatchDetailModalProps> = ({
  batch,
  isOpen,
  onClose,
  onJoin
}) => {
  const [openWeek, setOpenWeek] = useState<number | null>(1);

  if (!isOpen || !batch) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-100 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Cover / Header */}
        <div className="relative bg-slate-950 text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-teal text-slate-900">
              {batch.subject}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-blue text-white">
              {batch.examTarget}
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-rose-500 text-white">
              {batch.badgeStatus}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">
            {batch.title}
          </h2>

          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-800">
            <img
              src={batch.teacherAvatar}
              alt={batch.teacherName}
              className="w-11 h-11 rounded-full object-cover border-2 border-brand-teal shadow-md"
            />
            <div>
              <p className="text-xs font-bold text-white leading-tight">{batch.teacherName}</p>
              <p className="text-[11px] text-slate-300">{batch.teacherRole}</p>
            </div>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Start Date</div>
              <div className="font-bold text-slate-900">{batch.startDate}</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Weekly Schedule</div>
              <div className="font-bold text-slate-900">{batch.scheduleDays.join(', ')}</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Time Slot</div>
              <div className="font-bold text-slate-900 truncate">{batch.scheduleTime}</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Batch Size</div>
              <div className="font-bold text-emerald-700">{batch.availableSeats} of {batch.totalSeats} seats left</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              Course Overview
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {batch.description}
            </p>
          </div>

          {/* Learning Outcomes */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-brand-blue" />
              What You Will Achieve in this Batch
            </h3>
            <div className="space-y-2">
              {batch.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus Accordion */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-brand-teal" />
              Structured Syllabus & Weekly Schedule
            </h3>
            <div className="space-y-2">
              {batch.syllabus.map(item => {
                const isOpen = openWeek === item.week;
                return (
                  <div key={item.week} className="border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenWeek(isOpen ? null : item.week)}
                      className="w-full p-3.5 bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between text-left transition"
                    >
                      <span className="font-bold text-xs text-slate-800">
                        Week {item.week}: {item.title}
                      </span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                    </button>
                    {isOpen && (
                      <div className="p-3.5 bg-white border-t border-slate-100 space-y-1.5">
                        {item.topics.map((t, tidx) => (
                          <div key={tidx} className="text-xs text-slate-600 flex items-center gap-2 pl-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                            <span>{t}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Complete Course Fee
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 leading-none">
                ₹{batch.courseFee.toLocaleString('en-IN')}
              </span>
              {batch.originalFee && (
                <span className="text-xs text-slate-400 line-through">
                  ₹{batch.originalFee.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onJoin(batch);
              }}
              className="py-3 px-6 rounded-2xl bg-brand-navy text-white font-bold text-sm hover:bg-brand-blue transition shadow-md flex items-center gap-2 group"
            >
              <span>Enroll in Batch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
