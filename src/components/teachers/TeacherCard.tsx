import React from 'react';
import { Teacher } from '../../types';
import { useApp } from '../../context/AppContext';
import { 
  Star, 
  MapPin, 
  Clock, 
  Heart, 
  CheckCircle, 
  Video, 
  ChevronRight, 
  Award, 
  Calendar 
} from 'lucide-react';

interface TeacherCardProps {
  teacher: Teacher;
  onBook: (teacher: Teacher) => void;
  onViewProfile: (teacher: Teacher) => void;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({ 
  teacher, 
  onBook, 
  onViewProfile 
}) => {
  const { isTeacherSaved, toggleSaveTeacher } = useApp();
  const saved = isTeacherSaved(teacher.id);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-brand-blue/40 relative">
      
      {/* Top Banner & Bookmark */}
      <div className="p-5 pb-0">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3.5">
            <div className="relative">
              <img
                src={teacher.avatar}
                alt={teacher.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[10px]" title="Online Educator">
                <CheckCircle className="w-3.5 h-3.5" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 
                  onClick={() => onViewProfile(teacher)}
                  className="font-bold text-lg text-slate-900 group-hover:text-brand-blue transition-colors cursor-pointer"
                >
                  {teacher.name}
                </h3>
              </div>
              <p className="text-xs font-semibold text-brand-navyLight flex items-center gap-1 mt-0.5">
                <Award className="w-3.5 h-3.5 text-brand-teal" />
                {teacher.title}
              </p>
              
              {/* Rating & reviews (clearly marked demo data) */}
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex items-center gap-1 bg-amber-50 text-amber-800 px-2 py-0.5 rounded-md text-xs font-bold border border-amber-200/60">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{teacher.rating}</span>
                </div>
                <span className="text-xs text-slate-400">
                  ({teacher.reviewCount} reviews <span className="text-[10px] text-slate-400 italic">demo</span>)
                </span>
              </div>
            </div>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={() => toggleSaveTeacher(teacher.id)}
            className={`p-2 rounded-xl transition border ${
              saved 
                ? 'bg-rose-50 text-rose-500 border-rose-200' 
                : 'text-slate-400 hover:text-rose-500 hover:bg-slate-50 border-slate-100'
            }`}
            title={saved ? 'Remove from shortlist' : 'Save teacher to shortlist'}
            aria-label="Save teacher"
          >
            <Heart className={`w-4 h-4 ${saved ? 'fill-rose-500' : ''}`} />
          </button>
        </div>

        {/* Subjects & Exam Badges */}
        <div className="flex flex-wrap gap-1.5 mt-3.5">
          {teacher.subjects.map(sub => (
            <span key={sub} className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-brand-navy border border-blue-100/60">
              {sub}
            </span>
          ))}
          {teacher.examPrep.slice(0, 2).map(exam => (
            <span key={exam} className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-100">
              {exam}
            </span>
          ))}
          <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600">
            {teacher.experienceYears}+ yrs exp
          </span>
        </div>

        {/* Short Bio */}
        <p className="text-xs text-slate-600 line-clamp-2 mt-2.5 leading-relaxed">
          {teacher.bio}
        </p>

        {/* Location & Mode */}
        <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-2.5 pb-3 border-b border-slate-100">
          <span className="flex items-center gap-1 truncate max-w-[170px]">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {teacher.location}
          </span>
          <span className="flex items-center gap-1 text-brand-navyLight font-medium">
            <Video className="w-3.5 h-3.5 text-brand-blue shrink-0" />
            {teacher.mode === 'Both' ? 'Online + Offline' : teacher.mode + ' Class'}
          </span>
        </div>
      </div>

      {/* Available Slots Preview & Pricing Footer */}
      <div className="p-4 pt-2.5 bg-slate-50/60">
        {/* Next slots preview */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 mb-1.5">
            <Calendar className="w-3.5 h-3.5 text-brand-teal" />
            <span>Upcoming Open Slots:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {teacher.availableSlots.slice(0, 2).map((slot, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 rounded bg-white text-[10px] font-medium text-slate-700 border border-slate-200 shadow-2xs"
              >
                {slot}
              </span>
            ))}
            {teacher.availableSlots.length > 2 && (
              <span className="text-[10px] text-slate-400 self-center">
                +{teacher.availableSlots.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="flex items-center justify-between pt-1 gap-2">
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
              Fee per 60m
            </div>
            <div className="text-lg font-black text-slate-900 leading-tight">
              ₹{teacher.hourlyRate.toLocaleString('en-IN')}
              <span className="text-[11px] font-normal text-slate-500"> /hr</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onViewProfile(teacher)}
              className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-brand-navy hover:bg-slate-200/70 border border-slate-200 transition"
            >
              View Profile
            </button>
            <button
              onClick={() => onBook(teacher)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-brand-navy text-white hover:bg-brand-blue shadow-sm hover:shadow-brand-blue/25 transition flex items-center gap-1"
            >
              Book Session
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
