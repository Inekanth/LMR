import React, { useState } from 'react'
import axios from 'axios';
import BookCart from '../Book/BookCart';

export const RecentlyAdded = () => {

  const [Data, setData] = useState ();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get ("http://localhost:3001/ap1/v1/get-recent-book")

      console.log (response);
    }

    fetch ();

  }, []);
  


  
  return (
    <div className='mt-0 px-4'>
       <h4 className='text-yellow-200 text-2xl font-semibold text-center'>Recently Added Books...!</h4>
       <div>
       </div>
    </div>
  )
}

export default RecentlyAdded; 