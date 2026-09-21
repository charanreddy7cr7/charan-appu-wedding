"use client";

// Pure SVG Telugu/South Indian wedding motifs — no external dependencies

export function MandalaCorner({ size = 120, color = "#C9A84C", opacity = 0.4 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" style={{ opacity }}>
      {/* Outer ring */}
      <circle cx="0" cy="0" r="118" stroke={color} strokeWidth="0.5" strokeDasharray="4 3" />
      <circle cx="0" cy="0" r="100" stroke={color} strokeWidth="0.3" />
      {/* Petal ring */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
        <ellipse
          key={i}
          cx={Math.cos((angle * Math.PI) / 180) * 75}
          cy={Math.sin((angle * Math.PI) / 180) * 75}
          rx="10" ry="18"
          transform={`rotate(${angle} ${Math.cos((angle * Math.PI) / 180) * 75} ${Math.sin((angle * Math.PI) / 180) * 75})`}
          stroke={color} strokeWidth="0.6" fill="none"
        />
      ))}
      {/* Inner petals */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <ellipse
          key={i}
          cx={Math.cos((angle * Math.PI) / 180) * 45}
          cy={Math.sin((angle * Math.PI) / 180) * 45}
          rx="7" ry="14"
          transform={`rotate(${angle} ${Math.cos((angle * Math.PI) / 180) * 45} ${Math.sin((angle * Math.PI) / 180) * 45})`}
          stroke={color} strokeWidth="0.5" fill="none"
        />
      ))}
      {/* Center dot ring */}
      {[0,60,120,180,240,300].map((angle, i) => (
        <circle
          key={i}
          cx={Math.cos((angle * Math.PI) / 180) * 20}
          cy={Math.sin((angle * Math.PI) / 180) * 20}
          r="2" fill={color}
        />
      ))}
      <circle cx="0" cy="0" r="6" fill={color} />
      <circle cx="0" cy="0" r="3" fill="none" stroke={color} strokeWidth="0.8" />
    </svg>
  );
}

export function LotusDivider({ color = "#C9A84C", width = 300, opacity = 0.6 }: { color?: string; width?: number; opacity?: number }) {
  return (
    <svg width={width} height="60" viewBox="0 0 300 60" fill="none" style={{ opacity }}>
      {/* Left line */}
      <line x1="0" y1="30" x2="105" y2="30" stroke={color} strokeWidth="0.5" />
      {/* Left small dots */}
      <circle cx="10" cy="30" r="1.5" fill={color} />
      <circle cx="25" cy="30" r="1" fill={color} />
      <circle cx="40" cy="30" r="1.5" fill={color} />
      <circle cx="55" cy="30" r="1" fill={color} />
      <circle cx="70" cy="30" r="1.5" fill={color} />
      <circle cx="85" cy="30" r="1" fill={color} />
      {/* Center lotus */}
      {/* Main petals */}
      <ellipse cx="150" cy="30" rx="6" ry="18" fill="none" stroke={color} strokeWidth="0.8" />
      <ellipse cx="150" cy="30" rx="6" ry="18" transform="rotate(30 150 30)" fill="none" stroke={color} strokeWidth="0.8" />
      <ellipse cx="150" cy="30" rx="6" ry="18" transform="rotate(60 150 30)" fill="none" stroke={color} strokeWidth="0.8" />
      <ellipse cx="150" cy="30" rx="6" ry="18" transform="rotate(90 150 30)" fill="none" stroke={color} strokeWidth="0.8" />
      <ellipse cx="150" cy="30" rx="6" ry="18" transform="rotate(120 150 30)" fill="none" stroke={color} strokeWidth="0.8" />
      <ellipse cx="150" cy="30" rx="6" ry="18" transform="rotate(150 150 30)" fill="none" stroke={color} strokeWidth="0.8" />
      <circle cx="150" cy="30" r="4" fill={color} opacity="0.5" />
      <circle cx="150" cy="30" r="2" fill={color} />
      {/* Right small dots */}
      <circle cx="215" cy="30" r="1" fill={color} />
      <circle cx="230" cy="30" r="1.5" fill={color} />
      <circle cx="245" cy="30" r="1" fill={color} />
      <circle cx="260" cy="30" r="1.5" fill={color} />
      <circle cx="275" cy="30" r="1" fill={color} />
      <circle cx="290" cy="30" r="1.5" fill={color} />
      {/* Right line */}
      <line x1="195" y1="30" x2="300" y2="30" stroke={color} strokeWidth="0.5" />
    </svg>
  );
}

