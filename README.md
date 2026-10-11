# EDUFIED — Online Coaching Platform Prototype

> **“Learn Your Way. Achieve Your Goals.”**

EDUFIED is a modern digital coaching platform that connects students with verified, qualified teachers. The platform seamlessly bridges two distinct learning paradigms:
1. **Personalized 1-on-1 Coaching**: Tailored individual attention, custom pacing, and personalized doubt resolution.
2. **Structured Group Batches**: Small interactive cohorts (15–20 learners) following a multi-week roadmap with weekly live problem-solving and mock reviews.

---

## 🚀 Key Highlights & Architectural Features

### 1. Dual Switching Panels (“Choose Your Learning Style”)
* **Large Interactive Tabs**: Switch dynamically between **1-on-1 Coaching** and **Group Batches**.
* **Preserved Filter Context**: Search parameters, subjects, class/exam preferences, and budget ranges are retained when toggling back and forth.
* **Facet Filters**:
  * **1-on-1**: Subject, Class/grade, Target exam (JEE, NEET, CBSE), Hourly rate budget, Experience years, Online vs In-person, and sorting.
  * **Group Batches**: Target exam, Schedule timing, Course fee range, Urgency status (*Filling Fast*, *Starting Soon*).

### 2. Comprehensive Booking & Enrollment Flows
* **1-on-1 Coaching Booking**: Interactive date picker, slot selector, duration options (60m or 90m), student notes, dynamic fee calculation, and simulated confirmation with demo virtual room link.
* **Batch Enrollment Flow**: Student registration details, demo checkout mode (UPI, Card, NetBanking), and instant seat reservation.
* **State Persistence**: Bookings and enrollments are stored and synchronized to `localStorage`.

### 3. Student & Teacher Dashboards
* **Student Dashboard (`/student/dashboard`)**:
  * Welcome overview with learning stats.
  * Upcoming 1-on-1 coaching sessions with direct virtual room launch.
  * Enrolled group batches with timing countdown and classroom links.
  * Shortlisted / saved educators list.
  * Historical booking records.
* **Teacher Dashboard (`/teacher/dashboard`)**:
  * Educator profile summary and demo rating metrics.
  * Active batches overview.
  * Student inquiries and appointment requests.
  * **Live Batch Creation Form**: Teachers can launch a new multi-week cohort that immediately publishes to the platform catalog.
  * Weekly availability schedule manager.
  * Sample earnings breakdown (demo analytics).

---

## 🛠 Tech Stack

* **Frontend Framework**: React 19 (TypeScript)
* **Build Tooling**: Vite
* **Styling**: Tailwind CSS with custom brand palette
* **Routing**: React Router DOM (v7)
* **Icons**: Lucide React
* **Typography**: Inter & Manrope

---

## 🎨 Brand Design Tokens

* **Primary**: Deep Navy Blue (`#172554`)
* **Secondary**: Vibrant Electric Blue (`#3B82F6`)
* **Accent**: Fresh Teal (`#14B8A6`)
* **Background**: Slate Tint (`#F8FAFC`)

---

## 🧭 Routes & Pages

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Hero search bar, Dual Switching Panels, How It Works, Categories, Recruitment, Testimonials, FAQ |
| `/teachers` | **Find Teachers** | Complete searchable and filterable directory of 1-on-1 educators |
| `/teachers/:id` | **Teacher Profile** | Deep-dive educator bio, credentials, available calendar slots, and booking flow |
| `/batches` | **Explore Batches** | Searchable catalog of group cohorts with seat occupancy meters |
| `/batches/:id` | **Batch Details** | Detailed curriculum, weekly syllabus breakdown accordion, and enrollment |
| `/how-it-works` | **How It Works** | Detailed 1-on-1 vs Batches comparison guide and student/educator workflows |
| `/become-a-teacher` | **Teacher Onboarding** | Benefits, compensation structure, and multi-step teacher application form |
| `/login` | **Login** | Role selection (Student vs Educator) and 1-Click Fast Demo Login |
| `/signup` | **Sign Up** | Interactive onboarding registration |
| `/student/dashboard` | **Student Dashboard** | Sessions, enrolled cohorts, shortlisted teachers, and booking history |
| `/teacher/dashboard` | **Teacher Dashboard** | Cohorts, 1-on-1 appointments, live batch creator, and demo analytics |

---

## 💻 Local Development Setup

### 1. Install dependencies:
```bash
npm install
```

### 2. Start local development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for production:
```bash
npm run build
```

---

## 📄 Prototype Notice
This project is an interactive UI/UX and functional product prototype for **EDUFIED**. Payments, video meetings, user authentication, and financial figures are realistic demo simulations.
