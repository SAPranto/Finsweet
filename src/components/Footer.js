import React, { useState } from 'react';
import './Footer.css'
import logo from '../image/Logo1.png'

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className='footer-container'>
      <img src={logo} alt="logo" width={110} height={22.28} />
      <div className='footer-menu'>
        <h4>Our Team</h4>
        <ul className='menu-list'>
          <li>About us</li>
          <li>Team</li>
          <li>What we do</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='footer-menu'>
        <h4>More</h4>
        <ul className='menu-list'>
          <li>Projects</li>
          <li>Events</li>
          <li>Donate</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className='footer-menu'>
        <h4>Connect</h4>
        <ul className='menu-list'>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Linkdin</li>
        </ul>
      </div>
      <form className='sub-form' onSubmit={handleSubmit}>
        <h3>Subscribe to get latest updates</h3>
        <input
          className="email-input"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button className="submit-input">Subscribe</button>
      </form>
    </div>
  );
}

export default Footer;
