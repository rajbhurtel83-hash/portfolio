"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { projects } from "@/data/content";
import { sanitizeUrl } from "@/lib/utils";

function ProjectCard({
  project,
  onOpen,
}: {
  project: (typeof projects)[0];
  onOpen: () => void;
}) {
  const safeGithubUrl = sanitizeUrl(project.githubUrl, {
    allowRelative: false,
    allowHash: false,
  });
  const safeLiveUrl = sanitizeUrl(project.liveUrl, {
    allowRelative: false,
    allowHash: false,
  });

  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group cursor-pointer perspective-1000"
      onClick={onOpen}
    >
      <div className="card-base h-full flex flex-col overflow-hidden !p-0">
        {/* Image Area */}
        <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent/10 overflow-hidden">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 dark:from-dark-100/95 via-transparent to-transparent z-10" />
          <div className="absolute top-3 right-3 z-20">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-display font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
            {project.shortDesc}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-medium text-gray-500 dark:text-gray-500">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
            <div className="flex gap-2">
              {safeGithubUrl !== "#" && (
                <a
                  href={safeGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
                  aria-label="View source code"
                >
                  <Github size={16} />
                </a>
              )}
              {safeLiveUrl !== "#" && (
                <a
                  href={safeLiveUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
                  aria-label="View live demo"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-500 dark:text-primary-400 group-hover:gap-2 transition-all duration-300">
              View Details <ChevronRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0];
  onClose: () => void;
}) {
  const safeGithubUrl = sanitizeUrl(project.githubUrl, {
    allowRelative: false,
    allowHash: false,
  });
  const safeLiveUrl = sanitizeUrl(project.liveUrl, {
    allowRelative: false,
    allowHash: false,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
        className="relative w-full max-w-2xl max-h-[88dvh] md:max-h-[85vh] overflow-y-auto overscroll-contain touch-pan-y rounded-3xl bg-white dark:bg-dark-100 shadow-2xl border border-gray-200 dark:border-white/10"
      >
        {/* Header */}
        <div className="relative h-56 bg-gradient-to-br from-primary-500/30 to-accent/20 overflow-hidden">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-500 dark:text-primary-400 border border-primary-500/20 mb-4">
            {project.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {project.fullDesc}
          </p>

          {project.problemSolved && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
                Problem Solved
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
          )}

          {project.futureImprovements?.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">
                Future Improvements
              </h4>
              <ul className="space-y-1">
                {project.futureImprovements.map((item) => (
                  <li key={item} className="text-sm text-gray-600 dark:text-gray-400">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.screenshots?.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                Screenshots
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {project.screenshots.slice(0, 4).map((shot) => (
                  <div key={shot} className="relative h-24 rounded-xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                    <Image
                      src={shot}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 45vw, 220px"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl text-sm font-medium bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-white/5">
            {safeGithubUrl !== "#" && (
              <a
                href={safeGithubUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-sm font-medium text-gray-900 dark:text-white hover-lift"
              >
                <Github size={16} /> Source Code
              </a>
            )}
            {safeLiveUrl !== "#" && (
              <a
                href={safeLiveUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-medium shadow-lg shadow-primary-500/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const projectItems = projects;
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  useEffect(() => {
    if (!selectedProject) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-width relative">
        <SectionHeading
          label="Projects"
          title="All Projects"
          description="A complete project list with each build presented separately, including software, systems, robotics, civic-tech, and cybersecurity work."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectItems.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
