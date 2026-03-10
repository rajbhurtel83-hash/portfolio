"use client";

import { motion } from "framer-motion";
import { Users, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { communityWork, personalInterests } from "@/data/content";

export default function CommunityWork() {
  return (
    <section id="community" className="section-padding">
      <div className="container-width">
        <SectionHeading
          label="Community Work"
          title="Community & Personal Interests"
          description="Technical community engagement, workshop initiatives, and personal growth areas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="card-base"
          >
            <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Users size={18} className="text-primary-500" />
              Community Contributions
            </h3>
            <ul className="space-y-3">
              {communityWork.map((item) => (
                <li
                  key={item}
                  className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1 }}
            className="card-base"
          >
            <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HeartHandshake size={18} className="text-accent" />
              Personal Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {personalInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded-full text-xs bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
