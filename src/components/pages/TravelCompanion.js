import React from 'react';
import Header from './Header';
import WelcomeSection from './WelcomeSection';
import './TravelCompanion.css';

function TravelCompanion() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <WelcomeSection />

      </main>
    </div>
  );
}

export default TravelCompanion;
