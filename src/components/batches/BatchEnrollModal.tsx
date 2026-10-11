import React, { useState } from 'react';
import { Batch, Enrollment } from '../../types';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink,
  Users,
  Video
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BatchEnrollModalProps {
  batch: Batch | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BatchEnrollModal: React.FC<BatchEnrollModalProps> = ({
  batch,
  isOpen,
  onClose
}) => {
  const { user, createEnrollment } = useApp();
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState<string>(user?.name || 'Devansh Kapur');
  const [studentEmail, setStudentEmail] = useState<string>(user?.email || 'devansh.student@edufied.demo');
  const [studentPhone, setStudentPhone] = useState<string>(user?.phone || '+91 98765 43210');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  
  const [enrollmentConfirmed, setEnrollmentConfirmed] = useState<Enrollment | null>(null);

  if (!isOpen || !batch) return null;

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    const result = createEnrollment({
      batchId: batch.id,
      batchTitle: batch.title,
      teacherName: batch.teacherName,
      teacherAvatar: batch.teacherAvatar,
      subject: batch.subject,
      scheduleTime: `${batch.scheduleDays.join(', ')} • ${batch.scheduleTime}`,
      startDate: batch.startDate,
      feePaid: batch.courseFee,
      studentName,
      studentEmail,
      studentPhone
    });
    setEnrollmentConfirmed(result);
  };

  const handleClose = () => {
    setEnrollmentConfirmed(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-navyDark text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-teal text-slate-900">
              Interactive Batch Enrollment
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/10 text-slate-200">
              {batch.badgeStatus}
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-white mt-2 leading-snug">
            {batch.title}
          </h2>
          <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
            <span>Conducted by {batch.teacherName}</span>
            <span>•</span>
            <span>{batch.durationWeeks} Weeks ({batch.totalSessions} Live Classes)</span>
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {enrollmentConfirmed ? (
            /* Confirmation Screen */
            <div className="text-center py-3 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-4 border-emerald-100 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full mb-1.5">
                  Demo Seat Confirmed
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Welcome to the Batch!
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                  Your seat in {batch.title} is now reserved. You will receive batch updates and session reminders in your student portal.
                </p>
              </div>

              {/* Enrollment Summary */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left text-xs space-y-2">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Enrollment ID:</span>
                  <span className="font-mono font-bold text-slate-800">{enrollmentConfirmed.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Batch Start Date:</span>
                  <span className="font-bold text-slate-900">{enrollmentConfirmed.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Class Timings:</span>
                  <span className="font-semibold text-brand-navy">{enrollmentConfirmed.scheduleTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Demo Amount Paid:</span>
                  <span className="font-bold text-emerald-700">₹{enrollmentConfirmed.feePaid.toLocaleString('en-IN')} (Completed)</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                  <span className="text-slate-500">Virtual Classroom:</span>
                  <a
                    href={enrollmentConfirmed.classroomLink}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-brand-blue flex items-center gap-1 hover:underline"
                  >
                    Open Classroom Portal
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleClose}
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleClose();
                    navigate('/student/dashboard');
                  }}
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs bg-brand-navy text-white hover:bg-brand-blue transition flex items-center justify-center gap-1.5 shadow-md"
                >
                  Go to Student Dashboard
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Enrollment Form */
            <form onSubmit={handleEnroll} className="space-y-4">
              
              {/* Batch Meta Highlight */}
              <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-teal" />
                  <div>
                    <div className="text-[10px] text-slate-400">Batch Starts</div>
                    <div className="font-bold text-slate-800">{batch.startDate}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-blue" />
                  <div>
                    <div className="text-[10px] text-slate-400">Live Timing</div>
                    <div className="font-bold text-slate-800">{batch.scheduleDays.join(', ')}</div>
                  </div>
                </div>
              </div>

              {/* Student Information Fields */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Student Enrollment Details
                </h4>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Student Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={e => setStudentName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={studentEmail}
                      onChange={e => setStudentEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={studentPhone}
                      onChange={e => setStudentPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-brand-blue focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Demo Payment Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select Demo Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-2.5 rounded-xl border text-center text-xs font-bold transition ${
                      paymentMethod === 'upi'
                        ? 'bg-blue-50 border-brand-blue text-brand-blue shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    UPI / QR (Demo)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2.5 rounded-xl border text-center text-xs font-bold transition ${
                      paymentMethod === 'card'
                        ? 'bg-blue-50 border-brand-blue text-brand-blue shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Card (Demo)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('netbanking')}
                    className={`p-2.5 rounded-xl border text-center text-xs font-bold transition ${
                      paymentMethod === 'netbanking'
                        ? 'bg-blue-50 border-brand-blue text-brand-blue shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    NetBanking (Demo)
                  </button>
                </div>
              </div>

              {/* Total Fee & Safe notice */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">Total Enrollment Fee</div>
                  <div className="text-2xl font-black text-slate-900">
                    ₹{batch.courseFee.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1 justify-end">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Demo Simulation</span>
                  </div>
                  <div className="text-[10px] text-slate-400">100% money-back satisfaction policy</div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-brand-navy text-white font-bold text-sm hover:bg-brand-blue shadow-lg hover:shadow-brand-blue/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Confirm & Complete Demo Enrollment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Notice: This is a prototype checkout. No credit card or real financial transaction is processed.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
