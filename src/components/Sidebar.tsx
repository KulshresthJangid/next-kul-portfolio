"use client"

import { useState, useEffect } from "react"
import { FiCircle } from "react-icons/fi"
import { motion } from "framer-motion"

const sections = ["home", "projects", "experience", "about", "contact"]

export default function Sidebar() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const onScroll = () => {
      const fromTop = window.scrollY + window.innerHeight / 2
      const current = sections.findLast((id) => {
        const el = document.getElementById(id)
        return el && el.offsetTop <= fromTop
      })
      if (current) setActive(current)
    }

    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed left-0 top-0 z-50 hidden h-full flex-col items-center gap-6
                 bg-base/70 px-4 pt-8 backdrop-blur md:flex"
    >
      {/* Logo / initials */}
      <a href="#home" className="rotate-90 text-2xl font-bold text-accent">
        KJ
      </a>

      {/* Section dots */}
      <div className="mt-12 flex-1 space-y-10">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="group relative flex items-center justify-center"
          >
            <FiCircle
              className={`h-3 w-3 ${
                active === id ? "fill-accent text-accent" : "text-gray-600"
              } transition`}
            />
            <span className="absolute left-full ml-3 hidden rounded bg-card px-2 py-1 text-xs text-gray-300 group-hover:block">
              {id}
            </span>
          </a>
        ))}
      </div>

      {/* Footer line */}
      <span className="h-24 w-px bg-gray-700" />
    </motion.aside>
  )
}
