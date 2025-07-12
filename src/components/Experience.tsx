import Image from "next/image";
import { experiences } from "../lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-gray-800 py-20 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="mb-16 text-3xl font-bold text-accent">Experience</h2>
        </Reveal>

        {/* Two-column layout */}
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          {/* ─── Timeline column ─────────────────────── */}
          <div className="relative flex-1 pl-6">
            {/* vertical line */}
            <span className="absolute left-0 top-0 h-full w-px bg-gray-700" />

            {experiences.map((exp, idx) => (
              <Reveal key={idx} delay={idx * 0.15}>
                <div className="relative mb-12 pl-6">
                  {/* Year badge */}
                  <span className="absolute -left-20 top-1 hidden sm:block text-center text-xs font-semibold bg-gray-800 text-gray-300 rounded px-2 py-1">
                    {exp.period.split("–")[0].trim().split(" ")[1]}
                  </span>

                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-sm text-gray-400 mb-2">{exp.company}</p>

                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    {exp.achievements.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ─── Photo column ─────────────────────── */}
          <Reveal direction="right">
            <div className="flex-shrink-0 w-full max-w-sm overflow-hidden rounded-3xl border border-gray-700 shadow-xl">
              <Image
                src="/image.png"
                width={600}
                height={800}
                alt="Working at the command line"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
