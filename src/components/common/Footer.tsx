import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Heart, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-teal flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                EDU<span className="text-brand-blue">FIED</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              “Learn Your Way. Achieve Your Goals.”<br />
              A next-generation digital coaching platform connecting learners with vetted educators for personalized 1-on-1 coaching and interactive group batches.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-teal" />
                <span>Indiranagar & HSR Layout, Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue" />
                <span>support@edufied.demo (Prototype Contact)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-teal" />
                <span>+91 (080) 4920-EDU (Demo helpline)</span>
              </div>
            </div>
          </div>

          {/* Column: For Students */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              For Learners
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/teachers" className="hover:text-white transition">
                  Find 1-on-1 Teachers
                </Link>
              </li>
              <li>
                <Link to="/batches" className="hover:text-white transition">
                  Explore Group Batches
                </Link>
              </li>
              <li>
                <Link to="/teachers?subject=Mathematics" className="hover:text-white transition">
                  Mathematics Coaching
                </Link>
              </li>
              <li>
                <Link to="/teachers?subject=Physics" className="hover:text-white transition">
                  Physics & JEE Prep
                </Link>
              </li>
              <li>
                <Link to="/student/dashboard" className="hover:text-white transition flex items-center gap-1 text-brand-teal">
                  Student Dashboard
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: For Educators */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              For Educators
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/become-a-teacher" className="hover:text-white transition font-medium text-brand-teal">
                  Become a Teacher
                </Link>
              </li>
              <li>
                <Link to="/teacher/dashboard" className="hover:text-white transition flex items-center gap-1 text-brand-blue">
                  Teacher Dashboard
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition">
                  Teaching Autonomy & Fees
                </Link>
              </li>
              <li>
                <span className="text-slate-500 cursor-not-allowed text-xs">
                  Educator Guidelines (Demo)
                </span>
              </li>
            </ul>
          </div>

          {/* Column: Platform & Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/how-it-works" className="hover:text-white transition">
                  How EDUFIED Works
                </Link>
              </li>
              <li>
                <a href="#faq-section" className="hover:text-white transition">
                  FAQs & Support
                </a>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer transition text-xs">
                  Privacy Policy (Demo)
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer transition text-xs">
                  Terms of Service (Demo)
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white cursor-pointer transition text-xs">
                  Refund & Cancellation Policy
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} EDUFIED Technologies Pvt. Ltd. All rights reserved.</span>
          </div>

          <div className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 text-slate-400 text-[11px] text-center">
            Notice: All educator profiles, statistics, and batch schedules shown are demonstration mockups for product evaluation.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Twitter</span>
            <span className="hover:text-slate-300 cursor-pointer">LinkedIn</span>
            <span className="hover:text-slate-300 cursor-pointer">Instagram</span>
            <span className="hover:text-slate-300 cursor-pointer">YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
