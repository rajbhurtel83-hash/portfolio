// ============================================
// INVESTOR MODE OVERLAY - Business Metrics & Vision
// ============================================

"use client";

import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Users, 
  Globe, 
  Zap,
  ChevronRight,
  Calendar,
  MapPin,
  BarChart3,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { useViewMode } from '@/context/ViewModeContext';

// ============================================
// KEY METRICS
// ============================================

const metrics = [
  { label: 'Projects Built', value: '10+', icon: Layers, trend: '+40% this year' },
  { label: 'Active Ventures', value: '3', icon: TrendingUp, trend: 'Growing' },
  { label: 'Technologies', value: '15+', icon: Zap, trend: 'Full-stack' },
  { label: 'Team Collaborations', value: '50+', icon: Users, trend: 'Expanding network' },
];

// ============================================
// ROADMAP
// ============================================

const roadmap = [
  {
    phase: 'Current',
    timeline: '2024',
    title: 'Foundation Building',
    goals: [
      'Complete B.E. Computer Engineering',
      'Scale Elysian Official to profitability',
      'Build technical portfolio with impactful projects',
      'Gain enterprise-level development experience'
    ],
    status: 'in-progress'
  },
  {
    phase: 'Phase 2',
    timeline: '2025-2026',
    title: 'Market Expansion',
    goals: [
      'Launch Bastra marketplace nationally',
      'Develop AI-powered product features',
      'Build a core engineering team',
      'Explore international opportunities'
    ],
    status: 'planned'
  },
  {
    phase: 'Phase 3',
    timeline: '2027-2029',
    title: 'Scale & Impact',
    goals: [
      'Expand ventures to regional markets',
      'Build/invest in complementary startups',
      'Establish tech community leadership',
      'Create employment opportunities in Nepal'
    ],
    status: 'planned'
  },
];

// ============================================
// VISION STATEMENT
// ============================================

const visionStatement = {
  mission: "Building scalable digital infrastructure and technology-enabled ventures that create lasting value from Nepal to the world.",
  philosophy: [
    {
      title: "Systems Thinking",
      description: "Every business is a system of interconnected components. Optimize the system, not just the parts."
    },
    {
      title: "Technology as Leverage",
      description: "Code is the most scalable form of leverage. Build once, deploy infinitely."
    },
    {
      title: "Local Roots, Global Reach",
      description: "Solve problems in Nepal first, then scale solutions to similar markets globally."
    },
    {
      title: "Sustainable Growth",
      description: "Build businesses that can exist for decades, not just quick exits."
    }
  ]
};

// ============================================
// MAIN INVESTOR MODE COMPONENT
// ============================================

export default function InvestorModeContent() {
  const { isInvestorMode } = useViewMode();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <AnimatePresence>
      {isInvestorMode && (
        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          id="investor-view"
          className="relative py-24 md:py-32 overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

          <div className="container-width px-4 sm:px-6 relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
                <TrendingUp size={16} />
                Investor View Active
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Vision & <span className="text-amber-400">Growth Trajectory</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A strategic overview of ongoing ventures, key metrics, and the long-term vision 
                for building technology-enabled businesses from Nepal.
              </p>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 mb-12"
            >
              <Globe className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Mission Statement</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {visionStatement.mission}
              </p>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-6 rounded-2xl glass border border-white/10 group hover:border-amber-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-xl bg-amber-500/10">
                        <Icon size={20} className="text-amber-400" />
                      </div>
                      <ArrowUpRight size={16} className="text-green-400" />
                    </div>
                    <p className="text-3xl font-bold text-white mb-1">{metric.value}</p>
                    <p className="text-sm text-gray-500 mb-2">{metric.label}</p>
                    <p className="text-xs text-amber-400/80">{metric.trend}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Philosophy Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Target className="text-amber-400" />
                Investment Philosophy
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {visionStatement.philosophy.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/20 transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Strategic Roadmap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <BarChart3 className="text-amber-400" />
                Strategic Roadmap
              </h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-amber-500/50 to-transparent hidden md:block" />
                
                <div className="space-y-8">
                  {roadmap.map((phase, index) => (
                    <motion.div
                      key={phase.phase}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.2 }}
                      className="relative pl-0 md:pl-20"
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-6 w-4 h-4 rounded-full border-2 hidden md:block ${
                        phase.status === 'in-progress' 
                          ? 'bg-amber-500 border-amber-400 animate-pulse' 
                          : 'bg-dark border-gray-600'
                      }`} />
                      
                      <div className={`p-6 rounded-2xl border ${
                        phase.status === 'in-progress'
                          ? 'bg-amber-500/10 border-amber-500/30'
                          : 'bg-white/5 border-white/10'
                      }`}>
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            phase.status === 'in-progress'
                              ? 'bg-amber-500/20 text-amber-400'
                              : 'bg-white/10 text-gray-400'
                          }`}>
                            {phase.phase}
                          </span>
                          <span className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar size={14} />
                            {phase.timeline}
                          </span>
                        </div>
                        
                        <h4 className="text-xl font-bold text-white mb-4">{phase.title}</h4>
                        
                        <ul className="space-y-2">
                          {phase.goals.map((goal, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                              <ChevronRight size={16} className="mt-0.5 text-amber-400 flex-shrink-0" />
                              {goal}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="mt-16 text-center"
            >
              <p className="text-gray-400 mb-6">
                Interested in the vision? Let&apos;s discuss how we can create value together.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300"
              >
                <span>Schedule a Conversation</span>
                <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
