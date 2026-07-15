// Wide letter-spacing looks great on English all-caps text, but Tamil characters are often
// built from multiple combined Unicode codepoints (base consonant + vowel sign). Applying
// the same letter-spacing forces a gap INSIDE those combined characters, visually shattering
// them apart. This also inflates the rendered width significantly, which was the likely cause
// of layout overflow on mobile. Use this instead of a raw px value anywhere translated text
// might render in Tamil.
export function spacing(px, lang) {
  return lang === 'ta' ? '0.2px' : px
}
