"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GuestEntry {
  name: string;
  attending: "accepts" | "declines" | "";
  meal: string;
  adults: number;
  kids: number;
  sangeeth: boolean;
  engagement: boolean;
  mehendi: boolean;
  haldi: boolean;
  prewedding: boolean;
  wedding: boolean;
}

interface FormData {
  primaryName: string;
  email: string;
  phone: string;
  guests: GuestEntry[];
  dietary: string;
  songRequest: string;
  message: string;
}

const defaultGuest = (): GuestEntry => ({
  name: "",
  attending: "",
  meal: "",
  adults: 1,
  kids: 0,
  sangeeth: false,
  engagement: false,
  mehendi: false,
  haldi: false,
  prewedding: false,
  wedding: false,
});

const weddingEvents = [
  { key: "sangeeth"   as const, label: "Sangeeth",    emoji: "✨", color: "#92700A", bg: "#FEF3C7" },
  { key: "engagement" as const, label: "Engagement",  emoji: "💍", color: "#7C3AED", bg: "#EDE9FE" },
  { key: "mehendi"    as const, label: "Mehendi",     emoji: "🤚", color: "#166534", bg: "#DCFCE7" },
  { key: "haldi"      as const, label: "Haldi",       emoji: "☀️", color: "#B45309", bg: "#FEF3C7" },
  { key: "prewedding" as const, label: "Pre-Wedding", emoji: "🪔", color: "#9D174D", bg: "#FCE7F3" },
  { key: "wedding"    as const, label: "Wedding",     emoji: "🪷", color: "#7A5800", bg: "#FEF9E7" },
];

const mealOptions = [
  { value: "",           label: "Select meal preference…" },
  { value: "vegetarian", label: "🥗 Vegetarian" },
  { value: "vegan",      label: "🌱 Vegan" },
  { value: "jain",       label: "🙏 Jain" },
  { value: "non-veg",    label: "🍗 Non-Vegetarian" },
  { value: "no-pref",    label: "No preference" },
];

type SubmitState = "idle" | "submitting" | "success" | "error";

/* ── Shared styles ────────────────────────────────────────────────────────── */
const inputStyle: React.CSSProperties = {
  background: "#FFFFFF", border: "1.5px solid #D4B87A", borderRadius: "3px",
  color: "#1A1200", fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: "1.05rem", padding: "0.75rem 1rem", width: "100%",
  outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
};
const labelStyle: React.CSSProperties = {
  display: "block", color: "#7A5800", fontFamily: "'Lato', sans-serif",
  fontWeight: 600, fontSize: "0.65rem", letterSpacing: "0.22em",
  textTransform: "uppercase", marginBottom: "0.45rem",
};
const panelStyle: React.CSSProperties = {
  background: "#FFFDF7", border: "1.5px solid rgba(184,134,11,0.2)",
  borderRadius: "6px", padding: "1.5rem",
};
const focusIn  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  e.target.style.borderColor = "#B8860B";
  e.target.style.boxShadow   = "0 0 0 3px rgba(184,134,11,0.12)";
};
const focusOut = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  e.target.style.borderColor = "#D4B87A";
  e.target.style.boxShadow   = "none";
};

