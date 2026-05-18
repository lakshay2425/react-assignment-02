const fields = [
  { key: 'hours', label: 'Hours', max: 99 },
  { key: 'minutes', label: 'Minutes', max: 59 },
  { key: 'seconds', label: 'Seconds', max: 59 },
]

function TimerInput({ values, onChange, disabled }) {
  return (
    <div className="input-grid" aria-label="Timer duration">
      {fields.map((field) => (
        <label className="time-input" key={field.key}>
          <span>{field.label}</span>
          <input
            type="text"
            value={values[field.key]}
            onChange={(event) => onChange(field.key, event.target.value)}
            disabled={disabled}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </label>
      ))}
    </div>
  )
}

export default TimerInput
