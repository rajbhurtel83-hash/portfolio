"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Globe, Wrench, Users, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { skillCategories } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Wrench,
  Users,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: delay,
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container-width relative">
        <SectionHeading
          label="Skills"
          title="Technical Arsenal"
          description="Tools and technologies I use to turn concepts into production-ready solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon];

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                className="card-base"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                    {Icon && (
                      <Icon
                        size={20}
                        className="text-primary-500 dark:text-primary-400"
                      />
                    )}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIndex * 0.15 + skillIndex * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
