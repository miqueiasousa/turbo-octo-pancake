import { Route, Routes } from 'react-router-dom'
import Event from './pages/Event'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>imagine that's a home component</h1>} />
      <Route path="/event" element={<Event />} />
    </Routes>
  )
}
