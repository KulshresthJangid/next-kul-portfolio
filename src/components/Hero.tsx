import Reveal from "./Reveal";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-8 md:pl-[6rem]"
    >
      {/* Background spiral (optional image in /public) */}
      <img
        src="/spiral.svg" // Replace with your actual graphic later
        alt=""
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />

      {/* Greeting */}
      <Reveal>
        <p className="mb-2 text-sm tracking-widest text-accent">Hey, I'm</p>
      </Reveal>

      {/* Your name */}
      <Reveal delay={0.1}>
        <h1 className="leading-tight text-4xl font-bold text-gray-100 sm:text-6xl">
          Kulshresth Jangid
        </h1>
      </Reveal>

      {/* Roles */}
      <Reveal delay={0.2}>
        <h2 className="mt-2 text-2xl sm:text-4xl font-semibold text-accent">
          Senior Software Engineer <br/> Full-Stack Developer <br/> System Designer
        </h2>
      </Reveal>

      {/* Mini summary (optional tagline) */}
      <Reveal delay={0.3}>
        <p className="mt-6 max-w-xl text-sm text-gray-400">
          Building robust, scalable apps using Java, Spring Boot, Node.js & React.
          Passionate about clean architecture, microservices, and solving real-world problems.
        </p>
      </Reveal>

      {/* Contact button */}
      <Reveal delay={0.4}>
        <a
          href="#contact"
          className="group mt-8 flex w-max items-center gap-2 rounded border border-accent/40
                     px-6 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10"
        >
          <HiOutlineMail className="text-xl" />
          Contact Me
        </a>
      </Reveal>
    </section>
  );
}
