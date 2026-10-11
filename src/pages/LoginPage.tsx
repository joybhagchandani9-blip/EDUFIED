import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  User, 
  Lock, 
  Users, 
  Briefcase,
  ShieldCheck 
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { loginAs, user } = useApp();
  const navigate = useNavigate();

  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [email, setEmail] = useState('devansh.student@edufied.demo');
  const [password, setPassword] = useState('password123');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginAs(role);
    if (role === 'teacher') {
      navigate('/teacher/dashboard');
    } else {
      navigate('/student/dashboard');
    }
  };

  const handleQuickDemo = (selectedRole: 'student' | 'teacher') => {
    loginAs(selectedRole);
    if (selectedRole === 'teacher') {
      navigate('/teacher/dashboard');
    } else {
      navigate('/student/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-14 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200/90 shadow-card p-8 sm:p-10 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-navy to-brand-blue flex items-center justify-center text-white mx-auto shadow-md">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-brand-navy">
            Sign in to EDUFIED
          </h1>
          <p className="text-xs text-slate-500">
            Welcome back! Enter your demo credentials or use 1-click test login below.
          </p>
        </div>

        {/* Role Toggle */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 text-center">
            Select Your Account Type
          </label>
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              type="button"
              onClick={() => {
                setRole('student');
                setEmail('devansh.student@edufied.demo');
              }}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                role === 'student'
                  ? 'bg-white text-brand-navy shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-brand-blue" />
              <span>Student / Parent</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setRole('teacher');
                setEmail('rajesh.sharma@edufied.demo');
              }}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                role === 'teacher'
                  ? 'bg-white text-brand-navy shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-brand-teal" />
              <span>Educator / Tutor</span>
            </button>
          </div>
        </div>

        {/* 1-Click Fast Demo Logins */}
        <div className="p-3 bg-blue-50/80 rounded-2xl border border-blue-100 space-y-2 text-center">
          <div className="text-[11px] font-bold text-brand-navy flex items-center justify-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
            <span>Instant 1-Click Demo Login:</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemo('student')}
              className="py-2 px-2.5 bg-brand-navy text-white text-[11px] font-bold rounded-xl hover:bg-brand-blue transition shadow-xs"
            >
              Log in as Student
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemo('teacher')}
              className="py-2 px-2.5 bg-brand-teal text-slate-950 text-[11px] font-bold rounded-xl hover:bg-white border border-teal-300 transition shadow-xs"
            >
              Log in as Teacher
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-brand-blue focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-brand-blue focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-brand-navy text-white font-bold text-xs hover:bg-brand-blue shadow-md transition flex items-center justify-center gap-1.5"
          >
            <span>Log In ({role === 'teacher' ? 'Teacher' : 'Student'})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-slate-500 border-t border-slate-100">
          Don’t have an account yet?{' '}
          <Link to="/signup" className="text-brand-blue font-bold hover:underline">
            Create an Account
          </Link>
        </div>

        <p className="text-[10px] text-center text-slate-400">
          Notice: Demo state is maintained in local storage. No passwords are transmitted externally.
        </p>

      </div>
    </div>
  );
};
