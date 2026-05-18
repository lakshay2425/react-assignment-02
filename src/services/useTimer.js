import { useEffect, useMemo, useRef, useState } from 'react'
import { clampTimerValue, formatDuration, timerInputToMilliseconds } from './timeUtils.js'

const TICK_RATE = 250
const MAX_VALUES = {
  hours: 99,
  minutes: 59,
  seconds: 59,
}

const defaultInputs = {
  hours: '0',
  minutes: '5',
  seconds: '0',
}

export function useTimer() {
  const [inputs, setInputs] = useState(defaultInputs)
  const [remaining, setRemaining] = useState(() => timerInputToMilliseconds(defaultInputs))
  const [isRunning, setIsRunning] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const endsAtRef = useRef(0)
  const initialDuration = useMemo(() => timerInputToMilliseconds(inputs), [inputs])

  useEffect(() => {
    if (!isRunning) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      const nextRemaining = Math.max(0, endsAtRef.current - performance.now())
      setRemaining(nextRemaining)

      if (nextRemaining === 0) {
        setIsRunning(false)
        setIsFinished(true)
      }
    }, TICK_RATE)

    return () => window.clearInterval(intervalId)
  }, [isRunning])

  function updateInput(name, value) {
    const nextValue = clampTimerValue(value, MAX_VALUES[name])

    setInputs((current) => {
      const nextInputs = { ...current, [name]: nextValue }
      setIsFinished(false)
      setRemaining(timerInputToMilliseconds(nextInputs))
      return nextInputs
    })
  }

  function start() {
    if (isRunning || remaining <= 0) {
      return
    }

    endsAtRef.current = performance.now() + remaining
    setIsFinished(false)
    setIsRunning(true)
  }

  function pause() {
    if (!isRunning) {
      return
    }

    setRemaining(Math.max(0, endsAtRef.current - performance.now()))
    setIsRunning(false)
  }

  function reset() {
    setIsRunning(false)
    setIsFinished(false)
    setRemaining(initialDuration)
  }

  return {
    canStart: remaining > 0,
    displayTime: formatDuration(remaining),
    initialDisplayTime: formatDuration(initialDuration),
    inputs,
    isFinished,
    isRunning,
    pause,
    remaining,
    reset,
    start,
    statusLabel: isRunning ? 'Running' : isFinished ? 'Complete' : remaining > 0 ? 'Ready' : 'Set time',
    updateInput,
  }
}
