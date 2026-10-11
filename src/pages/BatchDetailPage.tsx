import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { BatchEnrollModal } from '../components/batches/BatchEnrollModal';
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  CheckCircle2, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

export const BatchDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { batches } = useApp();

  const batch = batches.find(b => b.id === id) || batches[0];
  const [openWeek, setOpenWeek] = useState<number | null>(1);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <Link 
          to="/batches" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-navy transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Batches</span>
        </Link>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden">
          
          <div className="relative bg-slate-950 p-8 sm:p-12 text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-teal text-slate-900">
                {batch.subject}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-blue text-white">
                {batch.examTarget}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-rose-500 text-white">
                {batch.badgeStatus}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight max-w-3xl">
              {batch.title}
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-6 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-4">
                <img
                  src={batch.teacherAvatar}
                  alt={batch.teacherName}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-brand-teal shadow-md"
                />
                <div>
                  <p className="text-sm font-bold text-white leading-tight">{batch.teacherName}</p>
                  <p className="text-xs text-slate-300">{batch.teacherRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Course Fee</div>
                  <div className="text-2xl font-black text-white leading-none">
                    ₹{batch.courseFee.toLocaleString('en-IN')}
                  </div>
                </div>

                <button
                  onClick={() => setEnrollModalOpen(true)}
                  className="px-6 py-3.5 rounded-2xl bg-brand-teal text-slate-950 font-bold text-sm hover:bg-white transition flex items-center gap-2 shadow-lg"
                >
                  <span>Join Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-8 sm:p-10 space-y-8">
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Start Date</div>
                <div className="text-base font-bold text-slate-900 mt-0.5">{batch.startDate}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Weekly Schedule</div>
                <div className="text-base font-bold text-slate-900 mt-0.5">{batch.scheduleDays.join(', ')}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Live Class Time</div>
                <div className="text-base font-bold text-slate-900 mt-0.5 truncate">{batch.scheduleTime}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Seats Available</div>
                <div className="text-base font-bold text-rose-600 mt-0.5">{batch.availableSeats} of {batch.totalSeats} seats left</div>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Batch Description & Focus
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {batch.description}
              </p>
            </div>

            {/* Learning Outcomes */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-blue" />
                Key Learning Outcomes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {batch.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-teal" />
                Comprehensive Weekly Syllabus
              </h3>
              <div className="space-y-2.5">
                {batch.syllabus.map(item => {
                  const isOpen = openWeek === item.week;
                  return (
                    <div key={item.week} className="border border-slate-200 rounded-2xl overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenWeek(isOpen ? null : item.week)}
                        className="w-full p-4 bg-slate-50/80 hover:bg-slate-100 flex items-center justify-between text-left transition"
                      >
                        <span className="font-bold text-xs sm:text-sm text-slate-900">
                          Week {item.week}: {item.title}
                        </span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                      </button>
                      {isOpen && (
                        <div className="p-4 bg-white border-t border-slate-100 space-y-2">
                          {item.topics.map((topic, tidx) => (
                            <div key={tidx} className="text-xs text-slate-600 flex items-center gap-2.5 pl-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Bar */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <h4 className="text-xl font-bold">Secure Your Seat in {batch.title}</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Only {batch.availableSeats} seats remaining in this cohort. Instant simulated enrollment confirmation.
                </p>
              </div>

              <button
                onClick={() => setEnrollModalOpen(true)}
                className="px-8 py-4 rounded-2xl bg-brand-teal text-slate-950 font-bold text-sm hover:bg-white transition flex items-center gap-2 shrink-0 shadow-lg"
              >
                <span>Enroll in Batch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Modal */}
        <BatchEnrollModal
          batch={batch}
          isOpen={enrollModalOpen}
          onClose={() => setEnrollModalOpen(false)}
        />

      </div>
    </div>
  );
};
