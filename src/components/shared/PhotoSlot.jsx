import { useState } from 'react'
import KolamArt from './KolamArt'

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'JPG', 'JPEG', 'PNG']

// Drop a real photo at `${base}.jpg` (or .jpeg / .png, any case) whenever it's ready — this
// tries every common extension automatically, so you never have to match the exact filename
// the code expects. If none of them exist, it falls back to the kolam art.
//
// The photo itself is shown with object-fit: contain — never cropped or zoomed — so whatever
// image is dropped in appears exactly as-is. A softly blurred copy of the same image fills
// the space behind it so there's no hard letterbox bar.
export default function PhotoSlot({ base, alt = '', variant = 'a' }) {
  const [extIndex, setExtIndex] = useState(0)
  const failed = extIndex >= EXTENSIONS.length
  const src = failed ? null : `${base}.${EXTENSIONS[extIndex]}`

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#1a0d10' }}>
      {!failed && (
        <>
          <img
            key={`${src}-blur`}
            src={src}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              // Richer, more saturated blur instead of a dull dark wash — this fills the
              // letterbox space behind the photo, so it's worth looking good on its own.
              filter: 'blur(30px) saturate(1.35) brightness(0.78) contrast(1.05)',
              transform: 'scale(1.2)'
            }}
          />
          <img
            key={src}
            src={src}
            alt={alt}
            onError={() => setExtIndex((i) => i + 1)}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </>
      )}
      {failed && <KolamArt variant={variant} />}
    </div>
  )
}
