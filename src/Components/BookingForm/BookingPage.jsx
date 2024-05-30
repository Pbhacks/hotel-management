import React, { useEffect, useRef, useState } from 'react';
import './Room.css';
import { Link } from "react-router-dom";

const Room = () => {
  const roomRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = roomRef.current;
      if (element) {
        const bounding = element.getBoundingClientRect();
        setIsVisible(bounding.top >= 0 && bounding.bottom <= window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className={`section__container room__container ${isVisible ? 'fade-in' : ''}`} ref={roomRef}>
      <Link to="/" className="button-40">Home</Link>
        <div className="room__header">
          <p className="section__subheader">OUR LIVING ROOM</p>
          <h2 className="section__header">The Most Memorable Rest Time Starts Here.</h2><br></br>
        </div>
        <div className="room__grid">
          <div className="room__card">
            <div className="room__card__image">
              <img src="assets/room-1.jpg" alt="Deluxe Ocean View" />
              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>
            <div className="room__card__details">
              <h4>Deluxe Ocean View</h4>
              <p>Bask in luxury with breathtaking ocean views from your private suite.</p>
              <h5>Starting from <span>$299/night</span></h5>
              <button className="btn">Book Now</button>
            </div>
          </div>
          <div className="room__card">
            <div className="room__card__image">
              <img src="assets/room-2.jpg" alt="Superior Suite" />
              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>
            <div className="room__card__details">
              <h4>Superior Suite</h4>
              <p>Enjoy a spacious suite with a private balcony and stunning views.</p>
              <h5>Starting from <span>$199/night</span></h5>
              <button className="btn">Book Now</button>
            </div>
          </div>
          <div className="room__card">
            <div className="room__card__image">
              <img src="assets/room-3.jpg" alt="Executive Suite" />
              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>
            <div className="room__card__details">
              <h4>Executive Suite</h4>
              <p>Indulge in the finest amenities with a spacious living area.</p>
              <h5>Starting from <span>$399/night</span></h5>
              <button className="btn">Book Now</button>
            </div>
          </div>
          <div className="room__card">
            <div className="room__card__image">
              <img src="assets/room-4.jpg" alt="Presidential Suite" />
              <div className="room__card__icons">
                <span><i className="ri-heart-fill"></i></span>
                <span><i className="ri-paint-fill"></i></span>
                <span><i className="ri-shield-star-line"></i></span>
              </div>
            </div>
            <div className="room__card__details">
              <h4>Presidential Suite</h4>
              <p>Experience unparalleled luxury in our top-tier suite.</p>
              <h5>Starting from <span>$599/night</span></h5>
              <button className="btn">Book Now</button>
            </div>
          </div>
        </div>
      </section>
      {/* Additional content below */}
      <section className="section__container info__container">
        
        <h2>Why Choose Us</h2>
        <p>We offer the best accommodations with top-notch facilities and breathtaking views. Our dedicated staff ensures that your stay is comfortable and memorable. Here are some reasons to choose our hotel:</p>
        <ul>
          <li>Luxurious and spacious rooms</li>
          <li>Prime locations with stunning views</li>
          <li>24/7 customer service</li>
          <li>High-speed internet</li>
          <li>World-class amenities</li>
        </ul>
      </section>
      <section className="section__container contact__container">
        <h2>Contact Us</h2>
        <p>Have any questions or need assistance? Feel free to reach out to us. We're here to help you 24/7.</p>
        <form className="contact__form">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit" className="btn" >Send Message</button>
        </form>
      </section>
    </>
  );
}

export default Room;
