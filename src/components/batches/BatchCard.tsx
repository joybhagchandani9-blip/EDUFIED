import React from 'react';
import { Batch } from '../../types';
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  ChevronRight, 
  Sparkles,
  BookOpen
} from 'lucide-react';

interface BatchCardProps {
  batch: Batch;
  onJoin: (batch: Batch) => void;
  onView: (batch: Batch) => void;
}

export const BatchCard: React.FC<BatchCardProps> = ({ 
  batch, 
  onJoin, 
  onView 
}) => {
  const seatsPercentage = Math.round(((batch.totalSeats - batch.availableSeats) / batch.totalSeats) * 100);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-brand-blue/40 relative">
      
      {/* Thumbnail Banner with badges */}
      <div className="relative h-44 overflow-hidden bg-slate-900">
        <img
          src={batch.thumbnail}
          alt={batch.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-brand-navy shadow-sm backdrop-blur-md">
            {batch.subject}
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-brand-blue text-white shadow-sm">
            {batch.examTarget}
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold shadow-sm ${
            batch.badgeStatus === 'Filling Fast' 
              ? 'bg-rose-500 text-white animate-pulse-subtle' 
              : 'bg-emerald-500 text-white'
          }`}>
            {batch.badgeStatus}
          </span>
        </div>

        {/* Bottom banner in image: Teacher info */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2.5">
          <img
            src={batch.teacherAvatar}
            alt={batch.teacherName}
            className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-md"
          />
          <div className="text-white drop-shadow-sm">
            <p className="text-xs font-bold leading-tight">{batch.teacherName}</p>
            <p className="text-[10px] text-slate-200 truncate max-w-[200px]">{batch.teacherRole}</p>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 
            onClick={() => onView(batch)}
            className="font-bold text-base text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2 cursor-pointer leading-snug"
          >
            {batch.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
            {batch.description}
          </p>

          {/* Schedule details */}
          <div className="grid grid-cols-2 gap-2 mt-3.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-brand-teal shrink-0" />
              <span className="truncate">Starts {batch.startDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-blue shrink-0" />
              <span className="truncate">{batch.scheduleDays.join(', ')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-purple-500 shrink-0" />
              <span className="truncate">{batch.mode}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="truncate">{batch.durationWeeks} Wks • {batch.totalSessions} Live Classes</span>
            </div>
          </div>

          {/* Seat Capacity Progress */}
          <div className="mt-3.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 mb-1">
              <span className="flex items-center gap-1 text-slate-700">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                Batch Size: {batch.totalSeats} students
              </span>
              <span className={`font-bold ${batch.availableSeats <= 4 ? 'text-rose-600' : 'text-emerald-700'}`}>
                {batch.availableSeats} seats left
              </span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${
                  seatsPercentage > 75 ? 'bg-rose-500' : 'bg-brand-blue'
                }`}
                style={{ width: `${seatsPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
              Total Course Fee
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black text-slate-900 leading-tight">
                ₹{batch.courseFee.toLocaleString('en-IN')}
              </span>
              {batch.originalFee && (
                <span className="text-xs text-slate-400 line-through">
                  ₹{batch.originalFee.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onView(batch)}
              className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-brand-navy hover:bg-slate-100 border border-slate-200 transition"
            >
              View Batch
            </button>
            <button
              onClick={() => onJoin(batch)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-brand-navy text-white hover:bg-brand-blue shadow-sm hover:shadow-brand-blue/25 transition flex items-center gap-1"
            >
              Join Batch
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
