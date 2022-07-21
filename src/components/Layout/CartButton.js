import React from 'react'
import './CartButton.css'
import CartIcon from '../Cart/CartIcon'
function CartButton(props) {
  return (
    <div className="cart-button-wrapper">
     <button className="btn-cart" onClick={props.onClick}>
     <span className="icon"><CartIcon/> Cart</span>
     <div className="bg-num">
     <span className="items-cart">3</span>
     </div>
     
     
     </button>
    </div>
  )
}

export default CartButton