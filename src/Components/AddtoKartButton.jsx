import React from 'react'
import { Count } from './Home'

const AddtoKartButton = (props) => {
    // const kart = props.cart
    const kart = React.useContext(Count)
  return (
   <>
     <button style={{padding:props.padding}} onClick={kart}>add to cart</button>
   </>
  )
}

export default AddtoKartButton