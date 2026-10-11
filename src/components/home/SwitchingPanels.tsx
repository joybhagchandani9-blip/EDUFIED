import React, { useState, useMemo } from 'react';
import { Teacher, Batch } from '../../types';
import { TeacherCard } from '../teachers/TeacherCard';
import { BatchCard } from '../batches/BatchCard';
import { 
  Users, 
  Layers, 
  Search, 
  Filter, 
  SlidersHorizontal, 
  RotateCcw, 
  Check, 
  Sparkles,
  Calendar,
  DollarSign,
  GraduationCap
} from 'lucide-react';

interface SwitchingPanelsProps {
  activeTab: '1-on-1' | 'batches';
  onTabChange: (tab: '1-on-1' | 'batches') => void;
  teachers: Teacher[];
  batches: Batch[];
  onBookTeacher: (teacher: Teacher) => void;
  onViewTeacher: (teacher: Teacher) => void;
  onJoinBatch: (batch: Batch) => void;
  onViewBatch: (batch: Batch) => void;
  initialSearchSubject?: string;
  initialSearchGrade?: string;
  initialSearchLocation?: string;
}

export const SwitchingPanels: React.FC<SwitchingPanelsProps> = ({
  activeTab,
  onTabChange,
  teachers,
  batches,
  onBookTeacher,
  onViewTeacher,
  onJoinBatch,
  onViewBatch,
  initialSearchSubject = '',
  initialSearchGrade = '',
  initialSearchLocation = ''
}) => {
  // Panel 1: 1-on-1 Filter States (Preserved across switches)
  const [teacherSearch, setTeacherSearch] = useState(initialSearchSubject);
  const [teacherSubject, setTeacherSubject] = useState('All');
  const [teacherGrade, setTeacherGrade] = useState(initialSearchGrade || 'All');
  const [teacherExam, setTeacherExam] = useState('All');
  const [teacherBudget, setTeacherBudget] = useState('All');
  const [teacherExp, setTeacherExp] = useState('All');
  const [teacherMode, setTeacherMode] = useState(initialSearchLocation || 'All');
  const [teacherSort, setTeacherSort] = useState<'recommended' | 'rating' | 'priceAsc' | 'exp'>('recommended');

  // Panel 2: Batches Filter States (Preserved across switches)
  const [batchSearch, setBatchSearch] = useState(initialSearchSubject);
  const [batchSubject, setBatchSubject] = useState('All');
  const [batchExam, setBatchExam] = useState('All');
  const [batchPriceRange, setBatchPriceRange] = useState('All');
  const [batchStatus, setBatchStatus] = useState('All');
  const [batchSort, setBatchSort] = useState<'startDate' | 'priceAsc' | 'seatsLeft'>('startDate');

  // Mobile filters drawer toggle
  const [showFilters, setShowFilters] = useState(false);

  // Filtered Teachers
  const filteredTeachers = useMemo(() => {
    return teachers.filter(t => {
      // Search keyword
      if (teacherSearch) {
        const q = teacherSearch.toLowerCase();
        const matchesName = t.name.toLowerCase().includes(q);
        const matchesSub = t.subjects.some(s => s.toLowerCase().includes(q));
        const matchesExam = t.examPrep.some(e => e.toLowerCase().includes(q));
        if (!matchesName && !matchesSub && !matchesExam) return false;
      }

      // Subject
      if (teacherSubject !== 'All' && !t.subjects.includes(teacherSubject)) {
        return false;
      }

      // Grade
      if (teacherGrade !== 'All') {
        const matchesGrade = t.grades.some(g => g.toLowerCase().includes(teacherGrade.toLowerCase())) ||
          t.examPrep.some(e => e.toLowerCase().includes(teacherGrade.toLowerCase()));
        if (!matchesGrade) return false;
      }

      // Exam
      if (teacherExam !== 'All' && !t.examPrep.some(e => e.toLowerCase().includes(teacherExam.toLowerCase()))) {
        return false;
      }

      // Budget
      if (teacherBudget === 'under900' && t.hourlyRate > 900) return false;
      if (teacherBudget === '900to1200' && (t.hourlyRate < 900 || t.hourlyRate > 1200)) return false;
      if (teacherBudget === 'above1200' && t.hourlyRate < 1200) return false;

      // Experience
      if (teacherExp === '5plus' && t.experienceYears < 5) return false;
      if (teacherExp === '8plus' && t.experienceYears < 8) return false;
      if (teacherExp === '10plus' && t.experienceYears < 10) return false;

      // Mode
      if (teacherMode !== 'All' && teacherMode !== '') {
        if (teacherMode === 'Online' && t.mode !== 'Online' && t.mode !== 'Both') return false;
        if (teacherMode !== 'Online' && !t.location.toLowerCase().includes(teacherMode.toLowerCase())) return false;
      }

      return true;
    }).sort((a, b) => {
      if (teacherSort === 'rating') return b.rating - a.rating;
      if (teacherSort === 'priceAsc') return a.hourlyRate - b.hourlyRate;
      if (teacherSort === 'exp') return b.experienceYears - a.experienceYears;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [teachers, teacherSearch, teacherSubject, teacherGrade, teacherExam, teacherBudget, teacherExp, teacherMode, teacherSort]);

  // Filtered Batches
  const filteredBatches = useMemo(() => {
    return batches.filter(b => {
      if (batchSearch) {
        const q = batchSearch.toLowerCase();
        const matchesTitle = b.title.toLowerCase().includes(q);
        const matchesSub = b.subject.toLowerCase().includes(q);
        const matchesTeacher = b.teacherName.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSub && !matchesTeacher) return false;
      }

      if (batchSubject !== 'All' && b.subject !== batchSubject) return false;
      if (batchExam !== 'All' && !b.examTarget.toLowerCase().includes(batchExam.toLowerCase())) return false;
      
      if (batchPriceRange === 'under4000' && b.courseFee > 4000) return false;
      if (batchPriceRange === '4000to6000' && (b.courseFee < 4000 || b.courseFee > 6000)) return false;
      if (batchPriceRange === 'above6000' && b.courseFee < 6000) return false;

      if (batchStatus !== 'All' && b.badgeStatus !== batchStatus) return false;

      return true;
    }).sort((a, b) => {
      if (batchSort === 'priceAsc') return a.courseFee - b.courseFee;
      if (batchSort === 'seatsLeft') return a.availableSeats - b.availableSeats;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [batches, batchSearch, batchSubject, batchExam, batchPriceRange, batchStatus, batchSort]);

  const resetTeacherFilters = () => {
    setTeacherSearch('');
    setTeacherSubject('All');
    setTeacherGrade('All');
    setTeacherExam('All');
    setTeacherBudget('All');
    setTeacherExp('All');
    setTeacherMode('All');
  };

  const resetBatchFilters = () => {
    setBatchSearch('');
    setBatchSubject('All');
    setBatchExam('All');
    setBatchPriceRange('All');
    setBatchStatus('All');
  };

  return (
    <section id="learning-panels-section" className="py-14 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-label */}
        <div className="text-center space-y-2 mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest bg-blue-100 text-brand-navy border border-blue-200/80">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            CHOOSE YOUR LEARNING STYLE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Tailored 1-on-1 or Collaborative Batches
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Switch between individual attention with personalized tutors or structured cohorts with top peers.
          </p>
        </div>

        {/* TWO LARGE SELECTABLE TABS (The core switching control) */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-2 bg-white rounded-3xl border border-slate-200/80 shadow-card">
            
            {/* Tab 1: 1-on-1 Coaching */}
            <button
              onClick={() => onTabChange('1-on-1')}
              className={`p-5 rounded-2xl text-left transition-all duration-300 relative flex items-start gap-4 ${
                activeTab === '1-on-1'
                  ? 'bg-gradient-to-r from-brand-navy to-brand-navyLight text-white shadow-xl shadow-brand-navy/25 ring-2 ring-brand-blue/30 scale-[1.01]'
                  : 'bg-slate-50/70 hover:bg-slate-100 text-slate-800'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                activeTab === '1-on-1' ? 'bg-brand-blue/30 text-brand-teal' : 'bg-white text-brand-navy border border-slate-200'
              }`}>
                <Users className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider ${
                    activeTab === '1-on-1' ? 'text-brand-teal' : 'text-slate-400'
                  }`}>
                    Option 1 • Personalized
                  </span>
                  {activeTab === '1-on-1' && (
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse" />
                  )}
                </div>
                <h3 className={`font-bold text-lg mt-0.5 ${activeTab === '1-on-1' ? 'text-white' : 'text-slate-900'}`}>
                  1-on-1 Coaching
                </h3>
                <p className={`text-xs mt-1 leading-relaxed ${
                  activeTab === '1-on-1' ? 'text-slate-200' : 'text-slate-500'
                }`}>
                  Individual attention, tailored pace, and guidance designed around your personal goals.
                </p>
              </div>
            </button>

            {/* Tab 2: Multiple Batches */}
            <button
              onClick={() => onTabChange('batches')}
              className={`p-5 rounded-2xl text-left transition-all duration-300 relative flex items-start gap-4 ${
                activeTab === 'batches'
                  ? 'bg-gradient-to-r from-brand-navy to-brand-navyLight text-white shadow-xl shadow-brand-navy/25 ring-2 ring-brand-teal/30 scale-[1.01]'
                  : 'bg-slate-50/70 hover:bg-slate-100 text-slate-800'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                activeTab === 'batches' ? 'bg-brand-teal/30 text-brand-teal' : 'bg-white text-brand-navy border border-slate-200'
              }`}>
                <Layers className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider ${
                    activeTab === 'batches' ? 'text-brand-teal' : 'text-slate-400'
                  }`}>
                    Option 2 • Cohort Based
                  </span>
                  {activeTab === 'batches' && (
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse" />
                  )}
                </div>
                <h3 className={`font-bold text-lg mt-0.5 ${activeTab === 'batches' ? 'text-white' : 'text-slate-900'}`}>
                  Structured Batches
                </h3>
                <p className={`text-xs mt-1 leading-relaxed ${
                  activeTab === 'batches' ? 'text-slate-200' : 'text-slate-500'
                }`}>
                  Interactive group lessons, structured weekly syllabus, and a community of motivated peers.
                </p>
              </div>
            </button>

          </div>
        </div>

        {/* DYNAMIC CONTENT AREA */}
        <div className="transition-all duration-300">
          
          {/* ========================================================================= */}
          {/* PANEL 1 CONTENT: 1-ON-1 COACHING */}
          {/* ========================================================================= */}
          {activeTab === '1-on-1' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              
              {/* Header and Filter Control Bar */}
              <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-subtle space-y-4">
                
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      Personalized 1-on-1 Coaching
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Showing {filteredTeachers.length} verified educators matching your preferences.
                    </p>
                  </div>

                  {/* Search input in panel */}
                  <div className="w-full md:w-80 relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search educator or subject..."
                      value={teacherSearch}
                      onChange={e => setTeacherSearch(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                </div>

                {/* Filter chips / selects */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs">
                  
                  {/* Subject filter */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Subject
                    </label>
                    <select
                      value={teacherSubject}
                      onChange={e => setTeacherSubject(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium text-slate-800 focus:outline-none"
                    >
                      <option value="All">All Subjects</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Biology">Biology</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Commerce and Accounting">Commerce</option>
                      <option value="English">English</option>
                    </select>
                  </div>

                  {/* Grade / Exam */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Class / Exam
                    </label>
                    <select
                      value={teacherGrade}
                      onChange={e => setTeacherGrade(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium text-slate-800 focus:outline-none"
                    >
                      <option value="All">All Grades</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10">Class 10</option>
                      <option value="Class 11">Class 11</option>
                      <option value="Class 12">Class 12</option>
                      <option value="JEE">JEE Main / Adv</option>
                      <option value="NEET">NEET Prep</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Hourly Budget
                    </label>
                    <select
                      value={teacherBudget}
                      onChange={e => setTeacherBudget(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium text-slate-800 focus:outline-none"
                    >
                      <option value="All">Any Budget</option>
                      <option value="under900">Under ₹900/hr</option>
                      <option value="900to1200">₹900 - ₹1,200/hr</option>
                      <option value="above1200">₹1,200+/hr</option>
                    </select>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Experience
                    </label>
                    <select
                      value={teacherExp}
                      onChange={e => setTeacherExp(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium text-slate-800 focus:outline-none"
                    >
                      <option value="All">Any Experience</option>
                      <option value="5plus">5+ Years</option>
                      <option value="8plus">8+ Years</option>
                      <option value="10plus">10+ Years</option>
                    </select>
                  </div>

                  {/* Mode / Location */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Mode
                    </label>
                    <select
                      value={teacherMode}
                      onChange={e => setTeacherMode(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium text-slate-800 focus:outline-none"
                    >
                      <option value="All">Online & In-Person</option>
                      <option value="Online">Online Live</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="New Delhi">New Delhi</option>
                    </select>
                  </div>

                  {/* Sort */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Sort By
                    </label>
                    <select
                      value={teacherSort}
                      onChange={e => setTeacherSort(e.target.value as any)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium text-slate-800 focus:outline-none"
                    >
                      <option value="recommended">Recommended</option>
                      <option value="rating">Highest Rated</option>
                      <option value="priceAsc">Price: Low to High</option>
                      <option value="exp">Most Experienced</option>
                    </select>
                  </div>

                </div>

                {/* Reset button if active filters */}
                {(teacherSubject !== 'All' || teacherGrade !== 'All' || teacherBudget !== 'All' || teacherExp !== 'All' || teacherSearch) && (
                  <div className="flex items-center justify-between pt-2 text-xs">
                    <span className="text-slate-400">Custom filters applied</span>
                    <button
                      onClick={resetTeacherFilters}
                      className="text-brand-blue font-bold flex items-center gap-1 hover:underline"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Grid of Teacher Cards */}
              {filteredTeachers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTeachers.map(teacher => (
                    <TeacherCard
                      key={teacher.id}
                      teacher={teacher}
                      onBook={onBookTeacher}
                      onViewProfile={onViewTeacher}
                    />
                  ))}
                </div>
              ) : (
                /* Empty state */
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center mx-auto">
                    <Search className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">No matching educators found</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Try adjusting your filters or resetting your search to view all verified educators on EDUFIED.
                  </p>
                  <button
                    onClick={resetTeacherFilters}
                    className="mt-2 px-5 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-blue transition"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}

            </div>
          )}

          {/* ========================================================================= */}
          {/* PANEL 2 CONTENT: MULTIPLE BATCHES */}
          {/* ========================================================================= */}
          {activeTab === 'batches' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              
              {/* Header and Filter Control Bar */}
              <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-subtle space-y-4">
                
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      Learn Together. Grow Together.
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Join structured coaching batches with expert teachers, interactive lessons, and peer collaboration.
                    </p>
                  </div>

                  {/* Search input in panel */}
                  <div className="w-full md:w-80 relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search batch name, exam or subject..."
                      value={batchSearch}
                      onChange={e => setBatchSearch(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                </div>

                {/* Filter selects for batches */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 text-xs">
                  
                  {/* Subject */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Subject
                    </label>
                    <select
                      value={batchSubject}
                      onChange={e => setBatchSubject(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium text-slate-800 focus:outline-none"
                    >
                      <option value="All">All Subjects</option>
                      <option value="Physics">Physics</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Commerce and Accounting">Commerce</option>
                      <option value="Biology">Biology</option>
                    </select>
                  </div>

                  {/* Target Exam */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Target Exam
                    </label>
                    <select
                      value={batchExam}
                      onChange={e => setBatchExam(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium text-slate-800 focus:outline-none"
                    >
                      <option value="All">All Exams</option>
                      <option value="JEE">JEE Main / Advanced</option>
                      <option value="NEET">NEET Medical</option>
                      <option value="Board">CBSE / State Boards</option>
                      <option value="Coding">Coding & AI</option>
                    </select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Course Fee Range
                    </label>
                    <select
                      value={batchPriceRange}
                      onChange={e => setBatchPriceRange(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium text-slate-800 focus:outline-none"
                    >
                      <option value="All">Any Price</option>
                      <option value="under4000">Under ₹4,000</option>
                      <option value="4000to6000">₹4,000 - ₹6,000</option>
                      <option value="above6000">₹6,000+</option>
                    </select>
                  </div>

                  {/* Batch Status */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Seat Availability
                    </label>
                    <select
                      value={batchStatus}
                      onChange={e => setBatchStatus(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium text-slate-800 focus:outline-none"
                    >
                      <option value="All">All Batches</option>
                      <option value="Filling Fast">Filling Fast (&lt; 5 seats)</option>
                      <option value="Few Seats Left">Few Seats Left</option>
                      <option value="Starting Soon">Starting Soon</option>
                      <option value="Popular">Popular Cohort</option>
                    </select>
                  </div>

                  {/* Sort */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Sort By
                    </label>
                    <select
                      value={batchSort}
                      onChange={e => setBatchSort(e.target.value as any)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium text-slate-800 focus:outline-none"
                    >
                      <option value="startDate">Earliest Start Date</option>
                      <option value="priceAsc">Fee: Low to High</option>
                      <option value="seatsLeft">Seats Remaining</option>
                    </select>
                  </div>

                </div>

                {/* Reset button if active filters */}
                {(batchSubject !== 'All' || batchExam !== 'All' || batchPriceRange !== 'All' || batchStatus !== 'All' || batchSearch) && (
                  <div className="flex items-center justify-between pt-2 text-xs">
                    <span className="text-slate-400">Custom filters applied</span>
                    <button
                      onClick={resetBatchFilters}
                      className="text-brand-blue font-bold flex items-center gap-1 hover:underline"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Grid of Batch Cards */}
              {filteredBatches.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBatches.map(batch => (
                    <BatchCard
                      key={batch.id}
                      batch={batch}
                      onJoin={onJoinBatch}
                      onView={onViewBatch}
                    />
                  ))}
                </div>
              ) : (
                /* Empty state */
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center mx-auto">
                    <Search className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">No matching batches found</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Try broadening your filters or reset to discover all upcoming group cohorts.
                  </p>
                  <button
                    onClick={resetBatchFilters}
                    className="mt-2 px-5 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-blue transition"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
