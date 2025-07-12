import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f11] border-t border-gray-800 text-gray-400 px-8 sm:px-20 py-10 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Contact Info */}
        <div className="flex items-center space-x-6">
          <a
            href="mailto:jangidkulshresth@gmail.com"
            className="hover:text-yellow-300 flex items-center gap-2"
          >
            <FaEnvelope /> jangidkulshresth@gmail.com
          </a>
          <a
            href="https://github.com/codealchemyx"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-300 flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-300 flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {/* Footer Line */}
        <p className="text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Kulshresth Jangid. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
