import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import animation from "./assets/animation.webp"

const App = () => {
  return (
    <>
    <img src={animation} className='Animation-logo' alt="logo"/>
      <BrowserRouter>
          <Home/>
      </BrowserRouter>
    </>
  )
}

export default App