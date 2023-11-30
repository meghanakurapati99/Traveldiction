import React from 'react';
import './TravelBuddy.css';

function ItineraryPost({ itinerary }) {
  return (
    <div className="itinerary-post">
      <h3>{itinerary.title}</h3>
      <p>{itinerary.description}</p>
      {/* Additional details */}
    </div>
  );
}

export default ItineraryPost;
