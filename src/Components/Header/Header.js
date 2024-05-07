import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'; // Import React Icons for menu icons
import './Header.css';
import { RiIconName } from 'react-icons/ri';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav>
        <div className="nav__bar">
          <div className="logo">
            <a href="#"><img class="hmt" src="assets/logo.jpg" alt="logo" /></a>
          </div>
          <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
            {isOpen ? <RiCloseLine /> : <RiMenuLine />}
          </div>
        </div>
        <ul className={`nav__links ${isOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="btn nav__btn">Book Now</button>
      </nav>
      <div className="section__container header__container" id="home">
        <p>Simple - Unique - Friendly</p>
        <h1>Make Yourself At Home<br />In Our <span>Hotel</span>.</h1>
      </div>
    </header>
  );
}

export default Header;
