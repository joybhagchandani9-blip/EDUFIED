import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { 
  GraduationCap, 
  Menu, 
  X, 
  UserCircle2, 
  Sparkles, 
  LogOut, 
  ChevronDown,
  Layers,
  Users
} from 'lucide-react';

export const Navbar: React.FC<{ onOpenBecomeTeacher?: () => void }> = ({ onOpenBecomeTeacher }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, logout, loginAs } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Prototype Demo Banner */}
      <div className="bg-brand-navyDark text-slate-300 text-xs py-1.5 px-4 text-center border-b border-brand-navy flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 font-medium text-brand-teal">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          Interactive Prototype Demo
        </span>
        <span className="text-slate-500">|</span>
        <span className="hidden sm:inline text-slate-300">
          Experience 1-on-1 booking, batch enrollment & dual dashboards
        </span>
        <span className="text-slate-500">|</span>
        <div className="inline-flex items-center gap-1.5">
          <span className="text-slate-400">Quick role switch:</span>
          <button
            onClick={() => loginAs('student')}
            className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition ${
              user?.role === 'student' ? 'bg-brand-blue text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Student
          </button>
          <span className="text-slate-600">/</span>
          <button
            onClick={() => loginAs('teacher')}
            className={`px-1.5 py-0.5 rounded text-[11px] font-semibold transition ${
              user?.role === 'teacher' ? 'bg-brand-teal text-slate-900' : 'text-slate-400 hover:text-white'
            }`}
          >
            Teacher
          </button>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-subtle transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-navy to-brand-blue flex items-center justify-center shadow-md shadow-brand-navy/15 group-hover:scale-105 transition-transform duration-200">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-brand-navy">
                  EDU<span className="text-brand-blue">FIED</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 -mt-1 hidden sm:block">
                  Learn Your Way
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive('/') ? 'text-brand-blue bg-blue-50/70' : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/teachers"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  isActive('/teachers') ? 'text-brand-blue bg-blue-50/70' : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                }`}
              >
                <Users className="w-4 h-4 text-slate-400" />
                Find Teachers
              </Link>
              <Link
                to="/batches"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  isActive('/batches') ? 'text-brand-blue bg-blue-50/70' : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                }`}
              >
                <Layers className="w-4 h-4 text-slate-400" />
                Explore Batches
              </Link>
              <Link
                to="/how-it-works"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive('/how-it-works') ? 'text-brand-blue bg-blue-50/70' : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                }`}
              >
                How It Works
              </Link>
              <Link
                to="/become-a-teacher"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors text-slate-600 hover:text-brand-teal hover:bg-teal-50/50 ${
                  isActive('/become-a-teacher') ? 'text-brand-teal font-bold' : ''
                }`}
              >
                Become a Teacher
              </Link>
            </nav>

            {/* Right Action Buttons & User Menu */}
            <div className="hidden lg:flex items-center gap-3">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2.5 p-1.5 pl-2 pr-3 rounded-full border border-slate-200 hover:border-slate-300 bg-slate-50/80 hover:bg-slate-100 transition"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover border border-white shadow-xs"
                    />
                    <div className="text-left hidden xl:block">
                      <div className="text-xs font-bold text-slate-800 leading-tight">
                        {user.name.split(' ')[0]}
                      </div>
                      <div className="text-[10px] uppercase font-semibold text-brand-blue">
                        {user.role}
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-card-hover border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="px-4 py-3 border-b border-slate-100">
                        <p className="text-xs text-slate-500 font-medium">Signed in as</p>
                        <p className="text-sm font-bold text-slate-900 truncate">{user.name}</p>
                        <span className="inline-block mt-1 text-[11px] font-semibold uppercase px-2 py-0.5 rounded-full bg-blue-50 text-brand-blue">
                          {user.role} Account
                        </span>
                      </div>

                      <div className="py-1">
                        <Link
                          to={user.role === 'teacher' ? '/teacher/dashboard' : '/student/dashboard'}
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-blue-50/70 hover:text-brand-blue transition"
                        >
                          <UserCircle2 className="w-4 h-4 text-slate-400" />
                          {user.role === 'teacher' ? 'Teacher Dashboard' : 'Student Dashboard'}
                        </Link>
                        <button
                          onClick={() => {
                            loginAs(user.role === 'student' ? 'teacher' : 'student');
                            setUserDropdownOpen(false);
                            navigate(user.role === 'student' ? '/teacher/dashboard' : '/student/dashboard');
                          }}
                          className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition text-left"
                        >
                          <Sparkles className="w-4 h-4 text-brand-teal" />
                          Switch to {user.role === 'student' ? 'Teacher' : 'Student'} Mode
                        </button>
                      </div>

                      <div className="border-t border-slate-100 pt-1">
                        <button
                          onClick={() => {
                            logout();
                            setUserDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 transition text-left font-medium"
                        >
                          <LogOut className="w-4 h-4 text-rose-500" />
                          Log Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 rounded-xl text-sm font-semibold text-brand-navy hover:text-brand-blue transition hover:bg-slate-50"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    className="px-5 py-2.5 rounded-xl text-sm font-bold bg-brand-navy text-white hover:bg-brand-blue shadow-md hover:shadow-brand-blue/20 transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </>
              )}

              {/* Quick direct access button to dashboard if logged in */}
              {user && (
                <Link
                  to={user.role === 'teacher' ? '/teacher/dashboard' : '/student/dashboard'}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-brand-navy text-white hover:bg-brand-blue transition shadow-sm"
                >
                  Dashboard
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              {user && (
                <Link
                  to={user.role === 'teacher' ? '/teacher/dashboard' : '/student/dashboard'}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-brand-navy text-white"
                >
                  Dashboard
                </Link>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-600 hover:text-brand-navy hover:bg-slate-100 transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-base font-semibold ${
                  isActive('/') ? 'text-brand-blue bg-blue-50' : 'text-slate-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/teachers"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-base font-semibold flex items-center gap-2 ${
                  isActive('/teachers') ? 'text-brand-blue bg-blue-50' : 'text-slate-700'
                }`}
              >
                <Users className="w-5 h-5 text-slate-400" />
                Find Teachers
              </Link>
              <Link
                to="/batches"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-base font-semibold flex items-center gap-2 ${
                  isActive('/batches') ? 'text-brand-blue bg-blue-50' : 'text-slate-700'
                }`}
              >
                <Layers className="w-5 h-5 text-slate-400" />
                Explore Batches
              </Link>
              <Link
                to="/how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-base font-semibold ${
                  isActive('/how-it-works') ? 'text-brand-blue bg-blue-50' : 'text-slate-700'
                }`}
              >
                How It Works
              </Link>
              <Link
                to="/become-a-teacher"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-base font-semibold text-brand-teal"
              >
                Become a Teacher
              </Link>
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              {user ? (
                <>
                  <div className="flex items-center gap-3 px-3 py-2 bg-slate-50 rounded-xl">
                    <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">{user.name}</p>
                      <p className="text-xs text-brand-blue font-semibold uppercase">{user.role} account</p>
                    </div>
                  </div>
                  <Link
                    to={user.role === 'teacher' ? '/teacher/dashboard' : '/student/dashboard'}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2.5 px-4 text-center rounded-xl bg-brand-navy text-white font-bold text-sm"
                  >
                    Open {user.role === 'teacher' ? 'Teacher' : 'Student'} Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      loginAs(user.role === 'student' ? 'teacher' : 'student');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-2 px-4 text-center rounded-xl border border-slate-200 font-semibold text-xs text-slate-700"
                  >
                    Switch to {user.role === 'student' ? 'Teacher' : 'Student'} Mode
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-2 text-center text-xs text-rose-600 font-medium"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-4 text-center rounded-xl border border-slate-200 font-bold text-sm text-brand-navy"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-4 text-center rounded-xl bg-brand-navy text-white font-bold text-sm"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
