import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { siteData } from '@/data/siteData';

export function SkillsSection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">Skill Tree</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteData.skills.map((skill, index) => {
          // @ts-ignore
          const IconComponent = Icons[skill.icon] || Icons.Code;
          
          return (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-8 rounded-[2rem] bg-card-bg border border-card-border hover:border-accent-color/30 transition-colors group flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-full bg-bg-color border border-card-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <IconComponent className="w-5 h-5 text-accent-color" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-text-primary tracking-tight">{skill.title}</h3>
              {skill.subtitle && (
                <p className="text-xs font-mono text-accent-color mb-4 uppercase tracking-widest">
                  {skill.subtitle}
                </p>
              )}
              <p className="text-sm text-text-secondary leading-relaxed mt-auto font-medium">
                {skill.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
