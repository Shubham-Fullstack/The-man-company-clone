import React from 'react'

const Search = () => {
  return (
  <div className='input' style={{position:"relative"}}>
   <input type='text' className='search' placeholder='search'/>
   <span className='fa-solid fa-magnifying-glass' style={{position:"absolute",fontSize:"16px",color:"gray",top:"9px",left:"15px"}}></span>
  </div>
  )
}

export default Search