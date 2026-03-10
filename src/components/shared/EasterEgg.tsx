// ============================================
// EASTER EGG - Konami Code Secret
// ============================================

"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Rocket, Code2, Coffee, Heart, Star } from 'lucide-react';
import Confetti from 'react-confetti';
import { KONAMI_CODE } from '@/lib/constants';

export default function EasterEgg() {
  const [isActive, setIsActive] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Track window size for confetti
  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Listen for Konami code
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...keySequence, e.code].slice(-KONAMI_CODE.length);
      setKeySequence(newSequence);

      // Check if sequence matches Konami code
      if (newSequence.length === KONAMI_CODE.length &&
          newSequence.every((key, i) => key === KONAMI_CODE[i])) {
        setIsActive(true);
        setKeySequence([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keySequence]);

  // Fun facts about Raj
  const secrets = [
    { icon: Code2, text: "Started coding journey with C programming in college" },
    { icon: Rocket, text: "Dreams of building tech that impacts millions" },
    { icon: Coffee, text: "Fueled by chai and late-night debugging sessions" },
    { icon: Heart, text: "Believes technology should serve humanity" },
    { icon: Star, text: "First project: A simple ball game in C" },
  ];

  return (
    <AnimatePresence>
      {isActive && (
        <>
          {/* Confetti */}
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={500}
            gravity={0.3}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsActive(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative max-w-lg w-full bg-gradient-to-br from-dark-200 to-dark-300 rounded-3xl border border-white/20 overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setIsActive(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 text-gray-400 hover:text-white transition-colors z-10"
              >
                <X size={20} />
              </button>

              {/* Header with animation */}
              <div className="relative p-8 text-center overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent/20 to-primary-500/20 animate-pulse" />
                
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="relative inline-block"
                >
                  <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center">
                    <Sparkles size={36} className="text-white" />
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative mt-6 text-3xl font-bold text-white"
                >
                  🎮 You Found a Secret!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative mt-2 text-gray-400"
                >
                  Konami code activated! You&apos;re clearly a person of culture.
                </motion.p>
              </div>

              {/* Secrets */}
              <div className="px-8 pb-8 space-y-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Hidden facts about Raj
                </p>
                
                {secrets.map((secret, index) => {
                  const Icon = secret.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                    >
                      <div className="p-2 rounded-xl bg-primary-500/20">
                        <Icon size={20} className="text-primary-400" />
                      </div>
                      <p className="text-sm text-gray-300">{secret.text}</p>
                    </motion.div>
                  );
                })}

                {/* Achievement unlocked */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-center"
                >
                  <p className="text-amber-400 font-semibold">
                    🏆 Achievement Unlocked: &quot;The Curious One&quot;
                  </p>
                  <p className="text-xs text-amber-400/60 mt-1">
                    You&apos;ve discovered the hidden Konami code Easter egg!
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
