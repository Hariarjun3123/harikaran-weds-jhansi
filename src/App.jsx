import { useState, useRef } from 'react'
import EnvelopeIntro from './components/EnvelopeIntro'
import HeroSlide from './components/HeroSlide'
import CountdownSlide from './components/CountdownSlide'
import EventSlide from './components/EventSlide'
import FinalSlide from './components/FinalSlide'
import LanguageToggle from './components/shared/LanguageToggle'
import { translations } from './translations'


export default function App() {
  // Always starts on the envelope, even on refresh — the reveal moment repeats every visit.
  const [inviteOpen, setInviteOpen] = useState(false)
  const [lang, setLang] = useState('en')
  const t = translations[lang]
  const audioRef = useRef(null)
  const [musicOn, setMusicOn] = useState(true)
  const toggleMusic = () => {
    if (!audioRef.current) return

    if (musicOn) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => { })
    }

    setMusicOn(!musicOn)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/bgm.mp3"
        loop
        preload="auto"
      />


      {inviteOpen && (
        <LanguageToggle onToggle={() => setLang((l) => (l === 'en' ? 'ta' : 'en'))} label={t.toggleLabel} />
      )}

      {inviteOpen && (
        <button
          onClick={toggleMusic}
          style={{
            position: 'fixed',
            top: '78px',
            right: '18px',

            width: '46px',
            height: '46px',

            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,.25)',

            background: 'rgba(255,255,255,.18)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',

            color: '#fff',
            fontSize: '20px',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            cursor: 'pointer',

            zIndex: 9999,

            boxShadow: '0 8px 20px rgba(0,0,0,.25)'
          }}
        >
          {musicOn ? '🔊' : '🔇'}
        </button>
      )}
      {!inviteOpen ? (
        <EnvelopeIntro
          onComplete={() => {
            if (audioRef.current) {
              audioRef.current.volume = 0.4
              audioRef.current.play().catch((err) => {
                console.log('Audio play blocked:', err)
              })
            }

            setInviteOpen(true)
          }}
        />
      ) : (
        <>
          <HeroSlide t={t.hero} lang={lang} />
          <CountdownSlide t={t.countdown} lang={lang} />

          <EventSlide
            label={t.ceremony.label}
            heading={t.ceremony.heading}
            headingColor="#8B4513"
            description={t.ceremony.description}
            date={t.ceremony.date}
            time={t.ceremony.time}
            dateStr="2026-09-17"
            time24="07:30"
            venue={t.ceremony.venue}
            address={t.ceremony.address}
            mapsUrl="https://maps.app.goo.gl/MqpJAxynrY69vB3y8"
            dressCode={t.ceremony.dressCode}
            photoBase="/images/ceremony"
            labels={t.labels}
            lang={lang}
          />

          <EventSlide
            label={t.reception.label}
            heading={t.reception.heading}
            headingColor="#7B1E3A"
            description={t.reception.description}
            date={t.reception.date}
            time={t.reception.time}
            dateStr="2026-09-17"
            time24="19:00"
            venue={t.reception.venue}
            address={t.reception.address}
            mapsUrl="https://maps.app.goo.gl/te89a7cwgYmjzLrd7"
            photoBase="/images/reception"
            labels={t.labels}
            lang={lang}
          />

          <FinalSlide t={t.final} lang={lang} />

          <footer
            style={{
              padding: '26px 20px',
              textAlign: 'center',
              background: '#fdf8f0',
              color: '#B8860B',
              fontSize: '13px',
              letterSpacing: '0.5px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #D4AF37, #8B4513)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '15px',
                boxShadow: '0 4px 10px rgba(139,69,19,.25)'
              }}
            >
              💻
            </div>
            <span>{t.final.footer.createdBy}</span>

            <span style={{ color: '#8B4513', fontWeight: 600 }}>
              {t.final.footer.phone}
            </span>
          </footer>
        </>
      )}
    </>
  )
}
