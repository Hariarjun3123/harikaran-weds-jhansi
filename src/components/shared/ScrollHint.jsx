import { motion, useReducedMotion } from 'framer-motion'

export default function ScrollHint({ color = '#fff', bottom = '28px' }) {
  const reduce = useReducedMotion()

  return (
    <div
      style={{
        position: 'absolute',
        bottom,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        zIndex: 50,
        pointerEvents: 'none'
      }}
    >
      <motion.div
        animate={reduce ? {} : { y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color
        }}
      >
        <span style={{ fontSize: '12px', letterSpacing: '3px', marginBottom: '6px' }}>
          SCROLL
        </span>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </div>
  )
}
