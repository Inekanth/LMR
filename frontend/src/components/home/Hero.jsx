import React from 'react'

const Hero = () => {
  return (
    <div className=' h-[75vh] flex justify-between'>
      <div className = "w-full lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
        <div className='bg-zinc-700 mt-4'>
          <h1 className='text-4xl lg:text-6xl font-semibold text-blue-500 text-center lg:text-left'>Discover Your Next <br/>Gread Read</h1>
          <p className='text-xl lg:text-left text-center font-light'>Uncover Captivating Stories, enriching knowledge and endless inspiration in our curated colloction of books</p>
        </div>

        <div className='mt-5'>
          <button className='text-yellow-200 text-center text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full'>Discover Books</button>
        </div>
      </div>

      <div className = "w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center">
        <img className='' src="https://images.icon-icons.com/12/PNG/256/books_library_1767.png" alt="hero" />
      </div>
    </div>
  )
}

export default Hero; 