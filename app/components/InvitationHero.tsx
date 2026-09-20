"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Temple Gopuram Arch — pure SVG
function TempleArch({ color = "#C9A84C", width = 600, height = 700 }: { color?: string; width?: number; height?: number }) {
  const w = width;
  const h = height;
  const cx = w / 2;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" style={{ position: "absolute", inset: 0, margin: "auto", pointerEvents: "none" }}>
      {/* Outer arch frame */}
      <path
        d={`M ${cx - 220},${h - 20} L ${cx - 220},${h * 0.42} Q ${cx - 220},${h * 0.05} ${cx},${h * 0.05} Q ${cx + 220},${h * 0.05} ${cx + 220},${h * 0.42} L ${cx + 220},${h - 20}`}
        stroke={color} strokeWidth="1.5" fill="none" opacity="0.7"
      />
      {/* Inner arch */}
      <path
        d={`M ${cx - 190},${h - 20} L ${cx - 190},${h * 0.44} Q ${cx - 190},${h * 0.1} ${cx},${h * 0.1} Q ${cx + 190},${h * 0.1} ${cx + 190},${h * 0.44} L ${cx + 190},${h - 20}`}
        stroke={color} strokeWidth="0.8" fill="none" opacity="0.5"
      />

      {/* Arch top decorative tier - small arches */}
      {[-80, -40, 0, 40, 80].map((offset, i) => (
        <path
          key={i}
          d={`M ${cx + offset - 22},${h * 0.18} Q ${cx + offset},${h * 0.09} ${cx + offset + 22},${h * 0.18}`}
          stroke={color} strokeWidth="0.8" fill="none" opacity="0.5"
        />
      ))}

      {/* Top finial / kalash */}
      <circle cx={cx} cy={h * 0.025} r="12" stroke={color} strokeWidth="1" fill="none" opacity="0.8" />
      <circle cx={cx} cy={h * 0.025} r="6" fill={color} opacity="0.5" />
      <line x1={cx} y1={h * 0.025 - 20} x2={cx} y2={h * 0.025 - 12} stroke={color} strokeWidth="1" opacity="0.7" />
      {/* Kalash body */}
      <ellipse cx={cx} cy={h * 0.025 - 28} rx="8" ry="10" stroke={color} strokeWidth="0.8" fill="none" opacity="0.6" />
      <path d={`M ${cx - 4},${h * 0.025 - 38} Q ${cx},${h * 0.025 - 44} ${cx + 4},${h * 0.025 - 38}`} stroke={color} strokeWidth="0.8" fill="none" opacity="0.6" />

      {/* Left pillar decorations */}
      {[0.55, 0.62, 0.69, 0.76, 0.83].map((frac, i) => (
        <g key={i}>
          <rect x={cx - 235} y={h * frac - 8} width="30" height="16" rx="2" stroke={color} strokeWidth="0.6" fill="none" opacity="0.4" />
          <circle cx={cx - 220} cy={h * frac} r="3" fill={color} opacity="0.3" />
        </g>
      ))}
      {/* Right pillar decorations */}
      {[0.55, 0.62, 0.69, 0.76, 0.83].map((frac, i) => (
        <g key={i}>
          <rect x={cx + 205} y={h * frac - 8} width="30" height="16" rx="2" stroke={color} strokeWidth="0.6" fill="none" opacity="0.4" />
          <circle cx={cx + 220} cy={h * frac} r="3" fill={color} opacity="0.3" />
        </g>
      ))}

      {/* Hanging toran (mango leaf garland) */}
      {Array.from({ length: 18 }, (_, i) => {
        const x = cx - 180 + i * 20;
        const sag = 18 + 6 * Math.sin((i / 17) * Math.PI);
        return (
          <g key={i}>
            <ellipse cx={x} cy={h * 0.32 + sag} rx="5" ry="9"
              transform={`rotate(${-20 + i * 2.3} ${x} ${h * 0.32 + sag})`}
              fill={i % 3 === 0 ? "#E91E8C" : "#2D9148"} opacity="0.55" />
          </g>
        );
      })}
      {/* Toran rope */}
      <path
        d={`M ${cx - 180},${h * 0.32} Q ${cx},${h * 0.34} ${cx + 180},${h * 0.32}`}
        stroke={color} strokeWidth="0.8" fill="none" opacity="0.5"
      />

      {/* Hanging bells */}
      {[cx - 160, cx - 80, cx, cx + 80, cx + 160].map((bx, i) => (
        <g key={i}>
          <line x1={bx} y1={h * 0.32} x2={bx} y2={h * 0.32 + 22} stroke={color} strokeWidth="0.6" opacity="0.4" />
          <ellipse cx={bx} cy={h * 0.32 + 28} rx="6" ry="8" stroke={color} strokeWidth="0.7" fill="none" opacity="0.5" />
          <circle cx={bx} cy={h * 0.32 + 36} r="1.5" fill={color} opacity="0.4" />
        </g>
      ))}

      {/* Lotus flowers at arch base corners */}
      {[cx - 220, cx + 220].map((lx, i) => (
        <g key={i}>
          {[0, 60, 120, 180, 240, 300].map((angle, j) => (
            <ellipse
              key={j}
              cx={lx + Math.cos((angle * Math.PI) / 180) * 12}
              cy={h - 40 + Math.sin((angle * Math.PI) / 180) * 12}
              rx="5" ry="9"
              transform={`rotate(${angle} ${lx + Math.cos((angle * Math.PI) / 180) * 12} ${h - 40 + Math.sin((angle * Math.PI) / 180) * 12})`}
              stroke={color} strokeWidth="0.7" fill="none" opacity="0.5"
            />
          ))}
          <circle cx={lx} cy={h - 40} r="3" fill={color} opacity="0.4" />
        </g>
      ))}

      {/* Bottom base line */}
      <line x1={cx - 250} y1={h - 10} x2={cx + 250} y2={h - 10} stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1={cx - 220} y1={h - 6} x2={cx + 220} y2={h - 6} stroke={color} strokeWidth="0.4" opacity="0.3" />

      {/* Decorative dots along arch */}
      {[0.15, 0.2, 0.25, 0.3].map((frac, i) => {
        const t = frac;
        // Points along the arch curve
        const arcY = h * 0.05 + (h * 0.42 - h * 0.05) * Math.pow(t / 0.42, 0.5);
        return (
          <g key={i}>
            <circle cx={cx - 220 + 3} cy={h * frac * 1.1} r="2" fill={color} opacity="0.4" />
            <circle cx={cx + 220 - 3} cy={h * frac * 1.1} r="2" fill={color} opacity="0.4" />
          </g>
        );
      })}
    </svg>
  );
}

