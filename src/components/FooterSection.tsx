import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { siteData } from '@/data/siteData';

export function FooterSection() {
  return (
    <footer className="py-12 mt-10 border-t border-card-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-text-secondary uppercase tracking-widest"
        >
          © {new Date().getFullYear()} {siteData.name}. All rights reserved.
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {siteData.socials.map((social, index) => {
            // @ts-ignore
            const IconComponent = Icons[social.icon] || Icons.Link;
            
            return (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="w-12 h-12 rounded-full bg-card-bg border border-card-border flex items-center justify-center text-text-secondary hover:text-accent-color hover:border-accent-color transition-colors shadow-sm"
                aria-label={social.label}
              >
                <IconComponent className="w-5 h-5" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
