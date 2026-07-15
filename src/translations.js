// All translatable UI copy lives here. Names (Harikaran, Arputham, Jhansi) are kept as-is in
// both languages since transliterating personal names risks getting the spelling wrong —
// only descriptive/label text is translated.
export const translations = {
  en: {
    toggleLabel: 'தமிழ்',
    hero: {
      blessing: 'WITH THE BLESSINGS OF OUR FAMILIES',
      title: 'WEDDING INVITATION',
      together: 'TOGETHER WITH THEIR FAMILIES',
      tagline: ['Two Hearts,', 'One Beautiful Journey ❤️']
    },
    countdown: {
      specialDay: 'OUR SPECIAL DAY',
      heading: 'Countdown',
      done: "It's Here",
      days: 'DAYS',
      hours: 'HOURS',
      mins: 'MINS',
      secs: 'SECS',
      footer: ['Every moment brings us closer to', 'the beginning of our forever together ❤️']
    },
    labels: {
      date: 'DATE',
      time: 'TIME',
      venue: 'VENUE',
      directions: 'Directions',
      calendar: 'Add to Calendar',
      dressCode: 'DRESS CODE'
    },
    ceremony: {
      label: '🌅 MORNING CEREMONY',
      heading: 'Wedding & Muhurtham',
      description:
        'With the blessings of our families, we warmly invite you to witness our sacred wedding ceremony and Muhurtham as we begin our beautiful journey together.',
      dressCode: 'Traditional Attire',
      date: '17 September 2026',
      time: '8:00 AM onwards',
      venue: 'Aathu Kovil Muneeswaran',
      address: '25HW+9QC, Ekkatuthangal, St. Thomas Mount, Chennai, Tamil Nadu 600032'
    },
    reception: {
      label: '🌇 EVENING CELEBRATION',
      heading: 'Reception',
      description:
        'Join us for an evening filled with love, laughter, music and celebration as we celebrate this joyful beginning with our family and friends.',
      date: '17 September 2026',
      time: '7:00 PM onwards',
      venue: 'Subham AC Hall',
      address: 'Opposite Petrol Bunk, MMDA Colony Main Road, Razaak Garden, Arumbakkam, Chennai, Tamil Nadu 600106'
    },
    final: {
      heading: 'Thank You',
      sub: 'FOR YOUR LOVE & BLESSINGS',
      msg1: ['Your presence on our special day', 'will make our celebration', 'even more meaningful.'],
      msg2: ['We look forward to celebrating', 'this beautiful beginning', 'with you.']
    }
  },
  ta: {
    toggleLabel: 'English',
    hero: {
      // "parents and elders" — matches real invitation phrasing, not generic "families"
      blessing: 'பெற்றோர் மற்றும் பெரியோர்களின் ஆசியுடன்',
      title: 'திருமண அழைப்பிதழ்',
      together: 'இரு குடும்பங்களும் இணைந்து',
      // A genuine wedding well-wish phrase ("may heart and heart unite, may life flourish!")
      // pulled from real Tamil invitation exchanges, not a literal translation.
      tagline: ['மனமும் மனமும் சேரட்டும்,', 'வாழ்க்கை வளமாகட்டும்! ❤️']
    },
    countdown: {
      specialDay: 'எங்கள் மங்கள நாள்',
      heading: 'நல்நாள் நெருங்குகிறது',
      done: 'நாள் வந்துவிட்டது!',
      days: 'நாட்கள்',
      hours: 'மணி',
      mins: 'நிமிடம்',
      secs: 'வினாடி',
      footer: ['ஒவ்வொரு கணமும் எங்கள் என்றென்றைக்குமான', 'பயணத்தின் தொடக்கத்தை நெருக்கமாக்குகிறது ❤️']
    },
    labels: {
      date: 'தேதி',
      time: 'நேரம்',
      venue: 'நிகழிடம்',
      directions: 'வழிகாட்டி',
      calendar: 'நாட்காட்டியில் சேர்',
      dressCode: 'உடை முறை'
    },
    ceremony: {
      label: '🌅 காலை மங்கள நிகழ்வு',
      heading: 'திருமணம் & முகூர்த்தம்',
      description:
        'எங்கள் குடும்பத்தினரின் ஆசியுடன், எங்கள் புனித திருமண நிகழ்ச்சி மற்றும் முகூர்த்தத்தை நேரில் கண்டு மகிழ, அன்புடன் உங்களை அழைக்கிறோம்.',
      dressCode: 'பாரம்பரிய உடை',
      date: '17 செப்டம்பர் 2026',
      time: 'காலை 8:00 மணி முதல்',
      // Transliterated place names — please double-check these against the real signage/
      // address yourself before printing or sending, transliteration of local place names
      // is the one thing I can't fully guarantee accuracy on.
      venue: 'ஆத்து கோவில் முனீஸ்வரன்',
      address: '25HW+9QC, எக்காட்டுத்தாங்கல், செயின்ட் தாமஸ் மவுண்ட், சென்னை, தமிழ்நாடு 600032'
    },
    reception: {
      label: '🌇 மாலை மங்கள விழா',
      heading: 'வரவேற்பு விழா',
      description:
        'அன்பு, மகிழ்ச்சி, இசை நிறைந்த மாலைப் பொழுதில், எங்கள் குடும்பத்தினர் மற்றும் நண்பர்களுடன் இந்த மகிழ்ச்சியான தொடக்கத்தை கொண்டாட எங்களுடன் இணையுங்கள்.',
      date: '17 செப்டம்பர் 2026',
      time: 'மாலை 7:00 மணி முதல்',
      venue: 'சுபம் ஏசி ஹால்',
      address: 'பெட்ரோல் பங்க் எதிரில், எம்.எம்.டி.ஏ காலனி பிரதான சாலை, ரசாக் தோட்டம், அரும்பாக்கம், சென்னை, தமிழ்நாடு 600106'
    },
    final: {
      heading: 'நன்றி',
      sub: 'உங்கள் அன்புக்கும் ஆசிக்கும்',
      msg1: ['எங்கள் சிறப்பு நாளில் உங்கள் வருகை', 'எங்கள் கொண்டாட்டத்தை', 'இன்னும் அர்த்தமுள்ளதாக்கும்.'],
      msg2: ['இந்த அழகிய தொடக்கத்தை', 'உங்களுடன் கொண்டாட', 'ஆவலுடன் காத்திருக்கிறோம்.'],
      // A traditional-style Tamil blessing line, shown only in Tamil mode as a small extra
      // touch beneath the names — not a quoted song/poem, just a common wedding well-wish.
      quote: 'இரு மனங்கள் இணையும் இந்நல் நேரத்தில், அனைவரின் ஆசிகளும் எங்களுடன் இருக்கட்டும்.'
    }
  }
}

// Thirukkural 45, chapter இல்வாழ்க்கை (Domestic Life) — the couplet customarily quoted on
// Tamil wedding invitations for married life. ~2000 years old, public domain.
// Follows the language toggle fully: Tamil verse + Tamil note in Tamil mode,
// English verse + English note in English mode — no mixed bilingual display.
export const kural = {
  verse: {
    ta: ['அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை', 'பண்பும் பயனும் அது.'],
    en: ['Where love and virtue dwell as one,', "that is married life's truest worth and reward."]
  },
  note: {
    en: 'A timeless reminder that love and virtue are the heart of a meaningful marriage.',
    ta: 'இல்வாழ்க்கையில் அன்பும் நல்லொழுக்கமும் இருந்தால், அதுவே அதன் சிறப்பும் பயனும் ஆகும்.'
  },
  ref: { en: 'Thirukkural 45', ta: 'திருக்குறள் 45' }
}
