import {
  AdmissionApplication,
  AcademicResult,
  AttendanceRecord,
  FeeLedger,
  NewsArticle,
  SchoolClass,
  Student,
  User,
  ContactMessage,
  AuditLog,
} from '../types';

export const SCHOOL_INFO = {
  name: 'Peculiar College Doma',
  shortName: 'Peculiar College',
  tagline: 'Nurturing minds, building character, and raising leaders.',
  motto: 'Knowledge, Character and Excellence',
  founded: 2006,
  location: 'Off Ruttu Road, Doma, Nasarawa State, Nigeria',
  displayAddress: '09, Peace Road / Off Ruttu Road, Doma, Nasarawa State',
  phone: '+234 904 339 0882',
  altPhone: '0904 339 0882',
  email: 'peculiarschoolsdoma2006@gmail.com',
  officialEmail: 'info@peculiarschoolsdoma.edu.ng',
  officeHours: '8:00 AM – 3:30 PM, Monday – Friday',
  currentSession: '2026/2027 Session',
  admissionStatusText: 'Admission Currently in Progress for Nursery, Primary & Secondary',
  socialFacebook: 'https://facebook.com/peculiarcollegedoma',
  whatsappUrl: 'https://wa.me/2349043390882?text=Hello%20Peculiar%20College%20Doma%2C%20I%20would%20like%20to%20inquire%20about%20admissions.',
};

export const INITIAL_USERS: User[] = [
  {
    id: 'usr-super-admin',
    email: 'harunamuhammadosori@gmail.com',
    name: 'Muhammad Haruna',
    role: 'SUPER_ADMIN',
    phone: '08123964971',
    isActive: true,
    isDemo: false,
    tokenVersion: 0,
    hasCustomPassword: true,
    mustChangePassword: false,
    password: '$2b$12$1jkR/gIeueN2So/tHn47HOoo2dEw/u09o/YNBUpn52WkedAEei0dq',
    createdAt: '2025-01-01T00:00:00Z',
  },
];

export const INITIAL_CLASSES: SchoolClass[] = [
  { id: 'cls-nur1', name: 'Nursery 1', arm: 'NURSERY', classTeacher: 'Mrs. Grace Okon', capacity: 25, studentCount: 0, termFee: 35000 },
  { id: 'cls-nur2', name: 'Nursery 2', arm: 'NURSERY', classTeacher: 'Miss Joy Bala', capacity: 25, studentCount: 0, termFee: 35000 },
  { id: 'cls-nur3', name: 'Nursery 3 (KG)', arm: 'NURSERY', classTeacher: 'Mrs. Fatima Danladi', capacity: 25, studentCount: 0, termFee: 35000 },
  { id: 'cls-pri1', name: 'Primary 1', arm: 'PRIMARY', classTeacher: 'Mr. Paul John', capacity: 30, studentCount: 0, termFee: 42000 },
  { id: 'cls-pri2', name: 'Primary 2', arm: 'PRIMARY', classTeacher: 'Mrs. Mary Oche', capacity: 30, studentCount: 0, termFee: 42000 },
  { id: 'cls-pri3', name: 'Primary 3', arm: 'PRIMARY', classTeacher: 'Mr. Silas Sunday', capacity: 30, studentCount: 0, termFee: 42000 },
  { id: 'cls-pri4', name: 'Primary 4', arm: 'PRIMARY', classTeacher: 'Mrs. Comfort Yakubu', capacity: 30, studentCount: 0, termFee: 45000 },
  { id: 'cls-pri5', name: 'Primary 5', arm: 'PRIMARY', classTeacher: 'Mr. Jude Alabi', capacity: 30, studentCount: 0, termFee: 45000 },
  { id: 'cls-pri6', name: 'Primary 6', arm: 'PRIMARY', classTeacher: 'Mr. Timothy Dauda', capacity: 30, studentCount: 0, termFee: 48000 },
  { id: 'cls-jss1', name: 'JSS 1', arm: 'SECONDARY', classTeacher: 'Mr. Solomon Agbo', capacity: 35, studentCount: 0, termFee: 55000 },
  { id: 'cls-jss2', name: 'JSS 2', arm: 'SECONDARY', classTeacher: 'Mr. David O. Emmanuel', capacity: 35, studentCount: 0, termFee: 55000 },
  { id: 'cls-jss3', name: 'JSS 3', arm: 'SECONDARY', classTeacher: 'Mrs. Esther Kalu', capacity: 35, studentCount: 0, termFee: 58000 },
  { id: 'cls-sss1', name: 'SSS 1 (Senior Sec)', arm: 'SECONDARY', classTeacher: 'Mr. Peter Onoja', capacity: 35, studentCount: 0, termFee: 62000 },
  { id: 'cls-sss2', name: 'SSS 2 (Science & Arts)', arm: 'SECONDARY', classTeacher: 'Dr. Michael Bello', capacity: 35, studentCount: 0, termFee: 65000 },
  { id: 'cls-sss3', name: 'SSS 3 (Graduating Class)', arm: 'SECONDARY', classTeacher: 'Mrs. Victoria Shuaibu', capacity: 35, studentCount: 0, termFee: 70000 },
];

