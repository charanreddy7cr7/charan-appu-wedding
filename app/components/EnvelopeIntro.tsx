"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

/**
 * EnvelopeIntro — cartoon style
 * A bouncy sealed envelope. The guest taps the envelope to open the invitation.
 * Shows once per browser session.
 */
export default function EnvelopeIntro() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [opening, setOpening] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const seen =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem("ca_envelope_seen") === "1";
    if (seen) {
      setDismissed(true);
      return;
    }
    setVisible(true);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function triggerOpen() {
    if (opening) return;
    setOpening(true);
    try {
      window.sessionStorage.setItem("ca_envelope_seen", "1");
      window.dispatchEvent(new Event("hr:play-music"));
    } catch {
      /* ignore */
    }

    window.setTimeout(() => {
      setVisible(false);
      window.scrollTo(0, 0);
      document.body.style.overflow = "";
      window.scrollTo(0, 0);
      window.setTimeout(() => {
        setDismissed(true);
        window.scrollTo(0, 0);
      }, 700);
    }, 2400);
  }

  if (!mounted || dismissed) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`envelope-overlay ${opening ? "is-opening" : ""} ${
        visible ? "" : "is-gone"
      }`}
    >
      <div className="envelope-stage" ref={stageRef}>
        {/* Envelope (tappable) */}
        <button
          type="button"
          className={`envelope cartoon ${opening ? "open" : ""}`}
          onClick={triggerOpen}
          aria-label="Open your wedding invitation"
        >
          {/* Letter that pops out */}
          <div className="letter">
            <div className="letter-inner">
              <p className="letter-eyebrow">You are invited to celebrate</p>
              <h2 className="letter-names">Approva &amp; Charan</h2>
              <div className="letter-rule" />
              <p className="letter-date">November 18–21, 2026</p>
            </div>
          </div>

          <div className="env-back" />
          <div className="env-body" />
          <div className="env-left" />
          <div className="env-right" />
          <div className="env-bottom" />

          {/* Flap + wax seal */}
          <div className="env-flap">
            <div className="wax-seal">
              <span>A&nbsp;♾&nbsp;C</span>
            </div>
            <span className={`pop-burst ${opening ? "go" : ""}`}>✦</span>
          </div>
        </button>

        {!opening ? (
          <p className="tap-hint">Tap the envelope to open your invitation 💌</p>
        ) : (
          <motion.p
            className="tap-hint delivered"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your invitation is ready! 💌
          </motion.p>
        )}
        <p className="audio-note">🔊 Best experienced with sound on</p>
      </div>
    </div>
  );
}
