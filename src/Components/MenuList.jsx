import React from 'react'

const MenuList = () => {
    const list =["home","trending","categories","by concerns","more"]
    let Item=list.map((listItem,index)=><li className='menu-li' key={index}>{listItem}</li>);
  return (
   <ul className='menu-items'>
          {Item}
   </ul>
  )
}

export default MenuList