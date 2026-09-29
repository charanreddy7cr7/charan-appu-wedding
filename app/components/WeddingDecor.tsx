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
      {/* golden pearl/bead string */}
      <line x1="20" y1="0" x2="20" y2="820" stroke="#C9A24B" strokeWidth="1.5" opacity="0.7" />
      {Array.from({ length: 46 }).map((_, i) => (
        <circle key={`b${i}`} cx="20" cy={10 + i * 18} r="3" fill="#E7CE8E"
          stroke="#A07E2E" strokeWidth="0.5" opacity="0.9" />
      ))}

      {/* white jasmine garland strand */}
      <line x1="46" y1="0" x2="46" y2="760" stroke="#D9CFA8" strokeWidth="1" opacity="0.5" />
      {Array.from({ length: 38 }).map((_, i) => {
        const cy = 14 + i * 20;
        return (
          <g key={`j${i}`}>
            {/* jasmine flower — 5 tiny petals */}
            {[0, 72, 144, 216, 288].map((a) => {
              const rad = (a * Math.PI) / 180;
              return (
                <ellipse key={a}
                  cx={46 + Math.cos(rad) * 3.4}
                  cy={cy + Math.sin(rad) * 3.4}
                  rx="2.4" ry="1.4"
                  fill="#FFFDF6"
                  transform={`rotate(${a} ${46 + Math.cos(rad) * 3.4} ${cy + Math.sin(rad) * 3.4})`}
                  opacity="0.95" />
              );
            })}
            <circle cx="46" cy={cy} r="1.4" fill="#F0DCA0" />
          </g>
        );
      })}

      {/* small golden temple bell suspended at the bottom */}
      <g transform="translate(20 828)">
        <line x1="0" y1="-8" x2="0" y2="0" stroke="#C9A24B" strokeWidth="1.2" />
        <path d="M-9 18 Q-9 2 0 0 Q9 2 9 18 Z" fill="#E7CE8E" stroke="#A07E2E" strokeWidth="0.8" />
        <ellipse cx="0" cy="18" rx="9" ry="2.5" fill="#C9A24B" />
        <circle cx="0" cy="22" r="2.2" fill="#A07E2E" />
      </g>
      <g transform="translate(46 770)">
        <line x1="0" y1="-8" x2="0" y2="0" stroke="#C9A24B" strokeWidth="1" />
        <path d="M-7 14 Q-7 2 0 0 Q7 2 7 14 Z" fill="#E7CE8E" stroke="#A07E2E" strokeWidth="0.7" />
        <ellipse cx="0" cy="14" rx="7" ry="2" fill="#C9A24B" />
        <circle cx="0" cy="17" r="1.8" fill="#A07E2E" />
      </g>
    </svg>
  );
}

/* ── Banana leaf rising from a lower corner ── */
function BananaLeaf({ flip = false }: { flip?: boolean }) {
  return (
    <svg width="150" height="300" viewBox="0 0 150 300" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? "scaleX(-1)" : undefined }} aria-hidden="true">
      <defs>
        <linearGradient id={`leaf${flip ? "R" : "L"}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0F5C34" />
          <stop offset="60%" stopColor="#1E7D46" />
          <stop offset="100%" stopColor="#3FA968" />
        </linearGradient>
      </defs>
      {/* main blade curving upward */}
      <path d="M20 300 C 10 200, 30 90, 80 20 C 95 60, 90 150, 60 240 C 48 275, 34 292, 20 300 Z"
        fill={`url(#leaf${flip ? "R" : "L"})`} opacity="0.9" />
      {/* midrib */}
      <path d="M20 300 C 25 210, 45 110, 82 22" stroke="#0B4A29" strokeWidth="1.6" fill="none" opacity="0.8" />
      {/* veins */}
      {Array.from({ length: 9 }).map((_, i) => {
        const t = i / 8;
        const x = 20 + t * 60;
        const y = 300 - t * 278;
        return <path key={i} d={`M${x} ${y} q 18 -8 30 -26`} stroke="#0B4A29" strokeWidth="0.7" fill="none" opacity="0.5" />;
      })}
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

      {/* Banana leaves rising from the lower corners */}
      <div className="absolute bottom-0 left-8"><BananaLeaf /></div>
      <div className="absolute bottom-0 right-8"><BananaLeaf flip /></div>
    </div>
  );
}
