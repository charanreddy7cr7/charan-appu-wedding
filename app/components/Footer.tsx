"use client";

import { motion } from "framer-motion";
import Confetti from "./Confetti";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-24 px-6 text-center"
      style={{ background: "linear-gradient(160deg, #050505 0%, #151210 55%, #0B0B0B 100%)" }}>
      <Confetti count={30} />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "#C9A24B" }}
        >
          ✦
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, color: "#E7CE8E", fontSize: "clamp(2.2rem, 7vw, 4rem)", lineHeight: 1.1 }}
        >
          See you
          <br />in Dallas!
        </motion.h2>

        <p className="mt-6" style={{ fontFamily: "'Cinzel', serif", fontStyle: "italic", color: "#F4EFE4", fontSize: "1.4rem" }}>
          Apoorva &amp; Charan
        </p>
        <p className="mt-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#D9D2C4", fontSize: "0.9rem" }}>
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
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "0.8rem", letterSpacing: "0.08em", color: "#C9A24B", textDecoration: "none", opacity: 0.9 }}>
              {l.label}
            </a>
          ))}
        </div>

        <p className="mt-12" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.72rem", color: "#9AA4BD" }}>
          With love,  Apoorva &amp; Charan · 2026
        </p>
      </div>
    </footer>
  );
}
