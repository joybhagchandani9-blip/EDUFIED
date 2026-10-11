import React, { useState } from 'react';
import { Teacher, Booking } from '../../types';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  Star, 
  Video, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TeacherBookingModalProps {
  teacher: Teacher | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherBookingModal: React.FC<TeacherBookingModalProps> = ({
  teacher,
  isOpen,
  onClose
}) => {
  const { user, createBooking } = useApp();
  const navigate = useNavigate();

  // Booking states
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, Oct 13, 2026');
  const [selectedTime, setSelectedTime] = useState<string>('5:00 PM - 6:00 PM');
  const [duration, setDuration] = useState<number>(60); // 60 or 90 mins
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [studentName, setStudentName] = useState<string>(user?.name || 'Devansh Kapur');
  const [studentEmail, setStudentEmail] = useState<string>(user?.email || 'devansh.student@edufied.demo');
  const [studentPhone, setStudentPhone] = useState<string>(user?.phone || '+91 98765 43210');
  const [notes, setNotes] = useState<string>('Need help with fundamental concept derivations and numerical problem solving.');
  
  const [bookingConfirmed, setBookingConfirmed] = useState<Booking | null>(null);

  if (!isOpen || !teacher) return null;

  // Set default subject
  const currentSubject = selectedSubject || teacher.subjects[0];

  const calculatedFee = Math.round((teacher.hourlyRate * duration) / 60);

  const datesAvailable = [
    { label: 'Tomorrow', date: 'Tomorrow, Oct 13, 2026' },
    { label: 'Wed', date: 'Wednesday, Oct 14, 2026' },
    { label: 'Thu', date: 'Thursday, Oct 15, 2026' },
    { label: 'Fri', date: 'Friday, Oct 16, 2026' },
    { label: 'Sat', date: 'Saturday, Oct 17, 2026' },
  ];

  const timeSlots = [
    '10:30 AM - 11:30 AM',
    '3:00 PM - 4:00 PM',
    '5:00 PM - 6:00 PM',
    '6:30 PM - 7:30 PM',
    '8:00 PM - 9:00 PM'
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const result = createBooking({
      teacherId: teacher.id,
      teacherName: teacher.name,
      teacherAvatar: teacher.avatar,
      subject: currentSubject,
      date: selectedDate,
      timeSlot: selectedTime,
      durationMinutes: duration,
      fee: calculatedFee,
      studentName,
      studentEmail,
      studentPhone,
      notes
    });
    setBookingConfirmed(result);
  };

  const handleClose = () => {
    setBookingConfirmed(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-navyLight text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <img
              src={teacher.avatar}
              alt={teacher.name}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-white/80 shadow-md"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal bg-brand-teal/20 px-2 py-0.5 rounded-full">
                  1-on-1 Coaching
                </span>
                <span className="text-xs text-amber-300 flex items-center gap-1 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  {teacher.rating}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mt-1">
                Book Session with {teacher.name}
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                {teacher.title} • {teacher.qualifications}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {bookingConfirmed ? (
            /* Confirmation Screen */
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-4 border-emerald-100 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-2">
                  Demo Booking Confirmed
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  You’re All Set to Learn!
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                  A simulated confirmation and calendar invite have been generated. This booking is visible in your Student Dashboard.
                </p>
              </div>

              {/* Booking Summary Card */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left text-xs space-y-2.5">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-slate-800">{bookingConfirmed.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Educator:</span>
                  <span className="font-bold text-slate-900">{bookingConfirmed.teacherName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Subject:</span>
                  <span className="font-semibold text-brand-navy">{bookingConfirmed.subject}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date & Slot:</span>
                  <span className="font-bold text-slate-900">{bookingConfirmed.date} ({bookingConfirmed.timeSlot})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Duration & Demo Fee:</span>
                  <span className="font-bold text-slate-900">{bookingConfirmed.durationMinutes} mins • ₹{bookingConfirmed.fee} (Demo Paid)</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                  <span className="text-slate-500">Live Classroom Room:</span>
                  <a
                    href={bookingConfirmed.meetingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-brand-blue flex items-center gap-1 hover:underline"
                  >
                    Launch Live Room
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleClose}
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
                >
                  Close Window
                </button>
                <button
                  onClick={() => {
                    handleClose();
                    navigate('/student/dashboard');
                  }}
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs bg-brand-navy text-white hover:bg-brand-blue transition flex items-center justify-center gap-1.5 shadow-md"
                >
                  View in Student Dashboard
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Booking Form */
            <form onSubmit={handleConfirm} className="space-y-4">
              
              {/* Step 1: Subject Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  1. Select Subject or Focus Area
                </label>
                <div className="flex flex-wrap gap-2">
                  {teacher.subjects.map(sub => (
                    <button
                      type="button"
                      key={sub}
                      onClick={() => setSelectedSubject(sub)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                        currentSubject === sub
                          ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Date Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                  <CalendarIcon className="w-3.5 h-3.5 text-brand-teal" />
                  2. Choose Date
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {datesAvailable.map(item => (
                    <button
                      type="button"
                      key={item.date}
                      onClick={() => setSelectedDate(item.date)}
                      className={`p-2 rounded-xl text-center border text-xs font-semibold transition ${
                        selectedDate === item.date
                          ? 'bg-blue-50 border-brand-blue text-brand-blue shadow-xs font-bold'
                          : 'bg-slate-50/70 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <div className="text-[10px] text-slate-400 font-medium">{item.label}</div>
                      <div className="mt-0.5 truncate">{item.date.split(',')[1]?.trim() || item.date}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Available Slot & Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-teal" />
                    3. Available Time Slot
                  </label>
                  <select
                    value={selectedTime}
                    onChange={e => setSelectedTime(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Coaching Duration
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDuration(60)}
                      className={`py-2 rounded-xl text-xs font-bold border transition ${
                        duration === 60
                          ? 'bg-brand-navy text-white border-brand-navy'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      60 Mins
                    </button>
                    <button
                      type="button"
                      onClick={() => setDuration(90)}
                      className={`py-2 rounded-xl text-xs font-bold border transition ${
                        duration === 90
                          ? 'bg-brand-navy text-white border-brand-navy'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      90 Mins (+50%)
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 4: Student Details & Notes */}
              <div className="space-y-2 pt-1 border-t border-slate-100">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Student Name
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={e => setStudentName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Contact Phone
                    </label>
                    <input
                      type="text"
                      required
                      value={studentPhone}
                      onChange={e => setStudentPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Specific Learning Goal or Doubt Description
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder="e.g. Chapter 4 numericals, board exam revision..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  />
                </div>
              </div>

              {/* Price Breakdown & CTA */}
              <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 flex items-center justify-between mt-3">
                <div>
                  <div className="text-[11px] font-medium text-slate-500">
                    Calculated Session Fee ({duration}m)
                  </div>
                  <div className="text-xl font-black text-brand-navy">
                    ₹{calculatedFee.toLocaleString('en-IN')}
                    <span className="text-xs font-normal text-slate-500"> (Demo Checkout)</span>
                  </div>
                </div>

                <div className="text-right flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Free demo trial</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-brand-navy text-white font-bold text-sm hover:bg-brand-blue shadow-lg hover:shadow-brand-blue/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Confirm Demo Booking</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-center text-slate-400">
                🔒 Safe Prototype Mode: No real payment or card required. Sessions are stored in your active prototype state.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
