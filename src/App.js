import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import TravelCompanion from "./components/pages/TravelCompanion";
import SignUp from "./components/pages/SignUp";
import CreateAccount from './components/pages/CreateAccount';
import Destination from "./components/pages/Destination";
import TravelBuddy from "./components/pages/TravelBuddy"; 
import ScrollToTop from "./components/ScrollToTop";
import PaymentForm from "./components/pages/PaymentForm";
import CurrencyConverter from "./components/pages/CurrencyConverter";
import MapPage from "./Page/MapPage";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/TravelCompanion" element={<TravelCompanion />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/services/activity" element={<Destination />} />
          <Route path="/Map/:id" element={<MapPage />} />
          <Route path="/TravelBuddy" element={<TravelBuddy />} /> 
          <Route path='/destination' element={<Destination />} />
          <Route path='/PaymentForm' element={<PaymentForm price={location.state?.price} />} />
          <Route path='/CurrencyConverter' element={<CurrencyConverter />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
