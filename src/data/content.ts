export const siteConfig = {
  name: "Raj Bhurtel",
  title: "Raj Bhurtel — Engineer, Founder, Technology Innovator",
  description:
    "Results-driven Computer Engineering student focused on full-stack development, cybersecurity fundamentals, embedded systems, and startup innovation.",
  url: "https://rajbhurtel.com.np",
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
    "Full-Stack Web Developer",
    "Cybersecurity Intern",
    "Embedded Systems and Robotics Enthusiast",
    "Startup Founder",
    "Technology and Business Builder",
  ],
  description:
    "Engineer and entrepreneur from Kavre, Nepal building practical software systems, embedded automation prototypes, and scalable startup ideas.",
  tagline: "Building practical technology for real-world impact.",
  cta: {
    projects: "Explore Projects",
    resume: "Download Resume",
    contact: "Contact Raj",
    askAI: "Ask My AI",
  },
};

export const professionalSummary =
  "Results-driven Computer Engineering student with strong interests in full-stack web development, cybersecurity, embedded systems, and startup innovation. Experienced in developing practical software systems and automation prototypes. First Runner-Up at the Hult Prize (KhEC) with proven leadership and entrepreneurial ability. Founder of emerging clothing brands with hands-on experience in product development, branding, and business operations. Passionate about building scalable technology solutions that combine engineering expertise with strategic thinking.";

export const aboutContent = {
  headline: "Engineering depth with founder-level execution.",
  paragraphs: [
    "I am a Bachelor in Computer Engineering student at Khwopa Engineering College, Bhaktapur, Nepal, affiliated with Purbanchal University. I am currently in my 5th semester.",
    "My core focus areas include full-stack web development, cybersecurity fundamentals, embedded systems, and robotics. I enjoy building software that is practical, secure, and scalable.",
    "I am also building NirvachanX, a digital voting platform concept for Nepal focused on transparency, trust, and accessibility.",
    "Alongside engineering, I am an active founder building Elysian Official and Bastra Ladies Wear. This gives me hands-on experience in product development, branding, operations, and business strategy.",
    "I am currently completing a one-month Cybersecurity Internship at CyberWarLab, where I am strengthening practical understanding of network security, vulnerability assessment, and ethical hacking basics.",
  ],
  stats: [
    { value: "2", label: "Brands Founded" },
    { value: "8+", label: "Major Projects" },
    { value: "1", label: "Hult Prize Runner-Up" },
    { value: "5th", label: "Semester CE" },
  ],
  highlights: [
    "Full-Stack Web Development",
    "Cybersecurity Fundamentals",
    "Embedded Systems and Robotics",
    "Founder of Elysian Official & Bastra Ladies Wear",
    "Based in Banepa, Kavre, Nepal",
  ],
};

export const currentWork = [
  "Developing scalable web applications using Python and Django",
  "Designing and iterating NirvachanX, a digital voting MVP for Nepal",
  "Implementing secure authentication and maintainable backend architecture",
  "Building embedded systems and robotics automation prototypes",
  "Learning practical cybersecurity fundamentals at CyberWarLab",
  "Scaling product and operations strategy for Elysian Official and Bastra Ladies Wear",
  "Continuously improving leadership, public speaking, and execution skills",
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "C", level: 85 },
      { name: "C#", level: 72 },
      { name: "C++", level: 85 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 84 },
    ],
  },
  {
    title: "Web Technologies",
    icon: "Globe",
    skills: [
      { name: "HTML5", level: 92 },
      { name: "CSS", level: 86 },
      { name: "Django", level: 82 },
      { name: "REST API Integration", level: 80 },
      { name: "Frontend UI Development", level: 84 },
    ],
  },
  {
    title: "Databases and Tools",
    icon: "Wrench",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 80 },
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "Jira", level: 78 },
      { name: "Cloudflare", level: 70 },
    ],
  },
  {
    title: "Embedded and Design",
    icon: "Users",
    skills: [
      { name: "Arduino", level: 82 },
      { name: "Microcontrollers", level: 80 },
      { name: "Sensors", level: 78 },
      { name: "Automation Systems", level: 75 },
      { name: "Hardware-Software Integration", level: 78 },
      { name: "Canva / Figma", level: 74 },
      { name: "Adobe and Blender Tools", level: 68 },
    ],
  },
];

