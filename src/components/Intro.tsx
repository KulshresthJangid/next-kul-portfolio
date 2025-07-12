'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start gap-10 px-8 sm:px-20 py-16 bg-[#0f0f11] text-white border-t border-gray-800">
      
      {/* LEFT TEXT */}
      <div className="flex-1">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          I'm Kulshresth Jangid, a problem-solver based in India.
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Software engineer with over <strong className="text-white">3 years of experience</strong> in backend and full-stack development.
          My main stack includes <strong className="text-white">Java</strong>, <strong className="text-white">Spring Boot</strong>, <strong className="text-white">Node.js</strong>,
          and <strong className="text-white">React</strong>. I specialize in building scalable APIs, real-time apps, and system design patterns.
        </p>
        <p className="mt-4 text-gray-400">
          I’m passionate about problem-solving, building clean software, and collaborating on innovative projects.
        </p>
      </div>

      {/* RIGHT CONTACT LINKS */}
      <div className="w-full md:w-1/3 bg-[#1a1a1d] p-6 rounded-xl shadow-xl space-y-5">
        <div className="flex items-center space-x-3">
          <FaGithub className="text-yellow-300 text-xl" />
          <a href="https://github.com/kulshresthjangid" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
            Follow on GitHub
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <FaLinkedin className="text-yellow-300 text-xl" />
          <a href="https://www.linkedin.com/in/kulshresth-jangid/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
            Follow on LinkedIn
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-yellow-300 text-xl" />
          <a href="mailto:jangidkulshresth@gmail.com" className="text-gray-300 hover:text-white">
            jangidkulshresth@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
