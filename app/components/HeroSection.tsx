"use client";

import { motion } from "framer-motion";
import { FloralCorner } from "./FloralCorner";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-16"
      style={{ background: "transparent" }}
    >
      {/* Subtle gold column pillars on the sides — like the reference */}
      <div className="absolute top-0 bottom-0 left-0 w-6 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #C9A43E 0%, #E8C86A 20%, #C9A43E 40%, #D4AF37 60%, #C9A43E 80%, #E8C86A 100%)",
          boxShadow: "2px 0 12px rgba(139,105,20,0.35)",
        }} />
      <div className="absolute top-0 bottom-0 right-0 w-6 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #C9A43E 0%, #E8C86A 20%, #C9A43E 40%, #D4AF37 60%, #C9A43E 80%, #E8C86A 100%)",
          boxShadow: "-2px 0 12px rgba(139,105,20,0.35)",
        }} />

      {/* Small floral corners */}
      <FloralCorner size={100} className="absolute top-0 left-6 pointer-events-none select-none" style={{ opacity: 0.8 }} />
      <FloralCorner size={100} className="absolute bottom-0 right-6 pointer-events-none select-none" style={{ opacity: 0.8, transform: "rotate(180deg)" }} />

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col gap-6 px-4">

        {/* TOP PANEL — Telugu blessings + wedding scene (illuminated) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
          className="relative spotlight"
          style={{
            border: "2px solid #C9A43E",
            boxShadow: "0 0 0 1px #F0DCA0, 0 8px 32px rgba(139,105,20,0.3), inset 0 2px 8px rgba(240,220,160,0.2)",
            background: "linear-gradient(160deg, rgba(245,235,210,0.95) 0%, rgba(235,218,190,0.95) 100%)",
            borderRadius: "4px",
            overflow: "hidden",
            padding: "1rem 1.2rem 1rem",
          }}
        >
          {/* Spotlight dots row (like the reference lights) */}
          <div className="flex justify-around mb-3">
            {Array.from({length: 7}).map((_,i) => (
              <motion.div key={i}
                animate={{ opacity: [0.4,1,0.4] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: i*0.3, ease:"easeInOut" }}
                style={{ width:8, height:8, borderRadius:"50%", background:"#F5D876",
                  boxShadow:"0 0 8px 3px rgba(245,216,118,0.9)" }} />
            ))}
          </div>

          {/* Telugu blessings */}
          <div className="flex justify-between mb-3 px-2">
            {["శ్రీరస్తు", "శుభమస్తు", "అవిఘ్నమస్తు"].map((b) => (
              <span key={b} style={{ fontFamily:"'Cinzel',serif", fontWeight:600, fontSize:"clamp(0.55rem,1.8vw,0.75rem)", color:"#8B6914", letterSpacing:"0.04em" }}>{b}</span>
            ))}
          </div>

          {/* Wedding family scene */}
          <img src="/wedding-family-gold.png" alt="Wedding scene"
            style={{ width:"100%", height:"auto", display:"block",
              filter:"drop-shadow(0 2px 8px rgba(139,105,20,0.3))" }} />

          {/* Gold bottom bar */}
          <div style={{ height:3, marginTop:"0.8rem",
            background:"linear-gradient(90deg, transparent, #C9A43E, #F0DCA0, #C9A43E, transparent)" }} />
        </motion.div>

        {/* MIDDLE PANEL — gold brushed plaque with names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
          className="relative gold-corner"
          style={{
            background: "linear-gradient(135deg, #E8C86A 0%, #D4AF37 20%, #C9A43E 45%, #F0DCA0 60%, #C9A43E 75%, #D4AF37 90%, #E8C86A 100%)",
            backgroundSize: "200% 200%",
            animation: "platShimmer 8s ease-in-out infinite",
            border: "2px solid #A07820",
            boxShadow: "0 6px 28px rgba(139,105,20,0.45), inset 0 1px 2px rgba(255,243,196,0.5), inset 0 -1px 2px rgba(100,75,10,0.2)",
            borderRadius: "4px",
            padding: "2rem 2rem 1.6rem",
            textAlign: "center",
          }}
        >
          {/* Gold rivet dots at corners */}
          {[["top-2 left-2"],["top-2 right-2"],["bottom-2 left-2"],["bottom-2 right-2"]].map(([pos]) => (
            <div key={pos} className={`absolute ${pos} w-3 h-3 rounded-full`}
              style={{ background:"radial-gradient(circle at 35% 35%, #FFF3C4, #C9A43E, #8B6914)",
                boxShadow:"0 1px 3px rgba(100,75,10,0.5)" }} />
          ))}

          <h1 style={{ fontFamily:"'Cinzel',serif", fontWeight:600, fontSize:"clamp(1.6rem,7vw,2.4rem)",
            letterSpacing:"0.06em", color:"#2E1A00", textShadow:"0 1px 3px rgba(255,240,180,0.6)", lineHeight:1.1 }}>
            Apoorva Gonegari
          </h1>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"0.88rem",
            color:"#4A3000", marginTop:"0.3rem" }}>
            Daughter of Smt. Vajra &amp; Sri Sanjeev Gonegari
          </p>

          <div style={{ margin:"1rem 0", display:"flex", alignItems:"center", gap:"0.8rem", justifyContent:"center" }}>
            <div style={{ flex:1, height:1, background:"linear-gradient(90deg, transparent, #8B6914)" }} />
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"1.8rem",
              color:"#2E1A00", fontWeight:400 }}>&amp;</span>
            <div style={{ flex:1, height:1, background:"linear-gradient(90deg, #8B6914, transparent)" }} />
          </div>

          <h1 style={{ fontFamily:"'Cinzel',serif", fontWeight:600, fontSize:"clamp(1.6rem,7vw,2.4rem)",
            letterSpacing:"0.06em", color:"#2E1A00", textShadow:"0 1px 3px rgba(255,240,180,0.6)", lineHeight:1.1 }}>
            Charan Reddy Jaidi
          </h1>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"0.88rem",
            color:"#4A3000", marginTop:"0.3rem" }}>
            Son of Late Sri Jaidi Bhaskar &amp; Smt. Sukanya
          </p>
        </motion.div>

        {/* BOTTOM PANEL — marble illuminated section with buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}
          className="relative spotlight"
          style={{
            border: "2px solid #C9A43E",
            boxShadow: "0 0 0 1px #F0DCA0, 0 8px 32px rgba(139,105,20,0.25), inset 0 2px 8px rgba(240,220,160,0.15)",
            background: "linear-gradient(160deg, rgba(245,235,210,0.95) 0%, rgba(235,218,190,0.95) 100%)",
            borderRadius: "4px",
            padding: "1.4rem 1.2rem",
            minHeight: "120px",
          }}
        >
          {/* Spotlight dots row */}
          <div className="flex justify-around mb-4">
            {Array.from({length: 7}).map((_,i) => (
              <motion.div key={i}
                animate={{ opacity: [0.4,1,0.4] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: i*0.3+1, ease:"easeInOut" }}
                style={{ width:8, height:8, borderRadius:"50%", background:"#F5D876",
                  boxShadow:"0 0 8px 3px rgba(245,216,118,0.9)" }} />
            ))}
          </div>

          {/* Date */}
          <p className="text-center mb-5" style={{ fontFamily:"'Cinzel',serif", fontWeight:500,
            fontSize:"0.78rem", letterSpacing:"0.18em", color:"#6B4F2A", textTransform:"uppercase" }}>
            November 2026
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            <a href="#rsvp" className="btn-fest flex-1 text-center" style={{ maxWidth:"180px" }}>
              RSVP
            </a>
            <a href="#events" className="btn-outline flex-1 text-center" style={{ maxWidth:"180px" }}>
              View Events
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
