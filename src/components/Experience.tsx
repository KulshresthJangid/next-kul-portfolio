import { experiences } from "../lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-gray-800 py-20 pl-12 pr-6 md:pl-[8rem]"
    >
      <Reveal>
        <h2 className="mb-16 text-3xl font-bold text-accent">Experience</h2>
      </Reveal>

      <div className="relative border-l-2 border-gray-700 ml-4">
        {experiences.map((exp, idx) => (
          <Reveal key={idx} delay={idx * 0.2}>
            <div className="mb-12 ml-6 flex flex-col gap-2 relative">
              {/* Year badge */}
              <div className="absolute -left-24 top-1 w-16 text-center text-xs font-semibold bg-gray-800 text-gray-300 py-1 rounded">
                {exp.period.split("–")[0].trim().split(" ")[1]}
              </div>

              {/* Role and company */}
              <h3 className="text-lg font-bold text-white">{exp.role}</h3>
              <p className="text-sm text-gray-400">{exp.company}</p>

              {/* Bullets */}
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-gray-300">
                {exp.achievements.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
