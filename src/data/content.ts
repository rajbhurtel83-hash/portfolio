export const siteConfig = {
  name: "Raj Bhurtel",
  title: "Raj Bhurtel — Engineer, Founder, Technology Innovator",
  description:
    "Results-driven Computer Engineering student, startup founder, and systems builder from Nepal focused on full-stack engineering, embedded systems, robotics, and scalable digital innovation.",
  url: "https://rajbhurtel83-hash.github.io",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/rajbhurtel83-hash",
    linkedin: "https://www.linkedin.com/in/raj-bhurtel",
    twitter: "",
    instagram: "https://www.instagram.com/the.__.tyrant",
    facebook: "https://www.facebook.com/share/14fKCWWsuyC/",
    email: "rajbhurtel83@gmail.com",
    phone: "+977-9803084921",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Technical Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Startups", href: "#startups" },
  { label: "Achievements", href: "#achievements" },
  { label: "Investing", href: "#investing" },
  { label: "Community Work", href: "#community" },
  { label: "Experience", href: "#experience" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  greeting: "Hi, I'm",
  name: "Raj Bhurtel",
  roles: [
    "Computer Engineering Student",
    "Full-Stack Developer",
    "Embedded Systems & Robotics Enthusiast",
    "Startup Founder",
    "Future Global Builder",
  ],
  description:
    "Engineer, startup founder, and technology innovator from Nepal building impactful systems at the intersection of software, embedded engineering, and entrepreneurship.",
  tagline: "Building practical technology for real-world impact.",
  cta: {
    projects: "Explore Projects",
    resume: "Download Resume",
    contact: "Contact Raj",
    askAI: "Ask My AI",
  },
};

export const professionalSummary =
  "Results-driven Computer Engineering student with expertise in full-stack web development, embedded systems, robotics, and startup execution. First Runner-Up at the Hult Prize (KhEC). Founder of two clothing brands. Passionate about building scalable technology solutions combining engineering precision with strategic business thinking.";

export const aboutContent = {
  headline: "Engineer mindset. Founder execution. Global ambition.",
  paragraphs: [
    "Hi, I'm Raj Bhurtel 👋. I’m a Computer Engineering student (5th semester) at Khwopa Engineering College, affiliated with Purbanchal University, and I focus on building practical, scalable technology systems.",
    "I work across full-stack web development, embedded systems, and robotics while also building startup ideas into real products. I’m currently developing NirvachanX, a digital voting platform for Nepal.",
    "Beyond engineering, I build businesses. I founded Elysian Official and Bastra Ladies Wear, and I’m deeply interested in market strategy, investor thinking, and long-term value creation.",
    "I’m currently doing a cybersecurity internship (March 5 – April 5), continuously sharpening my technical depth while expanding leadership and execution capacity.",
  ],
  stats: [
    { value: "2", label: "Brands Founded" },
    { value: "6+", label: "Major Projects" },
    { value: "1", label: "Hult Runner-Up" },
    { value: "5th", label: "Semester CE" },
  ],
  highlights: [
    "Data Enthusiast & Web Developer",
    "Embedded Systems & Robotics Enthusiast",
    "Founder of Elysian Official & Bastra Ladies Wear",
    "Based in Banepa, Kavre, Nepal",
  ],
};

export const currentWork = [
  "Developing web applications using Python and Django",
  "Building frontend systems with HTML, CSS, and JavaScript",
  "Creating embedded systems and robotics projects",
  "Developing tech startup MVP ideas",
  "Scaling clothing brands and business operations",
  "Building NirvachanX (digital voting system for Nepal)",
  "Completing Cybersecurity Internship (March 5 – April 5)",
];

export const skillCategories = [
  {
    title: "Programming",
    icon: "Code2",
    skills: [
      { name: "C", level: 85 },
      { name: "C#", level: 70 },
      { name: "C++", level: 85 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 84 },
    ],
  },
  {
    title: "Web & API",
    icon: "Globe",
    skills: [
      { name: "HTML5", level: 92 },
      { name: "CSS", level: 86 },
      { name: "Django", level: 82 },
      { name: "REST APIs", level: 80 },
      { name: "Next.js / TypeScript", level: 82 },
    ],
  },
  {
    title: "Database & Tools",
    icon: "Wrench",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 80 },
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "Jira / Agile", level: 78 },
      { name: "Cloudflare", level: 70 },
    ],
  },
  {
    title: "Embedded & Design",
    icon: "Users",
    skills: [
      { name: "Arduino", level: 82 },
      { name: "Sensors", level: 78 },
      { name: "Microcontrollers", level: 80 },
      { name: "Automation", level: 75 },
      { name: "Figma / Canva", level: 74 },
      { name: "Photoshop / Blender", level: 66 },
    ],
  },
];

