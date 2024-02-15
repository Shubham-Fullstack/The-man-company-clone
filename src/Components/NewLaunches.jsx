import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Ratings from './Ratings'
import Type from './Type'
import AddtoKartButton from './AddtoKartButton'
import { NavLink, json } from 'react-router-dom'

const NewLaunches = (props) => {
  const[scroll,setScroll] = useState({left:0})
 
    const[collections,setCollections] = useState([])
    useEffect(()=>{
        axios.get("https://ecommerce-api-pakj.onrender.com/newlaunches")
        .then((res)=>{
          setCollections(res.data)
        })
        .catch(err=> console.log(err))
    })
    let collection = collections.map((collection,index) =><div data-aos="fade-up" key={index} className='articles'><NavLink to={"/"+collection.link}><img src={collection.src} alt='article' width={"100%"} height={"271px"}/></NavLink><span><Type type={collection.type}/></span><h4>{collection.title}</h4><p>{collection.description}</p><h3 className='relative' style={{fontSize:"19px",display:"flex",columnGap:"25px"}}><span>{collection.price}</span> <del style={{color:"gray"}}>{collection.beforeprice}</del> <span style={{color:"red",fontSize:"19px"}}>{collection.discount}</span><Ratings class="article-rating">{collection.ratings}</Ratings></h3><AddtoKartButton padding="7px"/></div>);

    const prev = () =>{
      if(scroll.left == 0){
        setScroll({left:60})
      }
      else if(scroll.left >= 0){
        setScroll({left:0})
      }
      else{
       setScroll({left:scroll.left+100})
      }
    }
    const next = () =>{
      if(scroll.left <= -2400){
        setScroll({left:-2420})
      }
      else if(scroll.left <= -2420){
        setScroll({left:60})
      }
      else if(scroll.left <= -100){
         setScroll({left:-1})
      }
      
     else{
      setScroll({left:scroll.left-100})
     }
    }

  return (
    <div className='col-12 position-relative d-flex justify-content-center p-4 overflow-hidden collection-container' style={{minHeight:"620px"}}>
    <div className='newlaunche-collections position-absolute' style={scroll}>
      {collection}
    </div>
    <button className='position-absolute top-0 bottom-0 start-0 fa-solid fa-chevron-left px-3' onClick={()=>{prev();}}></button>
    <button className='position-absolute top-0 bottom-0 end-0 fa-solid fa-chevron-right px-3' onClick={()=>{next();}}></button>
    </div>
  )
}

export default NewLaunches