import { motion } from 'motion/react';
import { siteData } from '@/data/siteData';

export function FavoritesSection() {
  const { favorites } = siteData;

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">Favorites</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(favorites).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-[2rem] bg-card-bg border border-card-border"
          >
            <h3 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-6">
              {category}
            </h3>
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li key={i} className="text-text-primary font-medium flex items-center gap-4">
                  <span className="text-accent-color/40 font-mono text-xs">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
