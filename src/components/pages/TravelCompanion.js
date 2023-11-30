import React, { useEffect, useState } from "react";
import {BrowserRouter as router ,Routes, Route } from "react-router-dom";
import { fetchCity } from "../../api";
import MapPage from "../../Page/MapPage";
import Home from "../../Page/Home";

const TravelCompanion = () => {
  return (
    <router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Map/:id" element={<MapPage />} />
      </Routes>
    </router>  
  );
};

export default TravelCompanion;