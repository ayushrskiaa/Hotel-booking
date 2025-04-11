/* eslint-disable react-refresh/only-export-components */
// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    

    <div className='text-center m-4 bg-gradient-to-bl from-emerald-800 to-emerald-500 text-white p-4 text-3xl rounded-xl'>Github followers: {data.followers}
    <img className='rounded-xl' src={data.avatar_url} alt="Git picture" width={300} />
    </div>

   
    

  )
}


export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ayushrskiaa')
    return response.json()
}



