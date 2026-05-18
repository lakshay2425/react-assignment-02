function TimeCard({ badge, title, description, children }) {
  return (
    <section className="time-card">
      <div className="card-heading">
        <span className="badge">{badge}</span>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      {children}
    </section>
  )
}

export default TimeCard
