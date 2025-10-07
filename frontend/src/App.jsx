import React from 'react'
  import { Routes, Route } from 'react-router-dom'
  import { BrowserRouter as Router } from 'react-router-dom'

import Navbare from './components/Navbare/Navbare'
import Home from './pages/home'
import About from './pages/About'
import Allbooks from './pages/Allbooks'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Cart from './pages/cart'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className=''>
      <Router>
        <Navbare />
          <Routes>
            <Route exact path='/' element = {<Home/>} />
            <Route path='/all-books' element = {<Allbooks />} />
            <Route path='/Login' element = {<Login />} />
            <Route path='/SignUp' element = {<SignUp />} />
            <Route path='/cart' element = {<Cart/>} />
            <Route path='/profile' element = {<Profile />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App