import React from 'react'
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import MenuList from './MenuList';

const Menu = () => {
    const [open, setOpen] = useState(false);
    const[menuToggle,setMenuToggle]= useState({backgroundColor:"",boxShadow:""})
    // 0 0 10px rgb(255, 255, 255)

    const toggle = () => {
        if(menuToggle.backgroundColor === ""){
          setMenuToggle({backgroundColor:"rgba(255, 255, 255, 0.096)",boxShadow:"0 0 10px rgb(255, 255, 255)"})
        }
        else{
          setMenuToggle({backgroundColor:"",boxShadow:""})
        }
    }
  return (
<>
<span className='fa-solid fa-bars' style={menuToggle} onClick={() =>{ setOpen(!open); toggle() }}></span>
<div className='menu-list'>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{padding:"0",width:"150px"}}>
           <MenuList/>
            </Card>
          </div>
        </Collapse>
      </div>
</>
  )
}

export default Menu