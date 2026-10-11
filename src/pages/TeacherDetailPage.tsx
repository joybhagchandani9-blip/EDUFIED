import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { TeacherBookingModal } from '../components/teachers/TeacherBookingModal';
import { 
  Star, 
  MapPin, 
  Video, 
  Calendar, 
  Heart, 
  CheckCircle2, 
  Award, 
  Languages, 
  BookOpen, 
  Sparkles,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Clock
} from 'lucide-react';

export const TeacherDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { teachers, isTeacherSaved, toggleSaveTeacher } = useApp();
  const navigate = useNavigate();

  const teacher = teachers.find(t => t.id === id) || teachers[0];
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const saved = isTeacherSaved(teacher.id);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back link */}
        <Link 
          to="/teachers" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-navy transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Teachers</span>
        </Link>

        {/* Hero Profile Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-brand-navy via-brand-navyLight to-brand-blue p-8 sm:p-10 text-white relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative">
                <img
                  src={teacher.avatar}
                  alt={teacher.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover border-4 border-white shadow-2xl"
                />
                <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal text-slate-900">
                    Verified Educator
                  </span>
                  <div className="flex items-center gap-1 bg-white/15 px-2.5 py-0.5 rounded-lg text-xs font-bold text-amber-300">
                    <Star className="w-3.5 h-3.5 fill-amber-300" />
                    <span>{teacher.rating}</span>
                    <span className="text-white/80 font-normal">({teacher.reviewCount} reviews • Demo)</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  {teacher.name}
                </h1>
                <p className="text-sm text-slate-200 font-medium">
                  {teacher.title} • {teacher.qualifications}
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                    {teacher.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Video className="w-3.5 h-3.5 text-brand-blue" />
                    {teacher.mode} Mode
                  </span>
                  <span className="flex items-center gap-1">
                    <Languages className="w-3.5 h-3.5" />
                    {teacher.languages.join(', ')}
                  </span>
                </div>
              </div>

              {/* Action Side in Header */}
              <div className="sm:text-right flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-4 sm:pt-0 border-t sm:border-t-0 border-white/20">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-300">Session Rate</div>
                  <div className="text-2xl font-black text-white">₹{teacher.hourlyRate.toLocaleString('en-IN')}<span className="text-xs font-normal text-slate-300"> /hr</span></div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleSaveTeacher(teacher.id)}
                    className={`p-2.5 rounded-xl border transition ${
                      saved 
                        ? 'bg-rose-500/20 text-rose-300 border-rose-400' 
                        : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                    }`}
                    title={saved ? 'Remove shortlist' : 'Save teacher'}
                  >
                    <Heart className={`w-4 h-4 ${saved ? 'fill-rose-300' : ''}`} />
                  </button>

                  <button
                    onClick={() => setBookingModalOpen(true)}
                    className="px-5 py-2.5 rounded-xl bg-brand-teal text-slate-950 font-bold text-xs hover:bg-white transition shadow-lg"
                  >
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Body Information */}
          <div className="p-8 sm:p-10 space-y-8">
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div>
                <div className="text-2xl font-black text-brand-navy">{teacher.experienceYears}+ Yrs</div>
                <div className="text-xs text-slate-500 font-medium">Teaching Experience</div>
              </div>
              <div>
                <div className="text-2xl font-black text-brand-blue">{teacher.stats.studentsTaught}+</div>
                <div className="text-xs text-slate-500 font-medium">Students Mentored</div>
              </div>
              <div>
                <div className="text-2xl font-black text-brand-teal">{teacher.stats.responseRate}</div>
                <div className="text-xs text-slate-500 font-medium">Avg Response Rate</div>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-blue" />
                About {teacher.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {teacher.aboutLong}
              </p>
            </div>

            {/* Pedagogy */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                Teaching Philosophy & Methodology
              </h3>
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 text-sm text-slate-700 leading-relaxed font-medium">
                “{teacher.teachingStyle}”
              </div>
            </div>

            {/* Subjects & Grades */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-slate-600" />
                Subject Specialization & Exams
              </h3>
              <div className="flex flex-wrap gap-2">
                {teacher.subjects.map(s => (
                  <span key={s} className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-blue-50 text-brand-navy border border-blue-100">
                    {s}
                  </span>
                ))}
                {teacher.examPrep.map(e => (
                  <span key={e} className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-100">
                    {e}
                  </span>
                ))}
                {teacher.grades.map(g => (
                  <span key={g} className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-100 text-slate-700">
                    {g}
                  </span>
                ))}
              </div>
            </div>

            {/* Available Calendar Slots preview */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-teal" />
                Open Slots for This Week
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {teacher.availableSlots.map(slot => (
                  <div key={slot} className="p-3 rounded-xl border border-slate-200 text-center text-xs font-semibold bg-white shadow-2xs text-slate-800">
                    <Clock className="w-3.5 h-3.5 text-slate-400 mx-auto mb-1" />
                    <span>{slot}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <h4 className="text-xl font-bold">Ready to start learning with {teacher.name}?</h4>
                <p className="text-xs text-slate-400 mt-1">Book your tailored 1-on-1 session with instant simulated demo confirmation.</p>
              </div>

              <button
                onClick={() => setBookingModalOpen(true)}
                className="px-6 py-3.5 rounded-2xl bg-brand-teal text-slate-950 font-bold text-sm hover:bg-white transition flex items-center gap-2 shrink-0 shadow-lg"
              >
                <span>Book 1-on-1 Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Modal */}
        <TeacherBookingModal
          teacher={teacher}
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
        />

      </div>
    </div>
  );
};
