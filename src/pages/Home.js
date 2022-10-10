import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
  const navigate = useNavigate()
  return (
    <div className='home'>
      <div className='headerContainer' style={{backgroundImage: `url(${heroImage})`}} >
        <h1>Imbari's Pizza</h1>
        <p>LET'S GIVE YOU A TASTE OF HEAVEN</p>
        <button onClick={()=>navigate("/menu")}>ORDER NOW</button>
      </div>
    </div>
  )
}

export default Home