// src/components/Loader.tsx
"use client";

import { useState } from "react";
import ShellTyper from "./ShellTyper";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!done && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-base"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-md rounded-xl border border-gray-800 bg-card p-4 shadow-xl">
              <ShellTyper onDone={() => setDone(true)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main site renders beneath; becomes visible when loader fades */}
      <div
        className={`${
          done ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        {children}
      </div>
    </>
  );
}
