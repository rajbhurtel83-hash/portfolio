// ============================================
// ENGINEER MODE OVERLAY - Technical Architecture
// ============================================

"use client";

import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  GitBranch, 
  Database, 
  Server, 
  Cloud,
  Cpu,
  Terminal,
  Braces,
  CheckCircle2,
  ArrowRight,
  Layers,
  Workflow,
  Boxes
} from 'lucide-react';
import { useViewMode } from '@/context/ViewModeContext';

// ============================================
// TECH STACK DATA
// ============================================

const techStack = {
  frontend: {
    title: 'Frontend',
    icon: Braces,
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'Next.js 14', level: 'Advanced', description: 'App Router, Server Components' },
      { name: 'React 18', level: 'Advanced', description: 'Hooks, Context, Suspense' },
      { name: 'TypeScript', level: 'Advanced', description: 'Type-safe development' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Utility-first styling' },
      { name: 'Framer Motion', level: 'Intermediate', description: 'Complex animations' },
      { name: 'Three.js', level: 'Intermediate', description: '3D graphics & WebGL' },
    ]
  },
  backend: {
    title: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    technologies: [
      { name: 'Node.js', level: 'Advanced', description: 'API development, Express' },
      { name: 'PostgreSQL', level: 'Intermediate', description: 'Relational DB design' },
      { name: 'Prisma ORM', level: 'Intermediate', description: 'Type-safe database access' },
      { name: 'REST APIs', level: 'Advanced', description: 'RESTful architecture' },
      { name: 'JWT Auth', level: 'Intermediate', description: 'Secure authentication' },
    ]
  },
  systems: {
    title: 'Systems & Embedded',
    icon: Cpu,
    color: 'from-purple-500 to-pink-500',
    technologies: [
      { name: 'C++', level: 'Advanced', description: 'OOP, data structures, algorithms' },
      { name: 'C', level: 'Advanced', description: 'Low-level programming' },
      { name: 'Arduino', level: 'Intermediate', description: 'Microcontroller programming' },
      { name: 'Embedded Systems', level: 'Intermediate', description: 'Hardware-software integration' },
      { name: 'Linux', level: 'Intermediate', description: 'System administration' },
    ]
  },
  tools: {
    title: 'Dev Tools & Practices',
    icon: Terminal,
    color: 'from-orange-500 to-amber-500',
    technologies: [
      { name: 'Git & GitHub', level: 'Advanced', description: 'Version control, collaboration' },
      { name: 'VS Code', level: 'Advanced', description: 'IDE, extensions, debugging' },
      { name: 'Jira', level: 'Certified', description: 'Agile project management' },
      { name: 'Agile/Scrum', level: 'Certified', description: '7-day workshop certified' },
      { name: 'Docker', level: 'Learning', description: 'Containerization' },
    ]
  }
};

// ============================================
// ARCHITECTURE PRINCIPLES
// ============================================

const architecturePrinciples = [
  {
    title: 'Separation of Concerns',
    description: 'Clean boundaries between layers - presentation, business logic, and data access.',
    icon: Layers
  },
  {
    title: 'Type Safety First',
    description: 'TypeScript everywhere. Catch bugs at compile time, not runtime.',
    icon: CheckCircle2
  },
  {
    title: 'Component-Based Design',
    description: 'Reusable, composable UI components with clear interfaces.',
    icon: Boxes
  },
  {
    title: 'Performance by Design',
    description: 'Lazy loading, code splitting, optimized bundles from the start.',
    icon: Workflow
  }
];

// ============================================
// CODE PHILOSOPHY
// ============================================

