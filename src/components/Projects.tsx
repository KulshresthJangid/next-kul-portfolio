
import { projects } from "../lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-gray-800 px-8 py-20 md:pl-[6rem]"
    >
      <Reveal>
        <h2 className="mb-12 text-3xl font-bold text-accent">Projects</h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((proj, index) => (
          <Reveal key={index} delay={index * 0.2}>
            <div className="rounded-xl border border-gray-700 bg-card p-6 shadow-md hover:border-accent transition">
              <h3 className="text-xl font-semibold text-white">{proj.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{proj.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {proj.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-accent/10 px-2 py-1 text-xs text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
