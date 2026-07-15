import { motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown'
import PhotoSlot from './shared/PhotoSlot'
import ScrollHint from './shared/ScrollHint'
import Divider from './shared/Divider'
import { fadeUp, bounceStagger, bounceIn } from '../animations'
import { spacing } from '../utils/textStyle'

export default function CountdownSlide({ t, lang }) {
  const { days, hours, minutes, seconds, isPast } = useCountdown('2026-09-17T08:00:00')

  const boxStyle = {
    width: 'clamp(60px, 18vw, 75px)',
    height: 'clamp(74px, 20vw, 90px)',
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: '18px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 12px 25px rgba(0,0,0,.25)'
  }

  return (
    <section style={{ position: 'relative', minHeight: '100vh', width: '100%', maxWidth: '100vw', overflow: 'hidden' }}>
      {/* Drop a photo named countdown.jpg, countdown.jpeg, or countdown.png into public/images/ — any of those extensions works automatically */}
      <PhotoSlot base="/images/countdown" alt="" variant="countdown" />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.45)', zIndex: 1 }} />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          textAlign: 'center'
        }}
      >
        {/* whileInView + viewport once:true means this plays exactly once, exactly when
            the section actually scrolls into view — not the instant the page mounts. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <p style={{ color: '#F7E6C4', letterSpacing: spacing('4px', lang), marginBottom: '10px', fontSize: '14px' }}>
            {t.specialDay}
          </p>

          <h1 style={{ color: '#fff', fontFamily: "'Cormorant Garamond', 'Noto Sans Tamil', serif", fontSize: 'clamp(30px, 7.5vw, 46px)', margin: 0 }}>
            {isPast ? t.done : t.heading}
          </h1>

          <Divider margin="20px auto 40px" />

          {!isPast && (
            <motion.div
              variants={bounceStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              {[
                ['days', t.days, days],
                ['hours', t.hours, hours],
                ['mins', t.mins, minutes],
                ['secs', t.secs, seconds]
              ].map(([id, label, value]) => (
                <motion.div key={id} variants={bounceIn} style={boxStyle}>
                  <h1 style={{ margin: 0, color: '#fff', fontSize: 'clamp(24px, 6vw, 34px)' }}>
                    {String(value).padStart(2, '0')}
                  </h1>
                  <small style={{ color: '#F7E6C4', letterSpacing: spacing('2px', lang), fontSize: 'clamp(10px, 2.5vw, 12px)' }}>{label}</small>
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.p variants={fadeUp} style={{ color: '#fff', fontSize: '18px', lineHeight: 1.8, maxWidth: '420px', margin: '45px auto 0' }}>
            {t.footer[0]}
            <br />
            {t.footer[1]}
          </motion.p>
        </motion.div>
      </div>

      <ScrollHint bottom="28px" />
    </section>
  )
}