// Parchment texture overlay
function ParchmentTexture() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 30% 20%, rgba(180,140,60,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 70% 80%, rgba(140,100,40,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 100% 100% at 50% 50%, rgba(250,240,210,0.3) 0%, transparent 70%)
        `,
      }}
    />
  );
}

export default function InvitationHero() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #FDF8EE 0%, #F5E8C8 30%, #FAF0D8 60%, #F0E0B0 100%)",
      }}
    >
      <ParchmentTexture />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Temple arch — desktop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden md:flex">
        <div style={{ position: "relative", width: 600, height: 700 }}>
          <TempleArch color="#B8860B" width={600} height={700} />
        </div>
      </div>

      {/* Temple arch — mobile (smaller) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:hidden">
        <div style={{ position: "relative", width: 340, height: 500 }}>
          <TempleArch color="#B8860B" width={340} height={500} />
        </div>
      </div>

      {/* Invitation content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 30 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-6 py-20 max-w-lg mx-auto"
      >
        {/* Telugu blessing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-3"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.4rem",
            color: "#8B6914",
            letterSpacing: "0.15em",
          }}
        >
          శుభమస్తు
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: revealed ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mb-6"
          style={{
            height: "1px",
            width: "120px",
            background: "linear-gradient(90deg, transparent, #B8860B, transparent)",
          }}
        />

        {/* Together with families */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 0.7 : 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.85rem",
            color: "#5C4A1E",
            letterSpacing: "0.2em",
            fontStyle: "italic",
          }}
        >
          Together with our families
        </motion.p>

        {/* We invite you */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 0.7 : 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.85rem",
            color: "#5C4A1E",
            letterSpacing: "0.2em",
            fontStyle: "italic",
          }}
        >
          joyfully invite you to celebrate
        </motion.p>

        {/* Approva name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 20 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(2.8rem, 8vw, 5rem)",
            fontWeight: 600,
            color: "#3D2B00",
            letterSpacing: "0.08em",
            lineHeight: 1,
            textShadow: "0 2px 8px rgba(184,134,11,0.2)",
          }}
        >
          Approva
        </motion.h1>

        {/* Weds */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.8 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="my-3 flex items-center justify-center gap-4"
        >
          <div style={{ height: "1px", width: "40px", background: "linear-gradient(90deg, transparent, #B8860B)" }} />
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem",
            color: "#B8860B",
            letterSpacing: "0.3em",
            fontStyle: "italic",
          }}>
            weds
          </span>
          <div style={{ height: "1px", width: "40px", background: "linear-gradient(90deg, #B8860B, transparent)" }} />
        </motion.div>

        {/* Charan name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : -20 }}
          transition={{ delay: 1.1, duration: 1 }}
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(2.8rem, 8vw, 5rem)",
            fontWeight: 600,
            color: "#3D2B00",
            letterSpacing: "0.08em",
            lineHeight: 1,
            textShadow: "0 2px 8px rgba(184,134,11,0.2)",
          }}
        >
          Charan
        </motion.h1>

        {/* Lotus ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="my-6 text-2xl"
          style={{ color: "#B8860B" }}
        >
          🪷
        </motion.div>

        {/* Date block */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 10 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mb-6"
        >
          <p style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "0.85rem",
            color: "#8B6914",
            letterSpacing: "0.25em",
          }}>
            NOVEMBER 12–15, 2026
          </p>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
            color: "#5C4A1E",
            letterSpacing: "0.15em",
            fontStyle: "italic",
            marginTop: "4px",
          }}>
            Texas, USA
          </p>
        </motion.div>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: revealed ? 1 : 0, scaleX: revealed ? 1 : 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div style={{ height: "1px", flex: 1, maxWidth: 60, background: "linear-gradient(90deg, transparent, #B8860B)" }} />
          <span style={{ color: "#B8860B", fontSize: "0.7rem", letterSpacing: "0.3em" }}>✦</span>
          <span style={{ color: "#B8860B", fontSize: "1rem" }}>🪷</span>
          <span style={{ color: "#B8860B", fontSize: "0.7rem", letterSpacing: "0.3em" }}>✦</span>
          <div style={{ height: "1px", flex: 1, maxWidth: 60, background: "linear-gradient(90deg, #B8860B, transparent)" }} />
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#events"
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          whileHover={{ scale: 1.04, backgroundColor: "#B8860B", color: "#FDF8EE" }}
          className="inline-block px-8 py-3 text-xs tracking-[0.25em] transition-all duration-300"
          style={{
            border: "1px solid #B8860B",
            color: "#8B6914",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            textDecoration: "none",
            background: "rgba(184,134,11,0.06)",
          }}
        >
          VIEW OUR CELEBRATION
        </motion.a>

        {/* Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: revealed ? 1 : 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <p style={{
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            color: "rgba(139,105,20,0.5)",
            fontFamily: "'Lato', sans-serif",
          }}>
            SCROLL
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{ width: "1px", height: "32px", background: "linear-gradient(180deg, #B8860B, transparent)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
