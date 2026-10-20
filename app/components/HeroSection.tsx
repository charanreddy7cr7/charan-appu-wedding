"use client";

import { motion } from "framer-motion";


export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-14"
      style={{ background: "transparent" }}
    >
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col gap-0 px-2">

        {/* ── TOP — Telugu blessings + wedding scene (frameless) ───────────── */}
        <motion.div
          initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
          className="relative"
        >
          {/* Telugu blessings */}
          <div className="flex justify-between px-4 mb-2 relative" style={{ zIndex: 3 }}>
            {["శ్రీరస్తు", "శుభమస్తు", "అవిఘ్నమస్తు"].map((b) => (
              <span key={b} style={{
                fontFamily: "'Cinzel',serif", fontWeight: 600,
                fontSize: "clamp(0.55rem,1.8vw,0.72rem)", color: "#7A5A10",
                letterSpacing: "0.03em", textShadow: "0 1px 2px rgba(255,245,200,0.7)",
              }}>{b}</span>
            ))}
          </div>

          {/* Wedding family scene */}
          <img src="/wedding-family-color.jpg" alt="Wedding ceremony scene"
            style={{ width: "100%", height: "auto", display: "block" }} />
        </motion.div>

        {/* ── MIDDLE — name card (flush with photo above) ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
        >
          <img src="/names-card.jpg" alt="Apoorva Gonegari & Charan Reddy Jaidi"
            style={{ width: "100%", height: "auto", display: "block" }} />
        </motion.div>

        {/* ── BOTTOM — date + buttons (no box) ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-center mb-5 relative" style={{
            zIndex: 3, fontFamily: "'Cinzel',serif", fontWeight: 500,
            fontSize: "0.8rem", letterSpacing: "0.2em", color: "#6B4F2A", textTransform: "uppercase",
            textShadow: "0 1px 2px rgba(255,245,200,0.6)",
          }}>
            November 21
          </p>

          <div className="flex gap-4 justify-center relative" style={{ zIndex: 3 }}>
            <a href="#rsvp" className="btn-fest flex-1 text-center" style={{ maxWidth: 180 }}>
              RSVP
            </a>
            <a href="#events" className="btn-outline flex-1 text-center" style={{ maxWidth: 180 }}>
              View Events
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
