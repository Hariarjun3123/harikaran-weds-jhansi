// Decorative background inspired by kolam (rangoli) threshold patterns —
// dot-grid geometry drawn at South Indian homes for auspicious occasions.
// Used in place of a couple photo until real photos are added.
export default function KolamArt({ variant = 'a' }) {
  const dots = []
  const rows = 9
  const cols = 9
  const spacing = 48
  const offsetX = 400 - ((cols - 1) * spacing) / 2
  const offsetY = 400 - ((rows - 1) * spacing) / 2

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push([offsetX + c * spacing, offsetY + r * spacing])
    }
  }

  return (
    <svg
      viewBox="0 0 800 800"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <defs>
        <radialGradient id={`kolamBg-${variant}`} cx="50%" cy="42%" r="75%">
          <stop offset="0%" stopColor="#3a1220" />
          <stop offset="55%" stopColor="#2a0d16" />
          <stop offset="100%" stopColor="#150609" />
        </radialGradient>
        <linearGradient id={`kolamLine-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F7E6C4" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      <rect width="800" height="800" fill={`url(#kolamBg-${variant})`} />

      {/* dot grid */}
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.2" fill="#D4AF37" opacity="0.55" />
      ))}

      {/* concentric lotus loops threaded through the grid */}
      {[190, 150, 110, 70].map((r, i) => (
        <circle
          key={r}
          cx="400"
          cy="400"
          r={r}
          fill="none"
          stroke={`url(#kolamLine-${variant})`}
          strokeWidth={i === 0 ? 2.5 : 1.4}
          opacity={0.85 - i * 0.12}
        />
      ))}

      {/* eight petal strokes */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4
        const x1 = 400 + Math.cos(angle) * 70
        const y1 = 400 + Math.sin(angle) * 70
        const x2 = 400 + Math.cos(angle) * 210
        const y2 = 400 + Math.sin(angle) * 210
        const cx = 400 + Math.cos(angle + 0.3) * 140
        const cy = 400 + Math.sin(angle + 0.3) * 140
        return (
          <path
            key={i}
            d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
            fill="none"
            stroke={`url(#kolamLine-${variant})`}
            strokeWidth="1.6"
            opacity="0.6"
          />
        )
      })}

      <circle cx="400" cy="400" r="10" fill="#D4AF37" opacity="0.9" />
    </svg>
  )
}
