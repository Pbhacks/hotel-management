import React, { useState, useEffect } from 'react';
import './ServicePage.css'; // Import CSS file

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: 'Imperial Views', content: 'Enjoying the beauty of scenery across your room!' },
    { title: 'Awesome Play Stadium', content: 'Enjoy the exercise force by playing games at stadium or Games corner instead of GYMS.' },
    { title: 'Football and activities', content: 'Different Sports Challenges await the trail -->' },
    { title: 'RoofTop Dinner', content: 'After a hustle of the day its time for music & ? Yes, Dinner at RoofTop' },
    { title: 'Extravagant Food challenges', content: 'Delve into the amazing aromas and food dishes across your habitat.' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'current' : ''}`}>
          <div className="content">
            <h1>{slide.title}</h1>
            <p>{slide.content}</p>
          </div>
        </div>
      ))}
      <div className="buttons">
        <button id="prev" onClick={prevSlide}><i className="fas fa-arrow-left"></i></button>
        <button id="next" onClick={nextSlide}><i className="fas fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default Slider;
