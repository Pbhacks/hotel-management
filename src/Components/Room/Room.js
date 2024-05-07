import React from 'react';
import './Room.css';
const Room = () => {
  return (
    <section className="section__container room__container">
      <p className="section__subheader">OUR LIVING ROOM</p>
      <h2 className="section__header">The Most Memorable Rest Time Starts Here.</h2>
      <div className="room__grid">
        <div className="room__card">
          <div className="room__card__image">
            <img src="assets/room-1.jpg" alt="room" />
            <div className="room__card__icons">
              <span><i className="ri-heart-fill"></i></span>
              <span><i className="ri-paint-fill"></i></span>
              <span><i className="ri-shield-star-line"></i></span>
            </div>
          </div>
          <div className="room__card__details">
            <h4>Deluxe Ocean View</h4>
            <p>
              Bask in luxury with breathtaking ocean views from your private
              suite.
            </p>
            <h5>Starting from <span>$299/night</span></h5>
            <button className="btn">Book Now</button>
          </div>
        </div>
        {/* Repeat similar room cards for other room types */}
      </div>
    </section>
  );
}

export default Room;
