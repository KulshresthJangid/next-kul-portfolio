"use client";

import { useEffect, useState } from "react";

interface Props {
  onDone?: () => void;
  speed?: number;
}

const lines = [
  "$ mvn clean install -DskipTests",
  "[INFO] Building backend modules...",
  "[INFO] Compiling microservices...",
  "[INFO] Spring Boot modules ✅",
  "[INFO] BUILD SUCCESS in 2.4s",
  "",

  "$ gradle bootRun --profile=prod",
  "> Initializing JVM...",
  "> Connecting to DB clusters...",
  "> Startup complete ✅",
  "",

  "$ turbo run dev --filter=portfolio",
  "⚙️  Building frontend (React + Tailwind)...",
  "⚙️  Animations, themes & dark mode enabled ✨",
  "✅ Frontend built in 880ms",
  "",

  "$ npm run intro",
  "👋 Hello, I'm Kulshresth Jangid",
  "→ Senior Software Engineer | System Designer",
  "",

  "$ yarn skills:load",
  "✔ Java, TypeScript, Node.js, Python, Go, Rust",
  "✔ Spring Boot, Express, MeteorJS, Dialogflow",
  "✔ React, Angular, React Native, Flutter",
  "✔ MySQL, MongoDB, DynamoDB, Elasticsearch",
  "✔ Docker, Kubernetes, Jenkins, AWS, CI/CD",
  "",

  "$ git log --oneline --experience",
  "💼 HUSYS → Spring Boot refactor, DB tuning",
  "💼 Rampwin → Microservices, mentoring, CI",
  "💼 CarDekho → Chatbots, LMS, award winner 🏆",
  "",

  "$ curl kulshresth.dev/api/projects | jq",
  "{ ZigChat: No-code Bot Builder }",
  "{ ZigWork: Real-time LMS Platform }",
  "{ AdOptimizer: WhatsApp Automation }",
  "",

  "$ echo '🚀 Portfolio ready on localhost:3000'",
  ">>> System online • Let’s connect 💻",
];


export default function ShellTyper({ onDone, speed = 2 }: Props) {
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      onDone?.(); // fully done
      return;
    }

    const fullLine = lines[lineIndex];
    if (charIndex <= fullLine.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(fullLine.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Done typing this line
      const timeout = setTimeout(() => {
        setTypedLines((prev) => [...prev, fullLine]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }, speed + 100); // pause between lines
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, speed, onDone]);

  return (
    <pre className="whitespace-pre-wrap text-xs font-mono leading-relaxed">
      {typedLines.map((ln, i) => (
        <div
          key={i}
          className={
            ln.startsWith("[INFO]")
              ? "text-gray-400"
              : ln.startsWith("✔")
              ? "text-green-400"
              : "text-accent"
          }
        >
          {ln}
        </div>
      ))}
      {currentLine && (
        <div className="text-accent">
          {currentLine}
          <span className="animate-blink">|</span>
        </div>
      )}
    </pre>
  );
}
