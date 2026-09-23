"use client";

import { motion } from "framer-motion";

const gifts = [
  { icon: "🎁", name: "Amazon Gift Card", note: "Help us build our new home together.", href: "https://www.amazon.com/gift-cards", color: "#FF9F1C" },
  { icon: "💳", name: "Visa Gift Card", note: "Your choice — for anything we may need.", href: "https://www.giftcards.com/visa-gift-cards", color: "#0FA3B1" },
  { icon: "💛", name: "Your Blessings", note: "Honestly, your presence is the greatest gift of all.", href: "#rsvp", color: "#E63980" },
];

export default function RegistrySection() {
  return (
    <section id="registry" className="py-20 px-6 relative" style={{ background: "#FFF8F0" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.24em", color: "#E63980", textTransform: "uppercase" }}>
            If you wish
          </p>
          <h2 className="festive-text mt-3" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 6vw, 3.6rem)" }}>
            Gifts
          </h2>
          <div className="squiggle mt-5" />
          <p className="mt-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#5A4A6A", maxWidth: 460, margin: "1rem auto 0" }}>
            Your love and presence mean the world. If you&apos;d like to give a gift, here are a few options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {gifts.map((g, i) => (
            <motion.a key={g.name} href={g.href} target={g.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }}
              className="fest-card p-8 text-center" style={{ textDecoration: "none" }}>
              <div style={{ fontSize: "2.6rem" }}>{g.icon}</div>
              <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "1.15rem", color: "#2B1B3D", marginTop: "0.6rem" }}>{g.name}</h3>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.85rem", color: "#5A4A6A", marginTop: "0.5rem" }}>{g.note}</p>
              <span className="inline-block mt-5 px-5 py-2 rounded-full" style={{ background: `${g.color}18`, color: g.color, fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.78rem" }}>
                {g.href.startsWith("http") ? "Open →" : "RSVP →"}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
