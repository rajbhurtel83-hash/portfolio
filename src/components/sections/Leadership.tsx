"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Building2 } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { leadershipRoles, softSkills } from "@/data/content";

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding">
      <div className="container-width">
        <SectionHeading
          label="Leadership"
          title="Leadership Roles"
          description="Positions where I lead teams, organize initiatives, and drive collaborative execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {leadershipRoles.map((role, index) => (
            <motion.article
              key={role.title + role.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1 }}
              className="card-base"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <Building2 size={18} className="text-primary-500" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {role.title}
                  </h3>
                  <p className="text-sm text-primary-500 dark:text-primary-400 mb-2">
                    {role.organization}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="card-base">
          <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-4">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100 dark:bg-white/5 text-sm text-gray-700 dark:text-gray-300"
              >
                <BadgeCheck size={14} className="text-primary-500" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
