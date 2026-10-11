import { Teacher, Batch, SubjectCategory, Testimonial, FAQItem, User, Booking, Enrollment } from '../types';

export const MOCK_TEACHERS: Teacher[] = [
  {
    id: 't-1',
    name: 'Dr. Rajesh Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    title: 'Senior Physics Mentor & Ex-Allen Faculty',
    headline: 'IIT Roorkee Alum | 12+ Yrs Teaching JEE Advanced & NEET Physics',
    subjects: ['Physics', 'Competitive Exam Preparation'],
    grades: ['Class 11', 'Class 12', 'Dropper'],
    examPrep: ['JEE Main', 'JEE Advanced', 'NEET'],
    qualifications: 'Ph.D. in Applied Physics, M.Tech IIT Roorkee',
    experienceYears: 12,
    bio: 'Specialized in breaking down complex mechanics, electrodynamics, and modern physics concepts into intuitive visual frameworks with high problem-solving accuracy.',
    aboutLong: 'Dr. Rajesh Sharma has guided over 1,400+ students towards ranks under AIR 500 in JEE and NEET. His pedagogical methodology emphasizes first-principles derivations and pattern recognition in numerical problems. He offers tailored step-by-step doubt clearing and weekly mock analysis.',
    teachingStyle: 'Conceptual & Problem-Centric. Focuses on graphical intuition, derivation shortcuts, and rigorous mock test reviews.',
    rating: 4.95,
    reviewCount: 142,
    hourlyRate: 1200,
    location: 'Indiranagar, Bengaluru',
    mode: 'Both',
    availableSlots: ['Today 5:00 PM', 'Tomorrow 11:00 AM', 'Tomorrow 4:30 PM', 'Thursday 6:00 PM'],
    languages: ['English', 'Hindi'],
    stats: {
      studentsTaught: 1420,
      hoursCompleted: 2800,
      responseRate: '99%'
    },
    featured: true
  },
  {
    id: 't-2',
    name: 'Priya Nair',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    title: 'Master Mathematics Educator & Gold Medalist',
    headline: 'M.Sc Mathematics, IIT Delhi | 9+ Yrs CBSE & Olympiad Coaching',
    subjects: ['Mathematics', 'School Tuition'],
    grades: ['Class 9', 'Class 10', 'Class 11', 'Class 12'],
    examPrep: ['CBSE Boards', 'ICSE Boards', 'Math Olympiads'],
    qualifications: 'M.Sc Mathematics (IIT Delhi), B.Ed (Distinction)',
    experienceYears: 9,
    bio: 'Passionate math coach dedicated to helping students overcome math anxiety, master board exam patterns, and secure 95%+ marks consistently.',
    aboutLong: 'Priya brings deep patience and structured step-by-step problem sets to every class. Having taught at top international schools in Bengaluru and Mumbai, she recognizes each learner’s specific pain points and crafts customized practice drills.',
    teachingStyle: 'Interactive, structured, and confidence-building with personalized worksheet feedback.',
    rating: 4.92,
    reviewCount: 118,
    hourlyRate: 950,
    location: 'Koramangala, Bengaluru',
    mode: 'Online',
    availableSlots: ['Today 6:30 PM', 'Tomorrow 3:00 PM', 'Wednesday 5:00 PM', 'Saturday 10:00 AM'],
    languages: ['English', 'Hindi', 'Malayalam'],
    stats: {
      studentsTaught: 950,
      hoursCompleted: 1950,
      responseRate: '98%'
    },
    featured: true
  },
  {
    id: 't-3',
    name: 'Ananya Sen',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    title: 'NEET & JEE Organic Chemistry Specialist',
    headline: 'M.Sc Chemistry, Presidency University | 7+ Yrs Medical Coaching',
    subjects: ['Chemistry', 'Competitive Exam Preparation'],
    grades: ['Class 11', 'Class 12', 'Dropper'],
    examPrep: ['NEET', 'JEE Main', 'CBSE Boards'],
    qualifications: 'M.Sc Organic Chemistry (Presidency), CSIR-NET Qualified',
    experienceYears: 7,
    bio: 'Transforming Organic and Inorganic Chemistry from rote memorization into logical reaction pathways, electron pushes, and rapid memory mnemonics.',
    aboutLong: 'Ananya has helped hundreds of medical aspirants score 160+ out of 180 in NEET Chemistry. Her proprietary mind-maps and reaction flowcharts demystify tricky organic synthesis problems.',
    teachingStyle: 'Visual mind-maps, active recall quizzes, and timed reaction mechanism drills.',
    rating: 4.88,
    reviewCount: 94,
    hourlyRate: 850,
    location: 'Salt Lake, Kolkata',
    mode: 'Online',
    availableSlots: ['Tomorrow 2:00 PM', 'Thursday 5:00 PM', 'Friday 7:00 PM'],
    languages: ['English', 'Hindi', 'Bengali'],
    stats: {
      studentsTaught: 720,
      hoursCompleted: 1450,
      responseRate: '97%'
    },
    featured: true
  },
  {
    id: 't-4',
    name: 'Rohan Verma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    title: 'Python, AI & Computer Science Educator',
    headline: 'B.Tech IIT Bombay | Ex-Product Engineer | 6+ Yrs STEM Mentorship',
    subjects: ['Computer Science', 'Skill Development'],
    grades: ['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12', 'College'],
    examPrep: ['CBSE CS (Python)', 'ICSE Java', 'Coding Competitions'],
    qualifications: 'B.Tech Computer Science (IIT Bombay)',
    experienceYears: 6,
    bio: 'Hands-on programming coach teaching Python, algorithmic thinking, web apps, and AI fundamentals to young learners with real-world interactive projects.',
    aboutLong: 'Rohan believes the best way to learn computing is by building real tools. Students in his sessions build calculators, games, database apps, and AI bots while learning fundamental algorithmic logic and data structures.',
    teachingStyle: 'Project-first, live coding sessions, and peer code reviews.',
    rating: 4.96,
    reviewCount: 165,
    hourlyRate: 1100,
    location: 'HSR Layout, Bengaluru',
    mode: 'Online',
    availableSlots: ['Today 7:00 PM', 'Tomorrow 6:00 PM', 'Saturday 2:00 PM', 'Sunday 11:00 AM'],
    languages: ['English', 'Hindi'],
    stats: {
      studentsTaught: 1100,
      hoursCompleted: 2100,
      responseRate: '100%'
    },
    featured: true
  },
  {
    id: 't-5',
    name: 'Dr. Meenakshi Joshi',
    avatar: 'https://images.unsplash.com/photo-1594824813571-638f02614d3f?auto=format&fit=crop&w=400&q=80',
    title: 'Biology & Medical Entrance Mentor',
    headline: 'MBBS, AIIMS New Delhi Alum | 10+ Yrs NEET Biology Faculty',
    subjects: ['Biology', 'Competitive Exam Preparation'],
    grades: ['Class 11', 'Class 12', 'Dropper'],
    examPrep: ['NEET', 'KVPY', 'CBSE Boards'],
    qualifications: 'MBBS (AIIMS New Delhi), Medical Educator',
    experienceYears: 10,
    bio: 'Clinical perspective brought directly into NCERT Biology: Human Physiology, Genetics, Biotechnology, and Ecology thoroughly mastered for NEET 360/360 target.',
    aboutLong: 'Dr. Meenakshi combines real clinical examples with NCERT line-by-line decoding. She emphasizes diagrammatic mastery, assertion-reasoning logic, and high-frequency NEET question trends.',
    teachingStyle: 'Clinical storytelling, NCERT line-by-line analysis, and high-yield flashcards.',
    rating: 4.94,
    reviewCount: 128,
    hourlyRate: 1300,
    location: 'South Extension, New Delhi',
    mode: 'Both',
    availableSlots: ['Tomorrow 10:00 AM', 'Tomorrow 5:00 PM', 'Friday 4:00 PM'],
    languages: ['English', 'Hindi'],
    stats: {
      studentsTaught: 1350,
      hoursCompleted: 2400,
      responseRate: '98%'
    },
    featured: false
  },
  {
    id: 't-6',
    name: 'Vikramaditya Rao',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    title: 'Commerce, Accountancy & Economics Coach',
    headline: 'FCA Chartered Accountant | 8+ Yrs CBSE Commerce & CA Foundation',
    subjects: ['Commerce and Accounting', 'School Tuition'],
    grades: ['Class 11', 'Class 12', 'CA Foundation'],
    examPrep: ['CBSE Boards', 'ISC Boards', 'CA Foundation'],
    qualifications: 'Chartered Accountant (ICAI), B.Com Honours (SRCC)',
    experienceYears: 8,
    bio: 'Making balance sheets, partnership accounts, macroeconomics, and financial management straightforward with real corporate balance sheets and case studies.',
    aboutLong: 'Vikramaditya brings real corporate finance perspective from Big-4 consulting into the high school classroom. His students regularly achieve 98+ in CBSE Class 12 Board Accountancy.',
    teachingStyle: 'Case-study driven, ledger clarity, and board answer-presentation techniques.',
    rating: 4.9,
    reviewCount: 86,
    hourlyRate: 900,
    location: 'Bandra West, Mumbai',
    mode: 'Both',
    availableSlots: ['Today 4:00 PM', 'Wednesday 6:00 PM', 'Saturday 11:30 AM'],
    languages: ['English', 'Hindi', 'Marathi'],
    stats: {
      studentsTaught: 680,
      hoursCompleted: 1300,
      responseRate: '96%'
    },
    featured: false
  },
  {
    id: 't-7',
    name: 'Sunita Sundaram',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    title: 'English Literature, Creative Writing & IELTS Coach',
    headline: 'Cambridge CELTA Certified | M.A. English | 11+ Yrs Experience',
    subjects: ['English', 'Skill Development'],
    grades: ['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'],
    examPrep: ['CBSE / ICSE English', 'IELTS Academic', 'Debate & Public Speaking'],
    qualifications: 'M.A. English Literature (JNU), Cambridge CELTA',
    experienceYears: 11,
    bio: 'Empowering students with nuanced essay structuring, critical literary analysis, clear verbal articulation, and top band scores in school and international exams.',
    aboutLong: 'Sunita has mentored national debate champions and helped over 500 students obtain 8.0+ in IELTS. She specializes in grammar mechanics, vocabulary expansion, and expressive analytical writing.',
    teachingStyle: 'Socratic dialogue, constructive essay critique, and voice modulation training.',
    rating: 4.93,
    reviewCount: 112,
    hourlyRate: 800,
    location: 'Adyar, Chennai',
    mode: 'Online',
    availableSlots: ['Tomorrow 4:00 PM', 'Thursday 11:00 AM', 'Saturday 3:00 PM'],
    languages: ['English', 'Hindi', 'Tamil'],
    stats: {
      studentsTaught: 890,
      hoursCompleted: 1750,
      responseRate: '99%'
    },
    featured: false
  },
  {
    id: 't-8',
    name: 'Arvind Krishnan',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    title: 'Olympiad Math & Speed Calculation Specialist',
    headline: 'Math Olympiad Trainer | B.Sc Math (Honours) | 5+ Yrs Coaching',
    subjects: ['Mathematics', 'Skill Development', 'Competitive Exam Preparation'],
    grades: ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
    examPrep: ['NTSE', 'PRMO / IOQM', 'Vedic Math Speed Drills'],
    qualifications: 'B.Sc Mathematics, National Olympiad Rank Holder',
    experienceYears: 5,
    bio: 'Igniting curiosity for mathematics through mental speed tricks, competitive puzzles, and foundational Olympiad geometry and combinatorics.',
    aboutLong: 'Arvind is known for turning math into an exhilarating sport. His speed math drills enable young learners to calculate 4x faster than conventional methods.',
    teachingStyle: 'Gamified puzzle challenges, speed mental math drills, and proof-based reasoning.',
    rating: 4.89,
    reviewCount: 74,
    hourlyRate: 750,
    location: 'Sector 62, Noida',
    mode: 'Online',
    availableSlots: ['Today 8:00 PM', 'Tomorrow 7:00 PM', 'Sunday 10:00 AM'],
    languages: ['English', 'Hindi'],
    stats: {
      studentsTaught: 540,
      hoursCompleted: 980,
      responseRate: '97%'
    },
    featured: false
  }
];

