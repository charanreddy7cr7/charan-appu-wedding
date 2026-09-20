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