export const projects = [
  {
    id: "ball-game-c",
    title: "Ball Game (C Programming)",
    shortDesc: "A core C programming project focused on game logic, memory handling, and control flow.",
    fullDesc:
      "A lightweight ball game developed in C to strengthen systems-level thinking, input handling, loop design, and modular logic implementation.",
    problemSolved:
      "Demonstrates foundational programming and algorithmic flow in low-level procedural architecture.",
    futureImprovements: [
      "Improve physics and collision behavior",
      "Add level progression and score persistence",
      "Refactor modules for extensibility",
    ],
    screenshots: ["/projects/ball-game-1.svg"],
    image: "/projects/ball-game-1.svg",
    techStack: ["C", "Data Structures", "Algorithmic Logic"],
    liveUrl: "",
    githubUrl: "https://github.com/rajbhurtel83-hash",
    category: "Systems Programming",
    featured: true,
  },
  {
    id: "movie-ticket-booking",
    title: "Movie Ticket Booking System",
    shortDesc: "C++ file-handling system with seat booking and cancellation workflows.",
    fullDesc:
      "A complete C++ console-based ticket booking system with seat reservation, cancellation support, and persistent storage through file handling.",
    problemSolved:
      "Solves local booking workflow management with transaction consistency in a file-based architecture.",
    futureImprovements: [
      "Migrate from file storage to SQL backend",
      "Add admin analytics dashboard",
      "Add payment simulation module",
    ],
    screenshots: ["/projects/movie-ticket-1.svg"],
    image: "/projects/movie-ticket-1.svg",
    techStack: ["C++", "File Handling", "OOP", "DSA"],
    liveUrl: "",
    githubUrl: "https://github.com/rajbhurtel83-hash",
    category: "Desktop / Systems",
    featured: true,
  },
  {
    id: "search-tree-visualizer",
    title: "Search Tree Visualization using C++ Graphics",
    shortDesc: "Visual representation of search tree algorithms for DSA learning and demonstration.",
    fullDesc:
      "A DSA-focused C++ project that visualizes search tree operations, helping learners understand insertion, traversal, and tree structure behavior.",
    problemSolved:
      "Transforms abstract tree algorithms into visual learning flows for better algorithm comprehension.",
    futureImprovements: [
      "Add balancing operations visualization",
      "Support multiple tree variants",
      "Export operation history",
    ],
    screenshots: ["/projects/search-tree-1.svg"],
    image: "/projects/search-tree-1.svg",
    techStack: ["C++", "Graphics", "Data Structures", "Algorithms"],
    liveUrl: "",
    githubUrl: "https://github.com/rajbhurtel83-hash",
    category: "DSA / Visualization",
    featured: true,
  },
  {
    id: "real-estate-rental",
    title: "Real Estate Property Rental System",
    shortDesc: "A property listing and rental workflow platform with user-centric browsing and management.",
    fullDesc:
      "A rental system designed to simplify listing, searching, and matching rental properties with suitable tenants through structured workflows.",
    problemSolved:
      "Addresses inefficient local rental discovery and listing management through a centralized digital system.",
    futureImprovements: [
      "Integrate maps and geolocation filters",
      "Add secure owner/tenant verification",
      "Introduce recommendation engine",
    ],
    screenshots: ["/projects/real-estate-1.svg"],
    image: "/projects/real-estate-1.svg",
    techStack: ["JavaScript", "HTML", "CSS", "Backend APIs"],
    liveUrl: "",
    githubUrl: "https://github.com/rajbhurtel83-hash",
    category: "Web Application",
    featured: true,
  },
  {
    id: "embedded-robotics-prototypes",
    title: "Embedded Systems & Robotics Prototypes",
    shortDesc: "Hands-on prototypes integrating sensors, automation logic, and controller-level programming.",
    fullDesc:
      "A collection of embedded and robotics prototypes focused on sensing, control, and real-world automation use-cases.",
    problemSolved:
      "Bridges software logic with hardware execution for reliable automation and control systems.",
    futureImprovements: [
      "Implement remote telemetry dashboard",
      "Improve power efficiency and reliability",
      "Add computer vision-assisted controls",
    ],
    screenshots: ["/projects/embedded-1.svg"],
    image: "/projects/embedded-1.svg",
    techStack: ["Arduino", "Microcontrollers", "Sensors", "Automation"],
    liveUrl: "",
    githubUrl: "https://github.com/rajbhurtel83-hash",
    category: "Embedded / Robotics",
    featured: true,
  },
  {
    id: "nirvachanx",
    title: "NirvachanX — Digital Voting Platform for Nepal",
    shortDesc: "Secure digital voting MVP concept aimed at transparency and accessibility.",
    fullDesc:
      "NirvachanX is an ambitious civic-tech initiative to modernize and secure voting workflows in Nepal using robust digital architecture.",
    problemSolved:
      "Targets trust, accessibility, and efficiency challenges in election processes through secure digital-first design.",
    futureImprovements: [
      "Add verifiable audit trail",
      "Integrate robust identity verification",
      "Run pilot simulation with institutional partners",
    ],
    screenshots: ["/projects/nirvachanx-1.svg"],
    image: "/projects/nirvachanx-1.svg",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Security Design"],
    liveUrl: "",
    githubUrl: "https://github.com/rajbhurtel83-hash",
    category: "Civic Tech",
    featured: true,
  },
];

