import ControlButtons from '../components/ControlButtons.jsx'
import TimeCard from '../components/TimeCard.jsx'
import { useStopwatch } from '../services/useStopwatch.js'

function StopwatchPage() {
  const {displayTime, isRunning, start, pause, reset} = useStopwatch()

  return (
    <TimeCard
      badge="Stopwatch"
      title="Measure elapsed time"
      description="Start a session, pause when needed, and reset the count before the next round."
    >
      <div className="time-display" aria-live="polite">
        {displayTime}
      </div>

      <ControlButtons
        isRunning={isRunning}
        onStart={start}
        onPause={pause}
        onReset={reset}
        startDisabled={isRunning}
        pauseDisabled={!isRunning}
      />

    </TimeCard>
  )
}

export default StopwatchPage
