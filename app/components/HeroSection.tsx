"use client";

import { motion } from "framer-motion";

/* Row of warm recessed-light dots, like the reference ceiling spots */
function SpotDots({ delay = 0 }: { delay?: number }) {
  return (
    <div className="flex justify-around px-3 pt-3 pb-1 relative" style={{ zIndex: 3 }}>
      {Array.from({ length: 7 }).map((_, i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ repeat: Infinity, duration: 2.6, delay: delay + i * 0.28, ease: "easeInOut" }}
          style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "radial-gradient(circle at 50% 40%, #FFF7D6, #FAC775 60%, #E7A750)",
            boxShadow: "0 0 10px 4px rgba(245,216,118,0.85)",
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-14"
      style={{ background: "transparent" }}
    >
      {/* ── Fluted gold side pillars with capitals & bases ───────────────── */}
      {(["left", "right"] as const).map((side) => (
        <div key={side} className="absolute top-0 bottom-0 pointer-events-none"
          style={{ [side]: 0, width: 26 } as React.CSSProperties}>
          <div className="lux-pillar-cap absolute top-0 left-0 right-0" style={{ height: 26 }} />
          <div className="lux-pillar absolute left-0 right-0" style={{ top: 26, bottom: 26 }} />
          <div className="lux-pillar-cap absolute bottom-0 left-0 right-0" style={{ height: 26 }} />
        </div>
      ))}

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col gap-5 px-2">

        {/* ── TOP NICHE — illuminated marble with Telugu blessings + scene ── */}
        <motion.div
          initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
          className="lux-niche"
        >
          <div className="lux-niche-inner lux-lights marble-surface">
            <SpotDots />

            {/* Telugu blessings */}
            <div className="flex justify-between px-4 mb-1 relative" style={{ zIndex: 3 }}>
              {["శ్రీరస్తు", "శుభమస్తు", "అవిఘ్నమస్తు"].map((b) => (
                <span key={b} style={{
                  fontFamily: "'Cinzel',serif", fontWeight: 600,
                  fontSize: "clamp(0.55rem,1.8vw,0.72rem)", color: "#7A5A10",
                  letterSpacing: "0.03em", textShadow: "0 1px 2px rgba(255,245,200,0.7)",
                }}>{b}</span>
              ))}
            </div>

            {/* Wedding family scene */}
            <div className="relative" style={{ zIndex: 2 }}>
              <img src="/wedding-family-color.jpg" alt="Wedding ceremony scene"
                style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </div>
        </motion.div>

        {/* ── MIDDLE — brushed-gold name plaque with rivets ────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}
          className="relative"
          style={{
            borderRadius: 5,
            overflow: "hidden",
            border: "2px solid rgba(156,90,19,0.55)",
            boxShadow: "0 8px 28px rgba(90,65,12,0.45), inset 0 0 0 1px rgba(254,226,164,0.45)",
          }}
        >
          <img src="/names-card.jpg" alt="Apoorva Gonegari & Charan Reddy Jaidi"
            style={{ width: "100%", height: "auto", display: "block" }} />
        </motion.div>

        {/* ── BOTTOM — date + buttons (no box) ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
          className="text-center pt-2"
        >
          <p className="text-center mb-5 relative" style={{
            zIndex: 3, fontFamily: "'Cinzel',serif", fontWeight: 500,
            fontSize: "0.8rem", letterSpacing: "0.2em", color: "#6B4F2A", textTransform: "uppercase",
            textShadow: "0 1px 2px rgba(255,245,200,0.6)",
          }}>
            November 21
          </p>

          <div className="flex gap-4 justify-center relative" style={{ zIndex: 3 }}>
            <a href="#rsvp" className="btn-fest flex-1 text-center" style={{ maxWidth: 180 }}>
              RSVP
            </a>
            <a href="#events" className="btn-outline flex-1 text-center" style={{ maxWidth: 180 }}>
              View Events
            </a>
          </div>
        </motion.div>

        {/* ── Polished marble floor with reflection ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
          className="lux-floor" style={{ borderRadius: 3, marginTop: "-0.25rem" }}
        />
      </div>
    </section>
  );
}
