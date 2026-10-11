import React from 'react';
import { 
  Users, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Star,
  Search,
  BookOpen,
  MapPin,
  GraduationCap
} from 'lucide-react';

interface HeroProps {
  activeTab: '1-on-1' | 'batches';
  onTabChange: (tab: '1-on-1' | 'batches') => void;
  onSearchSubmit: (params: { subject: string; grade: string; location: string }) => void;
  searchSubject: string;
  setSearchSubject: (val: string) => void;
  searchGrade: string;
  setSearchGrade: (val: string) => void;
  searchLocation: string;
  setSearchLocation: (val: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  activeTab,
  onTabChange,
  onSearchSubmit,
  searchSubject,
  setSearchSubject,
  searchGrade,
  setSearchGrade,
  searchLocation,
  setSearchLocation
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit({
      subject: searchSubject,
      grade: searchGrade,
      location: searchLocation
    });
    // Smooth scroll down to switching panels section
    const el = document.getElementById('learning-panels-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50 to-white pt-10 sm:pt-16 pb-14 border-b border-slate-200/60">
      
      {/* Background soft glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-blue-200/30 to-teal-200/30 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Headline + Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-10">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Location / Value Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-brand-navy">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="text-slate-500">Your neighbourhood & online.</span>
              <span className="text-brand-blue font-bold">Your next chapter.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight leading-[1.12]">
              The Right Teacher.{' '}
              <span className="bg-gradient-to-r from-brand-blue via-brand-navyLight to-brand-teal bg-clip-text text-transparent">
                The Right Way
              </span>{' '}
              to Learn.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Discover vetted expert educators, book personalized 1-on-1 coaching, or join interactive peer learning batches. Your customized learning journey starts with <strong className="text-brand-navy font-bold">EDUFIED</strong>.
            </p>

            {/* Two Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => {
                  onTabChange('1-on-1');
                  const el = document.getElementById('learning-panels-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-md ${
                  activeTab === '1-on-1'
                    ? 'bg-brand-navy text-white hover:bg-brand-blue shadow-brand-navy/20'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <Users className="w-4 h-4 text-brand-teal" />
                <span>Find a 1-on-1 Teacher</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  onTabChange('batches');
                  const el = document.getElementById('learning-panels-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-6 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-md ${
                  activeTab === 'batches'
                    ? 'bg-brand-navy text-white hover:bg-brand-blue shadow-brand-navy/20'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <Layers className="w-4 h-4 text-brand-blue" />
                <span>Explore Group Batches</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-3 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Qualified & Vetted Educators</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Personalized 1-on-1 Learning</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Flexible Online & Offline Options</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Inspired by Figma design in prompt image) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main photo card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                  alt="Student and teacher interactive coaching"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">
                        Great teachers, closer to you
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-brand-teal" />
                        <span>Bengaluru, Mumbai, Delhi & Live Online</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-brand-blue bg-blue-50 px-2 py-1 rounded-lg">
                    4.9★ Avg
                  </span>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-3 border border-slate-200/80 shadow-card flex items-center gap-2.5 animate-bounce-subtle hidden sm:flex">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">100% Focused Attention</div>
                  <div className="text-[10px] text-slate-400">Zero crowded lecture halls</div>
                </div>
              </div>

              {/* Floating Live Batch Badge */}
              <div className="absolute -bottom-4 -right-2 bg-brand-navy text-white rounded-2xl p-3 shadow-card flex items-center gap-2.5 hidden sm:flex border border-brand-navyLight">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-ping" />
                <div className="text-xs font-bold">
                  <span>Small Batches (Max 15-20)</span>
                  <div className="text-[10px] text-slate-300 font-normal">Active peer discussions</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* HERO SEARCH SWITCHER (Directly matches user Figma mock in the screenshot!) */}
        <div className="mt-4 max-w-5xl mx-auto bg-white rounded-3xl shadow-card-hover border border-slate-200/90 p-3 sm:p-5">
          
          {/* Segmented control tabs */}
          <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
            <button
              type="button"
              onClick={() => onTabChange('1-on-1')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                activeTab === '1-on-1'
                  ? 'bg-brand-navy text-white shadow-md shadow-brand-navy/20'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Users className="w-4 h-4 text-brand-teal" />
              <span>1-on-1 Personal Coaching</span>
            </button>

            <button
              type="button"
              onClick={() => onTabChange('batches')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                activeTab === 'batches'
                  ? 'bg-brand-navy text-white shadow-md shadow-brand-navy/20'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-4 h-4 text-brand-blue" />
              <span>Group / Batch Coaching</span>
            </button>
          </div>

          {/* Search Inputs Row */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            
            {/* Input 1: Subject or Course */}
            <div className="md:col-span-4 p-2.5 px-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 focus-within:border-brand-blue focus-within:bg-white transition">
              <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                Subject or Course
              </label>
              <div className="flex items-center gap-2 mt-1">
                <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="What would you like to learn?"
                  value={searchSubject}
                  onChange={e => setSearchSubject(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-slate-900 focus:outline-none placeholder:text-slate-400 placeholder:font-normal"
                />
              </div>
            </div>

            {/* Input 2: Class, Grade, or Exam */}
            <div className="md:col-span-4 p-2.5 px-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 focus-within:border-brand-blue focus-within:bg-white transition">
              <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                Class, Grade, or Target Exam
              </label>
              <div className="flex items-center gap-2 mt-1">
                <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                <select
                  value={searchGrade}
                  onChange={e => setSearchGrade(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-slate-900 focus:outline-none cursor-pointer"
                >
                  <option value="">Choose class or exam (All)</option>
                  <option value="Class 9">Class 9 CBSE / ICSE</option>
                  <option value="Class 10">Class 10 Board Accelerator</option>
                  <option value="Class 11">Class 11 Science / Commerce</option>
                  <option value="Class 12">Class 12 Boards</option>
                  <option value="JEE">JEE Main & Advanced</option>
                  <option value="NEET">NEET Medical Entrance</option>
                  <option value="Computer Science">Coding & Computer Science</option>
                </select>
              </div>
            </div>

            {/* Input 3: Location or Mode */}
            <div className="md:col-span-4 lg:col-span-4 p-2.5 px-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 focus-within:border-brand-blue focus-within:bg-white transition">
              <label className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                Mode or City Locality
              </label>
              <div className="flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <select
                  value={searchLocation}
                  onChange={e => setSearchLocation(e.target.value)}
                  className="w-full bg-transparent text-xs font-semibold text-slate-900 focus:outline-none cursor-pointer"
                >
                  <option value="">Online Live & All Locations</option>
                  <option value="Online">Online Live Interactive Classroom</option>
                  <option value="Bengaluru">Bengaluru (Indiranagar / Koramangala)</option>
                  <option value="Mumbai">Mumbai (Bandra / Powai)</option>
                  <option value="New Delhi">New Delhi (South Extension)</option>
                  <option value="Kolkata">Kolkata (Salt Lake)</option>
                </select>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="md:col-span-12 flex justify-end pt-1">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-sm bg-brand-navy hover:bg-brand-blue text-white shadow-md hover:shadow-brand-blue/30 transition flex items-center justify-center gap-2 group"
              >
                <Search className="w-4 h-4 text-brand-teal group-hover:scale-110 transition-transform" />
                <span>
                  {activeTab === '1-on-1' ? 'Find My Perfect Teacher' : 'Explore Matching Batches'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
};
