import React, { useEffect, useRef, useState } from 'react';
import './Food.css';

const Food = () => {
  const foodRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = foodRef.current;
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
    <section className={`section__container food__container ${isVisible ? 'fade-in' : ''}`} ref={foodRef}>
      <div className="food__header">
        <p className="section__subheader">OUR MENU</p>
        <h2 className="section__header">Explore Our Delicious Dishes</h2>
      </div>
      <div className="food__slider">
        <div className="food__grid">
          <div className="food__card">
            <div className="food__card__image">
              <img src="https://source.unsplash.com/300x200/?spaghetti" alt="food" />
            </div>
            <div className="food__card__details">
              <h4 className='rushabh'>Spaghetti Carbonara</h4>
              <p className='rushabh'>Classic Italian pasta dish with bacon, eggs, and parmesan cheese.</p>
              <h5 className='rushabh'>$12.99</h5>
              <button className="btn">Order Now</button>
            </div>
          </div>
          <div className="food__card">
            <div className="food__card__image">
              <img src="https://source.unsplash.com/300x200/?pizza" alt="food" />
            </div>
            <div className="food__card__details">
              <h4 className='rushabh'>Margherita Pizza</h4>
              <p className='rushabh'>Traditional Italian pizza topped with fresh tomatoes, mozzarella, and basil.</p>
              <h5 className='rushabh'>$10.99</h5>
              <button className="btn">Order Now</button>
            </div>
          </div>
          <div className="food__card">
            <div className="food__card__image">
              <img src="https://source.unsplash.com/300x200/?salmon" alt="food" />
            </div>
            <div className="food__card__details">
              <h4 className='rushabh'>Grilled Salmon</h4>
              <p className='rushabh'>Healthy and flavorful grilled salmon served with steamed vegetables.</p>
              <h5 className='rushabh'>$16.99</h5>
              <button className="btn">Order Now</button>
            </div>
          </div>
          <div className="food__card">
            <div className="food__card__image">
              <img src="https://source.unsplash.com/300x200/?salad" alt="food" />
            </div>
            <div className="food__card__details">
              <h4 className='rushabh'>Chicken Caesar Salad</h4>
              <p className='rushabh'>Classic salad with grilled chicken, romaine lettuce, croutons, and Caesar dressing.</p>
              <h5 className='rushabh'>$8.99</h5>
              <button className="btn">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Food;
