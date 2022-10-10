import React from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src= {Logo} alt ="pizza logo" />
        </div>
        <div className='rightSide'>
          <Link to= '/'>Home</Link>
          <Link to = '/menu'>Menu</Link>
          <Link to ='/about'>About</Link>
          <Link to ='/contact'>Contact</Link>
        </div>

    </div>
  )
}

export default NavBar