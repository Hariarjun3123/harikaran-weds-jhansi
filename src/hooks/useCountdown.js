import { useState, useEffect } from 'react'

function getTimeParts(targetDate) {
  const diff = new Date(targetDate) - new Date()
  const clamped = Math.max(diff, 0)

  return {
    days: Math.floor(clamped / 86400000),
    hours: Math.floor((clamped % 86400000) / 3600000),
    minutes: Math.floor((clamped % 3600000) / 60000),
    seconds: Math.floor((clamped % 60000) / 1000),
    isPast: diff <= 0
  }
}

export function useCountdown(targetDate) {
  // compute synchronously on first render — no 1s flash of zeros
  const [time, setTime] = useState(() => getTimeParts(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeParts(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return time
}
