"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { visionContent } from "@/data/content";

export default function Vision() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-24 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-primary-400/20 rounded-full blur-2xl animate-float-delayed" />

      <motion.div
        style={{ opacity, scale }}
        className="container-width px-4 sm:px-6 relative text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-accent/10 text-accent border border-accent/20 mb-8"
        >
          <Sparkles size={14} />
          Vision
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight tracking-tight mb-8"
        >
          <span className="text-gray-900 dark:text-white">
            &ldquo;
          </span>
          <span className="gradient-text-accent">
            {visionContent.statement}
          </span>
          <span className="text-gray-900 dark:text-white">
            &rdquo;
          </span>
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          {visionContent.description}
        </motion.p>
      </motion.div>
    </section>
  );
}
