"use client";

import { motion } from "framer-motion";

interface EventItem {
  id: string;
  emoji: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  dress: string;
  /** full card background */
  bg: string;
  /** primary accent (borders, date) */
  accent: string;
  /** heading + body text colour */
  text: string;
  /** muted text colour */
  textMuted: string;
  /** dress-code chip bg */
  chipBg: string;
  tilt: number;
}

const events: EventItem[] = [
  {
    id: "mehendi", emoji: "🤚", name: "Mehendi",
    date: "Thu, Nov 19", time: "6:00 – 8:00 PM", venue: "[Venue TBD]", dress: "Maroon",
    // Complete maroon
    bg: "linear-gradient(160deg, #4A0D22 0%, #6E1533 55%, #3A0A1B 100%)",
    accent: "#F0A9C0", text: "#FCE9EF", textMuted: "#E3B8C6", chipBg: "rgba(255,255,255,0.12)", tilt: -2,
  },
  {
    id: "engagement", emoji: "💍", name: "Engagement",
    date: "Fri, Nov 20", time: "10:00 AM – 12 PM", venue: "[Venue TBD]", dress: "Red",
    // Red
    bg: "linear-gradient(160deg, #8E1116 0%, #C1121F 55%, #7A0E14 100%)",
    accent: "#FFD2C0", text: "#FFECE8", textMuted: "#F4C3B8", chipBg: "rgba(255,255,255,0.14)", tilt: 1.5,
  },
  {
    id: "haldi", emoji: "☀️", name: "Haldi",
    date: "Fri, Nov 20", time: "1:00 – 4:00 PM", venue: "[Venue TBD]", dress: "Beach Pink",
    // Beach pink
    bg: "linear-gradient(160deg, #FF9CC7 0%, #FF6FB5 55%, #F25FA6 100%)",
    accent: "#7A1F4D", text: "#4A0E2E", textMuted: "#7A2A52", chipBg: "rgba(255,255,255,0.4)", tilt: -1.5,
  },
  {
    id: "ceremony", emoji: "🪔", name: "Bride & Groom Ceremony",
    date: "Fri, Nov 20", time: "5:00 – 7:00 PM", venue: "[Venue TBD]", dress: "White",
    // White / ivory
    bg: "linear-gradient(160deg, #FFFFFF 0%, #F4F0E6 55%, #EDE7D6 100%)",
    accent: "#B08A34", text: "#2B2415", textMuted: "#6E6350", chipBg: "rgba(176,138,52,0.14)", tilt: 2,
  },
  {
    id: "wedding", emoji: "🪷", name: "Wedding",
    date: "Sat, Nov 21", time: "10:00 AM onwards", venue: "[Venue TBD]", dress: "Antique Gold",
    // Antique gold
    bg: "linear-gradient(160deg, #E7CE8E 0%, #C9A24B 55%, #A07E2E 100%)",
    accent: "#4A3611", text: "#2E2208", textMuted: "#5C4A1E", chipBg: "rgba(46,34,8,0.1)", tilt: -2,
  },
  {
    id: "reception", emoji: "🎉", name: "Reception",
    date: "Sun, Nov 22", time: "6:00 PM – 12 AM", venue: "[Venue TBD]", dress: "Black · Neon Lights",
    // Black with neon black-light accents
    bg: "linear-gradient(160deg, #050509 0%, #0E0A1A 55%, #000000 100%)",
    accent: "#B57BFF", text: "#EDE6FF", textMuted: "#9C8FC7", chipBg: "rgba(181,123,255,0.16)", tilt: 1.5,
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 px-6 relative overflow-hidden" style={{ background: "#0B1834" }}>
      <div className="absolute top-10 -left-16 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,162,75,0.14), transparent 70%)" }} />
      <div className="absolute bottom-10 -right-16 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(231,206,142,0.1), transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.24em", color: "#C9A24B", textTransform: "uppercase" }}>
            6 Celebrations · Nov 19–22
          </p>
          <h2 className="festive-text mt-3" style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "clamp(2.2rem, 6vw, 3.6rem)" }}>
            Wedding Celebration
          </h2>
          <div className="squiggle mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {events.map((e, i) => {
            const isReception = e.id === "reception";
            return (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative overflow-hidden"
                style={{
                  background: e.bg,
                  borderRadius: 18,
                  border: `1.5px solid ${e.accent}55`,
                  boxShadow: isReception
                    ? `0 14px 40px rgba(0,0,0,0.6), 0 0 26px ${e.accent}40`
                    : `0 14px 36px rgba(0,0,0,0.35)`,
                  padding: "1.6rem",
                  minHeight: 300,
                }}
              >
                {/* Corner flourishes */}
                <span style={{ position: "absolute", top: 12, left: 12, width: 18, height: 18, borderTop: `1.5px solid ${e.accent}`, borderLeft: `1.5px solid ${e.accent}`, opacity: 0.7 }} />
                <span style={{ position: "absolute", top: 12, right: 12, width: 18, height: 18, borderTop: `1.5px solid ${e.accent}`, borderRight: `1.5px solid ${e.accent}`, opacity: 0.7 }} />
                <span style={{ position: "absolute", bottom: 12, left: 12, width: 18, height: 18, borderBottom: `1.5px solid ${e.accent}`, borderLeft: `1.5px solid ${e.accent}`, opacity: 0.7 }} />
                <span style={{ position: "absolute", bottom: 12, right: 12, width: 18, height: 18, borderBottom: `1.5px solid ${e.accent}`, borderRight: `1.5px solid ${e.accent}`, opacity: 0.7 }} />

                {/* Neon glow ring for reception */}
                {isReception && (
                  <motion.span
                    aria-hidden
                    animate={{ opacity: [0.4, 0.9, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
                    style={{ position: "absolute", inset: 0, borderRadius: 18, boxShadow: `inset 0 0 40px ${e.accent}44`, pointerEvents: "none" }}
                  />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Emoji medallion */}
                  <div className="flex items-center justify-center mx-auto mb-4"
                    style={{ width: 68, height: 68, borderRadius: 999, background: e.chipBg, border: `1.5px solid ${e.accent}66`, fontSize: "2rem" }}>
                    {e.emoji}
                  </div>

                  <h3 className="text-center" style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "1.15rem", color: e.text, letterSpacing: "0.03em", lineHeight: 1.3 }}>
                    {e.name}
                  </h3>

                  <div className="mt-3 text-center space-y-1">
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1rem", color: e.accent }}>
                      {e.date}
                    </p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.92rem", color: e.text }}>
                      {e.time}
                    </p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: e.textMuted }}>
                      📍 {e.venue}
                    </p>
                  </div>

                  {/* Dress code chip */}
                  <div className="mt-auto pt-5 flex justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                      style={{ background: e.chipBg, border: `1px solid ${e.accent}55` }}>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.78rem", color: e.text, letterSpacing: "0.02em" }}>
                        Dress code · {e.dress}
                      </span>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
