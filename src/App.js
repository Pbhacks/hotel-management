import React from 'react';
import './App.css'; // Import your CSS file
import Header from './Components/Header/Header';
import BookingForm from './Components/BookingForm/BookingForm';
import About from './Components/About/About';
import Room from './Components/Room/Room';
import Service from './Components/Service/Service';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BookingForm />
      <About />
      <Room />
      <Service />
      <Explore />
      <Footer />
    
    </div>
  );
}
 /*<iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/97n53FxlCnU?autoplay=1&loop=1&playlist=97n53FxlCnU"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="Background Music"
      ></iframe>*/
export default App;
