import { motion } from "motion/react";
import { siteData } from "@/data/siteData";

export function FeaturedSection() {
  const project = siteData.featuredProject;

  return (
    <section
      id="projects"
      className="py-32 md:py-48 border-t border-zinc-900"
    >
      <div className="mb-16">
        <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-4">
          Featured Work
        </p>

        <h2 className="text-5xl md:text-7xl font-black tracking-tight">
          Selected Project
        </h2>
      </div>

      <motion.div
        whileHover={{
          y: -6,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          bg-zinc-950
          border
          border-zinc-800
          rounded-[32px]
          overflow-hidden
        "
      >
        <div className="grid lg:grid-cols-2">
          <div className="p-8 md:p-14 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-zinc-500 uppercase tracking-widest text-xs">
                {project.status}
              </span>
            </div>

            <h3 className="text-4xl md:text-6xl font-black leading-tight">
              {project.title}
            </h3>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-zinc-700
                    text-sm
                    text-zinc-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <div className="mt-10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
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
                  View Project
                </a>
              </div>
            )}
          </div>

          <div
            className="
              min-h-[350px]
              lg:min-h-full
              bg-gradient-to-br
              from-zinc-900
              via-zinc-950
              to-black
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                text-center
                px-8
              "
            >
              <h4 className="text-3xl font-black mb-4">
                {project.title}
              </h4>

              <p className="text-zinc-500">
                Project Preview Area
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
