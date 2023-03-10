import React from 'react'
import './Banner.css'

const Banner = (props) => {
  return (
    <>
    <div className='bnr-container'>
      <span className='border-left'></span>
    <div className='banner'>
        <h3>{props.title}</h3>
      <h1>{props.subtitle}</h1>
      <p>{props.text}</p>
      <button className='grn-btn'>Donate now</button>
    </div>
    <div className='img-container'>
      <img className='image' src={props.image} alt={props.title} width={480} height={384} />
    </div>
    </div>
    </>
  )
}

export default Banner
