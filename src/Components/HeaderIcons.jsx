// import React, { useState } from 'react'

import React from "react";
import { NavLink } from "react-router-dom";
import { Count, Hide, Kartless, Show, Status, Visible } from "./Home";

const HeaderIcons = (props) => {

 const headerIcons=[{link:"/account",class:"fa-regular fa-user"},{link:"/account",class:"fa-solid fa-grip-lines-vertical"},{link:"/Kart",class:"fa-solid fa-cart-shopping"},{link:"/kart",class:"fa-solid fa-grip-lines-vertical"},{link:"/Trackorder",class:"fa-solid fa-location-dot"}]
 let headicons = headerIcons.map((headerIcon,index)=><NavLink to={headerIcon.link} key={index}><span className={headerIcon.class} style={{color:"white"}}></span></NavLink>)
   
  let itemCount = React.useContext(Count)
  let show = React.useContext(Show)
  let hide = React.useContext(Hide)
  let css = React.useContext(Visible)
  let status = React.useContext(Status)
  let kartless = React.useContext(Kartless)

          //  console.log(kartless,show,css,itemCount)
      // }

  return (
    <div style={{display:"flex",columnGap:"15px",fontSize:"20px",alignItems:"center",justifyContent:"flex-start",position:"relative",marginLeft:"30px"}}>
     {headicons}
     <span className="kart" style={{position:"absolute",bottom:"13px",left:"68px",color:"white",fontSize:"12px",padding:"2px 7px",backgroundColor:"black",borderRadius:"50%"}} onMouseOver={show} onMouseLeave={hide} onClick={kartless}>{itemCount}</span><div className="empty-kart" onMouseOver={show} onMouseLeave={hide} style={css}>{status}</div>
    </div>
  )
}

export default HeaderIcons
// const[count,setCount]= useState("0");
    // setCount(count+1);

// Prop drilling 

    // let itemCount = props.count
      // const kartless = props.kart;
      // console.log(kartless)
      // let show = props.show;
      // let hide = props.hide;
      // let css = props.css;
      // let status = props.status
      // const overCss ={