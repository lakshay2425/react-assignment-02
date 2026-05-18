import ControlButtons from '../components/ControlButtons.jsx'
import TimeCard from '../components/TimeCard.jsx'
import TimerInput from '../components/TimerInput.jsx'
import { useTimer } from '../services/useTimer.js'

function TimerPage() {
  const {isFinished, displayTime, inputs, updateInput, isRunning, start, pause, reset, canStart} = useTimer()

  return (
    <TimeCard
      badge="Timer"
      title="Set a custom countdown"
      description="Choose hours, minutes, and seconds, then run a focused countdown."
    >
      <div className={`time-display ${isFinished ? 'complete' : ''}`} aria-live="polite">
        {displayTime}
      </div>

      <TimerInput values={inputs} onChange={updateInput} disabled={isRunning} />

      <ControlButtons
        isRunning={isRunning}
        onStart={start}
        onPause={pause}
        onReset={reset}
        startDisabled={!canStart || isRunning}
        pauseDisabled={!isRunning}
      />
    </TimeCard>
  )
}

export default TimerPage
