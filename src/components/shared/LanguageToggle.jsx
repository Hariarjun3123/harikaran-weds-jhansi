export default function LanguageToggle({ onToggle, label }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Switch language"
      style={{
        position: 'fixed',
        top: '18px',
        right: '18px',
        zIndex: 1000,
        padding: '9px 16px',
        borderRadius: '999px',
        border: '1px solid rgba(255,255,255,.4)',
        background: 'rgba(20,10,14,.55)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        color: '#fff',
        fontSize: '13px',
        fontWeight: 600,
        letterSpacing: '0.5px',
        cursor: 'pointer',
        boxShadow: '0 6px 16px rgba(0,0,0,.25)'
      }}
    >
      {label}
    </button>
  )
}