export const MOCK_BATCHES: Batch[] = [
  {
    id: 'b-1',
    title: 'JEE Advanced Physics 2026: Complete Mechanics & Electrodynamics Sprint',
    thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=600&q=80',
    teacherId: 't-1',
    teacherName: 'Dr. Rajesh Sharma',
    teacherAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    teacherRole: 'Ex-Allen Faculty, Ph.D. IIT Roorkee',
    subject: 'Physics',
    grade: 'Class 12 & Droppers',
    examTarget: 'JEE Main & Advanced 2026',
    startDate: 'Nov 02, 2026',
    scheduleDays: ['Mon', 'Wed', 'Fri'],
    scheduleTime: '6:30 PM - 8:00 PM IST',
    durationWeeks: 12,
    totalSessions: 36,
    totalSeats: 18,
    availableSeats: 4,
    courseFee: 5999,
    originalFee: 8499,
    mode: 'Online Live',
    location: 'Live Interactive Video Classroom',
    badgeStatus: 'Filling Fast',
    featured: true,
    description: 'An intensive, concept-to-rank live batch covering high-weightage topics in Mechanics, Electrodynamics, and Magnetism with live problem-solving and weekly mock analysis.',
    learningOutcomes: [
      'Master high-difficulty JEE Advanced previous years questions (PYQs)',
      'Develop rapid intuition for multi-concept rotational motion & electromagnetism',
      'Learn systematic error avoidance and time management in numerical sections',
      'Receive weekly graded assignments with live doubt resolution'
    ],
    syllabus: [
      { week: 1, title: 'Kinematics & Newton’s Laws in Non-Inertial Frames', topics: ['Relative motion in 2D', 'Constraint relations', 'Friction & Pseudo forces'] },
      { week: 2, title: 'Work, Energy & Conservative Force Fields', topics: ['Potential energy curves', 'Work-energy theorem in non-uniform fields', 'Variable mass systems'] },
      { week: 3, title: 'Center of Mass & Impulse Collisions', topics: ['Variable density center of mass', 'Oblique collisions', 'Momentum conservation drills'] },
      { week: 4, title: 'Rotational Dynamics & Rolling Without Slipping', topics: ['Moment of inertia tensor basics', 'Toppling vs sliding', 'Angular momentum conservation'] },
      { week: 5, title: 'Electrostatics: Continuous Charge Distributions & Gauss Law', topics: ['Field calculations for symmetric geometries', 'Electrostatic potential energy', 'Conductor charge distribution'] },
      { week: 6, title: 'Dielectrics & Capacitance Networks', topics: ['Capacitors with dielectric slabs', 'Force between capacitor plates', 'RC circuit transients'] }
    ]
  },
  {
    id: 'b-2',
    title: 'CBSE Class 10 Board Accelerator: High-Scoring Mathematics Masterclass',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
    teacherId: 't-2',
    teacherName: 'Priya Nair',
    teacherAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    teacherRole: 'M.Sc IIT Delhi, 9+ Yrs Board Coaching',
    subject: 'Mathematics',
    grade: 'Class 10',
    examTarget: 'CBSE Board Examination 2026',
    startDate: 'Oct 25, 2026',
    scheduleDays: ['Tue', 'Thu', 'Sat'],
    scheduleTime: '5:00 PM - 6:30 PM IST',
    durationWeeks: 10,
    totalSessions: 30,
    totalSeats: 20,
    availableSeats: 6,
    courseFee: 3999,
    originalFee: 5499,
    mode: 'Online Live',
    location: 'Live Interactive Video Classroom',
    badgeStatus: 'Few Seats Left',
    featured: true,
    description: 'Designed to propel Class 10 students from 75% to 95%+ in Board Mathematics through step-by-step NCERT Exemplar mastery, theorem proofs, and standard presentation formats.',
    learningOutcomes: [
      'Master all NCERT Exemplar and Standard Board theorem proofs',
      'Perfect trigonometric identities and height & distance word problems',
      'Learn exact CBSE marking scheme criteria to avoid step-mark deductions',
      'Solve 5 complete timed pre-board sample papers with personalized feedback'
    ],
    syllabus: [
      { week: 1, title: 'Real Numbers & Polynomials Master Drill', topics: ['Euclid’s division & fundamental theorem', 'Relationship between zeroes & coefficients', 'Division algorithm'] },
      { week: 2, title: 'Pair of Linear Equations & Word Problems', topics: ['Graphical method', 'Algebraic methods: substitution, elimination', 'Equations reducible to linear form'] },
      { week: 3, title: 'Quadratic Equations & Arithmetic Progressions', topics: ['Nature of roots & discriminant', 'Word problems on time & distance', 'Sum of n terms in real-life problems'] },
      { week: 4, title: 'Triangles: Similarity & Key Theorem Proofs', topics: ['Basic proportionality theorem (BPT)', 'Converse of BPT', 'Criteria for similarity of triangles'] },
      { week: 5, title: 'Trigonometry & Heights and Distances', topics: ['Trigonometric identities proof drills', 'Angle of elevation & depression problems', 'Double observation point problems'] }
    ]
  },
  {
    id: 'b-3',
    title: 'NEET 2026 Organic Chemistry & Reaction Mechanisms Intensive',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
    teacherId: 't-3',
    teacherName: 'Ananya Sen',
    teacherAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    teacherRole: 'M.Sc Organic Chemistry, CSIR-NET',
    subject: 'Chemistry',
    grade: 'Class 11, 12 & Droppers',
    examTarget: 'NEET 2026 Medical Entrance',
    startDate: 'Nov 05, 2026',
    scheduleDays: ['Tue', 'Fri', 'Sun'],
    scheduleTime: '7:00 PM - 8:30 PM IST',
    durationWeeks: 10,
    totalSessions: 30,
    totalSeats: 25,
    availableSeats: 8,
    courseFee: 4499,
    originalFee: 6500,
    mode: 'Online Live',
    location: 'Live Interactive Video Classroom',
    badgeStatus: 'Popular',
    featured: true,
    description: 'Transform tricky organic chemistry into a scoring powerhouse for NEET. Covers GOC, Hydrocarbons, Haloalkanes, Carbonyl compounds, and Biomolecules with high-yield memory mnemonics.',
    learningOutcomes: [
      'Decipher General Organic Chemistry (GOC): Resonance, Inductive, Hyperconjugation',
      'Predict electrophilic and nucleophilic substitution outcomes effortlessly',
      'Solve NEET organic questions in under 45 seconds each',
      'Master 50+ Named Reactions with specific catalyst conditions'
    ],
    syllabus: [
      { week: 1, title: 'GOC Mastery: Electronic Effects & Stability', topics: ['Inductive & resonance effects', 'Carbocation, carbanion & radical stabilities', 'Aromaticity rules (Hückel)'] },
      { week: 2, title: 'Isomerism & Stereochemistry', topics: ['Geometrical isomerism (cis/trans, E/Z)', 'Optical isomerism & chiral centers', 'Enantiomers and diastereomers'] },
      { week: 3, title: 'Hydrocarbons: Alkanes, Alkenes & Alkynes', topics: ['Free radical halogenation', 'Electrophilic addition & Markovnikov rule', 'Ozonolysis & polymerization'] },
      { week: 4, title: 'Haloalkanes & Haloarenes: SN1 vs SN2', topics: ['Nucleophilic substitution mechanisms', 'Elimination vs substitution kinetics', 'Reactions of chlorobenzene'] }
    ]
  },
  {
    id: 'b-4',
    title: 'Python Programming & AI Foundations for High Schoolers (Class 8-12)',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    teacherId: 't-4',
    teacherName: 'Rohan Verma',
    teacherAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    teacherRole: 'B.Tech IIT Bombay, Ex-Software Engineer',
    subject: 'Computer Science',
    grade: 'Class 8 to Class 12',
    examTarget: 'School CS Syllabus & Real-World Coding Skills',
    startDate: 'Oct 28, 2026',
    scheduleDays: ['Wed', 'Sat'],
    scheduleTime: '5:30 PM - 7:00 PM IST',
    durationWeeks: 8,
    totalSessions: 16,
    totalSeats: 15,
    availableSeats: 3,
    courseFee: 3499,
    originalFee: 4999,
    mode: 'Online Live',
    location: 'Interactive Code Playground',
    badgeStatus: 'Filling Fast',
    featured: false,
    description: 'Learn computational thinking, clean code writing, data analysis, and build your first AI chatbot. Perfectly aligns with CBSE/ICSE curriculum while giving hands-on industry coding skills.',
    learningOutcomes: [
      'Write clean, idiomatic Python code with data structures & functions',
      'Build 4 complete projects: Text Adventure, Expense Tracker, Web Scraper, AI Chatbot',
      'Understand how machine learning and generative AI work under the hood',
      'Earn a verifiable Certificate of Completion for academic portfolios'
    ],
    syllabus: [
      { week: 1, title: 'Python Syntax, Variables & Control Flow', topics: ['Data types & type casting', 'Conditionals and logical operators', 'Loops & pattern challenges'] },
      { week: 2, title: 'Data Structures: Lists, Tuples & Dictionaries', topics: ['List comprehensions', 'Dictionary manipulation', 'Sets and hashing concepts'] },
      { week: 3, title: 'Functions, Modular Programming & File I/O', topics: ['Defining functions with parameters', 'Lambda functions & recursion', 'Reading and writing JSON/CSV files'] },
      { week: 4, title: 'Introduction to AI & Building an Intelligent Bot', topics: ['How LLMs and NLP work', 'Using Python with APIs', 'Deploying a terminal assistant'] }
    ]
  },
  {
    id: 'b-5',
    title: 'Class 12 Board Commerce, Economics & Accountancy Crash Batch',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    teacherId: 't-6',
    teacherName: 'Vikramaditya Rao',
    teacherAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    teacherRole: 'FCA Chartered Accountant, SRCC Alum',
    subject: 'Commerce and Accounting',
    grade: 'Class 12',
    examTarget: 'CBSE & ISC Board Exam 2026',
    startDate: 'Nov 10, 2026',
    scheduleDays: ['Mon', 'Thu', 'Sat'],
    scheduleTime: '6:00 PM - 7:30 PM IST',
    durationWeeks: 8,
    totalSessions: 24,
    totalSeats: 20,
    availableSeats: 9,
    courseFee: 3799,
    originalFee: 5200,
    mode: 'Online Live',
    location: 'Live Interactive Video Classroom',
    badgeStatus: 'Starting Soon',
    featured: false,
    description: 'Master partnership accounts, company accounts (shares & debentures), cash flow statements, and macroeconomic indicators with rapid board answer writing techniques.',
    learningOutcomes: [
      'Solve 8-mark partnership and share forfeiture questions with zero balance errors',
      'Master National Income calculation formulas and circular flow diagrams',
      'Learn standard CBSE presentation formatting to score 98+ marks',
      '3 full mock exams with detailed examiner feedback'
    ],
    syllabus: [
      { week: 1, title: 'Accounting for Partnership: Fundamentals & Goodwill', topics: ['P&L Appropriation account', 'Capital accounts: fixed vs fluctuating', 'Valuation of goodwill methods'] },
      { week: 2, title: 'Admission & Retirement of a Partner', topics: ['Revaluation account preparation', 'Treatment of accumulated reserves', 'Capital adjustment scenarios'] },
      { week: 3, title: 'Company Accounts: Issue & Forfeiture of Shares', topics: ['Pro-rata allotment calculation tables', 'Forfeiture and reissue journal entries', 'Balance sheet disclosure of share capital'] }
    ]
  },
  {
    id: 'b-6',
    title: 'NEET Biology Master Series: Genetics, Cell Biology & Human Physiology',
    thumbnail: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80',
    teacherId: 't-5',
    teacherName: 'Dr. Meenakshi Joshi',
    teacherAvatar: 'https://images.unsplash.com/photo-1594824813571-638f02614d3f?auto=format&fit=crop&w=400&q=80',
    teacherRole: 'MBBS (AIIMS New Delhi), 10+ Yrs Mentorship',
    subject: 'Biology',
    grade: 'Class 11, 12 & Droppers',
    examTarget: 'NEET 2026 Target 360/360',
    startDate: 'Oct 30, 2026',
    scheduleDays: ['Mon', 'Wed', 'Sat'],
    scheduleTime: '4:30 PM - 6:00 PM IST',
    durationWeeks: 10,
    totalSessions: 30,
    totalSeats: 25,
    availableSeats: 5,
    courseFee: 4999,
    originalFee: 7000,
    mode: 'Online Live',
    location: 'Live Interactive Video Classroom',
    badgeStatus: 'Few Seats Left',
    featured: false,
    description: 'Covers the highest-scoring units of NCERT Biology. Decoding every single diagram, label, table, and summary line with clinical clarity and NEET question pattern alignment.',
    learningOutcomes: [
      'Complete mastery of Mendelian genetics, pedigree charts, and molecular inheritance',
      'Rapid recall of physiological mechanisms: Neural control, chemical coordination, respiration',
      'Solve 1,000+ past 10-year NEET biology questions with 100% accuracy',
      'Daily 15-minute speed quiz before every live session'
    ],
    syllabus: [
      { week: 1, title: 'Principles of Inheritance & Variation', topics: ['Mendel’s laws & deviations', 'Incomplete dominance & co-dominance', 'Pedigree analysis technique'] },
      { week: 2, title: 'Molecular Basis of Inheritance', topics: ['DNA packaging & replication', 'Transcription and translation machinery', 'Lac operon regulation'] },
      { week: 3, title: 'Cell Cycle & Cell Division', topics: ['Mitosis vs Meiosis stages', 'Significance of crossing over in pachytene', 'Regulation checkpoints'] }
    ]
  }
];

