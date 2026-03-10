"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { communityWork, personalInterests } from "@/data/content";

export default function CommunityWork() {
  const [showBungeePhoto, setShowBungeePhoto] = useState(true);

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.15 }}
          className="card-base mt-6"
        >
          <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-2">
            Adventure Highlight: Bungee
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            I completed this jump at The Last Resort, Bhotekoshi, and received a bravery certificate after the experience.
          </p>

          <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5">
            {showBungeePhoto ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile/raj-bungee.jpg"
                  alt="Raj Bhurtel doing bungee jumping at The Last Resort Bhotekoshi"
                  className="w-full h-auto max-h-[460px] object-cover"
                  onError={() => setShowBungeePhoto(false)}
                />
                <div className="px-4 sm:px-5 py-3 bg-white/80 dark:bg-dark-100/80 border-t border-gray-200 dark:border-white/10">
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    The Last Resort, Bhotekoshi (Nepal) • 160m jump • January 9, 2025 • Age 19
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Nepal&apos;s second largest bungee jump and among the world&apos;s top 10 highest.
                  </p>
                </div>
              </>
            ) : (
              <div className="p-6 sm:p-8 text-sm text-gray-600 dark:text-gray-400">
                Add your bungee photo at <code>public/profile/raj-bungee.jpg</code> and it will appear here automatically.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
