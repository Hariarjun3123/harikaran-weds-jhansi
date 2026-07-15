import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: (delay = 0) => ({
    transition: { staggerChildren: 0.06, delayChildren: delay }
  })
}

const letter = {
  hidden: { opacity: 0, y: 24, scale: 0.5 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 12 } }
}

// Splits text into per-character motion.span so it "types" itself in, letter by letter.
export default function AnimatedName({ text, delay = 0, style }) {
  return (
    <motion.span
      variants={container}
      custom={delay}
      initial="hidden"
      animate="visible"
      style={{ display: 'inline-block', ...style }}
    >
      {text.split('').map((char, i) => (
        <motion.span key={i} variants={letter} style={{ display: 'inline-block' }}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
