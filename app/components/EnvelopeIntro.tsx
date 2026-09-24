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
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto py-8"
          style={{ background: "radial-gradient(circle at 50% 30%, #151210 0%, #0B0B0B 60%, #050505 100%)" }}
        >
          <Confetti count={40} />

          {/* Centered rectangle card framing the Ganapathi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="relative z-10 flex flex-col items-center text-center mx-4"
            style={{
              width: "min(90vw, 460px)",
              padding: "1.6rem 1.6rem 2.2rem",
              borderRadius: 10,
              background: "linear-gradient(160deg, #12100C 0%, #0A0A0A 100%)",
              border: "1.5px solid rgba(201,162,75,0.55)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(201,162,75,0.12)",
            }}
          >
            {/* Corner flourishes */}
            <span style={{ position: "absolute", top: 12, left: 12, width: 22, height: 22, borderTop: "1.5px solid #C9A24B", borderLeft: "1.5px solid #C9A24B", opacity: 0.8 }} />
            <span style={{ position: "absolute", top: 12, right: 12, width: 22, height: 22, borderTop: "1.5px solid #C9A24B", borderRight: "1.5px solid #C9A24B", opacity: 0.8 }} />
            <span style={{ position: "absolute", bottom: 12, left: 12, width: 22, height: 22, borderBottom: "1.5px solid #C9A24B", borderLeft: "1.5px solid #C9A24B", opacity: 0.8 }} />
            <span style={{ position: "absolute", bottom: 12, right: 12, width: 22, height: 22, borderBottom: "1.5px solid #C9A24B", borderRight: "1.5px solid #C9A24B", opacity: 0.8 }} />

            {/* Ganapathi image — centered inside the rectangle */}
            <img
              src="/ganapathi-gold.jpg"
              alt="Lord Ganapathi"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                borderRadius: 6,
                objectFit: "cover",
              }}
            />

            <p className="mt-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.3em", color: "#E7CE8E", textTransform: "uppercase" }}>
              Shubh Vivah
            </p>

            <h2 className="festive-text" style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.7rem, 6vw, 2.4rem)", fontWeight: 600, margin: "0.5rem 0" }}>
              You&apos;re Invited!
            </h2>

            <div className="squiggle my-3" />

            <p style={{ fontFamily: "'Cinzel', serif", fontWeight: 500, color: "#F4EFE4", fontSize: "1.2rem", letterSpacing: "0.05em" }}>
              Apoorva <span style={{ color: "#E7CE8E" }}>&amp;</span> Charan
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#D9D2C4", fontSize: "0.92rem", marginTop: "0.3rem" }}>
              November 19–22, 2026
            </p>

            <button onClick={enter} disabled={opening} className="btn-fest mt-6">
              {opening ? "With blessings…" : "Open Invitation"}
            </button>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