export const projects = [
  {
    id: "ball-game-c",
    title: "Ball Game (C Programming)",
    shortDesc: "A core C programming project focused on game logic, memory handling, and control flow.",
    fullDesc:
      "Built a lightweight ball game in C to strengthen systems-level thinking, input handling, loop design, and modular logic implementation.",
    problemSolved:
      "Demonstrates foundational programming and algorithmic flow in low-level procedural architecture.",
    futureImprovements: [
      "Improve physics and collision behavior",
      "Add level progression and score persistence",
      "Refactor gameplay modules for better extensibility",
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
    id: "django-web-application-development",
    title: "Web Application Development (Python and Django)",
    shortDesc: "Scalable web application work using Django with secure architecture and maintainable backend design.",
    fullDesc:
      "Developed scalable web applications using the Django framework with a focus on clean backend architecture, secure authentication systems, and database design for long-term maintainability.",
    problemSolved:
      "Improves reliability and development speed by combining secure authentication, structured database models, and modular backend services.",
    futureImprovements: [
      "Add role-based access controls for multi-user workflows",
      "Improve automated testing coverage for critical APIs",
      "Integrate performance monitoring and application analytics",
    ],
    screenshots: ["/projects/real-estate-1.svg"],
    image: "/projects/real-estate-1.svg",
    techStack: ["Python", "Django", "HTML5", "CSS", "REST APIs"],
    liveUrl: "",
    githubUrl: "https://github.com/rajbhurtel83-hash",
    category: "Web Application",
    featured: true,
  },
  {
    id: "real-estate-rental",
    title: "Real Estate Property Rental System",
    shortDesc: "A property listing and rental workflow platform with user-centric browsing and management.",
    fullDesc:
      "Designed a rental system to simplify listing, searching, and matching rental properties with suitable tenants through structured workflows.",
    problemSolved:
      "Addresses inefficient local rental discovery and listing management through a centralized digital system.",
    futureImprovements: [
      "Integrate maps and geolocation filters",
      "Add secure owner and tenant verification",
      "Introduce a recommendation engine for better matching",
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
    id: "movie-ticket-booking",
    title: "Movie Ticket Booking System",
    shortDesc: "Offline C++ system using file handling for seat reservation, cancellation, and availability tracking.",
    fullDesc:
      "Built a complete C++ console application for ticket booking using persistent file handling. Implemented modular workflows for seat reservation, cancellation, and real-time availability checks.",
    problemSolved:
      "Demonstrates reliable booking workflow logic in an offline environment with data persistence and modular structure.",
    futureImprovements: [
      "Upgrade file-based storage to MySQL or PostgreSQL",
      "Add graphical UI for easier interaction",
      "Introduce payment simulation and booking history",
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
      "Built a DSA-focused C++ project that visualizes search tree operations to make insertion, traversal, and tree structure behavior easier to understand.",
    problemSolved:
      "Transforms abstract tree algorithms into visual learning flows for better algorithm comprehension.",
    futureImprovements: [
      "Add balancing operations visualization",
      "Support multiple tree variants",
      "Export operation history for learning analysis",
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
    id: "embedded-robotics-projects",
    title: "Embedded Systems and Robotics Projects",
    shortDesc: "Automation prototypes using Arduino, sensors, and controller logic for real-world simulations.",
    fullDesc:
      "Developed embedded and robotics prototypes focused on sensor integration, automation logic, and practical hardware-software interaction using Arduino and microcontroller-level programming.",
    problemSolved:
      "Connects software logic with hardware execution to solve real-world automation and control tasks.",
    futureImprovements: [
      "Add remote telemetry dashboard for monitoring",
      "Improve power and component reliability",
      "Integrate smart control and predictive behaviors",
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
    title: "NirvachanX - Digital Voting Platform for Nepal",
    shortDesc: "Secure digital voting MVP concept aimed at transparency, trust, and accessibility.",
    fullDesc:
      "NirvachanX is a civic-tech initiative focused on modernizing and securing voting workflows in Nepal through a digital-first product architecture.",
    problemSolved:
      "Targets trust, accessibility, and efficiency challenges in election processes through secure and transparent digital system design.",
    futureImprovements: [
      "Add verifiable audit trails",
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
  {
    id: "cybersecurity-practical-learning",
    title: "Cybersecurity Practical Learning Track",
    shortDesc: "Hands-on learning work in network security, vulnerability assessment, and ethical hacking fundamentals.",
    fullDesc:
      "As part of the CyberWarLab internship, completed guided practical exercises in security fundamentals including threat identification, vulnerability assessment concepts, and ethical hacking basics.",
    problemSolved:
      "Strengthens defensive and testing mindset for building safer applications and infrastructure.",
    futureImprovements: [
      "Expand into structured penetration testing labs",
      "Apply security testing to personal web applications",
      "Document findings with repeatable security checklists",
    ],
    screenshots: ["/projects/search-tree-1.svg"],
    image: "/projects/search-tree-1.svg",
    techStack: ["Network Security Basics", "Vulnerability Assessment", "Ethical Hacking Concepts"],
    liveUrl: "",
    githubUrl: "https://github.com/rajbhurtel83-hash",
    category: "Cybersecurity",
    featured: true,
  },
];

export const leadershipRoles = [
  {
    title: "Founder",
    organization: "Elysian Official",
    description:
      "Lead product direction, brand development, and market positioning for a premium clothing brand.",
  },
  {
    title: "Founder",
    organization: "Bastra Ladies Wear",
    description:
      "Drive women-focused fashion operations with customer-centric product planning and scalable business execution.",
  },
  {
    title: "Executive Member",
    organization: "Knowledge Sharing Circle (KSC)",
    description:
      "Contribute to technical knowledge-sharing initiatives, peer learning programs, and student development activities.",
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
    title: "Organizer and Lead",
    organization: "Robotics and Embedded Systems Workshops",
    description:
      "Led workshops, mentored participants, and coordinated technical event execution in robotics and embedded systems.",
  },
  {
    title: "First Runner-Up Team Member",
    organization: "Hult Prize, KhEC",
    description:
      "Contributed to startup ideation, strategy, and pitching under high-pressure competition conditions.",
  },
  {
    title: "Public Speaker and Technical Presenter",
    organization: "Academic and Community Events",
    description:
      "Delivered technical presentations and represented project ideas in competitions and collaborative forums.",
  },
];

export const communityWork = [
  "Organizer of multiple technical events",
  "Participant in hackathons and robotics competitions",
  "Workshop leadership for robotics and embedded systems",
  "Public speaking and technical presentation sessions",
  "Peer collaboration on software and embedded engineering work",
  "Active contribution to student innovation and startup discussions",
  "Completed 160m bungee jump at The Last Resort, Bhotekoshi and received a bravery certificate",
];

export const startupExperience = [
  {
    name: "Elysian Official",
    role: "Founder",
    description:
      "Premium clothing brand focused on modern fashion, product quality, and digital brand positioning.",
  },
  {
    name: "Bastra Ladies Wear",
    role: "Founder",
    description:
      "Women-focused fashion venture targeting market demand with scalable operations.",
  },
  {
    name: "Bastra (Hult Prize Idea)",
    role: "Startup Concept",
    description:
      "Platform concept where people can buy, sell, rent, and donate clothes to build a circular fashion ecosystem.",
  },
  {
    name: "Founder Responsibilities",
    role: "Operations and Strategy",
    description:
      "Brand development, product and supply-chain coordination, MVP testing, business strategy planning, and digital customer engagement.",
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
      "Secured First Runner-Up by presenting an entrepreneurship model with clear market need and execution strategy.",
    year: "2026",
    icon: "Trophy",
  },
  {
    title: "Bravery Certificate — The Last Resort Bhotekoshi Bungee",
    description:
      "Completed the 160m bungee jump at The Last Resort, Bhotekoshi on January 9, 2025 (age 19). Recognized as Nepal's second largest bungee jump and among the world's top 10 highest.",
    year: "2025",
    icon: "Award",
  },
  {
    title: "Hackathon Participation",
    description:
      "Participated in hackathons with strong execution focus and rapid prototyping approach.",
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
    year: "Ongoing",
    icon: "Users",
  },
  {
    title: "Technical Presentation and Public Speaking",
    description:
      "Demonstrated communication and presentation skills through technical talks and project showcases.",
    year: "Ongoing",
    icon: "Mic",
  },
];

export const investingContent = {
  focus: [
    "Long-term value investing",
    "Beginner-level trading with risk management",
    "Strong interest in startups and financial markets",
    "Curiosity in economic systems and macro trends",
  ],
  summary:
    "I approach markets with disciplined risk management and long-term thinking while continuing to learn startup finance and economic decision-making.",
};

export const softSkills = [
  "Strategic thinker with entrepreneurial mindset",
  "Strong communication and presentation skills",
  "Adaptable and fast learner",
  "Results-oriented and execution-focused",
  "Technical problem solving",
  "Agile project collaboration",
  "Business strategy and execution",
];

export const personalInterests = [
  "Startup innovation",
  "Embedded systems and robotics",
  "Financial markets and investing",
  "Cybersecurity learning",
  "Technology-driven business ideas",
  "Scalable product thinking",
  "Football",
  "Gym and fitness",
  "Bungee jumping",
];

export const experiences = [
  {
    title: "Cybersecurity Intern",
    organization: "CyberWarLab (Remote/Training Program)",
    location: "Remote, Nepal",
    period: "2026 - Present (1-Month Internship)",
    description:
      "Learning practical cybersecurity fundamentals including network security basics, ethical hacking concepts, vulnerability assessment understanding, and common threat analysis.",
    type: "work" as const,
    highlights: [
      "Network security and ethical hacking basics",
      "Vulnerability assessment and threat awareness",
      "Hands-on exposure to security tools",
    ],
  },
  {
    title: "Bachelor in Computer Engineering",
    organization: "Khwopa Engineering College",
    location: "Bhaktapur, Nepal",
    period: "2023 - Present (Currently in 5th Semester)",
    description:
      "Pursuing undergraduate engineering with focus on full-stack systems, embedded engineering, cybersecurity fundamentals, and practical innovation.",
    type: "education" as const,
    highlights: ["Affiliated with Purbanchal University", "Applied engineering projects"],
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
    title: "Leadership and Community Roles",
    organization: "KSC, Khwopa Futsal Circle, Code for Change Nepal",
    location: "Nepal",
    period: "Ongoing",
    description:
      "Active in student leadership, technical community building, and workshop and event organization.",
    type: "leadership" as const,
    highlights: ["Executive Member", "Coordinator", "Workshop organizer"],
  },
  {
    title: "Founder and Business Operator",
    organization: "Elysian Official and Bastra Ladies Wear",
    location: "Kavre, Nepal",
    period: "Ongoing",
    description:
      "Managing product, branding, customer engagement, and operations while applying strategic execution and iterative MVP thinking.",
    type: "leadership" as const,
    highlights: ["Product development", "Supply-chain coordination", "Digital marketing"],
  },
];

export const visionContent = {
  statement:
    "To build scalable technology and business systems from Nepal that combine engineering excellence with strategic execution.",
  description:
    "I aim to grow as an engineer-founder who can design, build, and scale practical products while contributing to secure and high-impact digital ecosystems.",
  manifesto: [
    "Solve real-world problems with practical systems.",
    "Ship consistently and improve through iterations.",
    "Lead with clarity, accountability, and discipline.",
    "Build value that is sustainable and scalable.",
  ],
  goals: [
    { timeframe: "2026", goal: "Deepen practical cybersecurity and full-stack expertise" },
    { timeframe: "2027", goal: "Ship stronger MVPs and scale startup operations" },
    { timeframe: "2030", goal: "Build globally relevant technology ventures from Nepal" },
  ],
};
