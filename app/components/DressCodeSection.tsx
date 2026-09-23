"use client";

import { motion } from "framer-motion";

const codes = [
  { event: "Mehendi",    emoji: "🤚", theme: "Maroon", swatches: ["#8E1537", "#B03052", "#5C0A24"], color: "#8E1537" },
  { event: "Engagement", emoji: "💍", theme: "Red", swatches: ["#E63946", "#C1121F", "#FF5D5D"], color: "#E63946" },
  { event: "Haldi",      emoji: "☀️", theme: "Beach Pink", swatches: ["#FF6FB5", "#FFA5C3", "#FF9F1C"], color: "#FF6FB5" },
  { event: "Bride & Groom Ceremony", emoji: "🪔", theme: "White", swatches: ["#FFFFFF", "#F5F0E6", "#FFF8F0"], color: "#7B2CBF" },
  { event: "Wedding",    emoji: "🪷", theme: "Half-White & Green", swatches: ["#FFFFFF", "#2A9D8F", "#8AC926"], color: "#2A9D8F" },
  { event: "Reception",  emoji: "🎉", theme: "Black", swatches: ["#2B1B3D", "#000000", "#3A2C4D"], color: "#F6ECFB" },
];

export default function DressCodeSection() {
  return (
    <section id="dresscode" className="py-20 px-6 relative" style={{ background: "#1A1024" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.24em", color: "#E63980", textTransform: "uppercase" }}>
            What to wear
          </p>
          <h2 className="festive-text mt-3" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 6vw, 3.6rem)" }}>
            Dress Code
          </h2>
          <div className="squiggle mt-5" />
          <p className="mt-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#C4B2D4" }}>
            Dress to celebrate — here&apos;s the colour palette for each event! 🎨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {codes.map((c, i) => (
            <motion.div key={c.event}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07 }} className="fest-card p-6 text-center">
              <div style={{ fontSize: "2.2rem" }}>{c.emoji}</div>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "1.15rem", color: "#F6ECFB", marginTop: "0.4rem" }}>
                {c.event}
              </h3>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: c.color, marginTop: "0.3rem" }}>
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
