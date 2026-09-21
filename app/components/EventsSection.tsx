"use client";

import { motion } from "framer-motion";

interface Event {
  id: string;
  emoji: string;
  name: string;
  subtitle: string;
  date: string;
  time: string;
  venueName: string;
  venueAddress: string;
  mapQuery: string;
  description: string;
  dress: string;
  bg: string;
  accent: string;
  accentLight: string;
  textColor: string;
  textMuted: string;
}

const events: Event[] = [
  {
    id: "mehendi",
    emoji: "🤚",
    name: "MEHENDI",
    subtitle: "Henna · Music · Evening Celebration",
    date: "Wednesday, November 19, 2026",
    time: "6:00 PM – 8:00 PM",
    venueName: "[Venue Name TBD]",
    venueAddress: "[Hall Name & Address]",
    mapQuery: "Texas",
    description:
      "An evening of intricate henna art, joyful music, and togetherness as the wedding festivities begin. Watch skilled artists weave beautiful patterns on hands that are about to hold each other forever.",
    dress: "Maroon & deep jewel tones encouraged",
    // Maroon theme
    bg: "linear-gradient(135deg, #2D0A0A 0%, #5C1A1A 50%, #7A1F1F 100%)",
    accent: "#C0392B",
    accentLight: "rgba(192,57,43,0.15)",
    textColor: "#FFE8E8",
    textMuted: "rgba(255,232,232,0.7)",
  },
  {
    id: "engagement",
    emoji: "💍",
    name: "ENGAGEMENT",
    subtitle: "Rings · Blessings · Family Celebration",
    date: "Thursday, November 20, 2026",
    time: "10:00 AM – 12:00 PM",
    venueName: "[Venue Name TBD]",
    venueAddress: "[Hall Name & Address]",
    mapQuery: "Texas",
    description:
      "The official exchange of rings as both families come together to bless Apoorva and Charan. A beautiful morning ceremony filled with joy, followed by a celebratory lunch.",
    dress: "Red & festive Indian formals",
    // Red theme
    bg: "linear-gradient(135deg, #3B0000 0%, #7F0000 50%, #A50000 100%)",
    accent: "#E53935",
    accentLight: "rgba(229,57,53,0.15)",
    textColor: "#FFE9E9",
    textMuted: "rgba(255,233,233,0.7)",
  },
  {
    id: "haldi",
    emoji: "☀️",
    name: "HALDI",
    subtitle: "Turmeric · Traditions · Blessings",
    date: "Thursday, November 20, 2026",
    time: "1:00 PM – 4:00 PM",
    venueName: "[Venue Name TBD]",
    venueAddress: "[Hall Name & Address]",
    mapQuery: "Texas",
    description:
      "A vibrant and joyful ceremony where family and friends anoint the couple with turmeric paste as a blessing for a radiant life ahead. Wear something you don't mind getting colourful!",
    dress: "Beach Pink & light pastels — wear something fun!",
    // Beach Pink theme
    bg: "linear-gradient(135deg, #4A1530 0%, #8B3A5A 50%, #C05B80 100%)",
    accent: "#F48FB1",
    accentLight: "rgba(244,143,177,0.15)",
    textColor: "#FFE8F2",
    textMuted: "rgba(255,232,242,0.7)",
  },
  {
    id: "ceremony",
    emoji: "🪔",
    name: "BRIDE & GROOM CEREMONY",
    subtitle: "Pelli Kuthuru · Pelli Koduku",
    date: "Thursday, November 20, 2026",
    time: "5:00 PM – 7:00 PM",
    venueName: "[Venue Name TBD]",
    venueAddress: "[Hall Name & Address]",
    mapQuery: "Texas",
    description:
      "A sacred pre-wedding Telugu ritual in which the bride (Pelli Kuthuru) and groom (Pelli Koduku) are anointed and blessed separately by their respective families, preparing them for the sacred bond ahead.",
    dress: "Traditional Indian formals · White encouraged",
    // White / ivory theme
    bg: "linear-gradient(135deg, #3A3A2A 0%, #5A5A3A 50%, #7A7A50 100%)",
    accent: "#F5F5DC",
    accentLight: "rgba(245,245,220,0.12)",
    textColor: "#FFFFF0",
    textMuted: "rgba(255,255,240,0.7)",
  },
  {
    id: "wedding",
    emoji: "🪷",
    name: "WEDDING",
    subtitle: "The Sacred Union · Marriage Ceremony",
    date: "Friday, November 21, 2026",
    time: "10:00 AM onwards",
    venueName: "[Venue Name TBD]",
    venueAddress: "[Hall Name & Address]",
    mapQuery: "Texas",
    description:
      "The moment two families become one. In the presence of family, God, and sacred fire, Apoorva Reddy Gonegari and Charan Reddy Jaidi exchange vows and begin their forever together.",
    dress: "Traditional Telugu wedding attire · Half-white & green sarees / sherwanis",
    // Half white & green theme
    bg: "linear-gradient(135deg, #0D2A1A 0%, #1A4D2E 40%, #2D7A47 80%, #F5FFF5 100%)",
    accent: "#52B788",
    accentLight: "rgba(82,183,136,0.15)",
    textColor: "#E8FFF0",
    textMuted: "rgba(232,255,240,0.7)",
  },
  {
    id: "reception",
    emoji: "🎉",
    name: "RECEPTION",
    subtitle: "Post-Wedding Family Celebration",
    date: "Saturday, November 22, 2026",
    time: "6:00 PM – 12:00 AM",
    venueName: "[Venue Name TBD]",
    venueAddress: "[Hall Name & Address]",
    mapQuery: "Texas",
    description:
      "An elegant evening celebration to welcome the newly wed couple. Dance, dine, and revel under the lights as we toast to Apoorva and Charan's forever. Black-tie glamour meets joyful celebration.",
    dress: "Black & formal — dress to impress under the lights ✨",
    // Black / dark mode aesthetic
    bg: "linear-gradient(135deg, #000000 0%, #0D0D0D 40%, #1A1A1A 70%, #0A0A0A 100%)",
    accent: "#BB86FC",
    accentLight: "rgba(187,134,252,0.12)",
    textColor: "#E8E0FF",
    textMuted: "rgba(232,224,255,0.65)",
  },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      className="py-16 px-4 sm:px-6 relative"
      style={{ background: "#FBF6EC" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px 200px 0px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <p
          className="tracking-[0.3em] text-xs mb-4"
          style={{ color: "#B8860B", fontFamily: "'Lato', sans-serif", fontWeight: 600 }}
        >
          6 CELEBRATIONS · NOVEMBER 19–22, 2026
        </p>
        <h2
          className="gold-text"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            letterSpacing: "0.1em",
          }}
        >
          The Wedding Festival
        </h2>
        <div className="section-divider mt-5 mb-5" />
        <p style={{ color: "#7A5A2E", fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic", fontSize: "1.1rem", fontWeight: 400 }}>
          Apoorva Reddy Gonegari &amp; Charan Reddy Jaidi
        </p>
      </motion.div>

      {/* Event Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative overflow-hidden flex flex-col"
            style={{
              background: event.bg,
              border: `1px solid ${event.accent}44`,
              boxShadow: `0 4px 24px ${event.accent}22`,
              borderRadius: "6px",
              minHeight: "340px",
            }}
          >
            {/* Subtle glow overlay on hover */}
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at center, ${event.accentLight}, transparent 70%)` }}
            />

            {/* Corner accents */}
            <span className="absolute top-3 left-3 w-4 h-4 border-t border-l" style={{ borderColor: event.accent }} />
            <span className="absolute top-3 right-3 w-4 h-4 border-t border-r" style={{ borderColor: event.accent }} />
            <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l" style={{ borderColor: event.accent }} />
            <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r" style={{ borderColor: event.accent }} />

            <div className="relative z-10 p-6 flex flex-col flex-1">
              {/* Emoji + name */}
              <span className="text-3xl mb-3">{event.emoji}</span>
              <h3
                className="mb-1"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.9rem",
                  letterSpacing: "0.12em",
                  color: event.accent,
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                {event.name}
              </h3>
              <p
                className="italic mb-4"
                style={{
                  color: event.textMuted,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.9rem",
                }}
              >
                {event.subtitle}
              </p>

              {/* Description */}
              {event.description && (
                <p style={{ color: event.textMuted, fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {event.description}
                </p>
              )}

              {/* Date / time / dress — pushed to bottom */}
              <div className="mt-auto">
                {/* Date & time */}
                <div className="mb-3">
                  <p style={{ color: event.accent, fontFamily: "'Lato', sans-serif",
                    fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.05em",
                    marginBottom: "2px" }}>
                    📅 {event.date}
                  </p>
                  <p style={{ color: event.textColor, fontFamily: "'Lato', sans-serif",
                    fontWeight: 500, fontSize: "0.85rem" }}>
                    🕙 {event.time}
                  </p>
                </div>

                {/* Dress code */}
                <div
                  className="mb-4 px-3 py-2"
                  style={{ background: `${event.accent}18`, borderLeft: `2px solid ${event.accent}` }}
                >
                  <p style={{ color: event.textMuted, fontFamily: "'Lato', sans-serif",
                    fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase",
                    marginBottom: "2px", fontWeight: 600 }}>
                    DRESS CODE
                  </p>
                  <p style={{ color: event.textColor, fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic", fontSize: "0.9rem" }}>
                    {event.dress}
                  </p>
                </div>

                {/* Venue + directions */}
                <div
                  className="pt-3"
                  style={{ borderTop: `1px solid ${event.accent}33` }}
                >
                  <p style={{ color: event.textColor, fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.88rem", marginBottom: "2px" }}>
                    📍 {event.venueName}
                  </p>
                  <p style={{ color: event.textMuted, fontFamily: "'Lato', sans-serif",
                    fontWeight: 300, fontSize: "0.72rem", marginBottom: "10px" }}>
                    {event.venueAddress}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${event.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs tracking-[0.15em] px-3 py-2 transition-all duration-300"
                    style={{
                      border: `1px solid ${event.accent}66`,
                      color: event.accent,
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 500,
                      textDecoration: "none",
                      borderRadius: "2px",
                      fontSize: "0.68rem",
                    }}
                  >
                    GET DIRECTIONS →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeline summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-2xl mx-auto mt-14"
        style={{ background: "rgba(255, 253, 247, 0.85)", border: "1.5px solid rgba(201,168,76,0.25)",
          borderRadius: "6px", padding: "1.5rem 2rem" }}
      >
        <p style={{ color: "#B8860B", fontFamily: "'Lato', sans-serif", fontWeight: 700,
          fontSize: "0.65rem", letterSpacing: "0.26em", textTransform: "uppercase",
          marginBottom: "1rem", textAlign: "center" }}>
          AT A GLANCE
        </p>
        <div className="space-y-2">
          {[
            { day: "Wed, Nov 19", event: "Mehendi", time: "6–8 PM" },
            { day: "Thu, Nov 20", event: "Engagement + Haldi + Ceremony", time: "10 AM – 7 PM" },
            { day: "Fri, Nov 21", event: "Wedding 🪷", time: "10 AM onwards" },
            { day: "Sat, Nov 22", event: "Reception 🎉", time: "6 PM – 12 AM" },
          ].map((row) => (
            <div key={row.day} className="flex items-center justify-between gap-4 flex-wrap">
              <span style={{ color: "#B8860B", fontFamily: "'Lato', sans-serif",
                fontWeight: 600, fontSize: "0.75rem", minWidth: "110px" }}>
                {row.day}
              </span>
              <span style={{ color: "#4A3728", fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1rem", flex: 1 }}>
                {row.event}
              </span>
              <span style={{ color: "#7A5A2E", fontFamily: "'Lato', sans-serif",
                fontSize: "0.75rem" }}>
                {row.time}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
