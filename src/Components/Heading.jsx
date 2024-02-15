import React from 'react'

const Heading = (props) => {
  return (
   <h3 style={{padding:"35px",fontSize:"2rem",textAlign:"center",margin:"0",textTransform:"uppercase"}}><i style={{fontWeight:"100"}}>{props.heading} <br/></i><span style={{fontWeight:"bolder"}}>{props.sub}</span></h3>
  )
}

export default Heading