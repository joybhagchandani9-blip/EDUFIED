export type LearningMode = 'Online' | 'Offline' | 'Both';

export interface Teacher {
  id: string;
  name: string;
  avatar: string;
  title: string;
  headline: string;
  subjects: string[];
  grades: string[];
  examPrep: string[];
  qualifications: string;
  experienceYears: number;
  bio: string;
  aboutLong: string;
  teachingStyle: string;
  rating: number; // e.g. 4.9
  reviewCount: number;
  hourlyRate: number; // in INR
  location: string;
  mode: LearningMode;
  availableSlots: string[];
  languages: string[];
  stats: {
    studentsTaught: number;
    hoursCompleted: number;
    responseRate: string;
  };
  featured?: boolean;
}

export interface BatchSyllabusWeek {
  week: number;
  title: string;
  topics: string[];
}

export interface Batch {
  id: string;
  title: string;
  thumbnail: string;
  teacherId: string;
  teacherName: string;
  teacherAvatar: string;
  teacherRole: string;
  subject: string;
  grade: string;
  examTarget: string;
  startDate: string;
  scheduleDays: string[];
  scheduleTime: string;
  durationWeeks: number;
  totalSessions: number;
  totalSeats: number;
  availableSeats: number;
  courseFee: number;
  originalFee?: number;
  mode: 'Online Live' | 'In-person' | 'Hybrid';
  location?: string;
  syllabus: BatchSyllabusWeek[];
  learningOutcomes: string[];
  badgeStatus: 'Filling Fast' | 'Starting Soon' | 'Few Seats Left' | 'Popular';
  featured?: boolean;
  description: string;
}

export interface Booking {
  id: string;
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
  status: 'Confirmed' | 'Completed' | 'Rescheduled' | 'Cancelled';
  meetingLink: string;
  createdAt: string;
}

export interface Enrollment {
  id: string;
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
  status: 'Active' | 'Completed';
  enrolledAt: string;
  classroomLink: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  avatar: string;
  phone?: string;
  grade?: string;
  bio?: string;
  subjects?: string[];
}

export interface TeacherApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subjects: string[];
  qualifications: string;
  experienceYears: string;
  coachingFormat: '1-on-1' | 'Batches' | 'Both';
  introduction: string;
  city: string;
  submittedAt: string;
}

export interface SubjectCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  teacherCount: number;
  batchCount: number;
  color: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  courseOrSubject: string;
  format: '1-on-1 Coaching' | 'Batch Coaching';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Students' | 'Teachers' | 'Payments';
}
