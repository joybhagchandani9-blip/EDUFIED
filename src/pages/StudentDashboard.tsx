import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Layers, 
  Users, 
  Heart, 
  Video, 
  CheckCircle2, 
  ExternalLink, 
  BookOpen, 
  ArrowRight,
  Sparkles,
  Settings,
  GraduationCap,
  XCircle,
  FileText
} from 'lucide-react';
import { TeacherBookingModal } from '../components/teachers/TeacherBookingModal';
import { Teacher } from '../types';

export const StudentDashboard: React.FC = () => {
  const { 
    user, 
    bookings, 
    cancelBooking, 
    enrollments, 
    teachers, 
    savedTeacherIds, 
    toggleSaveTeacher 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'sessions' | 'batches' | 'saved' | 'history' | 'settings'>('overview');
  const [selectedTeacherForBooking, setSelectedTeacherForBooking] = useState<Teacher | null>(null);

  // Saved teachers list
  const savedTeachersList = teachers.filter(t => savedTeacherIds.includes(t.id));

  // Active bookings (Confirmed)
  const activeBookings = bookings.filter(b => b.status === 'Confirmed');

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-brand-navy via-brand-navyLight to-brand-blue rounded-3xl p-6 sm:p-8 text-white shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'}
              alt={user?.name || 'Student'}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-white/80 shadow-md"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-teal text-slate-900">
                  Student Portal
                </span>
                <span className="text-xs text-slate-300 font-medium">{user?.grade || 'Class 12'}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Welcome back, {user?.name || 'Devansh'}!
              </h1>
              <p className="text-xs text-slate-200 mt-0.5">
                Keep up the momentum. You have {activeBookings.length} upcoming 1-on-1 session and {enrollments.length} active batch.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/teachers"
              className="px-4 py-2.5 rounded-xl bg-white text-brand-navy font-bold text-xs hover:bg-slate-100 transition shadow-sm"
            >
              Book New Session
            </Link>
            <Link
              to="/batches"
              className="px-4 py-2.5 rounded-xl bg-brand-teal text-slate-950 font-bold text-xs hover:bg-white transition shadow-sm"
            >
              Explore Batches
            </Link>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('sessions')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'sessions'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-brand-blue" />
            <span>Upcoming Sessions ({activeBookings.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('batches')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'batches'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-brand-teal" />
            <span>Enrolled Batches ({enrollments.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'saved'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>Saved Teachers ({savedTeachersList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'history'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>Booking History ({bookings.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'settings'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Settings className="w-3.5 h-3.5 text-slate-400" />
            <span>Settings</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: OVERVIEW */}
        {/* ========================================================================= */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Confirmed Sessions</div>
                  <div className="text-2xl font-black text-slate-900 mt-1">{activeBookings.length}</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Active Batches</div>
                  <div className="text-2xl font-black text-slate-900 mt-1">{enrollments.length}</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-brand-teal flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Shortlisted Tutors</div>
                  <div className="text-2xl font-black text-slate-900 mt-1">{savedTeachersList.length}</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Hours Completed</div>
                  <div className="text-2xl font-black text-slate-900 mt-1">14.5 hrs</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Next Upcoming Session Highlight */}
            {activeBookings.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-subtle space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    Next Scheduled 1-on-1 Session
                  </h3>
                  <button
                    onClick={() => setActiveTab('sessions')}
                    className="text-xs font-bold text-brand-blue hover:underline"
                  >
                    View All ({activeBookings.length})
                  </button>
                </div>

                <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={activeBookings[0].teacherAvatar}
                      alt={activeBookings[0].teacherName}
                      className="w-12 h-12 rounded-xl object-cover border border-white shadow-xs"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-brand-navy text-white">
                          {activeBookings[0].subject}
                        </span>
                        <span className="text-xs font-bold text-slate-900">{activeBookings[0].teacherName}</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 font-medium flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-blue" />
                        {activeBookings[0].date} • {activeBookings[0].timeSlot} ({activeBookings[0].durationMinutes} mins)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <a
                      href={activeBookings[0].meetingLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-brand-navy text-white font-bold text-xs hover:bg-brand-blue transition flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Video className="w-3.5 h-3.5 text-brand-teal" />
                      <span>Join Live Room</span>
                    </a>
                    <button
                      onClick={() => cancelBooking(activeBookings[0].id)}
                      className="px-3 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-rose-600 text-xs font-semibold hover:bg-white transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Enrolled Batches Snapshot */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-subtle space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">
                  Enrolled Learning Batches
                </h3>
                <button
                  onClick={() => setActiveTab('batches')}
                  className="text-xs font-bold text-brand-blue hover:underline"
                >
                  Manage Batches
                </button>
              </div>

              {enrollments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {enrollments.map(enr => (
                    <div key={enr.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-brand-teal text-slate-900">
                            {enr.subject}
                          </span>
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            {enr.status}
                          </span>
                        </div>
                        <h4 className="font-bold text-sm text-slate-900 mt-2">
                          {enr.batchTitle}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                          <span>Educator: {enr.teacherName}</span>
                          <span>•</span>
                          <span>{enr.scheduleTime}</span>
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                        <span className="text-xs font-semibold text-slate-700">Starts {enr.startDate}</span>
                        <a
                          href={enr.classroomLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-bold text-brand-blue flex items-center gap-1 hover:underline"
                        >
                          Classroom Portal
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-slate-400 text-xs">
                  No active batch enrollments yet. <Link to="/batches" className="text-brand-blue font-bold">Explore group batches</Link>.
                </div>
              )}
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: UPCOMING SESSIONS */}
        {/* ========================================================================= */}
        {activeTab === 'sessions' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="text-xl font-black text-slate-900">Your 1-on-1 Coaching Schedule</h3>
            
            {activeBookings.length > 0 ? (
              <div className="space-y-3">
                {activeBookings.map(bk => (
                  <div key={bk.id} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <img src={bk.teacherAvatar} alt={bk.teacherName} className="w-14 h-14 rounded-2xl object-cover border border-slate-200" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-100 text-brand-navy">
                            {bk.subject}
                          </span>
                          <span className="text-xs font-bold text-slate-900">{bk.teacherName}</span>
                          <span className="text-[10px] text-slate-400">Ref: {bk.id}</span>
                        </div>
                        <p className="text-xs font-semibold text-slate-700 mt-1">
                          {bk.date} • {bk.timeSlot} ({bk.durationMinutes} mins)
                        </p>
                        {bk.notes && (
                          <p className="text-[11px] text-slate-500 mt-0.5 italic">“{bk.notes}”</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                      <a
                        href={bk.meetingLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-brand-navy text-white font-bold text-xs hover:bg-brand-blue transition flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <Video className="w-3.5 h-3.5 text-brand-teal" />
                        <span>Launch Virtual Room</span>
                      </a>
                      <button
                        onClick={() => cancelBooking(bk.id)}
                        className="px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-rose-600 hover:bg-rose-50 transition"
                      >
                        Cancel Session
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-3">
                <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
                <h4 className="text-base font-bold text-slate-800">No upcoming 1-on-1 sessions</h4>
                <p className="text-xs text-slate-500">Book dedicated hours with verified educators in any subject.</p>
                <Link to="/teachers" className="inline-block px-4 py-2.5 rounded-xl bg-brand-navy text-white font-bold text-xs">
                  Find a Teacher
                </Link>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: ENROLLED BATCHES */}
        {/* ========================================================================= */}
        {activeTab === 'batches' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="text-xl font-black text-slate-900">Your Enrolled Batches</h3>
            
            {enrollments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrollments.map(enr => (
                  <div key={enr.id} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-subtle flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-brand-teal text-slate-900">
                          {enr.subject}
                        </span>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          Enrolled: {enr.enrolledAt}
                        </span>
                      </div>
                      <h4 className="font-bold text-base text-slate-900 mt-3 leading-snug">
                        {enr.batchTitle}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        Mentor: <strong>{enr.teacherName}</strong>
                      </p>
                      <div className="mt-3 p-3 bg-slate-50 rounded-xl text-xs space-y-1">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Live Timing:</span>
                          <span className="font-bold text-slate-800">{enr.scheduleTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Start Date:</span>
                          <span className="font-bold text-slate-800">{enr.startDate}</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={enr.classroomLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-brand-navy text-white text-xs font-bold text-center hover:bg-brand-blue transition flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Video className="w-3.5 h-3.5 text-brand-teal" />
                      <span>Open Batch Classroom</span>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-3">
                <Layers className="w-12 h-12 text-slate-300 mx-auto" />
                <h4 className="text-base font-bold text-slate-800">You haven't joined any batch yet</h4>
                <p className="text-xs text-slate-500">Join small cohorts with top educators and weekly mock reviews.</p>
                <Link to="/batches" className="inline-block px-4 py-2.5 rounded-xl bg-brand-navy text-white font-bold text-xs">
                  Browse Batches
                </Link>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: SAVED TEACHERS */}
        {/* ========================================================================= */}
        {activeTab === 'saved' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="text-xl font-black text-slate-900">Your Shortlisted Educators</h3>
            
            {savedTeachersList.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedTeachersList.map(teacher => (
                  <div key={teacher.id} className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-subtle flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <img src={teacher.avatar} alt={teacher.name} className="w-14 h-14 rounded-2xl object-cover border border-slate-200" />
                        <button
                          onClick={() => toggleSaveTeacher(teacher.id)}
                          className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 transition"
                          title="Remove from saved"
                        >
                          <Heart className="w-4 h-4 fill-rose-500" />
                        </button>
                      </div>

                      <h4 className="font-bold text-base text-slate-900 mt-3">{teacher.name}</h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{teacher.title}</p>
                      
                      <div className="flex flex-wrap gap-1 mt-2.5">
                        {teacher.subjects.map(s => (
                          <span key={s} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-brand-navy">
                            {s}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs text-slate-600 mt-2 line-clamp-2">{teacher.bio}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-sm font-black text-slate-900">
                        ₹{teacher.hourlyRate}<span className="text-[10px] text-slate-500 font-normal"> /hr</span>
                      </div>
                      <button
                        onClick={() => setSelectedTeacherForBooking(teacher)}
                        className="px-3.5 py-2 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-blue transition"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-3">
                <Heart className="w-12 h-12 text-slate-300 mx-auto" />
                <h4 className="text-base font-bold text-slate-800">No saved teachers yet</h4>
                <p className="text-xs text-slate-500">Tap the heart icon on any teacher card to shortlist them for easy booking.</p>
                <Link to="/teachers" className="inline-block px-4 py-2.5 rounded-xl bg-brand-navy text-white font-bold text-xs">
                  Explore Teachers
                </Link>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: BOOKING HISTORY */}
        {/* ========================================================================= */}
        {activeTab === 'history' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="text-xl font-black text-slate-900">Complete Booking & Enrollment Records</h3>
            
            <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-subtle">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-bold text-[10px]">
                  <tr>
                    <th className="p-4">Reference</th>
                    <th className="p-4">Type</th>
                    <th className="p-4">Educator / Title</th>
                    <th className="p-4">Date / Schedule</th>
                    <th className="p-4">Demo Fee</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {bookings.map(b => (
                    <tr key={b.id} className="hover:bg-slate-50/50">
                      <td className="p-4 font-mono font-bold text-slate-800">{b.id}</td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-brand-blue">
                          1-on-1 Coaching
                        </span>
                      </td>
                      <td className="p-4 font-semibold text-slate-900">{b.teacherName} ({b.subject})</td>
                      <td className="p-4 text-slate-600">{b.date} • {b.timeSlot}</td>
                      <td className="p-4 font-bold text-slate-900">₹{b.fee}</td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          b.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {b.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {enrollments.map(enr => (
                    <tr key={enr.id} className="hover:bg-slate-50/50">
                      <td className="p-4 font-mono font-bold text-slate-800">{enr.id}</td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-50 text-brand-tealDark">
                          Group Batch
                        </span>
                      </td>
                      <td className="p-4 font-semibold text-slate-900">{enr.batchTitle}</td>
                      <td className="p-4 text-slate-600">{enr.scheduleTime}</td>
                      <td className="p-4 font-bold text-slate-900">₹{enr.feePaid}</td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          {enr.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: SETTINGS */}
        {/* ========================================================================= */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle max-w-2xl space-y-5 animate-in fade-in duration-200">
            <h3 className="text-xl font-black text-slate-900">Student Profile Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.name || 'Devansh Kapur'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue={user?.email || 'devansh.student@edufied.demo'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Target Academic Class & Goals
                </label>
                <input
                  type="text"
                  defaultValue={user?.grade || 'Class 12 (CBSE & JEE Main 2026)'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
                />
              </div>

              <button
                type="button"
                className="px-6 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-blue transition"
              >
                Save Preferences (Demo)
              </button>
            </div>
          </div>
        )}

        {/* Booking Modal */}
        <TeacherBookingModal
          teacher={selectedTeacherForBooking}
          isOpen={Boolean(selectedTeacherForBooking)}
          onClose={() => setSelectedTeacherForBooking(null)}
        />

      </div>
    </div>
  );
};
