import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { TeacherCard } from '../components/teachers/TeacherCard';
import { TeacherBookingModal } from '../components/teachers/TeacherBookingModal';
import { TeacherProfileModal } from '../components/teachers/TeacherProfileModal';
import { Teacher } from '../types';
import { 
  Search, 
  SlidersHorizontal, 
  RotateCcw, 
  Users, 
  Sparkles,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export const TeachersPage: React.FC = () => {
  const { teachers } = useApp();
  const [searchParams] = useSearchParams();
  const initialSubject = searchParams.get('subject') || 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(initialSubject);
  const [selectedGrade, setSelectedGrade] = useState('All');
  const [selectedBudget, setSelectedBudget] = useState('All');
  const [selectedExp, setSelectedExp] = useState('All');
  const [selectedMode, setSelectedMode] = useState('All');
  const [sortBy, setSortBy] = useState<'recommended' | 'rating' | 'priceAsc' | 'exp'>('recommended');

  const [bookingTeacher, setBookingTeacher] = useState<Teacher | null>(null);
  const [profileTeacher, setProfileTeacher] = useState<Teacher | null>(null);

  const filteredTeachers = useMemo(() => {
    return teachers.filter(t => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = t.name.toLowerCase().includes(q);
        const matchesSub = t.subjects.some(s => s.toLowerCase().includes(q));
        const matchesExam = t.examPrep.some(e => e.toLowerCase().includes(q));
        if (!matchesName && !matchesSub && !matchesExam) return false;
      }

      if (selectedSubject !== 'All' && !t.subjects.includes(selectedSubject)) {
        return false;
      }

      if (selectedGrade !== 'All') {
        const matches = t.grades.some(g => g.toLowerCase().includes(selectedGrade.toLowerCase())) ||
          t.examPrep.some(e => e.toLowerCase().includes(selectedGrade.toLowerCase()));
        if (!matches) return false;
      }

      if (selectedBudget === 'under900' && t.hourlyRate > 900) return false;
      if (selectedBudget === '900to1200' && (t.hourlyRate < 900 || t.hourlyRate > 1200)) return false;
      if (selectedBudget === 'above1200' && t.hourlyRate < 1200) return false;

      if (selectedExp === '5plus' && t.experienceYears < 5) return false;
      if (selectedExp === '8plus' && t.experienceYears < 8) return false;
      if (selectedExp === '10plus' && t.experienceYears < 10) return false;

      if (selectedMode !== 'All') {
        if (selectedMode === 'Online' && t.mode !== 'Online' && t.mode !== 'Both') return false;
        if (selectedMode !== 'Online' && !t.location.toLowerCase().includes(selectedMode.toLowerCase())) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'priceAsc') return a.hourlyRate - b.hourlyRate;
      if (sortBy === 'exp') return b.experienceYears - a.experienceYears;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [teachers, searchQuery, selectedSubject, selectedGrade, selectedBudget, selectedExp, selectedMode, sortBy]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedSubject('All');
    setSelectedGrade('All');
    setSelectedBudget('All');
    setSelectedExp('All');
    setSelectedMode('All');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-teal mb-2">
            <Users className="w-4 h-4" />
            <span>1-on-1 Educator Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Find Your Ideal 1-on-1 Teacher
          </h1>
          <p className="text-sm text-slate-500 mt-1 max-w-2xl">
            Filter qualified educators by subject, academic board, budget, and live schedule. Every educator is vetted and sets transparent fees.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-subtle mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-96 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search teacher by name, topic, or exam..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            <div className="w-full md:w-auto flex items-center gap-3">
              <span className="text-xs text-slate-500 font-semibold whitespace-nowrap">Sort by:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none"
              >
                <option value="recommended">Featured Mentors</option>
                <option value="rating">Highest Rated</option>
                <option value="priceAsc">Fee: Low to High</option>
                <option value="exp">Most Experienced</option>
              </select>
            </div>
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs pt-3 border-t border-slate-100">
            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Subject</label>
              <select
                value={selectedSubject}
                onChange={e => setSelectedSubject(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium"
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

            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Class / Target</label>
              <select
                value={selectedGrade}
                onChange={e => setSelectedGrade(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium"
              >
                <option value="All">All Grades & Exams</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 12">Class 12</option>
                <option value="JEE">JEE Main / Adv</option>
                <option value="NEET">NEET Medical</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Hourly Budget</label>
              <select
                value={selectedBudget}
                onChange={e => setSelectedBudget(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium"
              >
                <option value="All">Any Budget</option>
                <option value="under900">Under ₹900/hr</option>
                <option value="900to1200">₹900 - ₹1,200/hr</option>
                <option value="above1200">₹1,200+/hr</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Experience</label>
              <select
                value={selectedExp}
                onChange={e => setSelectedExp(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium"
              >
                <option value="All">Any Experience</option>
                <option value="5plus">5+ Years</option>
                <option value="8plus">8+ Years</option>
                <option value="10plus">10+ Years</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Mode / City</label>
              <select
                value={selectedMode}
                onChange={e => setSelectedMode(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium"
              >
                <option value="All">Online & Offline</option>
                <option value="Online">Online Live</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mumbai">Mumbai</option>
                <option value="New Delhi">New Delhi</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 text-xs">
            <span className="text-slate-500 font-semibold">
              Showing <strong className="text-slate-900">{filteredTeachers.length}</strong> educators
            </span>
            <button
              onClick={handleReset}
              className="text-brand-blue font-bold flex items-center gap-1 hover:underline"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          </div>
        </div>

        {/* Teachers Grid */}
        {filteredTeachers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeachers.map(teacher => (
              <TeacherCard
                key={teacher.id}
                teacher={teacher}
                onBook={t => setBookingTeacher(t)}
                onViewProfile={t => setProfileTeacher(t)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-3">
            <Users className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No teachers found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No educators matched all the selected filters. Reset filters to view all available teachers.
            </p>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-brand-navy text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Modals */}
        <TeacherBookingModal
          teacher={bookingTeacher}
          isOpen={Boolean(bookingTeacher)}
          onClose={() => setBookingTeacher(null)}
        />

        <TeacherProfileModal
          teacher={profileTeacher}
          isOpen={Boolean(profileTeacher)}
          onClose={() => setProfileTeacher(null)}
          onBook={t => setBookingTeacher(t)}
        />

      </div>
    </div>
  );
};
