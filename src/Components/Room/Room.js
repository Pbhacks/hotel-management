import React, { useEffect, useRef, useState } from "react";
import "./Room.css";

const Room = () => {
  const roomRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = roomRef.current;
      if (element) {
        const bounding = element.getBoundingClientRect();
        setIsVisible(
          bounding.top >= 0 && bounding.bottom <= window.innerHeight
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`section__container room__container ${
        isVisible ? "fade-in" : ""
      }`}
      ref={roomRef}
    >
      <div className="room__header">
        <p className="section__subheader">OUR LIVING ROOM</p>
        <h2 className="section__header">
          The Most Memorable Rest Time Starts Here.
        </h2>
        <br></br>
      </div>
      <div className="room__grid">
        <div className="room__card">
          <div className="room__card__image">
            <img src="assets/room-1.jpg" alt="room" />
            <div className="room__card__icons">
              <span>
                <i className="ri-heart-fill"></i>
              </span>
              <span>
                <i className="ri-paint-fill"></i>
              </span>
              <span>
                <i className="ri-shield-star-line"></i>
              </span>
            </div>
          </div>
          <div className="room__card__details">
            <h4>Deluxe Ocean View</h4>
            <p className="p1">
              Bask in luxury with breathtaking ocean views from your private
              suite.
            </p>
            <h5>
              Starting from <span>$299/night</span>
            </h5>
            <button className="btn">Book Now</button>
          </div>
        </div>
        <div className="room__card">
          <div className="room__card__image">
            <img src="assets/room-2.jpg" alt="room" />
            <div className="room__card__icons">
              <span>
                <i className="ri-heart-fill"></i>
              </span>
              <span>
                <i className="ri-paint-fill"></i>
              </span>
              <span>
                <i className="ri-shield-star-line"></i>
              </span>
            </div>
          </div>
          <div className="room__card__details">
            <h4>Superior Suite</h4>
            <p>
              Enjoy a spacious suite with a private balcony and stunning views.
            </p>
            <h5>
              Starting from <span>$199/night</span>
            </h5>
            <button className="btn">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Room;
