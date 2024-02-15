import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Ratings from './Ratings'

const GroomingInfleuncers = () => {

    const [collections,setCollections] = useState([])

    useEffect(()=>{
      axios.get("https://ecommerce-api-pakj.onrender.com/groominginfluencers")
      .then((res)=>{
        setCollections(res.data)
      })
      .catch(err=>console.log(err))
    })

    let collection = collections.map((collection,index) =><div data-aos="fade-up" key={index} className='articles' style={{padding:0,overflow:"hidden",maxWidth:"19%"}}><video autoPlay="on" muted loop src={collection.src} alt='article' width="100%"></video><div className='details'><h2 style={{textTransform:"capitalize",fontSize:"17px",margin:"0 0 15px 0"}}>{collection.title}</h2><h6>{collection.price}</h6><Ratings class="rating">{collection.ratings}</Ratings></div>
   </div>);
  return (
    <div className='newlaunche-collections grooming-influencers'>
      {collection}
    </div>
  )
}

export default GroomingInfleuncers