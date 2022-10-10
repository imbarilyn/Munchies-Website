import React, { useState }from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'
import ReorderIcon from '@material-ui/icons/Reorder';

function NavBar() {
  const [openLinks, setOpenLinks] = useState(false)

  return (
    <div className='navbar'>
        <div className='leftSide' id = {openLinks? "open": "close"}>
            <img src= {Logo} alt ="pizza logo" />
            <div className = 'hiddenLinks'>
              <Link to= '/'>Home</Link>
              <Link to = '/menu'>Menu</Link>
              <Link to ='/about'>About</Link>
              <Link to ='/contact'>Contact</Link>           
            </div>
        </div>
        <div className='rightSide'>
          <Link to= '/'>Home</Link>
          <Link to = '/menu'>Menu</Link>
          <Link to ='/about'>About</Link>
          <Link to ='/contact'>Contact</Link>
          <button onClick={() => setOpenLinks(!openLinks)}>
          <ReorderIcon />
          </button>
          
        </div>

    </div>
  )
}

export default NavBar