/**
 * Rakta Seva Connect — Centralized Project Data
 * All configurable content, screenshot ordering, and download paths.
 */

// ---- Asset Paths (relative to /public or root) ----
export const ASSETS = {
  logo: '/assets/Rakta Seva.png',
  favicon: '/assets/favicon.png',
  apk: '/assets/Rakta-Seva Connect.apk',
  apkFilename: 'Rakta-Seva-Connect.apk',
};

// ---- Screenshots (mandatory order) ----
export const SCREENSHOTS = [
  {
    id: 'home',
    number: '01',
    shortLabel: 'Home',
    src: '/assets/home.jpeg',
    title: 'Emergency Dashboard',
    description:
      'The home screen brings together donor availability, eligibility and recovery reminders, critical blood requests, and quick access to important workflows.',
    highlights: [
      'Donor eligibility',
      'Availability toggle',
      'Critical blood requests',
      'Request Blood action',
    ],
  },
  {
    id: 'donors',
    number: '02',
    shortLabel: 'Donors',
    src: '/assets/donors.jpeg',
    title: 'Find Donors',
    description:
      'Search and filter the donor directory to explore available donors and access contact and direct-request actions.',
    highlights: [
      'Search by name or blood group',
      'Eligibility filtering',
      'Compatibility filtering',
      'Donor information',
      'Call and request actions',
    ],
  },
  {
    id: 'requests',
    number: '03',
    shortLabel: 'Requests',
    src: '/assets/requests.jpeg',
    title: 'Blood Request Management',
    description:
      'Review blood request details, including blood group, hospital information, urgency, units requested, and request status.',
    highlights: [
      'Blood group',
      'Hospital details',
      'Units required',
      'Urgency',
      'Request status',
      'AI-generated emergency appeal',
      'Donor response workflow',
    ],
  },
  {
    id: 'alerts',
    number: '04',
    shortLabel: 'Alerts',
    src: '/assets/alerts.jpeg',
    title: 'Notifications and Updates',
    description:
      'Notifications communicate important events in the donation workflow, including request responses and recipient-confirmed donation completion.',
    highlights: [
      'Donation confirmations',
      'Request responses',
      'Workflow updates',
    ],
  },
  {
    id: 'profile',
    number: '05',
    shortLabel: 'Profile',
    src: '/assets/profile.jpeg',
    title: 'Profile and Donation History',
    description:
      'The profile interface brings together account information, donation-related records, accepted requests, settings, and access to the AI chat assistant.',
    highlights: [
      'Blood-group display',
      'Donation and eligibility summary',
      'Edit Profile',
      'My Requests',
      'Donation History',
      'Accepted Requests',
      'AI Chat Assistant',
    ],
  },
];

// ---- Features ----
export const FEATURES = [
  {
    id: 'auth',
    icon: 'ShieldCheck',
    title: 'Authentication & Registration',
    description:
      'Account registration, login, profile creation, and authenticated access using Firebase Authentication.',
  },
  {
    id: 'discovery',
    icon: 'Search',
    title: 'Donor Discovery',
    description:
      'Search and blood-group filtering, donor availability information, eligibility messaging, and contact actions.',
  },
  {
    id: 'requests',
    icon: 'FileHeart',
    title: 'Blood Request Management',
    description:
      'Create and review requests with blood-group requirements, hospital details, required units, and urgency.',
  },
  {
    id: 'notifications',
    icon: 'Bell',
    title: 'Notifications',
    description:
      'Communicate incoming requests, donor responses, acceptance, and donation-related updates.',
  },
  {
    id: 'verification',
    icon: 'ClipboardCheck',
    title: 'Donation Verification & History',
    description:
      'Record recipient confirmation, approximate receipt time, optional feedback, and donation history through the application\'s workflow.',
  },
  {
    id: 'ai',
    icon: 'Sparkles',
    title: 'AI-Assisted Communication',
    description:
      'Use the configured Groq API integration for conversational assistance and AI-generated emergency appeals.',
  },
  {
    id: 'availability',
    icon: 'CalendarClock',
    title: 'Donor Availability & Recovery',
    description:
      'Allow donors to manage their availability and view recovery-period reminders based on recorded donation information.',
  },
];

// ---- Workflow Steps ----
export const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'Recipients search or filter the donor directory.',
    icon: 'Search',
  },
  {
    number: '02',
    title: 'Request',
    description: 'Recipients submit a blood request and contact a suitable donor.',
    icon: 'Send',
  },
  {
    number: '03',
    title: 'Respond',
    description: 'Donors receive requests and can accept or reject them.',
    icon: 'UserCheck',
  },
  {
    number: '04',
    title: 'Verify & Record',
    description:
      'Recipients confirm the reported outcome, and the application records the donation through its verification workflow.',
    icon: 'CheckCircle',
  },
];

// ---- Technology Stack ----
export const TECH_STACK = [
  {
    name: 'Kotlin',
    description: 'Android application logic',
    category: 'language',
  },
  {
    name: 'Jetpack Compose',
    description: 'Declarative Android UI',
    category: 'ui',
  },
  {
    name: 'Firebase Auth',
    description: 'Account authentication',
    category: 'backend',
  },
  {
    name: 'Cloud Firestore',
    description: 'Cloud data storage and synchronization',
    category: 'backend',
  },
  {
    name: 'Groq API',
    description: 'AI assistance and emergency message generation',
    category: 'ai',
  },
  {
    name: 'Android Studio',
    description: 'Development and build tooling',
    category: 'tooling',
  },
  {
    name: 'Gradle',
    description: 'Build automation',
    category: 'tooling',
  },
  {
    name: 'MVVM Pattern',
    description: 'Separation of UI, logic, and data',
    category: 'architecture',
  },
];

// ---- Contribution Areas ----
export const CONTRIBUTIONS = [
  {
    title: 'Android Interface Development',
    description:
      'Building responsive, accessible screens using Jetpack Compose, including the emergency dashboard, donor directory, request management, notifications, and profile interfaces.',
  },
  {
    title: 'Donor & Recipient Workflows',
    description:
      'Implementing the complete donation coordination flow — from donor discovery and blood request creation through acceptance, response tracking, and verification.',
  },
  {
    title: 'Firebase Integration',
    description:
      'Integrating Firebase Authentication for secure user management and Cloud Firestore for real-time data synchronization across all application features.',
  },
  {
    title: 'Request & Notification State Management',
    description:
      'Managing complex request lifecycle states, notification delivery, and real-time UI updates using MVVM architecture and Kotlin coroutines.',
  },
  {
    title: 'AI API Integration',
    description:
      'Implementing Groq API integration for the AI chat assistant and automated emergency appeal generation within blood request workflows.',
  },
  {
    title: 'Interface Refinement & Debugging',
    description:
      'Iterative UI/UX refinement, edge-case handling, accessibility improvements, and cross-device compatibility debugging throughout the development cycle.',
  },
];

// ---- Navigation Links ----
export const NAV_LINKS = [
  { label: 'Overview', id: 'overview' },
  { label: 'Features', id: 'features' },
  { label: 'Technology', id: 'technology' },
  { label: 'Resources', id: 'resources' },
];

// ---- Repository Configuration ----
// Primary configuration value for the project GitHub repository
export const REPOSITORY = {
  url: 'https://github.com/immraviprakash/Rakta-Seva-Connect-V2',
  title: 'Explore the Source Code',
  description:
    'Explore the engineering behind Rakta Seva Connect, from donor discovery and blood request management to Firebase integration and AI-assisted communication.',
  ctaLabel: 'View on GitHub',
};

