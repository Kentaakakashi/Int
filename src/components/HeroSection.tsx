import { motion } from 'motion/react';
import { siteData } from '@/data/siteData';

export function HeroSection() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center relative pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-card-border shadow-lg">
            <img 
              src={siteData.profileImage} 
              alt={siteData.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm font-mono text-text-secondary uppercase tracking-widest mb-1">
              {siteData.username}
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card-bg border border-card-border text-xs font-mono text-text-primary shadow-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              {siteData.statusLine}
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-6 text-text-primary">
          {siteData.name}.<br />
          <span className="text-text-secondary">{siteData.role}</span>
        </h1>

        <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed font-medium">
          {siteData.tagline}
        </p>
      </motion.div>
    </section>
  );
}
