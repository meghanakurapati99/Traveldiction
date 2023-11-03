import React from 'react';

import freeForEveryoneImg from '../../../public/images/travel-buddies-free-social-network.jpg';
import findTravelBuddyImg from '../../../public/images/travel-buddies-travel-advice.jpg';
import askTheWallImg from '../../../public/images/find_a_travel_partner.jpg';

function FeaturesSection() {
  return (
    <div className="features-section">

      <div className="feature-card">
        <img src={freeForEveryoneImg} alt="Travel buddies sharing a moment" />
        <h3>free for everyone</h3>
        <p>Travel Buddies is 100% free and run by those who've been there and done that 😊</p>
      </div>

      <div className="feature-card">
        <img src={findTravelBuddyImg} alt="Friends sharing a drink" />
        <h3>find a travel buddy</h3>
        <p>Find a travel partner for your upcoming trip and make friends before you even leave.</p>
      </div>

      <div className="feature-card">
        <img src={askTheWallImg} alt="Person overlooking ancient structures" />
        <h3>ask the wall</h3>
        <p>Got a travel question? Put it on the wall and ask the community for advice.</p>
      </div>

    </div>
  );
}

export default FeaturesSection;
