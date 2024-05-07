import React from 'react';
import './Service.css';
const Service = () => {
  return (
    <section className="section__container service__container" id="service">
      <div className="service__content">
        <p className="section__subheader">SERVICES</p>
        <h2 className="section__header">Strive Only For The Best.</h2>
        <ul className="service__list">
          <li>
            <span><i className="ri-shield-star-line"></i></span>
            High Class Security
          </li>
          <li>
            <span><i className="ri-24-hours-line"></i></span>
            24 Hours Room Service
          </li>
          <li>
            <span><i className="ri-headphone-line"></i></span>
            Conference Room
          </li>
          <li>
            <span><i className="ri-map-2-line"></i></span>
            Tourist Guide Support
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Service;
