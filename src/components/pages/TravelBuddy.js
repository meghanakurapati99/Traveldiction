import React, { useState, useEffect } from 'react';
import ItineraryPost from './ItineraryPost';
import PostCreation from './PostCreation';
import './TravelBuddy.css'; // Ensure the CSS file path is correct

function TravelBuddy() {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    // Assuming '/api/itineraries' is your endpoint for fetching itineraries
    fetch('/api/itineraries')
      .then(response => response.json())
      .then(data => setItineraries(data));
  }, []);

  const addItinerary = (newItinerary) => {
    setItineraries(prev => [...prev, newItinerary]);
  };

  return (
    <div className="travel-buddy-container">
      <h2 className="travel-buddy-title">Find a Travel Buddy</h2>
      <p className="travel-buddy-description">
        Share your travel plans, connect with fellow travelers, and explore the world together!
      </p>
      <PostCreation onAddItinerary={addItinerary} />
      {itineraries.map((itinerary, index) => (
        <ItineraryPost key={index} itinerary={itinerary} />
      ))}
    </div>
  );
}

export default TravelBuddy;
