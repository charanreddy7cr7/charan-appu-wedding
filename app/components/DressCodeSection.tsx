"use client";

import { motion } from "framer-motion";

export default function DressCodeSection() {
  return (
    <section id="dresscode" className="py-16 px-4 relative" style={{ background: "transparent" }}>
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          <img src="/dress-code.jpg" alt="Dress to Celebrate — dress code for each event"
            style={{ width: "100%", height: "auto", display: "block", borderRadius: 4 }} />
        </motion.div>
      </div>
    </section>
  );
}
