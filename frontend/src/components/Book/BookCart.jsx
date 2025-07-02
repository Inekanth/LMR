import React, { useEffect, useState } from 'react'
import axios from "axios";


const BookCart = () => {

    const [Date, setData] = useState ();

    useEffect(() => {
      const fetch = async () => {
        const response = await axios.get ("http://localhost:3001/ap1/v1/get-recent-book")
      }

      console.log(response);

    }, [])
    

  return (
    <div>
        
    </div>
  )
}

export default BookCart