import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCart from '../Book/BookCart';

export const RecentlyAdded = () => {

  const [Data, setData] = useState ();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get ("http://localhost:3001/ap1/v1/get-recent-book")

      setData (response.data.data);
    }

    fetch ();

  }, []);
  
  return (
    <div className='mt-0 px-4'>

       <h4 className='text-yellow-200 text-2xl font-semibold text-center'>Recently Added Books...!</h4>
       <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {Data && Data.map((items, i)=> <div key={i}> <BookCart data = {items}/> {' '}</div>)}
       </div>
    </div>
  )
}

export default RecentlyAdded; 