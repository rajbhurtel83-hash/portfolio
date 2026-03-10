"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { investingContent } from "@/data/content";

export default function Investing() {
  return (
    <section id="investing" className="section-padding">
      <div className="container-width">
        <SectionHeading
          label="Investing"
          title="Investing Mindset"
          description="A disciplined approach to long-term investing, beginner trading, and risk-aware decision making."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="card-base lg:col-span-2"
          >
            <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <TrendingUp size={18} className="text-primary-500" />
              Focus Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {investingContent.focus.map((item) => (
                <div
                  key={item}
                  className="px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-sm text-gray-700 dark:text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1 }}
            className="card-base"
          >
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <ShieldCheck size={16} className="text-accent" />
              Strategy
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {investingContent.summary}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
