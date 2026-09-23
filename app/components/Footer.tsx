"use client";

import { motion } from "framer-motion";
import Confetti from "./Confetti";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-24 px-6 text-center"
      style={{ background: "linear-gradient(160deg, #7B2CBF 0%, #E63980 60%, #FF9F1C 100%)" }}>
      <Confetti count={30} />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          style={{ fontSize: "2.6rem", marginBottom: "0.5rem" }}
        >
          💛
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: "#fff", fontSize: "clamp(2.2rem, 7vw, 4rem)", lineHeight: 1.1 }}
        >
          See you on
          <br />the dance floor!
        </motion.h2>

        <p className="mt-6" style={{ fontFamily: "'Fraunces', serif", fontStyle: "italic", color: "#fff", fontSize: "1.4rem" }}>
          Apoorva &amp; Charan
        </p>
        <p className="mt-1" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(255,255,255,0.85)", fontSize: "0.9rem" }}>
          November 2026
        </p>

        {/* Quick links */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {[
            { label: "Events", href: "#events" },
            { label: "RSVP", href: "#rsvp" },
            { label: "Gallery", href: "#gallery" },
            { label: "Host Login", href: "/admin/" },
          ].map((l) => (
            <a key={l.href} href={l.href}
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "0.8rem", letterSpacing: "0.08em", color: "#fff", textDecoration: "none", opacity: 0.9 }}>
              {l.label}
            </a>
          ))}
        </div>

        <p className="mt-12" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.7)" }}>
          Made with 💛 for Apoorva &amp; Charan · 2026
        </p>
      </div>
    </footer>
  );
}
