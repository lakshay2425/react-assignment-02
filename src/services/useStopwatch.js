import { useEffect, useRef, useState } from 'react'
import { formatDuration } from './timeUtils.js'

const TICK_RATE = 250

export function useStopwatch() {
  const [elapsed, setElapsed] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const startedAtRef = useRef(0)
  const storedElapsedRef = useRef(0)

  useEffect(() => {
    if (!isRunning) {
      return undefined
    }

    startedAtRef.current = performance.now()

    const intervalId = window.setInterval(() => {
      setElapsed(storedElapsedRef.current + performance.now() - startedAtRef.current)
    }, TICK_RATE)

    return () => window.clearInterval(intervalId)
  }, [isRunning])

  function start() {
    if (isRunning) {
      return
    }

    setIsRunning(true)
  }

  function pause() {
    if (!isRunning) {
      return
    }

    const nextElapsed = storedElapsedRef.current + performance.now() - startedAtRef.current
    storedElapsedRef.current = nextElapsed
    setElapsed(nextElapsed)
    setIsRunning(false)
  }

  function reset() {
    storedElapsedRef.current = 0
    startedAtRef.current = performance.now()
    setElapsed(0)
    setIsRunning(false)
  }

  return {
    displayTime: formatDuration(elapsed),
    elapsed,
    isRunning,
    pause,
    reset,
    start,
    statusLabel: isRunning ? 'Running' : elapsed > 0 ? 'Paused' : 'Ready',
  }
}
