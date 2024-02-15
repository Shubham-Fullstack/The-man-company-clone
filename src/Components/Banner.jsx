import { useState } from 'react'

const Banner = () => {
  const[prev,setPrev]=useState({left:"-100px"})
  const[next,setNext]=useState({right:"-100px"})

  const leftIn = () =>{
     setPrev({...prev,left:"55px"})
  }
  const rightIn = () =>{
      setNext({...next,right:"55px"})
  }
  const leftOut = () =>{
      setPrev({...prev,left:"-100px"})
   }
   const rightOut = () =>{
       setNext({...next,right:"-100px"})
   }
  return (
    <div className='banner'>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" onMouseOver={()=>{ leftIn();rightIn()}} onMouseOut={()=>{leftOut();rightOut()}}>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://www.themancompany.com/cdn/shop/files/Valentine_BannerDESKTOP_B_1500x.jpg?v=1706609473" className="d-block w-100 img-fluid" height="500px" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
      <img src="https://www.themancompany.com/cdn/shop/files/Valentine_Thematic_Banner_Desktop_option_2_1500x.jpg?v=1706609415" className="d-block w-100" height="500px" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev border" style={prev} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next border" style={next} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Banner