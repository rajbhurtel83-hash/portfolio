"use client";

import { motion } from "framer-motion";
import { Rocket, Building } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { startupExperience } from "@/data/content";

export default function Startups() {
  const items = startupExperience;

  return (
    <section id="startups" className="section-padding relative">
      <div className="container-width">
        <SectionHeading
          label="Startups"
          title="Startup Experience"
          description="Founder journey across fashion ventures and platform innovation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((startup, index) => (
            <motion.article
              key={startup.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1 }}
              className="card-base h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Rocket size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {startup.name}
                  </h3>
                  <p className="text-xs text-primary-500 dark:text-primary-400">
                    {startup.role}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {startup.description}
              </p>

              <div className="inline-flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                <Building size={14} />
                Entrepreneurial execution in progress
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
