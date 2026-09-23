"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Events", href: "#events" },
  { label: "Dress Code", href: "#dresscode" },
  { label: "Gallery", href: "#gallery" },
  { label: "Gifts", href: "#registry" },
  { label: "RSVP", href: "#rsvp" },
];

export default function GlobalNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const go = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
        style={{ background: scrolled ? "rgba(26,16,36,0.92)" : "transparent", boxShadow: scrolled ? "0 4px 20px rgba(43,27,61,0.08)" : "none" }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); go("#home"); }}
            className="festive-text" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "1.3rem", textDecoration: "none" }}>
            A &amp; C
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); go(l.href); }}
                className="transition-colors"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "0.85rem", color: "#C4B2D4", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E63980")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#C4B2D4")}>
                {l.label}
              </a>
            ))}
            <a href="#rsvp" onClick={(e) => { e.preventDefault(); go("#rsvp"); }}
              className="btn-fest" style={{ padding: "0.5rem 1.4rem", fontSize: "0.8rem" }}>
              RSVP
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            style={{ background: "transparent", border: "none", cursor: "pointer" }} aria-label="Menu">
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} className="block w-6 h-0.5 rounded-full" style={{ background: "#E63980" }} />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-0.5 rounded-full" style={{ background: "#FF9F1C" }} />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} className="block w-6 h-0.5 rounded-full" style={{ background: "#0FA3B1" }} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: "linear-gradient(160deg, #241531, #1A1024)" }}>
            <span className="festive-text" style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: "2rem" }}>A &amp; C</span>
            {navLinks.map((l, i) => (
              <motion.a key={l.href} href={l.href}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                onClick={(e) => { e.preventDefault(); go(l.href); }}
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "1.3rem", color: "#F6ECFB", textDecoration: "none" }}>
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
