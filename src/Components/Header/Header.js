import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'; 
import './Header.css';


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
            <a href="#"><img className="hmt" src="assets/logo.jpg" alt="logo" /></a>
          </div>
          <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
            {isOpen ? <RiCloseLine /> : <RiMenuLine />}
          </div>
        </div>
        <ul className={`nav__links ${isOpen ? 'open' : ''}`}>

          <li><NavLink to="/">Home</NavLink></li>
          <li><a href="#about">About</a></li>
          <li><NavLink to="/ServicePage">Services</NavLink></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact"><button id="nb1">Music</button></a></li>
          <li><NavLink to="/ProfileSettings">Settings</NavLink></li>
        </ul>
        <button className="btn nav__btn"><NavLink to={"/Login"}>Login</NavLink></button>
        
      </nav>
      <div className="section__container header__container" id="home">
        <p>Simple - Unique - Friendly</p>
        <h1>Make Yourself At Home<br />In Our <span>Hotel</span>.</h1>
      </div>
    </header>
    
  );
}

export default Header;
