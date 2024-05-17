import React from 'react';
import './App.css'; // Import your CSS file
import Header from './Components/Header/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ServicePage from './Components/ServicePage/ServicePage';
import BookingForm from './Components/BookingForm/BookingForm';
import About from './Components/About/About';
import Room from './Components/Room/Room';
import Service from './Components/Service/Service';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';
import Food from  './Components/Food/Food';
import Navbar from './Components/Menu/Navbar';
import LoginForm from './Components/Login/LoginForm';
import ProfileSettings from './Components/ProfileSettings/ProfileSettings';
import Gallery from './Components/Menu/Gallery';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       
        <Routes>
          <Route path="/ServicePage" element={<ServicePage />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/ProfileSettings" element={<ProfileSettings />} />
          <Route path="/" element={
            <> 
              <Header />
              <BookingForm />
              <About />
              <Room />
              <Service />
              <Explore />
               <Food />
              <Footer />
            </>
          } />
         <Route path="/Menu" element={<Navbar />} />
        </Routes>
      </div>
    </BrowserRouter>
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
