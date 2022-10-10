import React from 'react';
import multiplePizza from '../assets/multiplePizzas.jpeg'
import '../styles/Abouts.css'

function About() {
  return (
    <div className ="about">
      <div className='aboutTop' style={{backgroundImage: `url(${multiplePizza })`}}></div>
      <div className='aboutBottom'>
        <h1>About US</h1>
        <p>Imbari's Pizza is Franchise founded by Linah Muhonja Imbari in Kenya in the year 2026. It was at this year when Linah Muhonja Ventured into food industry after coming back from Rochester where she was working in a Tech Company. Due to her success in kenya she git inspired to start other brancges in other towns in Kenya: Kisumu, Mombasa, Nakuru, Kiambu just to mention but a few. n a short span of time, she became a multi-brand franchisee in the neighbouring countries like Tanzania, Congo. Tunisia and Egypt. The business is solely on Pizza preparation and selling.</p>
        
      </div>
    </div>
  )
}

export default About