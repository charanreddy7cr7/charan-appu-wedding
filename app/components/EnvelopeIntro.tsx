"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "./Confetti";
import { FloralCorner } from "./FloralCorner";

// Client-only mounted flag without setState-in-effect.
function useMounted() {
  return useSyncExternalStore(() => () => {}, () => true, () => false);
}

/**
 * Festive intro — a bright, joyful welcome card the guest taps to enter.
 * Shows once per browser session.
 */
export default function EnvelopeIntro() {
  const mounted = useMounted();
  // Was the intro already seen this session? Read once at mount time.
  const initiallySeen =
    mounted && typeof window !== "undefined" &&
    window.sessionStorage.getItem("ca_intro_seen") === "1";

  const [opening, setOpening] = useState(false);
  const [manualDismiss, setManualDismiss] = useState(false);

  const dismissed = initiallySeen || manualDismiss;

  useEffect(() => {
    if (!mounted || dismissed) return;
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [mounted, dismissed]);

  function enter() {
    if (opening) return;
    setOpening(true);
    try {
      window.sessionStorage.setItem("ca_intro_seen", "1");
      window.dispatchEvent(new Event("hr:play-music"));
    } catch { /* ignore */ }
    setTimeout(() => {
      document.body.style.overflow = "";
      window.scrollTo(0, 0);
      setTimeout(() => { setManualDismiss(true); window.scrollTo(0, 0); }, 700);
    }, 900);
  }

  const visible = !opening;

  if (!mounted || dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: "radial-gradient(circle at 50% 25%, #FFFFFF 0%, #EAF3FA 45%, #CFE3F0 100%)" }}
        >
          <Confetti count={60} />

          {/* Floral corners */}
          <FloralCorner size={220} className="absolute top-0 left-0 pointer-events-none select-none" style={{ opacity: 0.9 }} />
          <FloralCorner size={220} className="absolute bottom-0 right-0 pointer-events-none select-none" style={{ opacity: 0.9, transform: "rotate(180deg)" }} />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 16 }}
            className="relative z-10 text-center px-8 py-12 mx-4"
            style={{
              maxWidth: 460, width: "100%",
              background: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(90,130,184,0.35)",
              borderRadius: 8,
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow: "0 16px 44px rgba(90,130,184,0.28)",
            }}
          >
            {/* Lord Ganapathi — blended into the invite (transparent PNG, no frame) */}
            <motion.img
              src="/ganapathi.png"
              alt="Lord Ganapathi"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{
                width: "clamp(160px, 48vw, 230px)",
                height: "auto",
                margin: "0 auto 0.5rem",
                objectFit: "contain",
                filter: "drop-shadow(0 6px 16px rgba(90,130,184,0.3))",
              }}
            />
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.24em", color: "#2E6CA6", textTransform: "uppercase" }}>
              Shubh Vivah
            </p>

            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 6vw, 2.6rem)", fontWeight: 600, margin: "0.6rem 0", color: "#1E3E6B" }}>
              You&apos;re Invited!
            </h2>

            <div className="squiggle my-4" style={{ filter: "hue-rotate(190deg) saturate(0.6)" }} />

            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: "#1E3E6B", fontSize: "1.1rem" }}>
              Apoorva <span style={{ color: "#2E6CA6" }}>&amp;</span> Charan
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#4A6788", fontSize: "0.9rem", marginTop: "0.3rem" }}>
              November 19–22, 2026
            </p>

            <button onClick={enter} disabled={opening} className="mt-8"
              style={{
                display: "inline-block", padding: "0.85rem 2.4rem", borderRadius: 2,
                fontFamily: "'Cinzel', serif", fontWeight: 500, fontSize: "0.82rem",
                letterSpacing: "0.18em", textTransform: "uppercase", cursor: opening ? "wait" : "pointer",
                border: "1px solid #2E6CA6", color: "#fff",
                background: "linear-gradient(120deg, #2E6CA6, #5A97C9)",
                opacity: opening ? 0.7 : 1, transition: "all 0.25s ease",
              }}>
              {opening ? "With blessings…" : "Open Invitation"}
            </button>

            <p className="audio-note" style={{ color: "#6E8AA8" }}>🔊 Best experienced with sound on</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
