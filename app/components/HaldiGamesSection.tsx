"use client";

import { motion } from "framer-motion";

export default function HaldiGamesSection() {
  return (
    <section id="haldi-games" className="py-16 px-4 relative" style={{ background: "transparent" }}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          <img src="/haldi-games.jpg" alt="Haldi Hungama — fun games: Bride Squad vs Groom Squad"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: 4 }} />
        </motion.div>
      </div>
    </section>
  );
}
