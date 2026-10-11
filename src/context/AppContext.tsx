import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Teacher, 
  Batch, 
  Booking, 
  Enrollment, 
  User, 
  TeacherApplication 
} from '../types';
import { 
  MOCK_TEACHERS, 
  MOCK_BATCHES, 
  INITIAL_DEMO_BOOKINGS, 
  INITIAL_DEMO_ENROLLMENTS,
  DEMO_STUDENT_USER,
  DEMO_TEACHER_USER 
} from '../data/mockData';

interface ToastState {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface AppContextType {
  user: User | null;
  loginAs: (role: 'student' | 'teacher') => void;
  logout: () => void;
  teachers: Teacher[];
  batches: Batch[];
  bookings: Booking[];
  enrollments: Enrollment[];
  savedTeacherIds: string[];
  toggleSaveTeacher: (teacherId: string) => void;
  isTeacherSaved: (teacherId: string) => boolean;
  createBooking: (data: {
    teacherId: string;
    teacherName: string;
    teacherAvatar: string;
    subject: string;
    date: string;
    timeSlot: string;
    durationMinutes: number;
    fee: number;
    studentName: string;
    studentEmail: string;
    studentPhone: string;
    notes?: string;
  }) => Booking;
  cancelBooking: (bookingId: string) => void;
  createEnrollment: (data: {
    batchId: string;
    batchTitle: string;
    teacherName: string;
    teacherAvatar: string;
    subject: string;
    scheduleTime: string;
    startDate: string;
    feePaid: number;
    studentName: string;
    studentEmail: string;
    studentPhone: string;
  }) => Enrollment;
  addCustomBatch: (batch: Partial<Batch>) => Batch;
  submitTeacherApplication: (appData: Omit<TeacherApplication, 'id' | 'submittedAt'>) => void;
  applications: TeacherApplication[];
  // Active panel state preservation across the site
  activeLearningStyle: '1-on-1' | 'batches';
  setActiveLearningStyle: (style: '1-on-1' | 'batches') => void;
  // Global toasts
  toasts: ToastState[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Demo starts with demo student logged in for easy exploratory interaction, or can switch
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('edufied_user');
    return saved ? JSON.parse(saved) : DEMO_STUDENT_USER;
  });

  const [teachers, setTeachers] = useState<Teacher[]>(MOCK_TEACHERS);
  const [batches, setBatches] = useState<Batch[]>(() => {
    const saved = localStorage.getItem('edufied_batches');
    return saved ? JSON.parse(saved) : MOCK_BATCHES;
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem('edufied_bookings');
    return saved ? JSON.parse(saved) : INITIAL_DEMO_BOOKINGS;
  });

  const [enrollments, setEnrollments] = useState<Enrollment[]>(() => {
    const saved = localStorage.getItem('edufied_enrollments');
    return saved ? JSON.parse(saved) : INITIAL_DEMO_ENROLLMENTS;
  });

