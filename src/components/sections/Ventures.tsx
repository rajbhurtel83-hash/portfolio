// ============================================
// VENTURES SECTION - Startups & Entrepreneurship
// ============================================

"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Rocket, 
  ExternalLink, 
  Users, 
  TrendingUp,
  Target,
  Lightbulb,
  ShoppingBag,
  Recycle,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { useViewMode } from '@/context/ViewModeContext';

// ============================================
// STARTUP DATA
// ============================================

const startups = [
  {
    id: 'bastra',
    name: 'Bastra',
    tagline: 'Buy, Sell, Rent, Donate - Sustainable Fashion Ecosystem',
    description: 'A pioneering sustainable thrift platform revolutionizing how Nepal approaches fashion consumption. Bastra creates a circular economy for clothing through an integrated marketplace where users can buy pre-loved items, sell their wardrobe, rent occasion wear, and donate to those in need.',
    problem: 'Fast fashion contributes significantly to environmental degradation, while many quality garments end up in landfills despite years of usable life remaining.',
    solution: 'Bastra provides a comprehensive platform that extends garment lifecycles through multiple ownership models, reducing waste while making quality fashion accessible to all income levels.',
    stage: 'MVP',
    role: 'Founder',
    icon: Recycle,
    color: 'from-emerald-500 to-teal-500',
    metrics: {
      status: 'First Runner-Up, Hult Prize (KhEC)',
      model: 'Marketplace + Commission',
      target: 'Urban Nepal, 18-35 demographic'
    },
    achievements: [
      'First Runner-Up at Hult Prize - KhEC Campus Round',
      'Validated business model with market research',
      'Developed comprehensive pitch deck and financial projections'
    ]
  },
  {
    id: 'elysian',
    name: 'Elysian Official',
    tagline: 'Premium Men\'s Wear - Crafted for the Modern Gentleman',
    description: 'A premium men\'s fashion brand focused on delivering quality casual and formal wear for the contemporary Nepali man. Elysian combines international design aesthetics with local manufacturing excellence.',
    problem: 'Limited options for quality men\'s fashion in Nepal that balances international trends with local preferences and sizing.',
    solution: 'Curated collections designed for Nepali body types and preferences, manufactured locally with premium materials and attention to detail.',
    stage: 'EARLY_TRACTION',
    role: 'Founder',
    icon: ShoppingBag,
    color: 'from-blue-500 to-indigo-500',
    metrics: {
      status: 'Active & Growing',
      model: 'D2C E-commerce + Retail',
      target: 'Men 20-40, Urban centers'
    },
    achievements: [
      'Established brand identity and product line',
      'Built initial customer base through social commerce',
      'Developing supplier relationships for scale'
    ]
  },
  {
    id: 'bastra-ladies',
    name: 'Bastra Ladies Wear',
    tagline: 'Fashion Forward - Elegance for Every Woman',
    description: 'Extension of the Bastra ecosystem focusing on women\'s fashion, offering curated selections of trendy and traditional wear for the modern Nepali woman.',
    problem: 'Women\'s fashion market fragmented between expensive imports and inconsistent local quality.',
    solution: 'Quality-controlled fashion selections combining trending styles with cultural relevance at accessible price points.',
    stage: 'MVP',
    role: 'Founder',
    icon: ShoppingBag,
    color: 'from-pink-500 to-rose-500',
    metrics: {
      status: 'Development Phase',
      model: 'E-commerce Platform',
      target: 'Women 18-45, All of Nepal'
    },
    achievements: [
      'Market research completed',
      'Initial inventory sourcing established',
      'Building social media presence'
    ]
  }
];

// ============================================
// STARTUP CARD COMPONENT
// ============================================

function StartupCard({ startup, index }: { startup: typeof startups[0]; index: number }) {
  const { isInvestorMode } = useViewMode();
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  const Icon = startup.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative p-6 md:p-8 rounded-3xl glass-strong border border-white/10 hover:border-primary-500/30 transition-all duration-500 overflow-hidden">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${startup.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        {/* Stage Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${startup.color} text-white`}>
            {startup.stage.replace('_', ' ')}
          </span>
        </div>

        {/* Icon & Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${startup.color}`}>
            <Icon size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
              {startup.name}
            </h3>
            <p className="text-sm text-accent font-medium">{startup.role}</p>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-primary-400 font-medium mb-4">
          {startup.tagline}
        </p>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {startup.description}
        </p>

        {/* Investor Mode: Extra Details */}
        {isInvestorMode && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-4 mb-6 pt-4 border-t border-white/10"
          >
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Target size={14} /> Problem
              </h4>
              <p className="text-sm text-gray-400">{startup.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <Lightbulb size={14} /> Solution
              </h4>
              <p className="text-sm text-gray-400">{startup.solution}</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(startup.metrics).map(([key, value]) => (
                <div key={key}>
                  <p className="text-xs text-gray-500 uppercase">{key}</p>
                  <p className="text-sm text-white font-medium">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Achievements */}
        <div className="space-y-2 mb-6">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Key Achievements</h4>
          <ul className="space-y-2">
            {startup.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <ArrowRight size={14} className="mt-0.5 text-primary-500 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// ENTREPRENEURIAL PHILOSOPHY (Investor Mode)
// ============================================

function EntrepreneurialPhilosophy() {
  const { isInvestorMode } = useViewMode();
  
  if (!isInvestorMode) return null;

  const philosophyPoints = [
    {
      icon: Target,
      title: 'Problem-First Thinking',
      description: 'Every venture starts with a genuine problem worth solving. Market validation before product development.'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Products built around user needs, not assumptions. Continuous feedback loops drive iteration.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Architecture',
      description: 'Systems designed for growth from day one. Technology choices that support expansion.'
    },
    {
      icon: Recycle,
      title: 'Sustainable Impact',
      description: 'Building businesses that create lasting positive change. Profit with purpose.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary-500/10 to-accent/10 border border-primary-500/20"
    >
      <h3 className="text-2xl font-bold text-white mb-2">Entrepreneurial Philosophy</h3>
      <p className="text-gray-400 mb-8 max-w-2xl">
        My approach to building ventures combines engineering rigor with strategic market thinking. 
        Every business is a system to be optimized.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {philosophyPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-primary-500/20 flex items-center justify-center">
                <Icon size={24} className="text-primary-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">{point.title}</h4>
              <p className="text-sm text-gray-500">{point.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function Ventures() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="ventures"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-width px-4 sm:px-6 relative z-10">
        <SectionHeading
          label="Ventures"
          title="Startups & Entrepreneurship"
          description="Building technology-enabled businesses that solve real problems"
        />

        {/* Startups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {startups.map((startup, index) => (
            <StartupCard key={startup.id} startup={startup} index={index} />
          ))}
        </div>

        {/* Entrepreneurial Philosophy */}
        <EntrepreneurialPhilosophy />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Interested in collaborating or investing in the next venture?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
