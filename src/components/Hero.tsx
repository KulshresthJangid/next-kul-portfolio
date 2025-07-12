import Reveal from "./Reveal";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import ShellTyper from "./ShellTyper";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative grid min-h-screen w-full grid-cols-1 md:grid-cols-2 items-center gap-12 overflow-hidden px-8 md:pl-[6rem]"
    >
      {/* Background spiral (optional image in /public) */}
      <img
        src="/spiral.svg"
        alt=""
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />

      {/* LEFT — Intro Text */}
      <div>
        <Reveal>
          <p className="mb-2 text-sm tracking-widest text-accent">Hey, I'm</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="leading-tight text-4xl font-bold text-gray-100 sm:text-6xl">
            Kulshresth Jangid
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="mt-2 text-2xl sm:text-4xl font-semibold text-accent">
            Senior Software Engineer <br /> Full-Stack Developer <br /> System
            Designer
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-6 max-w-xl text-sm text-gray-400">
            Building robust, scalable apps using Java, Spring Boot, Node.js &
            React. Passionate about clean architecture, microservices, and
            solving real-world problems.
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.4}>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 rounded border border-accent px-6 py-2 text-sm text-accent hover:bg-accent/10 transition"
            >
              <HiOutlineMail className="text-xl" />
              Hire Me
            </a>
            <a
              href="https://drive.google.com/file/d/1oyy1d1_8wT-MuCxutI1I82onFbqZlUev/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded border border-gray-700 px-6 py-2 text-sm text-white hover:bg-gray-800 transition"
            >
              <FiDownload className="text-xl" />
              Download CV
            </a>
          </div>
        </Reveal>
      </div>

      {/* RIGHT — Animated Code Shell */}
      <Reveal direction="right">
        <div className="hidden md:block w-full max-w-md mx-auto bg-card border border-gray-800 rounded-xl p-4 shadow-xl">
          <ShellTyper />
        </div>
      </Reveal>
    </section>
  );
}
