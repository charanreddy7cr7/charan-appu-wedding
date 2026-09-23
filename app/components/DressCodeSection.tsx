"use client";

import { motion } from "framer-motion";

const codes = [
  { event: "Mehendi",    emoji: "🤚", theme: "Maroon", swatches: ["#6E1533", "#8E1537", "#4A0D22"], color: "#C97A97" },
  { event: "Engagement", emoji: "💍", theme: "Red", swatches: ["#C1121F", "#E63946", "#8E1116"], color: "#F08A80" },
  { event: "Haldi",      emoji: "☀️", theme: "Beach Pink", swatches: ["#FF6FB5", "#FF9CC7", "#F25FA6"], color: "#FF9CC7" },
  { event: "Bride & Groom Ceremony", emoji: "🪔", theme: "White", swatches: ["#FFFFFF", "#F4F0E6", "#EDE7D6"], color: "#E7CE8E" },
  { event: "Wedding",    emoji: "🪷", theme: "Antique Gold", swatches: ["#E7CE8E", "#C9A24B", "#A07E2E"], color: "#E7CE8E" },
  { event: "Reception",  emoji: "🎉", theme: "Black · Neon Lights", swatches: ["#0E0A1A", "#000000", "#B57BFF"], color: "#B57BFF" },
];

export default function DressCodeSection() {
  return (
    <section id="dresscode" className="py-20 px-6 relative" style={{ background: "#0B0B0B" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.24em", color: "#C9A24B", textTransform: "uppercase" }}>
            What to wear
          </p>
          <h2 className="festive-text mt-3" style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 6vw, 3.6rem)" }}>
            Dress Code
          </h2>
          <div className="squiggle mt-5" />
          <p className="mt-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#D9D2C4" }}>
            Dress to celebrate — here&apos;s the colour palette for each event! 🎨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {codes.map((c, i) => (
            <motion.div key={c.event}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07 }} className="fest-card p-6 text-center">
              <div style={{ fontSize: "2.2rem" }}>{c.emoji}</div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "1.15rem", color: "#F4EFE4", marginTop: "0.4rem" }}>
                {c.event}
              </h3>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.85rem", color: c.color, marginTop: "0.3rem" }}>
                {c.theme}
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                {c.swatches.map((s, j) => (
                  <span key={j} style={{ width: 34, height: 34, borderRadius: 999, background: s, border: "2px solid rgba(43,27,61,0.12)", boxShadow: "0 3px 8px rgba(43,27,61,0.1)" }} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
