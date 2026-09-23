"use client";

import { motion } from "framer-motion";
import Confetti from "./Confetti";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: "radial-gradient(circle at 20% 20%, #FFEFE0 0%, #FFF8F0 55%, #FFF1F6 100%)" }}
    >
      <Confetti count={44} />

      {/* Big soft colour blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(230,57,128,0.18), transparent 70%)" }} />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(15,163,177,0.16), transparent 70%)" }} />
      <div className="absolute top-1/3 right-10 w-40 h-40 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,159,28,0.18), transparent 70%)" }} />

      <div className="relative z-10 text-center max-w-3xl">
        {/* Playful badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
          className="inline-block mb-8 px-5 py-2 rounded-full"
          style={{ background: "linear-gradient(120deg, #7B2CBF, #E63980)", color: "#fff" }}
        >
          <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em" }}>
            🎉 WE&apos;RE GETTING MARRIED!
          </span>
        </motion.div>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="festive-text"
          style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.2rem, 8vw, 4.6rem)", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.02 }}
        >
          Apoorva Gonegari
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
          className="mt-1" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.82rem", color: "#5A4A6A" }}
        >
          Daughter of Vajra &amp; Sanjeev Gonegari
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          className="my-3 flex items-center justify-center gap-3"
        >
          <span style={{ height: 2, width: 40, background: "#E63980", borderRadius: 2 }} />
          <span style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: "clamp(1.5rem, 4vw, 2.4rem)", color: "#FF9F1C" }}>&amp;</span>
          <span style={{ height: 2, width: 40, background: "#0FA3B1", borderRadius: 2 }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="festive-text"
          style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.2rem, 8vw, 4.6rem)", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.02 }}
        >
          Charan Reddy Jaidi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.42 }}
          className="mt-1" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "0.82rem", color: "#5A4A6A" }}
        >
          Son of Late Sri Jaidi Bhaskar &amp; Sukanya
        </motion.p>

        {/* Date pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full"
          style={{ background: "#fff", boxShadow: "0 8px 24px rgba(43,27,61,0.1)" }}
        >
          <span style={{ fontSize: "1.2rem" }}>📅</span>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#2B1B3D", fontSize: "1rem" }}>
            November 19–22, 2026
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#rsvp" className="btn-fest">RSVP Now ✨</a>
          <a href="#events" className="btn-outline">See the Events</a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#9585A5" }}>SCROLL</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.4 }} style={{ fontSize: "1.2rem" }}>🎊</motion.span>
      </motion.div>
    </section>
  );
}
