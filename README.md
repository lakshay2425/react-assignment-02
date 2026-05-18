# Stopwatch and Timer

A polished React application for tracking elapsed time with a stopwatch and running custom countdowns with a timer. The app uses Vite, TanStack Router, modular components, and service hooks for time/state logic.

## Features

- Stopwatch with start, pause, and reset controls
- Timer with custom hours, minutes, and seconds input
- Start, pause, and reset controls for both modes
- Clear `HH:MM:SS` time display
- Page-based navigation with TanStack Router
- Responsive orange and green UI without blue or purple grading
- Component-focused rendering with business logic kept in `src/services`

## Project Structure

```text
src/
  components/
    ControlButtons.jsx
    StatStrip.jsx
    TimeCard.jsx
    TimerInput.jsx
  pages/
    StopwatchPage.jsx
    TimerPage.jsx
  router/
    router.jsx
  services/
    timeUtils.js
    useStopwatch.js
    useTimer.js
  App.jsx
  index.css
  main.jsx
```

## Routes

- `/` - Stopwatch page
- `/timer` - Timer page

## Getting Started

Install dependencies:
```powershell
pnpm.cmd install
```

Start the development server:
```powershell
pnpm.cmd vite --host 127.0.0.1 --port 5173
```

Build for production:
```powershell
pnpm.cmd run build
```

Run lint checks:
```powershell
pnpm.cmd run lint
```

## Tech Stack

- React
- Vite
- TanStack Router
- CSS
