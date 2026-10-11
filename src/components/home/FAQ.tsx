import React, { useState } from 'react';
import { MOCK_FAQS } from '../../data/mockData';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Students', 'Teachers', 'Payments'];

  const filteredFaqs = activeCategory === 'All'
    ? MOCK_FAQS
    : MOCK_FAQS.filter(f => f.category === activeCategory);

  return (
    <section id="faq-section" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500">
            Everything you need to know about coaching, batches, bookings, and teaching on EDUFIED.
          </p>

          {/* Category filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                  activeCategory === cat
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map(item => {
            const isOpen = openFaq === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-subtle overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : item.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-brand-teal shrink-0" />
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-50 text-brand-blue' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p>{item.answer}</p>
                    <span className="inline-block mt-2 text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      Category: {item.category} • Demo Placeholder Policy
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support notice */}
        <div className="mt-10 text-center bg-white p-6 rounded-3xl border border-slate-200/80 shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-slate-900">Have a specific question not listed?</h4>
            <p className="text-xs text-slate-500">Our prototype support team is available to assist you.</p>
          </div>
          <a
            href="mailto:support@edufied.demo"
            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition flex items-center gap-1.5"
          >
            <MessageSquare className="w-4 h-4 text-brand-blue" />
            Contact Demo Support
          </a>
        </div>

      </div>
    </section>
  );
};
