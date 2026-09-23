"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Add photos to /public/gallery then set placeholder:false + src.
const items = [
  { id: 1, caption: "The Beginning",   src: "", placeholder: true, color: "#E63980" },
  { id: 2, caption: "Our Journey",     src: "", placeholder: true, color: "#FF9F1C" },
  { id: 3, caption: "The Bride",       src: "", placeholder: true, color: "#7B2CBF" },
  { id: 4, caption: "The Groom",       src: "", placeholder: true, color: "#0FA3B1" },
  { id: 5, caption: "Celebrations",    src: "", placeholder: true, color: "#8AC926" },
  { id: 6, caption: "Forever Begins",  src: "", placeholder: true, color: "#FF5D5D" },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 px-6 relative" style={{ background: "#FFEFE0" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.24em", color: "#E63980", textTransform: "uppercase" }}>
            Our moments
          </p>
          <h2 className="festive-text mt-3" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 6vw, 3.6rem)" }}>
            Gallery
          </h2>
          <div className="squiggle mt-5" />
          <p className="mt-4" style={{ fontFamily: "'Poppins', sans-serif", color: "#5A4A6A" }}>
            A few of our favourite moments — more to come! 📸
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div key={it.id}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06 }} whileHover={{ scale: 1.03, rotate: i % 2 ? 1.5 : -1.5 }}
              onClick={() => setLightbox(i)}
              className="relative cursor-pointer overflow-hidden fest-card"
              style={{ aspectRatio: "1", borderRadius: 20 }}>
              {!it.placeholder && it.src ? (
                <img src={it.src} alt={it.caption} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ background: `linear-gradient(140deg, ${it.color}22, ${it.color}0A)` }}>
                  <span style={{ fontSize: "2rem" }}>📷</span>
                  <p className="mt-2 px-3 text-center" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: it.color, fontSize: "0.95rem" }}>{it.caption}</p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.62rem", color: "#9585A5", letterSpacing: "0.1em", marginTop: 2 }}>COMING SOON</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)} className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(43,27,61,0.85)" }}>
            <motion.div initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()} className="relative max-w-lg w-full fest-card flex flex-col items-center justify-center"
              style={{ aspectRatio: "1", background: `linear-gradient(140deg, ${items[lightbox].color}22, #fff)` }}>
              <span style={{ fontSize: "3rem" }}>📷</span>
              <p className="mt-2" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, color: items[lightbox].color, fontSize: "1.3rem" }}>{items[lightbox].caption}</p>
              <button onClick={() => setLightbox(null)} className="absolute top-3 right-3"
                style={{ width: 34, height: 34, borderRadius: 999, background: "#fff", border: "none", cursor: "pointer", fontSize: "1rem", color: "#2B1B3D" }}>✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
