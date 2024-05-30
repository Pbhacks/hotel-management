import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS file
import './BookingForm.css';
import { NavLink } from 'react-router-dom';
import BookingPage from './BookingPage';

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guest, setGuest] = useState('');

  const handleCheckIn = () => {
    // Implement functionality to handle check-in
    console.log('Checked In:', checkInDate, 'Guest:', guest);
  };

  return (
    <section className="section__container booking__container">
      <form action="/" className="booking__form">
        <div className="input__group">
          <span><i className="ri-calendar-2-fill"></i></span>
          <div>
            <label htmlFor="check-in">CHECK-IN</label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Check In"
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />
          </div>
        </div>
        <div className="input__group">
          <span><i className="ri-calendar-2-fill"></i></span>
          <div>
            <label htmlFor="check-out">CHECK-OUT</label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Check Out"
              dateFormat="dd/MM/yyyy"
              minDate={checkInDate || new Date()}
            />
          </div>
        </div>
        <div className="input__group">
          <span><i className="ri-user-fill"></i></span>
          <div>
            <label htmlFor="guest">GUEST</label>
            <input
              type="text"
              placeholder="Guest"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
            />
          </div>
        </div>
        <div className="input__group">
          
        </div>
        <div className="input__group ">
          
        <NavLink to={"/BookingPage"} ><button className="btn" id="apk">CONTINUE</button></NavLink>
        </div>
      </form>

         
      
    </section>
  );
}

export default BookingForm;
