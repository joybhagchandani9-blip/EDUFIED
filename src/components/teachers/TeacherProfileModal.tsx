import React from 'react';
import { Teacher } from '../../types';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Star, 
  CheckCircle2, 
  Heart, 
  Calendar, 
  MapPin, 
  Video, 
  Award, 
  Languages, 
  BookOpen, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface TeacherProfileModalProps {
  teacher: Teacher | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (teacher: Teacher) => void;
}

export const TeacherProfileModal: React.FC<TeacherProfileModalProps> = ({
  teacher,
  isOpen,
  onClose,
  onBook
}) => {
  const { isTeacherSaved, toggleSaveTeacher } = useApp();

  if (!isOpen || !teacher) return null;

  const saved = isTeacherSaved(teacher.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-100 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Header Cover */}
        <div className="relative bg-gradient-to-r from-brand-navy via-brand-navyLight to-brand-blue text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative">
              <img
                src={teacher.avatar}
                alt={teacher.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-4 border-white shadow-xl"
              />
              <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-teal text-slate-900">
                  Verified Educator
                </span>
                <div className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-md text-xs font-bold text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <span>{teacher.rating}</span>
                  <span className="text-white/80 font-normal">({teacher.reviewCount} reviews)</span>
                </div>
              </div>

              <h2 className="text-2xl font-black text-white mt-1">
                {teacher.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 mt-0.5 font-medium">
                {teacher.headline}
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-slate-300 mt-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                  {teacher.location}
                </span>
                <span className="flex items-center gap-1">
                  <Video className="w-3.5 h-3.5 text-brand-blue" />
                  {teacher.mode} Mode
                </span>
                <span className="flex items-center gap-1">
                  <Languages className="w-3.5 h-3.5 text-slate-300" />
                  {teacher.languages.join(', ')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Details */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm">
          
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
            <div>
              <div className="text-xl font-black text-brand-navy">{teacher.experienceYears}+ Yrs</div>
              <div className="text-[11px] font-medium text-slate-400">Experience</div>
            </div>
            <div>
              <div className="text-xl font-black text-brand-blue">{teacher.stats.studentsTaught}+</div>
              <div className="text-[11px] font-medium text-slate-400">Students Taught</div>
            </div>
            <div>
              <div className="text-xl font-black text-brand-teal">{teacher.stats.responseRate}</div>
              <div className="text-[11px] font-medium text-slate-400">Response Rate</div>
            </div>
          </div>

          {/* About Long */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-brand-blue" />
              Biography & Academic Background
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {teacher.aboutLong}
            </p>
          </div>

          {/* Teaching Style */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-teal" />
              Pedagogy & Teaching Style
            </h3>
            <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              “{teacher.teachingStyle}”
            </div>
          </div>

          {/* Subjects & Exam prep */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-slate-600" />
              Subject Expertise & Target Classes
            </h3>
            <div className="flex flex-wrap gap-2">
              {teacher.subjects.map(s => (
                <span key={s} className="px-3 py-1 rounded-xl text-xs font-bold bg-blue-100/70 text-brand-navy">
                  {s}
                </span>
              ))}
              {teacher.examPrep.map(e => (
                <span key={e} className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-100/70 text-emerald-800">
                  {e}
                </span>
              ))}
              {teacher.grades.map(g => (
                <span key={g} className="px-3 py-1 rounded-xl text-xs font-medium bg-slate-100 text-slate-700">
                  {g}
                </span>
              ))}
            </div>
          </div>

          {/* Upcoming Slots */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-teal" />
              Available Time Slots Preview
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {teacher.availableSlots.map(slot => (
                <div key={slot} className="p-2.5 rounded-xl border border-slate-200 text-center text-xs font-semibold bg-slate-50 text-slate-700">
                  {slot}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Coaching Rate
            </div>
            <div className="text-2xl font-black text-slate-900 leading-none">
              ₹{teacher.hourlyRate.toLocaleString('en-IN')}
              <span className="text-xs font-normal text-slate-500"> / hour</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleSaveTeacher(teacher.id)}
              className={`p-3 rounded-2xl border transition ${
                saved 
                  ? 'bg-rose-50 text-rose-500 border-rose-200' 
                  : 'bg-white border-slate-200 text-slate-600 hover:text-rose-500'
              }`}
              title={saved ? 'Remove shortlist' : 'Shortlist teacher'}
            >
              <Heart className={`w-5 h-5 ${saved ? 'fill-rose-500' : ''}`} />
            </button>

            <button
              onClick={() => {
                onClose();
                onBook(teacher);
              }}
              className="py-3 px-6 rounded-2xl bg-brand-navy text-white font-bold text-sm hover:bg-brand-blue transition shadow-md flex items-center gap-2 group"
            >
              <span>Book 1-on-1 Session</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