const codePhilosophy = `
// My Approach to Code

/**
 * 1. READABLE > CLEVER
 * Code is read far more than written.
 * Optimize for understanding.
 */

/**
 * 2. TYPE EVERYTHING
 * TypeScript isn't optional.
 * Types are documentation that never lies.
 */

/**
 * 3. SMALL FUNCTIONS
 * Single responsibility principle.
 * If it needs comments, break it down.
 */

/**
 * 4. TEST THE EDGE CASES
 * Happy path is easy.
 * Robust systems handle the exceptions.
 */

/**
 * 5. DOCUMENT THE WHY
 * Code shows what. Comments explain why.
 * Future you will thank present you.
 */
`;

// ============================================
// DEV WORKFLOW
// ============================================

const devWorkflow = [
  { step: 1, title: 'Requirements Analysis', description: 'Understand the problem before coding' },
  { step: 2, title: 'System Design', description: 'Architecture diagrams, data models' },
  { step: 3, title: 'Iterative Development', description: 'Small commits, continuous integration' },
  { step: 4, title: 'Code Review', description: 'Peer review, maintain quality' },
  { step: 5, title: 'Testing', description: 'Unit tests, integration tests, E2E' },
  { step: 6, title: 'Deployment', description: 'CI/CD, monitoring, observability' },
];

// ============================================
// MAIN COMPONENT
// ============================================

export default function EngineerModeContent() {
  const { isEngineerMode } = useViewMode();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <AnimatePresence>
      {isEngineerMode && (
        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          id="engineer-view"
          className="relative py-24 md:py-32 overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

          <div className="container-width px-4 sm:px-6 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <Code2 size={16} />
                Engineer View Active
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Technical <span className="text-emerald-400">Architecture</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A deep dive into the technology stack, coding philosophy, and engineering practices 
                that power my projects and ventures.
              </p>
            </motion.div>

            {/* Tech Stack Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {Object.entries(techStack).map(([key, category], index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="p-6 rounded-2xl glass border border-white/10 group hover:border-emerald-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {category.technologies.map((tech, i) => (
                        <div 
                          key={i}
                          className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <div className="flex-1">
                            <p className="text-white font-medium text-sm">{tech.name}</p>
                            <p className="text-xs text-gray-500">{tech.description}</p>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            tech.level === 'Advanced' ? 'bg-emerald-500/20 text-emerald-400' :
                            tech.level === 'Certified' ? 'bg-amber-500/20 text-amber-400' :
                            tech.level === 'Intermediate' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {tech.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Architecture Principles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Database className="text-emerald-400" />
                Architecture Principles
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {architecturePrinciples.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                    >
                      <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                        <Icon size={24} className="text-emerald-400" />
                      </div>
                      <h4 className="text-white font-semibold mb-2">{principle.title}</h4>
                      <p className="text-sm text-gray-500">{principle.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Code Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <GitBranch className="text-emerald-400" />
                Code Philosophy
              </h3>
              
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-10 bg-dark-300 flex items-center gap-2 px-4">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-xs text-gray-500 font-mono">philosophy.ts</span>
                </div>
                <pre className="pt-12 p-6 bg-dark-300 overflow-x-auto">
                  <code className="text-sm text-gray-300 font-mono whitespace-pre">
                    {codePhilosophy}
                  </code>
                </pre>
              </div>
            </motion.div>

            {/* Development Workflow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Workflow className="text-emerald-400" />
                Development Workflow
              </h3>
              
              <div className="relative">
                {/* Connection line */}
                <div className="absolute top-6 left-6 right-6 h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-500/50 to-emerald-500 hidden lg:block" />
                
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                  {devWorkflow.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="relative flex flex-col items-center text-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 font-bold mb-3 relative z-10">
                        {item.step}
                      </div>
                      <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* GitHub Stats Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-center"
            >
              <GitBranch size={32} className="mx-auto text-emerald-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Open Source & Contributions</h4>
              <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                Check out my repositories and contributions on GitHub. 
                I believe in building in public and contributing to the developer community.
              </p>
              <a
                href="https://github.com/rajbhurtel83-hash"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors"
              >
                <span>View GitHub Profile</span>
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
