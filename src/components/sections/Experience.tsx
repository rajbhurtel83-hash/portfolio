"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { experiences } from "@/data/content";

const typeIcons = {
  education: GraduationCap,
  leadership: Award,
  work: Briefcase,
};

const typeColors = {
  education: "from-blue-500 to-blue-600",
  leadership: "from-amber-500 to-amber-600",
  work: "from-emerald-500 to-emerald-600",
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-width">
        <SectionHeading
          label="Experience"
          title="Journey So Far"
          description="A timeline of education, leadership, and professional milestones."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 md:-translate-x-px" />

          {experiences.map((exp, i) => {
            const Icon = typeIcons[exp.type];
            const colorClass = typeColors[exp.type];
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={exp.title + exp.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={14} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isEven ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <div className="card-base">
                    <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-base font-display font-semibold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-1">
                      {exp.organization}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                      {exp.location}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
