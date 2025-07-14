"use client";

import { useState, useEffect } from "react";
import { FiCircle, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { RiMediumLine } from "react-icons/ri";
import { motion } from "framer-motion";

const sections = ["home", "skills", "projects", "experience", "about", "contact"];

export default function Sidebar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const fromTop = window.scrollY + window.innerHeight / 2;
      const current = sections.findLast((id) => {
        const el = document.getElementById(id);
        return el && el.offsetTop <= fromTop;
      });
      if (current) setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 top-0 z-50 hidden h-full w-[4.5rem] flex-col items-center
                 bg-base/70 px-4 pt-8 backdrop-blur md:flex"
    >
      {/* Initials / Logo */}
      <a href="#home" className="rotate-90 text-2xl font-bold text-accent">
        KJ
      </a>

      {/* Section dots */}
      <div className="mt-12 flex-1 space-y-10">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="group relative flex items-center justify-center"
          >
            <FiCircle
              className={`h-3 w-3 ${
                active === id ? "fill-accent text-accent" : "text-gray-600"
              } transition`}
            />
            <span className="absolute left-full ml-3 hidden rounded bg-card px-2 py-1 text-xs text-gray-300 group-hover:block">
              {id}
            </span>
          </a>
        ))}
      </div>

      {/* Social links */}
      <div className="mb-6 flex flex-col items-center gap-5">
        <a
          href="https://github.com/KulshresthJangid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-accent transition"
          aria-label="GitHub"
        >
          <FiGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/kulshresth-jangid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-accent transition"
          aria-label="LinkedIn"
        >
          <FiLinkedin size={30} />
        </a>
        <a
          href="https://x.com/nerdy_ge3k"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-accent transition"
          aria-label="Twitter"
        >
          <FiTwitter size={30} />
        </a>
        <a
          href="https://medium.com/@kulshresthjangid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-accent transition"
          aria-label="Medium"
        >
          <RiMediumLine size={30} />
        </a>
      </div>
    </motion.aside>
  );
}