export const leadershipRoles = [
  {
    title: "Executive Member",
    organization: "Knowledge Sharing Circle (KSC)",
    description:
      "Contribute to technical knowledge-sharing initiatives, organize peer learning programs, and support student development.",
  },
  {
    title: "Coordinator",
    organization: "Khwopa Futsal Circle",
    description:
      "Coordinate community events, manage activity planning, and support collaborative leadership initiatives.",
  },
  {
    title: "General Member",
    organization: "Code for Change Nepal",
    description:
      "Participate in community-driven technical initiatives and collaborative problem-solving programs.",
  },
  {
    title: "Organizer & Lead",
    organization: "Robotics and Embedded Systems Workshops",
    description:
      "Led workshops, mentored participants, and coordinated technical event execution in robotics and embedded systems.",
  },
];

export const communityWork = [
  "Organizer of multiple technical events",
  "Public speaking and presentation sessions",
  "Workshop leadership for robotics and embedded systems",
  "Technical collaboration across student and developer communities",
];

export const startupExperience = [
  {
    name: "Elysian Official",
    role: "Founder",
    description: "Men’s clothing brand focused on modern fashion.",
  },
  {
    name: "Bastra Ladies Wear",
    role: "Founder",
    description: "Women’s clothing brand focused on accessible and stylish products.",
  },
  {
    name: "Bastra (Hult Prize Idea)",
    role: "Startup Concept",
    description:
      "Platform where people can buy, sell, rent, and donate clothes to build a circular fashion ecosystem.",
  },
];

export const ventures = startupExperience.map((startup) => ({
  name: startup.name,
  tagline: startup.role,
  description: startup.description,
  stage: "Active",
  founded: "",
  role: startup.role,
  website: "",
  metrics: {},
  techStack: [],
  logo: "",
}));

