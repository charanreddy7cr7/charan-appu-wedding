"use client";

import { motion } from "framer-motion";
import Confetti from "./Confetti";
import { FloralCorner } from "./FloralCorner";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: "radial-gradient(circle at 20% 20%, #12213F 0%, #0B1834 55%, #0A1428 100%)" }}
    >
      <Confetti count={44} />

      {/* Floral corners — navy roses + gold ferns (top-left & bottom-right mirrored) */}
      <FloralCorner size={300} className="absolute top-0 left-0 pointer-events-none select-none"
        style={{ opacity: 0.95 }} />
      <FloralCorner size={300} className="absolute bottom-0 right-0 pointer-events-none select-none"
        style={{ opacity: 0.95, transform: "rotate(180deg)" }} />

      {/* Big soft colour blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,162,75,0.16), transparent 70%)" }} />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,206,142,0.12), transparent 70%)" }} />
      <div className="absolute top-1/3 right-10 w-40 h-40 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,162,75,0.14), transparent 70%)" }} />

      <div className="relative z-10 text-center max-w-3xl">
        {/* Elegant eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-block mb-8"
        >
          <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 500, fontSize: "0.72rem", letterSpacing: "0.34em", color: "#C9A24B", textTransform: "uppercase" }}>
            ✦ Together with their families ✦
          </span>
        </motion.div>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="festive-text"
          style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2.2rem, 8vw, 4.6rem)", fontWeight: 600, letterSpacing: "0.02em", lineHeight: 1.05 }}
        >
          Apoorva Gonegari
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
          className="mt-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontStyle: "italic", fontSize: "0.9rem", color: "#D9D2C4" }}
        >
          Daughter of Vajra &amp; Sanjeev Gonegari
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          className="my-2 flex items-center justify-center gap-3"
        >
          <span style={{ height: 1, width: 50, background: "linear-gradient(90deg, transparent, #C9A24B)" }} />
          <span className="script" style={{ fontSize: "clamp(3rem, 8vw, 4.5rem)" }}>&amp;</span>
          <span style={{ height: 1, width: 50, background: "linear-gradient(90deg, #C9A24B, transparent)" }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="festive-text"
          style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(2.2rem, 8vw, 4.6rem)", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.02 }}
        >
          Charan Reddy Jaidi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.42 }}
          className="mt-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "0.82rem", color: "#D9D2C4" }}
        >
          Son of Late Sri Jaidi Bhaskar &amp; Sukanya
        </motion.p>

        {/* Date pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full"
          style={{ background: "#16294B", boxShadow: "0 8px 24px rgba(0,0,0,0.35)" }}
        >
          <span style={{ fontSize: "1.2rem" }}>📅</span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: "#F4EFE4", fontSize: "1rem" }}>
            November 19–22, 2026
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#rsvp" className="btn-fest">RSVP</a>
          <a href="#events" className="btn-outline">View Events</a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#9AA4BD" }}>SCROLL</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.4 }} style={{ fontSize: "1.2rem" }}>🎊</motion.span>
      </motion.div>
    </section>
  );
}
