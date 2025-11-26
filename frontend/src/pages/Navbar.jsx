
import React from 'react'
import Homepage from './Homepage'
import Loginpage from './Loginpage'
import Signupapage from './SignupPage'
import WishedPage from './WishedPage'
import {Link} from 'react-router-dom'
import "../csspages/Navbar.css"

const Navbar = () => {
  return (
    <div className='Nav-container'>
        <ul className='Nav-items'>
            <Link to={"/"} className='item' id="home">Home</Link>
            <Link to={"/login"} className='item' id="login">login</Link>
            <Link to={"/signup"} className='item' id="signup">signup</Link>
            <Link to={"/liked"} className='item' id="liked">Wishlist </Link>
        </ul>
    </div>
  )
}

export default Navbar