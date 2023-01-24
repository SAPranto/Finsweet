import React from 'react'
import logo from '../image/Logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="logo" width={130} height={26.33} />
      </div>
        <ul className='menu'>
            <li>Home</li>
            <li>About us</li>
            <li>What We Do</li>
            <li>Media</li>
            <li>Contact</li>
            <li>
            <button className='blk-btn'>Donate</button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar