import { useState } from 'react'

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'JPG', 'JPEG', 'PNG']

// Same auto-extension detection as PhotoSlot. Two modes:
// - default: a bordered rounded box, sized by width/height
// - flush: an edge-to-edge banner with no border/rounding of its own (the parent card's
//   overflow:hidden + border-radius clips it), sized by aspectRatio instead of a fixed height
export default function PhotoFrame({ base, alt = '', width = 200, height = 160, monogram = 'H ❤ A', flush = false, aspectRatio = '4 / 3', fit = 'contain' }) {
  const [extIndex, setExtIndex] = useState(0)
  const failed = extIndex >= EXTENSIONS.length
  const src = failed ? null : `${base}.${EXTENSIONS[extIndex]}`

  const containerStyle = flush
    ? {
        width: '100%',
        aspectRatio,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg,#fdf8f0,#f0e2c9)'
      }
    : {
        width: `${width}px`,
        maxWidth: '100%',
        height: `${height}px`,
        margin: '0 auto 22px',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '2px solid #D4AF37',
        boxShadow: '0 8px 20px rgba(139,69,19,.18)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg,#fdf8f0,#f0e2c9)'
      }

  return (
    <div style={containerStyle}>
      {!failed ? (
        <img
          key={src}
          src={src}
          alt={alt}
          onError={() => setExtIndex((i) => i + 1)}
          style={{ width: '100%', height: '100%', objectFit: fit }}
        />
      ) : (
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: `${(flush ? 60 : height) * 0.22}px`, color: '#B8860B' }}>
          {monogram}
        </span>
      )}
    </div>
  )
}
