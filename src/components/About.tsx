import { about, education, certifications } from "../lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-gray-800 px-8 py-20 md:pl-[6rem]"
    >
      <Reveal>
        <h2 className="mb-16 text-3xl font-bold text-accent">About</h2>
      </Reveal>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: About Summary */}
        <Reveal direction="left">
          <div className="flex-1 space-y-4">
            {/* Placeholder image */}
            <div className="w-32 h-32 rounded-full bg-card border border-gray-700" ><img className="rounded-full" src="/_.jpeg" alt="" /></div>
            <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
              {about.summary}
            </p>
            <p className="text-sm text-gray-400">
              📧 {about.email}
              <br />
              📱 {about.phone}
            </p>
          </div>
        </Reveal>

        {/* Right: Education & Certifications */}
        <Reveal direction="right">
          <div className="flex-1 space-y-10">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-accent mb-3">
                Education
              </h3>
              <ul className="space-y-3">
                {education.map((edu, idx) => (
                  <li key={idx}>
                    <div className="text-white font-bold">{edu.degree}</div>
                    <div className="text-sm text-gray-400">{edu.school}</div>
                    <div className="text-xs text-gray-500">{edu.year}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-accent mb-3">
                Achievements & Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, idx) => (
                  <li key={idx}>
                    <div className="text-white font-bold">{cert.title}</div>
                    <div className="text-sm text-gray-400">{cert.org}</div>
                    <div className="text-xs text-gray-500">{cert.year}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
