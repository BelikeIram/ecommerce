import React from 'react'
import  ReactDOM  from 'react-dom'

const CartComponent = ({children}) => {

  const cart = document.getElementById("cart-component")
  

  return (
      <div className={'col-lg-4'}>
        {ReactDOM.createPortal(children, cart)}
      </div>
  ) 
}

export default CartComponent