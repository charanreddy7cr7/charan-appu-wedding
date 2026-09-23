"use client";

import { motion } from "framer-motion";

const gifts = [
  { icon: "💛", name: "Your Blessings", note: "Honestly, your presence is the greatest gift of all.", href: "#rsvp", color: "#C9A24B" },
];

export default function RegistrySection() {
  return (
    <section id="registry" className="py-20 px-6 relative" style={{ background: "#0B1834" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.24em", color: "#C9A24B", textTransform: "uppercase" }}>
            If you wish
          </p>
          <h2 className="festive-text mt-3" style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 6vw, 3.6rem)" }}>
            Gifts
          </h2>
          <div className="squiggle mt-5" />
          <p className="mt-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#D9D2C4", maxWidth: 460, margin: "1rem auto 0" }}>
            Your love and presence mean the world. If you&apos;d like to give a gift, here are a few options.
          </p>
        </motion.div>

        <div className="flex justify-center max-w-md mx-auto">
          {gifts.map((g, i) => (
            <motion.a key={g.name} href={g.href} target={g.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }}
              className="fest-card p-8 text-center w-full" style={{ textDecoration: "none" }}>
              <div style={{ fontSize: "2.6rem" }}>{g.icon}</div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "1.15rem", color: "#F4EFE4", marginTop: "0.6rem" }}>{g.name}</h3>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: "#D9D2C4", marginTop: "0.5rem" }}>{g.note}</p>
              <span className="inline-block mt-5 px-5 py-2 rounded-full" style={{ background: `${g.color}18`, color: g.color, fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.78rem" }}>
                {g.href.startsWith("http") ? "Open →" : "RSVP →"}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
