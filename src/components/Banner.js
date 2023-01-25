import React from 'react'
import './Banner.css'
import image from '../image/Image1.png'

const Banner = () => {
  return (
    <>
    <div className='bnr-container'>
      <span className='border-left'></span>
    <div className='banner'>
        <h3>Donate</h3>
      <h1>Making a donation for nature</h1>
      <p>When you donate, you’re supporting effective solutions to big environmental challenges—an investment in the future of our planet.</p>
      <button className='grn-btn'>Donate now</button>
    </div>
      <img className='image' src={image} alt="Donatation" width={480} height={384} />
    </div>
    </>
  )
}

export default Banner