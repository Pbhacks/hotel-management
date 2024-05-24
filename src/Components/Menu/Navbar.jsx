import React, { useState } from 'react';
import Gallery from "./Gallery";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleOpenNav = () => {
    setIsNavVisible(true);
  };

  const handleCloseNav = () => {
    setIsNavVisible(false);
  };

  const scrollToCategory = (category) => {
    const categoryElement = document.getElementById(category.replace(/\s+/g, ''));
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: 'smooth' });
      const categoryTitle = categoryElement.querySelector('.category-title');
      categoryTitle.click();
    }
  };

  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '250px',
    height: '100vh',
    transform: isNavVisible ? 'translateX(0)' : 'translateX(-250px)',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 1000,
  };

  const navBlackStyles = {
    ...navStyles,
    backgroundColor: 'rgb(60,14,175)',
 
    maxWidth: '480px',
    minWidth: '320px',
    transitionDelay: isNavVisible ? '0s' : '0.4s',
  };

  const navRedStyles = {
    ...navStyles,
    width: '95%',
    backgroundColor: 'rgb(229, 9, 20)',
    transitionDelay: isNavVisible ? '0.2s' : '0s',
  };

  const navWhiteStyles = {
    ...navStyles,
    backgroundColor:'rgb(34, 31, 31)',
    width: '95%',
    padding: '40px',
    position: 'relative',
    transitionDelay: isNavVisible ? '0.4s' : '0s',
  };

  const closeButtonStyles = {
    opacity: 0.3,
    position: 'absolute',
    top: '20px',
    right: '20px',
  };

  const listItemStyles = {
    margin: '20px 0',
  };

  const linkStyles = {
    color: 'rgb(256,256,256)',
    fontSize: '21px',
    
    textDecoration: 'none',
    textTransform: 'uppercase',
  };

  const subListStyles = {
    listStyleType: 'none',
    paddingLeft: '20px',
  };

  const openBtnStyles = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '24px',
    position: 'fixed',
    top: '20px',
    left: '20px',
    cursor: 'pointer',
    zIndex: 1001,
    display: isNavVisible ? 'none' : 'block', // Add this line
  };

  return (
    <div>
      {!isNavVisible && ( // Add this condition
        <button className="nav-btn open-btn" onClick={handleOpenNav} style={openBtnStyles}>
          <i className="fas fa-bars"></i>
        </button>
      )}

      <div style={navBlackStyles}>
        <div style={navRedStyles}>
          <div style={navWhiteStyles}>
            <button className="nav-btn close-btn" onClick={handleCloseNav} style={closeButtonStyles}>
              <i className="fas fa-times"></i>
            </button>
            

            <ul className="list" style={{ listStyleType: 'none', padding: 0 , paddingTop:'50px' }}>
              <li style={listItemStyles}>
                <a style={linkStyles} href="#Indian" onClick={() => scrollToCategory('Indian')}>
                  Indian
                </a>
              </li>
              <li style={listItemStyles}>
                <a style={linkStyles} href="#Continental" onClick={() => scrollToCategory('Continental')}>
                  Continental
                </a>
              </li>
              <li style={listItemStyles}>
                <a style={linkStyles} href="#Asian" onClick={() => scrollToCategory('Asian')}>
                  Asian
                </a>
              </li>
              <li style={listItemStyles}>
                <a style={linkStyles} href="#Beverages" onClick={() => scrollToCategory('Beverages')}>
                  Beverages
                </a>
              </li>
              <li style={listItemStyles}>
                <a style={linkStyles} href="#Deserts" onClick={() => scrollToCategory('Deserts')}>
                  Deserts
                </a>
              </li>
              <li style={listItemStyles}>
                <a style={linkStyles} href="#Starters" onClick={() => scrollToCategory('Starters')}>
                  Starters
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Gallery />
    </div>
  );
};

export default Navbar;