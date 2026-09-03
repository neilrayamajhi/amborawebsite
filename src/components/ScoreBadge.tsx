interface ScoreBadgeProps {
  score: number;
  size?: number;
  ring?: boolean;
}

export function ScoreBadge({ score, size = 40, ring = false }: ScoreBadgeProps) {
  const negative = score < 0;
  const hue = negative ? 0 : score * 12;
  const lightness = negative ? 50 : 50 - Math.pow(score, 1.3);
  const bg = negative ? '#A3A3A3' : `hsl(${hue}, 100%, ${lightness}%)`;

  const fontSize = Math.round(size * 0.36);

  if (ring) {
    const stroke = Math.max(2, Math.round(size * 0.07));
    const r = (size - stroke) / 2;
    return (
      <div
        className="score-badge score-badge--ring"
        style={{ width: size, height: size, position: 'relative', color: bg, background: 'transparent' }}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ position: 'absolute', inset: 0 }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={bg} strokeWidth={stroke} />
        </svg>
        <span style={{ position: 'relative', fontSize, fontWeight: 700, color: bg, letterSpacing: '-0.02em' }}>
          {score.toFixed(1)}
        </span>
      </div>
    );
  }

  return (
    <div
      className="score-badge"
      style={{ width: size, height: size, background: bg, fontSize }}
    >
      {score.toFixed(1)}
    </div>
  );
}
