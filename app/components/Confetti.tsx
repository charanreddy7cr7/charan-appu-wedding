"use client";

const COLORS = ["#FF9F1C", "#E63980", "#0FA3B1", "#7B2CBF", "#FF5D5D", "#8AC926"];

// Deterministic pseudo-random in [0,1) from a seed — pure, so it's safe to call
// during render and produces identical output on server & client (no hydration mismatch).
function rand(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Confetti — festive falling confetti pieces. Purely decorative.
 */
export default function Confetti({ count = 40 }: { count?: number }) {
  const pieces = Array.from({ length: count }, (_, i) => {
    const round = rand(i * 4 + 3) > 0.5;
    const size = rand(i * 4 + 1) * 8 + 6;
    return {
      id: i,
      left: rand(i * 4) * 100,
      size,
      height: round ? size : size * 0.5,
      color: COLORS[Math.floor(rand(i * 4 + 2) * COLORS.length)],
      delay: rand(i * 4 + 3) * 6,
      duration: rand(i * 4 + 5) * 4 + 5,
      round,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.height,
            background: p.color,
            borderRadius: p.round ? "50%" : "2px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
