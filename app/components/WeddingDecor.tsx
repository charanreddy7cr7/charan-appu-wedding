"use client";

/**
 * WeddingDecor — traditional South-Indian wedding frame decoration.
 * Fixed overlay (pointer-events none) that frames the whole page with:
 *  • dark ornamental carved vertical borders on both edges
 *  • an orange outline frame
 *  • white jasmine (mallepoolu) garlands hanging vertically
 *  • golden bead / pearl strings beside the flowers
 *  • small golden temple bells suspended from the strings
 *  • faint floral motifs along the edges
 *  • banana leaves rising from the lower corners
 *
 * Sits behind page content (z-0) so text stays readable.
 */

/* ── A single hanging garland column: bead string + jasmine + a bell ── */
function GarlandColumn({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="70"
      height="100%"
      viewBox="0 0 70 900"
      preserveAspectRatio="xMidYMin slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      {/* short suspension line for the bell */}
      <line x1="20" y1="0" x2="20" y2="810" stroke="#C9A24B" strokeWidth="1" opacity="0.4" />

      {/* small golden temple bell suspended at the bottom */}
      <g transform="translate(20 828)">
        <line x1="0" y1="-8" x2="0" y2="0" stroke="#C9A24B" strokeWidth="1.2" />
        <path d="M-9 18 Q-9 2 0 0 Q9 2 9 18 Z" fill="#E7CE8E" stroke="#A07E2E" strokeWidth="0.8" />
        <ellipse cx="0" cy="18" rx="9" ry="2.5" fill="#C9A24B" />
        <circle cx="0" cy="22" r="2.2" fill="#A07E2E" />
      </g>
    </svg>
  );
}

export default function WeddingDecor() {
  return (
    <div className="fixed inset-0 z-30 pointer-events-none" aria-hidden="true">
      {/* Orange side borders only (no top/bottom) */}
      <div className="absolute top-0 bottom-0" style={{ left: "8px", width: "2px", background: "#E8871E", opacity: 0.85 }} />
      <div className="absolute top-0 bottom-0" style={{ right: "8px", width: "2px", background: "#E8871E", opacity: 0.85 }} />

      {/* Dark ornamental carved vertical borders on both edges */}
      <div className="absolute top-0 bottom-0 left-0" style={{
        width: "34px",
        background: "linear-gradient(90deg, #021710 0%, #063024 70%, transparent 100%)",
        borderRight: "1px solid rgba(201,162,75,0.35)",
      }} />
      <div className="absolute top-0 bottom-0 right-0" style={{
        width: "34px",
        background: "linear-gradient(270deg, #021710 0%, #063024 70%, transparent 100%)",
        borderLeft: "1px solid rgba(201,162,75,0.35)",
      }} />

      {/* Carved gold motif dots along both edges */}
      {[0, 1].map((side) => (
        <div key={side} className="absolute top-0 bottom-0 flex flex-col justify-around items-center"
          style={{ [side ? "right" : "left"]: 0, width: "34px" } as React.CSSProperties}>
          {Array.from({ length: 22 }).map((_, i) => (
            <span key={i} style={{ color: "#C9A24B", fontSize: "0.7rem", opacity: 0.45 }}>❖</span>
          ))}
        </div>
      ))}

      {/* Hanging garlands + bead strings + bells, just inside each edge */}
      <div className="absolute top-0 bottom-0" style={{ left: "34px", height: "100%" }}>
        <GarlandColumn />
      </div>
      <div className="absolute top-0 bottom-0" style={{ right: "34px", height: "100%" }}>
        <GarlandColumn flip />
      </div>

    </div>
  );
}
