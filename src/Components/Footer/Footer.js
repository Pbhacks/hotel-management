import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(true); // State to track music playback

  // Function to toggle music playback
  const toggleMusic = () => {
    setIsMusicPlaying(prevState => !prevState);
  };

  return (
    <footer className="footer" id="contact">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logos">
            <a href="#home"><img className="hmt" src="assets/logo.jpg" alt="logo" /></a>
          </div>
          <p className="section__description">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <button className="btn">Book Now</button>
        </div>
        <div className="footer__col">
          <h4>QUICK LINKS</h4>
          <ul className="footer__links">
            <li><a href="#">Browse Destinations</a></li>
            <li><a href="#">Special Offers & Packages</a></li>
            <li><a href="#">Room Types & Amenities</a></li>
            <li><a href="#">Customer Reviews & Ratings</a></li>
            <li><a href="#">Travel Tips & Guides</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>OUR SERVICES</h4>
          <ul className="footer__links">
            <li><a href="#">Concierge Assistance</a></li>
            <li><a href="#">Flexible Booking Options</a></li>
            <li><a href="#">Airport Transfers</a></li>
            <li><a href="#">Wellness & Recreation</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>CONTACT US</h4>
          <ul className="footer__links">
            <li><a href="#">rcop@info.com</a></li>
          </ul>
          <div className="footer__socials">
            <a href="#"><img src="assets/facebook.png" alt="facebook" /></a>
            <a href="#"><img src="assets/instagram.png" alt="instagram" /></a>
            <a href="#"><img src="assets/youtube.png" alt="youtube" /></a>
            <a href="#"><img src="assets/twitter.png" alt="twitter" /></a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2024 pbHACKS ~ Dr.Priyant, All rights reserved.
      </div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/97n53FxlCnU?autoplay=${isMusicPlaying ? 1 : 0}&loop=1&playlist=97n53FxlCnU`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Background Music"
      ></iframe>
    </footer>
  );
}

export default Footer;
