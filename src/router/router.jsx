import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router'
import App from '../App.jsx'
import StopwatchPage from '../pages/StopwatchPage.jsx'
import TimerPage from '../pages/TimerPage.jsx'

const rootRoute = createRootRoute({
  component: () => (
    <App>
      <Outlet />
    </App>
  ),
})

const stopwatchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: StopwatchPage,
})

const timerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/timer',
  component: TimerPage,
})

const routeTree = rootRoute.addChildren([stopwatchRoute, timerRoute])

export const navItems = [
  { label: 'Stopwatch', to: '/' },
  { label: 'Timer', to: '/timer' },
]

export const router = createRouter({ routeTree })
