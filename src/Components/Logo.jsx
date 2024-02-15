import React from 'react'
// import logo from "../Media/logo.png"
import { NavLink } from 'react-router-dom'
const Logo = () => {
  return (
    <figure>
        <NavLink to={"/home"}><img src={"https://www.themancompany.com/cdn/shop/files/logo_08a2688e-7c47-4081-a0e8-942d40f74a6d_250x.png?v=1663137227"} alt='logo' width="250px" height='54px'/></NavLink>
    </figure>
  )
}

export default Logo