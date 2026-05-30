import { motion } from "motion/react";
import { siteData } from "@/data/siteData";

export function StatsSection() {
  return (
    <section className="py-24 md:py-32 border-t border-zinc-900">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {siteData.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            className="group"
          >
            <div className="mb-3 text-zinc-600 uppercase tracking-[0.25em] text-xs">
              {stat.label}
            </div>

            <div
              className="
                text-4xl
                md:text-5xl
                font-black
                tracking-tight
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              {stat.value}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
