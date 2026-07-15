// Tamil Unicode block is U+0B80–U+0BFF. Detecting it lets headings automatically use a
// smaller/safer font scale for Tamil text, since Tamil glyphs run visually wider than Latin
// characters at the same font-size — using one clamp() for both scripts made Tamil headings
// overflow their container and look mis-centered.
const TAMIL_RANGE = /[\u0B80-\u0BFF]/

export function isTamilText(str) {
  return TAMIL_RANGE.test(str || '')
}

// Pass the two clamp() pieces already tuned for English; this scales them down for Tamil.
export function headingClamp(str, minPx, prefVw, maxPx) {
  if (isTamilText(str)) {
    return `clamp(${Math.round(minPx * 0.78)}px, ${(prefVw * 0.8).toFixed(1)}vw, ${Math.round(maxPx * 0.78)}px)`
  }
  return `clamp(${minPx}px, ${prefVw}vw, ${maxPx}px)`
}
