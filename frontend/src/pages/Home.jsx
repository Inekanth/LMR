import React from 'react'
import Hero from '../components/home/hero'
import RecentlyAdded from '../components/home/RecentlyAdded'

const Home = () => {
  return (
    <div className= "bg-zinc-600 text-white" >
      <Hero/>
      <RecentlyAdded/>
    </div>
  )
}

export default Home