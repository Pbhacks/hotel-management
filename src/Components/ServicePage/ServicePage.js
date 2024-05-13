import React from "react";
import "./ServicePage.css";

const ServicePage = () => {
  return (
    <div className="servicePage">
    <section className="service1" id="Service0">
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        nulla vitae laoreet augue. Donec consectetur elit nec leo rutrum
        placerat. Nulla facilisi eros in odio gravida blandit. Aenean eu ipsum
        quam. Maecenas euismod magna eu consectetur laoreet.
      </p>
      <div className="services__container">
        <div className="service1">
          <h3>Spa Treatments</h3>
          <p>
            Relax and rejuvenate with our luxurious spa treatments designed to
            melt away stress and leave you feeling refreshed.
          </p>
        </div>
        <div className="service2">
          <h3>Fine Dining</h3>
          <p>
            Indulge in exquisite culinary experiences at our award-winning
            restaurants, featuring gourmet cuisine and impeccable service.
          </p>
        </div>
        <div className="service3">
          <h3>Fitness Center</h3>
          <p>
            Maintain your fitness routine with our state-of-the-art fitness
            center, equipped with the latest cardio and weight training
            equipment.
          </p>
        </div>
        {/* Add more services as needed */}
      </div>
    </section>
    </div> 
  );
};

export default ServicePage;
