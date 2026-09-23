"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "./Confetti";

// Client-only mounted flag without setState-in-effect.
function useMounted() {
  return useSyncExternalStore(() => () => {}, () => true, () => false);
}

/**
 * Festive intro — a bright, joyful welcome card the guest taps to enter.
 * Plays the entrance Ganapathi song while visible; stops it on enter.
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const dismissed = initiallySeen || manualDismiss;

  useEffect(() => {
    if (!mounted || dismissed) return;
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    // Entrance Ganapathi song — only for this screen.
    const audio = new Audio("/music/entrance-ganapathi.mp3");
    audio.volume = 0.6;
    audio.loop = true;
    audio.setAttribute("playsinline", "true");
    audioRef.current = audio;

    // Try to autoplay; if blocked, start on the first user interaction.
    const tryPlay = () => { audio.play().catch(() => {}); };
    tryPlay();
    const onFirst = () => { tryPlay(); removeFirst(); };
    const removeFirst = () => {
      document.removeEventListener("pointerdown", onFirst);
      document.removeEventListener("touchend", onFirst);
      document.removeEventListener("keydown", onFirst);
    };
    document.addEventListener("pointerdown", onFirst);
    document.addEventListener("touchend", onFirst);
    document.addEventListener("keydown", onFirst);

    return () => {
      document.body.style.overflow = "";
      removeFirst();
      audio.pause();
      audioRef.current = null;
    };
  }, [mounted, dismissed]);

  function stopEntranceAudio() {
    const a = audioRef.current;
    if (!a) return;
    // Gentle fade-out then stop
    const fade = setInterval(() => {
      if (a.volume > 0.08) { a.volume = Math.max(0, a.volume - 0.08); }
      else { a.pause(); a.currentTime = 0; clearInterval(fade); }
    }, 60);
  }

  function enter() {
    if (opening) return;
    setOpening(true);
    stopEntranceAudio();
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
          style={{
            backgroundColor: "#000000",
            backgroundImage: "url('/ganapathi-gold.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "62% center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark vignette so text stays readable over the image */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at 50% 40%, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.55) 100%)" }} />

          <Confetti count={40} />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10 flex flex-col items-center text-center px-8 mx-4"
            style={{ maxWidth: 640, width: "100%", marginTop: "auto", marginBottom: "7vh" }}
          >
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.3em", color: "#E7CE8E", textTransform: "uppercase" }}>
              Shubh Vivah
            </p>

            <h2 className="festive-text" style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 6vw, 2.8rem)", fontWeight: 600, margin: "0.6rem 0", textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}>
              You&apos;re Invited!
            </h2>

            <div className="squiggle my-4" />

            <p style={{ fontFamily: "'Cinzel', serif", fontWeight: 500, color: "#F4EFE4", fontSize: "1.25rem", letterSpacing: "0.05em", textShadow: "0 2px 14px rgba(0,0,0,0.8)" }}>
              Apoorva <span style={{ color: "#E7CE8E" }}>&amp;</span> Charan
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: "#D9D2C4", fontSize: "0.95rem", marginTop: "0.3rem", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
              November 19–22, 2026
            </p>

            <button onClick={enter} disabled={opening} className="btn-fest mt-8">
              {opening ? "With blessings…" : "Open Invitation"}
            </button>

            <p className="audio-note" style={{ color: "#B79A5E" }}>🔊 Best experienced with sound on</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
