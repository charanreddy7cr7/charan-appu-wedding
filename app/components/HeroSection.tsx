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
            background: "radial-gradient(circle at 50% 40%, #FFF7D6, #F5D876 60%, #C9A43E)",
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

            {/* Engraved-gold wedding family scene */}
            <img src="/wedding-family-gold.png" alt="Wedding ceremony scene"
              className="relative"
              style={{
                width: "100%", height: "auto", display: "block", zIndex: 2,
                padding: "0.3rem 0.9rem 1rem",
                filter: "drop-shadow(0 3px 10px rgba(120,90,30,0.4))",
              }} />
          </div>
        </motion.div>

        {/* ── MIDDLE — brushed-gold name plaque with rivets ────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}
          className="brushed-plate"
          style={{ borderRadius: 5, padding: "2.1rem 1.8rem 1.7rem", textAlign: "center" }}
        >
          {/* corner screw rivets */}
          {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos) => (
            <div key={pos} className={`absolute ${pos}`}
              style={{
                width: 11, height: 11, borderRadius: "50%",
                background: "radial-gradient(circle at 35% 30%, #FFF7D6, #D4AF37 55%, #6E5208)",
                boxShadow: "0 1px 3px rgba(70,50,8,0.6), inset 0 -1px 1px rgba(60,42,5,0.6)",
              }} />
          ))}

          <h1 style={{
            fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: "clamp(1.6rem,7.2vw,2.5rem)",
            letterSpacing: "0.05em", color: "#3A2600",
            textShadow: "0 1px 0 rgba(255,247,210,0.7), 0 2px 4px rgba(90,65,12,0.35)", lineHeight: 1.08,
          }}>
            Apoorva Gonegari
          </h1>
          <p style={{
            fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "0.9rem",
            color: "#5A3E05", marginTop: "0.35rem",
          }}>
            Daughter of Smt. Vajra &amp; Sri Sanjeev Gonegari
          </p>

          <div style={{ margin: "1.1rem 0", display: "flex", alignItems: "center", gap: "0.9rem", justifyContent: "center" }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #6E5208)" }} />
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "2rem", color: "#3A2600", fontWeight: 500 }}>&amp;</span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #6E5208, transparent)" }} />
          </div>

          <h1 style={{
            fontFamily: "'Cinzel',serif", fontWeight: 700, fontSize: "clamp(1.6rem,7.2vw,2.5rem)",
            letterSpacing: "0.05em", color: "#3A2600",
            textShadow: "0 1px 0 rgba(255,247,210,0.7), 0 2px 4px rgba(90,65,12,0.35)", lineHeight: 1.08,
          }}>
            Charan Reddy Jaidi
          </h1>
          <p style={{
            fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontSize: "0.9rem",
            color: "#5A3E05", marginTop: "0.35rem",
          }}>
            Son of Late Sri Jaidi Bhaskar &amp; Smt. Sukanya
          </p>
        </motion.div>

        {/* ── BOTTOM NICHE — illuminated marble with date + buttons ────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
          className="lux-niche"
        >
          <div className="lux-niche-inner lux-lights marble-surface" style={{ padding: "0 1.2rem 1.6rem" }}>
            <SpotDots delay={1} />

            <p className="text-center mb-5 relative" style={{
              zIndex: 3, fontFamily: "'Cinzel',serif", fontWeight: 500,
              fontSize: "0.8rem", letterSpacing: "0.2em", color: "#6B4F2A", textTransform: "uppercase",
              textShadow: "0 1px 2px rgba(255,245,200,0.6)",
            }}>
              November 2026
            </p>

            <div className="flex gap-4 justify-center relative" style={{ zIndex: 3 }}>
              <a href="#rsvp" className="btn-fest flex-1 text-center" style={{ maxWidth: 180 }}>
                RSVP
              </a>
              <a href="#events" className="btn-outline flex-1 text-center" style={{ maxWidth: 180 }}>
                View Events
              </a>
            </div>
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
