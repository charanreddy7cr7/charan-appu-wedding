"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "./Confetti";

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
          style={{ background: "radial-gradient(circle at 50% 30%, #FFF1F6 0%, #FFF8F0 50%, #FFEFE0 100%)" }}
        >
          <Confetti count={60} />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 16 }}
            className="relative z-10 text-center px-8 py-12 mx-4 fest-card"
            style={{ maxWidth: 460, width: "100%" }}
          >
            {/* Lord Ganapathi — auspicious blessing */}
            <motion.img
              src="/ganapathi.jpg"
              alt="Lord Ganapathi"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
              style={{
                width: "clamp(150px, 45vw, 210px)",
                height: "auto",
                margin: "0 auto 0.75rem",
                borderRadius: "18px",
                boxShadow: "0 12px 30px rgba(230,57,128,0.22)",
                objectFit: "contain",
              }}
            />
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.24em", color: "#E63980", textTransform: "uppercase" }}>
              Shubh Vivah
            </p>

            <h2 className="festive-text" style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.8rem, 6vw, 2.6rem)", fontWeight: 600, margin: "0.6rem 0" }}>
              You&apos;re Invited!
            </h2>

            <div className="squiggle my-4" />

            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, color: "#2B1B3D", fontSize: "1.1rem" }}>
              Apoorva <span style={{ color: "#FF9F1C" }}>&amp;</span> Charan
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, color: "#5A4A6A", fontSize: "0.9rem", marginTop: "0.3rem" }}>
              November 19–22, 2026
            </p>

            <button onClick={enter} disabled={opening} className="btn-fest mt-8">
              {opening ? "Let's celebrate! 🎉" : "Open Invitation 💌"}
            </button>

            <p className="audio-note">🔊 Best experienced with sound on</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
