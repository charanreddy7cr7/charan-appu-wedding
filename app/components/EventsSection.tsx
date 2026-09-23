"use client";

import { motion } from "framer-motion";

interface EventItem {
  id: string; emoji: string; name: string; date: string; time: string;
  venue: string; dress: string; color: string; tilt: number;
}

const events: EventItem[] = [
  { id: "mehendi",    emoji: "🤚", name: "Mehendi",   date: "Thu, Nov 19", time: "6:00 – 8:00 PM",  venue: "[Venue TBD]", dress: "Maroon", color: "#8E1537", tilt: -2 },
  { id: "engagement", emoji: "💍", name: "Engagement", date: "Fri, Nov 20", time: "10:00 AM – 12 PM", venue: "[Venue TBD]", dress: "Red", color: "#E63946", tilt: 1.5 },
  { id: "haldi",      emoji: "☀️", name: "Haldi",      date: "Fri, Nov 20", time: "1:00 – 4:00 PM",  venue: "[Venue TBD]", dress: "Beach Pink", color: "#FF6FB5", tilt: -1.5 },
  { id: "ceremony",   emoji: "🪔", name: "Bride & Groom Ceremony", date: "Fri, Nov 20", time: "5:00 – 7:00 PM", venue: "[Venue TBD]", dress: "White", color: "#C9A24B", tilt: 2 },
  { id: "wedding",    emoji: "🪷", name: "Wedding",    date: "Sat, Nov 21", time: "10:00 AM onwards", venue: "[Venue TBD]", dress: "Half-White & Green", color: "#2A9D8F", tilt: -2 },
  { id: "reception",  emoji: "🎉", name: "Reception",  date: "Sun, Nov 22", time: "6:00 PM – 12 AM", venue: "[Venue TBD]", dress: "Black", color: "#F4EFE4", tilt: 1.5 },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 px-6 relative overflow-hidden" style={{ background: "#12213F" }}>
      {/* Playful blobs */}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: e.tilt }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ rotate: 0, y: -8, scale: 1.03 }}
              className="fest-card overflow-hidden"
            >
              {/* Colour header band */}
              <div className="flex items-center justify-center" style={{ background: e.color, height: 96 }}>
                <span style={{ fontSize: "3rem" }}>{e.emoji}</span>
              </div>
              <div className="p-6">
                <h3 style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, fontSize: "1.3rem", color: "#F4EFE4" }}>
                  {e.name}
                </h3>
                <div className="mt-3 space-y-1.5">
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.9rem", color: e.color }}>
                    📅 {e.date}
                  </p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: "#D9D2C4" }}>
                    🕙 {e.time}
                  </p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: "#D9D2C4" }}>
                    📍 {e.venue}
                  </p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{ background: `${e.color}18` }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.72rem", color: e.color }}>
                    👗 Dress code: {e.dress}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
