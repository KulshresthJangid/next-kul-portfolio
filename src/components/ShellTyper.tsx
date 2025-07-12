"use client";

import { useEffect, useState } from "react";

const lines = [
  "$ mvn clean install -DskipTests",
  "[INFO] Scanning for projects...",
  "[INFO]  └─ kulshresth-portfolio 1.0.0",
  "[INFO] -----------------------------------------------------------",
  "[INFO] Building portfolio 📦 1.0.0",
  "[INFO] --- maven-resources-plugin:3.3.1:resources (default) @ portfolio ---",
  "[INFO] --- maven-compiler-plugin:3.11.0:compile (default) @ portfolio ---",
  "[INFO]  Compiling 42 source files to /app/target/classes",
  "[INFO] -----------------------------------------------------------",
  "[INFO] BUILD SUCCESS in 4.206 s 🚀",
  "",
  "$ docker build -t kulshresth/api:latest .",
  " => [internal] load build definition ...",
  " => [2/5] COPY src /app/src",
  ' => [5/5]  CMD ["java","-jar","app.jar"]',
  " => exporting to image ✔",
  "Successfully built c0d3cafe",
  "",
  "$ docker run -d -p 8080:8080 kulshresth/api:latest",
  "e93fd7f1b54a Running",
  "",
  "⌛ Connecting to MongoDB @ cluster0...",
  "✅ Connection established",
  "",
  "🌐 API listening on http://localhost:8080",
  "",
  ">>> System ready  •  Happy Hacking 💻",
];

export default function ShellTyper() {
  const [linesTyped, setLinesTyped] = useState<string[]>([]);
  const [charIndex, setCharIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState("");

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const line = lines[lineIndex];

    const interval = setInterval(() => {
      setCurrentLine((prev) => prev + line[charIndex]);
      setCharIndex((c) => c + 1);
    }, 12); // typing speed ⏩

    if (charIndex === line.length) {
      clearInterval(interval);
      setTimeout(() => {
        setLinesTyped((prev) => [...prev, line]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex((l) => l + 1);
      }, 80); // short pause between lines
    }

    return () => clearInterval(interval);
  }, [charIndex, lineIndex]);

  return (
    <pre className="whitespace-pre-wrap text-xs font-mono leading-relaxed">
      {linesTyped.map((ln, i) => (
        <div
          key={i}
          className={ln.startsWith("[INFO]") ? "text-gray-400" : "text-accent"}
        >
          {ln}
        </div>
      ))}
      <div className="text-accent">
        {currentLine}
        <span className="animate-blink">|</span>
      </div>
    </pre>
  );
}