export const MOCK_CATEGORIES: SubjectCategory[] = [
  { id: 'cat-math', name: 'Mathematics', iconName: 'Calculator', description: 'Algebra, Calculus, Geometry & Board Preparation', teacherCount: 28, batchCount: 14, color: 'blue' },
  { id: 'cat-physics', name: 'Physics', iconName: 'Atom', description: 'Mechanics, Electromagnetism, Optics & Modern Physics', teacherCount: 22, batchCount: 11, color: 'navy' },
  { id: 'cat-chemistry', name: 'Chemistry', iconName: 'FlaskConical', description: 'Organic, Inorganic & Physical Chemistry for Boards & NEET', teacherCount: 19, batchCount: 9, color: 'teal' },
  { id: 'cat-biology', name: 'Biology', iconName: 'Dna', description: 'Botany, Zoology, Genetics & Human Physiology', teacherCount: 16, batchCount: 8, color: 'emerald' },
  { id: 'cat-english', name: 'English', iconName: 'BookOpen', description: 'Literature, Grammar, Creative Writing & IELTS Speaking', teacherCount: 18, batchCount: 7, color: 'indigo' },
  { id: 'cat-cs', name: 'Computer Science', iconName: 'Code', description: 'Python, Java, Web Development & Algorithmic Problem Solving', teacherCount: 24, batchCount: 12, color: 'violet' },
  { id: 'cat-commerce', name: 'Commerce & Accounting', iconName: 'BarChart3', description: 'Accountancy, Business Studies & Economics', teacherCount: 14, batchCount: 6, color: 'amber' },
  { id: 'cat-exam', name: 'Competitive Exam Preparation', iconName: 'Trophy', description: 'Targeted coaching for JEE Main/Adv, NEET, CUET & Olympiads', teacherCount: 35, batchCount: 18, color: 'rose' },
  { id: 'cat-tuition', name: 'School Tuition', iconName: 'GraduationCap', description: 'Grades 6–12 regular subject tuition & homework support', teacherCount: 42, batchCount: 20, color: 'cyan' },
  { id: 'cat-skills', name: 'Skill Development', iconName: 'Sparkles', description: 'Public speaking, Speed Math, Robotics & Critical Reasoning', teacherCount: 15, batchCount: 8, color: 'orange' }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Aarav Mehta',
    role: 'Grade 12 Student (JEE Aspirant), Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'The 1-on-1 coaching with Dr. Rajesh Sharma completely transformed my Physics scores. Being able to ask specific questions about rotational dynamics without peer pressure was a game-changer.',
    courseOrSubject: 'JEE Advanced Physics',
    format: '1-on-1 Coaching'
  },
  {
    id: 'test-2',
    author: 'Sunil & Kavita Desai',
    role: 'Parents of Class 10 Student, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'We enrolled our daughter in Priya Nair’s Class 10 Math batch. The small batch size (only 14 students) meant she received personal attention while learning alongside motivated peers. Her term score jumped to 96%.',
    courseOrSubject: 'CBSE Class 10 Mathematics',
    format: 'Batch Coaching'
  },
  {
    id: 'test-3',
    author: 'Ritika Sengupta',
    role: 'NEET 2025 Qualifier (Scored 675/720), Kolkata',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Ananya Ma’am’s Organic Chemistry reaction flowcharts saved me countless hours of cramming. Her structured batches and instant doubt resolution made all the difference.',
    courseOrSubject: 'NEET Organic Chemistry',
    format: 'Batch Coaching'
  },
  {
    id: 'test-4',
    author: 'Aditya Swaminathan',
    role: 'Class 11 Student, Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Rohan’s Python course inspired me to build my own school club portal. The switching panel on EDUFIED made it so easy to compare 1-on-1 mentorship with group projects.',
    courseOrSubject: 'Python & AI Foundations',
    format: '1-on-1 Coaching'
  }
];

