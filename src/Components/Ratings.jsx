import React from 'react'

const Ratings = (props) => {
 
  return (
    <>
    <div className= {props.class}><span className='fa-solid fa-star' style={{color:"rgb(194, 35, 35)"}}></span>&nbsp;&nbsp;<span>{props.children}</span></div>
    </>
  )
}

export default Ratings