export const achievements = [
  {
    title: "First Runner-Up — Hult Prize (KhEC)",
    description:
      "Secured First Runner-Up position by pitching an impactful startup model focused on sustainable clothing exchange.",
    year: "2024",
    icon: "Trophy",
  },
  {
    title: "Hackathon Participation",
    description:
      "Participated in solo hackathons with strong execution focus and rapid prototyping approach.",
    year: "Ongoing",
    icon: "Code",
  },
  {
    title: "Robotics Competition Participation",
    description:
      "Built and presented robotics-focused prototypes in competitive technical environments.",
    year: "Ongoing",
    icon: "Cpu",
  },
  {
    title: "Technical Workshop Leadership",
    description:
      "Organized and led robotics and embedded systems workshops for student communities.",
    year: "2024",
    icon: "Users",
  },
  {
    title: "Leadership & Public Speaking",
    description:
      "Demonstrated communication, event coordination, and team leadership across academic and community activities.",
    year: "Ongoing",
    icon: "Mic",
  },
];

export const investingContent = {
  focus: [
    "Long-term investing",
    "Beginner trading",
    "Risk management",
    "Interest in economics, startups, and markets",
  ],
  summary:
    "I approach investing with a disciplined long-term mindset, while exploring trading fundamentals and risk-aware decision making.",
};

export const softSkills = [
  "Leadership",
  "Team collaboration",
  "Public speaking",
  "Strategic thinking",
  "Communication",
  "Problem solving",
  "Entrepreneurial mindset",
];

export const personalInterests = [
  "Football",
  "Gym and fitness",
  "Robotics",
  "Entrepreneurship",
  "Investing and trading",
  "Technology innovation",
];

export const experiences = [
  {
    title: "Cybersecurity Intern",
    organization: "Internship Program",
    location: "Nepal",
    period: "Mar 2026 — Apr 2026",
    description:
      "Currently working on cybersecurity tasks, secure systems understanding, and practical security operations.",
    type: "work" as const,
    highlights: ["Security fundamentals", "Hands-on practical experience"],
  },
  {
    title: "Bachelor in Computer Engineering",
    organization: "Khwopa Engineering College",
    location: "Bhaktapur, Nepal",
    period: "5th Semester (Ongoing)",
    description:
      "Pursuing undergraduate engineering with focus on software systems, embedded engineering, and applied innovation.",
    type: "education" as const,
    highlights: ["Affiliated to Purbanchal University", "Applied engineering projects"],
  },
  {
    title: "+2 Science (Physics Major)",
    organization: "Higher Secondary Education",
    location: "Nepal",
    period: "Completed 2022",
    description:
      "Strong science foundation supporting analytical thinking and engineering problem solving.",
    type: "education" as const,
    highlights: ["Physics major", "Completed in 2022"],
  },
  {
    title: "Leadership & Community Roles",
    organization: "KSC, Khwopa Futsal Circle, Code for Change Nepal",
    location: "Nepal",
    period: "Ongoing",
    description:
      "Active in student leadership, technical community building, and workshop/event organization.",
    type: "leadership" as const,
    highlights: ["Executive Member", "Coordinator", "Workshop organizer"],
  },
];

export const visionContent = {
  statement:
    "To build globally relevant technology from Nepal by combining engineering precision, entrepreneurial execution, and long-term strategic thinking.",
  description:
    "I aim to evolve from student engineer to global builder by shipping practical solutions, growing ventures, and contributing to high-impact digital systems.",
  manifesto: [
    "Build what matters.",
    "Think in systems, execute in iterations.",
    "Lead with discipline, curiosity, and purpose.",
    "Create value that scales beyond borders.",
  ],
  goals: [
    { timeframe: "2026", goal: "Scale NirvachanX into a tested MVP with secure architecture" },
    { timeframe: "2027", goal: "Expand startup operations with stronger digital systems" },
    { timeframe: "2030", goal: "Build globally recognized products from Nepal" },
  ],
};