export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How does EDUFIED work?',
    answer: 'EDUFIED is a digital learning platform designed to connect motivated students with verified expert educators. Students can choose between personalized 1-on-1 coaching for tailored guidance, or structured group batches for collaborative learning. Simply browse educators or batches, check available timings, and book or enroll with demo confirmation.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'What is the difference between 1-on-1 coaching and batches?',
    answer: '1-on-1 Coaching provides dedicated individual attention where the teacher customizes lessons, pacing, and problem sets specifically for your goals. Group Batches follow a structured multi-week curriculum, fixed schedules, collaborative peer interaction, and an economical fee structure.'
  },
  {
    id: 'faq-3',
    category: 'Students',
    question: 'How do I book a teacher for a 1-on-1 session?',
    answer: 'Browse teacher profiles using our search and subject filters, click "Book a Session", select your desired date and available time slot, choose your session duration (60 or 90 minutes), and confirm. In this prototype, you will receive an immediate simulated booking confirmation with demo meeting access.'
  },
  {
    id: 'faq-4',
    category: 'Students',
    question: 'How do I join a batch?',
    answer: 'Navigate to "Explore Batches" or switch to the Batch panel on the homepage. View the complete syllabus, weekly schedule, batch size, and start date. Click "Join Batch", enter your student details, and complete the demo enrollment flow to secure your seat.'
  },
  {
    id: 'faq-5',
    category: 'Teachers',
    question: 'Can teachers set their own fees and schedules?',
    answer: 'Yes! EDUFIED empowers educators with complete autonomy. Teachers can define their hourly rates for 1-on-1 sessions, design their own multi-week batch offerings, set batch fees, and manage available calendar slots directly from the Teacher Dashboard.'
  },
  {
    id: 'faq-6',
    category: 'Teachers',
    question: 'How can I become a teacher on EDUFIED?',
    answer: 'Click "Become a Teacher" in the navigation bar or visit the dedicated onboarding section. Fill out the application form with your academic qualifications, subjects taught, teaching experience, and preferred format. Applications are reviewed promptly.'
  },
  {
    id: 'faq-7',
    category: 'General',
    question: 'Can I learn online or in-person?',
    answer: 'Both! Most sessions and batches are conducted via interactive live video classrooms with real-time screen sharing and digital whiteboards. Where indicated on teacher profiles, in-person offline sessions are also supported in designated localities.'
  },
  {
    id: 'faq-8',
    category: 'Payments',
    question: 'How do cancellations, rescheduling, and refunds work?',
    answer: 'In this prototype, sample cancellation and rescheduling policies are displayed as placeholders. In live operation, students can reschedule 1-on-1 sessions up to 6 hours before the start time without penalty, and batches offer a 100% satisfaction guarantee before the second live class.'
  }
];

