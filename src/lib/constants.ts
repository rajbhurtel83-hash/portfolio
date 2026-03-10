// ============================================
// FOUNDER OPERATING SYSTEM - CORE CONSTANTS
// ============================================

// ============================================
// SITE CONFIGURATION
// ============================================

export const SITE_CONFIG = {
  name: "Raj Bhurtel",
  title: "Raj Bhurtel — Engineer, Founder, Systems Architect",
  description: "An emerging systems architect building scalable digital infrastructure and tech-enabled ventures from Nepal to the world.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://rajbhurtel.com",
  ogImage: "/og-image.png",
  twitterHandle: "@rajbhurtel",
  locale: "en_US",
};

// ============================================
// PERSONAL IDENTITY
// ============================================

export const IDENTITY = {
  name: "Raj Bhurtel",
  title: "Engineer • Founder • Systems Architect",
  tagline: "Building scalable digital infrastructure from Nepal to the world",
  location: "Banepa, Kavre, Nepal",
  email: "rajbhurtel83@gmail.com",
  phone: "+977-9803084921",
  
  // Core Identities
  roles: [
    "Engineer",
    "Startup Founder",
    "Systems Thinker",
    "Embedded & Robotics Enthusiast",
    "AI & Web Architect",
    "Agile Practitioner",
    "Strategic Leader",
  ],
  
  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/raj-bhurtel",
    github: "https://github.com/rajbhurtel83-hash",
    twitter: "https://twitter.com/rajbhurtel",
    email: "mailto:rajbhurtel83@gmail.com",
  },
  
  // Education
  education: {
    current: {
      degree: "Bachelor in Computer Engineering",
      semester: "5th Semester",
      institution: "Khwopa Engineering College",
      affiliation: "Purbanchal University",
    },
    previous: {
      degree: "+2 Science",
      major: "Physics",
    },
  },
};

// ============================================
// NAVIGATION
// ============================================

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Ventures", href: "#ventures" },
  { label: "Experience", href: "#experience" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];



// ============================================
// THEME COLORS
// ============================================

export const THEME_COLORS = {
  primary: {
    royal: "#1d4ed8",
    royalLight: "#3b82f6",
    royalDark: "#1e3a8a",
  },
  accent: {
    gold: "#d4a843",
    goldLight: "#e8c675",
    goldDark: "#b8922f",
  },
  dark: {
    charcoal: "#0a0a0f",
    charcoal100: "#111118",
    charcoal200: "#18181f",
    charcoal300: "#1f1f28",
    charcoal400: "#2a2a35",
  },
  glass: {
    white: "rgba(255, 255, 255, 0.05)",
    blue: "rgba(59, 130, 246, 0.1)",
    gold: "rgba(212, 168, 67, 0.1)",
  },
};

// ============================================
// ANIMATION PRESETS
// ============================================

export const ANIMATIONS = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  },
  staggerContainer: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  },
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
};









// ============================================
// KONAMI CODE EASTER EGG
// ============================================

export const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

export const KEYBOARD_SHORTCUTS = {
  commandPalette: { key: "k", ctrl: true },
  search: { key: "/", ctrl: false },
  home: { key: "h", ctrl: false },
  projects: { key: "p", ctrl: false },
  contact: { key: "c", ctrl: false },
  toggleTheme: { key: "t", ctrl: true },
  toggleInvestorMode: { key: "i", ctrl: true },
  toggleEngineerMode: { key: "e", ctrl: true },
  aiChat: { key: "a", ctrl: true },
};

// ============================================
// PROJECT CATEGORIES DISPLAY
// ============================================

export const PROJECT_CATEGORY_LABELS: Record<string, string> = {
  SYSTEMS_PROGRAMMING: "Systems Programming",
  FULL_STACK: "Full Stack",
  ENTREPRENEURSHIP: "Entrepreneurship",
  AI_ML: "AI / Machine Learning",
  EMBEDDED: "Embedded Systems",
  ROBOTICS: "Robotics",
  WEB_APP: "Web Application",
  MOBILE_APP: "Mobile App",
  BLOCKCHAIN: "Blockchain",
  CYBERSECURITY: "Cybersecurity",
  OTHER: "Other",
};

export const STARTUP_STAGE_LABELS: Record<string, string> = {
  IDEA: "Idea Stage",
  MVP: "MVP",
  EARLY_TRACTION: "Early Traction",
  GROWTH: "Growth",
  SCALE: "Scale",
  ACQUIRED: "Acquired",
  CLOSED: "Closed",
};

// ============================================
// SEO KEYWORDS
// ============================================

export const SEO_KEYWORDS = [
  "Raj Bhurtel",
  "Computer Engineer Nepal",
  "Software Developer",
  "Startup Founder",
  "Embedded Systems",
  "Robotics",
  "AI Engineer",
  "Full Stack Developer",
  "Khwopa Engineering College",
  "Tech Entrepreneur Nepal",
  "Web Developer Nepal",
  "Systems Architect",
  "Hult Prize",
  "Bastra",
  "Elysian Official",
];



// ============================================
// THREE.JS SCENE CONFIG
// ============================================

export const THREE_CONFIG = {
  hero: {
    particleCount: 2000,
    particleSize: 0.015,
    rotationSpeed: 0.0005,
    color: {
      primary: 0x3b82f6,
      secondary: 0xd4a843,
    },
  },
  background: {
    gridSize: 50,
    gridDivisions: 50,
    fogNear: 1,
    fogFar: 15,
  },
};
