import { spacing } from '../../utils/textStyle'

export default function SectionLabel({ children, color = '#B8860B', size = 13, lang }) {
  return (
    <p
      style={{
        margin: 0,
        color,
        letterSpacing: spacing('4px', lang),
        fontSize: `${size}px`,
        fontWeight: 600,
        textTransform: lang === 'ta' ? 'none' : 'uppercase'
      }}
    >
      {children}
    </p>
  )
}
