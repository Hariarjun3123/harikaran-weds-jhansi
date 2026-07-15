// Builds a Google Calendar link and a downloadable .ics file for "Add to Calendar" buttons.
// dateStr: 'YYYY-MM-DD', timeStr: 'HH:MM' (24hr), durationHours: number
function toGoogleDate(dateStr, timeStr, durationHours) {
  const start = new Date(`${dateStr}T${timeStr}:00`)
  const end = new Date(start.getTime() + durationHours * 3600000)
  const fmt = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  return `${fmt(start)}/${fmt(end)}`
}

export function googleCalendarUrl({ title, details, location, dateStr, timeStr, durationHours = 3 }) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: toGoogleDate(dateStr, timeStr, durationHours),
    details: details || '',
    location: location || ''
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function downloadIcs({ title, details, location, dateStr, timeStr, durationHours = 3 }) {
  const start = new Date(`${dateStr}T${timeStr}:00`)
  const end = new Date(start.getTime() + durationHours * 3600000)
  const fmt = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${(details || '').replace(/\n/g, '\\n')}`,
    `LOCATION:${location || ''}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n')

  const blob = new Blob([ics], { type: 'text/calendar' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${title.replace(/\s+/g, '-')}.ics`
  a.click()
  URL.revokeObjectURL(url)
}
