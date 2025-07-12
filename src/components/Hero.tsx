"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-start px-8 sm:px-20 pt-10 bg-[#0f0f11] text-white">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 leading-tight">
        Software developer, <br />
        designer and tech enthusiast.
      </h1>
      <Reveal delay={0.2}>
      <p className="text-lg max-w-xl mb-6 text-gray-400">
        I’m a full-stack developer and curious mind who loves solving real
        problems through scalable, impactful software solutions.
      </p>
      </Reveal>
      <div className="flex space-x-5">
        <a
          href="https://github.com/kulshresthjangid"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="text-2xl hover:text-yellow-300 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/kulshresth-jangid/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-yellow-300 transition" />
        </a>
      </div>
    </section>
  );
}
