"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Send, FolderOpen } from "lucide-react";
import dynamic from "next/dynamic";
import { heroContent } from "@/data/content";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene"),
  { ssr: false }
);

function TypingAnimation({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
          if (displayText.length === currentText.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentText.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 30 : 70
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span className="text-primary-400">
      {displayText}
      <span className="animate-pulse text-primary-500">|</span>
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-glow dark:opacity-100 opacity-50" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />

      {/* 3D Scene */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-width px-4 sm:px-6 text-center"
      >
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base font-medium text-gray-500 dark:text-gray-400 tracking-widest uppercase mb-4"
        >
          {heroContent.greeting}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6"
        >
          <span className="gradient-text-accent">{heroContent.name}</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl font-display font-medium text-gray-600 dark:text-gray-300 mb-6 h-8 md:h-10"
        >
          <TypingAnimation texts={heroContent.roles} />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {heroContent.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium text-sm shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <FolderOpen size={18} />
            {heroContent.cta.projects}
          </a>
          <a
            href="/resume.txt"
            download="Raj_Bhurtel_Resume.txt"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-2xl glass text-gray-900 dark:text-white font-medium text-sm hover-lift"
          >
            <Download
              size={18}
              className="group-hover:translate-y-0.5 transition-transform"
            />
            {heroContent.cta.resume}
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-2xl border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 font-medium text-sm hover:border-primary-500/50 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Send
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
            {heroContent.cta.contact}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary-500 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}
