import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { siteData } from "@/data/siteData";
import DecryptedText from "@/components/DecryptedText";

function ShuffleText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  useEffect(() => {
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplay(() =>
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 0.5;

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{display}</span>;
}

export function AboutSection() {
  const { about } = siteData;

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-center rounded-[2rem] border border-card-border bg-card-bg p-8 md:p-12"
        >
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
            <ShuffleText text="About Me" />
          </h2>

          <p className="mb-4 text-xs uppercase tracking-widest text-text-secondary/60">
            Click to decrypt
          </p>

          <DecryptedText
            text={about.text}
            animateOn="click"
            clickMode="once"
            speed={18}
            maxIterations={18}
            sequential={true}
            revealDirection="start"
            useOriginalCharsOnly={true}
            className="text-lg font-medium leading-relaxed text-text-secondary md:text-xl"
            encryptedClassName="cursor-pointer text-lg font-medium leading-relaxed text-text-secondary/30 md:text-xl"
            parentClassName="block cursor-pointer"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] border border-card-border bg-card-bg p-8"
          >
            <h3 className="mb-6 text-xs font-mono uppercase tracking-widest text-text-secondary">
              Currently Into
            </h3>

            <ul className="space-y-4">
              {about.interests.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 font-medium text-text-primary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-color" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[2rem] border border-card-border bg-card-bg p-8"
          >
            <h3 className="mb-6 text-xs font-mono uppercase tracking-widest text-text-secondary">
              Things Built
            </h3>

            <ul className="space-y-4">
              {about.built.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 font-medium text-text-primary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-color" />
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
