import React from 'react';
import { MOCK_CATEGORIES } from '../../data/mockData';
import { 
  Calculator, 
  Atom, 
  FlaskConical, 
  Dna, 
  BookOpen, 
  Code, 
  BarChart3, 
  Trophy, 
  GraduationCap, 
  Sparkles,
  ArrowRight,
  Users
} from 'lucide-react';

interface SubjectsSectionProps {
  onSelectCategory: (categoryName: string) => void;
}

export const SubjectsSection: React.FC<SubjectsSectionProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator': return <Calculator className="w-6 h-6 text-blue-600" />;
      case 'Atom': return <Atom className="w-6 h-6 text-indigo-600" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-teal-600" />;
      case 'Dna': return <Dna className="w-6 h-6 text-emerald-600" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-indigo-600" />;
      case 'Code': return <Code className="w-6 h-6 text-violet-600" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-amber-600" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-rose-600" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-cyan-600" />;
      default: return <Sparkles className="w-6 h-6 text-orange-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-teal bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              EXPLORE CURRICULUM
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
              Popular Subjects & Learning Domains
            </h2>
            <p className="text-sm text-slate-500 max-w-xl">
              From school boards to national competitive exams and programming, find mentors across every field.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium hidden md:block">
            Click any subject to filter available teachers and batches instantly
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {MOCK_CATEGORIES.map(cat => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-brand-blue/50 hover:shadow-card-hover transition-all duration-200 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-blue-50/80 border border-slate-100 group-hover:border-blue-100 flex items-center justify-center mb-4 transition-colors">
                  {getIcon(cat.iconName)}
                </div>

                <h3 className="font-bold text-sm text-slate-900 group-hover:text-brand-blue transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-semibold group-hover:text-brand-navy transition-colors">
                <span>{cat.teacherCount} Teachers • {cat.batchCount} Batches</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-brand-blue" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
