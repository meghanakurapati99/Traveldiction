import React, { useState } from 'react';

function FindTravelBuddy() {
  // Dummy members data
  const members = [
    { id: 1, name: 'FrostyDee', lastActive: '2 hours, 44 minutes ago', imageSrc: 'path_to_image' },
    { id: 2, name: 'ContractorDan', lastActive: '2 hours, 48 minutes ago', imageSrc: 'path_to_image' },
    // ... add more members
  ];

  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    // Logic to filter or fetch members based on the destination
  };

  return (
    <div className="travel-buddy-page">
      <h1>Find a travel buddy</h1>
      <p>All Members {members.length}</p>
      
      <div className="filter-section">
        <h3>FILTER</h3>
        <div className="input-group">
          <label>Going to</label>
          <input 
            type="text" 
            placeholder="Where are you going to?" 
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
      
      <div className="members-section">
        {members.map(member => (
          <div key={member.id} className="member-card">
            <img src={member.imageSrc} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.lastActive}</p>
          </div>
        ))}
      </div>
      
      <div className="sidebar">
        <h3>MEMBERS</h3>
        <ul>
          <li>Newest</li>
          <li>Active</li>
          <li>Popular</li>
          {/* Add more sort or filter options if needed */}
        </ul>
      </div>
    </div>
  );
}

export default FindTravelBuddy;
