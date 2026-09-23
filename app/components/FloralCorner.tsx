"use client";

/**
 * FloralCorner — decorative navy-rose + gold-fern cluster for page corners,
 * inspired by an elegant navy & gold wedding invitation.
 * Use `position` to place it; the art is drawn for the top-left and mirrored via CSS.
 */
export function FloralCorner({
  size = 260,
  className = "",
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="rose1" cx="42%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#3E6EA5" />
          <stop offset="55%" stopColor="#1E3E6B" />
          <stop offset="100%" stopColor="#0E2545" />
        </radialGradient>
        <radialGradient id="rose2" cx="45%" cy="40%" r="62%">
          <stop offset="0%" stopColor="#345F92" />
          <stop offset="60%" stopColor="#1A375F" />
          <stop offset="100%" stopColor="#0C2140" />
        </radialGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0DCA0" />
          <stop offset="50%" stopColor="#C9A24B" />
          <stop offset="100%" stopColor="#A07E2E" />
        </linearGradient>
      </defs>

      {/* ── Gold fern sprigs (drawn first, behind roses) ── */}
      <g stroke="url(#gold)" strokeWidth="1.4" fill="none" opacity="0.95">
        {/* long diagonal stem */}
        <path d="M20 20 C 70 60, 120 90, 175 150" />
        {/* fern leaflets along the stem */}
        {Array.from({ length: 12 }).map((_, i) => {
          const t = i / 11;
          const x = 20 + t * 155;
          const y = 20 + t * 130 + Math.sin(t * 3) * 4;
          const len = 12 - t * 5;
          return (
            <g key={i}>
              <path d={`M${x} ${y} l ${-len} ${-len * 0.5}`} />
              <path d={`M${x} ${y} l ${len} ${-len * 0.5}`} />
            </g>
          );
        })}
        {/* second shorter fern */}
        <path d="M14 70 C 40 95, 70 110, 110 130" />
        {Array.from({ length: 8 }).map((_, i) => {
          const t = i / 7;
          const x = 14 + t * 96;
          const y = 70 + t * 60;
          const len = 9 - t * 3;
          return (
            <g key={`b${i}`}>
              <path d={`M${x} ${y} l ${-len} ${-len * 0.6}`} />
              <path d={`M${x} ${y} l ${len} ${-len * 0.6}`} />
            </g>
          );
        })}
      </g>

      {/* gold leaf accents */}
      <g fill="url(#gold)" opacity="0.9">
        <path d="M150 44 q 14 -10 26 -4 q -8 12 -26 4 z" />
        <path d="M186 96 q 12 -12 26 -8 q -6 14 -26 8 z" />
        <path d="M30 150 q -12 8 -12 22 q 14 -4 12 -22 z" />
      </g>

      {/* ── Navy roses ── */}
      {/* Big rose top-left */}
      <g transform="translate(58 52)">
        <circle r="46" fill="url(#rose1)" />
        <circle r="46" fill="none" stroke="#5A82B8" strokeWidth="0.8" opacity="0.5" />
        {/* petal spiral */}
        <g fill="none" stroke="#5A82B8" strokeWidth="1.1" opacity="0.7">
          <circle r="34" />
          <circle r="24" />
          <circle r="15" />
          <circle r="7" />
          <path d="M-34 0 A34 34 0 0 1 0 -34" />
          <path d="M0 34 A34 34 0 0 1 -34 0" />
          <path d="M24 0 A24 24 0 0 1 0 24" />
        </g>
      </g>

      {/* Medium rose lower-left */}
      <g transform="translate(34 132)">
        <circle r="34" fill="url(#rose2)" />
        <g fill="none" stroke="#4A7098" strokeWidth="1" opacity="0.65">
          <circle r="25" />
          <circle r="16" />
          <circle r="8" />
          <path d="M-25 0 A25 25 0 0 1 0 -25" />
          <path d="M0 25 A25 25 0 0 1 -25 0" />
        </g>
      </g>

      {/* Small bud */}
      <g transform="translate(96 118)">
        <circle r="18" fill="url(#rose1)" />
        <g fill="none" stroke="#5A82B8" strokeWidth="0.9" opacity="0.6">
          <circle r="12" />
          <circle r="6" />
        </g>
      </g>
    </svg>
  );
}
