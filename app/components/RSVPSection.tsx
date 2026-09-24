"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "./Confetti";

interface GuestEntry {
  name: string;
  attending: "accepts" | "declines" | "";
  meal: string;
  adults: number;
  kids: number;
  mehendi: boolean;
  engagement: boolean;
  haldi: boolean;
  ceremony: boolean;
  wedding: boolean;
  reception: boolean;
}

interface FormData {
  primaryName: string;
  email: string;
  phone: string;
  meal: string;
  guests: GuestEntry[];
  dietary: string;
  songRequest: string;
  message: string;
}

const defaultGuest = (): GuestEntry => ({
  name: "", attending: "", meal: "", adults: 1, kids: 0,
  mehendi: false, engagement: false, haldi: false, ceremony: false, wedding: false, reception: false,
});

const weddingEvents = [
  { key: "mehendi"    as const, label: "Mehendi",    emoji: "🤚", color: "#8E1537" },
  { key: "engagement" as const, label: "Engagement",  emoji: "💍", color: "#E63946" },
  { key: "haldi"      as const, label: "Haldi",       emoji: "☀️", color: "#FF6FB5" },
  { key: "ceremony"   as const, label: "Ceremony",    emoji: "🪔", color: "#E7CE8E" },
  { key: "wedding"    as const, label: "Wedding",     emoji: "🪷", color: "#2A9D8F" },
  { key: "reception"  as const, label: "Reception",   emoji: "🎉", color: "#E7CE8E" },
];

const mealOptions = [
  { value: "",           label: "Select meal preference…" },
  { value: "vegetarian", label: "🥗 Vegetarian" },
  { value: "non-veg",    label: "🍗 Non-Vegetarian" },
  { value: "no-pref",    label: "No preference" },
];

type SubmitState = "idle" | "submitting" | "success" | "error";

const labelStyle: React.CSSProperties = {
  display: "block", color: "#E7CE8E", fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 600, fontSize: "0.7rem", letterSpacing: "0.1em",
  textTransform: "uppercase", marginBottom: "0.5rem",
};
const panelStyle: React.CSSProperties = {
  background: "#1C1712", borderRadius: "22px", padding: "1.6rem",
  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
};