export default function RSVPSection() {
  const [form, setForm] = useState<FormData>({
    primaryName: "", email: "", phone: "",
    guests: [defaultGuest()],
    dietary: "", songRequest: "", message: "",
  });
  const [submitState, setSubmitState]    = useState<SubmitState>("idle");
  const [validationError, setValidation] = useState("");

  const updateGuest = (i: number, field: keyof GuestEntry, val: string | number | boolean) => {
    if (validationError) setValidation("");
    setForm((p) => {
      const g = [...p.guests];
      g[i] = { ...g[i], [field]: val };
      return { ...p, guests: g };
    });
  };

  const adjustCount = (i: number, field: "adults" | "kids", delta: number) => {
    setForm((p) => {
      const g = [...p.guests];
      const min = field === "adults" ? 1 : 0;
      g[i] = { ...g[i], [field]: Math.max(min, Math.min(20, g[i][field] + delta)) };
      return { ...p, guests: g };
    });
  };

  const addGuest    = () => setForm((p) => ({ ...p, guests: [...p.guests, defaultGuest()] }));
  const removeGuest = (i: number) => {
    if (form.guests.length > 1)
      setForm((p) => ({ ...p, guests: p.guests.filter((_, idx) => idx !== i) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    for (let i = 0; i < form.guests.length; i++) {
      const g = form.guests[i];
      if (!g.name.trim()) { setValidation(`Please enter a name for Guest ${i + 1}.`); return; }
      if (!g.attending)   { setValidation(`Please confirm attendance for ${g.name || `Guest ${i + 1}`}.`); return; }
      if (g.attending === "accepts") {
        const keys = ["sangeeth","engagement","mehendi","haldi","prewedding","wedding"] as const;
        if (!keys.some((k) => g[k])) {
          setValidation(`Please select at least one event for ${g.name || `Guest ${i + 1}`}.`);
          return;
        }
      }
    }

    setValidation("");
    setSubmitState("submitting");
    try {
      const res  = await fetch("https://wa3r5hutq1.execute-api.us-east-1.amazonaws.com/api/rsvp", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitState("success");
        requestAnimationFrame(() =>
          document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth", block: "start" })
        );
      } else { setSubmitState("error"); }
    } catch { setSubmitState("error"); }
  };

  const allDeclined = form.guests.length > 0 && form.guests.every((g) => g.attending === "declines");

  return (
    <section
      id="rsvp"
      className="py-20 px-4 sm:px-6 relative"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FAF6EE 100%)" }}
    >
      {/* Watermark dot pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(184,134,11,0.07) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      <div className="relative z-10 max-w-2xl mx-auto">

        {/* ── Header ────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p style={{ color: "#B8860B", fontFamily: "'Lato', sans-serif", fontWeight: 600,
            fontSize: "0.65rem", letterSpacing: "0.32em", textTransform: "uppercase",
            marginBottom: "1rem" }}>
            APOORVA GONEGARI &amp; CHARAN REDDY JAIDI
          </p>

          <h2 className="gold-text" style={{ fontFamily: "'Cinzel', serif",
            fontSize: "clamp(2.2rem, 6vw, 3.8rem)", fontWeight: 400, letterSpacing: "0.1em" }}>
            RSVP
          </h2>

          <div className="section-divider mt-5 mb-6" />

          {/* New prompt text */}
          <p style={{ color: "#2C2000", fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.15rem, 2.8vw, 1.35rem)", fontWeight: 400,
            lineHeight: 1.7, maxWidth: "480px", margin: "0 auto" }}>
            Will you be joining us in celebration?
            <br />
            <em style={{ color: "#7A5800" }}>
              Come and bless us — your presence makes us more happy.
            </em>
          </p>

          <p style={{ color: "#8B7340", fontFamily: "'Lato', sans-serif", fontWeight: 400,
            fontSize: "0.75rem", letterSpacing: "0.1em", marginTop: "1rem" }}>
            Please respond by <strong style={{ color: "#7A5800" }}>October 1, 2026</strong>
          </p>
        </motion.div>

        <AnimatePresence mode="wait">

          {/* ── Success ─────────────────────────────────────────────────── */}
          {submitState === "success" ? (
            <motion.div key="success"
              initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 px-8"
              style={{ background: "#FFFDF7", border: "1.5px solid rgba(184,134,11,0.25)", borderRadius: "8px" }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                {allDeclined ? "🙏" : "🎊"}
              </div>
              <h3 className="gold-text mb-4"
                style={{ fontFamily: "'Cinzel', serif", fontSize: "1.8rem", fontWeight: 400 }}>
                {allDeclined ? "We Understand" : "We Can't Wait to See You!"}
              </h3>
              <p style={{ color: "#2C2000", fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem", fontStyle: "italic" }}>
                {allDeclined
                  ? "Thank you for letting us know. We'll miss you and will keep you in our prayers."
                  : "Your RSVP is confirmed. A confirmation email is on its way!"}
              </p>
            </motion.div>

          ) : (

          /* ── Form ───────────────────────────────────────────────────── */
          <motion.form key="form"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit} className="space-y-6" noValidate
          >

            {/* Contact details */}
            <div style={panelStyle}>
              <p style={{ color: "#B8860B", fontFamily: "'Lato', sans-serif", fontWeight: 700,
                fontSize: "0.65rem", letterSpacing: "0.26em", textTransform: "uppercase",
                marginBottom: "1.25rem" }}>
                YOUR CONTACT DETAILS
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label style={labelStyle}>YOUR FULL NAME *</label>
                  <input required type="text" placeholder="e.g. Ravi Kumar"
                    value={form.primaryName}
                    onChange={(e) => setForm((p) => ({ ...p, primaryName: e.target.value }))}
                    style={inputStyle} onFocus={focusIn} onBlur={focusOut}
                  />
                </div>
                <div>
                  <label style={labelStyle}>EMAIL ADDRESS *</label>
                  <input required type="email" placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    style={inputStyle} onFocus={focusIn} onBlur={focusOut}
                  />
                </div>
                <div>
                  <label style={labelStyle}>PHONE (OPTIONAL)</label>
                  <input type="tel" placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    style={inputStyle} onFocus={focusIn} onBlur={focusOut}
                  />
                </div>
              </div>
            </div>

            {/* Guests */}
            <div style={panelStyle}>
              <p style={{ color: "#B8860B", fontFamily: "'Lato', sans-serif", fontWeight: 700,
                fontSize: "0.65rem", letterSpacing: "0.26em", textTransform: "uppercase",
                marginBottom: "0.4rem" }}>
                GUEST DETAILS
              </p>
              <p style={{ color: "#5C4A1A", fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic", fontSize: "1rem", marginBottom: "1.5rem" }}>
                Add each guest, confirm their attendance, and select which events they&apos;ll join.
              </p>

              <div className="space-y-6">
                {form.guests.map((guest, i) => (
                  <div key={i} style={{ border: "1px solid rgba(184,134,11,0.18)",
                    borderRadius: "5px", padding: "1.25rem", background: "#FFFFFF" }}>

                    {/* Guest header */}
                    <div className="flex items-center justify-between mb-4">
                      <span style={{ color: "#7A5800", fontFamily: "'Lato', sans-serif",
                        fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.18em",
                        textTransform: "uppercase" }}>
                        GUEST {i + 1}
                      </span>
                      {i > 0 && (
                        <button type="button" onClick={() => removeGuest(i)}
                          style={{ color: "#B91C1C", fontFamily: "'Lato', sans-serif",
                            fontWeight: 600, fontSize: "0.65rem", background: "none",
                            border: "none", cursor: "pointer", letterSpacing: "0.1em" }}>
                          REMOVE
                        </button>
                      )}
                    </div>

                    {/* Guest name */}
                    <div className="mb-4">
                      <label style={labelStyle}>GUEST NAME *</label>
                      <input type="text" placeholder="Full name"
                        value={guest.name}
                        onChange={(e) => updateGuest(i, "name", e.target.value)}
                        style={inputStyle} onFocus={focusIn} onBlur={focusOut}
                      />
                    </div>

                    {/* Attendance confirmation */}
                    <div className="mb-4">
                      <label style={labelStyle}>ATTENDANCE *</label>
                      <div className="grid grid-cols-2 gap-3">
                        {(["accepts", "declines"] as const).map((choice) => (
                          <button key={choice} type="button"
                            onClick={() => updateGuest(i, "attending", choice)}
                            style={{
                              padding: "0.7rem",
                              border: `1.5px solid ${guest.attending === choice
                                ? (choice === "accepts" ? "#166534" : "#B91C1C")
                                : "rgba(184,134,11,0.2)"}`,
                              borderRadius: "3px",
                              background: guest.attending === choice
                                ? (choice === "accepts" ? "#F0FDF4" : "#FEF2F2")
                                : "#FFFFFF",
                              color: guest.attending === choice
                                ? (choice === "accepts" ? "#166534" : "#B91C1C")
                                : "#5C4A1A",
                              fontFamily: "'Lato', sans-serif",
                              fontWeight: 600,
                              fontSize: "0.72rem",
                              letterSpacing: "0.15em",
                              textTransform: "uppercase",
                              cursor: "pointer",
                              transition: "all 0.15s",
                            }}>
                            {choice === "accepts" ? "✓  ACCEPTS" : "✕  DECLINES"}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Only show these if accepting */}
                    {guest.attending === "accepts" && (
                      <>
                        {/* Adults / Kids */}
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          {(["adults", "kids"] as const).map((field) => (
                            <div key={field} className="flex items-center justify-between p-3"
                              style={{ border: "1px solid rgba(184,134,11,0.18)",
                                borderRadius: "3px", background: "#FFFDF7" }}>
                              <span style={{ color: "#5C4A1A", fontFamily: "'Lato', sans-serif",
                                fontWeight: 600, fontSize: "0.68rem", textTransform: "uppercase",
                                letterSpacing: "0.06em" }}>
                                {field === "adults" ? "Adults" : "Kids"}
                              </span>
                              <div className="flex items-center gap-2">
                                {([-1, null, 1] as const).map((delta, idx) =>
                                  delta === null ? (
                                    <span key="val" style={{ color: "#1A1200",
                                      fontFamily: "'Cinzel', serif", fontSize: "1.1rem",
                                      minWidth: "1.6rem", textAlign: "center", fontWeight: 600 }}>
                                      {guest[field]}
                                    </span>
                                  ) : (
                                    <button key={idx} type="button"
                                      onClick={() => adjustCount(i, field, delta)}
                                      aria-label={`${delta < 0 ? "Decrease" : "Increase"} ${field}`}
                                      style={{ width: "2rem", height: "2rem", flexShrink: 0,
                                        border: "1.5px solid #D4B87A", color: "#7A5800",
                                        background: "#FFFFFF", cursor: "pointer",
                                        fontSize: "1.2rem", borderRadius: "2px", fontWeight: 700,
                                        lineHeight: 1, display: "flex",
                                        alignItems: "center", justifyContent: "center" }}>
                                      {delta < 0 ? "−" : "+"}
                                    </button>
                                  )
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        <p style={{ color: "#8B7340", fontFamily: "'Lato', sans-serif",
                          fontSize: "0.62rem", marginBottom: "1rem" }}>
                          Include yourself in the adults count.
                        </p>

                        {/* Meal preference */}
                        <div className="mb-4">
                          <label style={labelStyle}>MEAL PREFERENCE</label>
                          <select
                            value={guest.meal}
                            onChange={(e) => updateGuest(i, "meal", e.target.value)}
                            onFocus={focusIn} onBlur={focusOut}
                            style={{ ...inputStyle, fontFamily: "'Lato', sans-serif",
                              fontSize: "0.9rem", cursor: "pointer",
                              appearance: "none", WebkitAppearance: "none",
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23B8860B' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "right 1rem center",
                              paddingRight: "2.5rem" }}
                          >
                            {mealOptions.map((o) => (
                              <option key={o.value} value={o.value}>{o.label}</option>
                            ))}
                          </select>
                        </div>

                        {/* Events */}
                        <label style={{ ...labelStyle, marginBottom: "0.6rem" }}>
                          EVENTS ATTENDING *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {weddingEvents.map((ev) => (
                            <label key={ev.key}
                              className="flex items-center gap-2 cursor-pointer p-2"
                              style={{
                                border: `1.5px solid ${guest[ev.key] ? ev.color : "rgba(184,134,11,0.18)"}`,
                                borderRadius: "3px",
                                background: guest[ev.key] ? ev.bg : "#FFFFFF",
                                transition: "all 0.15s",
                              }}>
                              <input type="checkbox" checked={guest[ev.key]}
                                onChange={(e) => updateGuest(i, ev.key, e.target.checked)}
                                className="sr-only" />
                              <span style={{ width: "1rem", height: "1rem", flexShrink: 0,
                                border: `1.5px solid ${ev.color}`, borderRadius: "2px",
                                background: guest[ev.key] ? ev.color : "transparent",
                                color: "#FFFFFF", fontSize: "0.65rem", fontWeight: 700,
                                display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {guest[ev.key] ? "✓" : ""}
                              </span>
                              <span style={{ color: guest[ev.key] ? ev.color : "#5C4A1A",
                                fontFamily: "'Lato', sans-serif",
                                fontWeight: guest[ev.key] ? 600 : 400, fontSize: "0.72rem" }}>
                                {ev.emoji} {ev.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Add guest */}
              <button type="button" onClick={addGuest}
                className="mt-4 w-full py-3 text-xs tracking-[0.2em]"
                style={{ border: "1.5px dashed rgba(184,134,11,0.35)", borderRadius: "3px",
                  color: "#B8860B", background: "transparent", cursor: "pointer",
                  fontFamily: "'Lato', sans-serif", fontWeight: 600,
                  transition: "background 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(184,134,11,0.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                + ADD ANOTHER GUEST
              </button>
            </div>

            {/* Extras */}
            <div style={panelStyle}>
              <p style={{ color: "#B8860B", fontFamily: "'Lato', sans-serif", fontWeight: 700,
                fontSize: "0.65rem", letterSpacing: "0.26em", textTransform: "uppercase",
                marginBottom: "1.25rem" }}>
                A FEW MORE THINGS
              </p>
              <div className="space-y-5">
                <div>
                  <label style={labelStyle}>ADDITIONAL DIETARY NOTES</label>
                  <input type="text"
                    placeholder="e.g. Nut allergy, Gluten-free, Jain, no onion-garlic…"
                    value={form.dietary}
                    onChange={(e) => setForm((p) => ({ ...p, dietary: e.target.value }))}
                    style={inputStyle} onFocus={focusIn} onBlur={focusOut}
                  />
                </div>
                <div>
                  <label style={labelStyle}>🎵 SONG REQUEST FOR SANGEETH</label>
                  <input type="text" placeholder="What should we play for you?"
                    value={form.songRequest}
                    onChange={(e) => setForm((p) => ({ ...p, songRequest: e.target.value }))}
                    style={inputStyle} onFocus={focusIn} onBlur={focusOut}
                  />
                </div>
                <div>
                  <label style={labelStyle}>💌 YOUR MESSAGE TO APOORVA &amp; CHARAN</label>
                  <textarea rows={4}
                    placeholder="Share a wish, a memory, or your blessings for the couple…"
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={focusIn} onBlur={focusOut}
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center pt-2">
              {validationError && (
                <div className="mb-5 text-sm mx-auto"
                  style={{ color: "#B91C1C", fontFamily: "'Lato', sans-serif", fontWeight: 500,
                    background: "#FEF2F2", border: "1.5px solid #FECACA",
                    borderRadius: "4px", padding: "0.7rem 1.25rem",
                    display: "inline-block", maxWidth: "100%" }}>
                  ⚠ {validationError}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={submitState === "submitting"}
                whileHover={submitState !== "submitting" ? { scale: 1.02, y: -2 } : {}}
                whileTap={submitState !== "submitting" ? { scale: 0.98 } : {}}
                style={{
                  background:    submitState === "submitting" ? "#D4B87A" : "#B8860B",
                  color:         "#FFFFFF",
                  border:        "none",
                  borderRadius:  "3px",
                  padding:       "1rem 3rem",
                  fontFamily:    "'Lato', sans-serif",
                  fontWeight:    700,
                  fontSize:      "0.78rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  cursor:        submitState === "submitting" ? "wait" : "pointer",
                  boxShadow:     submitState === "submitting"
                    ? "none"
                    : "0 4px 16px rgba(184,134,11,0.35)",
                  transition:    "background 0.2s, box-shadow 0.2s",
                  minWidth:      "240px",
                }}>
                {submitState === "submitting" ? "SENDING…" : "SEND YOUR RSVP  ♾"}
              </motion.button>

              {submitState === "error" && (
                <p className="mt-4 text-sm"
                  style={{ color: "#B91C1C", fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic" }}>
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <p className="mt-4" style={{ color: "#8B7340", fontFamily: "'Lato', sans-serif",
                fontSize: "0.68rem", letterSpacing: "0.1em" }}>
                A confirmation email will be sent to you after we receive your RSVP.
              </p>
            </div>

          </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
