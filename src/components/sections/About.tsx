"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Rocket, Target } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { aboutContent, professionalSummary, currentWork } from "@/data/content";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Engineering Education",
      description:
        "Bachelor in Computer Engineering (5th Semester) at Khwopa Engineering College, affiliated with Purbanchal University.",
    },
    {
      icon: Rocket,
      title: "Startup Execution",
      description:
        "Founder of Elysian Official and Bastra Ladies Wear, with startup execution experience from idea to operations.",
    },
    {
      icon: Target,
      title: "Strategic Builder",
      description:
        "Combines technical implementation with business strategy to build scalable products and practical MVPs.",
    },
    {
      icon: MapPin,
      title: "Based in Nepal",
      description:
        "From Banepa, Kavre, Nepal, building systems and ventures with a long-term global vision.",
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-width">
        <SectionHeading
          label="About"
          title="About Me"
          description="Engineer, founder, and technology innovator building from Nepal for global impact."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              {professionalSummary}
            </p>

            {aboutContent.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {p}
              </p>
            ))}

            <div className="card-base !p-5">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                Current Work
              </h3>
              <ul className="space-y-2">
                {currentWork.map((work) => (
                  <li key={work} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    • {work}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {aboutContent.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center p-4 rounded-2xl glass"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image & Highlight Cards */}
          <div className="space-y-8">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-primary-500/20 shadow-2xl shadow-primary-500/10">
                <Image
                  src="/profile/raj-profile.jpg"
                  alt="Raj Bhurtel"
                  width={900}
                  height={1200}
                  className="w-full h-auto max-h-[420px] sm:max-h-none object-cover object-top block"
                />
              </div>
            </motion.div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="card-base group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                    <item.icon
                      size={20}
                      className="text-primary-500 dark:text-primary-400"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
