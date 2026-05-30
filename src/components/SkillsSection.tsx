import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { siteData } from "@/data/siteData";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-32 md:py-48 border-t border-zinc-900"
    >
      <div className="mb-20">
        <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-4">
          Skills
        </p>

        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
          Things I spend
          <br />
          way too much
          <br />
          time doing.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {siteData.skills.map((skill, index) => {
          // @ts-ignore
          const IconComponent = Icons[skill.icon] || Icons.Code;

          return (
            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                bg-zinc-950
                border
                border-zinc-800
                rounded-[32px]
                p-8
                md:p-10
              "
            >
              <div className="flex items-start justify-between mb-10">
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    border
                    border-zinc-700
                    flex
                    items-center
                    justify-center
                  "
                >
                  <IconComponent
                    className="
                      w-6
                      h-6
                      text-zinc-300
                    "
                  />
                </div>

                <span className="text-zinc-700 text-sm">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-3xl font-black tracking-tight mb-2">
                {skill.title}
              </h3>

              {skill.subtitle && (
                <p
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-zinc-500
                    text-xs
                    mb-6
                  "
                >
                  {skill.subtitle}
                </p>
              )}

              <p className="text-zinc-400 leading-relaxed text-lg">
                {skill.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
