import React, { useState } from 'react'
import Type from './Type'
import Ratings from './Ratings'
import AddtoKartButton from './AddtoKartButton'
import { Review } from './Home'
// import { Count } from './Home'

const Product = (props) => {
    const ratings = React.useContext(Review)
    const[count,setCount]=useState(1)
    const reset = () =>{
        if(count<=0){
            setCount(0)
          }
    }
  return (
   <>
    <div className='product-container' id={props.id}>
        <div className='image-container'>
            <img src={props.url} width={"100%"} alt='product'/>
        </div>
        <div className='description-container'>
            <Type type={props.type}/>
            <Ratings class="product-rating">{ratings}</Ratings>
            <h2>{props.title}</h2>
            <span>{props.description}</span>
            <div className='product-description'>
                <div className='product-price'>
                    <span style={{fontSize:"20px",fontWeight:"500"}}>MRP</span>
                   <div style={{display:"flex",columnGap:"22px"}}><span style={{fontWeight:"600",fontSize:"20px"}}>{props.price}</span><del style={{color:"#adadad",fontSize:"18px"}}>{props.beforeprice}</del><span style={{color:"#c22323",fontSize:"20px",fontWeight:"600"}}>{props.discount}</span></div>
                   <span>inclusive of all taxes</span>
                </div>
                <div className='quantity'>
                    <span>Quantitiy</span>
                    <div className='quantity-wrap'>
                        <span className='fa-solid fa-minus' onClick={()=>{ setCount(count - 1); reset()}}></span>
                        <input type='tel' value={count} readOnly/>
                        <span className='fa-solid fa-plus' onClick={()=> setCount(count + 1)}></span>
                    </div>
                </div>
            </div>
            <AddtoKartButton padding="12px"/>
        </div>
    </div>
   </>
  )
}

export default Product