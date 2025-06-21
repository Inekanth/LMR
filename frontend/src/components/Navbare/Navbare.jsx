import React from 'react'

const Navbare = () => {
  return (
    <div className='flex bg-gradient-to-br from-pink-950 via-yellow-600 to-cyan-200 text-white items-center px-8 py-10 justify-between'>
      <div className='text-2xl font-semibold text-white'>
        <h2>MateCentre</h2>
      </div>

      <div className='flex items-center'>
        <ul className='flex gap-3'>
          <li>Home</li>
          <li>About</li>
          <li>Contect</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbare
