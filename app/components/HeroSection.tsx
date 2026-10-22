"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-14"
      style={{ background: "transparent" }}
    >
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center px-2">

        {/* Full invitation artwork */}
        <motion.div
          initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
          className="relative w-full"
        >
          <img src="/invitation-main.jpg" alt="Apoorva Gonegari & Charan Reddy Jaidi — November 21, 2026"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: 4 }} />
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
          className="flex gap-4 justify-center mt-8 w-full"
        >
          <a href="#rsvp" className="btn-fest flex-1 text-center" style={{ maxWidth: 180 }}>
            RSVP
          </a>
          <a href="#events" className="btn-outline flex-1 text-center" style={{ maxWidth: 180 }}>
            View Events
          </a>
        </motion.div>
      </div>
    </section>
  );
}
