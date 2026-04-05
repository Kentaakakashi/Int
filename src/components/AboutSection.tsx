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
import { motion } from "motion/react";
import { siteData } from "@/data/siteData";
import DecryptedText from "@/components/DecryptedText";
import { useEffect, useState } from "react";

// SIMPLE SHUFFLE (NO GSAP NONSENSE)
function ShuffleText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  useEffect(() => {
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplay((prev) =>
        prev
          .split("")
          .map((char, i) => {
            if (i < iteration) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration += 1 / 2;

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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-8 md:p-12 rounded-[2rem] bg-card-bg border border-card-border flex flex-col justify-center"
        >

          {/* 🔥 SHUFFLE TITLE */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 text-text-primary">
            <ShuffleText text="About Me" />
          </h2>

          {/* CLICK HINT */}
          <p className="mb-4 text-xs uppercase tracking-widest text-text-secondary/60">
            Click to decrypt
          </p>

          {/* 🔐 DECRYPT PARAGRAPH */}
          <DecryptedText
            text={about.text}
            animateOn="click"
            clickMode="once"
            speed={18}
            maxIterations={18}
            sequential={true}
            revealDirection="start"
            useOriginalCharsOnly={true}
            className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium"
            encryptedClassName="text-lg md:text-xl text-text-secondary/30 leading-relaxed font-medium cursor-pointer"
            parentClassName="block cursor-pointer"
          />
        </motion.div>

        {/* RIGHT SIDE CARDS */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">

          {/* INTERESTS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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

          {/* BUILT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
