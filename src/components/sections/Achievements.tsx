"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Calendar } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { achievements } from "@/data/content";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const items = achievements;

  const stats = [
    { label: "Major Projects", value: 6, suffix: "+" },
    { label: "Startups Founded", value: 2, suffix: "" },
    { label: "Leadership Roles", value: 4, suffix: "+" },
    { label: "Competitions / Events", value: 5, suffix: "+" },
  ];

  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container-width relative">
        <SectionHeading
          label="Achievements"
          title="Milestones & Impact"
          description="Numbers and recognitions that reflect consistent effort and growth."
        />

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-base text-center !p-6"
            >
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-base flex flex-col xs:flex-row gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Trophy size={18} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <span className="flex-shrink-0 inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                    <Calendar size={12} />
                    {achievement.year}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