export default function RSVPSection() {
  const [form, setForm] = useState<FormData>({
    primaryName: "", email: "", phone: "", meal: "",
    guests: [defaultGuest()],
    dietary: "", songRequest: "", message: "",
  });
  const [submitState, setSubmitState]    = useState<SubmitState>("idle");
  const [validationError, setValidation] = useState("");

  const updateGuest = (i: number, field: keyof GuestEntry, val: string | number | boolean) => {
    if (validationError) setValidation("");
    setForm((p) => { const g = [...p.guests]; g[i] = { ...g[i], [field]: val }; return { ...p, guests: g }; });
  };
  const adjustCount = (i: number, field: "adults" | "kids", delta: number) => {
    setForm((p) => {
      const g = [...p.guests]; const min = field === "adults" ? 1 : 0;
      g[i] = { ...g[i], [field]: Math.max(min, Math.min(20, g[i][field] + delta)) };
      return { ...p, guests: g };
    });
  };
  const addGuest    = () => setForm((p) => ({ ...p, guests: [...p.guests, defaultGuest()] }));
  const removeGuest = (i: number) => { if (form.guests.length > 1) setForm((p) => ({ ...p, guests: p.guests.filter((_, idx) => idx !== i) })); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    for (let i = 0; i < form.guests.length; i++) {
      const g = form.guests[i];
      if (!g.name.trim()) { setValidation(`Please enter a name for Guest ${i + 1}.`); return; }
      if (!g.attending)   { setValidation(`Please confirm attendance for ${g.name || `Guest ${i + 1}`}.`); return; }
      if (g.attending === "accepts") {
        const keys = ["mehendi","engagement","haldi","ceremony","wedding","reception"] as const;
        if (!keys.some((k) => g[k])) { setValidation(`Please select at least one event for ${g.name || `Guest ${i + 1}`}.`); return; }
      }
    }
    setValidation("");
    setSubmitState("submitting");
    try {
      const res = await fetch("https://wa3r5hutq1.execute-api.us-east-1.amazonaws.com/api/rsvp", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitState("success");
        requestAnimationFrame(() => document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth", block: "start" }));
      } else { setSubmitState("error"); }
    } catch { setSubmitState("error"); }
  };

  const allDeclined = form.guests.length > 0 && form.guests.every((g) => g.attending === "declines");

  return (
    <section id="rsvp" className="py-20 px-4 sm:px-6 relative overflow-hidden" style={{ background: "#0B0B0B" }}>
      <div className="absolute top-0 -right-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,162,75,0.14), transparent 70%)" }} />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.2em", color: "#C9A24B", textTransform: "uppercase" }}>
            Apoorva &amp; Charan
          </p>
          <h2 className="festive-text mt-2" style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 6vw, 3.6rem)" }}>
            Will you join us?
          </h2>
          <div className="squiggle mt-4 mb-5" />
          <p style={{ fontFamily: "'Cormorant Garamond', serif", color: "#D9D2C4", fontSize: "1.05rem", maxWidth: 460, margin: "0 auto" }}>
            Will you be joining us in celebration? Come and bless us — <span style={{ color: "#E7CE8E", fontWeight: 600 }}>your presence makes us more happy.</span>
          </p>
          <p className="mt-3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.8rem", color: "#9AA4BD" }}>
            Please respond by <strong style={{ color: "#C9A24B" }}>October 1, 2026</strong>
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitState === "success" ? (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
              className="relative text-center py-16 px-8 overflow-hidden" style={{ ...panelStyle }}>
              <Confetti count={40} />
              <div style={{ fontSize: "3.4rem", marginBottom: "0.6rem" }}>{allDeclined ? "🙏" : "🎉"}</div>
              <h3 className="festive-text" style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "1.9rem" }}>
                {allDeclined ? "We'll miss you!" : "With joy, you're confirmed"}
              </h3>
              <p className="mt-3" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#D9D2C4" }}>
                {allDeclined
                  ? "Thank you for letting us know. We'll keep you in our hearts. 💛"
                  : "Your RSVP is confirmed. A confirmation email is on its way! 💌"}
              </p>
            </motion.div>
          ) : (
            <motion.form key="form" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit} className="space-y-5" noValidate>

              {/* Contact */}
              <div style={panelStyle}>
                <p style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "1.1rem", color: "#F4EFE4", marginBottom: "1rem" }}>👋 Your details</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label style={labelStyle}>Your name *</label>
                    <input required type="text" placeholder="Full name" value={form.primaryName}
                      onChange={(e) => setForm((p) => ({ ...p, primaryName: e.target.value }))} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input required type="email" placeholder="your@email.com" value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone (optional)</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} />
                  </div>
                  <div>
                    <label style={labelStyle}>Meal preference</label>
                    <select value={form.meal} onChange={(e) => setForm((p) => ({ ...p, meal: e.target.value }))} style={{ cursor: "pointer" }}>
                      {mealOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div style={panelStyle}>
                <p style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "1.1rem", color: "#F4EFE4", marginBottom: "0.3rem" }}>🎊 Who&apos;s coming?</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: "#9AA4BD", marginBottom: "1.2rem" }}>
                  Add each guest, confirm attendance, and pick the events they&apos;ll join.
                </p>

                <div className="space-y-5">
                  {form.guests.map((guest, i) => (
                    <div key={i} style={{ border: "2px solid rgba(246,236,251,0.12)", borderRadius: 18, padding: "1.1rem", background: "#141414" }}>
                      <div className="flex items-center justify-between mb-3">
                        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", color: "#E7CE8E", textTransform: "uppercase" }}>Guest {i + 1}</span>
                        {i > 0 && (
                          <button type="button" onClick={() => removeGuest(i)}
                            style={{ color: "#E63946", fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.72rem", background: "none", border: "none", cursor: "pointer" }}>
                            Remove
                          </button>
                        )}
                      </div>

                      <div className="mb-4">
                        <label style={labelStyle}>Guest name *</label>
                        <input type="text" placeholder="Full name" value={guest.name}
                          onChange={(e) => updateGuest(i, "name", e.target.value)} />
                      </div>

                      {/* Accepts / Declines */}
                      <div className="mb-4">
                        <label style={labelStyle}>Attendance *</label>
                        <div className="grid grid-cols-2 gap-3">
                          {(["accepts", "declines"] as const).map((choice) => {
                            const active = guest.attending === choice;
                            const c = choice === "accepts" ? "#2A9D8F" : "#E63946";
                            return (
                              <button key={choice} type="button" onClick={() => updateGuest(i, "attending", choice)}
                                style={{
                                  padding: "0.75rem", borderRadius: 999,
                                  border: `2px solid ${active ? c : "rgba(246,236,251,0.2)"}`,
                                  background: active ? c : "#141414", color: active ? "#fff" : "#D9D2C4",
                                  fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.8rem",
                                  cursor: "pointer", transition: "all 0.15s",
                                }}>
                                {choice === "accepts" ? "✓ Joyfully Accepts" : "✕ Regretfully Declines"}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {guest.attending === "accepts" && (
                        <>
                          <div className="grid grid-cols-2 gap-3 mb-3">
                            {(["adults", "kids"] as const).map((field) => (
                              <div key={field} className="flex items-center justify-between p-3" style={{ border: "2px solid rgba(246,236,251,0.12)", borderRadius: 14 }}>
                                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.72rem", color: "#D9D2C4", textTransform: "uppercase" }}>{field}</span>
                                <div className="flex items-center gap-2">
                                  <button type="button" onClick={() => adjustCount(i, field, -1)} aria-label={`less ${field}`}
                                    style={{ width: 30, height: 30, borderRadius: 999, border: "none", background: "#1C1712", color: "#E7CE8E", fontSize: "1.1rem", fontWeight: 700, cursor: "pointer" }}>−</button>
                                  <span style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "1.1rem", minWidth: "1.4rem", textAlign: "center", color: "#F4EFE4" }}>{guest[field]}</span>
                                  <button type="button" onClick={() => adjustCount(i, field, 1)} aria-label={`more ${field}`}
                                    style={{ width: 30, height: 30, borderRadius: 999, border: "none", background: "#1C1712", color: "#E7CE8E", fontSize: "1.1rem", fontWeight: 700, cursor: "pointer" }}>+</button>
                                </div>
                              </div>
                            ))}
                          </div>

                          <label style={labelStyle}>Events attending *</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {weddingEvents.map((ev) => {
                              const on = guest[ev.key];
                              return (
                                <label key={ev.key} className="flex items-center gap-2 cursor-pointer p-2"
                                  style={{ borderRadius: 999, border: `2px solid ${on ? ev.color : "rgba(246,236,251,0.18)"}`, background: on ? `${ev.color}26` : "#141414", transition: "all 0.15s" }}>
                                  <input type="checkbox" checked={on} onChange={(e) => updateGuest(i, ev.key, e.target.checked)} className="sr-only" />
                                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: on ? 700 : 500, fontSize: "0.74rem", color: on ? ev.color : "#D9D2C4" }}>
                                    {ev.emoji} {ev.label}
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                <button type="button" onClick={addGuest} className="btn-outline mt-4 w-full" style={{ borderStyle: "dashed" }}>
                  + Add another guest
                </button>
              </div>

              {/* Extras */}
              <div style={panelStyle}>
                <p style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "1.1rem", color: "#F4EFE4", marginBottom: "1rem" }}>✨ A few more things</p>
                <div className="space-y-4">
                  <div>
                    <label style={labelStyle}>🎵 Song request for the party</label>
                    <input type="text" placeholder="What should we play?" value={form.songRequest}
                      onChange={(e) => setForm((p) => ({ ...p, songRequest: e.target.value }))} />
                  </div>
                  <div>
                    <label style={labelStyle}>💌 Message for Apoorva &amp; Charan</label>
                    <textarea rows={4} placeholder="Share a wish or your blessings…" value={form.message}
                      onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} style={{ resize: "vertical" }} />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="text-center pt-2">
                {validationError && (
                  <div className="mb-5 inline-block" style={{ color: "#FF7A8A", fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, background: "#3A1F2A", border: "2px solid #6B2A3A", borderRadius: 14, padding: "0.7rem 1.25rem" }}>
                    ⚠ {validationError}
                  </div>
                )}
                <motion.button type="submit" disabled={submitState === "submitting"}
                  whileHover={submitState !== "submitting" ? { scale: 1.03, y: -2 } : {}}
                  whileTap={submitState !== "submitting" ? { scale: 0.98 } : {}}
                  className="btn-fest" style={{ minWidth: 240, fontSize: "0.95rem" }}>
                  {submitState === "submitting" ? "Sending…" : "Send RSVP"}
                </motion.button>
                {submitState === "error" && (
                  <p className="mt-4" style={{ color: "#E63946", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem" }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
                <p className="mt-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.72rem", color: "#9AA4BD" }}>
                  A confirmation email will be sent after we receive your RSVP.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
