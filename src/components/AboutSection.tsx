import { motion } from "motion/react";
import { siteData } from "@/data/siteData";

export function AboutSection() {
  const { about } = siteData;

  return (
    <section
      id="about"
      className="py-32 md:py-48 border-t border-zinc-900"
    >
      <div className="max-w-6xl">
        <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-4">
          About
        </p>

        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-12">
          Building cool stuff,
          <br />
          learning constantly,
          <br />
          and surviving somehow.
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
            {about.text}
          </p>
        </motion.div>

        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              bg-zinc-950
              border
              border-zinc-800
              rounded-[32px]
              p-8
            "
          >
            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6">
              Currently Into
            </h3>

            <div className="flex flex-wrap gap-3">
              {about.interests.map((item, i) => (
                <span
                  key={i}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-zinc-700
                    text-zinc-300
                    text-sm
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              bg-zinc-950
              border
              border-zinc-800
              rounded-[32px]
              p-8
            "
          >
            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-6">
              Things Built
            </h3>

            <div className="space-y-4">
              {about.built.map((item, i) => (
                <div
                  key={i}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-zinc-800
                    pb-3
                  "
                >
                  <span className="text-zinc-300">
                    {item}
                  </span>

                  <span className="text-zinc-600">
                    →
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
