"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Terminal, Sparkles, Search, Brain, Coffee } from "lucide-react";
import Link from "next/link";

const glitchText = ["404", "4O4", "4Ø4", "四零四", "ᗐ0ᗐ", "₄₀₄"];
const funnyMessages = [
  "This page went to get coffee and never came back ☕",
  "The hamster powering this page took a break 🐹",
  "I looked everywhere, even in /dev/null 🔍",
  "This page is as real as my sleep schedule 😴",
  "Plot twist: the page was inside you all along 🎭",
  "Error 404: Witty error message not found 🤖",
];

const suggestedLinks = [
  { label: "View Projects", href: "/#projects", icon: Terminal },
  { label: "Check Ventures", href: "/#ventures", icon: Sparkles },
  { label: "Ask AI", href: "/?chat=open", icon: Brain },
];

export default function NotFound() {
  const [glitchIndex, setGlitchIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const fullCommand = "find / -name 'missing_page' 2>/dev/null";

  // Glitch effect for 404
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchIndex((prev) => (prev + 1) % glitchText.length);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Rotate funny messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % funnyMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0a0f] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse delay-1000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(77,97,252,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(77,97,252,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto">
        {/* Glitchy 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <h1 className="text-[10rem] md:text-[14rem] font-bold leading-none select-none relative">
            <span className="absolute inset-0 text-primary/20 blur-xl animate-pulse">
              {glitchText[glitchIndex]}
            </span>
            <span className="relative bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              {glitchText[glitchIndex]}
            </span>
          </h1>
        </motion.div>

        {/* Rotating funny message */}
        <motion.div
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="h-8 mb-6"
        >
          <p className="text-lg text-gray-400 font-medium">
            {funnyMessages[messageIndex]}
          </p>
        </motion.div>

        {/* Terminal-style search */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-[#121218] border border-white/10 rounded-xl p-4 mb-8 font-mono text-sm"
        >
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span>terminal</span>
          </div>
          <div className="flex items-center gap-2 text-left">
            <span className="text-green-400">raj@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-primary">~</span>
            <span className="text-gray-500">$</span>
            <span className="text-gray-300">{typedCommand}</span>
            <span className="w-2 h-5 bg-primary animate-pulse" />
          </div>
          {typedCommand === fullCommand && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 mt-2 text-left"
            >
              Error: Page not found in filesystem. Try the homepage?
            </motion.p>
          )}
        </motion.div>

        {/* Suggested Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8"
        >
          {suggestedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <link.icon size={18} className="text-gray-500 group-hover:text-primary transition-colors" />
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* Main Actions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </motion.div>

        {/* Easter egg hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-xs text-gray-600 mt-8"
        >
          Psst... try the Konami code on the homepage 🎮
        </motion.p>
      </div>
    </div>
  );
}
