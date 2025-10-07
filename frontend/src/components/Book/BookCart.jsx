import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";


const BookCart = ({data}) => {

  console.log (data);

    const [Date, setData] = useState ();

    useEffect(() => {
      const fetch = async () => {
        const response = await axios.get ("http://localhost:3001/ap1/v1/get-recent-book")
      }

      console.log(response);

    }, [])
    

  return (
    <Link to = {`/view-book-detaile ${data._id}`}>
        <div className='bg-zinc-800 rounded p-4 flex flex-col'>
          <div className='bg-zinc-900 rounded flex items-center justify-center'>
            <img src={data.url} alt="/" className='h-[25vh]'/>
          </div>

          <h1>Adei</h1>

          <h2 className='mt-4 text-xl text-zinc-200 font-semibold'>{data.title}</h2>
          <p className='mt-4 text-zinc-400 font-semibold'>by {data.author}</p>
          <p className='mt-4 text-zinc-400 font-semibold'>{data.price}</p>
        </div>
    </Link>
  )
}

export default BookCart