export const INITIAL_STUDENTS: Student[] = [];

export const INITIAL_RESULTS: AcademicResult[] = [];

export const INITIAL_ADMISSIONS: AdmissionApplication[] = [];

export const INITIAL_FEES: FeeLedger[] = [];

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: 'news-1',
    title: '2026/2027 Academic Session: Admission Now Open for All Arms',
    slug: '2026-2027-admission-open-all-arms',
    excerpt: 'Peculiar College Doma invites parents and guardians to enroll their children into Nursery, Primary, and Secondary classes for the upcoming academic session.',
    content: `We are pleased to announce that admission applications for the 2026/2027 academic session are now officially open across all educational arms: Nursery (Early Years), Primary (Foundational), and Secondary (College).
    
At Peculiar College Doma, we combine qualitative classroom instruction with strong moral foundations, disciplined leadership training, and engaging extracurricular sports. Admission forms are available online through our portal and at the school administration office.

Interested parents are encouraged to apply early as class capacities are strictly managed to maintain optimal student-teacher ratios.`,
    category: 'Announcement',
    featuredImage: '/school-media/front-view-gate.jpg',
    author: 'Admissions Office',
    authorRole: 'Registrar',
    publishDate: '2026-02-15',
    published: true,
    isImportantNotice: true,
  },
  {
    id: 'news-2',
    title: 'Inter-House Sports Championship: Purple (Faith) House Emerges Overall Champions',
    slug: 'inter-house-sports-championship-results',
    excerpt: 'An exciting showcase of athletic talent, sportsmanship, and teamwork culminated in a colorful trophy presentation ceremony at the school grounds.',
    content: `The annual Peculiar College Inter-House Sports competition concluded with breathtaking track and field events and a thrilling volleyball finale.

Students competed vigorously across four traditional houses: Purple (Faith), Orange (Grace), Blue (Peace), and Red (Hope). Purple House carried the day with an impressive tally of gold medals in volleyball, relays, and long jump, clinching the prestigious 2026 Principal Trophy.

The school management commends all participants, staff coordinators, and parents who turned out in large numbers to cheer our young champions.`,
    category: 'Sports',
    featuredImage: '/sport.jpg',
    author: 'Sports Committee',
    authorRole: 'Head of Physical & Health Education',
    publishDate: '2026-03-12',
    published: true,
  },
  {
    id: 'news-3',
    title: 'Resumption Timetable & Continuous Assessment Guidelines Released',
    slug: 'resumption-timetable-continuous-assessment',
    excerpt: 'Academic calendar update covering midterm break resumption, project submission dates, and preparations for terminal unified examinations.',
    content: `All students and parents are hereby notified that regular classes have resumed following the scheduled midterm break.

Teachers across Nursery, Primary, and Secondary sections have begun administering the second continuous assessment tests (CA 2). Parents are kindly advised to monitor their children's homework diaries and ensure regular study habits at home.`,
    category: 'Academic',
    featuredImage: '/school-media/examination-hall-interior.jpg',
    author: 'Academic Board',
    authorRole: 'Vice Principal (Academics)',
    publishDate: '2026-03-01',
    published: true,
  },
  {
    id: 'news-4',
    title: 'State-of-the-Art Science Laboratories & 24/7 Solar Power Facility Commissioned',
    slug: 'science-laboratories-solar-power-commissioned',
    excerpt: 'Peculiar College strengthens practical science education with upgraded Chemistry, Physics, and Biology laboratory apparatus backed by uninterrupted solar power.',
    content: `In our continued pursuit of academic distinction, the school board has completed comprehensive upgrades to our secondary school science laboratories and examination facilities.

The laboratories now house advanced analytical reagents, monocular optical microscopes, and electrical circuit test benches tailored to WAEC and NECO standards. An industrial solar inverter plant has also been commissioned to guarantee 24/7 power for computer studies and science practicals.`,
    category: 'Academic',
    featuredImage: '/school-media/chemistry-lab-glassware.jpg',
    author: 'Science Department',
    authorRole: 'Head of Sciences',
    publishDate: '2026-03-10',
    published: true,
  },
];

export const INITIAL_CONTACT_MESSAGES: ContactMessage[] = [];

export const INITIAL_AUDIT_LOGS: AuditLog[] = [
  {
    id: 'log-prod-init-001',
    timestamp: '2026-11-12T17:30:00.000Z',
    actorEmail: 'harunamuhammadosori@gmail.com',
    actorRole: 'SUPER_ADMIN',
    action: 'PRODUCTION_SYSTEM_INITIALIZATION',
    target: 'Peculiar College Doma Management System',
    details: 'Development testing accounts and dummy mock data purged. System live and ready for real student admissions, fee collections, and report card entry.',
    ipAddress: '127.0.0.1',
  },
];
