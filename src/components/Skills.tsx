"use client";

import { useState, useEffect } from "react";
import Reveal from "./Reveal";

const skillGroups = {
  Languages: ["Java", "JavaScript", "TypeScript", "Python", "Go", "Rust", "Ruby", "SQL"],
  Backend: ["Spring Boot", "Express.js", "MeteorJS", "Dialogflow"],
  Frontend: ["React.js", "AngularJS", "React Native", "Flutter", "Bootstrap"],
  Databases: ["MySQL", "MongoDB", "DynamoDB", "MariaDB", "Elasticsearch"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "AWS", "Jenkins", "CI/CD", "Nginx"],
  Exploring: ["AI", "ML", "Big Data", "Web3", "Data Science"],
};

const categories = Object.keys(skillGroups);

export default function Skills() {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [typedCmd, setTypedCmd] = useState("");
  const [showSkills, setShowSkills] = useState(false);

  /* re‑type command whenever tab changes */
  useEffect(() => {
    const fullCmd = `$ load-skills --category "${activeTab.toLowerCase()}"`;
    setTypedCmd("");
    setShowSkills(false);

    let i = 0;
    const tick = () => {
      setTypedCmd(fullCmd.slice(0, i + 1));
      i += 1;
      if (i <= fullCmd.length) {
        setTimeout(tick, 22); // typing speed
      } else {
        setShowSkills(true); // reveal pills when done
      }
    };
    tick();
  }, [activeTab]);

  return (
    <section
      id="skills"
      className="border-t border-gray-800 py-20 px-6 sm:px-10 md:px-16 lg:px-24"
    >
      <Reveal>
        <h2 className="mb-12 text-3xl font-bold text-accent">Skills Terminal</h2>
      </Reveal>

      {/* Tab buttons */}
      <div className="mb-6 flex flex-wrap gap-3 text-sm">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-1 rounded-full border transition
              ${
                activeTab === cat
                  ? "bg-accent text-black border-accent"
                  : "border-gray-700 text-gray-300 hover:bg-accent/10"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Terminal box */}
      <Reveal delay={0.1}>
        <div className="rounded-xl border border-gray-700 bg-card/50 p-6 shadow-lg backdrop-blur-md font-mono text-sm">
          {/* Typing command */}
          <p className="text-accent mb-4">
            {typedCmd}
            {typedCmd.length < `$ load-skills --category "${activeTab.toLowerCase()}"`.length && (
              <span className="animate-blink">|</span>
            )}
          </p>

          {/* Skills pills */}
          {showSkills && (
            <div className="flex flex-wrap gap-3 text-green-400">
              {skillGroups[activeTab].map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-green-700 bg-green-900/20 px-3 py-1 hover:bg-green-800/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
