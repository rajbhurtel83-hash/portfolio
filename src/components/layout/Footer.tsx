"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Twitter, Instagram, Facebook, Mail, Phone } from "lucide-react";
import { siteConfig, navLinks } from "@/data/content";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: siteConfig.links.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
    ...(siteConfig.links.instagram
      ? [{ icon: Instagram, href: siteConfig.links.instagram, label: "Instagram" }]
      : []),
    ...(siteConfig.links.facebook
      ? [{ icon: Facebook, href: siteConfig.links.facebook, label: "Facebook" }]
      : []),
    ...(siteConfig.links.twitter
      ? [{ icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" }]
      : []),
    { icon: Mail, href: `mailto:${siteConfig.links.email}`, label: "Email" },
    { icon: Phone, href: `tel:${siteConfig.links.phone}`, label: "Phone" },
  ];

  return (
    <footer className="relative border-t border-gray-200 dark:border-white/5">
      <div className="container-width section-padding !py-12 md:!py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand with Photo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-primary-500/20 border border-primary-500/20 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile/raj-profile.jpg"
                  alt="Raj Bhurtel"
                  className="w-full h-full object-cover block"
                />
              </div>
              <div>
                <span className="font-display font-semibold text-lg text-gray-900 dark:text-white block">
                  {siteConfig.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  Engineer &bull; Founder &bull; Innovator
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              Computer Engineering student & entrepreneur building scalable
              digital solutions from Nepal for the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect - All Social Links with Labels */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300 group"
                >
                  <Icon size={16} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Crafted with
            precision.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-xl glass text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
