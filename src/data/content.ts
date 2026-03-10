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
    "Alongside engineering, I am an active founder building Elysian Official and Bastra Ladies Wear. This gives me hands-on experience in product development, branding, operations, and business strategy.",
    "I am currently completing a one-month Cybersecurity Internship at CyberWarLab, where I am strengthening practical understanding of network security, vulnerability assessment, and ethical hacking basics.",
  ],
  stats: [
    { value: "2", label: "Brands Founded" },
    { value: "4+", label: "Core Project Areas" },
    { value: "1", label: "Hult Prize Runner-Up" },
    { value: "5th", label: "Semester CE" },
  ],
  highlights: [
    "Full-Stack Web Development",
    "Cybersecurity Fundamentals",
    "Embedded Systems and Robotics",
    "Founder of Elysian Official & Bastra Ladies Wear",
    "Based in Kavre, Nepal",
  ],
};

export const currentWork = [
  "Developing scalable web applications with Python and Django",
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
  "Participant in hackathons and robotics competitions",
  "Experience in public speaking and technical presentations",
  "Peer collaboration on software and embedded engineering work",
  "Active contribution to student innovation and startup discussions",
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
    title: "Hackathon and Robotics Competition Participant",
    description:
      "Participated in hackathons and robotics competitions with focus on practical prototyping and teamwork.",
    year: "Ongoing",
    icon: "Code",
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
