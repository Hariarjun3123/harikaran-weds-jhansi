import { motion } from 'framer-motion'
import Divider from './shared/Divider'
import PhotoSlot from './shared/PhotoSlot'
import { bounceIn } from '../animations'
import { spacing } from '../utils/textStyle'

const panelReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, delay: 1.8 } }
}

const textStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 1.95 } }
}

export default function FinalSlide({ t, lang }) {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', width: '100%', maxWidth: '100vw', overflow: 'hidden' }}>
      <PhotoSlot base="/images/final" alt="" variant="final" />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,.5), rgba(0,0,0,.3) 40%, rgba(0,0,0,.6))', zIndex: 1 }} />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          textAlign: 'center'
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={panelReveal}
          style={{
            width: '100%',
            maxWidth: '480px',
            borderRadius: '30px',
            background: 'rgba(15,8,10,.55)',
            backdropFilter: 'blur(22px)',
            WebkitBackdropFilter: 'blur(22px)',
            border: '1px solid rgba(255,255,255,.22)',
            boxShadow: '0 20px 45px rgba(0,0,0,.45)'
          }}
        >
          <motion.div
            variants={textStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            style={{
              padding: 'clamp(30px, 7vw, 42px) clamp(24px, 6vw, 35px)',
              textShadow: '0 2px 10px rgba(0,0,0,.5)'
            }}
          >
            <motion.h1
              variants={bounceIn}
              style={{ fontFamily: "'Cormorant Garamond', 'Noto Sans Tamil', serif", fontSize: 'clamp(38px, 10vw, 54px)', color: '#fff', margin: 0 }}
            >
              {t.heading}
            </motion.h1>

            <motion.p variants={bounceIn} style={{ marginTop: '15px', color: '#F7E6C4', letterSpacing: spacing('4px', lang), fontSize: '14px' }}>
              {t.sub}
            </motion.p>

            <motion.div variants={bounceIn}>
              <div style={{ width: '70px', height: '1px', background: 'rgba(255,255,255,.3)', margin: '30px auto' }} />
            </motion.div>

            <motion.p variants={bounceIn} style={{ color: '#f0e8dc', fontSize: '18px', lineHeight: 1.9, margin: 0 }}>
              {t.msg1[0]}
              <br />
              {t.msg1[1]}
              <br />
              {t.msg1[2]}
            </motion.p>

            <motion.div variants={bounceIn} style={{ marginTop: '45px' }}>
              <h2 style={{
                fontFamily:
                  lang === 'ta'
                    ? "'Noto Sans Tamil', serif"
                    : "'Cormorant Garamond', serif", fontSize: 'clamp(30px, 7.5vw, 44px)', color: '#fff', margin: 0
              }}>
                {lang === 'ta' ? 'நா.ஹரிகரன்' : 'N.Harikaran'}
              </h2>
              <div style={{ color: '#D4AF37', fontSize: '26px', margin: '10px 0' }}>&amp;</div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', 'Noto Sans Tamil', serif",
                  fontSize: 'clamp(30px, 7.5vw, 44px)',
                  color: '#fff',
                  margin: 0,
                  lineHeight: 1.3
                }}
              >
                {lang === 'ta' ? 'அற்புதம்' : 'Arputham'}
              </h2>

              <div
                style={{
                  display: 'block',
                  marginTop: '12px',
                  color: '#F7E6C4',
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: 'clamp(26px, 7vw, 36px)',
                  fontWeight: 400,
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {lang === 'ta' ? '(ஜான்சி)' : '(Jhansi)'}
              </div>

            </motion.div>

            <motion.div variants={bounceIn}>
              <Divider margin="40px auto 25px" />
            </motion.div>

            <motion.p variants={bounceIn} style={{ color: '#e8ded0', fontSize: '17px', lineHeight: 1.8, margin: 0 }}>
              {t.msg2[0]}
              <br />
              {t.msg2[1]}
              <br />
              {t.msg2[2]}
            </motion.p>

            {t.quote && (
              <motion.p
                variants={bounceIn}
                style={{
                  marginTop: '22px',
                  color: '#F7E6C4',
                  fontSize: '15px',
                  lineHeight: 1.8,
                  fontFamily: "'Noto Sans Tamil', serif",
                  fontStyle: 'italic'
                }}
              >
                {t.quote}
              </motion.p>
            )}

            <motion.div variants={bounceIn} style={{ marginTop: '35px', fontSize: '32px' }}>
              ❤️
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
