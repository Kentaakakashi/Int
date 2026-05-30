import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { siteData } from "@/data/siteData";

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="
        py-32
        border-t
        border-zinc-900
      "
    >
      <div className="max-w-6xl">
        <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-4">
          Contact
        </p>

        <motion.h2
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
            duration: 0.7,
          }}
          className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-black
            tracking-tight
            leading-[0.95]
            mb-12
          "
        >
          Let's build
          <br />
          something cool.
        </motion.h2>

        <p
          className="
            text-zinc-400
            text-xl
            max-w-2xl
            mb-16
          "
        >
          Open to collaborations, projects,
          random ideas, and interesting conversations.
        </p>

        <div
          className="
            flex
            flex-wrap
            gap-4
            mb-20
          "
        >
          {siteData.socials.map((social, index) => {
            // @ts-ignore
            const IconComponent =
              Icons[social.icon] || Icons.Link;

            return (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  px-6
                  py-4
                  rounded-full
                  border
                  border-zinc-800
                  bg-zinc-950
                  hover:border-zinc-600
                  transition-all
                "
              >
                <IconComponent
                  className="
                    w-4
                    h-4
                    text-zinc-400
                  "
                />

                <span className="text-zinc-300">
                  {social.label}
                </span>
              </motion.a>
            );
          })}
        </div>

        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            gap-6
            border-t
            border-zinc-900
            pt-8
          "
        >
          <span className="text-zinc-600">
            © {new Date().getFullYear()} {siteData.name}
          </span>

          <span className="text-zinc-700">
            Designed & built by {siteData.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