  const [savedTeacherIds, setSavedTeacherIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('edufied_saved_teachers');
    return saved ? JSON.parse(saved) : ['t-1', 't-2'];
  });

  const [applications, setApplications] = useState<TeacherApplication[]>([]);
  const [activeLearningStyle, setActiveLearningStyle] = useState<'1-on-1' | 'batches'>('1-on-1');
  const [toasts, setToasts] = useState<ToastState[]>([]);

  // Sync to local storage
  useEffect(() => {
    if (user) {
      localStorage.setItem('edufied_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('edufied_user');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('edufied_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('edufied_enrollments', JSON.stringify(enrollments));
  }, [enrollments]);

  useEffect(() => {
    localStorage.setItem('edufied_saved_teachers', JSON.stringify(savedTeacherIds));
  }, [savedTeacherIds]);

  useEffect(() => {
    localStorage.setItem('edufied_batches', JSON.stringify(batches));
  }, [batches]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const loginAs = (role: 'student' | 'teacher') => {
    if (role === 'student') {
      setUser(DEMO_STUDENT_USER);
      showToast('Logged in as Devansh Kapur (Student)', 'success');
    } else {
      setUser(DEMO_TEACHER_USER);
      showToast('Logged in as Dr. Rajesh Sharma (Teacher)', 'success');
    }
  };

  const logout = () => {
    setUser(null);
    showToast('Logged out of demo session', 'info');
  };

  const toggleSaveTeacher = (teacherId: string) => {
    setSavedTeacherIds(prev => {
      const exists = prev.includes(teacherId);
      if (exists) {
        showToast('Teacher removed from your saved list', 'info');
        return prev.filter(id => id !== teacherId);
      } else {
        showToast('Teacher saved to your shortlist!', 'success');
        return [...prev, teacherId];
      }
    });
  };

  const isTeacherSaved = (teacherId: string) => savedTeacherIds.includes(teacherId);

  const createBooking = (data: {
    teacherId: string;
    teacherName: string;
    teacherAvatar: string;
    subject: string;
    date: string;
    timeSlot: string;
    durationMinutes: number;
    fee: number;
    studentName: string;
    studentEmail: string;
    studentPhone: string;
    notes?: string;
  }): Booking => {
    const newBooking: Booking = {
      ...data,
      id: 'bk-' + Date.now().toString().slice(-4),
      status: 'Confirmed',
      meetingLink: `https://meet.edufied.demo/live/${data.teacherId}-${Date.now().toString().slice(-3)}`,
      createdAt: new Date().toISOString().split('T')[0]
    };

    setBookings(prev => [newBooking, ...prev]);
    showToast(`1-on-1 session confirmed with ${data.teacherName}!`, 'success');
    return newBooking;
  };

  const cancelBooking = (bookingId: string) => {
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: 'Cancelled' as const } : b));
    showToast('Booking cancelled (Demo confirmation)', 'info');
  };

  const createEnrollment = (data: {
    batchId: string;
    batchTitle: string;
    teacherName: string;
    teacherAvatar: string;
    subject: string;
    scheduleTime: string;
    startDate: string;
    feePaid: number;
    studentName: string;
    studentEmail: string;
    studentPhone: string;
  }): Enrollment => {
    const newEnrollment: Enrollment = {
      ...data,
      id: 'enr-' + Date.now().toString().slice(-4),
      status: 'Active',
      enrolledAt: new Date().toISOString().split('T')[0],
      classroomLink: `https://classroom.edufied.demo/batch/${data.batchId}`
    };

    setEnrollments(prev => [newEnrollment, ...prev]);
    // decrement available seats
    setBatches(prev => prev.map(b => {
      if (b.id === data.batchId && b.availableSeats > 0) {
        return { ...b, availableSeats: b.availableSeats - 1 };
      }
      return b;
    }));

    showToast(`Enrolled successfully in ${data.batchTitle}!`, 'success');
    return newEnrollment;
  };

  const addCustomBatch = (batchData: Partial<Batch>): Batch => {
    const newBatch: Batch = {
      id: 'b-' + Date.now().toString().slice(-4),
      title: batchData.title || 'Special Focus Batch',
      thumbnail: batchData.thumbnail || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
      teacherId: user?.id || 't-1',
      teacherName: user?.name || 'Dr. Rajesh Sharma',
      teacherAvatar: user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      teacherRole: 'Senior Verified Educator',
      subject: batchData.subject || 'Physics',
      grade: batchData.grade || 'Class 12',
      examTarget: batchData.examTarget || 'Board & Competitive Exams',
      startDate: batchData.startDate || 'Next Monday',
      scheduleDays: batchData.scheduleDays || ['Tue', 'Thu'],
      scheduleTime: batchData.scheduleTime || '5:00 PM - 6:30 PM IST',
      durationWeeks: batchData.durationWeeks || 8,
      totalSessions: batchData.totalSessions || 16,
      totalSeats: batchData.totalSeats || 15,
      availableSeats: batchData.totalSeats || 15,
      courseFee: batchData.courseFee || 3999,
      mode: batchData.mode || 'Online Live',
      badgeStatus: 'Starting Soon',
      description: batchData.description || 'Interactive masterclass batch with personalized doubt clearing.',
      learningOutcomes: batchData.learningOutcomes || ['Master core concepts', 'Weekly assignments', 'Live Q&A'],
      syllabus: batchData.syllabus || [
        { week: 1, title: 'Foundational Diagnostics & Concepts', topics: ['Core definitions', 'Initial assessment'] }
      ]
    };

    setBatches(prev => [newBatch, ...prev]);
    showToast('New batch created and published to platform catalog!', 'success');
    return newBatch;
  };

  const submitTeacherApplication = (appData: Omit<TeacherApplication, 'id' | 'submittedAt'>) => {
    const newApp: TeacherApplication = {
      ...appData,
      id: 'app-' + Date.now(),
      submittedAt: new Date().toISOString()
    };
    setApplications(prev => [newApp, ...prev]);
    showToast('Application submitted successfully! Our onboarding team will contact you.', 'success');
  };

  return (
    <AppContext.Provider
      value={{
        user,
        loginAs,
        logout,
        teachers,
        batches,
        bookings,
        enrollments,
        savedTeacherIds,
        toggleSaveTeacher,
        isTeacherSaved,
        createBooking,
        cancelBooking,
        createEnrollment,
        addCustomBatch,
        submitTeacherApplication,
        applications,
        activeLearningStyle,
        setActiveLearningStyle,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
