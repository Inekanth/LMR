import React from 'react'
import Home from './pages/Home'
import Navbare from './components/Navbare/Navbare'
import About from './pages/About'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbare />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
