import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        flex
        justify-center
        pt-6
        px-6
      "
    >
      <div
        className={`
          w-full
          max-w-6xl
          transition-all
          duration-300
          rounded-full
          ${
            scrolled
              ? "bg-black/70 backdrop-blur-xl border border-zinc-800 shadow-2xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            flex
            items-center
            justify-between
            px-8
            py-4
          "
        >
          <a
            href="#"
            className="
              text-sm
              font-black
              tracking-[0.35em]
              uppercase
            "
          >
            KK
          </a>

          <div
            className="
              hidden
              md:flex
              items-center
              gap-8
            "
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  text-zinc-400
                  hover:text-white
                  transition-colors
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="
              px-5
              py-2.5
              rounded-full
              border
              border-zinc-700
              text-sm
              hover:border-zinc-500
              transition-all
            "
          >
            Connect
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