export function KolamBorder({ color = "#C9A84C", opacity = 0.15 }: { color?: string; opacity?: number }) {
  // Repeating kolam/rangoli dot-grid pattern as SVG
  return (
    <svg width="100%" height="40" viewBox="0 0 800 40" preserveAspectRatio="xMidYMid slice" style={{ opacity }}>
      <defs>
        <pattern id="kolam" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
          {/* Kolam-style repeating motif */}
          <circle cx="10" cy="20" r="1.5" fill={color} />
          <circle cx="30" cy="10" r="1" fill={color} />
          <circle cx="30" cy="30" r="1" fill={color} />
          <circle cx="50" cy="20" r="1.5" fill={color} />
          <circle cx="70" cy="10" r="1" fill={color} />
          <circle cx="70" cy="30" r="1" fill={color} />
          <path d="M10,20 Q20,10 30,10 Q40,10 50,20 Q40,30 30,30 Q20,30 10,20Z" stroke={color} strokeWidth="0.4" fill="none" />
          <path d="M50,20 Q60,10 70,10 Q80,10 90,20 Q80,30 70,30 Q60,30 50,20Z" stroke={color} strokeWidth="0.4" fill="none" />
        </pattern>
      </defs>
      <rect width="800" height="40" fill="url(#kolam)" />
    </svg>
  );
}

export function DiyaIcon({ size = 40, color = "#C9A84C", flameColor = "#FF8F00" }: { size?: number; color?: string; flameColor?: string }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 40 52" fill="none">
      {/* Flame */}
      <ellipse cx="20" cy="10" rx="4" ry="7" fill={flameColor} opacity="0.9" />
      <ellipse cx="20" cy="12" rx="2" ry="4" fill="#FFF176" opacity="0.8" />
      {/* Wick */}
      <line x1="20" y1="17" x2="20" y2="22" stroke="#5D4037" strokeWidth="1" />
      {/* Diya body */}
      <path d="M8,28 Q8,22 20,22 Q32,22 32,28 Q32,38 20,40 Q8,38 8,28Z" fill={color} opacity="0.8" />
      <path d="M8,28 Q8,22 20,22 Q32,22 32,28" stroke={color} strokeWidth="1" fill="none" />
      {/* Spout */}
      <path d="M30,26 Q36,24 38,28 Q36,30 32,30" fill={color} opacity="0.7" />
      {/* Glow */}
      <ellipse cx="20" cy="10" rx="8" ry="10" fill={flameColor} opacity="0.1" />
    </svg>
  );
}

export function MangalamSymbol({ size = 60, color = "#C9A84C", opacity = 0.8 }: { size?: number; color?: string; opacity?: number }) {
  // Stylized Om / auspicious symbol
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" style={{ opacity }}>
      <circle cx="30" cy="30" r="28" stroke={color} strokeWidth="0.6" strokeDasharray="3 2" />
      <circle cx="30" cy="30" r="22" stroke={color} strokeWidth="0.4" />
      {/* 8-petal lotus */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <ellipse
          key={i}
          cx={30 + Math.cos((angle * Math.PI) / 180) * 14}
          cy={30 + Math.sin((angle * Math.PI) / 180) * 14}
          rx="5" ry="9"
          transform={`rotate(${angle} ${30 + Math.cos((angle * Math.PI) / 180) * 14} ${30 + Math.sin((angle * Math.PI) / 180) * 14})`}
          stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.1"
        />
      ))}
      <circle cx="30" cy="30" r="5" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="0.8" />
      <circle cx="30" cy="30" r="2" fill={color} />
    </svg>
  );
}

export function PaisleyBorder({ color = "#C9A84C", opacity = 0.2 }: { color?: string; opacity?: number }) {
  return (
    <svg width="100%" height="30" viewBox="0 0 600 30" preserveAspectRatio="xMidYMid slice" style={{ opacity }}>
      <defs>
        <pattern id="paisley" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
          {/* Simplified paisley teardrop */}
          <path d="M10,15 Q10,5 18,5 Q26,5 26,12 Q26,20 18,22 Q12,22 10,15Z" stroke={color} strokeWidth="0.6" fill="none" />
          <circle cx="18" cy="12" r="2" stroke={color} strokeWidth="0.5" fill="none" />
          <path d="M10,15 Q8,18 10,22" stroke={color} strokeWidth="0.5" fill="none" />
          {/* Small dots */}
          <circle cx="32" cy="10" r="1" fill={color} />
          <circle cx="40" cy="20" r="1" fill={color} />
          <circle cx="50" cy="10" r="1" fill={color} />
        </pattern>
      </defs>
      <rect width="600" height="30" fill="url(#paisley)" />
    </svg>
  );
}

