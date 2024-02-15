import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FeaturedBox = () => {
   
  const[cards,setCard]=useState([])

  useEffect(()=>{
      axios.get("https://ecommerce-api-pakj.onrender.com/featured")
      .then(arr=>{
          setCard(arr.data)
      })
      .catch(err=>{
        console.log(err)
      })
  })

 let data = cards.map((card ,index)=><div key={index}><figure><img src={card.src} width='100%' height='171px' alt='featured'/><figcaption>{card.title}</figcaption></figure></div>)
  return (
    <div className='collection-list'>
          {data}
    </div>
  )
}

export default FeaturedBox