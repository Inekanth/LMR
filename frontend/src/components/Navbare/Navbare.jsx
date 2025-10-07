import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaGripLines} from "react-icons/fa"


const Navbare = () => {

  const link = [
    {
    title: "Home",
    link: "/",
  },
  {
    
  },
  {
    title: "All Books",
    link: "/all-books",
  },
  {
    title: "Cart",
    link: "/cart",
  },
  {
    title: "Profile",
    link: "/profile",
  },
]

  const [MobileNave, setMobileNave] = useState("hidden");



  return (
    <>
      <nav className='z-50 relative flex bg-gradient-to-br from-pink-950 via-yellow-600 to-cyan-200 text-white items-center px-6 py-4 justify-between cursor-pointer'>
      <Link to = "/" className='flex items-center'>
        <img 
          className='w-10 h-10'
          src="https://images.icon-icons.com/1148/PNG/512/1486503771-book-books-education-library-reading-open-book-study_81275.png" 
          alt="logo" />
        <h2 className='text-2xl font-semibold text-white'>MateCentre</h2>
      </Link>

      <div className='nav-links-matecentre block md:flex items-center gap-5'>
        <div className='hidden md:flex gap-4'> {link.map((items,i)=>(<Link to={items.link} className='hover:text-black transition-all duration-300' key={i}> {items.title} </Link>))} </div>
        
        <div className='hidden md:flex gap-4'>
          <Link to="/Login" className='py-1 px-4 hover:bg-blue-300 border-blue-500 rounded hover:text-black transition-all duration-300'>LogIn</Link>
          <Link to = "/SignUp" className='py-1 px-4 hover:bg-blue-300 border-blue-500 rounded hover:text-black transition-all duration-300'>Sign Up</Link>
        </div>
        <button className='block md:hidden text-white text-2xl hover:text-zinc-400' onClick={()=> MobileNave === "hidden" ? setMobileNave ("block") : setMobileNave("hidden") }>
          <FaGripLines/>
        </button>
      </div>
      </nav>

      <div className={`${MobileNave} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>
        {link.map((items,i)=> (
          <Link to={items.link} 
                className={`${MobileNave} text-white mb-4 text-4xl font-semibold hover:text-black transition-all duration-300`} 
                key={i}

                onClick={()=> MobileNave === "hidden" ? setMobileNave ("block") : setMobileNave("hidden")}

                >
                  {items.title} </Link>
                )
              )
        }

        <Link to="/Login" className={`${MobileNave} text-white text-4xl py-2 px-8 mb-4 hover:bg-blue-300 border-blue-500 rounded hover:text-black transition-all duration-300`} >LogIn</Link>
        <Link to = "/SignUp" className={`${MobileNave} text-white text-4xl py-2 px-8 mb-4 hover:bg-blue-300 border-blue-500 rounded hover:text-black transition-all duration-300`}>Sign Up</Link>
      </div>
    </>
  )
}

export default Navbare
