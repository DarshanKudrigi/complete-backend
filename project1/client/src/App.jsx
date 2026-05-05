import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Card from './pages/Card'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={Card} />
        <Route path="/about" element={<h1>About Us</h1>} />
      </Routes>
    </Router>
  )
}

export default App
