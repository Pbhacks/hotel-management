import React from "react";
import "./App.css"; // Import your CSS file
import Header from "./Components/Header/Header";
import BookingForm from "./Components/BookingForm/BookingForm";
import About from "./Components/About/About";
import Room from "./Components/Room/Room";
import Service from "./Components/Service/Service";
import Explore from "./Components/Explore/Explore";
import Footer from "./Components/Footer/Footer";

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

export default App;
