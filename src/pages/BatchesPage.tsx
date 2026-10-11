import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { BatchCard } from '../components/batches/BatchCard';
import { BatchEnrollModal } from '../components/batches/BatchEnrollModal';
import { BatchDetailModal } from '../components/batches/BatchDetailModal';
import { Batch } from '../types';
import { 
  Search, 
  Layers, 
  RotateCcw, 
  Calendar,
  Sparkles
} from 'lucide-react';

export const BatchesPage: React.FC = () => {
  const { batches } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedExam, setSelectedExam] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState<'startDate' | 'priceAsc' | 'seatsLeft'>('startDate');

  const [enrollBatch, setEnrollBatch] = useState<Batch | null>(null);
  const [detailBatch, setDetailBatch] = useState<Batch | null>(null);

  const filteredBatches = useMemo(() => {
    return batches.filter(b => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = b.title.toLowerCase().includes(q);
        const matchesSub = b.subject.toLowerCase().includes(q);
        const matchesTeacher = b.teacherName.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSub && !matchesTeacher) return false;
      }

      if (selectedSubject !== 'All' && b.subject !== selectedSubject) return false;
      if (selectedExam !== 'All' && !b.examTarget.toLowerCase().includes(selectedExam.toLowerCase())) return false;
      
      if (selectedPrice === 'under4000' && b.courseFee > 4000) return false;
      if (selectedPrice === '4000to6000' && (b.courseFee < 4000 || b.courseFee > 6000)) return false;
      if (selectedPrice === 'above6000' && b.courseFee < 6000) return false;

      if (selectedStatus !== 'All' && b.badgeStatus !== selectedStatus) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'priceAsc') return a.courseFee - b.courseFee;
      if (sortBy === 'seatsLeft') return a.availableSeats - b.availableSeats;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [batches, searchQuery, selectedSubject, selectedExam, selectedPrice, selectedStatus, sortBy]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedSubject('All');
    setSelectedExam('All');
    setSelectedPrice('All');
    setSelectedStatus('All');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
            <Layers className="w-4 h-4" />
            <span>Interactive Cohorts</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Explore Group Coaching Batches
          </h1>
          <p className="text-sm text-slate-500 mt-1 max-w-2xl">
            Structured syllabi, weekly live problem solving, small cohorts (15-20 students), and peer interaction led by top faculty.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-subtle mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-96 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search batch by name, subject, or educator..."
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
                <option value="startDate">Earliest Start Date</option>
                <option value="priceAsc">Course Fee: Low to High</option>
                <option value="seatsLeft">Seats Remaining</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-3 border-t border-slate-100">
            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Subject</label>
              <select
                value={selectedSubject}
                onChange={e => setSelectedSubject(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium"
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

            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Target Exam</label>
              <select
                value={selectedExam}
                onChange={e => setSelectedExam(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium"
              >
                <option value="All">All Exams & Boards</option>
                <option value="JEE">JEE Main / Advanced</option>
                <option value="NEET">NEET Medical</option>
                <option value="Board">CBSE / State Boards</option>
                <option value="Coding">Coding & Computer Science</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Fee Range</label>
              <select
                value={selectedPrice}
                onChange={e => setSelectedPrice(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium"
              >
                <option value="All">Any Fee</option>
                <option value="under4000">Under ₹4,000</option>
                <option value="4000to6000">₹4,000 - ₹6,000</option>
                <option value="above6000">₹6,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1">Batch Urgency</label>
              <select
                value={selectedStatus}
                onChange={e => setSelectedStatus(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 font-medium"
              >
                <option value="All">All Cohorts</option>
                <option value="Filling Fast">Filling Fast</option>
                <option value="Few Seats Left">Few Seats Left</option>
                <option value="Starting Soon">Starting Soon</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 text-xs">
            <span className="text-slate-500 font-semibold">
              Showing <strong className="text-slate-900">{filteredBatches.length}</strong> active batches
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

        {/* Batches Grid */}
        {filteredBatches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBatches.map(batch => (
              <BatchCard
                key={batch.id}
                batch={batch}
                onJoin={b => setEnrollBatch(b)}
                onView={b => setDetailBatch(b)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-3">
            <Layers className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No batches found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No group batches match the selected criteria. Reset filters to view all scheduled cohorts.
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
        <BatchEnrollModal
          batch={enrollBatch}
          isOpen={Boolean(enrollBatch)}
          onClose={() => setEnrollBatch(null)}
        />

        <BatchDetailModal
          batch={detailBatch}
          isOpen={Boolean(detailBatch)}
          onClose={() => setDetailBatch(null)}
          onJoin={b => setEnrollBatch(b)}
        />

      </div>
    </div>
  );
};
