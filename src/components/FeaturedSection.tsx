import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { siteData } from '@/data/siteData';

export function FeaturedSection() {
  const { featuredProject } = siteData;

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">Featured Project</h2>
          <span className="text-xs font-mono px-4 py-1.5 rounded-full bg-card-bg border border-card-border text-text-secondary uppercase tracking-widest">
            {featuredProject.status}
          </span>
        </div>

        <div className="group relative rounded-[2rem] overflow-hidden bg-card-bg border border-card-border shadow-2xl">
          <div className="aspect-[4/3] md:aspect-[21/9] w-full overflow-hidden">
            <img 
              src={featuredProject.image} 
              alt={featuredProject.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-bg-color via-bg-color/60 to-transparent opacity-90" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h3 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-text-primary">
                {featuredProject.title}
              </h3>
              <p className="text-text-secondary md:text-xl mb-8 leading-relaxed max-w-2xl">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {featuredProject.technologies.map(tech => (
                  <span key={tech} className="text-xs font-mono px-4 py-1.5 rounded-full bg-card-border/50 text-text-primary border border-card-border/50 backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {featuredProject.link && (
              <a 
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-text-primary text-bg-color hover:scale-110 transition-transform shrink-0 shadow-xl"
              >
                <ArrowUpRight className="w-8 h-8" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
