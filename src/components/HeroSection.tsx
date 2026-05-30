import { motion } from "motion/react";
import { siteData } from "@/data/siteData";

export function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
      "
    >
      {/* Glow Effects */}
      <div
        className="
          absolute
          top-20
          left-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-white/5
          blur-[150px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[400px]
          h-[400px]
          rounded-full
          bg-white/5
          blur-[120px]
          pointer-events-none
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
        }}
        className="relative z-10 w-full"
      >
        <div className="mb-10">
          <span
            className="
              uppercase
              tracking-[0.5em]
              text-zinc-500
              text-xs
            "
          >
            Portfolio • 2026
          </span>
        </div>

        <div className="max-w-6xl">
          <h1
            className="
              text-7xl
              md:text-9xl
              lg:text-[11rem]
              font-black
              tracking-tight
              leading-[0.9]
            "
          >
            {siteData.name}
          </h1>

          <div className="mt-8">
            <p
              className="
                text-zinc-500
                uppercase
                tracking-[0.35em]
                text-sm
                mb-4
              "
            >
              {siteData.role}
            </p>

            <p
              className="
                max-w-2xl
                text-xl
                md:text-2xl
                text-zinc-400
                leading-relaxed
              "
            >
              {siteData.tagline}
            </p>
          </div>

          <div
            className="
              flex
              flex-wrap
              gap-4
              mt-14
            "
          >
            <a
              href="#projects"
              className="
                px-8
                py-4
                rounded-full
                bg-white
                text-black
                font-semibold
                hover:scale-105
                transition
              "
            >
              View Projects
            </a>

            <a
              href="#about"
              className="
                px-8
                py-4
                rounded-full
                border
                border-zinc-700
                hover:border-zinc-500
                transition
              "
            >
              About Me
            </a>
          </div>

          <div
            className="
              mt-24
              flex
              flex-wrap
              gap-10
              text-zinc-600
              text-sm
              uppercase
              tracking-[0.25em]
            "
          >
            <span>Developer</span>
            <span>Designer</span>
            <span>Student</span>
            <span>Builder</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
