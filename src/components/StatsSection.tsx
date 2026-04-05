import { motion } from 'motion/react';
import { siteData } from '@/data/siteData';

export function StatsSection() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {siteData.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col space-y-3 p-6 rounded-3xl bg-card-bg border border-card-border hover:border-accent-color/30 transition-colors"
          >
            <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">
              {stat.label}
            </span>
            <span className="text-lg md:text-xl font-semibold text-text-primary">
              {stat.value}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
