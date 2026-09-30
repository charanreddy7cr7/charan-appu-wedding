"use client";

/**
 * FloralCorner — navy-rose + gold-fern corner cluster inspired by an elegant
 * navy & gold floral wedding invitation. Drawn for the top-left; mirror via CSS
 * for the bottom-right.
 */
export function FloralCorner({
  size = 300,
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
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="fcRoseA" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#4E77B0" />
          <stop offset="45%" stopColor="#2B4E80" />
          <stop offset="100%" stopColor="#132A4C" />
        </radialGradient>
        <radialGradient id="fcRoseB" cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#3E6299" />
          <stop offset="55%" stopColor="#213F68" />
          <stop offset="100%" stopColor="#0F2444" />
        </radialGradient>
        <linearGradient id="fcGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B89043" />
          <stop offset="50%" stopColor="#C9A24B" />
          <stop offset="100%" stopColor="#9A7628" />
        </linearGradient>
      </defs>

      {/* ── Gold fern sprigs radiating from the corner ── */}
      <g stroke="url(#fcGold)" fill="none" opacity="0.95">
        {[
          { d: "M6 6 C 60 40, 110 70, 150 150", n: 13, len: 14 },
          { d: "M6 40 C 40 80, 70 120, 96 175", n: 10, len: 11 },
          { d: "M40 6 C 80 34, 120 54, 170 92", n: 10, len: 11 },
        ].map((f, fi) => (
          <g key={fi}>
            <path d={f.d} strokeWidth="1.4" />
          </g>
        ))}
        {/* leaflets along the main stem */}
        {Array.from({ length: 14 }).map((_, i) => {
          const t = i / 13;
          const x = 6 + t * 144 + Math.sin(t * 3) * 3;
          const y = 6 + t * 144;
          const len = 14 - t * 6;
          return (
            <g key={`lf${i}`} strokeWidth="1.2">
              <path d={`M${x} ${y} l ${-len} ${-len * 0.4}`} />
              <path d={`M${x} ${y} l ${len * 0.4} ${-len}`} />
            </g>
          );
        })}
      </g>

      {/* gold leaf flourishes */}
      <g fill="url(#fcGold)" opacity="0.92">
        <path d="M150 150 q 22 -14 40 -6 q -12 18 -40 6 z" />
        <path d="M96 176 q 16 14 34 12 q -4 -20 -34 -12 z" />
        <path d="M172 92 q 20 -8 30 -26 q -22 -2 -30 26 z" />
      </g>

    </svg>
  );
}
