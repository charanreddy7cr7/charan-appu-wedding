"use client";

import { motion } from "framer-motion";
import Confetti from "./Confetti";
import { FloralCorner } from "./FloralCorner";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: "radial-gradient(circle at 20% 20%, #151210 0%, #0B0B0B 55%, #050505 100%)" }}
    >
      <Confetti count={44} />


      {/* Floral corners — navy roses + gold ferns (top-left & bottom-right mirrored) */}
      <FloralCorner size={300} className="absolute top-0 left-0 pointer-events-none select-none"
        style={{ opacity: 0.95 }} />
      <FloralCorner size={300} className="absolute bottom-0 right-0 pointer-events-none select-none"
        style={{ opacity: 0.95, transform: "rotate(180deg)" }} />

      {/* Big soft colour blobs */}
      <div className="relative z-10 text-center max-w-3xl">
        {/* Temple deities — Sri Venkateswara & Padmavathi */}
        <motion.img
          src="/temple-deities-gold.png"
          alt="Sri Venkateswara & Padmavathi"
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="mx-auto mb-6"
          style={{ width: "min(70vw, 240px)", height: "auto", filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.4))" }}
        />

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
          Daughter of Smt. Vajra &amp; Sri Sanjeev Gonegari
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
          Son of Late Sri Jaidi Bhaskar &amp; Smt. Sukanya
        </motion.p>

        {/* Sacred kalash on a soft ivory badge (line art reads on the dark bg) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="mt-8 mx-auto flex items-center justify-center"
          style={{
            width: "clamp(110px, 22vw, 150px)",
            height: "clamp(110px, 22vw, 150px)",
            borderRadius: "9999px",
            background: "radial-gradient(circle, #FBF6EC 0%, #F1E7CF 78%, rgba(241,231,207,0) 100%)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
          }}
        >
          <img src="/kalash.png" alt="Kalash"
            style={{ width: "72%", height: "auto", objectFit: "contain" }} />
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
