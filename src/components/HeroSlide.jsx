import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PhotoSlot from './shared/PhotoSlot'
import ScrollHint from './shared/ScrollHint'
import Divider from './shared/Divider'
import AnimatedName from './shared/AnimatedName'
import { kural } from '../translations'
import { spacing } from '../utils/textStyle'

export default function HeroSlide({ t, lang }) {
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    // Photo is visible immediately; the card (and bouncing names) follow after
    // the photo's had 1.8s to register on its own.
    const timer = setTimeout(() => setShowCard(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section style={{ position: 'relative', minHeight: '100vh', width: '100%', maxWidth: '100vw', overflow: 'hidden' }}>
      {/* Photo appears first — drop a photo named hero.jpg, hero.jpeg, or hero.png into public/images/ */}
      <PhotoSlot base="/images/hero" alt="N.Harikaran and Arputham" variant="hero" />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,.72), rgba(0,0,0,.15), rgba(0,0,0,.4))',
          zIndex: 1
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '40px 22px'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', color: '#fff', flexShrink: 0 }}
        >
          <p style={{ margin: 0, color: '#F7E6C4', fontSize: 'clamp(11px, 3vw, 13px)', letterSpacing: spacing('5px', lang), textTransform: lang === 'ta' ? 'none' : 'uppercase' }}>
            {t.blessing}
          </p>
          <h3 style={{ marginTop: '16px', marginBottom: 0, color: '#fff', fontWeight: 400, letterSpacing: spacing('6px', lang), fontSize: 'clamp(13px, 3.4vw, 16px)' }}>
            {t.title}
          </h3>

          {/* Thirukkural — dark, mostly-opaque backdrop so the text stays readable no matter
              what color photo is uploaded behind it (a light tint lets the photo's own color
              bleed through and clash, e.g. gold text over a yellow-toned photo). Gold border
              kept for visual distinction so it doesn't get scrolled past unnoticed. Width uses
              min(...,92vw) instead of a fixed px cap so the kural's first line (4 words) has
              room to stay on one line per traditional meter, on both narrow and wide phones. */}
          <AnimatePresence>
            {showCard && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  marginTop: '18px',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  background: 'rgba(15,8,10,.62)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: '1.5px solid rgba(212,175,55,.6)',
                  boxShadow: '0 4px 18px rgba(0,0,0,.35)',
                  display: 'inline-block',
                  maxWidth: 'min(440px, 92vw)'
                }}
              >

                <p
                  style={{
                    margin: 0,
                    color: '#FDECC8',
                    fontSize: 'clamp(13px, 3.4vw, 16px)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    fontFamily:
                      lang === 'ta'
                        ? "'Noto Sans Tamil', serif"
                        : "'Cormorant Garamond', serif",
                    textAlign: 'center'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      textAlign: 'left'
                    }}
                  >
                    {kural.verse[lang][0]}
                    <br />
                    {kural.verse[lang][1]}
                  </span>
                </p>
                <p
                  style={{
                    margin: '12px 0 0',
                    color: 'rgba(255,255,255,.88)',
                    fontSize: 'clamp(11px, 2.8vw, 13px)',
                    lineHeight: 1.6,
                    fontStyle: 'italic'
                  }}
                >
                  {kural.note[lang]}
                </p>


                <p style={{ margin: '8px 0 0', color: '#D4AF37', fontSize: '11px', letterSpacing: spacing('1px', lang), fontWeight: 600 }}>
                  — {kural.ref[lang]}
                </p>
              </motion.div>
            )}

          </AnimatePresence>

        </motion.div>

        <AnimatePresence>
          {showCard && (
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: 'clamp(28px, 6vw, 38px) clamp(20px, 6vw, 28px)',
                borderRadius: '30px',
                background: 'rgba(15,8,10,.58)',
                backdropFilter: 'blur(22px)',
                WebkitBackdropFilter: 'blur(22px)',
                border: '1px solid rgba(255,255,255,.22)',
                boxShadow: '0 20px 45px rgba(0,0,0,.45)',
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(0,0,0,.5)'
              }}
            >
              <p style={{ margin: 0, color: '#F7E6C4', letterSpacing: spacing('4px', lang), fontSize: 'clamp(12px,3vw,14px)' }}>
                {t.together}
              </p>

              <h1 style={{ margin: '18px 0 0', color: '#fff', fontFamily: "'Cormorant Garamond', 'Noto Sans Tamil', serif", fontSize: 'clamp(36px, 11vw, 58px)', lineHeight: 1.1 }}>
                {lang === 'ta' ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.1 }}
                    style={{ display: 'inline-block' }}
                  >
                    நா.ஹரிகரன்
                  </motion.span>
                ) : (
                  <AnimatedName text="N.Harikaran" delay={0.1} />
                )}
              </h1>

              <div style={{ margin: '10px 0', color: '#D4AF37', fontSize: 'clamp(20px,5vw,28px)' }}>&</div>

              <h1 style={{ margin: 0, color: '#fff', fontFamily: "'Cormorant Garamond', 'Noto Sans Tamil', serif", fontSize: 'clamp(36px, 11vw, 58px)', lineHeight: 1.1 }}>
                {lang === 'ta' ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.75 }}
                    style={{ display: 'inline-block' }}
                  >
                    அற்புதம்
                  </motion.span>
                ) : (
                  <AnimatedName text="Arputham" delay={0.75} />
                )}
              </h1>

              <h2 style={{ margin: '6px 0 0', color: '#F7E6C4', fontFamily: "'Great Vibes', cursive", fontSize: 'clamp(26px, 7vw, 36px)', fontWeight: 400 }}>
                {lang === 'ta' ? '(ஜான்சி)' : '(Jhansi)'}
              </h2>

              <Divider margin="24px auto" />

              <p style={{ margin: 0, color: '#fff', lineHeight: 1.8, fontSize: 'clamp(15px, 4vw, 18px)' }}>
                {t.tagline[0]}
                <br />
                {t.tagline[1]}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <ScrollHint bottom="35px" />
      </div>
    </section>
  )
}
