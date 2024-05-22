import React, { Component } from "react";
import Gallery from "./Gallery";
import "./NavbarStyles.css";
import { NavLink } from "react-router-dom";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
  class Navbar extends Component {
    state = { clicked: false };
   
  
    
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  scrollToCategory = (category) => {
    const categoryElement = document.getElementById(category.replace(/\s+/g, ''));
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: 'smooth' });
      const categoryTitle = categoryElement.querySelector('.category-title');
      categoryTitle.click();
    }
  };
    render(){
    return(
        <>
            <nav>
            
               <a href="index.html">
                <svg id="logo-15" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" class="ccustom" fill="#17CF97"></path>
                     <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" class="ccustom" fill="#17CF97"></path>
                     <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" class="ccustom" fill="#17CF97"></path>
                     <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" class="ccustom" fill="#17CF97"></path>
                </svg>
               </a>

               <div>
               <ul id="navbar" className={this.state.clicked ? "navbar active" : "navbar"} >
              <li>
              <NavLink className='active' to="/">Home</NavLink>
              </li>
              <li>
                <a href="#Indian" onClick={() => this.scrollToCategory('Indian')}>
                  Indian
                </a>
              </li>
              <li>
                <a href="#Continental" onClick={() => this.scrollToCategory('Continental')}>
                  Continental
                </a>
              </li>
              <li>
                <a href="#Asian" onClick={() => this.scrollToCategory('Asian')}>
                  Asian
                </a>
              </li>
              <li>
                <a href="#Beverages" onClick={() => this.scrollToCategory('Beverages')}>
                  Beverages
                </a>
              </li>
              <li>
                <a href="#Deserts" onClick={() => this.scrollToCategory('Deserts')}>
                  Deserts
                </a>
              </li>
              <li>
                <a href="#Starters" onClick={() => this.scrollToCategory('Starters')}>
                  Starters
                </a>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
        <Gallery />
      </>
    );
  }
}

export default Navbar;