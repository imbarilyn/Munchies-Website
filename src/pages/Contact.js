import React from 'react'
import pizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style ={{backgroundImage: `url(${pizzaLeft})`}}></div>
        <div className='rightSide'>
          <h1>Contact Us</h1>
          <form id ="contact-form" method = "POST">
            <label htmlFor='name'>Full Name</label>
            <input name='email' placeholder='Enter email...' type= 'text' required = 'required'/>
            <label htmlFor='email'>Full Name</label>
            <input name='email' placeholder='Enter full email...' type= 'email' required = 'required'/>
            <label htmlFor='message'>Message</label>
            <textarea rows= '6' name='message' placeholder='Enter message...' required ='required'/>
            <button type='submit'>Send Message</button>
          </form>
        </div> 
    </div>
  )
}

export default Contact