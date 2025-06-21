import React from 'react'
import Home from './pages/Home'
import Navbare from './components/Navbare/Navbare'
import About from './pages/About'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='class="h-screen bg-gradient-to-br from-pink-500 via-yellow-300 to-cyan-300"'>
      <Navbare />
      
      <Home/>
      <About />
      
      <Footer />
    </div>
  )
}

export default App

