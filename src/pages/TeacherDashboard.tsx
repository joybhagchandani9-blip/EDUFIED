import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Award, 
  Calendar, 
  Clock, 
  Layers, 
  Users, 
  PlusCircle, 
  DollarSign, 
  CheckCircle2, 
  Settings, 
  Video, 
  Sparkles,
  TrendingUp,
  FileText,
  MessageSquare,
  X,
  ExternalLink
} from 'lucide-react';

export const TeacherDashboard: React.FC = () => {
  const { user, batches, addCustomBatch, bookings } = useApp();

  const [activeTab, setActiveTab] = useState<'overview' | 'batches' | 'sessions' | 'createBatch' | 'schedule' | 'earnings'>('overview');

  // New Batch Form State
  const [newBatchTitle, setNewBatchTitle] = useState('');
  const [newBatchSubject, setNewBatchSubject] = useState('Physics');
  const [newBatchGrade, setNewBatchGrade] = useState('Class 12');
  const [newBatchExam, setNewBatchExam] = useState('JEE Main 2026');
  const [newBatchStartDate, setNewBatchStartDate] = useState('Nov 15, 2026');
  const [newBatchDays, setNewBatchDays] = useState('Tue, Thu, Sat');
  const [newBatchTime, setNewBatchTime] = useState('6:00 PM - 7:30 PM IST');
  const [newBatchWeeks, setNewBatchWeeks] = useState(8);
  const [newBatchSeats, setNewBatchSeats] = useState(15);
  const [newBatchFee, setNewBatchFee] = useState(4499);
  const [newBatchDesc, setNewBatchDesc] = useState('Comprehensive problem-solving sprint with weekly graded mock tests.');

  // Availability schedule toggle state
  const [openDays, setOpenDays] = useState({
    Monday: true,
    Tuesday: true,
    Wednesday: true,
    Thursday: true,
    Friday: true,
    Saturday: false,
    Sunday: false
  });

  const handleCreateBatch = (e: React.FormEvent) => {
    e.preventDefault();
    addCustomBatch({
      title: newBatchTitle,
      subject: newBatchSubject,
      grade: newBatchGrade,
      examTarget: newBatchExam,
      startDate: newBatchStartDate,
      scheduleDays: newBatchDays.split(',').map(d => d.trim()),
      scheduleTime: newBatchTime,
      durationWeeks: Number(newBatchWeeks),
      totalSessions: Number(newBatchWeeks) * 3,
      totalSeats: Number(newBatchSeats),
      courseFee: Number(newBatchFee),
      description: newBatchDesc
    });
    // Reset and switch to batches view
    setNewBatchTitle('');
    setActiveTab('batches');
  };

  const toggleDay = (day: keyof typeof openDays) => {
    setOpenDays(prev => ({ ...prev, [day]: !prev[day] }));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Educator Welcome Banner */}
        <div className="bg-gradient-to-r from-brand-navyDark via-brand-navy to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-slate-800">
          <div className="flex items-center gap-4">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}
              alt={user?.name || 'Educator'}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-brand-teal shadow-md"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-teal text-slate-950">
                  Verified Educator Portal
                </span>
                <span className="text-xs text-slate-300 font-medium">Physics & Math</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {user?.name || 'Dr. Rajesh Sharma'}
              </h1>
              <p className="text-xs text-slate-300 mt-0.5">
                Senior Physics Mentor • IIT Roorkee Alum • 12+ Yrs Experience
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveTab('createBatch')}
            className="px-5 py-3 rounded-2xl bg-brand-teal text-slate-950 font-bold text-xs hover:bg-white transition flex items-center gap-2 shadow-lg"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Launch New Group Batch</span>
          </button>
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
            onClick={() => setActiveTab('batches')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'batches'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-brand-blue" />
            <span>Active Batches ({batches.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('sessions')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'sessions'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-brand-teal" />
            <span>1-on-1 Sessions ({bookings.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('createBatch')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'createBatch'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <PlusCircle className="w-3.5 h-3.5 text-brand-teal" />
            <span>Create New Batch</span>
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'schedule'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Schedule Settings</span>
          </button>

          <button
            onClick={() => setActiveTab('earnings')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'earnings'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
            <span>Earnings (Demo)</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: OVERVIEW */}
        {/* ========================================================================= */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Demo Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Demo Monthly Revenue</div>
                <div className="text-2xl font-black text-slate-900 mt-1">₹95,990</div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+18% from last month (Demo)</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Active Batches</div>
                <div className="text-2xl font-black text-slate-900 mt-1">{batches.length}</div>
                <div className="text-[10px] text-slate-500 mt-1">Across Class 11, 12 & Droppers</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Active Students</div>
                <div className="text-2xl font-black text-slate-900 mt-1">42</div>
                <div className="text-[10px] text-slate-500 mt-1">Batches & 1-on-1 combined</div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Educator Rating</div>
                <div className="text-2xl font-black text-amber-500 mt-1">4.95 ★</div>
                <div className="text-[10px] text-slate-500 mt-1">Based on 142 reviews (Demo)</div>
              </div>
            </div>

            {/* Quick Action & Inquiries */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Upcoming 1-on-1 Sessions */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-subtle space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-slate-900">
                    Upcoming 1-on-1 Teaching Sessions
                  </h3>
                  <button
                    onClick={() => setActiveTab('sessions')}
                    className="text-xs font-bold text-brand-blue hover:underline"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-3">
                  {bookings.slice(0, 2).map(b => (
                    <div key={b.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-100 text-brand-navy">
                            {b.subject}
                          </span>
                          <span className="text-xs font-bold text-slate-900">Student: {b.studentName}</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 flex items-center gap-1.5 font-medium">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {b.date} • {b.timeSlot} ({b.durationMinutes} mins)
                        </p>
                      </div>

                      <a
                        href={b.meetingLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-blue transition flex items-center gap-1 shadow-sm shrink-0"
                      >
                        <Video className="w-3 h-3 text-brand-teal" />
                        <span>Start Class</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Inquiries / Notifications */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-subtle space-y-4">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-brand-teal" />
                  Recent Student Inquiries (Demo)
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3.5 bg-blue-50/60 rounded-2xl border border-blue-100">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Aarav M. (Class 12)</span>
                      <span className="text-[10px] text-slate-400 font-normal">2h ago</span>
                    </div>
                    <p className="text-slate-600 mt-1">
                      “Sir, does your upcoming Mechanics batch cover rotational collision problems from JEE 2024?”
                    </p>
                  </div>

                  <div className="p-3.5 bg-teal-50/60 rounded-2xl border border-teal-100">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Meera K. (Parent)</span>
                      <span className="text-[10px] text-slate-400 font-normal">Yesterday</span>
                    </div>
                    <p className="text-slate-600 mt-1">
                      “Interested in booking a weekly 2-hour 1-on-1 slot for my son in Class 11 Physics.”
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: ACTIVE BATCHES */}
        {/* ========================================================================= */}
        {activeTab === 'batches' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-slate-900">Batches Created by You</h3>
              <button
                onClick={() => setActiveTab('createBatch')}
                className="px-4 py-2 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-blue transition flex items-center gap-1.5 shadow-sm"
              >
                <PlusCircle className="w-3.5 h-3.5 text-brand-teal" />
                <span>Launch New Batch</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {batches.map(batch => (
                <div key={batch.id} className="bg-white rounded-3xl border border-slate-200/80 shadow-subtle p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-brand-teal text-slate-950">
                        {batch.subject}
                      </span>
                      <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                        {batch.availableSeats} seats open
                      </span>
                    </div>

                    <h4 className="font-bold text-base text-slate-900 mt-2.5 leading-snug">
                      {batch.title}
                    </h4>

                    <div className="mt-3 p-3 bg-slate-50 rounded-xl text-xs space-y-1.5 text-slate-600">
                      <div className="flex justify-between">
                        <span>Schedule:</span>
                        <span className="font-bold text-slate-800">{batch.scheduleDays.join(', ')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-bold text-slate-800">{batch.scheduleTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-bold text-slate-800">{batch.durationWeeks} Wks ({batch.totalSessions} Classes)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase text-slate-400 font-bold">Course Fee</div>
                      <div className="text-base font-black text-slate-900">₹{batch.courseFee.toLocaleString('en-IN')}</div>
                    </div>
                    <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs">
                      Active Cohort
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: 1-ON-1 SESSIONS */}
        {/* ========================================================================= */}
        {activeTab === 'sessions' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <h3 className="text-xl font-black text-slate-900">Your Student Coaching Sessions</h3>

            <div className="space-y-3">
              {bookings.map(b => (
                <div key={b.id} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-100 text-brand-navy">
                        {b.subject}
                      </span>
                      <span className="font-bold text-sm text-slate-900">{b.studentName}</span>
                      <span className="text-xs text-slate-400">Ref: {b.id}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-brand-blue" />
                      <span>{b.date} • {b.timeSlot} ({b.durationMinutes} mins)</span>
                      <span>•</span>
                      <span className="font-bold text-emerald-700">₹{b.fee} (Paid)</span>
                    </p>
                    {b.notes && (
                      <p className="text-[11px] text-slate-500 mt-1 italic">Doubt Note: “{b.notes}”</p>
                    )}
                  </div>

                  <a
                    href={b.meetingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-blue transition flex items-center gap-1.5 shadow-sm"
                  >
                    <Video className="w-3.5 h-3.5 text-brand-teal" />
                    <span>Open Class Link</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: CREATE BATCH FORM (Directly fulfills Section 8 requirement) */}
        {/* ========================================================================= */}
        {activeTab === 'createBatch' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-card max-w-3xl space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-teal bg-teal-50 px-2.5 py-0.5 rounded-full">
                Interactive Form
              </span>
              <h3 className="text-2xl font-black text-brand-navy mt-1">
                Launch a New Group Batch
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Submitting this form immediately adds your batch to the live catalog and dashboards.
              </p>
            </div>

            <form onSubmit={handleCreateBatch} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Batch Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Class 12 Electrostatics & Current Electricity Sprint"
                  value={newBatchTitle}
                  onChange={e => setNewBatchTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-brand-blue focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Subject *
                  </label>
                  <select
                    value={newBatchSubject}
                    onChange={e => setNewBatchSubject(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
                  >
                    <option value="Physics">Physics</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="Computer Science">Computer Science</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Target Grade *
                  </label>
                  <input
                    type="text"
                    required
                    value={newBatchGrade}
                    onChange={e => setNewBatchGrade(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Target Exam *
                  </label>
                  <input
                    type="text"
                    required
                    value={newBatchExam}
                    onChange={e => setNewBatchExam(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Start Date
                  </label>
                  <input
                    type="text"
                    value={newBatchStartDate}
                    onChange={e => setNewBatchStartDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Days of Week
                  </label>
                  <input
                    type="text"
                    value={newBatchDays}
                    onChange={e => setNewBatchDays(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Class Time
                  </label>
                  <input
                    type="text"
                    value={newBatchTime}
                    onChange={e => setNewBatchTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Course Duration (Weeks)
                  </label>
                  <input
                    type="number"
                    value={newBatchWeeks}
                    onChange={e => setNewBatchWeeks(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Batch Max Seats
                  </label>
                  <input
                    type="number"
                    value={newBatchSeats}
                    onChange={e => setNewBatchSeats(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Course Fee (₹)
                  </label>
                  <input
                    type="number"
                    value={newBatchFee}
                    onChange={e => setNewBatchFee(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Description & Syllabus Highlights
                </label>
                <textarea
                  rows={3}
                  value={newBatchDesc}
                  onChange={e => setNewBatchDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-brand-navy text-white font-bold text-xs hover:bg-brand-blue shadow-md transition flex items-center justify-center gap-2"
              >
                <PlusCircle className="w-4 h-4 text-brand-teal" />
                <span>Publish Batch to Platform</span>
              </button>
            </form>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: SCHEDULE SETTINGS */}
        {/* ========================================================================= */}
        {activeTab === 'schedule' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle max-w-2xl space-y-6 animate-in fade-in duration-200">
            <h3 className="text-xl font-black text-slate-900">Weekly Availability Schedule</h3>
            <p className="text-xs text-slate-500">
              Toggle the days you accept 1-on-1 coaching bookings. Slots are automatically made visible on your public teacher profile.
            </p>

            <div className="space-y-3">
              {(Object.keys(openDays) as Array<keyof typeof openDays>).map(day => (
                <div key={day} className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="font-bold text-xs text-slate-800">{day}</span>
                  <button
                    onClick={() => toggleDay(day)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${
                      openDays[day]
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {openDays[day] ? 'Open (5 PM - 8 PM)' : 'Closed'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 6: EARNINGS DEMO */}
        {/* ========================================================================= */}
        {activeTab === 'earnings' && (
          <div className="space-y-6 animate-in fade-in duration-200 max-w-3xl">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-subtle space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Sample Earnings Summary (Demo Data)
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">₹95,990</h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                  Payouts Demo Ready
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-slate-500">1-on-1 Coaching Revenue</div>
                  <div className="text-lg font-bold text-slate-900 mt-1">₹36,000</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">30 hours delivered @ ₹1,200/hr</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-slate-500">Batch Cohort Enrollment</div>
                  <div className="text-lg font-bold text-slate-900 mt-1">₹59,990</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">10 students in JEE Physics Sprint</div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 italic">
                * Note: All financial numbers and payout metrics shown here are simulated prototype placeholders for demonstration purposes only.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