export function TeluguOrnamentalFrame({ children, color = "#C9A84C" }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none">
        <LotusDivider color={color} opacity={0.5} />
      </div>
      {/* Corners */}
      <div className="absolute top-0 left-0 pointer-events-none" style={{ transform: "translate(-10px,-10px)" }}>
        <MandalaCorner size={80} color={color} opacity={0.25} />
      </div>
      <div className="absolute top-0 right-0 pointer-events-none" style={{ transform: "translate(10px,-10px) scaleX(-1)" }}>
        <MandalaCorner size={80} color={color} opacity={0.25} />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none" style={{ transform: "translate(-10px,10px) scaleY(-1)" }}>
        <MandalaCorner size={80} color={color} opacity={0.25} />
      </div>
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{ transform: "translate(10px,10px) scale(-1,-1)" }}>
        <MandalaCorner size={80} color={color} opacity={0.25} />
      </div>
      {/* Content */}
      <div className="relative z-10 pt-8 pb-8">
        {children}
      </div>
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none">
        <LotusDivider color={color} opacity={0.5} />
      </div>
    </div>
  );
}

// ─── Lord Ganapathi Icon ─────────────────────────────────────────────────────
// A divine, ornate Ganesha graphic for the auspicious beginning section —
// with radiant aura, lotus throne, four arms bearing traditional attributes.
export function GanapathiIcon({
  size = 180,
  color = "#FFB300",
  accent = "#E65100",
}: { size?: number; color?: string; accent?: string }) {
  const skin = "#F4A340";
  const skinShade = "#E07B1A";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Divine Lord Ganapathi"
    >
      <defs>
        <radialGradient id="ganAura" cx="50%" cy="42%" r="55%">
          <stop offset="0%"  stopColor={color} stopOpacity="0.55" />
          <stop offset="55%" stopColor={color} stopOpacity="0.12" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ganBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={skin} />
          <stop offset="100%" stopColor={skinShade} />
        </linearGradient>
      </defs>

      {/* Divine aura glow */}
      <circle cx="110" cy="96" r="105" fill="url(#ganAura)" />

      {/* Radiating sun rays behind the deity */}
      <g opacity="0.5">
        {[...Array(24)].map((_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const r1 = 78, r2 = 98;
          const x1 = 110 + Math.cos(a) * r1, y1 = 96 + Math.sin(a) * r1;
          const x2 = 110 + Math.cos(a) * r2, y2 = 96 + Math.sin(a) * r2;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={color} strokeWidth={i % 2 ? 1 : 2.5} strokeLinecap="round" />;
        })}
      </g>

      {/* Halo rings */}
      <circle cx="110" cy="96" r="74" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <circle cx="110" cy="96" r="68" stroke={color} strokeWidth="0.8" opacity="0.4" strokeDasharray="2 4" />

      {/* Lotus throne */}
      <g>
        {[...Array(11)].map((_, i) => {
          const angle = (i / 10) * Math.PI - Math.PI;
          const x = 110 + Math.cos(angle) * 48;
          const y = 182 + Math.sin(angle) * 12;
          return (
            <ellipse key={i} cx={x} cy={y} rx="10" ry="20"
              fill={accent} opacity="0.6"
              transform={`rotate(${(angle * 180) / Math.PI + 90} ${x} ${y})`} />
          );
        })}
        {[...Array(7)].map((_, i) => {
          const angle = (i / 6) * Math.PI - Math.PI;
          const x = 110 + Math.cos(angle) * 34;
          const y = 180 + Math.sin(angle) * 8;
          return (
            <ellipse key={`in${i}`} cx={x} cy={y} rx="8" ry="15"
              fill={color} opacity="0.5"
              transform={`rotate(${(angle * 180) / Math.PI + 90} ${x} ${y})`} />
          );
        })}
      </g>

      {/* Body / belly */}
      <ellipse cx="110" cy="140" rx="46" ry="48" fill="url(#ganBody)" stroke={color} strokeWidth="1.5" />
      <ellipse cx="110" cy="146" rx="28" ry="32" fill={skin} opacity="0.6" />
      {/* Sacred thread */}
      <path d="M78 104 Q110 128 130 178" stroke={color} strokeWidth="2" fill="none" opacity="0.8" />

      {/* Head */}
      <ellipse cx="110" cy="80" rx="36" ry="34" fill="url(#ganBody)" stroke={color} strokeWidth="1.5" />
      <ellipse cx="110" cy="83" rx="26" ry="24" fill={skin} opacity="0.7" />

      {/* Big ears (fanned) */}
      <path d="M70 78 Q46 66 48 90 Q50 110 74 98 Z" fill="url(#ganBody)" stroke={color} strokeWidth="1.5" />
      <path d="M150 78 Q174 66 172 90 Q170 110 146 98 Z" fill="url(#ganBody)" stroke={color} strokeWidth="1.5" />
      <path d="M66 80 Q52 74 54 90 Q56 102 70 95" fill={accent} opacity="0.5" />
      <path d="M154 80 Q168 74 166 90 Q164 102 150 95" fill={accent} opacity="0.5" />

      {/* Trunk curled to modak */}
      <path d="M100 96 Q86 118 96 134 Q106 146 122 138" stroke={skinShade} strokeWidth="12" strokeLinecap="round" fill="none" />
      <path d="M100 96 Q86 118 96 134 Q106 146 122 138" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" strokeDasharray="4 3" />
      {/* Modak sweet */}
      <path d="M124 140 l6 -10 l6 10 z" fill={color} stroke={accent} strokeWidth="1" />
      <circle cx="130" cy="142" r="7" fill={color} stroke={accent} strokeWidth="1" />

      {/* Eyes */}
      <ellipse cx="95" cy="78" rx="6.5" ry="7" fill="white" />
      <ellipse cx="125" cy="78" rx="6.5" ry="7" fill="white" />
      <circle cx="96" cy="79" r="3.5" fill="#2A1500" />
      <circle cx="126" cy="79" r="3.5" fill="#2A1500" />
      <circle cx="97" cy="78" r="1.2" fill="white" />
      <circle cx="127" cy="78" r="1.2" fill="white" />
      {/* Tilak / third eye */}
      <ellipse cx="110" cy="64" rx="5" ry="3" fill={color} />
      <line x1="110" y1="59" x2="110" y2="71" stroke="#C0392B" strokeWidth="3" strokeLinecap="round" />

      {/* Crown (mukut) */}
      <path d="M74 52 Q86 18 110 14 Q134 18 146 52" fill={color} stroke={accent} strokeWidth="1.5" />
      <path d="M84 50 L88 24 L110 16 L132 24 L136 50" fill={accent} stroke={color} strokeWidth="1" />
      <circle cx="110" cy="20" r="6" fill="#C0392B" stroke={color} strokeWidth="1.5" />
      <circle cx="92" cy="30" r="3.5" fill={color} />
      <circle cx="128" cy="30" r="3.5" fill={color} />
      {/* Crown tip */}
      <path d="M110 14 L110 4" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="110" cy="4" r="3" fill={color} />

      {/* Four arms */}
      {/* Upper right — holding ankusha (goad) */}
      <path d="M144 118 Q168 108 172 84" stroke={skinShade} strokeWidth="9" strokeLinecap="round" fill="none" />
      <circle cx="172" cy="82" r="9" fill={skin} stroke={color} strokeWidth="1" />
      <path d="M172 74 l0 -14 M172 60 q6 0 6 6" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Upper left — holding pasha (noose) */}
      <path d="M76 118 Q52 108 48 84" stroke={skinShade} strokeWidth="9" strokeLinecap="round" fill="none" />
      <circle cx="48" cy="82" r="9" fill={skin} stroke={color} strokeWidth="1" />
      <circle cx="48" cy="66" r="7" stroke={color} strokeWidth="2.5" fill="none" />
      {/* Lower right — blessing (abhaya mudra) */}
      <path d="M150 148 Q172 146 176 124" stroke={skinShade} strokeWidth="9" strokeLinecap="round" fill="none" />
      <circle cx="176" cy="122" r="10" fill={skin} stroke={color} strokeWidth="1" />
      <path d="M172 118 l0 8 M176 116 l0 10 M180 118 l0 8" stroke={skinShade} strokeWidth="2" strokeLinecap="round" />
      {/* Lower left — holding modak bowl */}
      <path d="M70 148 Q48 146 44 124" stroke={skinShade} strokeWidth="9" strokeLinecap="round" fill="none" />
      <circle cx="44" cy="122" r="10" fill={skin} stroke={color} strokeWidth="1" />
      <path d="M36 124 q8 8 16 0" stroke={color} strokeWidth="2" fill="none" />
      <circle cx="40" cy="120" r="2.5" fill={color} />
      <circle cx="48" cy="120" r="2.5" fill={color} />

      {/* Necklaces */}
      <path d="M82 108 Q110 126 138 108" stroke={color} strokeWidth="2.5" fill="none" />
      <path d="M88 116 Q110 132 132 116" stroke={color} strokeWidth="1.5" fill="none" opacity="0.7" />
      <circle cx="110" cy="122" r="4" fill={color} />

      {/* Om on belly */}
      <text x="110" y="152" textAnchor="middle" fontSize="22" fill={accent} fontFamily="serif" fontWeight="bold" opacity="0.75">ॐ</text>

      {/* Little mouse (vahana) at the base */}
      <ellipse cx="150" cy="196" rx="12" ry="7" fill={skinShade} opacity="0.85" />
      <circle cx="161" cy="193" r="4" fill={skinShade} />
      <circle cx="163" cy="191" r="1.5" fill="#2A1500" />
      <path d="M138 198 q-8 2 -10 8" stroke={skinShade} strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
