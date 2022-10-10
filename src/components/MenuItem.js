import React from 'react'

function MenuItem({image, name, price}) {
  return (
    <div className='menuItem'>
        <div className='menu-pic' style={{backgroundImage: `url(${image})`}}>
           
        </div>
        <h1>{name}</h1>
        <p>{price}</p>
    </div>
  )
}

export default MenuItem