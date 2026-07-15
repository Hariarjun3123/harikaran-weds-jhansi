import { motion } from 'framer-motion'
import { useState } from 'react'
import PhotoSlot from './shared/PhotoSlot'

export default function EnvelopeIntro({ onComplete }) {
  const [opened, setOpened] = useState(false)

  const handleTap = () => {
    if (opened) return
    setOpened(true)
    setTimeout(() => onComplete(), 1100)
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'radial-gradient(circle at 50% 30%, #fbf3e6, #f0e2c9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        padding: '20px'
      }}
    >
      <motion.div
        initial={{ y: -300, opacity: 0, scale: 0.85 }}
        animate={
          opened
            ? { y: [0, -50, 160], opacity: [1, 1, 0], scale: [1, 1.1, 0.9], rotate: [0, -3, 2] }
            : { y: [0, -8, 0], opacity: 1, scale: 1 }
        }
        transition={
          opened
            ? { duration: 1.1, times: [0, 0.4, 1], ease: 'easeIn' }
            : {
                y: { type: 'spring', stiffness: 140, damping: 10, mass: 1 },
                opacity: { duration: 0.5 }
              }
        }
        style={{ position: 'relative', width: 'min(420px, 92vw)' }}
      >
        {/* Envelope card — drop a photo named envelope.jpg, envelope.jpeg, or envelope.png
            into public/images/ to swap this dummy photo for a real one.
            for a real one. object-fit: contain keeps it uncropped. */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '3 / 2',
            borderRadius: '18px',
            overflow: 'hidden',
            border: '1.5px solid #D4AF37',
            boxShadow: '0 20px 40px rgba(107,74,24,.25)'
          }}
        >
          <PhotoSlot base="/images/envelope" alt="Wedding invitation" variant="envelope" />

          {/* Flap crease lines drawn on top of the photo, gold, matching a classic envelope */}
          <svg viewBox="0 0 300 200" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <path d="M4 6 L150 118 L296 6" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinejoin="round" />
            <path d="M4 194 L118 108 M296 194 L182 108" fill="none" stroke="rgba(212,175,55,.55)" strokeWidth="1.3" />
          </svg>
        </div>

        {/* Wax seal — organic melted-blob shape (goo technique) in deep oxblood, overlapping the
            flap crease like a real wax stamp. This is the actual tap target. */}
        <motion.button
          type="button"
          onClick={handleTap}
          aria-label="Open wedding invitation"
          animate={!opened ? { scale: [1, 1.05, 1] } : { opacity: 0, scale: 0.9 }}
          transition={!opened ? { repeat: Infinity, duration: 2.2 } : { duration: 0.6 }}
          style={{
            position: 'absolute',
            left: '50%',
            top: '59%',
            transform: 'translate(-50%, -50%)',
            width: '78px',
            height: '78px',
            zIndex: 10,
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            filter: 'drop-shadow(0 10px 16px rgba(0,0,0,.4))'
          }}
        >
          <svg viewBox="0 0 150 150" style={{ width: '100%', height: '100%' }}>
            <defs>
              <radialGradient id="waxGloss" cx="34%" cy="26%" r="75%">
                <stop offset="0%" stopColor="#8a2a35" />
                <stop offset="35%" stopColor="#5c0d1a" />
                <stop offset="70%" stopColor="#3a0510" />
                <stop offset="100%" stopColor="#220208" />
              </radialGradient>
              <filter id="waxBlob" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5.5" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -10" result="goo" />
                <feTurbulence type="fractalNoise" baseFrequency="0.05 0.07" numOctaves="2" seed="5" result="noise" />
                <feDisplacementMap in="goo" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>

            <g filter="url(#waxBlob)">
              <circle cx="75" cy="68" r="50" fill="url(#waxGloss)" />
              <circle cx="38" cy="88" r="17" fill="url(#waxGloss)" />
              <circle cx="112" cy="92" r="16" fill="url(#waxGloss)" />
              <circle cx="75" cy="112" r="15" fill="url(#waxGloss)" />
              <circle cx="28" cy="58" r="13" fill="url(#waxGloss)" />
              <circle cx="122" cy="54" r="12" fill="url(#waxGloss)" />
              <circle cx="92" cy="26" r="12" fill="url(#waxGloss)" />
              <circle cx="52" cy="22" r="11" fill="url(#waxGloss)" />
            </g>

            <path d="M32 40 A 48 48 0 0 1 100 22" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="55" cy="42" rx="17" ry="10" fill="rgba(255,255,255,.18)" />
            <circle cx="75" cy="70" r="38" fill="none" stroke="rgba(0,0,0,.35)" strokeWidth="1.5" />
            <circle cx="75" cy="70" r="33" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1" />

            <text x="75" y="72" textAnchor="middle" dominantBaseline="central" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="30" fill="rgba(0,0,0,.4)">
              HA
            </text>
            <text x="74" y="70" textAnchor="middle" dominantBaseline="central" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="30" fill="#e8c9a8">
              HA
            </text>
          </svg>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 0 : [0.5, 1, 0.5] }}
        transition={{ repeat: opened ? 0 : Infinity, duration: 2, delay: 0.6 }}
        style={{ marginTop: '36px', textAlign: 'center' }}
      >
        <p style={{ margin: 0, color: '#6b4a18', fontFamily: "'Cormorant Garamond', serif", fontSize: '19px', fontWeight: 600, letterSpacing: '4px' }}>
          TAP TO OPEN
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ marginTop: '10px', color: '#b8860b', fontSize: '22px' }}
        >
          ▼
        </motion.div>
      </motion.div>
    </div>
  )
}
