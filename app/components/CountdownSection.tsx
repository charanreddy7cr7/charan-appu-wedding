"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";

function useMounted() {
  return useSyncExternalStore(() => () => {}, () => true, () => false);
}

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number; }

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const unitColors = ["#E63980", "#FF9F1C", "#0FA3B1", "#7B2CBF"];

function Unit({ value, label, color }: { value: number; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="flex items-center justify-center rounded-3xl"
        style={{
          width: "clamp(4.5rem, 18vw, 7rem)",
          height: "clamp(4.5rem, 18vw, 7rem)",
          background: "#fff",
          boxShadow: `0 10px 26px ${color}33`,
          border: `3px solid ${color}`,
        }}
      >
        <motion.span
          key={value}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 6vw, 3rem)", color }}
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </div>
      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#5A4A6A", marginTop: "0.6rem" }}>
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const mounted = useMounted();
  const weddingDate = new Date("2026-11-21T10:00:00");
  const [t, setT] = useState<TimeLeft>(getTimeLeft(weddingDate));

  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft(weddingDate)), 1000);
    return () => clearInterval(id);
  }, []);
  if (!mounted) return null;

  return (
    <section id="countdown" className="py-20 px-6 relative" style={{ background: "#FFF8F0" }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.24em", color: "#E63980", textTransform: "uppercase" }}
        >
          Let the celebrations begin in
        </motion.p>

        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap mt-8">
          <Unit value={t.days} label="Days" color={unitColors[0]} />
          <Unit value={t.hours} label="Hours" color={unitColors[1]} />
          <Unit value={t.minutes} label="Minutes" color={unitColors[2]} />
          <Unit value={t.seconds} label="Seconds" color={unitColors[3]} />
        </div>

        <motion.h2
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="festive-text mt-12"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: "clamp(1.8rem, 5vw, 2.8rem)" }}
        >
          November 19–22, 2026
        </motion.h2>
        <p className="mt-3" style={{ fontFamily: "'Poppins', sans-serif", color: "#5A4A6A", fontSize: "1.05rem" }}>
          Save the date — we can&apos;t wait to celebrate with you! 🎊
        </p>
      </div>
    </section>
  );
}
