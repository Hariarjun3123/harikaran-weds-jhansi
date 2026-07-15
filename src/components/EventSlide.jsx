import { motion } from 'framer-motion'
import Divider from './shared/Divider'
import SectionLabel from './shared/SectionLabel'
import ScrollHint from './shared/ScrollHint'
import PhotoSlot from './shared/PhotoSlot'
import { bounceIn } from '../animations'
import { googleCalendarUrl } from '../utils/calendar'
import { spacing } from '../utils/textStyle'

const panelReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, delay: 1.8 } }
}

// Text content bounces in as a group, starting right as the glass panel finishes fading in
const textStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 1.95 } }
}

export default function EventSlide({
  label,
  heading,
  headingColor = '#fff',
  description,
  dateStr,
  time24,
  date,
  time,
  venue,
  address,
  mapsUrl,
  dressCode,
  photoBase,
  labels,
  lang,
  showScrollHint = true
}) {
  const calendarEvent = {
    title: `${heading} — N.Harikaran & Arputham`,
    details: description,
    location: address,
    dateStr,
    timeStr: time24,
    durationHours: 3
  }

  return (
    <section style={{ position: 'relative', minHeight: '100vh', width: '100%', maxWidth: '100vw', overflow: 'hidden' }}>
      {/* Full-bleed photo background, same treatment as the Countdown slide */}
      <PhotoSlot base={photoBase} alt="" variant="ceremony" />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.35) 40%, rgba(0,0,0,.65))', zIndex: 1 }} />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 22px',
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
            maxWidth: '430px',
            borderRadius: '28px',
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
              padding: 'clamp(24px, 6vw, 34px)',
              textShadow: '0 2px 10px rgba(0,0,0,.5)'
            }}
          >
          <motion.div variants={bounceIn}>
            <SectionLabel color="#F7E6C4" lang={lang}>{label}</SectionLabel>
          </motion.div>

          <motion.h1
            variants={bounceIn}
            style={{
              margin: '18px 0 10px',
              color: headingColor,
              fontSize: 'clamp(34px, 9vw, 48px)',
              fontFamily: "'Cormorant Garamond', 'Noto Sans Tamil', serif",
              lineHeight: 1.1
            }}
          >
            {heading}
          </motion.h1>

          <motion.div variants={bounceIn}>
            <Divider margin="20px auto 30px" />
          </motion.div>

          <motion.p variants={bounceIn} style={{ color: '#f0e8dc', lineHeight: 1.8, fontSize: '16px', marginBottom: '28px' }}>
            {description}
          </motion.p>

          <motion.div variants={bounceIn} style={{ marginBottom: '22px' }}>
            <div style={{ color: '#F7E6C4', letterSpacing: spacing('2px', lang), fontSize: '13px', marginBottom: '6px' }}>📅 {labels.date}</div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>{date}</div>
          </motion.div>

          <motion.div variants={bounceIn} style={{ marginBottom: '22px' }}>
            <div style={{ color: '#F7E6C4', letterSpacing: spacing('2px', lang), fontSize: '13px', marginBottom: '6px' }}>🕒 {labels.time}</div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>{time}</div>
          </motion.div>

          <motion.div variants={bounceIn} style={{ marginBottom: '20px' }}>
            <div style={{ color: '#F7E6C4', letterSpacing: spacing('2px', lang), fontSize: '13px', marginBottom: '6px' }}>📍 {labels.venue}</div>
            <div style={{ fontSize: '22px', fontWeight: 600, color: '#fff' }}>{venue}</div>
          </motion.div>

          <motion.p variants={bounceIn} style={{ color: '#e8ded0', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
            {address}
          </motion.p>

          <motion.div variants={bounceIn} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 22px',
                background: '#8B4513',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '14px',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              📍 {labels.directions}
            </a>

            <a
              href={googleCalendarUrl(calendarEvent)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 22px',
                background: 'rgba(255,255,255,.9)',
                color: '#8B4513',
                textDecoration: 'none',
                borderRadius: '14px',
                fontWeight: 600,
                fontSize: '15px'
              }}
            >
              🗓️ {labels.calendar}
            </a>
          </motion.div>

          {dressCode && (
            <motion.div variants={bounceIn}>
              <div style={{ width: '70px', height: '1px', background: 'rgba(255,255,255,.3)', margin: '35px auto 25px' }} />
              <div style={{ color: '#F7E6C4', letterSpacing: spacing('2px', lang), fontSize: '13px', marginBottom: '8px' }}>👔 {labels.dressCode}</div>
              <div style={{ color: '#fff', fontSize: '17px', fontWeight: 500 }}>{dressCode}</div>
            </motion.div>
          )}
          </motion.div>
        </motion.div>
      </div>

      {showScrollHint && <ScrollHint color="#fff" bottom="18px" />}
    </section>
  )
}
