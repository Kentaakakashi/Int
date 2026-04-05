import { motion } from "motion/react";
import Shuffle from "@/components/Shuffle";
import { siteData } from "@/data/siteData";

export function AboutSection() {
  const { about } = siteData;

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-8 md:p-12 rounded-[2rem] bg-card-bg border border-card-border flex flex-col justify-center"
        >
          <Shuffle
            text="About Me"
            tag="h2"
            shuffleDirection="right"
            duration={0.45}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.025}
            threshold={0.15}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
            loop={false}
            className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-text-primary"
          />

          <Shuffle
            text="Code, chaos, and trying to make both look clean."
            tag="p"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.018}
            threshold={0.15}
            triggerOnce={true}
            triggerOnHover={false}
            respectReducedMotion={true}
            loop={false}
            className="text-sm md:text-base text-text-secondary mb-6"
          />

          <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium">
            {about.text}
          </p>
        </motion.div>

        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-[2rem] bg-card-bg border border-card-border"
          >
            <h3 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-6">
              Currently Into
            </h3>
            <ul className="space-y-4">
              {about.interests.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-text-primary font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-color" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-[2rem] bg-card-bg border border-card-border"
          >
            <h3 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-6">
              Things Built
            </h3>
            <ul className="space-y-4">
              {about.built.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-text-primary font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-color" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
