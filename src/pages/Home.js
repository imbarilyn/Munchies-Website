import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  return (
    <div className='home'>
      <div className='headerContainer'>
        <h1>Imbari's Pizza Point</h1>
        <p>LET'S GIVE YOU A TASTE OF HEAVEN</p>
        <button onClick={()=>navigate("/menu")}>ORDER NOW</button>
      </div>
    </div>
  )
}

export default Home