export const DEMO_STUDENT_USER: User = {
  id: 'usr-student-1',
  name: 'Devansh Kapur',
  email: 'devansh.student@edufied.demo',
  role: 'student',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  grade: 'Class 12 (Science)',
  phone: '+91 98765 43210',
  bio: 'Preparing for CBSE Class 12 Boards and JEE Main 2026. Passionate about Physics and Mathematics.'
};

export const DEMO_TEACHER_USER: User = {
  id: 'usr-teacher-1',
  name: 'Dr. Rajesh Sharma',
  email: 'rajesh.sharma@edufied.demo',
  role: 'teacher',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  phone: '+91 98111 22334',
  subjects: ['Physics', 'Competitive Exam Preparation'],
  bio: 'Senior Physics Mentor & Ex-Allen Faculty with 12+ years of experience helping students crack top ranks.'
};

export const INITIAL_DEMO_BOOKINGS: Booking[] = [
  {
    id: 'bk-101',
    teacherId: 't-1',
    teacherName: 'Dr. Rajesh Sharma',
    teacherAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    subject: 'Physics',
    date: 'Tomorrow, Oct 13, 2026',
    timeSlot: '5:00 PM - 6:00 PM',
    durationMinutes: 60,
    fee: 1200,
    studentName: 'Devansh Kapur',
    studentEmail: 'devansh.student@edufied.demo',
    studentPhone: '+91 98765 43210',
    notes: 'Rotational dynamics doubt clearing and constraint problems',
    status: 'Confirmed',
    meetingLink: 'https://meet.edufied.demo/live/phy-101',
    createdAt: '2026-10-10'
  },
  {
    id: 'bk-102',
    teacherId: 't-2',
    teacherName: 'Priya Nair',
    teacherAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    subject: 'Mathematics',
    date: 'Oct 16, 2026',
    timeSlot: '3:00 PM - 4:00 PM',
    durationMinutes: 60,
    fee: 950,
    studentName: 'Devansh Kapur',
    studentEmail: 'devansh.student@edufied.demo',
    studentPhone: '+91 98765 43210',
    notes: 'Trigonometric identities proof drills',
    status: 'Confirmed',
    meetingLink: 'https://meet.edufied.demo/live/math-102',
    createdAt: '2026-10-09'
  }
];

export const INITIAL_DEMO_ENROLLMENTS: Enrollment[] = [
  {
    id: 'enr-201',
    batchId: 'b-1',
    batchTitle: 'JEE Advanced Physics 2026: Complete Mechanics & Electrodynamics Sprint',
    teacherName: 'Dr. Rajesh Sharma',
    teacherAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    subject: 'Physics',
    scheduleTime: 'Mon, Wed, Fri • 6:30 PM - 8:00 PM',
    startDate: 'Nov 02, 2026',
    feePaid: 5999,
    studentName: 'Devansh Kapur',
    studentEmail: 'devansh.student@edufied.demo',
    studentPhone: '+91 98765 43210',
    status: 'Active',
    enrolledAt: '2026-10-08',
    classroomLink: 'https://classroom.edufied.demo/batch/jee-physics-b1'
  }
];
