
import { Link } from '@tanstack/react-router'

const navItems = [
  { label: 'Stopwatch', to: '/' },
  { label: 'Timer', to: '/timer' },
]

function App({ children }) {
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Focus clock</span>
          <h1>Stopwatch and Timer</h1>
          <p>
            Track sprints, breaks, and countdowns with calm controls and a
            clear, readable display.
          </p>
        </div>

        <nav className="mode-switch" aria-label="Timer modes">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="mode-link"
              activeProps={{ className: 'mode-link active' }}
              activeOptions={{ exact: item.to === '/' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </section>

      {children}
    </main>
  )
}

export default App
