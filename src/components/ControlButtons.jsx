function ControlButtons({
  isRunning,
  onStart,
  onPause,
  onReset,
  startDisabled,
  pauseDisabled,
}) {
  return (
    <div className="control-row">
      <button
        className="control-button primary"
        type="button"
        onClick={onStart}
        disabled={startDisabled}
      >
        {isRunning ? 'Running' : 'Start'}
      </button>
      <button
        className="control-button secondary"
        type="button"
        onClick={onPause}
        disabled={pauseDisabled}
      >
        Pause
      </button>
      <button className="control-button ghost" type="button" onClick={onReset}>
        Reset
      </button>
    </div>
  )
}

export default ControlButtons
