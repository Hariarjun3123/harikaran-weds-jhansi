export default function Divider({ width = 90, color = '#D4AF37', margin = '20px auto' }) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: '2px',
        background: color,
        margin
      }}
    />
  )
}
