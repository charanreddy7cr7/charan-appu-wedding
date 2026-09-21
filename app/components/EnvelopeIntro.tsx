"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GanapathiIcon } from "./TeluguGraphics";

/**
 * GaneshIntro — Ganesha blessing screen
 * A richly decorated Ganesha invocation screen that guests tap to enter.
 * Shows once per browser session.
 */
export default function EnvelopeIntro() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [blessing, setBlessing] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number; dur: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    const seen =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem("ca_ganesh_seen") === "1";
    if (seen) {
      setDismissed(true);
      return;
    }
    setVisible(true);
    // Generate floating petals/particles
    setParticles(
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 6,
        delay: Math.random() * 4,
        dur: Math.random() * 6 + 5,
      }))
    );
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  function enter() {
    if (blessing) return;
    setBlessing(true);
    try {
      window.sessionStorage.setItem("ca_ganesh_seen", "1");
      window.dispatchEvent(new Event("hr:play-music"));
    } catch { /* ignore */ }

    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      window.scrollTo(0, 0);
      setTimeout(() => {
        setDismissed(true);
        window.scrollTo(0, 0);
      }, 800);
    }, 1800);
  }

  if (!mounted || dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="ganesh-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, #3D0000 0%, #1A0000 40%, #0A0000 100%)",
          }}
        >
          {/* Floating marigold petals */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute pointer-events-none select-none"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                fontSize: p.size,
                opacity: 0.5,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, p.id % 2 === 0 ? 12 : -12, 0],
                rotate: [0, 360],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: p.dur,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {p.id % 3 === 0 ? "🪷" : p.id % 3 === 1 ? "🌸" : "✿"}
            </motion.div>
          ))}

          {/* Radial gold glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(255,180,0,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Top decorative border */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: "linear-gradient(90deg, transparent, #FFB300, #FF6B00, #FFB300, transparent)" }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ background: "linear-gradient(90deg, transparent, #FFB300, #FF6B00, #FFB300, transparent)" }}
          />

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center text-center px-8 py-12 mx-4"
            style={{
              maxWidth: "520px",
              width: "100%",
              background: "rgba(10,4,0,0.7)",
              border: "1px solid rgba(255,179,0,0.35)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Corner ornaments */}
            {[["top-0 left-0", "border-t-2 border-l-2"],
              ["top-0 right-0", "border-t-2 border-r-2"],
              ["bottom-0 left-0", "border-b-2 border-l-2"],
              ["bottom-0 right-0", "border-b-2 border-r-2"]].map(([pos, border]) => (
              <span key={pos} className={`absolute ${pos} w-5 h-5 ${border}`} style={{ borderColor: "#FFB300" }} />
            ))}

            {/* Om symbol */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-2 text-2xl tracking-[0.3em]"
              style={{ color: "#FFB300", fontFamily: "'Cinzel', serif" }}
            >
              ॐ
            </motion.div>

            {/* Ganesha SVG illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="my-4 relative"
            >
              {/* Circular halo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  border: "1px dashed rgba(255,179,0,0.25)",
                  margin: "-12px",
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  border: "1px dashed rgba(255,107,0,0.2)",
                  margin: "-24px",
                }}
              />

              {/* Lord Ganapathi — auspicious beginning */}
              <div style={{ filter: "drop-shadow(0 0 22px rgba(255,179,0,0.45))" }}>
                <GanapathiIcon size={150} color="#FFB300" accent="#E65100" />
              </div>
            </motion.div>

            {/* Ganesha name */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="tracking-[0.35em] text-xs mb-1"
              style={{ color: "#FFB300", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              || श्री गणेशाय नमः ||
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="tracking-[0.2em] text-xs mb-6"
              style={{ color: "rgba(255,179,0,0.6)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Shri Ganeshaya Namah
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="w-48 h-px mb-6"
              style={{ background: "linear-gradient(90deg, transparent, #FFB300, transparent)" }}
            />

            {/* Invitation text */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-xs tracking-[0.25em] mb-3"
              style={{ color: "rgba(255,179,0,0.7)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              YOU ARE INVITED TO CELEBRATE
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
                fontWeight: 400,
                letterSpacing: "0.08em",
                color: "#FFB300",
                lineHeight: 1.2,
              }}
            >
              Apoorva Reddy Gonegari Apoorva &amp; Charanamp; Charan Reddy Jaidi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mt-2 mb-6 italic"
              style={{
                color: "rgba(255,230,150,0.8)",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.05rem",
                fontWeight: 300,
              }}
            >
              November 19–22, 2026
            </motion.p>

            {/* Enter button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              onClick={enter}
              disabled={blessing}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-3 text-sm tracking-[0.3em] transition-all duration-300 relative overflow-hidden"
              style={{
                background: blessing ? "rgba(255,179,0,0.2)" : "rgba(255,179,0,0.15)",
                border: "1px solid #FFB300",
                color: "#FFB300",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 300,
                cursor: blessing ? "wait" : "pointer",
              }}
            >
              {blessing ? (
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  🙏 Ganpati Bappa Morya...
                </motion.span>
              ) : (
                "🙏 SEEK BLESSINGS & ENTER"
              )}
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-4 text-xs"
              style={{ color: "rgba(255,179,0,0.35)", fontFamily: "'Lato', sans-serif", fontWeight: 300, letterSpacing: "0.1em" }}
            >
              🔊 Best experienced with sound on
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
