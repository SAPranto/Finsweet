import React, { useState } from 'react'
import logo from '../image/Logo.png'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [activeLink, setActiveLink] = useState("home")

  const handleClick = (link) => {
    setActiveLink(link)
  }

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="logo" width={130} height={26.33} />
      </div>
        <ul className='menu'>
            {props.navItems.map((item, index) => (
                <li key={index} className={activeLink === item.link ? "active" : ""}>
                    <Link to={item.link} onClick={() => handleClick(item.link)}>{item.title}</Link>
                </li>
            ))}
            <li>
                <button className='blk-btn'>Donate</button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
