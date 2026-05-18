const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE

export function formatDuration(milliseconds) {
  const safeMilliseconds = Math.max(0, milliseconds)
  const hours = Math.floor(safeMilliseconds / HOUR)
  const minutes = Math.floor((safeMilliseconds % HOUR) / MINUTE)
  const seconds = Math.floor((safeMilliseconds % MINUTE) / SECOND)

  return [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, '0'))
    .join(':')
}

export function timerInputToMilliseconds(inputs) {
  const hours = Number(inputs.hours) || 0
  const minutes = Number(inputs.minutes) || 0
  const seconds = Number(inputs.seconds) || 0

  return ((hours * 60 * 60) + (minutes * 60) + seconds) * SECOND
}

export function clampTimerValue(value, max) {
  const parsed = Number(value)

  if (value === '') {
    return ''
  }

  if (Number.isNaN(parsed) || parsed < 0) {
    return '0'
  }

  return String(Math.min(Math.floor(parsed), max))
}
