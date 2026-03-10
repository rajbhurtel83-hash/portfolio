"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { siteConfig } from "@/data/content";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");

    try {
      // Client-side: open mailto link with form data
      const subject = encodeURIComponent(data.subject);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
      );
      window.open(
        `mailto:${siteConfig.links.email}?subject=${subject}&body=${body}`,
        "_blank"
      );

      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
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
  ];

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 text-base sm:text-sm";

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container-width relative">
        <SectionHeading
          label="Contact"
          title="Get In Touch"
          description="Have a project, opportunity, or idea worth discussing? I'd like to hear about it."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-2">
                Let&apos;s build something together
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Whether it&apos;s an internship opportunity, a collaboration, or a
                startup idea — I&apos;m open to conversations that push
                boundaries.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <Mail size={16} className="text-primary-500" />
                </div>
                {siteConfig.links.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <MapPin size={16} className="text-primary-500" />
                </div>
                Banepa, Kavre, Nepal
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <Phone size={16} className="text-primary-500" />
                </div>
                {siteConfig.links.phone}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                Connect with me
              </p>
              <div className="grid grid-cols-3 gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-xl glass text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
                  >
                    <Icon size={18} />
                    <span className="text-[10px] font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-base space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    {...register("name")}
                    placeholder="Your name"
                    className={inputClasses}
                    aria-label="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email")}
                    placeholder="Your email"
                    type="email"
                    className={inputClasses}
                    aria-label="Your email"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <input
                  {...register("subject")}
                  placeholder="Subject"
                  className={inputClasses}
                  aria-label="Subject"
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  placeholder="Your message"
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  aria-label="Your message"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium text-sm shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm"
                  >
                    <CheckCircle size={16} />
                    Message sent successfully. I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
