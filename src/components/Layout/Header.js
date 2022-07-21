import React from 'react'
import './Header.css'
import headerimg from '../../assets/meals-header.jpg';
import CartButton from './CartButton';
function Header(props) {
  return (

    <div className="wrapper-header">
    <header className="header-top">
     <h1>ReactMeals</h1>
     <button ><CartButton onClick={props.onShowCart} /></button>
    </header>
    <div className="header-hero-img">
     <img src={headerimg} alt='A Table of delicious food!' />
    </div>

    </div>
   
  )
}

export default Header