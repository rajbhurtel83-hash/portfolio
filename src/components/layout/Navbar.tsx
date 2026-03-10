"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

type NavGroup = {
  label: string;
  children: NavItem[];
};

type NavEntry = NavItem | NavGroup;

function isGroup(entry: NavEntry): entry is NavGroup {
  return "children" in entry;
}

const navStructure: NavEntry[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  {
    label: "Portfolio",
    children: [
      { label: "Projects", href: "#projects" },
      { label: "Startups", href: "#startups" },
      { label: "Investing", href: "#investing" },
    ],
  },
  {
    label: "Journey",
    children: [
      { label: "Experience", href: "#experience" },
      { label: "Leadership", href: "#leadership" },
      { label: "Achievements", href: "#achievements" },
      { label: "Community Work", href: "#community" },
      { label: "Vision", href: "#vision" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

// Flat list for mobile + intersection observer
const allNavLinks = navStructure.flatMap((entry) =>
  isGroup(entry) ? entry.children : [entry]
);

function DropdownMenu({
  group,
  activeSection,
  onNavigate,
}: {
  group: NavGroup;
  activeSection: string;
  onNavigate: (href: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const hasActive = group.children.some((c) => c.href === activeSection);

  const show = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };
  const hide = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => () => clearTimeout(timeout.current), []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300",
          hasActive
            ? "text-primary-600 dark:text-primary-400 bg-primary-500/10"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
        )}
      >
        {group.label}
        <ChevronDown
          size={14}
          className={cn(
            "transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[180px] rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-dark-100 shadow-xl shadow-black/10 dark:shadow-black/40 py-1.5 z-50"
          >
            {group.children.map((child) => (
              <button
                key={child.href}
                onClick={() => {
                  onNavigate(child.href);
                  setOpen(false);
                }}
                className={cn(
                  "w-full text-left px-4 py-2.5 text-sm font-medium transition-colors duration-200",
                  activeSection === child.href
                    ? "text-primary-600 dark:text-primary-400 bg-primary-500/5"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                )}
              >
                {child.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3"
            : "py-5"
        )}
      >
        <div className="container-width px-4 sm:px-6">
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500",
              scrolled
                ? "glass shadow-lg shadow-black/5 dark:shadow-black/20"
                : "bg-transparent"
            )}
          >
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-primary-500/30 shadow-md shadow-primary-500/10 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/profile/raj-profile.jpg"
                  alt="Raj Bhurtel"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-semibold text-lg text-gray-900 dark:text-white hidden sm:block">
                {siteConfig.name}
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navStructure.map((entry) =>
                isGroup(entry) ? (
                  <DropdownMenu
                    key={entry.label}
                    group={entry}
                    activeSection={activeSection}
                    onNavigate={handleNavClick}
                  />
                ) : (
                  <button
                    key={entry.href}
                    onClick={() => handleNavClick(entry.href)}
                    className={cn(
                      "px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                      activeSection === entry.href
                        ? "text-primary-600 dark:text-primary-400 bg-primary-500/10"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                    )}
                  >
                    {entry.label}
                  </button>
                )
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Status Indicator */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                  Open to Work
                </span>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mobileOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-white dark:bg-dark-100 shadow-2xl p-6 pt-24 overflow-y-auto"
            >
              {/* Mobile Status Indicator */}
              <div className="flex items-center gap-2 px-4 py-2.5 mb-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  Open to Work
                </span>
              </div>

              <div className="flex flex-col gap-1">
                {navStructure.map((entry) => {
                  if (isGroup(entry)) {
                    return (
                      <div key={entry.label} className="mt-3 mb-1">
                        <p className="px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                          {entry.label}
                        </p>
                        {entry.children.map((child, j) => (
                          <motion.button
                            key={child.href}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.04 }}
                            onClick={() => handleNavClick(child.href)}
                            className={cn(
                              "w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                              activeSection === child.href
                                ? "text-primary-600 dark:text-primary-400 bg-primary-500/10"
                                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                            )}
                          >
                            {child.label}
                          </motion.button>
                        ))}
                      </div>
                    );
                  }

                  return (
                    <motion.button
                      key={entry.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      onClick={() => handleNavClick(entry.href)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                        activeSection === entry.href
                          ? "text-primary-600 dark:text-primary-400 bg-primary-500/10"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                      )}
                    >
                      {entry.label}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
