import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";

const Main = (props) => {
  useEffect(()=>{
    Aos.init()
  })
  return (
    <main className='.container-fluid px-2 py-4 col-12'>
       {props.children}
    </main>
  )
}

export default Main