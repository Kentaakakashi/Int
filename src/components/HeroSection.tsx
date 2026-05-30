import { motion } from "motion/react";
import { siteData } from "@/data/siteData";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <div className="mb-8">
          <span className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
            Portfolio / 2026
          </span>
        </div>

        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-black leading-[0.95] tracking-tight">
            {siteData.name}
          </h1>

          <h2 className="text-4xl md:text-6xl text-zinc-500 font-bold mt-3">
            {siteData.role}
          </h2>

          <p className="max-w-2xl text-zinc-400 text-lg md:text-xl mt-10 leading-relaxed">
            {siteData.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="#about"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold transition hover:scale-105"
            >
              About Me
            </a>

            <a
              href="#projects"
              className="px-8 py-4 border border-zinc-700 rounded-full font-semibold hover:border-white transition"
            >
              Projects
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
